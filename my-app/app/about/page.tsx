'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Target, Eye, Heart, Users, Globe, Scale, Zap, TrendingUp, Lock, Unlock, BookOpen, Award, Clock } from 'lucide-react';

export default function AboutPage() {
  const mission = [
    {
      icon: Target,
      title: 'Notre Mission',
      description: 'Documenter et analyser les changements de modèles économiques dans l\'écosystème logiciel pour permettre aux utilisateurs de faire des choix éclairés.'
    },
    {
      icon: Eye,
      title: 'Notre Vision',
      description: 'Un monde où les changements de licences et de modèles économiques sont transparents, anticipés et respectueux des communautés qui les utilisent.'
    },
    {
      icon: Heart,
      title: 'Nos Valeurs',
      description: 'Indépendance, transparence, rigueur scientifique et engagement communautaire au service de l\'intérêt général.'
    }
  ];

  const principles = [
    {
      icon: Scale,
      title: 'Neutralité totale',
      description: 'Aucune affiliation commerciale, aucun conflit d\'intérêt. Nous documentons les faits sans parti pris.',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: BookOpen,
      title: 'Rigueur méthodologique',
      description: 'Chaque cas est vérifié, sourcé et analysé selon un protocole strict de validation.',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Communauté d\'abord',
      description: 'Projet open source, données ouvertes, gouvernance transparente et participative.',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Impact mondial',
      description: 'Une base de données accessible à tous, partout, gratuitement et pour toujours.',
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const timeline = [
    {
      year: '2024',
      title: 'Conception du projet',
      description: 'Identification du besoin d\'une base de données centralisée sur les changements de licences logicielles.',
      icon: Clock
    },
    {
      year: '2025',
      title: 'Lancement officiel',
      description: 'Mise en ligne de OpenBait.org avec les premiers cas documentés et validation communautaire.',
      icon: Zap
    },
    {
      year: 'Futur',
      title: 'Expansion internationale',
      description: 'Développement d\'une API publique, traductions multilingues et partenariats institutionnels.',
      icon: TrendingUp
    }
  ];

  const stats = [
    { number: '13', label: 'Cas documentés', sublabel: 'Vérifiés et sourcés' },
    { number: '7', label: 'Catégories', sublabel: 'Infrastructure, BDD, etc.' },
    { number: '100%', label: 'Gratuit', sublabel: 'Et open source' },
    { number: '0%', label: 'Publicité', sublabel: 'Aucune monétisation' }
  ];

  const problems = [
    {
      title: 'Le "Bait and Switch"',
      description: 'Des entreprises lancent des projets open source gratuits pour créer une dépendance, puis changent leur modèle économique une fois l\'adoption massive atteinte.',
      icon: Lock,
      impact: 'Milliers d\'entreprises piégées'
    },
    {
      title: 'Manque de transparence',
      description: 'Les utilisateurs découvrent les changements trop tard, sans documentation centralisée ni historique des précédents.',
      icon: Eye,
      impact: 'Décisions non informées'
    },
    {
      title: 'Confusion juridique',
      description: 'La complexité des licences logicielles et leurs implications légales rendent difficile l\'évaluation des risques.',
      icon: Scale,
      impact: 'Risques légaux importants'
    }
  ];

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
                <div className="text-xs text-gray-500">À propos</div>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/team" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                Équipe
              </Link>
              <Link href="/partners" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                Partenaires
              </Link>
              <Link 
                href="/"
                className="px-5 py-2 border-2 border-gray-300 text-gray-900 text-sm font-medium rounded hover:border-gray-900 transition-all"
              >
                Retour à l'accueil
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-8 border border-white/20">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">Transparence • Indépendance • Communauté</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            À propos d'OpenBait.org
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Une initiative communautaire pour documenter et analyser les changements de modèles économiques 
            dans l'écosystème logiciel, au service de la transparence et de l'intérêt général.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm font-medium mb-1">{stat.label}</div>
                <div className="text-xs text-gray-400">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission, Vision, Valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {mission.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto mb-6 transform transition-transform hover:scale-110 hover:rotate-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Le Problème */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pourquoi OpenBait existe
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Identifier et documenter une pratique répandue mais peu visible
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {problems.map((problem, index) => (
              <div key={index} className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all">
                <div className="w-14 h-14 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                  <problem.icon className="w-7 h-7 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{problem.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{problem.description}</p>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full">
                  {problem.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principes */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos principes fondateurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les valeurs qui guident chacune de nos actions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <principle.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{principle.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre parcours
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              De l'idée à l'impact mondial
            </p>
          </div>

          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div key={index} className="flex gap-8 items-start group">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                    <item.icon className="w-8 h-8" />
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="w-0.5 h-24 bg-gray-300 mt-4"></div>
                  )}
                </div>
                <div className="flex-1 bg-white rounded-xl border border-gray-200 p-8 hover:shadow-lg transition-all">
                  <div className="text-sm text-gray-500 font-medium mb-2">{item.year}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rejoignez notre mission
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Que vous soyez développeur, juriste, chercheur ou simplement intéressé par la transparence logicielle,
            votre contribution compte.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/database"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2"
            >
              <BookOpen className="w-5 h-5" />
              Consulter la base
            </Link>
            <Link
              href="/support"
              className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Soutenir le projet
            </Link>
            <Link
              href="/team"
              className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              Rencontrer l'équipe
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-4">
            OpenBait.org - Projet communautaire non-lucratif
          </p>
          <p className="text-sm text-gray-500">
            © 2025 OpenBait.org - Sous licence MIT
          </p>
        </div>
      </footer>
    </div>
  );
}
