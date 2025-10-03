'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, AlertTriangle, CheckCircle, Upload, Calendar, Building2, Code, FileText, ExternalLink, Send, X } from 'lucide-react';

export default function ReportCasePage() {
  const [formData, setFormData] = useState({
    companyName: '',
    productName: '',
    category: '',
    oldLicense: '',
    newLicense: '',
    changeDate: '',
    description: '',
    impact: '',
    affectedUsers: '',
    sources: [''],
    reporterName: '',
    reporterEmail: '',
    reporterOrganization: ''
  });

  const [files, setFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const categories = [
    'Infrastructure',
    'Base de données',
    'Conteneurisation',
    'DevOps',
    'Langage',
    'Framework',
    'Système',
    'Cloud',
    'Sécurité',
    'Autre'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSourceChange = (index: number, value: string) => {
    const newSources = [...formData.sources];
    newSources[index] = value;
    setFormData(prev => ({ ...prev, sources: newSources }));
  };

  const addSource = () => {
    setFormData(prev => ({ ...prev, sources: [...prev.sources, ''] }));
  };

  const removeSource = (index: number) => {
    const newSources = formData.sources.filter((_, i) => i !== index);
    setFormData(prev => ({ ...prev, sources: newSources }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici, vous enverriez les données à votre API
    console.log('Form data:', formData);
    console.log('Files:', files);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="max-w-2xl w-full">
          <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center shadow-xl">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Merci pour votre contribution !
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Votre signalement a été reçu avec succès. Notre équipe va l'analyser et le vérifier 
              avant de l'ajouter à la base de données.
            </p>
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
              <p className="text-sm text-gray-700 mb-2">
                <strong>Prochaines étapes :</strong>
              </p>
              <ul className="text-sm text-gray-600 space-y-2 text-left">
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">1.</span>
                  <span>Validation des sources et vérification des informations (2-3 jours)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">2.</span>
                  <span>Analyse approfondie et documentation du cas (1 semaine)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-600 mt-1">3.</span>
                  <span>Publication dans la base de données et notification par email</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/database"
                className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
              >
                Consulter la base de données
              </Link>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    companyName: '',
                    productName: '',
                    category: '',
                    oldLicense: '',
                    newLicense: '',
                    changeDate: '',
                    description: '',
                    impact: '',
                    affectedUsers: '',
                    sources: [''],
                    reporterName: '',
                    reporterEmail: '',
                    reporterOrganization: ''
                  });
                  setFiles([]);
                }}
                className="px-6 py-3 border-2 border-gray-300 text-gray-900 font-semibold rounded-lg hover:border-gray-900 transition-all"
              >
                Signaler un autre cas
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-xl font-semibold text-gray-900">OpenBait.org</div>
                <div className="text-xs text-gray-500">Signaler un cas</div>
              </div>
            </Link>
            <Link 
              href="/"
              className="px-5 py-2 border-2 border-gray-300 text-gray-900 text-sm font-medium rounded hover:border-gray-900 transition-all"
            >
              Retour à l'accueil
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-700 rounded-full mb-8 border border-orange-200">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">Contribuez à la transparence</span>
          </div>
          
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Signaler un changement de modèle économique
          </h1>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Vous avez identifié un logiciel qui a changé de licence ou de modèle de tarification ? 
            Aidez la communauté en le documentant ici.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 text-left">
            <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-blue-600" />
              Ce que nous recherchons
            </h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Changements de licence (ex: MIT → BSL, Apache → SSPL)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Passages de gratuit à payant (avec conditions)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Restrictions d'usage ajoutées à un projet open source</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Changements de modèle SaaS ou cloud avec impact significatif</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Informations sur le logiciel */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Informations sur le logiciel</h2>
                  <p className="text-sm text-gray-600">Détails de base sur le projet concerné</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nom de l'entreprise *
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleInputChange}
                    required
                    placeholder="ex: HashiCorp"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="productName" className="block text-sm font-semibold text-gray-900 mb-2">
                    Nom du produit *
                  </label>
                  <input
                    type="text"
                    id="productName"
                    name="productName"
                    value={formData.productName}
                    onChange={handleInputChange}
                    required
                    placeholder="ex: Terraform"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-semibold text-gray-900 mb-2">
                    Catégorie *
                  </label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors appearance-none bg-white"
                  >
                    <option value="">Sélectionnez une catégorie</option>
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="changeDate" className="block text-sm font-semibold text-gray-900 mb-2">
                    Date du changement *
                  </label>
                  <input
                    type="date"
                    id="changeDate"
                    name="changeDate"
                    value={formData.changeDate}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Détails du changement */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Détails du changement</h2>
                  <p className="text-sm text-gray-600">Description précise de la modification</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="oldLicense" className="block text-sm font-semibold text-gray-900 mb-2">
                      Ancienne licence / modèle *
                    </label>
                    <input
                      type="text"
                      id="oldLicense"
                      name="oldLicense"
                      value={formData.oldLicense}
                      onChange={handleInputChange}
                      required
                      placeholder="ex: MPL 2.0"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="newLicense" className="block text-sm font-semibold text-gray-900 mb-2">
                      Nouvelle licence / modèle *
                    </label>
                    <input
                      type="text"
                      id="newLicense"
                      name="newLicense"
                      value={formData.newLicense}
                      onChange={handleInputChange}
                      required
                      placeholder="ex: BSL 1.1"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-semibold text-gray-900 mb-2">
                    Description détaillée *
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    placeholder="Décrivez le changement, son contexte, et les raisons invoquées par l'entreprise..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors resize-none"
                  />
                </div>

                <div>
                  <label htmlFor="impact" className="block text-sm font-semibold text-gray-900 mb-2">
                    Impact principal *
                  </label>
                  <input
                    type="text"
                    id="impact"
                    name="impact"
                    value={formData.impact}
                    onChange={handleInputChange}
                    required
                    placeholder="ex: Restriction commerciale majeure"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="affectedUsers" className="block text-sm font-semibold text-gray-900 mb-2">
                    Utilisateurs affectés *
                  </label>
                  <input
                    type="text"
                    id="affectedUsers"
                    name="affectedUsers"
                    value={formData.affectedUsers}
                    onChange={handleInputChange}
                    required
                    placeholder="ex: Milliers d'entreprises, Fournisseurs cloud..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Sources */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <ExternalLink className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Sources et références</h2>
                  <p className="text-sm text-gray-600">Liens vers les annonces officielles et articles</p>
                </div>
              </div>

              <div className="space-y-4">
                {formData.sources.map((source, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="url"
                      value={source}
                      onChange={(e) => handleSourceChange(index, e.target.value)}
                      placeholder="https://..."
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                    />
                    {formData.sources.length > 1 && (
                      <button
                        type="button"
                        onClick={() => removeSource(index)}
                        className="px-4 py-3 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    )}
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addSource}
                  className="text-sm text-blue-600 hover:text-blue-700 font-medium"
                >
                  + Ajouter une source
                </button>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Documents complémentaires (optionnel)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                  <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="hidden"
                    id="file-upload"
                  />
                  <label htmlFor="file-upload" className="cursor-pointer">
                    <span className="text-sm text-gray-600">
                      Cliquez pour ajouter des captures d'écran, PDF, etc.
                    </span>
                  </label>
                  {files.length > 0 && (
                    <div className="mt-4 text-sm text-gray-700">
                      {files.length} fichier(s) sélectionné(s)
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Vos informations */}
            <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Vos informations</h2>
                  <p className="text-sm text-gray-600">Pour vous contacter si besoin de clarifications</p>
                </div>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="reporterName" className="block text-sm font-semibold text-gray-900 mb-2">
                      Votre nom *
                    </label>
                    <input
                      type="text"
                      id="reporterName"
                      name="reporterName"
                      value={formData.reporterName}
                      onChange={handleInputChange}
                      required
                      placeholder="ex: Jean Dupont"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="reporterEmail" className="block text-sm font-semibold text-gray-900 mb-2">
                      Votre email *
                    </label>
                    <input
                      type="email"
                      id="reporterEmail"
                      name="reporterEmail"
                      value={formData.reporterEmail}
                      onChange={handleInputChange}
                      required
                      placeholder="jean.dupont@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="reporterOrganization" className="block text-sm font-semibold text-gray-900 mb-2">
                    Organisation (optionnel)
                  </label>
                  <input
                    type="text"
                    id="reporterOrganization"
                    name="reporterOrganization"
                    value={formData.reporterOrganization}
                    onChange={handleInputChange}
                    placeholder="ex: Acme Corp"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                  />
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <p className="text-xs text-gray-600">
                    <strong>Confidentialité :</strong> Vos informations personnelles ne seront jamais publiées. 
                    Elles servent uniquement à vous contacter pour validation et vous serez crédité (si vous le souhaitez) 
                    comme contributeur du cas documenté.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-8 text-white text-center">
              <h3 className="text-2xl font-bold mb-4">Prêt à soumettre ?</h3>
              <p className="text-gray-300 mb-6">
                Notre équipe analysera votre signalement sous 2-3 jours ouvrés
              </p>
              <button
                type="submit"
                className="px-10 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2 text-lg shadow-xl"
              >
                <Send className="w-5 h-5" />
                Soumettre le signalement
              </button>
              <p className="text-xs text-gray-400 mt-4">
                * Champs obligatoires
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-4">
            Merci de contribuer à la transparence de l'écosystème logiciel
          </p>
          <p className="text-sm text-gray-500">
            © 2025 OpenBait.org - Projet communautaire non-lucratif
          </p>
        </div>
      </footer>
    </div>
  );
}
