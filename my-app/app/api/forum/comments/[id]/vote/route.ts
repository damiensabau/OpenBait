import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';
import { notifyUpvote } from '@/lib/notifications';

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
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

    // Vérifier si le commentaire existe
    const comment = await prisma.comment.findUnique({
      where: { id }
    });

    if (!comment) {
      return NextResponse.json(
        { error: 'Commentaire non trouvé' },
        { status: 404 }
      );
    }

    // Vérifier si l'utilisateur a déjà voté
    const existingVote = await prisma.commentVote.findUnique({
      where: {
        userId_commentId: {
          userId: payload.userId,
          commentId: id
        }
      }
    });

    if (existingVote) {
      // Si le vote est le même, on le retire
      if (existingVote.value === value) {
        await prisma.$transaction([
          prisma.commentVote.delete({
            where: { id: existingVote.id }
          }),
          prisma.comment.update({
            where: { id },
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
          prisma.commentVote.update({
            where: { id: existingVote.id },
            data: { value }
          }),
          prisma.comment.update({
            where: { id },
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
        prisma.commentVote.create({
          data: {
            value,
            userId: payload.userId,
            commentId: id
          }
        }),
        prisma.comment.update({
          where: { id },
          data: {
            upvotes: value === 1 ? { increment: 1 } : undefined,
            downvotes: value === -1 ? { increment: 1 } : undefined
          }
        })
      ]);

      // Send notification if upvoted and not self-voting
      if (value === 1 && comment.authorId !== payload.userId) {
        try {
          // Get the post to create the link
          const fullComment = await prisma.comment.findUnique({
            where: { id },
            select: { postId: true }
          });
          
          if (fullComment) {
            await notifyUpvote(
              comment.authorId,
              'comment',
              id,
              `/forum/${fullComment.postId}#comment-${id}`
            );
          }
        } catch (error) {
          console.error('Error sending notification:', error);
        }
      }

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
