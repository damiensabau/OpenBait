'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Shield, MessageSquare, TrendingUp, Plus, ArrowUp, ArrowDown, Eye, MessageCircle, Calendar, User, Filter } from 'lucide-react';

interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  views: number;
  upvotes: number;
  downvotes: number;
  author: {
    name: string;
  };
  _count: {
    comments: number;
  };
  createdAt: string;
  userVote?: number | null;
}

export default function ForumPage() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [filter, setFilter] = useState<'hot' | 'new' | 'top'>('hot');
  const [categoryFilter, setCategoryFilter] = useState<string>('all');

  const categories = [
    'all',
    'Discussion générale',
    'Aide & Support',
    'Suggestions',
    'Cas documentés',
    'Actualités',
    'Autre'
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
    loadPosts();
  }, [filter, categoryFilter]);

  const loadPosts = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers: any = {};
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const url = `/api/forum/posts?sort=${filter}${categoryFilter !== 'all' ? `&category=${categoryFilter}` : ''}`;
      const response = await fetch(url, { headers });

      if (response.ok) {
        const data = await response.json();
        setPosts(data.posts);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (postId: string, value: number) => {
    if (!isLoggedIn) {
      router.push('/auth/login');
      return;
    }

    const token = localStorage.getItem('token');
    try {
      const response = await fetch(`/api/forum/posts/${postId}/vote`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ value })
      });

      if (response.ok) {
        loadPosts();
      }
    } catch (error) {
      console.error('Erreur lors du vote:', error);
    }
  };

  const getScore = (post: Post) => post.upvotes - post.downvotes;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const hours = Math.floor(diff / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) return `il y a ${days}j`;
    if (hours > 0) return `il y a ${hours}h`;
    return 'maintenant';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">OpenBait.org</span>
            </Link>
            <div className="flex items-center gap-4">
              {isLoggedIn ? (
                <Link
                  href="/forum/new"
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Nouveau post
                </Link>
              ) : (
                <Link
                  href="/auth/login"
                  className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Connexion
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-blue-600 rounded-lg">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Forum OpenBait</h1>
              <p className="text-gray-600">Discutez avec la communauté</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Sort Filter */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="text-sm font-bold text-gray-900 mb-3 flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Trier par
              </h3>
              <div className="space-y-2">
                <button
                  onClick={() => setFilter('hot')}
                  className={`w-full px-3 py-2 rounded-lg text-left text-sm font-medium transition-colors ${
                    filter === 'hot'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  🔥 Populaire
                </button>
                <button
                  onClick={() => setFilter('new')}
                  className={`w-full px-3 py-2 rounded-lg text-left text-sm font-medium transition-colors ${
                    filter === 'new'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  🆕 Récent
                </button>
                <button
                  onClick={() => setFilter('top')}
                  className={`w-full px-3 py-2 rounded-lg text-left text-sm font-medium transition-colors ${
                    filter === 'top'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  ⭐ Top
                </button>
              </div>
            </div>

            {/* Category Filter */}
            <div className="bg-white rounded-xl border border-gray-200 p-4">
              <h3 className="text-sm font-bold text-gray-900 mb-3">Catégories</h3>
              <div className="space-y-2">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategoryFilter(cat)}
                    className={`w-full px-3 py-2 rounded-lg text-left text-sm font-medium transition-colors ${
                      categoryFilter === cat
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {cat === 'all' ? '📋 Toutes' : cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 rounded-xl border border-blue-200 p-4">
              <h3 className="text-sm font-bold text-blue-900 mb-2">💡 Bienvenue</h3>
              <p className="text-xs text-blue-700 mb-3">
                Partagez vos expériences, posez des questions et discutez avec la communauté OpenBait.
              </p>
              {!isLoggedIn && (
                <Link
                  href="/auth/register"
                  className="block text-center px-3 py-2 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Créer un compte
                </Link>
              )}
            </div>
          </div>

          {/* Posts List */}
          <div className="lg:col-span-3">
            {loading ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-600">Chargement...</p>
              </div>
            ) : posts.length === 0 ? (
              <div className="bg-white rounded-xl border border-gray-200 p-12 text-center">
                <MessageSquare className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <p className="text-xl text-gray-900 mb-2">Aucun post pour le moment</p>
                <p className="text-gray-600 mb-6">Soyez le premier à lancer une discussion !</p>
                {isLoggedIn && (
                  <Link
                    href="/forum/new"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Plus className="w-5 h-5" />
                    Créer un post
                  </Link>
                )}
              </div>
            ) : (
              <div className="space-y-4">
                {posts.map((post) => (
                  <div
                    key={post.id}
                    className="bg-white rounded-xl border border-gray-200 hover:border-gray-300 transition-all overflow-hidden"
                  >
                    <div className="flex">
                      {/* Vote Section */}
                      <div className="bg-gray-50 px-4 py-6 flex flex-col items-center gap-2 border-r border-gray-200">
                        <button
                          onClick={() => handleVote(post.id, 1)}
                          className={`p-1 rounded transition-colors ${
                            post.userVote === 1
                              ? 'text-orange-600 bg-orange-100'
                              : 'text-gray-400 hover:text-orange-600 hover:bg-orange-50'
                          }`}
                          title="Upvote"
                        >
                          <ArrowUp className="w-6 h-6" />
                        </button>
                        <span className={`text-lg font-bold ${
                          getScore(post) > 0 ? 'text-orange-600' :
                          getScore(post) < 0 ? 'text-blue-600' : 'text-gray-900'
                        }`}>
                          {getScore(post)}
                        </span>
                        <button
                          onClick={() => handleVote(post.id, -1)}
                          className={`p-1 rounded transition-colors ${
                            post.userVote === -1
                              ? 'text-blue-600 bg-blue-100'
                              : 'text-gray-400 hover:text-blue-600 hover:bg-blue-50'
                          }`}
                          title="Downvote"
                        >
                          <ArrowDown className="w-6 h-6" />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="flex-1 p-6">
                        <Link href={`/forum/${post.id}`} className="block group">
                          <div className="flex items-start gap-3 mb-3">
                            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-semibold rounded-full">
                              {post.category}
                            </span>
                            <span className="text-xs text-gray-500">
                              posté par <span className="font-medium">{post.author.name}</span> · {formatDate(post.createdAt)}
                            </span>
                          </div>

                          <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                            {post.title}
                          </h2>

                          <p className="text-gray-700 mb-4 line-clamp-2">
                            {post.content}
                          </p>

                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <MessageCircle className="w-4 h-4" />
                              <span>{post._count.comments} commentaires</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Eye className="w-4 h-4" />
                              <span>{post.views} vues</span>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
