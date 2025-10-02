'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Shield, Heart, Database, Search, Users, Code, DollarSign, Coffee, Zap, Star, Check, ArrowRight, Github, Mail, Twitter, Award, TrendingUp, Globe } from 'lucide-react';

export default function SupportPage() {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [customAmount, setCustomAmount] = useState('');
  const [frequency, setFrequency] = useState<'once' | 'monthly'>('monthly');

  const donationTiers = [
    {
      name: 'Supporter',
      amount: 5,
      icon: Coffee,
      color: 'from-blue-500 to-blue-600',
      benefits: [
        'Badge de supporter sur le site',
        'Accès à la newsletter mensuelle',
        'Remerciements dans les releases'
      ]
    },
    {
      name: 'Contributeur',
      amount: 15,
      icon: Heart,
      color: 'from-purple-500 to-purple-600',
      popular: true,
      benefits: [
        'Tous les avantages Supporter',
        'Nom dans la page des contributeurs',
        'Accès anticipé aux nouveaux rapports',
        'Badge spécial "Contributeur"'
      ]
    },
    {
      name: 'Champion',
      amount: 50,
      icon: Star,
      color: 'from-orange-500 to-orange-600',
      benefits: [
        'Tous les avantages Contributeur',
        'Logo de votre entreprise sur le site',
        'Mention dans tous les rapports annuels',
        'Invitation aux discussions stratégiques',
        'Badge "Champion de la transparence"'
      ]
    },
    {
      name: 'Sponsor',
      amount: 200,
      icon: Award,
      color: 'from-yellow-500 to-yellow-600',
      benefits: [
        'Tous les avantages Champion',
        'Logo premium en page d\'accueil',
        'Article dédié sur votre soutien',
        'Session privée avec l\'équipe',
        'Influence sur la roadmap du projet'
      ]
    }
  ];

  const impactStats = [
    {
      icon: Database,
      title: 'Infrastructure serveur',
      current: '450€',
      target: '600€',
      percentage: 75,
      description: 'Hébergement, bande passante, sauvegardes'
    },
    {
      icon: Search,
      title: 'Recherche et veille',
      current: '280€',
      target: '400€',
      percentage: 70,
      description: 'Outils de monitoring et d\'analyse'
    },
    {
      icon: Code,
      title: 'Développement',
      current: '150€',
      target: '500€',
      percentage: 30,
      description: 'Nouvelles fonctionnalités et maintenance'
    }
  ];

  const supporters = [
    { name: 'Acme Corp', logo: '🏢', tier: 'sponsor' },
    { name: 'TechStart', logo: '🚀', tier: 'champion' },
    { name: 'DevTools Inc', logo: '⚡', tier: 'champion' },
    { name: 'CloudBase', logo: '☁️', tier: 'contributor' },
    { name: 'OpenSource Foundation', logo: '🌟', tier: 'contributor' }
  ];

  const usageCases = [
    {
      icon: Globe,
      title: 'Infrastructure mondiale',
      description: 'Serveurs distribués dans 3 régions pour garantir disponibilité et performance',
      cost: '250€/mois'
    },
    {
      icon: Database,
      title: 'Base de données robuste',
      description: 'Stockage sécurisé avec sauvegardes quotidiennes et redondance',
      cost: '150€/mois'
    },
    {
      icon: Search,
      title: 'Outils de veille',
      description: 'Systèmes de monitoring automatisés pour détecter les changements',
      cost: '120€/mois'
    },
    {
      icon: Users,
      title: 'Recherche communautaire',
      description: 'Support pour les contributeurs et coordinateurs bénévoles',
      cost: '180€/mois'
    },
    {
      icon: Code,
      title: 'Développement continu',
      description: 'Amélioration des fonctionnalités et corrections de bugs',
      cost: '200€/mois'
    },
    {
      icon: Shield,
      title: 'Sécurité et conformité',
      description: 'Audits de sécurité, certificats SSL, protection DDoS',
      cost: '100€/mois'
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
                <div className="text-xs text-gray-500">Soutenir le projet</div>
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
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur rounded-full mb-8 border border-white/20">
            <Heart className="w-4 h-4 text-red-400" />
            <span className="text-sm font-medium">100% Communautaire • 100% Transparent</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Soutenez l'indépendance
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mt-2">
              et la transparence
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            OpenBait.org est un projet 100% non-lucratif. Chaque euro reçu sert directement 
            à maintenir l'infrastructure, financer la recherche, et garantir notre indépendance 
            face aux pressions commerciales.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">0%</div>
              <div className="text-sm text-gray-300">De bénéfices conservés</div>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm text-gray-300">Transparence financière</div>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">∞</div>
              <div className="text-sm text-gray-300">Gratuit pour toujours</div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Choisissez votre niveau de soutien
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Chaque contribution compte, quelle que soit sa taille
            </p>
          </div>

          {/* Frequency Toggle */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setFrequency('once')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  frequency === 'once'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Don unique
              </button>
              <button
                onClick={() => setFrequency('monthly')}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  frequency === 'monthly'
                    ? 'bg-white text-gray-900 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Mensuel
                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                  Impact max
                </span>
              </button>
            </div>
          </div>

          {/* Tiers Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {donationTiers.map((tier, index) => (
              <div
                key={index}
                className={`relative bg-white border-2 rounded-2xl p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-pointer ${
                  selectedAmount === tier.amount
                    ? 'border-gray-900 shadow-xl'
                    : 'border-gray-200 hover:border-gray-400'
                } ${tier.popular ? 'ring-4 ring-purple-100' : ''}`}
                onClick={() => setSelectedAmount(tier.amount)}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                      LE PLUS POPULAIRE
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tier.color} flex items-center justify-center mb-6 mx-auto`}>
                  <tier.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">
                  {tier.name}
                </h3>

                <div className="text-center mb-6">
                  <span className="text-5xl font-bold text-gray-900">{tier.amount}€</span>
                  <span className="text-gray-500">/{frequency === 'monthly' ? 'mois' : 'une fois'}</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    selectedAmount === tier.amount
                      ? 'bg-gray-900 text-white'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  {selectedAmount === tier.amount ? 'Sélectionné' : 'Choisir'}
                </button>
              </div>
            ))}
          </div>

          {/* Custom Amount */}
          <div className="mt-12 max-w-md mx-auto">
            <div className="bg-gray-50 border-2 border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Montant personnalisé
              </h3>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="number"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    placeholder="Votre montant"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-gray-900"
                  />
                </div>
                <button className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all">
                  Donner
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Impact de vos contributions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Transparence totale sur l'utilisation des fonds
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {impactStats.map((stat, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{stat.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{stat.description}</p>
                
                <div className="mb-2">
                  <div className="flex justify-between text-sm mb-1">
                    <span className="font-semibold text-gray-900">{stat.current}</span>
                    <span className="text-gray-500">{stat.target}</span>
                  </div>
                  <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                      style={{ width: `${stat.percentage}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">{stat.percentage}% financé</div>
              </div>
            ))}
          </div>

          {/* Detailed Usage */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
              Où va votre argent ? Détail complet
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {usageCases.map((useCase, index) => (
                <div key={index} className="flex gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="w-12 h-12 bg-gray-900 rounded-lg flex items-center justify-center flex-shrink-0">
                    <useCase.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-semibold text-gray-900">{useCase.title}</h4>
                      <span className="text-sm font-bold text-purple-600 whitespace-nowrap ml-2">
                        {useCase.cost}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">{useCase.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-8 pt-8 border-t border-gray-200 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">1000€/mois</div>
              <div className="text-gray-600">Coût total mensuel pour maintenir OpenBait.org</div>
            </div>
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nos supporters
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ils croient en la transparence et soutiennent notre mission
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
            {supporters.map((supporter, index) => (
              <div
                key={index}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg hover:border-gray-900 transition-all cursor-pointer"
              >
                <div className="text-4xl mb-3">{supporter.logo}</div>
                <div className="font-semibold text-gray-900 text-sm">{supporter.name}</div>
                <div className="text-xs text-gray-500 mt-1 capitalize">{supporter.tier}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">Rejoignez ces organisations qui font la différence</p>
            <button className="px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all inline-flex items-center gap-2 group">
              Devenir supporter
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </section>

      {/* Other Ways to Help */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Autres façons d'aider
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Pas de budget ? Vous pouvez quand même contribuer !
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Contribuer au code</h3>
              <p className="text-gray-600 mb-6">
                Développeurs ? Aidez-nous à améliorer la plateforme sur GitHub
              </p>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all"
              >
                <Github className="w-5 h-5" />
                Voir sur GitHub
              </a>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Signaler des cas</h3>
              <p className="text-gray-600 mb-6">
                Vous avez identifié un changement de licence ? Signalez-le !
              </p>
              <Link
                href="/database"
                className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all"
              >
                <Database className="w-5 h-5" />
                Signaler un cas
              </Link>
            </div>

            <div className="bg-white rounded-xl border border-gray-200 p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Partager le projet</h3>
              <p className="text-gray-600 mb-6">
                Faites connaître OpenBait.org dans votre réseau
              </p>
              <div className="flex justify-center gap-4">
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-900 hover:text-white transition-all">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ensemble, protégeons l'écosystème open source
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Chaque contribution nous permet de continuer notre mission de transparence et d'indépendance.
            Rejoignez une communauté qui fait la différence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-10 py-5 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2 group text-lg shadow-2xl">
              <Heart className="w-6 h-6 text-red-500" />
              Faire un don maintenant
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
            <Link
              href="/database"
              className="px-10 py-5 bg-white/10 backdrop-blur border border-white/20 text-white font-bold rounded-lg hover:bg-white/20 transition-all inline-flex items-center gap-2 group text-lg"
            >
              Explorer la base de données
              <Database className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-600 mb-4">
            OpenBait.org est une association à but non-lucratif
          </p>
          <p className="text-sm text-gray-500 mb-6">
            Tous les dons sont déductibles fiscalement dans les limites légales
          </p>
          <div className="flex justify-center gap-8 text-sm">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Accueil
            </Link>
            <Link href="/database" className="text-gray-600 hover:text-gray-900 transition-colors">
              Base de données
            </Link>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
