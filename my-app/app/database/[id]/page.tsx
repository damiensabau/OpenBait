'use client';

import React from 'react';
import Link from 'next/link';
import { Shield, Code, Calendar, Building2, Lock, Unlock, ArrowLeft, ExternalLink, FileText, Users, AlertTriangle, Clock, TrendingDown, CheckCircle } from 'lucide-react';
import { useParams } from 'next/navigation';

// Types
interface CaseDetail {
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
  fullDescription: string;
  timeline: Array<{
    date: string;
    event: string;
    details: string;
  }>;
  legalDetails: {
    oldLicense: string;
    newLicense: string;
    keyChanges: string[];
  };
  businessImpact: {
    affectedUsers: string;
    estimatedCost: string;
    alternatives: string[];
  };
  communityReaction: {
    forks: number;
    migrations: string[];
    sentiment: string;
  };
  sources: Array<{
    title: string;
    url: string;
    date: string;
  }>;
}

export default function CaseDetailPage() {
  const params = useParams();
  const id = params.id as string;

  // Base de données complète (en production, cela viendrait d'une API)
  const casesDatabase: Record<string, CaseDetail> = {
    'hashicorp-terraform-2023': {
      id: 'hashicorp-terraform-2023',
      company: "HashiCorp",
      product: "Terraform",
      change: "MPL 2.0 → BSL 1.1",
      year: "2023",
      impact: "Restriction commerciale majeure",
      affected: "Milliers d'entreprises",
      status: "critical",
      description: "Changement de licence empêchant l'utilisation commerciale sans accord",
      category: "Infrastructure",
      fullDescription: "En août 2023, HashiCorp a annoncé le passage de Terraform de la licence MPL 2.0 (Mozilla Public License) à la BSL 1.1 (Business Source License). Ce changement majeur a profondément impacté l'écosystème DevOps en restreignant l'utilisation commerciale du logiciel sans accord préalable avec HashiCorp. Cette décision a été perçue comme une trahison de la communauté open source et a conduit à la création d'OpenTofu, un fork communautaire maintenu sous licence MPL 2.0.",
      timeline: [
        {
          date: "2012",
          event: "Lancement de Terraform",
          details: "Terraform est lancé sous licence MPL 2.0 comme projet open source"
        },
        {
          date: "2012-2023",
          event: "Croissance communautaire",
          details: "Terraform devient l'outil de référence pour l'Infrastructure as Code (IaC)"
        },
        {
          date: "Août 2023",
          event: "Annonce du changement",
          details: "HashiCorp annonce le passage à la licence BSL 1.1 pour tous ses produits"
        },
        {
          date: "Septembre 2023",
          event: "Création d'OpenTofu",
          details: "La Linux Foundation annonce OpenTofu, un fork de Terraform maintenu en MPL 2.0"
        },
        {
          date: "Octobre 2023",
          event: "Migration massive",
          details: "Des milliers d'entreprises annoncent leur migration vers OpenTofu"
        }
      ],
      legalDetails: {
        oldLicense: "MPL 2.0 (Mozilla Public License 2.0)",
        newLicense: "BSL 1.1 (Business Source License 1.1)",
        keyChanges: [
          "Interdiction d'utiliser Terraform pour fournir des services commerciaux concurrents",
          "Restriction sur l'hébergement en tant que service (SaaS)",
          "Obligation d'obtenir une licence commerciale pour certains usages",
          "La licence BSL devient automatiquement open source (Apache 2.0) après 4 ans"
        ]
      },
      businessImpact: {
        affectedUsers: "Toutes les entreprises utilisant Terraform dans un contexte commercial, particulièrement les cloud providers et les sociétés de conseil DevOps",
        estimatedCost: "Coûts de migration estimés à plusieurs millions de dollars pour les grandes organisations",
        alternatives: [
          "OpenTofu (fork communautaire sous MPL 2.0)",
          "Pulumi",
          "AWS CloudFormation",
          "Google Cloud Deployment Manager",
          "Azure Resource Manager"
        ]
      },
      communityReaction: {
        forks: 1,
        migrations: [
          "Spacelift a annoncé le support complet d'OpenTofu",
          "Gruntwork a migré toute sa bibliothèque vers OpenTofu",
          "GitLab a intégré OpenTofu dans ses CI/CD pipelines"
        ],
        sentiment: "Très négatif - La communauté a perçu ce changement comme une trahison, conduisant à une mobilisation rapide pour créer et supporter OpenTofu"
      },
      sources: [
        {
          title: "HashiCorp adopts Business Source License",
          url: "https://www.hashicorp.com/blog/hashicorp-adopts-business-source-license",
          date: "10 août 2023"
        },
        {
          title: "OpenTofu announces fork of Terraform",
          url: "https://opentofu.org/blog/opentofu-announces-fork-of-terraform",
          date: "25 août 2023"
        },
        {
          title: "Linux Foundation Joins OpenTofu Initiative",
          url: "https://www.linuxfoundation.org/press/opentofu",
          date: "15 septembre 2023"
        }
      ]
    },
    'docker-desktop-2021': {
      id: 'docker-desktop-2021',
      company: "Docker Inc.",
      product: "Docker Desktop",
      change: "Gratuit → Payant",
      year: "2021",
      impact: "Entreprises 250+ employés",
      affected: "Grandes organisations",
      status: "critical",
      description: "Introduction de frais pour les entreprises de plus de 250 employés",
      category: "Conteneurisation",
      fullDescription: "En août 2021, Docker Inc. a annoncé un changement majeur dans son modèle de tarification pour Docker Desktop. L'outil, jusqu'alors gratuit pour tous, est devenu payant pour les entreprises de plus de 250 employés ou générant plus de 10 millions de dollars de revenus annuels. Cette décision a forcé de nombreuses grandes entreprises à réévaluer leur utilisation de Docker Desktop et à chercher des alternatives.",
      timeline: [
        {
          date: "2013",
          event: "Lancement de Docker",
          details: "Docker révolutionne la conteneurisation avec un outil gratuit et open source"
        },
        {
          date: "2016",
          event: "Docker Desktop",
          details: "Lancement de Docker Desktop pour Mac et Windows, gratuit pour tous"
        },
        {
          date: "Août 2021",
          event: "Annonce de la tarification",
          details: "Docker annonce que Docker Desktop devient payant pour les grandes entreprises"
        },
        {
          date: "31 janvier 2022",
          event: "Fin de la période de grâce",
          details: "Les entreprises doivent commencer à payer ou cesser d'utiliser Docker Desktop"
        }
      ],
      legalDetails: {
        oldLicense: "Gratuit pour tous les utilisateurs",
        newLicense: "Docker Subscription Service Agreement avec tarification par tiers",
        keyChanges: [
          "Gratuit uniquement pour les petites entreprises (<250 employés et <10M$ revenus)",
          "5$/mois par utilisateur pour les grandes entreprises (Pro)",
          "7$/mois par utilisateur pour les équipes (Team)",
          "21$/mois par utilisateur pour les entreprises (Business)",
          "Le moteur Docker reste open source sous licence Apache 2.0"
        ]
      },
      businessImpact: {
        affectedUsers: "Toutes les entreprises de plus de 250 employés utilisant Docker Desktop, estimées à plusieurs milliers dans le monde",
        estimatedCost: "Entre 60$ et 252$ par développeur par an selon l'abonnement choisi",
        alternatives: [
          "Podman Desktop",
          "Rancher Desktop",
          "Colima (macOS)",
          "Minikube",
          "Docker CLI direct (Linux)"
        ]
      },
      communityReaction: {
        forks: 0,
        migrations: [
          "De nombreuses entreprises ont migré vers Podman Desktop",
          "Augmentation massive des téléchargements de Rancher Desktop",
          "Certaines entreprises sont passées à des postes de développement sous Linux"
        ],
        sentiment: "Mitigé - Compréhension de la nécessité de monétisation mais frustration sur le seuil de 250 employés considéré trop bas"
      },
      sources: [
        {
          title: "Docker is Updating and Extending Our Product Subscriptions",
          url: "https://www.docker.com/blog/updating-product-subscriptions/",
          date: "31 août 2021"
        },
        {
          title: "Docker Desktop no longer free for large companies",
          url: "https://www.theregister.com/2021/08/31/docker_desktop_no_longer_free/",
          date: "31 août 2021"
        }
      ]
    },
    // Ajouter d'autres cas ici...
  };

  const caseData = casesDatabase[id];

  if (!caseData) {
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
      case 'critical': return <AlertTriangle className="w-5 h-5" />;
      case 'warning': return <TrendingDown className="w-5 h-5" />;
      case 'info': return <CheckCircle className="w-5 h-5" />;
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
            <span className="text-gray-900 font-medium">{caseData.company}</span>
          </div>

          {/* En-tête du cas */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 shadow-sm">
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 bg-blue-50 text-blue-700 text-sm font-medium rounded-full">
                    {caseData.category}
                  </span>
                  <span className={`px-3 py-1 text-sm font-medium rounded-full border flex items-center gap-1 ${getStatusColor(caseData.status)}`}>
                    {getStatusIcon(caseData.status)}
                    {caseData.status === 'critical' ? 'Critique' : caseData.status === 'warning' ? 'Avertissement' : 'Info'}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-2">
                  {caseData.company} - {caseData.product}
                </h1>
                <p className="text-xl text-gray-600 mb-4">{caseData.description}</p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500 mb-1">Année</div>
                <div className="text-3xl font-bold text-gray-900 flex items-center gap-2">
                  <Calendar className="w-6 h-6" />
                  {caseData.year}
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
                    {caseData.change.split('→')[0].trim()}
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
                    {caseData.change.split('→')[1].trim()}
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
            <p className="text-gray-700 leading-relaxed text-lg">
              {caseData.fullDescription}
            </p>
          </div>

          {/* Timeline */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6" />
              Chronologie des événements
            </h2>
            <div className="space-y-6">
              {caseData.timeline.map((event, index) => (
                <div key={index} className="flex gap-6 group">
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    {index < caseData.timeline.length - 1 && (
                      <div className="w-0.5 h-full bg-gray-200 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-6">
                    <div className="text-sm text-gray-500 mb-1 font-medium">{event.date}</div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.event}</h3>
                    <p className="text-gray-600">{event.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Détails légaux */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileText className="w-6 h-6" />
              Détails légaux
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Ancienne licence</h3>
                <p className="text-gray-700 font-mono bg-green-50 p-3 rounded border border-green-200">
                  {caseData.legalDetails.oldLicense}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Nouvelle licence</h3>
                <p className="text-gray-700 font-mono bg-red-50 p-3 rounded border border-red-200">
                  {caseData.legalDetails.newLicense}
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Changements clés</h3>
                <ul className="space-y-2">
                  {caseData.legalDetails.keyChanges.map((change, index) => (
                    <li key={index} className="flex items-start gap-3 text-gray-700">
                      <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{change}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Impact métier */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Building2 className="w-6 h-6" />
              Impact métier
            </h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Utilisateurs affectés</h3>
                <p className="text-gray-700">{caseData.businessImpact.affectedUsers}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Coût estimé</h3>
                <p className="text-gray-700">{caseData.businessImpact.estimatedCost}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Alternatives disponibles</h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {caseData.businessImpact.alternatives.map((alt, index) => (
                    <div key={index} className="flex items-center gap-2 bg-gray-50 p-3 rounded border border-gray-200">
                      <Code className="w-4 h-4 text-gray-600 flex-shrink-0" />
                      <span className="text-gray-700">{alt}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Réaction de la communauté */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Users className="w-6 h-6" />
              Réaction de la communauté
            </h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-2">Sentiment général</h3>
                <p className="text-gray-700">{caseData.communityReaction.sentiment}</p>
              </div>
              {caseData.communityReaction.forks > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Forks créés</h3>
                  <div className="text-3xl font-bold text-gray-900">{caseData.communityReaction.forks}</div>
                </div>
              )}
              {caseData.communityReaction.migrations.length > 0 && (
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Migrations notables</h3>
                  <ul className="space-y-2">
                    {caseData.communityReaction.migrations.map((migration, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-gray-900 rounded-full mt-2 flex-shrink-0"></div>
                        <span>{migration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Sources */}
          <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <ExternalLink className="w-6 h-6" />
              Sources et références
            </h2>
            <div className="space-y-4">
              {caseData.sources.map((source, index) => (
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
                      <p className="text-sm text-gray-500">{source.date}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
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
                Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
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
