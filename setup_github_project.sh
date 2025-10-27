#!/bin/bash

# Script de création automatique des issues GitHub pour OpenBait
# Basé sur l'état actuel du projet

REPO="damiensabau/OpenBait"
PROJECT_NUMBER=2

echo "🚀 Création des issues GitHub pour le projet OpenBait..."
echo "📦 Repository: $REPO"
echo ""

# Couleurs pour l'output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
PURPLE='\033[0;35m'
NC='\033[0m' # No Color

# ============================================================================
# 🏷️  CRÉATION DES LABELS
# ============================================================================

echo -e "${PURPLE}🏷️  Création des labels GitHub...${NC}"

# Labels de statut
gh label create "done" --description "Tâche terminée" --color "0E8A16" --repo $REPO --force
gh label create "in-progress" --description "En cours de développement" --color "FBCA04" --repo $REPO --force
gh label create "backlog" --description "À faire plus tard" --color "D4C5F9" --repo $REPO --force

# Labels de type
gh label create "frontend" --description "Interface utilisateur" --color "1D76DB" --repo $REPO --force
gh label create "backend" --description "Serveur et API" --color "5319E7" --repo $REPO --force
gh label create "database" --description "Base de données" --color "006B75" --repo $REPO --force
gh label create "infrastructure" --description "DevOps et infrastructure" --color "0052CC" --repo $REPO --force
gh label create "security" --description "Sécurité" --color "B60205" --repo $REPO --force
gh label create "documentation" --description "Documentation" --color "0075CA" --repo $REPO --force
gh label create "content" --description "Contenu éditorial" --color "C2E0C6" --repo $REPO --force
gh label create "research" --description "Recherche et analyse" --color "BFD4F2" --repo $REPO --force

# Labels de domaine
gh label create "feature" --description "Nouvelle fonctionnalité" --color "A2EEEF" --repo $REPO --force
gh label create "bug" --description "Bug à corriger" --color "D73A4A" --repo $REPO --force
gh label create "admin" --description "Interface admin" --color "D93F0B" --repo $REPO --force
gh label create "ux" --description "Expérience utilisateur" --color "F9D0C4" --repo $REPO --force
gh label create "design" --description "Design et UI" --color "FEF2C0" --repo $REPO --force
gh label create "api" --description "API REST" --color "7057FF" --repo $REPO --force
gh label create "testing" --description "Tests unitaires et e2e" --color "128A0C" --repo $REPO --force
gh label create "performance" --description "Optimisation performance" --color "FF6B6B" --repo $REPO --force
gh label create "seo" --description "SEO et référencement" --color "84B6EB" --repo $REPO --force

# Labels organisation
gh label create "devops" --description "CI/CD et déploiement" --color "1F77B4" --repo $REPO --force
gh label create "ci-cd" --description "Intégration continue" --color "2F4F4F" --repo $REPO --force
gh label create "monitoring" --description "Monitoring et alertes" --color "FF7F0E" --repo $REPO --force
gh label create "backup" --description "Sauvegardes" --color "8C564B" --repo $REPO --force
gh label create "organisation" --description "Organisation du projet" --color "E377C2" --repo $REPO --force
gh label create "community" --description "Communauté" --color "BCBD22" --repo $REPO --force
gh label create "financement" --description "Financement et dons" --color "17BECF" --repo $REPO --force
gh label create "communication" --description "Communication externe" --color "AEC7E8" --repo $REPO --force
gh label create "marketing" --description "Marketing et promotion" --color "FFBB78" --repo $REPO --force
gh label create "partnership" --description "Partenariats" --color "98DF8A" --repo $REPO --force
gh label create "legal" --description "Aspects légaux" --color "8B4513" --repo $REPO --force

