import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Récupérer un cas par ID (API publique)
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const caseData = await prisma.case.findUnique({
      where: {
        id
      },
      include: {
        reporter: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true
          }
        }
      }
    });

    if (!caseData) {
      return NextResponse.json(
        { error: 'Cas non trouvé' },
        { status: 404 }
      );
    }

    return NextResponse.json(caseData, { status: 200 });

  } catch (error: any) {
    console.error('Erreur lors de la récupération du cas:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
