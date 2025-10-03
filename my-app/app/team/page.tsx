'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Github, Linkedin, Twitter, Mail, Code, Search, Database, Globe, Heart, Award } from 'lucide-react';

export default function TeamPage() {
  const coreTeam = [
    {
      name: 'Elise',
      role: 'Fondatrice & Directrice',
      bio: '15 ans d\'expérience en open source et gouvernance de projets communautaires. Ancienne lead chez Red Hat.',
      avatar: '👩‍💼',
      skills: ['Leadership', 'Open Source', 'Stratégie'],
      social: {
        github: 'sophiemartin',
        linkedin: 'sophie-martin',
        twitter: 'sophiemartin'
      }
    },
    {
      name: 'Damien',
      role: 'Lead Developer',
      bio: 'Expert en bases de données et systèmes distribués. Contributeur actif à PostgreSQL et MongoDB.',
      avatar: '👨‍💻',
      skills: ['Backend', 'Databases', 'API Design'],
      social: {
        github: 'thomasdubois',
        linkedin: 'thomas-dubois'
      }
    },
    {
      name: 'Hadrien',
      role: 'Juriste Spécialisée Licences',
      bio: 'Avocate spécialisée en propriété intellectuelle et licences open source. Consultante pour la FSF Europe.',
      avatar: '👩‍⚖️',
      skills: ['Droit', 'Licences', 'Compliance'],
      social: {
        linkedin: 'marie-laurent',
        twitter: 'marielaurent'
      }
    },
    {
      name: 'Clément',
      role: 'Chercheur & Analyste',
      bio: 'Doctorant en économie du logiciel. Spécialisé dans l\'analyse des modèles économiques open source.',
      avatar: '👨‍🔬',
      skills: ['Recherche', 'Analyse', 'Économie'],
      social: {
        github: 'alexchen',
        twitter: 'alexchen'
      }
    }
  ];

  const contributors = [
    {
      name: 'Émilie Bernard',
      role: 'Designer UI/UX',
      avatar: '🎨',
      contributions: '250+ heures'
    },
    {
      name: 'Lucas Petit',
      role: 'DevOps Engineer',
      avatar: '⚙️',
      contributions: '180+ heures'
    },
    {
      name: 'Sarah Cohen',
      role: 'Content Writer',
      avatar: '✍️',
      contributions: '120+ heures'
    },
    {
      name: 'David Wilson',
      role: 'Translator (EN)',
      avatar: '🌍',
      contributions: '90+ heures'
    },
    {
      name: 'Anna Schmidt',
      role: 'Translator (DE)',
      avatar: '🇩🇪',
      contributions: '75+ heures'
    },
    {
      name: 'Paolo Rossi',
      role: 'Community Manager',
      avatar: '💬',
      contributions: '200+ heures'
    }
  ];

  const roles = [
    {
      icon: Code,
      title: 'Développeurs',
      description: 'Amélioration de la plateforme, nouvelles fonctionnalités, corrections de bugs',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Search,
      title: 'Chercheurs',
      description: 'Veille active, identification de nouveaux cas, validation des sources',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Database,
      title: 'Analystes',
      description: 'Documentation des cas, analyse des impacts, rédaction de rapports',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Globe,
      title: 'Traducteurs',
      description: 'Internationalisation du contenu, accessibilité multilingue',
      color: 'from-orange-500 to-orange-600'
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
                <div className="text-xs text-gray-500">L'équipe</div>
              </div>
            </Link>
            <div className="flex items-center gap-4">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
                À propos
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
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            L'équipe OpenBait
          </h1>
          
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Des experts passionnés, unis par une mission commune : promouvoir la transparence 
            dans l'écosystème logiciel.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">4</div>
              <div className="text-sm font-medium">Core Team</div>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-sm font-medium">Contributeurs</div>
            </div>
            <div className="bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6">
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-sm font-medium">Bénévoles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              L'équipe principale
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Les membres permanents qui pilotent le projet au quotidien
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {coreTeam.map((member, index) => (
              <div key={index} className="bg-gray-50 rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all group">
                <div className="flex items-start gap-6">
                  <div className="text-6xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {member.avatar}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <div className="text-purple-600 font-semibold mb-4">{member.role}</div>
                    <p className="text-gray-600 mb-4 leading-relaxed">{member.bio}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {member.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-white border border-gray-200 text-gray-700 text-xs font-medium rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {member.social.github && (
                        <a href={`https://github.com/${member.social.github}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-gray-900 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors">
                          <Github className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={`https://linkedin.com/in/${member.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition-colors">
                          <Linkedin className="w-5 h-5 text-white" />
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={`https://twitter.com/${member.social.twitter}`} target="_blank" rel="noopener noreferrer" className="w-9 h-9 bg-blue-400 rounded-lg flex items-center justify-center hover:bg-blue-500 transition-colors">
                          <Twitter className="w-5 h-5 text-white" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Contributeurs majeurs
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ils donnent de leur temps et expertise pour faire vivre le projet
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {contributors.map((contributor, index) => (
              <div key={index} className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all text-center group">
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                  {contributor.avatar}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{contributor.name}</h3>
                <div className="text-sm text-gray-600 mb-3">{contributor.role}</div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-50 text-purple-700 text-xs font-medium rounded-full">
                  <Heart className="w-3 h-3" />
                  {contributor.contributions}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">Et 40+ autres contributeurs actifs dans la communauté</p>
            <Link
              href="https://github.com/openbait"
              target="_blank"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all"
            >
              <Github className="w-5 h-5" />
              Voir tous les contributeurs
            </Link>
          </div>
        </div>
      </section>

      {/* Roles */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Comment contribuer
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Plusieurs façons de rejoindre l'aventure selon vos compétences
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all group">
                <div className={`w-16 h-16 bg-gradient-to-br ${role.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <role.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{role.title}</h3>
                <p className="text-gray-600 leading-relaxed">{role.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Award className="w-16 h-16 mx-auto mb-6 text-yellow-400" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Rejoignez l'équipe
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Que vous ayez 2 heures par semaine ou plus, votre contribution peut faire la différence.
            Ensemble, construisons un écosystème logiciel plus transparent.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="mailto:team@openbait.org"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-all inline-flex items-center gap-2"
            >
              <Mail className="w-5 h-5" />
              Nous contacter
            </a>
            <Link
              href="https://github.com/openbait"
              target="_blank"
              className="px-8 py-4 bg-white/10 backdrop-blur border border-white/20 text-white font-semibold rounded-lg hover:bg-white/20 transition-all inline-flex items-center gap-2"
            >
              <Github className="w-5 h-5" />
              Contribuer sur GitHub
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
