'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string, params?: Record<string, any>) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.database': 'Base de données',
    'nav.forum': 'Forum',
    'nav.about': 'À propos',
    'nav.login': 'Connexion',
    'nav.register': 'Inscription',
    'nav.dashboard': 'Dashboard',
    'nav.admin': 'Admin',
    'nav.logout': 'Déconnexion',
    
    // Admin Page
    'admin.title': 'Panneau d\'administration',
    'admin.subtitle': 'Gérez les cas signalés par la communauté',
    'admin.addCase': 'Ajouter un cas',
    'admin.pending': 'En attente',
    'admin.approved': 'Approuvés',
    'admin.rejected': 'Rejetés',
    'admin.total': 'Total',
    'admin.all': 'Tous',
    'admin.noCases': 'Aucun cas à afficher',
    'admin.loading': 'Chargement...',
    
    // Table Headers
    'table.case': 'Cas',
    'table.category': 'Catégorie',
    'table.reports': '🔥 Signalements',
    'table.reportedBy': 'Signalé par',
    'table.date': 'Date',
    'table.status': 'Statut',
    'table.actions': 'Actions',
    
    // Status
    'status.pending': 'En attente',
    'status.approved': 'Approuvé',
    'status.rejected': 'Rejeté',
    'status.urgent': '🔥 URGENT',
    'status.priority': '⚠️ PRIORITÉ',
    
    // Actions
    'action.approve': 'Approuver',
    'action.reject': 'Rejeter',
    'action.view': 'Voir et modifier',
    
    // Home Page
    'home.hero.title': 'Veille sur les dérives des modèles économiques logiciels',
    'home.hero.subtitle': 'Plateforme communautaire recensant les logiciels passant d\'open source gratuit à payant',
    'home.hero.cta1': 'Consulter la base',
    'home.hero.cta2': 'Signaler un cas',
    
    'home.stats.cases': 'Cas documentés',
    'home.stats.companies': 'Entreprises',
    'home.stats.contributors': 'Contributeurs',
    'home.stats.countries': 'Pays',
    
    'home.problem.title': 'Le Problème',
    'home.problem.text1': 'De nombreux logiciels commencent en open source et gratuits pour créer une base d\'utilisateurs dépendants.',
    'home.problem.text2': 'Une fois la dépendance établie, le modèle bascule vers du payant ou de l\'abonnement.',
    'home.problem.text3': 'Cette pratique exploite la confusion entre "open source" et "gratuit" et piège les utilisateurs.',
    
    'home.solution.title': 'Notre Solution',
    'home.solution.text': 'OpenBait.org est une plateforme communautaire qui recense, documente et alerte sur ces pratiques.',
    'home.solution.feature1.title': 'Base de données complète',
    'home.solution.feature1.text': 'Recensement exhaustif des changements de modèles économiques',
    'home.solution.feature2.title': 'Analyse communautaire',
    'home.solution.feature2.text': 'Forum et discussions pour partager expériences et alternatives',
    'home.solution.feature3.title': 'Alertes proactives',
    'home.solution.feature3.text': 'Système de veille pour anticiper les changements',
    
    'home.cases.title': 'Cas Récents',
    'home.cases.viewAll': 'Voir tous les cas',
    'home.cases.viewCase': 'Voir le cas',
    
    'home.methodology.title': 'Notre Méthodologie',
    'home.methodology.step1.title': 'Signalement communautaire',
    'home.methodology.step1.text': 'Les utilisateurs signalent les changements de modèles économiques',
    'home.methodology.step2.title': 'Vérification et documentation',
    'home.methodology.step2.text': 'Notre équipe vérifie les sources et documente les changements',
    'home.methodology.step3.title': 'Publication et alerte',
    'home.methodology.step3.text': 'Le cas est publié et la communauté est alertée',
    
    'home.support.title': 'Soutenez le Projet',
    'home.support.text1': 'OpenBait.org est un projet à but non lucratif maintenu par des bénévoles.',
    'home.support.text2': 'Votre soutien nous aide à maintenir les serveurs, améliorer la plateforme et rester indépendants.',
    'home.support.btn': 'Faire un don',
    
    'home.footer.about': 'À propos',
    'home.footer.aboutText': 'Projet communautaire de veille sur les dérives des modèles économiques logiciels.',
    'home.footer.links': 'Liens',
    'home.footer.database': 'Base de données',
    'home.footer.forum': 'Forum',
    'home.footer.report': 'Signaler un cas',
    'home.footer.community': 'Communauté',
    'home.footer.contribute': 'Contribuer',
    'home.footer.guidelines': 'Code de conduite',
    'home.footer.contact': 'Contact',
    'home.footer.legal': 'Légal',
    'home.footer.privacy': 'Vie privée',
    'home.footer.terms': 'CGU',
    'home.footer.license': 'Licence',
    'home.footer.rights': 'Tous droits réservés.',
    'home.footer.openSource': 'Projet open source',
    
    // Database Page
    'db.nav.subtitle': 'Base de données',
    'db.nav.back': 'Retour à l\'accueil',
    'db.title': 'Base de données complète',
    'db.subtitle': 'Tous les cas documentés de changements de modèles économiques, avec analyses détaillées et timeline complète',
    'db.stats.documented': 'Cas documentés',
    'db.stats.critical': 'Critiques',
    'db.stats.warnings': 'Avertissements',
    'db.stats.stable': 'Stables',
    'db.stats.categories': 'Catégories',
    'db.search.placeholder': 'Rechercher une entreprise, produit...',
    'db.filter.allStatus': 'Tous les statuts',
    'db.filter.critical': 'Critiques',
    'db.filter.warning': 'Avertissements',
    'db.filter.stable': 'Stables (sûrs)',
    'db.filter.info': 'Informatifs',
    'db.filter.allCategories': 'Toutes les catégories',
    'db.search.results': '{count} résultat(s) trouvé(s)',
    'db.search.noResults': 'Aucun résultat',
    'db.search.noResultsDesc': 'Essayez de modifier vos filtres ou votre recherche',
    'db.loading': 'Chargement des cas...',
    'db.card.licenseChange': 'CHANGEMENT DE LICENCE',
    'db.card.viewDetails': 'Voir les détails',
    'db.footer.maintained': 'Base de données maintenue par la communauté OpenBait.org',
    'db.footer.copyright': '© 2025 OpenBait.org - Projet communautaire non-lucratif sous licence MIT',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.database': 'Database',
    'nav.forum': 'Forum',
    'nav.about': 'About',
    'nav.login': 'Login',
    'nav.register': 'Sign Up',
    'nav.dashboard': 'Dashboard',
    'nav.admin': 'Admin',
    'nav.logout': 'Logout',
    
    // Admin Page
    'admin.title': 'Administration Panel',
    'admin.subtitle': 'Manage cases reported by the community',
    'admin.addCase': 'Add a case',
    'admin.pending': 'Pending',
    'admin.approved': 'Approved',
    'admin.rejected': 'Rejected',
    'admin.total': 'Total',
    'admin.all': 'All',
    'admin.noCases': 'No cases to display',
    'admin.loading': 'Loading...',
    
    // Table Headers
    'table.case': 'Case',
    'table.category': 'Category',
    'table.reports': '🔥 Reports',
    'table.reportedBy': 'Reported by',
    'table.date': 'Date',
    'table.status': 'Status',
    'table.actions': 'Actions',
    
    // Status
    'status.pending': 'Pending',
    'status.approved': 'Approved',
    'status.rejected': 'Rejected',
    'status.urgent': '🔥 URGENT',
    'status.priority': '⚠️ PRIORITY',
    
    // Actions
    'action.approve': 'Approve',
    'action.reject': 'Reject',
    'action.view': 'View and edit',
    
    // Home Page
    'home.hero.title': 'Monitoring Software Business Model Shifts',
    'home.hero.subtitle': 'Community platform tracking software transitioning from free open source to paid models',
    'home.hero.cta1': 'Browse Database',
    'home.hero.cta2': 'Report a Case',
    
    'home.stats.cases': 'Documented Cases',
    'home.stats.companies': 'Companies',
    'home.stats.contributors': 'Contributors',
    'home.stats.countries': 'Countries',
    
    'home.problem.title': 'The Problem',
    'home.problem.text1': 'Many software projects start as free and open source to build a dependent user base.',
    'home.problem.text2': 'Once dependency is established, the model shifts to paid or subscription-based.',
    'home.problem.text3': 'This practice exploits the confusion between "open source" and "free" and traps users.',
    
    'home.solution.title': 'Our Solution',
    'home.solution.text': 'OpenBait.org is a community platform that tracks, documents, and alerts about these practices.',
    'home.solution.feature1.title': 'Comprehensive Database',
    'home.solution.feature1.text': 'Exhaustive tracking of business model changes',
    'home.solution.feature2.title': 'Community Analysis',
    'home.solution.feature2.text': 'Forum and discussions to share experiences and alternatives',
    'home.solution.feature3.title': 'Proactive Alerts',
    'home.solution.feature3.text': 'Monitoring system to anticipate changes',
    
    'home.cases.title': 'Recent Cases',
    'home.cases.viewAll': 'View all cases',
    'home.cases.viewCase': 'View case',
    
    'home.methodology.title': 'Our Methodology',
    'home.methodology.step1.title': 'Community Reporting',
    'home.methodology.step1.text': 'Users report business model changes',
    'home.methodology.step2.title': 'Verification and Documentation',
    'home.methodology.step2.text': 'Our team verifies sources and documents changes',
    'home.methodology.step3.title': 'Publication and Alert',
    'home.methodology.step3.text': 'Case is published and community is alerted',
    
    'home.support.title': 'Support the Project',
    'home.support.text1': 'OpenBait.org is a non-profit project maintained by volunteers.',
    'home.support.text2': 'Your support helps us maintain servers, improve the platform, and stay independent.',
    'home.support.btn': 'Donate',
    
    'home.footer.about': 'About',
    'home.footer.aboutText': 'Community project monitoring software business model shifts.',
    'home.footer.links': 'Links',
    'home.footer.database': 'Database',
    'home.footer.forum': 'Forum',
    'home.footer.report': 'Report a case',
    'home.footer.community': 'Community',
    'home.footer.contribute': 'Contribute',
    'home.footer.guidelines': 'Code of Conduct',
    'home.footer.contact': 'Contact',
    'home.footer.legal': 'Legal',
    'home.footer.privacy': 'Privacy',
    'home.footer.terms': 'Terms',
    'home.footer.license': 'License',
    'home.footer.rights': 'All rights reserved.',
    'home.footer.openSource': 'Open source project',
    
    // Database Page
    'db.nav.subtitle': 'Database',
    'db.nav.back': 'Back to home',
    'db.title': 'Complete Database',
    'db.subtitle': 'All documented cases of business model changes, with detailed analyses and complete timeline',
    'db.stats.documented': 'Documented Cases',
    'db.stats.critical': 'Critical',
    'db.stats.warnings': 'Warnings',
    'db.stats.stable': 'Stable',
    'db.stats.categories': 'Categories',
    'db.search.placeholder': 'Search for a company, product...',
    'db.filter.allStatus': 'All statuses',
    'db.filter.critical': 'Critical',
    'db.filter.warning': 'Warnings',
    'db.filter.stable': 'Stable (safe)',
    'db.filter.info': 'Informative',
    'db.filter.allCategories': 'All categories',
    'db.search.results': '{count} result(s) found',
    'db.search.noResults': 'No results',
    'db.search.noResultsDesc': 'Try modifying your filters or search',
    'db.loading': 'Loading cases...',
    'db.card.licenseChange': 'LICENSE CHANGE',
    'db.card.viewDetails': 'View details',
    'db.footer.maintained': 'Database maintained by the OpenBait.org community',
    'db.footer.copyright': '© 2025 OpenBait.org - Non-profit community project under MIT license',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('fr');

  useEffect(() => {
    // Charger la langue depuis localStorage
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && (savedLang === 'fr' || savedLang === 'en')) {
      setLanguageState(savedLang);
    }
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string, params?: Record<string, any>): string => {
    let text = translations[language][key as keyof typeof translations.fr] || key;
    
    // Replace parameters in the text
    if (params) {
      Object.keys(params).forEach(param => {
        text = text.replace(`{${param}}`, String(params[param]));
      });
    }
    
    return text;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