# Labels techniques
gh label create "article" --description "Article à rédiger" --color "C5DEF5" --repo $REPO --force
gh label create "i18n" --description "Internationalisation" --color "BFD4F2" --repo $REPO --force
gh label create "mobile" --description "Mobile et responsive" --color "1D76DB" --repo $REPO --force
gh label create "analytics" --description "Analytics et statistiques" --color "D4C5F9" --repo $REPO --force
gh label create "privacy" --description "Vie privée et RGPD" --color "5319E7" --repo $REPO --force
gh label create "automation" --description "Automatisation" --color "006B75" --repo $REPO --force
gh label create "ai" --description "Intelligence artificielle" --color "FF1493" --repo $REPO --force
gh label create "data" --description "Gestion des données" --color "4B0082" --repo $REPO --force
gh label create "ha" --description "Haute disponibilité" --color "FF4500" --repo $REPO --force
gh label create "quality" --description "Qualité du code" --color "32CD32" --repo $REPO --force
gh label create "optimization" --description "Optimisation" --color "FFD700" --repo $REPO --force

echo -e "${GREEN}✅ Labels créés avec succès !${NC}"
echo ""

# ============================================================================
# ✅ TÂCHES TERMINÉES (Done)
# ============================================================================

echo -e "${GREEN}✅ Création des issues pour les tâches TERMINÉES${NC}"

gh issue create --repo $REPO \
  --title "✅ [DONE] Setup initial Next.js + TypeScript" \
  --body "Application Next.js 15 configurée avec TypeScript, Tailwind CSS et Turbopack" \
  --label "done,infrastructure,frontend"

gh issue create --repo $REPO \
  --title "✅ [DONE] Configuration Prisma + SQLite" \
  --body "Base de données SQLite configurée avec Prisma ORM
  
**Réalisé:**
- Schema Prisma complet
- Migrations créées
- Script de seed" \
  --label "done,backend,database"

gh issue create --repo $REPO \
  --title "✅ [DONE] Système d'authentification complet" \
  --body "Authentification avec JWT incluant :
- Inscription
- Connexion
- Vérification email
- Gestion des rôles (MEMBER, MODERATOR, ADMIN)" \
  --label "done,backend,security"

gh issue create --repo $REPO \
  --title "✅ [DONE] Page d'accueil" \
  --body "Page d'accueil avec présentation du projet" \
  --label "done,frontend"

gh issue create --repo $REPO \
  --title "✅ [DONE] Page À propos" \
  --body "Page de présentation du projet et des objectifs" \
  --label "done,frontend"

gh issue create --repo $REPO \
  --title "✅ [DONE] Base de données des cas" \
  --body "Modèle de données pour les cas de changement de licence :
- Informations entreprise
- Licences (initiale/finale)
- Analyse légale
- Réaction communauté
- Sources
- Alternatives
- Statut et sévérité" \
  --label "done,backend,database"

gh issue create --repo $REPO \
  --title "✅ [DONE] Page Database (liste des cas)" \
  --body "Page affichant tous les cas recensés avec :
- Filtres par catégorie et sévérité
- Système de recherche
- Vue détaillée par cas" \
  --label "done,frontend,database"

gh issue create --repo $REPO \
  --title "✅ [DONE] Panel admin - Gestion des cas" \
  --body "Interface administrateur pour :
- Approuver/rejeter les cas
- Ajouter de nouveaux cas
- Modifier les cas existants" \
  --label "done,frontend,admin"

gh issue create --repo $REPO \
  --title "✅ [DONE] Système de forum communautaire" \
  --body "Forum complet avec :
- Création de posts avec Markdown
- Système de commentaires imbriqués
- Votes (upvote/downvote)
- Réactions emoji
- Tags et catégories
- Posts épinglés" \
  --label "done,frontend,backend,feature"

gh issue create --repo $REPO \
  --title "✅ [DONE] Système de gamification" \
  --body "Gamification incluant :
- Points de réputation
- Système de badges
- Leaderboard
- Calcul automatique de la réputation" \
  --label "done,backend,feature"

gh issue create --repo $REPO \
  --title "✅ [DONE] Système de notifications" \
  --body "Notifications en temps réel pour :
- Réponses aux posts/commentaires
- Mentions
- Votes
- Réactions
- Badges débloqués
- Statut des cas signalés" \
  --label "done,backend,feature"

