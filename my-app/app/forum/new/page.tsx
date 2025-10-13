'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Shield, ArrowLeft, Send, AlertCircle, CheckCircle } from 'lucide-react';
import MarkdownEditor from '@/app/components/MarkdownEditor';
import TagInput from '@/app/components/TagInput';

export default function NewPostPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    category: 'Discussion générale',
    tags: [] as string[]
  });

  const categories = [
    'Discussion générale',
    'Aide & Support',
    'Suggestions',
    'Cas documentés',
    'Actualités',
    'Autre'
  ];

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/login');
    }
  }, [router]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (formData.title.length < 10) {
      setError('Le titre doit contenir au moins 10 caractères');
      return;
    }

    if (formData.content.length < 20) {
      setError('Le contenu doit contenir au moins 20 caractères');
      return;
    }

    setLoading(true);

    const token = localStorage.getItem('token');
    try {
      const response = await fetch('/api/forum/posts', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la création du post');
      }

      router.push(`/forum/${data.post.id}`);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/forum" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Retour au forum</span>
            </Link>
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">OpenBait.org</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Créer un nouveau post</h1>
          <p className="text-gray-600">Partagez vos idées avec la communauté</p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-red-900">Erreur</p>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-8 space-y-6">
          {/* Category */}
          <div>
            <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-2">
              Catégorie *
            </label>
            <select
              id="category"
              required
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
            <p className="text-xs text-gray-500 mt-1">
              Choisissez la catégorie la plus appropriée pour votre post
            </p>
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm font-semibold text-gray-900 mb-2">
              Titre *
            </label>
            <input
              type="text"
              id="title"
              required
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              placeholder="Un titre clair et descriptif..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
              maxLength={200}
            />
            <div className="flex justify-between items-center mt-1">
              <p className="text-xs text-gray-500">
                Minimum 10 caractères
              </p>
              <p className="text-xs text-gray-500">
                {formData.title.length}/200
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <label htmlFor="content" className="block text-sm font-semibold text-gray-900 mb-2">
              Contenu *
            </label>
            <MarkdownEditor
              value={formData.content}
              onChange={(content) => setFormData({ ...formData, content })}
              placeholder="Décrivez votre sujet en détail... (Markdown supporté)"
              minHeight="300px"
            />
            <div className="flex justify-between items-center mt-1">
              <p className="text-xs text-gray-500">
                Minimum 20 caractères
              </p>
              <p className="text-xs text-gray-500">
                {formData.content.length} caractères
              </p>
            </div>
          </div>

          {/* Tags */}
          <div>
            <label htmlFor="tags" className="block text-sm font-semibold text-gray-900 mb-2">
              Tags
            </label>
            <TagInput
              tags={formData.tags}
              onChange={(tags) => setFormData({ ...formData, tags })}
              maxTags={5}
              placeholder="Ajouter des tags (appuyez sur Entrée)..."
            />
            <p className="text-xs text-gray-500 mt-1">
              Ajoutez jusqu'à 5 tags pour aider les autres à trouver votre post
            </p>
          </div>

          {/* Guidelines */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-sm font-bold text-blue-900 mb-2">📋 Conseils de publication</h3>
            <ul className="text-xs text-blue-700 space-y-1">
              <li>• Soyez respectueux et courtois envers les autres membres</li>
              <li>• Utilisez un titre clair qui résume bien votre sujet</li>
              <li>• Fournissez suffisamment de contexte dans votre message</li>
              <li>• Choisissez la bonne catégorie pour faciliter la découverte</li>
              <li>• Vérifiez l'orthographe avant de publier</li>
            </ul>
          </div>

          {/* Submit */}
          <div className="flex gap-4 pt-4 border-t border-gray-200">
            <Link
              href="/forum"
              className="flex-1 px-6 py-4 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-900 transition-colors text-center"
            >
              Annuler
            </Link>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 px-6 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Publication...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Publier le post
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
