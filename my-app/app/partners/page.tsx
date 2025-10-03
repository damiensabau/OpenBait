'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Building2, Globe, Award, CheckCircle, Zap, Heart, Users, ExternalLink, Star } from 'lucide-react';

export default function PartnersPage() {
  const institutionalPartners = [
    {
      name: 'Linux Foundation',
      type: 'Fondation',
      logo: '🐧',
      description: 'Soutien institutionnel et promotion auprès de la communauté open source mondiale',
      website: 'https://linuxfoundation.org',
      support: 'Partenaire institutionnel',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Open Source Initiative',
      type: 'Organisation',
      logo: '🔓',
      description: 'Validation méthodologique et expertise sur les licences open source',
      website: 'https://opensource.org',
      support: 'Partenaire académique',
      color: 'from-green-500 to-green-600'
    },
    {
      name: 'Free Software Foundation Europe',
      type: 'Association',
      logo: '🇪🇺',
      description: 'Conseil juridique et promotion des logiciels libres en Europe',
      website: 'https://fsfe.org',
      support: 'Partenaire juridique',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: 'Software Heritage',
      type: 'Archives',
      logo: '📚',
      description: 'Archivage et préservation des codes sources pour notre base de données',
      website: 'https://softwareheritage.org',
      support: 'Partenaire technique',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  const academicPartners = [
    {
      name: 'MIT CSAIL',
      logo: '🎓',
      focus: 'Recherche en économie du logiciel',
      location: 'Cambridge, USA'
    },
    {
      name: 'INRIA',
      logo: '🔬',
      focus: 'Analyse des licences open source',
      location: 'Paris, France'
    },
    {
      name: 'TU Berlin',
      logo: '🏛️',
      focus: 'Droit du numérique et compliance',
      location: 'Berlin, Allemagne'
    },
    {
      name: 'Stanford Law School',
      logo: '⚖️',
      focus: 'Propriété intellectuelle logicielle',
      location: 'Stanford, USA'
    }
  ];

  const corporateSponsors = [
    {
      name: 'GitHub',
      logo: '😺',
      tier: 'Platinum',
      contribution: 'Infrastructure et hébergement',
      amount: '50k$/an'
    },
    {
      name: 'Red Hat',
      logo: '🎩',
      tier: 'Gold',
      contribution: 'Expertise et ressources humaines',
      amount: '30k$/an'
    },
    {
      name: 'Canonical',
      logo: '🟠',
      tier: 'Gold',
      contribution: 'Support technique et promotion',
      amount: '25k$/an'
    },
    {
      name: 'GitLab',
      logo: '🦊',
      tier: 'Silver',
      contribution: 'Outils CI/CD et DevOps',
      amount: '15k$/an'
    },
    {
      name: 'JetBrains',
      logo: '💎',
      tier: 'Silver',
      contribution: 'Licences développement',
      amount: '10k$/an'
    },
    {
      name: 'Vercel',
      logo: '▲',
      tier: 'Bronze',
      contribution: 'Hébergement et CDN',
      amount: '5k$/an'
    }
  ];

  const mediaPartners = [
    { name: 'The Register', logo: '📰', type: 'Tech News' },
    { name: 'Ars Technica', logo: '🔧', type: 'Tech Magazine' },
    { name: 'InfoQ', logo: '📡', type: 'Developer News' },
    { name: 'TechCrunch', logo: '💻', type: 'Startup News' },
    { name: 'ZDNet', logo: '📺', type: 'Tech Media' },
    { name: 'Hacker News', logo: '🟧', type: 'Community' }
  ];

  const benefits = [
    {
      icon: Globe,
      title: 'Visibilité mondiale',
      description: 'Votre logo sur notre site consulté par des milliers de professionnels'
    },
    {
      icon: Users,
      title: 'Engagement communautaire',
      description: 'Connexion avec une communauté engagée de développeurs et décideurs'
    },
    {
      icon: Award,
      title: 'Impact positif',
      description: 'Contribuez à un projet d\'intérêt général reconnu internationalement'
    },
    {
      icon: Star,
      title: 'Influence stratégique',
      description: 'Participez aux décisions sur l\'évolution du projet (sponsors majeurs)'
    }
  ];

  const tiers = [
    {
      name: 'Platinum',
      amount: '50k€+',
      color: 'from-gray-400 to-gray-600',
      benefits: [
        'Logo premium page d\'accueil',
        'Article dédié et communiqué de presse',
        'Siège au comité consultatif',
        'Session trimestrielle avec l\'équipe',
        'Rapport d\'impact personnalisé',
        'Influence sur la roadmap'
      ]
    },
    {
      name: 'Gold',
      amount: '25k€+',
      color: 'from-yellow-400 to-yellow-600',
      benefits: [
        'Logo page d\'accueil',
        'Mention dans les rapports annuels',
        'Invitation événements exclusifs',
        'Session semestrielle',
        'Newsletter dédiée'
      ]
    },
    {
      name: 'Silver',
      amount: '10k€+',
      color: 'from-gray-300 to-gray-500',
      benefits: [
        'Logo page partenaires',
        'Mention réseaux sociaux',
        'Session annuelle',
        'Accès anticipé rapports'
      ]
    },
    {
      name: 'Bronze',
      amount: '5k€+',
      color: 'from-orange-400 to-orange-600',
      benefits: [
        'Logo page partenaires',
        'Mention annuelle',
        'Newsletter prioritaire'
      ]
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
                <div className="text-xs text-gray-500">Partenaires</div>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                À propos
              </Link>
              <Link href="/team" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                Équipe
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Nos partenaires
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Organisations, entreprises et institutions qui croient en notre mission et 
            soutiennent activement le projet OpenBait.
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-sm font-medium">Partenaires</div>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">140k€</div>
              <div className="text-sm font-medium">Soutien annuel</div>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-sm font-medium">Universités</div>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm font-medium">Transparence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Partners */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Partenaires institutionnels
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Fondations et organisations qui soutiennent notre mission
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {institutionalPartners.map((partner, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all group">
                <div className="flex items-start gap-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${partner.color} rounded-2xl flex items-center justify-center text-4xl flex-shrink-0 group-hover:scale-110 transition-transform`}>
                    {partner.logo}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{partner.name}</h3>
                        <div className="text-sm text-gray-500">{partner.type}</div>
                      </div>
                      <span className="px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
                        {partner.support}
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{partner.description}</p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:gap-3 transition-all text-sm"
                    >
                      Visiter le site
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Partenaires académiques
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Universités et centres de recherche collaborant à nos études
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all text-center group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{partner.focus}</p>
                <p className="text-xs text-gray-500">{partner.location}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Sponsors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Sponsors corporates
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Entreprises qui soutiennent financièrement le projet
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporateSponsors.map((sponsor, index) => (
              <div key={index} className="bg-gray-50 rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all group">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-4xl group-hover:scale-110 transition-transform">
                    {sponsor.logo}
                  </div>
                  <span className={`px-3 py-1 text-xs font-bold rounded-full ${
                    sponsor.tier === 'Platinum' ? 'bg-gray-100 text-gray-800' :
                    sponsor.tier === 'Gold' ? 'bg-yellow-50 text-yellow-700' :
                    sponsor.tier === 'Silver' ? 'bg-gray-50 text-gray-600' :
                    'bg-orange-50 text-orange-700'
                  }`}>
                    {sponsor.tier}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{sponsor.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{sponsor.contribution}</p>
                <div className="text-lg font-bold text-purple-600">{sponsor.amount}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Media Partners */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Partenaires médias
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Médias qui relaient notre mission et nos découvertes
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {mediaPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg transition-all text-center group">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {partner.logo}
                </div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{partner.name}</h3>
                <p className="text-xs text-gray-500">{partner.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become a Partner - Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Devenir partenaire
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Différents niveaux de partenariat pour correspondre à vos objectifs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {tiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-2xl border-2 border-gray-200 p-6 hover:shadow-xl hover:border-gray-900 transition-all">
                <div className={`w-12 h-12 bg-gradient-to-br ${tier.color} rounded-xl flex items-center justify-center mb-4`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
                <div className="text-3xl font-bold text-purple-600 mb-6">{tier.amount}</div>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Building2 className="w-16 h-16 mx-auto mb-6 text-blue-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Intéressé par un partenariat ?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Rejoignez les organisations qui font avancer la transparence dans l'écosystème logiciel.
            Contactez-nous pour discuter d'une collaboration adaptée à vos besoins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:partners@openbait.org"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2"
            >
              <Heart className="w-5 h-5" />
              Devenir partenaire
            </a>
            <Link
              href="/support"
              className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              <Zap className="w-5 h-5" />
              Voir les options de soutien
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