gh issue create --repo $REPO \
  --title "✅ [DONE] Page Dashboard utilisateur" \
  --body "Dashboard personnel avec statistiques et activité" \
  --label "done,frontend"

gh issue create --repo $REPO \
  --title "✅ [DONE] Page Leaderboard" \
  --body "Classement des utilisateurs par réputation" \
  --label "done,frontend"

gh issue create --repo $REPO \
  --title "✅ [DONE] Page Report (signalement)" \
  --body "Formulaire de signalement de nouveaux cas" \
  --label "done,frontend"

# ============================================================================
# 🔄 TÂCHES EN COURS (In Progress)
# ============================================================================

echo -e "${BLUE}🔄 Création des issues EN COURS${NC}"

gh issue create --repo $REPO \
  --title "🔄 [IN PROGRESS] Pages support et team" \
  --body "Finaliser les pages :
- /support : FAQ et aide
- /team : Présentation de l'équipe
- /partners : Partenaires du projet

**Statut:** Pages créées mais contenu à compléter" \
  --label "in-progress,frontend,content"

gh issue create --repo $REPO \
  --title "🔄 [IN PROGRESS] Documentation technique" \
  --body "Améliorer la documentation :
- ADMIN_GUIDE.md
- AUTHENTICATION.md
- EDIT_FEATURE.md
- Documentation API
- Guide de contribution

**Statut:** Documents créés, à compléter" \
  --label "in-progress,documentation"

# ============================================================================
# 📋 BACKLOG - Contenu et Recherche
# ============================================================================

echo -e "${YELLOW}📋 Création des issues BACKLOG - Contenu${NC}"

gh issue create --repo $REPO \
  --title "📚 [BACKLOG] Recherche : Cas HashiCorp" \
  --body "Documenter le cas HashiCorp (Terraform, Vault, etc.)
  
**À faire:**
- Historique du changement de licence
- Impact sur la communauté
- Alternatives disponibles
- Sources et références" \
  --label "backlog,research,content"

gh issue create --repo $REPO \
  --title "📚 [BACKLOG] Recherche : Cas Docker" \
  --body "Documenter l'évolution du modèle économique de Docker
  
**À faire:**
- Changements de licence
- Docker Desktop pricing
- Impact entreprises
- Alternatives (Podman, etc.)" \
  --label "backlog,research,content"

gh issue create --repo $REPO \
  --title "📚 [BACKLOG] Recherche : Cas Adobe" \
  --body "Documenter la transition d'Adobe vers l'abonnement
  
**À faire:**
- Passage de licences perpétuelles à Creative Cloud
- Impact sur les utilisateurs
- Comparaison des coûts
- Alternatives open source" \
  --label "backlog,research,content"

gh issue create --repo $REPO \
  --title "📚 [BACKLOG] Recherche : Autres cas majeurs" \
  --body "Identifier et documenter d'autres cas significatifs :
- Redis (changement de licence)
- MongoDB (Server Side Public License)
- Elastic (passage à SSPL)
- GitLab (évolution du pricing)
- Atlassian (fin des licences server)
- VMware (changements post-Broadcom)
- Unity (Runtime Fee)
  
Prioriser par impact sur la communauté" \
  --label "backlog,research,content"

gh issue create --repo $REPO \
  --title "📝 [BACKLOG] Article : Guide des licences open source" \
  --body "Créer un article complet expliquant :
- GPL, LGPL, AGPL
- MIT, BSD, Apache
- Creative Commons
- Licences propriétaires
- Business Source License
- SSPL
- Implications pratiques de chaque licence" \
  --label "backlog,content,article"

gh issue create --repo $REPO \
  --title "📝 [BACKLOG] Article : Open Source vs Gratuit" \
  --body "Article pédagogique sur la confusion entre open source et gratuit
  
**Sections:**
- Définitions claires
- Historique du mouvement open source
- Modèles économiques open source viables
- Exemples de manipulation marketing
- Comment se protéger" \
  --label "backlog,content,article"

gh issue create --repo $REPO \
  --title "📝 [BACKLOG] Article : Dépendance technologique" \
  --body "Article sur les risques de vendor lock-in
  
