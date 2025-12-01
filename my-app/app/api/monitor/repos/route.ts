/**
 * API Route: Add Repository to Watch
 * POST /api/monitor/repos
 * 
 * Ajoute un repository à la liste de surveillance
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { GitHubLicenseMonitor } from '@/lib/license-monitor';
import { verifyToken } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    // Vérifier le token JWT
    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Token invalide' }, { status: 401 });
    }

    // Vérifier que l'utilisateur est admin/moderator
    const user = await prisma.user.findFirst({
      where: {
        id: payload.userId,
      }
    });

    if (!user || (user.role !== 'ADMIN' && user.role !== 'MODERATOR')) {
      return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
    }

    const body = await request.json();
    const { owner, name, priority = 'medium', notes } = body;

    if (!owner || !name) {
      return NextResponse.json(
        { error: 'Owner et name sont requis' },
        { status: 400 }
      );
    }

    // Vérifier si le repo existe déjà
    const existing = await prisma.watchedRepository.findFirst({
      where: {
        platform: 'github',
        owner,
        name,
      }
    });

    if (existing) {
      return NextResponse.json(
        { error: 'Ce repository est déjà surveillé', repo: existing },
        { status: 409 }
      );
    }

    // Récupérer les infos du repo depuis GitHub
    const monitor = new GitHubLicenseMonitor(process.env.GITHUB_TOKEN);
    let repoInfo;
    
    try {
      repoInfo = await monitor.getRepositoryInfo(owner, name);
    } catch (error) {
      return NextResponse.json(
        { error: 'Repository non trouvé sur GitHub' },
        { status: 404 }
      );
    }

    // Créer le watched repository
    const watchedRepo = await prisma.watchedRepository.create({
      data: {
        owner,
        name,
        platform: 'github',
        url: repoInfo.url,
        currentLicense: repoInfo.license,
        stars: repoInfo.stars,
        description: repoInfo.description,
        priority,
        addedBy: user.id,
        notes,
        isActive: true,
      }
    });

    // Lancer un scan initial immédiatement
    try {
      const changes = await monitor.monitorRepository(owner, name, watchedRepo.id);
      
      return NextResponse.json({
        success: true,
        repo: watchedRepo,
        initialScan: {
          changesDetected: changes.length,
          changes,
        }
      });
    } catch (error) {
      return NextResponse.json({
        success: true,
        repo: watchedRepo,
        initialScan: {
          error: 'Initial scan failed, will retry on next cron run',
        }
      });
    }

  } catch (error: any) {
    console.error('Error adding repository:', error);
    return NextResponse.json(
      { error: 'Erreur serveur', message: error.message },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    // Vérifier le token JWT
    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Token invalide' }, { status: 401 });
    }

    // Récupérer tous les repos surveillés
    const repos = await prisma.watchedRepository.findMany({
      orderBy: [
        { priority: 'desc' },
        { stars: 'desc' },
      ],
      include: {
        changes: {
          orderBy: { detectedAt: 'desc' },
          take: 5,
        },
      },
    });

    return NextResponse.json({ repos });

  } catch (error: any) {
    console.error('Error fetching repositories:', error);
    return NextResponse.json(
      { error: 'Erreur serveur', message: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const token = request.headers.get('Authorization')?.replace('Bearer ', '');
    
    if (!token) {
      return NextResponse.json({ error: 'Non authentifié' }, { status: 401 });
    }

    // Vérifier le token JWT
    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json({ error: 'Token invalide' }, { status: 401 });
    }

    const user = await prisma.user.findFirst({
      where: { id: payload.userId }
    });

    if (!user || user.role !== 'ADMIN') {
      return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const repoId = searchParams.get('id');

    if (!repoId) {
      return NextResponse.json({ error: 'ID requis' }, { status: 400 });
    }

    await prisma.watchedRepository.delete({
      where: { id: repoId }
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error('Error deleting repository:', error);
    return NextResponse.json(
      { error: 'Erreur serveur', message: error.message },
      { status: 500 }
    );
  }
}
