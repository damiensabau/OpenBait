'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Shield, FileText, Clock, CheckCircle, X, Plus } from 'lucide-react';
import NotificationBell from '@/app/components/NotificationBell';

interface User {
  id: string;
  name: string;
  email: string;
  role: string;
}

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Vérifier l'authentification
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');

    if (!token || !userStr) {
      router.push('/auth/login');
      return;
    }

    const userData = JSON.parse(userStr);
    setUser(userData);
    setLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    router.push('/');
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
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                {user?.role}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <NotificationBell />
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
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Bienvenue, {user?.name}
          </h1>
          <p className="text-gray-600">Votre espace personnel OpenBait</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <Link href="/report" className="group">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-gray-900 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gray-900 rounded-lg group-hover:scale-110 transition-transform">
                  <Plus className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-gray-500">Action rapide</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Signaler un nouveau cas</h3>
              <p className="text-gray-600">Documentez un changement de licence abusif</p>
            </div>
          </Link>

          <Link href="/database" className="group">
            <div className="bg-white rounded-xl p-6 border-2 border-gray-200 hover:border-gray-900 transition-all">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-blue-600 rounded-lg group-hover:scale-110 transition-transform">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <span className="text-sm text-gray-500">Consulter</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Explorer la base de données</h3>
              <p className="text-gray-600">Consultez tous les cas documentés</p>
            </div>
          </Link>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
            <div className="flex items-center gap-3 mb-3">
              <Clock className="w-6 h-6 text-yellow-600" />
              <h3 className="font-bold text-gray-900">Cas en attente</h3>
            </div>
            <p className="text-sm text-gray-700">
              Vos cas signalés sont en cours de vérification par nos modérateurs.
            </p>
          </div>

          <div className="bg-green-50 rounded-xl p-6 border border-green-200">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6 text-green-600" />
              <h3 className="font-bold text-gray-900">Cas approuvés</h3>
            </div>
            <p className="text-sm text-gray-700">
              Une fois approuvés, vos cas seront publiés dans la base de données publique.
            </p>
          </div>

          <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-gray-900">Contribuez</h3>
            </div>
            <p className="text-sm text-gray-700">
              Aidez-nous à documenter les changements de licences et à protéger la communauté.
            </p>
          </div>
        </div>

        {/* Recent Activity (Placeholder) */}
        <div className="mt-8 bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Activité récente</h2>
          <div className="text-center py-12">
            <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-600">Aucune activité récente</p>
            <Link 
              href="/report"
              className="inline-block mt-4 px-6 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              Signaler votre premier cas
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
