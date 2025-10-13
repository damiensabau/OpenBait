import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    // Incrémenter le nombre de vues
    await prisma.post.update({
      where: { id },
      data: { views: { increment: 1 } }
    });

    // Vérifier si l'utilisateur est authentifié (optionnel)
    let userId: string | null = null;
    const authHeader = request.headers.get('authorization');
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const payload = verifyToken(token);
      if (payload) {
        userId = payload.userId;
      }
    }

    // Récupérer le post avec l'auteur
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            email: true,
            role: true,
            reputation: true,
            badges: true,
          }
        },
        votes: userId ? {
          where: { userId },
          select: { value: true }
        } : false,
        comments: {
          include: {
            author: {
              select: {
                id: true,
                name: true,
                role: true
              }
            },
            votes: userId ? {
              where: { userId },
              select: { value: true }
            } : false,
            replies: {
              include: {
                author: {
                  select: {
                    id: true,
                    name: true,
                    role: true
                  }
                },
                votes: userId ? {
                  where: { userId },
                  select: { value: true }
                } : false
              },
              orderBy: { createdAt: 'asc' }
            }
          },
          where: {
            parentId: null // Seulement les commentaires de niveau 1
          },
          orderBy: { createdAt: 'desc' }
        }
      }
    });

    if (!post) {
      return NextResponse.json(
        { error: 'Post non trouvé' },
        { status: 404 }
      );
    }

    // Transformer les données pour inclure le vote de l'utilisateur
    const postWithUserVote = {
      ...post,
      tags: post.tags ? JSON.parse(post.tags) : [],
      author: {
        ...post.author,
        reputation: post.author.reputation || 0,
        badges: post.author.badges ? JSON.parse(post.author.badges) : [],
      },
      userVote: userId && post.votes && post.votes.length > 0 ? post.votes[0].value : null,
      votes: undefined, // Retirer le tableau votes
      comments: post.comments.map((comment: any) => ({
        ...comment,
        userVote: userId && comment.votes && comment.votes.length > 0 ? comment.votes[0].value : null,
        votes: undefined,
        replies: comment.replies.map((reply: any) => ({
          ...reply,
          userVote: userId && reply.votes && reply.votes.length > 0 ? reply.votes[0].value : null,
          votes: undefined
        }))
      }))
    };

    return NextResponse.json(postWithUserVote, { status: 200 });

  } catch (error: any) {
    console.error('Erreur lors de la récupération du post:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