**Thèmes:**
- Comment les entreprises créent la dépendance
- Signaux d'alerte
- Stratégies de mitigation
- Importance de la diversification" \
  --label "backlog,content,article"

gh issue create --repo $REPO \
  --title "📊 [BACKLOG] Créer système de catégorisation" \
  --body "Améliorer la catégorisation des cas en 3 niveaux clairs :
  
**Catégories:**
1. **Fully OpenSource** : Projets véritablement open source et stables
2. **En Transition** : Projets en cours de changement ou à surveiller
3. **Payant/Propriétaire** : Projets ayant basculé vers un modèle fermé

Ajouter des filtres et badges visuels" \
  --label "backlog,feature,ux"

# ============================================================================
# 📋 BACKLOG - Développement et Features
# ============================================================================

echo -e "${YELLOW}📋 Création des issues BACKLOG - Développement${NC}"

gh issue create --repo $REPO \
  --title "🔍 [BACKLOG] Améliorer la recherche et filtres" \
  --body "Améliorer le système de recherche :
- Search full-text plus performant
- Filtres avancés (par date, sévérité, catégorie)
- Suggestions de recherche
- Historique de recherche
- Export des résultats" \
  --label "backlog,feature,frontend"

gh issue create --repo $REPO \
  --title "📊 [BACKLOG] Système de statistiques" \
  --body "Créer un dashboard de statistiques :
- Nombre de cas par catégorie
- Évolution temporelle
- Cas les plus consultés
- Tendances émergentes
- Graphiques interactifs" \
  --label "backlog,feature,frontend,analytics"

gh issue create --repo $REPO \
  --title "🔔 [BACKLOG] Système d'alertes email" \
  --body "Permettre aux utilisateurs de s'abonner à :
- Nouveaux cas dans certaines catégories
- Changements sur des projets suivis
- Newsletter hebdomadaire
- Alertes sur seuils critiques" \
  --label "backlog,feature,backend"

gh issue create --repo $REPO \
  --title "🌐 [BACKLOG] Internationalisation (i18n)" \
  --body "Ajouter le support multilingue :
- Français (par défaut)
- Anglais
- Système de traduction
- Contenu localisé pour les articles" \
  --label "backlog,feature,i18n"

gh issue create --repo $REPO \
  --title "📱 [BACKLOG] Optimisation mobile" \
  --body "Améliorer l'expérience mobile :
- Navigation adaptative
- Touch gestures
- Performance mobile
- PWA capabilities" \
  --label "backlog,frontend,mobile,ux"

gh issue create --repo $REPO \
  --title "🔒 [BACKLOG] Système de permissions avancé" \
  --body "Améliorer la gestion des permissions :
- Rôles personnalisables
- Permissions granulaires
- Logs d'audit
- Gestion des modérateurs" \
  --label "backlog,backend,security"

gh issue create --repo $REPO \
  --title "📤 [BACKLOG] API publique REST" \
  --body "Créer une API publique pour :
- Consulter les cas (lecture seule)
- Webhooks pour intégrations
- Rate limiting
- Documentation OpenAPI/Swagger
- Clés API" \
  --label "backlog,backend,api"

gh issue create --repo $REPO \
  --title "🤖 [BACKLOG] Système de veille automatique" \
  --body "Automatiser la détection de changements :
- Scraping de blogs officiels
- Monitoring des changelogs GitHub
- Analyse des HN/Reddit
- Alertes automatiques sur changements de licence
- Suggestions de nouveaux cas" \
  --label "backlog,feature,automation,ai"

gh issue create --repo $REPO \
  --title "💾 [BACKLOG] Import/Export de données" \
  --body "Permettre l'import/export :
- Export CSV des cas
- Export JSON pour backup
- Import bulk de cas
- Templates pour soumissions" \
  --label "backlog,feature,data"

gh issue create --repo $REPO \
  --title "🎨 [BACKLOG] Amélioration UI/UX" \
  --body "Améliorations visuelles et UX :
- Thème sombre/clair
- Animations et transitions
- Accessibility (WCAG 2.1)
- Loading states améliorés
- Error boundaries" \
  --label "backlog,frontend,ux,design"

