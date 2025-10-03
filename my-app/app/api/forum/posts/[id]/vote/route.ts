import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

export async function POST(
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

    const body = await request.json();
    const { value } = body;

    // Validation
    if (value !== 1 && value !== -1) {
      return NextResponse.json(
        { error: 'La valeur du vote doit être 1 ou -1' },
        { status: 400 }
      );
    }

    // Vérifier si le post existe
    const post = await prisma.post.findUnique({
      where: { id: params.id }
    });

    if (!post) {
      return NextResponse.json(
        { error: 'Post non trouvé' },
        { status: 404 }
      );
    }

    // Vérifier si l'utilisateur a déjà voté
    const existingVote = await prisma.postVote.findUnique({
      where: {
        userId_postId: {
          userId: payload.userId,
          postId: params.id
        }
      }
    });

    if (existingVote) {
      // Si le vote est le même, on le retire
      if (existingVote.value === value) {
        await prisma.$transaction([
          prisma.postVote.delete({
            where: { id: existingVote.id }
          }),
          prisma.post.update({
            where: { id: params.id },
            data: {
              upvotes: value === 1 ? { decrement: 1 } : undefined,
              downvotes: value === -1 ? { decrement: 1 } : undefined
            }
          })
        ]);

        return NextResponse.json({
          message: 'Vote retiré',
          action: 'removed'
        }, { status: 200 });
      } else {
        // Si le vote est différent, on le change
        await prisma.$transaction([
          prisma.postVote.update({
            where: { id: existingVote.id },
            data: { value }
          }),
          prisma.post.update({
            where: { id: params.id },
            data: {
              upvotes: value === 1 ? { increment: 1 } : { decrement: 1 },
              downvotes: value === -1 ? { increment: 1 } : { decrement: 1 }
            }
          })
        ]);

        return NextResponse.json({
          message: 'Vote modifié',
          action: 'changed'
        }, { status: 200 });
      }
    } else {
      // Créer un nouveau vote
      await prisma.$transaction([
        prisma.postVote.create({
          data: {
            value,
            userId: payload.userId,
            postId: params.id
          }
        }),
        prisma.post.update({
          where: { id: params.id },
          data: {
            upvotes: value === 1 ? { increment: 1 } : undefined,
            downvotes: value === -1 ? { increment: 1 } : undefined
          }
        })
      ]);

      return NextResponse.json({
        message: 'Vote enregistré',
        action: 'created'
      }, { status: 200 });
    }

  } catch (error: any) {
    console.error('Erreur lors du vote:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
