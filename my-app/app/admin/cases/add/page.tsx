'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Shield, ArrowLeft, Plus, Save, AlertCircle, CheckCircle } from 'lucide-react';

export default function AddCasePage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    productName: '',
    category: '',
    licenseInitial: '',
    licenseFinal: '',
    changeDate: '',
    website: '',
    description: '',
    legalAnalysis: '',
    communityReaction: '',
    sources: ['']
  });

  const categories = [
    'Infrastructure & Cloud',
    'Développement',
    'Base de données',
    'Conteneurisation',
    'Monitoring',
    'Sécurité',
    'IA & ML',
    'Autre'
  ];

  const handleSourceChange = (index: number, value: string) => {
    const newSources = [...formData.sources];
    newSources[index] = value;
    setFormData({ ...formData, sources: newSources });
  };

  const addSource = () => {
    setFormData({ ...formData, sources: [...formData.sources, ''] });
  };

  const removeSource = (index: number) => {
    const newSources = formData.sources.filter((_, i) => i !== index);
    setFormData({ ...formData, sources: newSources });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const token = localStorage.getItem('token');
    if (!token) {
      setError('Vous devez être connecté');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/admin/cases', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          sources: formData.sources.filter(s => s.trim() !== '')
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la création du cas');
      }

      setSuccess(true);
      setTimeout(() => {
        router.push('/admin');
      }, 2000);

    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Cas ajouté avec succès !</h2>
          <p className="text-gray-600 mb-6">Le cas a été publié dans la base de données.</p>
          <p className="text-sm text-gray-500">Redirection automatique...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/admin" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Retour à l'admin</span>
            </Link>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">OpenBait.org</span>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-gray-900 rounded-lg">
              <Plus className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Ajouter un cas manuellement</h1>
              <p className="text-gray-600">Ajoutez un cas existant directement dans la base de données</p>
            </div>
          </div>
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
        <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-gray-200 p-8 space-y-8">
          {/* Section 1 - Informations de base */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              1. Informations de base
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nom de l'entreprise *
                </label>
                <input
                  type="text"
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Ex: HashiCorp"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nom du produit *
                </label>
                <input
                  type="text"
                  required
                  value={formData.productName}
                  onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                  placeholder="Ex: Terraform"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Catégorie *
                </label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                >
                  <option value="">Sélectionnez une catégorie</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Site web
                </label>
                <input
                  type="url"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  placeholder="https://example.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>
            </div>
          </div>

          {/* Section 2 - Changement de licence */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              2. Détails du changement de licence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Licence initiale *
                </label>
                <input
                  type="text"
                  required
                  value={formData.licenseInitial}
                  onChange={(e) => setFormData({ ...formData, licenseInitial: e.target.value })}
                  placeholder="Ex: MPL 2.0"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Licence finale *
                </label>
                <input
                  type="text"
                  required
                  value={formData.licenseFinal}
                  onChange={(e) => setFormData({ ...formData, licenseFinal: e.target.value })}
                  placeholder="Ex: BSL 1.1"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Date du changement
                </label>
                <input
                  type="text"
                  value={formData.changeDate}
                  onChange={(e) => setFormData({ ...formData, changeDate: e.target.value })}
                  placeholder="Ex: Août 2023"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                />
              </div>
            </div>
          </div>

          {/* Section 3 - Description détaillée */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              3. Description et analyse
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Description du cas
                </label>
                <textarea
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  placeholder="Décrivez le contexte et les circonstances du changement de licence..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Analyse juridique
                </label>
                <textarea
                  value={formData.legalAnalysis}
                  onChange={(e) => setFormData({ ...formData, legalAnalysis: e.target.value })}
                  rows={4}
                  placeholder="Implications légales et contractuelles du changement..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Réaction de la communauté
                </label>
                <textarea
                  value={formData.communityReaction}
                  onChange={(e) => setFormData({ ...formData, communityReaction: e.target.value })}
                  rows={4}
                  placeholder="Comment la communauté a réagi au changement..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Section 4 - Sources */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              4. Sources et références
            </h2>
            <div className="space-y-3">
              {formData.sources.map((source, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="url"
                    value={source}
                    onChange={(e) => handleSourceChange(index, e.target.value)}
                    placeholder="https://example.com/article"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                  />
                  {formData.sources.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeSource(index)}
                      className="px-4 py-3 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      Supprimer
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                onClick={addSource}
                className="w-full px-4 py-3 border-2 border-dashed border-gray-300 text-gray-600 rounded-lg hover:border-gray-900 hover:text-gray-900 transition-colors"
              >
                + Ajouter une source
              </button>
            </div>
          </div>

          {/* Submit */}
          <div className="flex gap-4 pt-6 border-t border-gray-200">
            <Link
              href="/admin"
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
                  Ajout en cours...
                </>
              ) : (
                <>
                  <Save className="w-5 h-5" />
                  Ajouter le cas
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
