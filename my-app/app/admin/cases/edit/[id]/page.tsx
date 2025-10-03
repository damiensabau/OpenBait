'use client';

import React, { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import Link from 'next/link';
import { Shield, ArrowLeft, Edit, Save, X, Eye, Trash2, AlertCircle, CheckCircle } from 'lucide-react';

interface Case {
  id: string;
  companyName: string;
  productName: string;
  category: string;
  licenseInitial: string;
  licenseFinal: string;
  changeDate: string;
  website: string;
  description: string;
  legalAnalysis: string;
  communityReaction: string;
  sources: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  createdAt: string;
  updatedAt: string;
  reporter?: {
    name: string;
    email: string;
  };
}

export default function EditCasePage() {
  const router = useRouter();
  const params = useParams();
  const caseId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [originalCase, setOriginalCase] = useState<Case | null>(null);
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

  useEffect(() => {
    loadCase();
  }, [caseId]);

  const loadCase = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/auth/login');
      return;
    }

    try {
      const response = await fetch('/api/admin/cases', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        const caseData = data.cases.find((c: Case) => c.id === caseId);
        
        if (caseData) {
          setOriginalCase(caseData);
          const parsedSources = JSON.parse(caseData.sources || '[]');
          setFormData({
            companyName: caseData.companyName,
            productName: caseData.productName,
            category: caseData.category,
            licenseInitial: caseData.licenseInitial,
            licenseFinal: caseData.licenseFinal,
            changeDate: caseData.changeDate,
            website: caseData.website,
            description: caseData.description,
            legalAnalysis: caseData.legalAnalysis,
            communityReaction: caseData.communityReaction,
            sources: parsedSources.length > 0 ? parsedSources : ['']
          });
        } else {
          setError('Cas non trouvé');
        }
      }
    } catch (error) {
      console.error('Erreur lors du chargement du cas:', error);
      setError('Erreur lors du chargement');
    } finally {
      setLoading(false);
    }
  };

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

  const handleSave = async () => {
    setError('');
    setSaving(true);

    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch(`/api/admin/cases/${caseId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          sources: JSON.stringify(formData.sources.filter(s => s.trim() !== ''))
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la sauvegarde');
      }

      setSuccess('Modifications enregistrées avec succès !');
      setIsEditing(false);
      loadCase();
      
      setTimeout(() => setSuccess(''), 3000);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm('Êtes-vous sûr de vouloir supprimer ce cas définitivement ?')) {
      return;
    }

    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch(`/api/admin/cases/${caseId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        router.push('/admin');
      } else {
        const data = await response.json();
        setError(data.error || 'Erreur lors de la suppression');
      }
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleCancel = () => {
    if (originalCase) {
      const parsedSources = JSON.parse(originalCase.sources || '[]');
      setFormData({
        companyName: originalCase.companyName,
        productName: originalCase.productName,
        category: originalCase.category,
        licenseInitial: originalCase.licenseInitial,
        licenseFinal: originalCase.licenseFinal,
        changeDate: originalCase.changeDate,
        website: originalCase.website,
        description: originalCase.description,
        legalAnalysis: originalCase.legalAnalysis,
        communityReaction: originalCase.communityReaction,
        sources: parsedSources.length > 0 ? parsedSources : ['']
      });
    }
    setIsEditing(false);
    setError('');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Chargement...</p>
        </div>
      </div>
    );
  }

  if (!originalCase) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
          <p className="text-xl text-gray-900 mb-2">Cas non trouvé</p>
          <Link href="/admin" className="text-blue-600 hover:text-blue-700">
            Retour au panneau admin
          </Link>
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
        <div className="mb-6 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {isEditing ? 'Modifier le cas' : 'Prévisualisation du cas'}
            </h1>
            <p className="text-gray-600">
              {originalCase.companyName} - {originalCase.productName}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {!isEditing ? (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                >
                  <Edit className="w-4 h-4" />
                  Modifier
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2"
                >
                  <Trash2 className="w-4 h-4" />
                  Supprimer
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={handleCancel}
                  className="px-4 py-2 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-900 transition-colors flex items-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Annuler
                </button>
                <button
                  onClick={handleSave}
                  disabled={saving}
                  className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50 flex items-center gap-2"
                >
                  {saving ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Enregistrement...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Enregistrer
                    </>
                  )}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Messages */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-red-900">Erreur</p>
              <p className="text-sm text-red-700">{error}</p>
            </div>
          </div>
        )}

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-start gap-3">
            <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-green-900">Succès</p>
              <p className="text-sm text-green-700">{success}</p>
            </div>
          </div>
        )}

        {/* Metadata */}
        <div className="bg-gray-100 rounded-xl p-6 mb-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <p className="text-gray-600 font-medium mb-1">Statut</p>
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${
                originalCase.status === 'APPROVED' ? 'bg-green-100 text-green-700' :
                originalCase.status === 'PENDING' ? 'bg-yellow-100 text-yellow-700' :
                'bg-red-100 text-red-700'
              }`}>
                {originalCase.status === 'APPROVED' ? '✓ Approuvé' :
                 originalCase.status === 'PENDING' ? '⏳ En attente' : '✗ Rejeté'}
              </span>
            </div>
            <div>
              <p className="text-gray-600 font-medium mb-1">Signalé par</p>
              <p className="text-gray-900">{originalCase.reporter?.name || 'Admin'}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium mb-1">Date de création</p>
              <p className="text-gray-900">{new Date(originalCase.createdAt).toLocaleDateString('fr-FR')}</p>
            </div>
            <div>
              <p className="text-gray-600 font-medium mb-1">Dernière modification</p>
              <p className="text-gray-900">{new Date(originalCase.updatedAt).toLocaleDateString('fr-FR')}</p>
            </div>
          </div>
        </div>

        {/* Form/Preview */}
        <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              Informations de base
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nom de l'entreprise
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{formData.companyName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Nom du produit
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.productName}
                    onChange={(e) => setFormData({ ...formData, productName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{formData.productName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Catégorie
                </label>
                {isEditing ? (
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{formData.category}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Site web
                </label>
                {isEditing ? (
                  <input
                    type="url"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                  />
                ) : (
                  <a href={formData.website} target="_blank" rel="noopener noreferrer" className="px-4 py-3 bg-gray-50 rounded-lg text-blue-600 hover:text-blue-700 block truncate">
                    {formData.website}
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              Changement de licence
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Licence initiale
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.licenseInitial}
                    onChange={(e) => setFormData({ ...formData, licenseInitial: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{formData.licenseInitial}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Licence finale
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.licenseFinal}
                    onChange={(e) => setFormData({ ...formData, licenseFinal: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{formData.licenseFinal}</p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Date du changement
                </label>
                {isEditing ? (
                  <input
                    type="text"
                    value={formData.changeDate}
                    onChange={(e) => setFormData({ ...formData, changeDate: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900">{formData.changeDate}</p>
                )}
              </div>
            </div>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              Description et analyse
            </h2>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Description du cas
                </label>
                {isEditing ? (
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 resize-none"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900 whitespace-pre-wrap">{formData.description}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Analyse juridique
                </label>
                {isEditing ? (
                  <textarea
                    value={formData.legalAnalysis}
                    onChange={(e) => setFormData({ ...formData, legalAnalysis: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 resize-none"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900 whitespace-pre-wrap">{formData.legalAnalysis}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Réaction de la communauté
                </label>
                {isEditing ? (
                  <textarea
                    value={formData.communityReaction}
                    onChange={(e) => setFormData({ ...formData, communityReaction: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 resize-none"
                  />
                ) : (
                  <p className="px-4 py-3 bg-gray-50 rounded-lg text-gray-900 whitespace-pre-wrap">{formData.communityReaction}</p>
                )}
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
              Sources et références
            </h2>
            {isEditing ? (
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
            ) : (
              <div className="space-y-2">
                {formData.sources.filter(s => s.trim() !== '').map((source, index) => (
                  <a
                    key={index}
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block px-4 py-3 bg-gray-50 rounded-lg text-blue-600 hover:text-blue-700 hover:bg-gray-100 transition-colors truncate"
                  >
                    {source}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
