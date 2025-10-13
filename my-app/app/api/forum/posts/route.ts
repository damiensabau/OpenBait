import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';

// GET - Récupérer tous les posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const sort = searchParams.get('sort') || 'hot';
    const category = searchParams.get('category');
    const search = searchParams.get('search');
    const author = searchParams.get('author');
    const tags = searchParams.get('tags');
    
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
    
    // Recherche par texte (titre ou contenu)
    if (search) {
      where.OR = [
        { title: { contains: search, mode: 'insensitive' } },
        { content: { contains: search, mode: 'insensitive' } },
      ];
    }
    
    // Filtrer par auteur
    if (author) {
      where.authorId = author;
    }
    
    // Filtrer par tags (cherche dans le JSON)
    if (tags) {
      const tagList = tags.split(',').map(t => t.trim());
      where.AND = tagList.map(tag => ({
        tags: { contains: tag }
      }));
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
        // Les posts épinglés en premier
        orderBy = [
          { isPinned: 'desc' },
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
            id: true,
            name: true,
            reputation: true,
            badges: true,
          }
        },
        _count: {
          select: {
            comments: true,
            reactions: true,
          }
        },
        votes: userId ? {
          where: {
            userId: userId
          }
        } : false
      }
    });

    // Ajouter le vote de l'utilisateur et parser les tags/badges
    const postsWithUserVote = posts.map(post => ({
      ...post,
      tags: post.tags ? JSON.parse(post.tags) : [],
      author: {
        ...post.author,
        badges: post.author.badges ? JSON.parse(post.author.badges) : [],
      },
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
    const { title, content, category, tags } = body;

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

    // Vérifier que l'utilisateur existe toujours
    const userExists = await prisma.user.findUnique({
      where: { id: payload.userId }
    });

    if (!userExists) {
      return NextResponse.json(
        { error: 'Utilisateur introuvable. Veuillez vous reconnecter.' },
        { status: 401 }
      );
    }

    // Créer le post
    const post = await prisma.post.create({
      data: {
        title,
        content,
        category,
        tags: tags ? JSON.stringify(tags) : '[]',
        authorId: payload.userId
      },
      include: {
        author: {
          select: {
            name: true,
            reputation: true,
          }
        }
      }
    });

    // Donner des points de réputation pour la création d'un post
    await prisma.user.update({
      where: { id: payload.userId },
      data: {
        reputation: {
          increment: 5, // +5 points pour créer un post
        },
      },
    });

    return NextResponse.json({
      message: 'Post créé avec succès',
      post: {
        ...post,
        tags: tags || [],
      }
    }, { status: 201 });

  } catch (error: any) {
    console.error('Erreur lors de la création du post:', error);
    
    // Gestion d'erreur spécifique pour les contraintes de clé étrangère
    if (error.code === 'P2003') {
      return NextResponse.json(
        { error: 'Session expirée. Veuillez vous reconnecter.' },
        { status: 401 }
      );
    }
    
    return NextResponse.json(
      { error: 'Erreur serveur' },
      { status: 500 }
    );
  }
}
