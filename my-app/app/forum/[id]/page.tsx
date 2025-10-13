'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowUp, ArrowDown, MessageSquare, Calendar, Eye, ArrowLeft, Send, Pin } from 'lucide-react';
import EmojiReactionPicker from '@/app/components/EmojiReactionPicker';
import UserBadges from '@/app/components/UserBadges';
import ReputationDisplay from '@/app/components/ReputationDisplay';
import { MarkdownContent } from '@/app/components/MarkdownEditor';
import NotificationBell from '@/app/components/NotificationBell';

interface Author {
  id: string;
  name: string;
  role: string;
  reputation: number;
  badges: string[];
}

interface Comment {
  id: string;
  content: string;
  upvotes: number;
  downvotes: number;
  createdAt: string;
  author: Author;
  userVote: number | null;
  replies: Comment[];
}

interface Post {
  id: string;
  title: string;
  content: string;
  category: string;
  views: number;
  upvotes: number;
  downvotes: number;
  createdAt: string;
  author: Author;
  userVote: number | null;
  comments: Comment[];
  tags: string[];
  isPinned: boolean;
}

export default function PostDetailPage() {
  const params = useParams();
  const router = useRouter();
  const postId = params.id as string;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [commentContent, setCommentContent] = useState('');
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
    fetchPost();
  }, [postId]);

  const fetchPost = async () => {
    try {
      const token = localStorage.getItem('token');
      const headers: any = {
        'Content-Type': 'application/json',
      };

      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const response = await fetch(`/api/forum/posts/${postId}`, { headers });
      
      if (!response.ok) {
        throw new Error('Erreur lors du chargement du post');
      }

      const data = await response.json();
      
      // Parse tags and badges if they are strings
      if (data.tags && typeof data.tags === 'string') {
        data.tags = JSON.parse(data.tags);
      }
      if (data.author?.badges && typeof data.author.badges === 'string') {
        data.author.badges = JSON.parse(data.author.badges);
      }
      
      setPost(data);
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors du chargement du post');
    } finally {
      setLoading(false);
    }
  };

  const handleVote = async (type: 'post' | 'comment', id: string, value: number) => {
    if (!isAuthenticated) {
      alert('Vous devez être connecté pour voter');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const endpoint = type === 'post' 
        ? `/api/forum/posts/${id}/vote`
        : `/api/forum/comments/${id}/vote`;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ value }),
      });

      if (response.ok) {
        fetchPost(); // Recharger le post
      }
    } catch (error) {
      console.error('Erreur:', error);
    }
  };

  const handleCommentSubmit = async (e: React.FormEvent, parentId?: string) => {
    e.preventDefault();

    const content = parentId ? replyContent : commentContent;

    if (!content.trim() || content.length < 10) {
      alert('Le commentaire doit contenir au moins 10 caractères');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/forum/posts/${postId}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          content,
          parentId: parentId || null,
        }),
      });

      if (response.ok) {
        if (parentId) {
          setReplyContent('');
          setReplyingTo(null);
        } else {
          setCommentContent('');
        }
        fetchPost(); // Recharger le post
      } else {
        const data = await response.json();
        alert(data.error || 'Erreur lors de la création du commentaire');
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert('Erreur lors de la création du commentaire');
    }
  };

  const renderComment = (comment: Comment, depth: number = 0) => {
    const score = comment.upvotes - comment.downvotes;
    const isUpvoted = comment.userVote === 1;
    const isDownvoted = comment.userVote === -1;

    return (
      <div key={comment.id} className={`${depth > 0 ? 'ml-8 mt-4' : 'mt-4'} border-l-2 border-gray-700 pl-4`}>
        <div className="flex gap-4">
          {/* Vote buttons */}
          <div className="flex flex-col items-center gap-1">
            <button
              onClick={() => handleVote('comment', comment.id, 1)}
              className={`p-1 rounded hover:bg-gray-700 transition ${
                isUpvoted ? 'text-orange-500' : 'text-gray-400'
              }`}
              disabled={!isAuthenticated}
            >
              <ArrowUp className="w-4 h-4" />
            </button>
            <span className={`text-sm font-bold ${
              score > 0 ? 'text-orange-500' : score < 0 ? 'text-blue-500' : 'text-gray-400'
            }`}>
              {score}
            </span>
            <button
              onClick={() => handleVote('comment', comment.id, -1)}
              className={`p-1 rounded hover:bg-gray-700 transition ${
                isDownvoted ? 'text-blue-500' : 'text-gray-400'
              }`}
              disabled={!isAuthenticated}
            >
              <ArrowDown className="w-4 h-4" />
            </button>
          </div>

          {/* Comment content */}
          <div className="flex-1">
            <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
              <span className="font-medium text-white">{comment.author.name}</span>
              <span className="text-xs px-2 py-0.5 bg-gray-700 rounded">
                {comment.author.role}
              </span>
              <span>•</span>
              <span>{new Date(comment.createdAt).toLocaleDateString('fr-FR')}</span>
            </div>

            <p className="text-gray-300 mb-2">{comment.content}</p>

            <button
              onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
              className="text-sm text-gray-400 hover:text-white transition"
              disabled={!isAuthenticated}
            >
              Répondre
            </button>

            {/* Reply form */}
            {replyingTo === comment.id && (
              <form onSubmit={(e) => handleCommentSubmit(e, comment.id)} className="mt-3">
                <textarea
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  placeholder="Votre réponse (min. 10 caractères)..."
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows={3}
                  required
                />
                <div className="flex gap-2 mt-2">
                  <button
                    type="submit"
                    className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
                  >
                    Répondre
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setReplyingTo(null);
                      setReplyContent('');
                    }}
                    className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            )}

            {/* Nested replies */}
            {comment.replies && comment.replies.length > 0 && (
              <div className="mt-2">
                {comment.replies.map((reply) => renderComment(reply, depth + 1))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-xl">Chargement...</div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-xl">Post non trouvé</div>
      </div>
    );
  }

  const score = post.upvotes - post.downvotes;
  const isUpvoted = post.userVote === 1;
  const isDownvoted = post.userVote === -1;

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-800 bg-gray-950">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/forum" className="flex items-center gap-2 text-gray-400 hover:text-white transition">
            <ArrowLeft className="w-5 h-5" />
            Retour au forum
          </Link>
          {isAuthenticated && <NotificationBell />}
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Post */}
        <div className="bg-gray-800 rounded-lg p-6">
          <div className="flex gap-4">
            {/* Vote buttons */}
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={() => handleVote('post', post.id, 1)}
                className={`p-2 rounded-lg hover:bg-gray-700 transition ${
                  isUpvoted ? 'bg-orange-500/20 text-orange-500' : 'text-gray-400'
                }`}
                disabled={!isAuthenticated}
              >
                <ArrowUp className="w-6 h-6" />
              </button>
              <span className={`text-xl font-bold ${
                score > 0 ? 'text-orange-500' : score < 0 ? 'text-blue-500' : 'text-gray-400'
              }`}>
                {score}
              </span>
              <button
                onClick={() => handleVote('post', post.id, -1)}
                className={`p-2 rounded-lg hover:bg-gray-700 transition ${
                  isDownvoted ? 'bg-blue-500/20 text-blue-500' : 'text-gray-400'
                }`}
                disabled={!isAuthenticated}
              >
                <ArrowDown className="w-6 h-6" />
              </button>
            </div>

            {/* Post content */}
            <div className="flex-1">
              {/* Category badge */}
              <span className="inline-block px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm mb-3">
                {post.category}
              </span>

              <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

              {/* Pinned badge */}
              {post.isPinned && (
                <div className="flex items-center gap-2 mb-3 text-yellow-500">
                  <Pin className="w-4 h-4" />
                  <span className="text-sm font-semibold">Post épinglé</span>
                </div>
              )}

              {/* Meta info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
                <div className="flex items-center gap-2">
                  <span className="font-medium text-white">{post.author.name}</span>
                  <UserBadges 
                    badges={post.author.badges} 
                    reputation={post.author.reputation}
                    size="sm"
                  />
                  <span className="text-xs px-2 py-0.5 bg-gray-700 rounded">
                    {post.author.role}
                  </span>
                  <ReputationDisplay 
                    reputation={post.author.reputation}
                    showLabel={false}
                    size="sm"
                  />
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.createdAt).toLocaleDateString('fr-FR')}
                </div>
                <div className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  {post.views} vues
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-4 h-4" />
                  {post.comments.length} commentaires
                </div>
              </div>

              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Content with Markdown */}
              <div className="prose prose-invert max-w-none mb-6">
                <MarkdownContent content={post.content} />
              </div>

              {/* Reactions */}
              <div className="pt-4 border-t border-gray-700">
                <EmojiReactionPicker postId={post.id} onReactionChange={fetchPost} />
              </div>
            </div>
          </div>
        </div>

        {/* Comments section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">
            Commentaires ({post.comments.length})
          </h2>

          {/* Add comment form */}
          {isAuthenticated ? (
            <form onSubmit={(e) => handleCommentSubmit(e)} className="mb-8">
              <textarea
                value={commentContent}
                onChange={(e) => setCommentContent(e.target.value)}
                placeholder="Partagez votre avis... (min. 10 caractères)"
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                rows={4}
                required
              />
              <button
                type="submit"
                className="mt-3 px-6 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
                Publier le commentaire
              </button>
            </form>
          ) : (
            <div className="mb-8 p-4 bg-gray-800 rounded-lg text-center">
              <p className="text-gray-400">
                Vous devez être{' '}
                <Link href="/auth/login" className="text-orange-500 hover:underline">
                  connecté
                </Link>
                {' '}pour commenter
              </p>
            </div>
          )}

          {/* Comments list */}
          {post.comments.length > 0 ? (
            <div className="space-y-4">
              {post.comments.map((comment) => renderComment(comment))}
            </div>
          ) : (
            <div className="text-center py-12 text-gray-400">
              <MessageSquare className="w-12 h-12 mx-auto mb-4 opacity-50" />
              <p>Aucun commentaire pour le moment</p>
              <p className="text-sm mt-2">Soyez le premier à commenter !</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
