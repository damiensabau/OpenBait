import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';
import { notifyReaction } from '@/lib/notifications';

// GET /api/forum/posts/[id]/reactions - Get all reactions for a post
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    
    const reactions = await prisma.postReaction.findMany({
      where: { postId: id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
          },
        },
      },
      orderBy: { createdAt: 'desc' },
    });

    // Group by emoji and count
    const grouped = reactions.reduce((acc: any, reaction) => {
      if (!acc[reaction.emoji]) {
        acc[reaction.emoji] = {
          emoji: reaction.emoji,
          count: 0,
          users: [],
        };
      }
      acc[reaction.emoji].count++;
      acc[reaction.emoji].users.push(reaction.user);
      return acc;
    }, {});

    return NextResponse.json({
      reactions: Object.values(grouped),
      userReactions: reactions.map(r => ({ emoji: r.emoji, userId: r.userId })),
    });
  } catch (error) {
    console.error('Error fetching reactions:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reactions' },
      { status: 500 }
    );
  }
}

// POST /api/forum/posts/[id]/reactions - Add or remove a reaction
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const token = request.headers.get('authorization')?.split(' ')[1];
    
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const decoded = verifyToken(token);
    if (!decoded) {
      return NextResponse.json({ error: 'Invalid token' }, { status: 401 });
    }

    const { emoji } = await request.json();
    
    if (!emoji || typeof emoji !== 'string') {
      return NextResponse.json({ error: 'Invalid emoji' }, { status: 400 });
    }

    // Check if reaction already exists
    const existing = await prisma.postReaction.findUnique({
      where: {
        userId_postId_emoji: {
          userId: decoded.userId,
          postId: id,
          emoji,
        },
      },
    });

    if (existing) {
      // Remove reaction if it exists
      await prisma.postReaction.delete({
        where: { id: existing.id },
      });
      
      return NextResponse.json({ 
        message: 'Reaction removed',
        action: 'removed',
      });
    } else {
      // Add new reaction
      const reaction = await prisma.postReaction.create({
        data: {
          emoji,
          userId: decoded.userId,
          postId: id,
        },
        include: {
          user: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      });

      // Send notification to post author (if not reacting to own post)
      try {
        const post = await prisma.post.findUnique({
          where: { id },
          select: { authorId: true },
        });

        if (post && post.authorId !== decoded.userId) {
          await notifyReaction(
            post.authorId,
            reaction.user.name,
            emoji,
            id,
            `/forum/${id}`
          );
        }
      } catch (error) {
        console.error('Error sending reaction notification:', error);
      }

      return NextResponse.json({ 
        message: 'Reaction added',
        action: 'added',
        reaction,
      });
    }
  } catch (error) {
    console.error('Error toggling reaction:', error);
    return NextResponse.json(
      { error: 'Failed to toggle reaction' },
      { status: 500 }
    );
  }
}
