'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, Database, Users, FileText, AlertTriangle, CheckCircle, Clock, X, Eye, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

interface Case {
  id: string;
  companyName: string;
  productName: string;
  category: string;
  status: 'PENDING' | 'APPROVED' | 'REJECTED';
  reportCount: number;
  createdAt: string;
  reporter?: {
    name: string;
    email: string;
  };
}

export default function AdminPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [cases, setCases] = useState<Case[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<'ALL' | 'PENDING' | 'APPROVED' | 'REJECTED'>('PENDING');

  useEffect(() => {
    // Vérifier l'authentification
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');

    if (!token || !userStr) {
      router.push('/auth/login');
      return;
    }

    const userData = JSON.parse(userStr);
    
    // Vérifier le rôle (uniquement ADMIN et MODERATOR)
    if (userData.role !== 'ADMIN' && userData.role !== 'MODERATOR') {
      router.push('/dashboard');
      return;
    }

    setUser(userData);
    loadCases(token);
  }, [router]);

  const loadCases = async (token: string) => {
    try {
      const response = await fetch('/api/admin/cases', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      if (response.ok) {
        const data = await response.json();
        setCases(data.cases);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des cas:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusChange = async (caseId: string, newStatus: 'APPROVED' | 'REJECTED') => {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
      const response = await fetch(`/api/admin/cases/${caseId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });

      if (response.ok) {
        // Recharger les cas
        loadCases(token);
      }
    } catch (error) {
      console.error('Erreur lors de la mise à jour du statut:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/');
  };

  const filteredCases = cases.filter(c => filter === 'ALL' || c.status === filter);

  const stats = {
    pending: cases.filter(c => c.status === 'PENDING').length,
    approved: cases.filter(c => c.status === 'APPROVED').length,
    rejected: cases.filter(c => c.status === 'REJECTED').length,
    total: cases.length
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gray-900 rounded-lg flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">OpenBait.org</span>
              </Link>
              <span className="px-3 py-1 bg-purple-100 text-purple-700 text-sm font-semibold rounded-full">
                {user?.role}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">{user?.name}</span>
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-sm text-gray-700 hover:text-gray-900 font-medium"
              >
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Page Title */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Panneau d'administration</h1>
            <p className="text-gray-600">Gérez les cas signalés par la communauté</p>
          </div>
          <Link 
            href="/admin/cases/add"
            className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-lg hover:shadow-xl"
          >
            <FileText className="w-5 h-5" />
            Ajouter un cas
          </Link>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-yellow-600" />
              <span className="text-3xl font-bold text-gray-900">{stats.pending}</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">En attente</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-600" />
              <span className="text-3xl font-bold text-gray-900">{stats.approved}</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">Approuvés</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <X className="w-8 h-8 text-red-600" />
              <span className="text-3xl font-bold text-gray-900">{stats.rejected}</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">Rejetés</p>
          </div>
          
          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <Database className="w-8 h-8 text-blue-600" />
              <span className="text-3xl font-bold text-gray-900">{stats.total}</span>
            </div>
            <p className="text-sm text-gray-600 font-medium">Total</p>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl p-4 border border-gray-200 mb-6">
          <div className="flex gap-2">
            {(['ALL', 'PENDING', 'APPROVED', 'REJECTED'] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === status
                    ? 'bg-gray-900 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {status === 'ALL' ? 'Tous' : 
                 status === 'PENDING' ? 'En attente' :
                 status === 'APPROVED' ? 'Approuvés' : 'Rejetés'}
              </button>
            ))}
          </div>
        </div>

        {/* Cases List */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {filteredCases.length === 0 ? (
            <div className="p-12 text-center">
              <Database className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-600 text-lg">Aucun cas à afficher</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Cas
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Catégorie
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      🔥 Signalements
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Signalé par
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Statut
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredCases.map((case_item) => (
                    <tr key={case_item.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <div>
                          <p className="font-semibold text-gray-900">{case_item.companyName}</p>
                          <p className="text-sm text-gray-600">{case_item.productName}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full">
                          {case_item.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <span className={`text-lg font-bold ${
                            case_item.reportCount >= 40 ? 'text-red-600' :
                            case_item.reportCount >= 20 ? 'text-orange-600' :
                            case_item.reportCount >= 10 ? 'text-yellow-600' :
                            'text-gray-600'
                          }`}>
                            {case_item.reportCount}
                          </span>
                          {case_item.reportCount >= 40 && (
                            <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-bold rounded-full">
                              🔥 URGENT
                            </span>
                          )}
                          {case_item.reportCount >= 20 && case_item.reportCount < 40 && (
                            <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">
                              ⚠️ PRIORITÉ
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div>
                          <p className="text-sm font-medium text-gray-900">{case_item.reporter?.name}</p>
                          <p className="text-xs text-gray-500">{case_item.reporter?.email}</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <p className="text-sm text-gray-600">
                          {new Date(case_item.createdAt).toLocaleDateString('fr-FR')}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        {case_item.status === 'PENDING' && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-yellow-100 text-yellow-700 text-xs font-medium rounded-full">
                            <Clock className="w-3 h-3" />
                            En attente
                          </span>
                        )}
                        {case_item.status === 'APPROVED' && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                            <CheckCircle className="w-3 h-3" />
                            Approuvé
                          </span>
                        )}
                        {case_item.status === 'REJECTED' && (
                          <span className="inline-flex items-center gap-1 px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">
                            <X className="w-3 h-3" />
                            Rejeté
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          {case_item.status === 'PENDING' && (
                            <>
                              <button
                                onClick={() => handleStatusChange(case_item.id, 'APPROVED')}
                                className="p-2 text-green-600 hover:bg-green-50 rounded-lg transition-colors"
                                title="Approuver"
                              >
                                <CheckCircle className="w-5 h-5" />
                              </button>
                              <button
                                onClick={() => handleStatusChange(case_item.id, 'REJECTED')}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                title="Rejeter"
                              >
                                <X className="w-5 h-5" />
                              </button>
                            </>
                          )}
                          <Link
                            href={`/admin/cases/edit/${case_item.id}`}
                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Voir et modifier"
                          >
                            <Eye className="w-5 h-5" />
                          </Link>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
