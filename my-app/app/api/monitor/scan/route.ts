/**
 * API Route: Monitor License Changes (Cron Job)
 * GET /api/monitor/scan
 * 
 * Scanne tous les repositories surveillés pour détecter les changements de licence
 * Doit être appelé par un cron job (Vercel Cron ou GitHub Actions)
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { GitHubLicenseMonitor } from '@/lib/license-monitor';
import { LicenseAlertSystem } from '@/lib/license-alert';

export async function GET(request: NextRequest) {
  try {
    // Vérifier l'authentification du cron job
    const authHeader = request.headers.get('authorization');
    const cronSecret = process.env.CRON_SECRET;

    if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const startTime = Date.now();
    const monitor = new GitHubLicenseMonitor(process.env.GITHUB_TOKEN);
    const alertSystem = new LicenseAlertSystem();

    // Récupérer tous les repos actifs
    const watchedRepos = await prisma.watchedRepository.findMany({
      where: {
        isActive: true,
        platform: 'github',
      },
      orderBy: [
        { priority: 'desc' },
        { lastChecked: 'asc' },
      ],
      take: 50, // Limiter à 50 repos par exécution pour éviter les rate limits
    });

    console.log(`Scanning ${watchedRepos.length} repositories...`);

    let totalChangesDetected = 0;
    const results: any[] = [];

    for (const repo of watchedRepos) {
      try {
        console.log(`Checking ${repo.owner}/${repo.name}...`);

        // 1. Surveiller les changements de licence
        const changes = await monitor.monitorRepository(repo.owner, repo.name, repo.id);

        // 2. Mettre à jour les infos du repo
        try {
          const repoInfo = await monitor.getRepositoryInfo(repo.owner, repo.name);
          await prisma.watchedRepository.update({
            where: { id: repo.id },
            data: {
              currentLicense: repoInfo.license,
              stars: repoInfo.stars,
              description: repoInfo.description,
              lastChecked: new Date(),
            }
          });
        } catch (error) {
          console.error(`Error updating repo info for ${repo.owner}/${repo.name}:`, error);
        }

        // 3. Traiter les changements détectés
        for (const change of changes) {
          await alertSystem.processDetectedChange(change);
          totalChangesDetected++;
        }

        results.push({
          repo: `${repo.owner}/${repo.name}`,
          changesFound: changes.length,
          status: 'success',
        });

        // Petit délai pour respecter les rate limits GitHub
        await new Promise(resolve => setTimeout(resolve, 1000));

      } catch (error: any) {
        console.error(`Error checking ${repo.owner}/${repo.name}:`, error);
        
        results.push({
          repo: `${repo.owner}/${repo.name}`,
          changesFound: 0,
          status: 'error',
          error: error.message,
        });

        // Log l'erreur dans monitoring_logs
        await prisma.monitoringLog.create({
          data: {
            targetType: 'repository',
            targetId: repo.id,
            targetName: `${repo.owner}/${repo.name}`,
            status: 'error',
            errorMessage: error.message,
            changesFound: 0,
          }
        });
      }
    }

    const duration = Date.now() - startTime;

    // Log le résultat global
    await prisma.monitoringLog.create({
      data: {
        targetType: 'batch_scan',
        targetName: `Scan of ${watchedRepos.length} repositories`,
        status: 'success',
        changesFound: totalChangesDetected,
        duration,
        metadata: JSON.stringify({
          reposScanned: watchedRepos.length,
          results,
        }),
      }
    });

    return NextResponse.json({
      success: true,
      reposScanned: watchedRepos.length,
      changesDetected: totalChangesDetected,
      duration: `${(duration / 1000).toFixed(2)}s`,
      results,
    });

  } catch (error: any) {
    console.error('Error in monitor scan:', error);
    
    return NextResponse.json(
      { error: 'Internal server error', message: error.message },
      { status: 500 }
    );
  }
}