# ============================================================================
# 📋 BACKLOG - Infrastructure et DevOps
# ============================================================================

echo -e "${YELLOW}📋 Création des issues BACKLOG - Infrastructure${NC}"

gh issue create --repo $REPO \
  --title "🚀 [BACKLOG] Choisir et configurer l'hébergement" \
  --body "Sélectionner et configurer l'hébergement de production
  
**Options évaluées:**
- OVH VPS
- LWS
- o2switch
- Infomaniak
- Hostinger

**Critères:**
- Coût mensuel
- Performance
- Support
- Localisation (France/EU)
- Facilité de migration" \
  --label "backlog,infrastructure,devops"

gh issue create --repo $REPO \
  --title "🌐 [BACKLOG] Nom de domaine" \
  --body "Choisir et acheter le nom de domaine
  
**Suggestions:**
- openbait.org
- opensourcebait.com
- licensewatch.org
- softwaretransparency.org

Configuration DNS et certificats SSL" \
  --label "backlog,infrastructure"

gh issue create --repo $REPO \
  --title "🔄 [BACKLOG] Setup CI/CD" \
  --body "Mettre en place l'intégration continue :
- GitHub Actions pour tests
- Build automatique
- Déploiement automatique
- Preview deployments
- Rollback automatique" \
  --label "backlog,devops,ci-cd"

gh issue create --repo $REPO \
  --title "💾 [BACKLOG] Système de backup automatique" \
  --body "Configurer les sauvegardes :
- Backup quotidien de la DB
- Backup des uploads
- Rétention 30 jours minimum
- Test de restoration
- Backup off-site" \
  --label "backlog,infrastructure,backup"

gh issue create --repo $REPO \
  --title "🔧 [BACKLOG] Monitoring et alertes" \
  --body "Mettre en place le monitoring :
- Uptime monitoring
- Performance metrics
- Error tracking (Sentry?)
- Logs centralisés
- Alertes automatiques" \
  --label "backlog,devops,monitoring"

gh issue create --repo $REPO \
  --title "🔐 [BACKLOG] Durcissement sécurité" \
  --body "Renforcer la sécurité :
- Rate limiting avancé
- Protection DDoS
- Content Security Policy
- CORS configuration
- Audit de sécurité
- Penetration testing" \
  --label "backlog,security,devops"

gh issue create --repo $REPO \
  --title "⚡ [BACKLOG] Migration PostgreSQL" \
  --body "Migrer de SQLite vers PostgreSQL pour la production
  
**Raisons:**
- Performance accrue
- Concurrent writes
- Full-text search natif
- Better scaling
- Backup plus robuste

**Migration:**
- Setup PostgreSQL
- Adapter le schema
- Migration script
- Tests de performance" \
  --label "backlog,database,infrastructure"

gh issue create --repo $REPO \
  --title "📈 [BACKLOG] Setup Analytics" \
  --body "Configurer analytics respectueux de la vie privée :
- Plausible ou Matomo (pas Google Analytics)
- Respect RGPD
- Pas de cookies tracking
- Métriques essentielles uniquement" \
  --label "backlog,analytics,privacy"

gh issue create --repo $REPO \
  --title "🔁 [BACKLOG] Redondance et haute disponibilité" \
  --body "Mettre en place la redondance :
- Load balancer
- Multiple instances
- Database replication
- CDN pour assets statiques
- Failover automatique" \
  --label "backlog,infrastructure,ha"

# ============================================================================
# 📋 BACKLOG - Organisation et Communication
# ============================================================================

echo -e "${YELLOW}📋 Création des issues BACKLOG - Organisation${NC}"

gh issue create --repo $REPO \
  --title "📅 [BACKLOG] Planning et roadmap publique" \
  --body "Créer et maintenir une roadmap publique :
- Prochaines features
- Timeline
- Votes communautaires
- Transparence sur les priorités" \
  --label "backlog,organisation,community"

gh issue create --repo $REPO \
  --title "💰 [BACKLOG] Système de dons" \
  --body "Mettre en place les donations :
