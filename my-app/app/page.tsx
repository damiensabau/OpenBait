'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, Shield, Users, Code, Database, Search, FileText, TrendingDown, CheckCircle, ArrowRight, ExternalLink, Calendar, Building2, DollarSign, Lock, Unlock } from 'lucide-react';
import NotificationBell from './components/NotificationBell';
import LanguageSelector from './components/LanguageSelector';
import { useLanguage } from '@/contexts/LanguageContext';

export default function OpenBaitLanding() {
  const { t } = useLanguage();
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);
  const [activeMetric, setActiveMetric] = useState<number | null>(null);
  const [animatedValues, setAnimatedValues] = useState({
    cases: 0,
    year: 0,
    companies: 0,
    percentage: 0
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState<string | null>(null);
  const [recentCases, setRecentCases] = useState<any[]>([]);
  const [loadingCases, setLoadingCases] = useState(true);
  const [totalCases, setTotalCases] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Vérifier si l'utilisateur est connecté
  useEffect(() => {
    const token = localStorage.getItem('token');
    const userStr = localStorage.getItem('user');
    
    if (token && userStr) {
      setIsLoggedIn(true);
      const user = JSON.parse(userStr);
      setUserRole(user.role);
    }
  }, []);

  // Charger les cas récents
  useEffect(() => {
    fetchRecentCases();
  }, []);

  const fetchRecentCases = async () => {
    try {
      const response = await fetch('/api/cases'); // API publique
      if (response.ok) {
        const data = await response.json();
        setTotalCases(data.total);
        // Prendre les 6 cas les plus signalés (déjà triés par reportCount)
        setRecentCases(data.cases.slice(0, 6));
      } else {
        console.error('Erreur API:', response.status);
      }
    } catch (error) {
      console.error('Erreur lors du chargement des cas:', error);
    } finally {
      setLoadingCases(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated && totalCases > 0) {
            setHasAnimated(true);
            
            // Animate cases - utilise le vrai nombre depuis la BDD
            let casesCount = 0;
            const targetCases = totalCases;
            const casesInterval = setInterval(() => {
              casesCount += 1;
              if (casesCount >= targetCases) {
                casesCount = targetCases;
                clearInterval(casesInterval);
              }
              setAnimatedValues(prev => ({ ...prev, cases: casesCount }));
            }, Math.max(10, 100 / targetCases));

            // Animate year - 2025 en 2 secondes
            let yearCount = 2020;
            const yearInterval = setInterval(() => {
              yearCount += 1;
              if (yearCount >= 2025) {
                yearCount = 2025;
                clearInterval(yearInterval);
              }
              setAnimatedValues(prev => ({ ...prev, year: yearCount }));
            }, 400);

            // Animate companies - 45 en 2.25 secondes
            let companiesCount = 0;
            const companiesInterval = setInterval(() => {
              companiesCount += 1;
              if (companiesCount >= 45) {
                companiesCount = 45;
                clearInterval(companiesInterval);
              }
              setAnimatedValues(prev => ({ ...prev, companies: companiesCount }));
            }, 50);

            // Animate percentage - 100% en 2 secondes
            let percentageCount = 0;
            const percentageInterval = setInterval(() => {
              percentageCount += 1;
              if (percentageCount >= 100) {
                percentageCount = 100;
                clearInterval(percentageInterval);
              }
              setAnimatedValues(prev => ({ ...prev, percentage: percentageCount }));
            }, 20);
          }
        });
      },
      { threshold: 0.5 }
    );

    const statsSection = document.getElementById('stats-section');
    if (statsSection) {
      observer.observe(statsSection);
    }

    return () => observer.disconnect();
  }, [hasAnimated, totalCases]);

  const methodology = [
    {
      icon: Search,
      title: "Détection",
      description: "Surveillance continue des annonces, changements de licence et modifications de modèles économiques",
      details: "Veille automatisée et signalements communautaires"
    },
    {
      icon: FileText,
      title: "Analyse",
      description: "Étude approfondie des implications légales, techniques et économiques de chaque changement",
      details: "Revue par des experts et validation des sources"
    },
    {
      icon: CheckCircle,
      title: "Vérification",
      description: "Validation croisée avec sources officielles, documentation et témoignages d'utilisateurs",
      details: "Processus de peer review communautaire"
    },
    {
      icon: Database,
      title: "Publication",
      description: "Mise à disposition structurée dans la base de données avec timeline complète",
      details: "API ouverte et exports de données"
    }
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out forwards;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out forwards;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }

        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .card-hover:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }

        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
          transition: left 0.5s ease;
        }

        .btn-primary:hover::before {
          left: 100%;
        }

        .gradient-border {
          position: relative;
        }

        .gradient-border::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #1f2937, #4b5563);
          transition: width 0.4s ease;
        }

        .gradient-border:hover::after {
          width: 100%;
        }

        .stat-card {
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          transform: scale(1.05);
        }

        .pulse-border {
          animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(31, 41, 55, 0.4);
          }
          50% {
            box-shadow: 0 0 0 8px rgba(31, 41, 55, 0);
          }
        }

        .text-reveal {
          background: linear-gradient(90deg, #111827 0%, #1f2937 50%, #111827 100%);
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s ease-in-out infinite;
        }

        @keyframes shimmer {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }

        .scroll-indicator {
          opacity: ${scrollY > 100 ? 0 : 1};
          transition: opacity 0.3s ease;
        }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-white'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 animate-slideInLeft">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-900 rounded flex items-center justify-center transition-transform hover:scale-110 hover:rotate-12 duration-300">
                <Shield className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <div className="text-base sm:text-xl font-semibold text-gray-900">OpenBait.org</div>
                <div className="hidden sm:block text-xs text-gray-500">Transparency in Software Licensing</div>
              </div>
            </Link>
            
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 animate-slideInRight">
              <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm font-medium gradient-border pb-1">{t('nav.about')}</Link>
              <Link href="/database" className="text-gray-600 hover:text-gray-900 text-sm font-medium gradient-border pb-1">{t('nav.database')}</Link>
              <Link href="/forum" className="text-gray-600 hover:text-gray-900 text-sm font-medium gradient-border pb-1">{t('nav.forum')}</Link>
              <Link href="/leaderboard" className="text-gray-600 hover:text-gray-900 text-sm font-medium gradient-border pb-1">🏆 {t('nav.about')}</Link>
              <Link href="/team" className="text-gray-600 hover:text-gray-900 text-sm font-medium gradient-border pb-1">{t('home.footer.about')}</Link>
              <Link href="/partners" className="text-gray-600 hover:text-gray-900 text-sm font-medium gradient-border pb-1">{t('home.footer.about')}</Link>
              
              <LanguageSelector />
              
              {isLoggedIn ? (
                <>
                  <NotificationBell />
                  <Link href={userRole === 'ADMIN' || userRole === 'MODERATOR' ? '/admin' : '/dashboard'} className="text-gray-600 hover:text-gray-900 text-sm font-medium gradient-border pb-1">
                    {userRole === 'ADMIN' || userRole === 'MODERATOR' ? t('nav.admin') : t('nav.dashboard')}
                  </Link>
                  <Link href="/report" className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-all duration-300 hover:shadow-lg btn-primary">
                    {t('home.hero.cta2')}
                  </Link>
                </>
              ) : (
                <>
                  <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 text-sm font-medium gradient-border pb-1">
                    {t('nav.login')}
                  </Link>
                  <Link href="/auth/register" className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-all duration-300 hover:shadow-lg btn-primary">
                    {t('nav.register')}
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              {isLoggedIn && <NotificationBell />}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-gray-600 hover:text-gray-900 transition-colors"
                aria-label="Menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fadeIn">
              <div className="flex flex-col space-y-3">
                <Link href="/about" className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2 hover:bg-gray-50 px-3 rounded transition-colors">À propos</Link>
                <Link href="/database" className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2 hover:bg-gray-50 px-3 rounded transition-colors">Base de données</Link>
                <Link href="/forum" className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2 hover:bg-gray-50 px-3 rounded transition-colors">Forum</Link>
                <Link href="/leaderboard" className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2 hover:bg-gray-50 px-3 rounded transition-colors">🏆 Classement</Link>
                <Link href="/team" className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2 hover:bg-gray-50 px-3 rounded transition-colors">Équipe</Link>
                <Link href="/partners" className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2 hover:bg-gray-50 px-3 rounded transition-colors">Partenaires</Link>
                
                {isLoggedIn ? (
                  <>
                    <Link href={userRole === 'ADMIN' || userRole === 'MODERATOR' ? '/admin' : '/dashboard'} className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2 hover:bg-gray-50 px-3 rounded transition-colors">
                      {userRole === 'ADMIN' || userRole === 'MODERATOR' ? 'Admin' : 'Dashboard'}
                    </Link>
                    <Link href="/report" className="px-4 py-3 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-all duration-300 text-center">
                      Signaler un cas
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/auth/login" className="text-gray-600 hover:text-gray-900 text-sm font-medium py-2 hover:bg-gray-50 px-3 rounded transition-colors">
                      Connexion
                    </Link>
                    <Link href="/auth/register" className="px-4 py-3 bg-gray-900 text-white text-sm font-medium rounded hover:bg-gray-800 transition-all duration-300 text-center">
                      Inscription
                    </Link>
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 sm:pt-28 md:pt-32 pb-12 sm:pb-16 md:pb-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-gray-900 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gray-700 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Left - Content */}
            <div className="opacity-0 animate-fadeInUp text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900 text-white text-xs font-medium rounded-full mb-6 sm:mb-8 hover:bg-gray-800 transition-all duration-300 cursor-pointer animate-scaleIn">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="hidden sm:inline">PROJET COMMUNAUTAIRE NON-LUCRATIF</span>
                <span className="sm:hidden">PROJET COMMUNAUTAIRE</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight opacity-0 animate-fadeInUp delay-100">
                Documenter les dérives des modèles économiques
                <span className="block text-gray-600 mt-2">logiciels</span>
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-8 sm:mb-10 leading-relaxed opacity-0 animate-fadeInUp delay-200">
                OpenBait.org est une plateforme indépendante qui recense et analyse les logiciels passant 
                de modèles gratuits ou open source à des modèles payants, afin d'informer les utilisateurs 
                et décideurs <span className="font-semibold text-gray-900">avant qu'ils ne deviennent dépendants</span>.
              </p>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 opacity-0 animate-fadeInUp delay-300">
                {isLoggedIn ? (
                  <>
                    <Link href={userRole === 'ADMIN' || userRole === 'MODERATOR' ? '/admin' : '/dashboard'} className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white text-sm sm:text-base font-medium rounded hover:bg-gray-800 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 group btn-primary">
                      <Shield className="w-4 h-4" />
                      <span className="hidden sm:inline">{userRole === 'ADMIN' || userRole === 'MODERATOR' ? 'Panneau Admin' : 'Mon Dashboard'}</span>
                      <span className="sm:hidden">{userRole === 'ADMIN' || userRole === 'MODERATOR' ? 'Admin' : 'Dashboard'}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link href="/database" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-900 text-sm sm:text-base font-medium rounded hover:border-gray-900 transition-all duration-300 hover:shadow-lg text-center">
                      Base de données
                    </Link>
                  </>
                ) : (
                  <>
                    <Link href="/database" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white text-sm sm:text-base font-medium rounded hover:bg-gray-800 transition-all duration-300 hover:shadow-xl flex items-center justify-center gap-2 group btn-primary">
                      <span className="hidden sm:inline">Consulter la base de données</span>
                      <span className="sm:hidden">Base de données</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                    <Link href="/auth/register" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-900 text-sm sm:text-base font-medium rounded hover:border-gray-900 transition-all duration-300 hover:shadow-lg text-center">
                      <span className="hidden sm:inline">Rejoindre la communauté</span>
                      <span className="sm:hidden">Rejoindre</span>
                    </Link>
                  </>
                )}
              </div>
            </div>

            {/* Right - Image */}
            <div className="opacity-0 animate-slideInRight delay-200 order-first md:order-last">
              <div className="relative">
                <img 
                  src="/image/c35003bb-fbdf-4249-8c0c-facb479d7cae_removalai_preview.png" 
                  alt="OpenBait Illustration" 
                  className="relative rounded-xl sm:rounded-2xl shadow-2xl w-full h-auto object-cover card-hover"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="scroll-indicator hidden sm:block absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-gray-400 rounded-full animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats-section" className="py-12 sm:py-16 border-y border-gray-200 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-white to-gray-50 opacity-50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {[
              { value: animatedValues.cases, label: "Cas documentés", delay: "delay-100" },
              { value: animatedValues.year, label: "Depuis l'année", delay: "delay-200" },
              { value: animatedValues.companies, label: "Entreprises suivies", delay: "delay-300" },
              { value: `${animatedValues.percentage}%`, label: "Gratuit & Open Source", delay: "delay-400" }
            ].map((stat, index) => (
              <div 
                key={index}
                className={`text-center stat-card opacity-0 animate-fadeInUp ${stat.delay}`}
                onMouseEnter={() => setActiveMetric(index)}
                onMouseLeave={() => setActiveMetric(null)}
              >
                <div className={`text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-1 sm:mb-2 transition-all duration-300 ${
                  activeMetric === index ? 'text-reveal' : ''
                }`}>
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium px-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 md:gap-16">
            {/* Left - Problem */}
            <div className="opacity-0 animate-slideInLeft delay-100">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full mb-6">
                <AlertTriangle className="w-3 h-3" />
                LE PROBLÈME
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Une stratégie délibérée d'enfermement</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  De nombreuses entreprises adoptent une <span className="font-semibold text-gray-900">stratégie en trois phases</span> : 
                  lancer un logiciel gratuit ou open source, attirer une large base d'utilisateurs qui deviennent dépendants, 
                  puis monétiser en changeant radicalement le modèle économique.
                </p>
                <p>
                  Cette pratique exploite la confusion entre <span className="font-semibold text-gray-900">"open source"</span> et 
                  <span className="font-semibold text-gray-900"> "gratuit"</span>, créant un véritable appel d'offres caché où 
                  les utilisateurs découvrent trop tard qu'ils sont piégés.
                </p>
                
                <div className="bg-gray-50 border-l-4 border-gray-900 rounded-r-lg p-6 mt-8 hover:shadow-lg transition-shadow duration-300">
                  <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Lock className="w-5 h-5" />
                    Impact sur l'écosystème
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {[
                      "Entreprises contraintes à payer pour des outils critiques",
                      "Administrations publiques piégées par des dépendances",
                      "Décrédibilisation du mouvement open source authentique",
                      "Méfiance généralisée envers les projets communautaires"
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 group-hover:bg-gray-900 transition-colors"></div>
                        <span className="group-hover:text-gray-900 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right - Solution */}
            <div className="opacity-0 animate-slideInRight delay-200">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full mb-6">
                <CheckCircle className="w-3 h-3" />
                NOTRE MISSION
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Une veille systématique et indépendante</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed mb-8">
                <p className="text-lg">
                  OpenBait.org est la <span className="font-semibold text-gray-900">première plateforme dédiée</span> à 
                  la documentation systématique de ces changements de modèles économiques.
                </p>
                <p>
                  Notre objectif est de fournir aux utilisateurs, entreprises et administrations les informations 
                  nécessaires pour faire des choix éclairés et éviter les pièges de dépendance.
                </p>
              </div>
              
              <div className="space-y-4">
                {[
                  { icon: Database, title: "Base exhaustive", desc: "Tous les changements documentés et vérifiés", color: "bg-blue-50" },
                  { icon: Search, title: "Veille active", desc: "Surveillance continue des annonces", color: "bg-purple-50" },
                  { icon: FileText, title: "Documentation rigoureuse", desc: "Sources et timeline pour chaque cas", color: "bg-orange-50" },
                  { icon: Users, title: "Communautaire", desc: "Projet non-lucratif et indépendant", color: "bg-green-50" }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-4 p-5 rounded-xl border border-gray-200 card-hover bg-white group"
                  >
                    <div className={`w-12 h-12 ${item.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <item.icon className="w-6 h-6 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 opacity-0 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-full mb-4 sm:mb-6">
              <Database className="w-3 h-3" />
              BASE DE DONNÉES
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">Cas Récents Documentés</h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Exemples de changements de modèles économiques identifiés, analysés et vérifiés
            </p>
          </div>

          {loadingCases ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
              <p className="mt-4 text-gray-600">Chargement des cas...</p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                {recentCases.map((case_item: any, index: number) => (
                  <Link
                    href={`/database/${case_item.id}`}
                    key={case_item.id}
                    className={`bg-white border border-gray-200 rounded-xl p-4 sm:p-6 card-hover cursor-pointer group opacity-0 animate-fadeInUp delay-${(index % 3 + 1) * 100}`}
                    onMouseEnter={() => setHoveredCase(index)}
                    onMouseLeave={() => setHoveredCase(null)}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="font-bold text-gray-900 text-lg group-hover:text-gray-700 transition-colors">
                          {case_item.companyName}
                        </h3>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <Code className="w-3 h-3" />
                          {case_item.productName}
                        </p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <span className="px-3 py-1 bg-red-50 text-red-700 text-xs font-medium rounded-full flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {case_item.changeDate}
                        </span>
                        {case_item.reportCount >= 40 && (
                          <span className="px-2 py-1 bg-orange-100 text-orange-700 text-xs font-bold rounded-full">
                            🔥 {case_item.reportCount}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="pb-4 border-b border-gray-100">
                        <div className="text-xs text-gray-500 mb-2 font-medium">CHANGEMENT DE LICENCE</div>
                        <div className="flex items-center justify-between text-sm">
                          <span className="font-mono text-gray-700 flex items-center gap-1">
                            <Unlock className="w-3 h-3" />
                            {case_item.licenseInitial}
                          </span>
                          <ArrowRight className="w-4 h-4 text-gray-400" />
                          <span className="font-mono text-gray-900 font-medium flex items-center gap-1">
                            <Lock className="w-3 h-3" />
                            {case_item.licenseFinal}
                          </span>
                        </div>
                      </div>

                      <div>
                        <div className="text-xs text-gray-500 mb-2 font-medium">CATÉGORIE</div>
                        <div className="text-sm text-gray-700 mb-1">{case_item.category}</div>
                      </div>

                      <div className={`overflow-hidden transition-all duration-300 ${
                        hoveredCase === index ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                      }`}>
                        <p className="text-sm text-gray-600 italic pt-3 border-t border-gray-100 line-clamp-3">
                          {case_item.description}
                        </p>
                      </div>

                      <div className="text-sm text-gray-900 font-medium hover:gap-2 transition-all flex items-center gap-1 group-hover:text-gray-700">
                        Voir le détail complet
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="mt-8 sm:mt-12 text-center opacity-0 animate-fadeInUp delay-400">
                <Link href="/database" className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-gray-300 text-gray-900 text-sm sm:text-base font-medium rounded-lg hover:border-gray-900 transition-all duration-300 hover:shadow-lg inline-flex items-center gap-2 group">
                  <span className="hidden sm:inline">Voir tous les cas documentés</span>
                  <span className="sm:hidden">Tous les cas</span>
                  <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Methodology */}
      <section className="py-12 sm:py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16 md:mb-20 opacity-0 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full mb-6">
              <CheckCircle className="w-3 h-3" />
              MÉTHODOLOGIE
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Une approche rigoureuse</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Chaque cas est documenté selon un processus strict pour garantir la fiabilité des informations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-200 via-gray-900 to-gray-200"></div>
            
            {methodology.map((step, index) => (
              <div 
                key={index}
                className={`relative opacity-0 animate-fadeInUp delay-${(index + 1) * 100}`}
              >
                <div className="text-center group">
                  <div className="relative inline-block mb-4 sm:mb-6">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-900 rounded-2xl flex items-center justify-center mx-auto transform transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 pulse-border">
                      <step.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 bg-white border-2 border-gray-900 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-gray-900 transition-transform group-hover:scale-110">
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-gray-700 transition-colors px-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 leading-relaxed px-2">
                    {step.description}
                  </p>
                  <p className="text-xs text-gray-500 italic px-2">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-12 sm:py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gray-400 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div className="opacity-0 animate-fadeInUp">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-white text-xs font-medium rounded-full mb-6 sm:mb-8">
              <DollarSign className="w-3 h-3" />
              FINANCEMENT
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 px-4">Soutenir le projet</h2>
            <p className="text-gray-300 text-base sm:text-lg mb-8 sm:mb-12 leading-relaxed max-w-3xl mx-auto px-4">
              OpenBait.org est un projet communautaire non-lucratif. Nous avons besoin de financement pour 
              maintenir l'infrastructure, assurer la recherche continue et garantir notre indépendance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[
              { icon: Database, title: "Infrastructure", desc: "Serveurs, redondance, sauvegardes" },
              { icon: Search, title: "Recherche", desc: "Veille active et documentation" },
              { icon: Shield, title: "Indépendance", desc: "Neutralité sans pression commerciale" }
            ].map((item, i) => (
              <div 
                key={i}
                className={`bg-white/5 backdrop-blur border border-white/10 rounded-xl p-6 sm:p-8 card-hover opacity-0 animate-fadeInUp delay-${(i + 1) * 100}`}
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <item.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="font-semibold text-base sm:text-lg mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="opacity-0 animate-fadeInUp delay-300">
            <Link href="/support" className="w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-white text-gray-900 text-base sm:text-lg font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 hover:shadow-2xl inline-flex items-center justify-center gap-2 group btn-primary">
              Contribuer au projet
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <p className="text-gray-400 mt-4 sm:mt-6 text-xs sm:text-sm px-4">
              100% transparent • 100% communautaire • 0% profit
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 sm:py-16 border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12 mb-8 sm:mb-12">
            <div className="opacity-0 animate-fadeInUp">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center">
                  <Shield className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-gray-900">OpenBait</span>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Transparency in Software Licensing
              </p>
              <p className="text-xs text-gray-500">
                Documenter les dérives économiques pour protéger l'écosystème open source
              </p>
            </div>

            <div className={`opacity-0 animate-fadeInUp delay-100`}>
              <h4 className="font-semibold text-gray-900 mb-4">Projet</h4>
              <ul className="space-y-3">
                <li><Link href="/about" className="text-sm text-gray-600 hover:text-gray-900 transition-colors gradient-border inline-block pb-1">À propos</Link></li>
                <li><a href="#methodology" className="text-sm text-gray-600 hover:text-gray-900 transition-colors gradient-border inline-block pb-1">Méthodologie</a></li>
                <li><Link href="/team" className="text-sm text-gray-600 hover:text-gray-900 transition-colors gradient-border inline-block pb-1">Équipe</Link></li>
                <li><Link href="/partners" className="text-sm text-gray-600 hover:text-gray-900 transition-colors gradient-border inline-block pb-1">Partenaires</Link></li>
              </ul>
            </div>

            <div className={`opacity-0 animate-fadeInUp delay-200`}>
              <h4 className="font-semibold text-gray-900 mb-4">Ressources</h4>
              <ul className="space-y-3">
                <li><Link href="/database" className="text-sm text-gray-600 hover:text-gray-900 transition-colors gradient-border inline-block pb-1">Base de données</Link></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors gradient-border inline-block pb-1">Documentation</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors gradient-border inline-block pb-1">API</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors gradient-border inline-block pb-1">Rapports</a></li>
              </ul>
            </div>

            <div className={`opacity-0 animate-fadeInUp delay-300`}>
              <h4 className="font-semibold text-gray-900 mb-4">Communauté</h4>
              <ul className="space-y-3">
                <li><Link href="/support" className="text-sm text-gray-600 hover:text-gray-900 transition-colors gradient-border inline-block pb-1">Contribuer</Link></li>
                <li><a href="https://github.com/openbait" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-600 hover:text-gray-900 transition-colors gradient-border inline-block pb-1">GitHub</a></li>
                <li><a href="mailto:contact@openbait.org" className="text-sm text-gray-600 hover:text-gray-900 transition-colors gradient-border inline-block pb-1">Contact</a></li>
                <li><a href="#" className="text-sm text-gray-600 hover:text-gray-900 transition-colors gradient-border inline-block pb-1">Newsletter</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-6 sm:pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-500 text-center md:text-left">
            <p className="px-4 md:px-0">© 2025 OpenBait.org - Projet communautaire non-lucratif sous licence MIT</p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              <a href="#" className="hover:text-gray-900 transition-colors">Mentions légales</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Licence</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Confidentialité</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}