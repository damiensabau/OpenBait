import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const payload = verifyToken(token);

    if (!payload) {
      return NextResponse.json(
        { error: 'Token invalide' },
        { status: 401 }
      );
    }

    // Vérifier le rôle (uniquement ADMIN et MODERATOR)
    if (payload.role !== 'ADMIN' && payload.role !== 'MODERATOR') {
      return NextResponse.json(
        { error: 'Accès refusé' },
        { status: 403 }
      );
    }

    // Récupérer tous les cas
    const cases = await prisma.case.findMany({
      include: {
        reporter: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: {
        createdAt: 'desc'
      }
    });

    return NextResponse.json({
      cases
    }, { status: 200 });

  } catch (error: any) {
    console.error('Erreur lors de la récupération des cas:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    // Vérifier l'authentification
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Non authentifié' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    const payload = verifyToken(token);

    if (!payload) {
      return NextResponse.json(
        { error: 'Token invalide' },
        { status: 401 }
      );
    }

    // Récupérer les données du cas
    const body = await request.json();
    const {
      companyName,
      productName,
      category,
      licenseInitial,
      licenseFinal,
      changeDate,
      website,
      description,
      legalAnalysis,
      communityReaction,
      sources
    } = body;

    // Validation
    if (!companyName || !productName || !category) {
      return NextResponse.json(
        { error: 'Champs obligatoires manquants' },
        { status: 400 }
      );
    }

    // Créer le cas avec statut selon le rôle
    const status = (payload.role === 'ADMIN' || payload.role === 'MODERATOR') ? 'APPROVED' : 'PENDING';

    const newCase = await prisma.case.create({
      data: {
        companyName,
        productName,
        category,
        licenseInitial: licenseInitial || '',
        licenseFinal: licenseFinal || '',
        changeDate: changeDate || '',
        website: website || '',
        description: description || '',
        legalAnalysis: legalAnalysis || '',
        communityReaction: communityReaction || '',
        sources: JSON.stringify(sources || []), // Convertir en JSON string
        status,
        reporterId: payload.userId
      }
    });

    return NextResponse.json({
      message: 'Cas créé avec succès',
      case: newCase
    }, { status: 201 });

  } catch (error: any) {
    console.error('Erreur lors de la création du cas:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
