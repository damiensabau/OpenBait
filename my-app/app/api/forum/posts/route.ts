import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

// GET - Récupérer tous les posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sort = searchParams.get('sort') || 'hot';
    const category = searchParams.get('category');
    
    // Vérifier si l'utilisateur est connecté pour récupérer ses votes
    const authHeader = request.headers.get('authorization');
    let userId: string | null = null;
    
    if (authHeader && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      const payload = verifyToken(token);
      if (payload) {
        userId = payload.userId;
      }
    }

    // Construire la requête
    const where: any = {};
    if (category && category !== 'all') {
      where.category = category;
    }

    let orderBy: any = {};
    
    switch (sort) {
      case 'new':
        orderBy = { createdAt: 'desc' };
        break;
      case 'top':
        orderBy = { upvotes: 'desc' };
        break;
      case 'hot':
      default:
        // Pour "hot", on va utiliser une combinaison de score et date
        orderBy = [
          { upvotes: 'desc' },
          { createdAt: 'desc' }
        ];
        break;
    }

    const posts = await prisma.post.findMany({
      where,
      orderBy,
      include: {
        author: {
          select: {
            name: true
          }
        },
        _count: {
          select: {
            comments: true
          }
        },
        votes: userId ? {
          where: {
            userId: userId
          }
        } : false
      }
    });

    // Ajouter le vote de l'utilisateur à chaque post
    const postsWithUserVote = posts.map(post => ({
      ...post,
      userVote: userId && post.votes && post.votes.length > 0 ? post.votes[0].value : null,
      votes: undefined // Retirer le tableau votes de la réponse
    }));

    return NextResponse.json({
      posts: postsWithUserVote
    }, { status: 200 });

  } catch (error: any) {
    console.error('Erreur lors de la récupération des posts:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}

// POST - Créer un nouveau post
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

    const body = await request.json();
    const { title, content, category } = body;

    // Validation
    if (!title || !content || !category) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    if (title.length < 10) {
      return NextResponse.json(
        { error: 'Le titre doit contenir au moins 10 caractères' },
        { status: 400 }
      );
    }

    if (content.length < 20) {
      return NextResponse.json(
        { error: 'Le contenu doit contenir au moins 20 caractères' },
        { status: 400 }
      );
    }

    // Créer le post
    const post = await prisma.post.create({
      data: {
        title,
        content,
        category,
        authorId: payload.userId
      },
      include: {
        author: {
          select: {
            name: true
          }
        }
      }
    });

    return NextResponse.json({
      message: 'Post créé avec succès',
      post
    }, { status: 201 });

  } catch (error: any) {
    console.error('Erreur lors de la création du post:', error);
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
