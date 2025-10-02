'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Code, Calendar, Building2, Lock, Unlock, ArrowRight, Search, Filter, TrendingDown, AlertTriangle, CheckCircle } from 'lucide-react';

// Types
interface Case {
  id: string;
  company: string;
  product: string;
  change: string;
  year: string;
  impact: string;
  affected: string;
  status: 'critical' | 'warning' | 'info';
  description: string;
  category: string;
}

export default function DatabasePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState<string>('all');
  const [filterCategory, setFilterCategory] = useState<string>('all');

  // Base de données des cas
  const cases: Case[] = [
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
    }
  ];

  // Filtrage
  const filteredCases = cases.filter(case_item => {
    const matchesSearch = 
      case_item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_item.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      case_item.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || case_item.status === filterStatus;
    const matchesCategory = filterCategory === 'all' || case_item.category === filterCategory;
    
    return matchesSearch && matchesStatus && matchesCategory;
  });

  // Catégories uniques
  const categories = Array.from(new Set(cases.map(c => c.category))).sort();

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'critical': return 'bg-red-50 text-red-700 border-red-200';
      case 'warning': return 'bg-orange-50 text-orange-700 border-orange-200';
      case 'info': return 'bg-blue-50 text-blue-700 border-blue-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'critical': return <AlertTriangle className="w-3 h-3" />;
      case 'warning': return <TrendingDown className="w-3 h-3" />;
      case 'info': return <CheckCircle className="w-3 h-3" />;
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
                <div className="text-xs text-gray-500">Base de données</div>
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

      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Base de données complète
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tous les cas documentés de changements de modèles économiques, 
              avec analyses détaillées et timeline complète
            </p>
          </div>

          {/* Stats rapides */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
              <div className="text-3xl font-bold text-gray-900">{cases.length}</div>
              <div className="text-sm text-gray-600">Cas documentés</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
              <div className="text-3xl font-bold text-red-600">
                {cases.filter(c => c.status === 'critical').length}
              </div>
              <div className="text-sm text-gray-600">Critiques</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
              <div className="text-3xl font-bold text-yellow-500">
                {cases.filter(c => c.status === 'warning').length}
              </div>
              <div className="text-sm text-gray-600">Avertissements</div>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 text-center">
              <div className="text-3xl font-bold text-gray-900">{categories.length}</div>
              <div className="text-sm text-gray-600">Catégories</div>
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
                  placeholder="Rechercher une entreprise, produit..."
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
                  <option value="all">Tous les statuts</option>
                  <option value="critical">Critiques</option>
                  <option value="warning">Avertissements</option>
                  <option value="info">Informatifs</option>
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
                  <option value="all">Toutes les catégories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Résultats */}
            <div className="mt-4 text-sm text-gray-600">
              {filteredCases.length} résultat{filteredCases.length > 1 ? 's' : ''} trouvé{filteredCases.length > 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </section>

      {/* Grid des cas */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          {filteredCases.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-10 h-10 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Aucun résultat</h3>
              <p className="text-gray-600">
                Essayez de modifier vos filtres ou votre recherche
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
                          {case_item.company}
                        </h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <Code className="w-3 h-3" />
                          {case_item.product}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {case_item.year}
                        </span>
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
                      <div className="text-xs text-gray-500 mb-2 font-medium">CHANGEMENT</div>
                      <div className="flex items-center justify-between text-sm gap-2">
                        <span className="font-mono text-gray-700 flex items-center gap-1 text-xs">
                          <Unlock className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{case_item.change.split('→')[0].trim()}</span>
                        </span>
                        <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        <span className="font-mono text-gray-900 font-medium flex items-center gap-1 text-xs">
                          <Lock className="w-3 h-3 flex-shrink-0" />
                          <span className="truncate">{case_item.change.split('→')[1].trim()}</span>
                        </span>
                      </div>
                    </div>

                    {/* Impact */}
                    <div className="mb-4">
                      <div className="text-xs text-gray-500 mb-2 font-medium">IMPACT</div>
                      <div className="text-sm text-gray-700 mb-1">{case_item.impact}</div>
                      <div className="text-xs text-gray-500 flex items-center gap-1">
                        <Building2 className="w-3 h-3" />
                        {case_item.affected}
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                      {case_item.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full border flex items-center gap-1 ${getStatusColor(case_item.status)}`}>
                        {getStatusIcon(case_item.status)}
                        {case_item.status === 'critical' ? 'Critique' : case_item.status === 'warning' ? 'Avertissement' : 'Info'}
                      </span>
                      <span className="text-sm text-gray-900 font-medium group-hover:gap-2 transition-all flex items-center gap-1">
                        Détails
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
            Base de données maintenue par la communauté OpenBait.org
          </p>
          <p className="text-sm text-gray-500">
            © 2025 OpenBait.org - Projet communautaire non-lucratif sous licence MIT
          </p>
        </div>
      </footer>
    </div>
  );
}
