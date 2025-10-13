import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/users/leaderboard - Get top users by reputation
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = parseInt(searchParams.get('limit') || '10', 10);
    const offset = parseInt(searchParams.get('offset') || '0', 10);

    const users = await prisma.user.findMany({
      select: {
        id: true,
        name: true,
        email: true,
        organization: true,
        reputation: true,
        badges: true,
        createdAt: true,
        _count: {
          select: {
            posts: true,
            comments: true,
          },
        },
      },
      orderBy: {
        reputation: 'desc',
      },
      take: limit,
      skip: offset,
    });

    // Parse badges JSON string
    const usersWithBadges = users.map(user => ({
      ...user,
      badges: user.badges ? JSON.parse(user.badges) : [],
    }));

    const total = await prisma.user.count();

    return NextResponse.json({
      users: usersWithBadges,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total,
      },
    });
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return NextResponse.json(
      { error: 'Failed to fetch leaderboard' },
      { status: 500 }
    );
  }
}
