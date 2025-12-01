'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface WatchedRepo {
  id: string;
  owner: string;
  name: string;
  url: string;
  currentLicense: string | null;
  stars: number | null;
  description: string | null;
  priority: string;
  isActive: boolean;
  lastChecked: string | null;
  changes: LicenseChange[];
}

interface LicenseChange {
  id: string;
  oldLicense: string | null;
  newLicense: string | null;
  severity: string;
  status: string;
  detectedAt: string;
  commitUrl: string | null;
  changeType: string;
  confidence: number;
}

export default function MonitoringDashboard() {
  const router = useRouter();
  const [repos, setRepos] = useState<WatchedRepo[]>([]);
  const [changes, setChanges] = useState<LicenseChange[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'repos' | 'changes'>('repos');
  const [showAddRepo, setShowAddRepo] = useState(false);
  const [scanning, setScanning] = useState(false);

  // Form state
  const [newRepo, setNewRepo] = useState({
    owner: '',
    name: '',
    priority: 'medium',
    notes: '',
  });

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('token');
      
      if (activeTab === 'repos') {
        const response = await fetch('/api/monitor/repos', {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
        const data = await response.json();
        setRepos(data.repos || []);
      } else {
        const response = await fetch('/api/monitor/changes?status=detected', {
          headers: {
            'Authorization': `Bearer ${token}`,
          }
        });
        const data = await response.json();
        setChanges(data.changes || []);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddRepo = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/monitor/repos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(newRepo),
      });

      if (response.ok) {
        setShowAddRepo(false);
        setNewRepo({ owner: '', name: '', priority: 'medium', notes: '' });
        fetchData();
        alert('Repository ajouté avec succès !');
      } else {
        const error = await response.json();
        alert(`Erreur: ${error.error}`);
      }
    } catch (error) {
      console.error('Error adding repo:', error);
      alert('Erreur lors de l\'ajout du repository');
    }
  };

  const handleScanNow = async () => {
    if (scanning) return;
    
    setScanning(true);
    try {
      const response = await fetch('/api/monitor/scan', {
        headers: {
          'Authorization': `Bearer ${process.env.CRON_SECRET || 'dev-secret'}`,
        }
      });
      
      const result = await response.json();
      alert(`Scan terminé ! ${result.changesDetected} changements détectés`);
      fetchData();
    } catch (error) {
      console.error('Error scanning:', error);
      alert('Erreur lors du scan');
    } finally {
      setScanning(false);
    }
  };

  const handleReviewChange = async (changeId: string, action: 'approve' | 'reject', createCase: boolean = false) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch('/api/monitor/changes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({ changeId, action, createCase }),
      });

      if (response.ok) {
        alert(`Changement ${action === 'approve' ? 'approuvé' : 'rejeté'}`);
        fetchData();
      } else {
        const error = await response.json();
        alert(`Erreur: ${error.error}`);
      }
    } catch (error) {
      console.error('Error reviewing change:', error);
      alert('Erreur lors de la review');
    }
  };

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'CRITICAL': return 'text-red-600 bg-red-50';
      case 'WARNING': return 'text-yellow-600 bg-yellow-50';
      case 'STABLE': return 'text-green-600 bg-green-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            🔍 License Monitoring Dashboard
          </h1>
          <p className="text-gray-600">
            Surveillance automatique des changements de licence sur GitHub
          </p>
        </div>

        {/* Tabs */}
        <div className="mb-6 border-b border-gray-200">
          <nav className="flex space-x-8">
            <button
              onClick={() => setActiveTab('repos')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'repos'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              📦 Repositories Surveillés ({repos.length})
            </button>
            <button
              onClick={() => setActiveTab('changes')}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'changes'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              🚨 Changements Détectés ({changes.length})
            </button>
          </nav>
        </div>

        {/* Actions */}
        <div className="mb-6 flex gap-4">
          {activeTab === 'repos' && (
            <>
              <button
                onClick={() => setShowAddRepo(true)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                ➕ Ajouter un Repository
              </button>
              <button
                onClick={handleScanNow}
                disabled={scanning}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 disabled:opacity-50"
              >
                {scanning ? '⏳ Scan en cours...' : '🔄 Lancer un Scan'}
              </button>
            </>
          )}
        </div>

        {/* Add Repository Modal */}
        {showAddRepo && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full">
              <h2 className="text-xl font-bold mb-4">Ajouter un Repository</h2>
              <form onSubmit={handleAddRepo}>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Owner (ex: facebook, microsoft)
                  </label>
                  <input
                    type="text"
                    value={newRepo.owner}
                    onChange={(e) => setNewRepo({ ...newRepo, owner: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name (ex: react, vscode)
                  </label>
                  <input
                    type="text"
                    value={newRepo.name}
                    onChange={(e) => setNewRepo({ ...newRepo, name: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Priorité
                  </label>
                  <select
                    value={newRepo.priority}
                    onChange={(e) => setNewRepo({ ...newRepo, priority: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  >
                    <option value="high">Haute</option>
                    <option value="medium">Moyenne</option>
                    <option value="low">Basse</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Notes (optionnel)
                  </label>
                  <textarea
                    value={newRepo.notes}
                    onChange={(e) => setNewRepo({ ...newRepo, notes: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    rows={3}
                  />
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                  >
                    Ajouter
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowAddRepo(false)}
                    className="flex-1 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Content */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
            <p className="mt-2 text-gray-600">Chargement...</p>
          </div>
        ) : activeTab === 'repos' ? (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Repository
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    License
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Stars
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Priorité
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Dernier Check
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Changements
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {repos.map((repo) => (
                  <tr key={repo.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <a 
                        href={repo.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-medium"
                      >
                        {repo.owner}/{repo.name}
                      </a>
                      {repo.description && (
                        <p className="text-sm text-gray-500 mt-1">{repo.description}</p>
                      )}
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-2 py-1 text-xs font-medium rounded bg-gray-100">
                        {repo.currentLicense || 'N/A'}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">
                      ⭐ {repo.stars?.toLocaleString() || '—'}
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded ${
                        repo.priority === 'high' ? 'bg-red-100 text-red-800' :
                        repo.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-green-100 text-green-800'
                      }`}>
                        {repo.priority}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {repo.lastChecked 
                        ? new Date(repo.lastChecked).toLocaleString('fr-FR')
                        : 'Jamais'}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium text-gray-900">
                        {repo.changes?.length || 0}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {repos.length === 0 && (
              <div className="text-center py-12 text-gray-500">
                Aucun repository surveillé. Ajoutez-en un pour commencer !
              </div>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {changes.map((change) => (
              <div key={change.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${getSeverityColor(change.severity)}`}>
                        {change.severity}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(change.detectedAt).toLocaleString('fr-FR')}
                      </span>
                      <span className="text-sm text-gray-500">
                        Confiance: {(change.confidence * 100).toFixed(0)}%
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Changement de licence détecté
                    </h3>
                    <div className="flex items-center gap-4 text-sm">
                      <div>
                        <span className="text-gray-600">Ancienne: </span>
                        <span className="font-medium">{change.oldLicense || 'Aucune'}</span>
                      </div>
                      <span className="text-gray-400">→</span>
                      <div>
                        <span className="text-gray-600">Nouvelle: </span>
                        <span className="font-medium">{change.newLicense || 'Aucune'}</span>
                      </div>
                    </div>
                    {change.commitUrl && (
                      <a
                        href={change.commitUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-blue-600 hover:underline mt-2 inline-block"
                      >
                        Voir le commit →
                      </a>
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleReviewChange(change.id, 'approve', false)}
                      className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700"
                    >
                      ✓ Approuver
                    </button>
                    <button
                      onClick={() => handleReviewChange(change.id, 'approve', true)}
                      className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700"
                    >
                      ✓ Créer un Cas
                    </button>
                    <button
                      onClick={() => handleReviewChange(change.id, 'reject')}
                      className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700"
                    >
                      ✗ Rejeter
                    </button>
                  </div>
                </div>
              </div>
            ))}
            {changes.length === 0 && (
              <div className="bg-white rounded-lg shadow p-12 text-center text-gray-500">
                Aucun changement en attente de review. Lancez un scan pour détecter des changements !
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
