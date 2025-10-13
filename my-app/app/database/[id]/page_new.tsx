'use client';

import React from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { 
  Shield, 
  ArrowLeft, 
  Calendar, 
  Lock, 
  Unlock,
  FileText,
  Building2,
  ExternalLink,
  AlertTriangle,
  Loader,
  CheckCircle
} from 'lucide-react';

export default function CaseDetailPage() {
  const params = useParams();
  const id = params.id as string;
  const [caseData, setCaseData] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  // Charger le cas depuis l'API
  React.useEffect(() => {
    fetchCase();
  }, [id]);

  const fetchCase = async () => {
    try {
      const response = await fetch(`/api/cases/${id}`);
      if (response.ok) {
        const data = await response.json();
        setCaseData(data);
      } else {
        setError('Cas non trouvé');
      }
    } catch (err) {
      console.error('Erreur:', err);
      setError('Erreur lors du chargement');
    } finally {
      setLoading(false);
    }
  };

  // État de chargement
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <Loader className="w-12 h-12 text-gray-900 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Chargement du cas...</p>
        </div>
      </div>
    );
  }

  // État d'erreur ou cas non trouvé
  if (error || !caseData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cas non trouvé</h1>
          <p className="text-gray-600 mb-8">Le cas demandé n'existe pas dans notre base de données</p>
          <Link
            href="/database"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour à la base de données
          </Link>
        </div>
      </div>
    );
  }

  // Parser les sources si elles sont en JSON string
  let sources = [];
  try {
    sources = typeof caseData.sources === 'string' 
      ? JSON.parse(caseData.sources) 
      : (caseData.sources || []);
  } catch (e) {
    console.error('Erreur parsing sources:', e);
  }

  // Formater la date
  const changeYear = new Date(caseData.changeDate).getFullYear();

  const getCategoryBadge = (category: string) => {
    const colors: Record<string, string> = {
      'Database': 'bg-blue-50 text-blue-700',
      'Infrastructure': 'bg-purple-50 text-purple-700',
      'Development Tools': 'bg-green-50 text-green-700',
      'Monitoring': 'bg-orange-50 text-orange-700',
      'Security': 'bg-red-50 text-red-700',
    };
    return colors[category] || 'bg-gray-50 text-gray-700';
  };

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
                <div className="text-xs text-gray-500">Détail du cas</div>
              </div>
            </Link>
            <Link 
              href="/database"
              className="px-5 py-2 border-2 border-gray-300 text-gray-900 text-sm font-medium rounded hover:border-gray-900 transition-all inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour à la base
            </Link>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
            <Link href="/" className="hover:text-gray-900">Accueil</Link>
            <span>/</span>
            <Link href="/database" className="hover:text-gray-900">Base de données</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{caseData.companyName}</span>
          </div>

          {/* En-tête du cas */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className={`px-3 py-1 text-sm font-medium rounded-full ${getCategoryBadge(caseData.category)}`}>
                    {caseData.category}
                  </span>
                  <span className="px-3 py-1 bg-green-50 text-green-700 text-sm font-medium rounded-full border border-green-200 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" />
                    Vérifié
                  </span>
                  {caseData.reportCount >= 20 && (
                    <span className="px-3 py-1 bg-red-50 text-red-700 text-sm font-bold rounded-full border border-red-200 flex items-center gap-1">
                      <AlertTriangle className="w-4 h-4" />
                      {caseData.reportCount} signalements
                    </span>
                  )}
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {caseData.companyName} - {caseData.productName}
                </h1>
                <p className="text-xl text-gray-600 mb-4">{caseData.description}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Année</div>
                <div className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  {changeYear}
                </div>
              </div>
            </div>

            {/* Changement de licence */}
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="text-sm text-gray-500 mb-3 font-medium">CHANGEMENT DE MODÈLE</div>
              <div className="flex items-center justify-center gap-6">
                <div className="flex-1 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Unlock className="w-5 h-5 text-green-600" />
                    <span className="text-sm text-gray-500">AVANT</span>
                  </div>
                  <div className="font-mono text-lg font-semibold text-gray-900">
                    {caseData.licenseInitial}
                  </div>
                </div>
                <div className="text-gray-400">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
                <div className="flex-1 text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <Lock className="w-5 h-5 text-red-600" />
                    <span className="text-sm text-gray-500">APRÈS</span>
                  </div>
                  <div className="font-mono text-lg font-semibold text-gray-900">
                    {caseData.licenseFinal}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contenu principal */}
      <section className="py-12">
        <div className="max-w-5xl mx-auto px-6 space-y-8">
          {/* Description complète */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Description détaillée
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg whitespace-pre-line">
              {caseData.description}
            </p>
          </div>

          {/* Analyse légale */}
          {caseData.legalAnalysis && (
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6" />
                Analyse légale
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Licence initiale</h3>
                  <p className="text-gray-700 font-mono bg-green-50 p-3 rounded border border-green-200">
                    {caseData.licenseInitial}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Nouvelle licence</h3>
                  <p className="text-gray-700 font-mono bg-red-50 p-3 rounded border border-red-200">
                    {caseData.licenseFinal}
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Analyse</h3>
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {caseData.legalAnalysis}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Réaction de la communauté */}
          {caseData.communityReaction && (
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Building2 className="w-6 h-6" />
                Réaction de la communauté
              </h2>
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {caseData.communityReaction}
                </p>
              </div>
            </div>
          )}

          {/* Informations complémentaires */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations complémentaires</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {caseData.website && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Site web</h3>
                  <a 
                    href={caseData.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 hover:underline inline-flex items-center gap-1"
                  >
                    {caseData.website}
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              )}
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Date de changement</h3>
                <p className="text-gray-700">
                  {new Date(caseData.changeDate).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Signalements</h3>
                <p className="text-2xl font-bold text-gray-900">{caseData.reportCount}</p>
              </div>
              {caseData.reporter && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Signalé par</h3>
                  <p className="text-gray-700">{caseData.reporter.email}</p>
                </div>
              )}
            </div>
          </div>

          {/* Sources */}
          {sources.length > 0 && (
            <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <ExternalLink className="w-6 h-6" />
                Sources et références
              </h2>
              <div className="space-y-4">
                {sources.map((source: any, index: number) => (
                  <a
                    key={index}
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-900 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-700 flex items-center gap-2">
                          {source.title}
                          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                        </h3>
                        <p className="text-sm text-gray-500">{source.url}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-white mt-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-gray-600 mb-2">
                Ce cas est documenté et vérifié par la communauté OpenBait.org
              </p>
              <p className="text-sm text-gray-500">
                Dernière mise à jour : {new Date(caseData.updatedAt).toLocaleDateString('fr-FR')}
              </p>
            </div>
            <Link
              href="/database"
              className="px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Voir tous les cas
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
