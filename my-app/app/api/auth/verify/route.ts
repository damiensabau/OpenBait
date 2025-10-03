import { NextRequest, NextResponse } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function GET(request: NextRequest) {
  try {
    // Récupérer le token depuis l'en-tête Authorization
    const authHeader = request.headers.get('authorization');
    
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return NextResponse.json(
        { error: 'Token manquant' },
        { status: 401 }
      );
    }

    const token = authHeader.substring(7);
    
    // Vérifier le token
    const payload = verifyToken(token);

    if (!payload) {
      return NextResponse.json(
        { error: 'Token invalide' },
        { status: 401 }
      );
    }

    return NextResponse.json({
      message: 'Token valide',
      user: payload
    }, { status: 200 });

  } catch (error) {
    return NextResponse.json(
      { error: 'Erreur lors de la vérification du token' },
      { status: 500 }
    );
  }
}
