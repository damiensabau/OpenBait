import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET - Récupérer tous les cas approuvés (API publique)
export async function GET(request: NextRequest) {
  try {
    // Récupérer tous les cas approuvés, triés par reportCount
    const cases = await prisma.case.findMany({
      where: {
        status: 'APPROVED'
      },
      include: {
        reporter: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      },
      orderBy: [
        { reportCount: 'desc' },
        { createdAt: 'desc' }
      ]
    });

    return NextResponse.json({
      cases,
      total: cases.length
    }, { status: 200 });

  } catch (error: any) {
    console.error('Erreur lors de la récupération des cas:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
