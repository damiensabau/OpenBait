'use client';

import { useState, useEffect } from 'react';
import { Smile } from 'lucide-react';

interface Reaction {
  emoji: string;
  count: number;
  users: { id: string; name: string }[];
}

interface EmojiReactionPickerProps {
  postId: string;
  onReactionChange?: () => void;
}

const AVAILABLE_EMOJIS = ['👍', '👎', '🔥', '❤️', '😂', '😮', '😢', '😡'];

export default function EmojiReactionPicker({ postId, onReactionChange }: EmojiReactionPickerProps) {
  const [reactions, setReactions] = useState<Reaction[]>([]);
  const [userReactions, setUserReactions] = useState<string[]>([]);
  const [showPicker, setShowPicker] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchReactions();
  }, [postId]);

  const fetchReactions = async () => {
    try {
      const response = await fetch(`/api/forum/posts/${postId}/reactions`);
      if (response.ok) {
        const data = await response.json();
        setReactions(data.reactions || []);
        
        // Get current user's reactions
        const token = localStorage.getItem('token');
        if (token) {
          const decoded = JSON.parse(atob(token.split('.')[1]));
          const userReactionEmojis = data.userReactions
            .filter((r: any) => r.userId === decoded.userId)
            .map((r: any) => r.emoji);
          setUserReactions(userReactionEmojis);
        }
      }
    } catch (error) {
      console.error('Error fetching reactions:', error);
    } finally {
      setLoading(false);
    }
  };

  const toggleReaction = async (emoji: string) => {
    const token = localStorage.getItem('token');
    if (!token) {
      alert('Vous devez être connecté pour réagir');
      return;
    }

    try {
      const response = await fetch(`/api/forum/posts/${postId}/reactions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ emoji }),
      });

      if (response.ok) {
        await fetchReactions();
        onReactionChange?.();
      } else {
        const data = await response.json();
        alert(data.error || 'Erreur lors de la réaction');
      }
    } catch (error) {
      console.error('Error toggling reaction:', error);
      alert('Erreur lors de la réaction');
    }
  };

  if (loading) {
    return <div className="animate-pulse h-10 bg-gray-100 rounded"></div>;
  }

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {/* Display existing reactions */}
      {reactions.map((reaction) => (
        <button
          key={reaction.emoji}
          onClick={() => toggleReaction(reaction.emoji)}
          className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-sm transition-all ${
            userReactions.includes(reaction.emoji)
              ? 'bg-blue-100 border-2 border-blue-500 text-blue-700'
              : 'bg-gray-100 hover:bg-gray-200 border border-gray-300'
          }`}
          title={reaction.users.map(u => u.name).join(', ')}
        >
          <span className="text-lg">{reaction.emoji}</span>
          <span className="font-medium">{reaction.count}</span>
        </button>
      ))}

      {/* Add reaction button */}
      <div className="relative">
        <button
          onClick={() => setShowPicker(!showPicker)}
          className="flex items-center gap-1 px-3 py-1.5 rounded-full text-sm bg-gray-50 hover:bg-gray-100 border border-gray-300 transition-all"
          title="Ajouter une réaction"
        >
          <Smile className="w-4 h-4" />
          <span className="text-xs">+</span>
        </button>

        {showPicker && (
          <div className="absolute bottom-full mb-2 left-0 bg-white rounded-lg shadow-xl border border-gray-200 p-2 z-50 flex gap-1">
            {AVAILABLE_EMOJIS.map((emoji) => (
              <button
                key={emoji}
                onClick={() => {
                  toggleReaction(emoji);
                  setShowPicker(false);
                }}
                className={`text-2xl p-2 rounded hover:bg-gray-100 transition-all ${
                  userReactions.includes(emoji) ? 'bg-blue-50' : ''
                }`}
                title={emoji}
              >
                {emoji}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Close picker when clicking outside */}
      {showPicker && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setShowPicker(false)}
        />
      )}
    </div>
  );
}
