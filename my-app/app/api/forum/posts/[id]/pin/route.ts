import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { verifyToken } from '@/lib/auth';
import { notifyPostPinned } from '@/lib/notifications';

// PATCH /api/forum/posts/[id]/pin - Pin or unpin a post (moderator/admin only)
export async function PATCH(
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
    if (!decoded || (decoded.role !== 'MODERATOR' && decoded.role !== 'ADMIN')) {
      return NextResponse.json({ 
        error: 'Moderator or admin access required' 
      }, { status: 403 });
    }

    const { isPinned } = await request.json();

    if (typeof isPinned !== 'boolean') {
      return NextResponse.json({ 
        error: 'isPinned must be a boolean' 
      }, { status: 400 });
    }

    const post = await prisma.post.update({
      where: { id },
      data: { isPinned },
      include: {
        author: {
          select: {
            id: true,
            name: true,
            reputation: true,
          },
        },
        _count: {
          select: {
            comments: true,
            votes: true,
          },
        },
      },
    });

    // Send notification if post is pinned
    if (isPinned) {
      try {
        await notifyPostPinned(
          post.author.id,
          post.title,
          id
        );
      } catch (error) {
        console.error('Error sending notification:', error);
      }
    }

    // Calculate vote score
    const votes = await prisma.postVote.findMany({
      where: { postId: id },
    });
    const score = votes.reduce((sum, vote) => sum + vote.value, 0);

    return NextResponse.json({
      ...post,
      score,
      message: isPinned ? 'Post pinned successfully' : 'Post unpinned successfully',
    });
  } catch (error) {
    console.error('Error toggling pin:', error);
    return NextResponse.json(
      { error: 'Failed to toggle pin' },
      { status: 500 }
    );
  }
}