- Liberapay / Open Collective
- GitHub Sponsors
- Transparence financière
- Page dédiée avec coûts détaillés
- Badges pour donateurs" \
  --label "backlog,financement,organisation"

gh issue create --repo $REPO \
  --title "📢 [BACKLOG] Stratégie de communication" \
  --body "Développer la communication :
- Réseaux sociaux (Mastodon, Twitter/X)
- Newsletter
- Blog régulier
- Communiqués de presse
- Partenariats avec médias tech" \
  --label "backlog,communication,marketing"

gh issue create --repo $REPO \
  --title "👥 [BACKLOG] Guide de contribution" \
  --body "Créer un guide complet pour les contributeurs :
- CONTRIBUTING.md
- Code of conduct
- How to report bugs
- How to suggest features
- Development setup guide
- Pull request guidelines" \
  --label "backlog,documentation,community"

gh issue create --repo $REPO \
  --title "🤝 [BACKLOG] Partenariats OSS" \
  --body "Établir des partenariats avec :
- FSF (Free Software Foundation)
- OSI (Open Source Initiative)
- Framasoft
- Associations nationales
- Universités et écoles" \
  --label "backlog,partnership,community"

gh issue create --repo $REPO \
  --title "⚖️ [BACKLOG] Aspects légaux" \
  --body "Clarifier les aspects légaux :
- Mentions légales
- CGU / Privacy Policy
- Conformité RGPD
- Disclaimer sur les analyses
- Protection juridique du projet" \
  --label "backlog,legal,organisation"

gh issue create --repo $REPO \
  --title "📊 [BACKLOG] Tableaux de bord admin" \
  --body "Améliorer l'interface admin avec :
- Dashboard de modération
- Statistiques d'utilisation
- User management
- Content moderation tools
- Logs d'activité" \
  --label "backlog,admin,frontend"

# ============================================================================
# 🐛 BUGS & AMÉLIORATIONS TECHNIQUES
# ============================================================================

echo -e "${YELLOW}🐛 Création des issues pour bugs connus${NC}"

gh issue create --repo $REPO \
  --title "🐛 [BUG] Tests unitaires et e2e" \
  --body "Aucun test n'existe actuellement
  
**À faire:**
- Setup Jest + React Testing Library
- Tests unitaires composants
- Tests API routes
- Tests e2e avec Playwright
- Coverage minimum 70%" \
  --label "bug,testing,quality"

gh issue create --repo $REPO \
  --title "🐛 [BUG] Gestion des erreurs" \
  --body "Améliorer la gestion d'erreur :
- Error boundaries React
- Messages d'erreur clairs
- Logging structuré
- Toast notifications
- Fallback UI" \
  --label "bug,ux,quality"

gh issue create --repo $REPO \
  --title "🐛 [BUG] Performance optimization" \
  --body "Optimiser les performances :
- Code splitting
- Lazy loading images
- React.memo sur composants lourds
- Pagination côté serveur
- Cache strategy
- Bundle size analysis" \
  --label "bug,performance,optimization"

gh issue create --repo $REPO \
  --title "🐛 [BUG] SEO et métadonnées" \
  --body "Améliorer le SEO :
- Metadata dynamiques par page
- Open Graph tags
- Sitemap.xml
- robots.txt
- Schema.org markup
- Performance Lighthouse" \
  --label "bug,seo,frontend"

echo ""
echo -e "${GREEN}✅ Toutes les issues ont été créées avec succès !${NC}"
echo ""
echo "📊 Résumé :"
echo "  - ✅ Issues DONE (terminées) : ~15"
echo "  - 🔄 Issues IN PROGRESS : ~2"
echo "  - 📋 Issues BACKLOG : ~40+"
echo ""
echo "🔗 Rendez-vous sur https://github.com/$REPO/issues pour les voir"
echo "🎯 Ensuite, glissez-les dans les bonnes colonnes de votre projet #$PROJECT_NUMBER"
echo ""
echo "💡 Conseil : Utilisez les labels pour filtrer et organiser les issues !"
