'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Code, Calendar, Building2, Lock, Unlock, ArrowRight, Search, Filter, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react';
import NotificationBell from '@/app/components/NotificationBell';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageSelector from '@/app/components/LanguageSelector';

// Types
interface Case {
  id: string;
  company: string;
  product: string;
  change: string;
  year: string;
  impact: string;
  affected: string;
  status: 'critical' | 'warning' | 'info' | 'stable';
  description: string;
  category: string;
}

export default function DatabasePage() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [cases, setCases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [criticalCount, setCriticalCount] = useState(0);
  const [warningCount, setWarningCount] = useState(0);
  const [stableCount, setStableCount] = useState(0);
  const [categoriesCount, setCategoriesCount] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Check authentication status
  React.useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // Charger les cas depuis l'API
  React.useEffect(() => {
    fetchCases();
  }, []);

  const fetchCases = async () => {
    try {
      const response = await fetch('/api/cases');
      if (response.ok) {
        const data = await response.json();
        setCases(data.cases);
        
        // Compter les cas par sévérité
        const critical = data.cases.filter((c: any) => c.severity === 'CRITICAL').length;
        const warning = data.cases.filter((c: any) => c.severity === 'WARNING').length;
        const stable = data.cases.filter((c: any) => c.severity === 'STABLE').length;
        
        setCriticalCount(critical);
        setWarningCount(warning);
        setStableCount(stable);
        
        // Compter les catégories uniques
        const uniqueCategories = new Set(data.cases.map((c: any) => c.category));
        setCategoriesCount(uniqueCategories.size);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des cas:', error);
    } finally {
      setLoading(false);
    }
  };

  // Données statiques en fallback (à supprimer une fois la BDD remplie)
  const staticCases: Case[] = [
    {
      id: 'hashicorp-terraform-2023',
      company: "HashiCorp",
      product: "Terraform",
      change: "MPL 2.0 → BSL 1.1",
      year: "2023",
      impact: "Restriction commerciale majeure",
      affected: "Milliers d'entreprises",
      status: "critical",
      description: "Changement de licence empêchant l'utilisation commerciale sans accord",
      category: "Infrastructure"
    },
    {
      id: 'docker-desktop-2021',
      company: "Docker Inc.",
      product: "Docker Desktop",
      change: "Gratuit → Payant",
      year: "2021",
      impact: "Entreprises 250+ employés",
      affected: "Grandes organisations",
      status: "critical",
      description: "Introduction de frais pour les entreprises de plus de 250 employés",
      category: "Conteneurisation"
    },
    {
      id: 'adobe-creative-suite-2013',
      company: "Adobe",
      product: "Creative Suite",
      change: "Licence perpétuelle → Abonnement",
      year: "2013",
      impact: "Coûts récurrents obligatoires",
      affected: "Millions d'utilisateurs",
      status: "critical",
      description: "Abandon complet du modèle de licence perpétuelle",
      category: "Créativité"
    },
    {
      id: 'redis-modules-2018',
      company: "Redis Labs",
      product: "Redis Modules",
      change: "BSD → Commons Clause",
      year: "2018",
      impact: "Restriction de vente",
      affected: "Fournisseurs cloud",
      status: "warning",
      description: "Ajout d'une clause interdisant la vente du logiciel",
      category: "Base de données"
    },
    {
      id: 'elastic-elasticsearch-2021',
      company: "Elastic",
      product: "Elasticsearch & Kibana",
      change: "Apache 2.0 → SSPL",
      year: "2021",
      impact: "Licence non-OSI",
      affected: "Providers cloud",
      status: "critical",
      description: "Passage à une licence considérée non open source",
      category: "Recherche"
    },
    {
      id: 'mongodb-2018',
      company: "MongoDB Inc.",
      product: "MongoDB",
      change: "AGPL → SSPL",
      year: "2018",
      impact: "Restriction cloud majeure",
      affected: "AWS et autres clouds",
      status: "critical",
      description: "Création de la licence SSPL pour contrer les cloud providers",
      category: "Base de données"
    },
    {
      id: 'gitlab-features-2020',
      company: "GitLab",
      product: "GitLab CE",
      change: "Core → Premium features",
      year: "2020",
      impact: "Fonctionnalités restreintes",
      affected: "Utilisateurs communautaires",
      status: "warning",
      description: "Déplacement progressif de fonctionnalités vers les versions payantes",
      category: "DevOps"
    },
    {
      id: 'confluent-kafka-2019',
      company: "Confluent",
      product: "Kafka Components",
      change: "Apache 2.0 → Confluent License",
      year: "2019",
      impact: "Restriction SaaS",
      affected: "Cloud providers",
      status: "warning",
      description: "Licence interdisant l'utilisation en tant que service",
      category: "Streaming"
    },
    {
      id: 'cockroachdb-2019',
      company: "Cockroach Labs",
      product: "CockroachDB",
      change: "Apache 2.0 → BSL",
      year: "2019",
      impact: "Restriction commerciale temporaire",
      affected: "Concurrents cloud",
      status: "warning",
      description: "Passage à une licence avec restrictions temporaires",
      category: "Base de données"
    },
    {
      id: 'linux-kernel-stable',
      company: "Linux Foundation",
      product: "Linux Kernel",
      change: "GPL 2.0 (maintenu)",
      year: "1991",
      impact: "Aucun changement",
      affected: "Écosystème mondial",
      status: "stable",
      description: "Maintien de la licence GPL 2.0 depuis l'origine, garantie de stabilité",
      category: "Système"
    },
    {
      id: 'python-stable',
      company: "Python Software Foundation",
      product: "Python",
      change: "PSF License (maintenu)",
      year: "1991",
      impact: "Aucun changement",
      affected: "Millions de développeurs",
      status: "stable",
      description: "Licence permissive stable et open source depuis toujours",
      category: "Langage"
    },
    {
      id: 'postgresql-stable',
      company: "PostgreSQL Global Development Group",
      product: "PostgreSQL",
      change: "PostgreSQL License (maintenu)",
      year: "1996",
      impact: "Aucun changement",
      affected: "Entreprises du monde entier",
      status: "stable",
      description: "Licence permissive type MIT, jamais changée, totalement libre",
      category: "Base de données"
    },
    {
      id: 'nginx-stable',
      company: "F5 Networks",
      product: "NGINX Open Source",
      change: "BSD 2-Clause (maintenu)",
      year: "2004",
      impact: "Aucun changement",
      affected: "Infrastructure web mondiale",
      status: "stable",
      description: "Version open source maintenue malgré l'acquisition, licence stable",
      category: "Infrastructure"
    }
  ];

  // Filtrage
  const filteredCases = cases.filter(case_item => {
    const matchesSearch = 
      case_item.companyName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_item.productName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_item.description?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = filterCategory === 'all' || case_item.category === filterCategory;
    
    return matchesSearch && matchesCategory;
  });

  // Catégories uniques
  const categories = Array.from(new Set(cases.map(c => c.category))).sort();

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'critical': return 'bg-red-50 text-red-700 border-red-200';
      case 'warning': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'info': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'stable': return 'bg-green-50 text-green-700 border-green-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'critical': return <AlertTriangle className="w-3 h-3" />;
      case 'warning': return <TrendingDown className="w-3 h-3" />;
      case 'info': return <CheckCircle className="w-3 h-3" />;
      case 'stable': return <CheckCircle className="w-3 h-3" />;
      default: return null;
    }
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
                <div className="text-xs text-gray-500">{t('db.nav.subtitle')}</div>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              {isLoggedIn && <NotificationBell />}
              <LanguageSelector />
              <Link 
                href="/"
                className="px-5 py-2 border-2 border-gray-300 text-gray-900 text-sm font-medium rounded hover:border-gray-900 transition-all"
              >
                {t('db.nav.back')}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              {t('db.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('db.subtitle')}
            </p>
          </div>

          {/* Stats rapides */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-gray-900">{cases.length}</div>
              <div className="text-sm text-gray-600">{t('db.stats.documented')}</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-red-600 flex items-center justify-center gap-2">
                <AlertTriangle className="w-6 h-6" />
                {criticalCount}
              </div>
              <div className="text-sm text-gray-600">{t('db.stats.critical')}</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-orange-600 flex items-center justify-center gap-2">
                <TrendingDown className="w-6 h-6" />
                {warningCount}
              </div>
              <div className="text-sm text-gray-600">{t('db.stats.warnings')}</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-green-600 flex items-center justify-center gap-2">
                <CheckCircle className="w-6 h-6" />
                {stableCount}
              </div>
              <div className="text-sm text-gray-600">{t('db.stats.stable')}</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-center hover:shadow-lg transition-shadow">
              <div className="text-3xl font-bold text-blue-600">{categoriesCount}</div>
              <div className="text-sm text-gray-600">{t('db.stats.categories')}</div>
            </div>
          </div>

          {/* Filtres et recherche */}
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Recherche */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder={t('db.search.placeholder')}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors"
                />
              </div>

              {/* Filtre statut */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors appearance-none bg-white"
                >
                  <option value="all">{t('db.filter.allStatus')}</option>
                  <option value="critical">{t('db.filter.critical')}</option>
                  <option value="warning">{t('db.filter.warnings')}</option>
                  <option value="stable">{t('db.filter.stable')}</option>
                  <option value="info">{t('db.filter.info')}</option>
                </select>
              </div>

              {/* Filtre catégorie */}
              <div className="relative">
                <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900 transition-colors appearance-none bg-white"
                >
                  <option value="all">{t('db.filter.allCategories')}</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Résultats */}
            <div className="mt-4 text-sm text-gray-600">
              {t('db.search.results', { count: filteredCases.length })}
            </div>
          </div>
        </div>
      </section>

      {/* Grid des cas */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {loading ? (
            <div className="text-center py-20">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto mb-4"></div>
              <p className="text-gray-600">{t('db.loading')}</p>
            </div>
          ) : filteredCases.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{t('db.search.noResults')}</h3>
              <p className="text-gray-600">
                {t('db.search.noResultsDesc')}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCases.map((case_item) => (
                <Link
                  key={case_item.id}
                  href={`/database/${case_item.id}`}
                  className="group"
                >
                  <div className="bg-white border border-gray-200 rounded-xl p-6 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-gray-900">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-gray-700 transition-colors">
                          {case_item.companyName || case_item.company}
                        </h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <Code className="w-3 h-3" />
                          {case_item.productName || case_item.product}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {case_item.changeDate || case_item.year}
                        </span>
                        {case_item.reportCount && case_item.reportCount >= 20 && (
                          <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">
                            🔥 {case_item.reportCount}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Catégorie */}
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">
                        {case_item.category}
                      </span>
                    </div>

                    {/* Changement de licence */}
                    <div className="pb-4 border-b border-gray-100 mb-4">
                      <div className="text-xs text-gray-500 mb-2 font-medium">
                        {t('db.card.licenseChange')}
                      </div>
                      <div className="flex items-center justify-between text-sm gap-2">
                        <span className="font-mono text-gray-700 flex items-center gap-1 text-xs">
                          <Unlock className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{case_item.licenseInitial || case_item.change?.split('→')[0]?.trim() || 'N/A'}</span>
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="font-mono text-gray-900 font-medium flex items-center gap-1 text-xs">
                          <Lock className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{case_item.licenseFinal || case_item.change?.split('→')[1]?.trim() || 'N/A'}</span>
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                      {case_item.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-end pt-4 border-t border-gray-100">
                      <span className="text-sm text-gray-900 font-medium group-hover:gap-2 transition-all flex items-center gap-1">
                        {t('db.card.viewDetails')}
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-white mt-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-4">
            {t('db.footer.maintained')}
          </p>
          <p className="text-sm text-gray-500">
            {t('db.footer.copyright')}
          </p>
        </div>
      </footer>
    </div>
  );
}
