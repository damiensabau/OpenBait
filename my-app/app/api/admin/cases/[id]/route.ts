import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    const body = await request.json();
    
    // Si seulement le statut est fourni, c'est une simple approbation/rejet
    if (body.status && Object.keys(body).length === 1) {
      const { status } = body;
      
      // Validation du statut
      if (!['APPROVED', 'REJECTED', 'PENDING'].includes(status)) {
        return NextResponse.json(
          { error: 'Statut invalide' },
          { status: 400 }
        );
      }

      // Mettre à jour uniquement le statut
      const updatedCase = await prisma.case.update({
        where: { id: params.id },
        data: { status }
      });

      return NextResponse.json({
        message: 'Statut mis à jour',
        case: updatedCase
      }, { status: 200 });
    }

    // Sinon, c'est une mise à jour complète du cas
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

    // Préparer les données à mettre à jour (seulement les champs fournis)
    const updateData: any = {};
    
    if (companyName !== undefined) updateData.companyName = companyName;
    if (productName !== undefined) updateData.productName = productName;
    if (category !== undefined) updateData.category = category;
    if (licenseInitial !== undefined) updateData.licenseInitial = licenseInitial;
    if (licenseFinal !== undefined) updateData.licenseFinal = licenseFinal;
    if (changeDate !== undefined) updateData.changeDate = changeDate;
    if (website !== undefined) updateData.website = website;
    if (description !== undefined) updateData.description = description;
    if (legalAnalysis !== undefined) updateData.legalAnalysis = legalAnalysis;
    if (communityReaction !== undefined) updateData.communityReaction = communityReaction;
    if (sources !== undefined) updateData.sources = sources;

    // Mettre à jour le cas
    const updatedCase = await prisma.case.update({
      where: { id: params.id },
      data: updateData
    });

    return NextResponse.json({
      message: 'Statut mis à jour',
      case: updatedCase
    }, { status: 200 });

  } catch (error: any) {
    console.error('Erreur lors de la mise à jour du cas:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
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

    // Vérifier le rôle (uniquement ADMIN)
    if (payload.role !== 'ADMIN') {
      return NextResponse.json(
        { error: 'Seuls les administrateurs peuvent supprimer des cas' },
        { status: 403 }
      );
    }

    // Supprimer le cas
    await prisma.case.delete({
      where: { id: params.id }
    });

    return NextResponse.json({
      message: 'Cas supprimé avec succès'
    }, { status: 200 });

  } catch (error: any) {
    console.error('Erreur lors de la suppression du cas:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
