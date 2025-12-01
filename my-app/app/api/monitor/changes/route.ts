/**
 * API Route: Review License Changes
 * GET/POST /api/monitor/changes
 * 
 * Gère les changements de licence détectés
 */

import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { LicenseAlertSystem } from '@/lib/license-alert';
import { verifyToken } from '@/lib/auth';

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

    const user = await prisma.user.findFirst({
      where: { id: payload.userId }
    });

    if (!user || (user.role !== 'ADMIN' && user.role !== 'MODERATOR')) {
      return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
    }

    const { searchParams } = new URL(request.url);
    const status = searchParams.get('status') || 'detected';

    const changes = await prisma.licenseChange.findMany({
      where: status !== 'all' ? { status } : undefined,
      include: {
        repository: true,
      },
      orderBy: [
        { severity: 'desc' },
        { confidence: 'desc' },
        { detectedAt: 'desc' },
      ],
      take: 100,
    });

    return NextResponse.json({ changes });

  } catch (error: any) {
    console.error('Error fetching changes:', error);
    return NextResponse.json(
      { error: 'Erreur serveur', message: error.message },
      { status: 500 }
    );
  }
}

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

    const user = await prisma.user.findFirst({
      where: { id: payload.userId }
    });

    if (!user || (user.role !== 'ADMIN' && user.role !== 'MODERATOR')) {
      return NextResponse.json({ error: 'Accès refusé' }, { status: 403 });
    }

    const body = await request.json();
    const { changeId, action, createCase, reason } = body;

    if (!changeId || !action) {
      return NextResponse.json(
        { error: 'changeId et action sont requis' },
        { status: 400 }
      );
    }

    const alertSystem = new LicenseAlertSystem();

    switch (action) {
      case 'approve':
        await alertSystem.approveChange(changeId, user.id, createCase === true);
        return NextResponse.json({ 
          success: true, 
          message: createCase ? 'Change approved and case created' : 'Change approved' 
        });

      case 'reject':
        await alertSystem.rejectChange(changeId, user.id, reason);
        return NextResponse.json({ success: true, message: 'Change rejected' });

      default:
        return NextResponse.json(
          { error: 'Action invalide' },
          { status: 400 }
        );
    }

  } catch (error: any) {
    console.error('Error processing change:', error);
    return NextResponse.json(
      { error: 'Erreur serveur', message: error.message },
      { status: 500 }
    );
  }
}
