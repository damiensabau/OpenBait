import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';
import { awardReputation, REPUTATION_REWARDS } from '@/lib/reputation';
import { notifyReply } from '@/lib/notifications';

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
    const { content, parentId } = body;

    // Validation
    if (!content || content.trim().length < 10) {
      return NextResponse.json(
        { error: 'Le commentaire doit contenir au moins 10 caractères' },
        { status: 400 }
      );
    }

    // Vérifier si le post existe
    const post = await prisma.post.findUnique({
      where: { id }
    });

    if (!post) {
      return NextResponse.json(
        { error: 'Post non trouvé' },
        { status: 404 }
      );
    }

    // Si parentId est fourni, vérifier que le commentaire parent existe
    if (parentId) {
      const parentComment = await prisma.comment.findUnique({
        where: { id: parentId }
      });

      if (!parentComment) {
        return NextResponse.json(
          { error: 'Commentaire parent non trouvé' },
          { status: 404 }
        );
      }

      if (parentComment.postId !== id) {
        return NextResponse.json(
          { error: 'Le commentaire parent n\'appartient pas à ce post' },
          { status: 400 }
        );
      }
    }

    // Créer le commentaire
    const comment = await prisma.comment.create({
      data: {
        content: content.trim(),
        authorId: payload.userId,
        postId: id,
        parentId: parentId || null
      },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            role: true
          }
        }
      }
    });

    // Award reputation for creating a comment
    try {
      await awardReputation(
        payload.userId,
        REPUTATION_REWARDS.CREATE_COMMENT,
        'Created a comment'
      );
    } catch (error) {
      console.error('Error awarding reputation:', error);
    }

    // Send notification to the author being replied to
    try {
      let recipientId: string | null = null;
      
      if (parentId) {
        // Reply to a comment
        const parentComment = await prisma.comment.findUnique({
          where: { id: parentId },
          select: { authorId: true },
        });
        recipientId = parentComment?.authorId || null;
      } else {
        // Reply to the post
        recipientId = post.authorId;
      }

      // Don't notify if replying to yourself
      if (recipientId && recipientId !== payload.userId) {
        await notifyReply(
          recipientId,
          comment.author.name,
          parentId ? 'comment' : 'post',
          comment.id,
          `/forum/${id}`
        );
      }
    } catch (error) {
      console.error('Error sending reply notification:', error);
    }

    return NextResponse.json(comment, { status: 201 });

  } catch (error: any) {
    console.error('Erreur lors de la création du commentaire:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
