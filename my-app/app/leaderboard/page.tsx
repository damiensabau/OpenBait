'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trophy, Medal, Award, MessageSquare, FileText } from 'lucide-react';
import NotificationBell from '@/app/components/NotificationBell';

interface User {
  id: string;
  name: string;
  email: string;
  organization: string | null;
  reputation: number;
  badges: string[];
  createdAt: string;
  _count: {
    posts: number;
    comments: number;
  };
}

interface LeaderboardResponse {
  users: User[];
  pagination: {
    total: number;
    limit: number;
    offset: number;
    hasMore: boolean;
  };
}

const BADGE_EMOJIS: Record<string, string> = {
  'Contributeur': '🌟',
  'Chercheur': '🔍',
  'Modérateur actif': '🛡️',
  'Expert': '👑',
  'Nouveau membre': '🆕',
};

export default function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState<LeaderboardResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check authentication status
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/users/leaderboard?limit=50');
      
      if (!response.ok) {
        throw new Error('Failed to fetch leaderboard');
      }

      const data = await response.json();
      setLeaderboard(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Trophy className="w-6 h-6 text-yellow-500" />;
      case 1:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 2:
        return <Medal className="w-6 h-6 text-orange-600" />;
      default:
        return <span className="text-xl font-bold text-gray-600">#{index + 1}</span>;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-12 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error || !leaderboard) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="text-center">
            <p className="text-red-600">Error: {error || 'Failed to load leaderboard'}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-between mb-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium">
              ← Retour
            </Link>
            {isLoggedIn && <NotificationBell />}
          </div>
          <div className="flex items-center justify-center gap-3 mb-4">
            <Trophy className="w-12 h-12 text-yellow-500" />
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Classement
            </h1>
          </div>
          <p className="text-xl text-gray-600">
            Les contributeurs les plus actifs de la communauté OpenBait
          </p>
        </div>

        {/* Top 3 Podium */}
        {leaderboard.users.length >= 3 && (
          <div className="mb-12 grid grid-cols-3 gap-4 max-w-4xl mx-auto">
            {/* 2nd Place */}
            <div className="order-1 pt-8">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-6 text-center shadow-lg border-2 border-gray-300">
                <Medal className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-1">{leaderboard.users[1].name}</h3>
                <div className="text-3xl font-bold text-gray-700 mb-2">
                  {leaderboard.users[1].reputation}
                </div>
                <div className="text-sm text-gray-600">points</div>
                <div className="flex gap-2 justify-center mt-3">
                  {leaderboard.users[1].badges.map((badge, i) => (
                    <span key={i} title={badge} className="text-xl">
                      {BADGE_EMOJIS[badge] || '🏅'}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 1st Place */}
            <div className="order-2">
              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-xl p-6 text-center shadow-2xl border-4 border-yellow-400 transform scale-110">
                <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-3" />
                <h3 className="font-bold text-xl mb-1">{leaderboard.users[0].name}</h3>
                <div className="text-4xl font-bold text-yellow-600 mb-2">
                  {leaderboard.users[0].reputation}
                </div>
                <div className="text-sm text-gray-600">points</div>
                <div className="flex gap-2 justify-center mt-3">
                  {leaderboard.users[0].badges.map((badge, i) => (
                    <span key={i} title={badge} className="text-2xl">
                      {BADGE_EMOJIS[badge] || '🏅'}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* 3rd Place */}
            <div className="order-3 pt-8">
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-6 text-center shadow-lg border-2 border-orange-400">
                <Medal className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <h3 className="font-bold text-lg mb-1">{leaderboard.users[2].name}</h3>
                <div className="text-3xl font-bold text-orange-700 mb-2">
                  {leaderboard.users[2].reputation}
                </div>
                <div className="text-sm text-gray-600">points</div>
                <div className="flex gap-2 justify-center mt-3">
                  {leaderboard.users[2].badges.map((badge, i) => (
                    <span key={i} title={badge} className="text-xl">
                      {BADGE_EMOJIS[badge] || '🏅'}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Full Leaderboard */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <tr>
                  <th className="px-6 py-4 text-left">Rang</th>
                  <th className="px-6 py-4 text-left">Utilisateur</th>
                  <th className="px-6 py-4 text-center">Badges</th>
                  <th className="px-6 py-4 text-center">Réputation</th>
                  <th className="px-6 py-4 text-center">Posts</th>
                  <th className="px-6 py-4 text-center">Commentaires</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {leaderboard.users.map((user, index) => (
                  <tr 
                    key={user.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        {getRankIcon(index)}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-semibold text-gray-900">{user.name}</div>
                        {user.organization && (
                          <div className="text-sm text-gray-500">{user.organization}</div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex gap-1 justify-center">
                        {user.badges.length > 0 ? (
                          user.badges.map((badge, i) => (
                            <span 
                              key={i} 
                              title={badge}
                              className="text-xl cursor-help"
                            >
                              {BADGE_EMOJIS[badge] || '🏅'}
                            </span>
                          ))
                        ) : (
                          <span className="text-gray-400 text-sm">Aucun</span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <Award className="w-4 h-4 text-yellow-500" />
                        <span className="font-bold text-gray-900">{user.reputation}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <FileText className="w-4 h-4 text-blue-500" />
                        <span className="text-gray-700">{user._count.posts}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex items-center justify-center gap-1">
                        <MessageSquare className="w-4 h-4 text-green-500" />
                        <span className="text-gray-700">{user._count.comments}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="mt-8 text-center text-gray-600">
          <p>Total de {leaderboard.pagination.total} contributeurs actifs</p>
        </div>
      </div>
    </div>
  );
}
