# User Stories - OpenBait

## 📋 Table des matières

1. [Visiteur Non-Connecté](#visiteur-non-connecté)
2. [Utilisateur Connecté (Membre)](#utilisateur-connecté-membre)
3. [Modérateur](#modérateur)
4. [Administrateur](#administrateur)
5. [Contributeur/Chercheur](#contributeur--chercheur)
6. [Développeur Open Source](#développeur-open-source)
7. [Entreprise/Organisation](#entreprise--organisation)

---

## Visiteur Non-Connecté

### Découverte et Information

**US-001** : En tant que **visiteur**, je veux **voir la page d'accueil avec une présentation claire du projet** afin de **comprendre rapidement l'objectif de la plateforme**.
- **Critères d'acceptation** :
  - Présentation du projet en 2-3 paragraphes
  - Statistiques clés (nombre de cas, entreprises recensées)
  - Call-to-action clair (inscription, consulter la base)

**US-002** : En tant que **visiteur**, je veux **consulter la liste complète des cas documentés** afin de **découvrir quelles entreprises ont changé leur modèle économique**.
- **Critères d'acceptation** :
  - Liste paginée des cas
  - Filtres par catégorie (Fully OpenSource, En transition, Payant)
  - Filtres par sévérité (Critical, Warning, Stable)
  - Recherche par nom d'entreprise ou produit

**US-003** : En tant que **visiteur**, je veux **voir les détails d'un cas spécifique** afin de **comprendre les changements de licence et leur impact**.
- **Critères d'acceptation** :
  - Informations complètes (licence initiale/finale, date de changement)
  - Analyse légale et réaction communautaire
  - Sources vérifiables
  - Alternatives proposées

**US-004** : En tant que **visiteur**, je veux **lire des articles pédagogiques sur les licences** afin de **mieux comprendre la différence entre open source et gratuit**.
- **Critères d'acceptation** :
  - Section articles accessible
  - Articles bien structurés et éducatifs
  - Support du Markdown pour le formatage

**US-005** : En tant que **visiteur**, je veux **consulter le forum sans me connecter** afin de **voir les discussions de la communauté**.
- **Critères d'acceptation** :
  - Lecture des posts et commentaires
  - Impossible de voter/commenter sans compte
  - Invitation claire à créer un compte

### Inscription et Authentification

**US-006** : En tant que **visiteur**, je veux **créer un compte facilement** afin de **participer à la communauté**.
- **Critères d'acceptation** :
  - Formulaire simple (email, nom, mot de passe)
  - Validation email
  - Confirmation de création de compte

**US-007** : En tant que **visiteur**, je veux **me connecter à mon compte** afin d'**accéder aux fonctionnalités membres**.
- **Critères d'acceptation** :
  - Connexion par email/password
  - Message d'erreur clair si identifiants incorrects
  - Redirection vers la page demandée après connexion

---

## Utilisateur Connecté (Membre)

### Participation au Forum

**US-008** : En tant que **membre**, je veux **créer un nouveau post sur le forum** afin de **partager mes découvertes ou poser des questions**.
- **Critères d'acceptation** :
  - Éditeur Markdown
  - Sélection de catégorie
  - Ajout de tags
  - Preview avant publication

**US-009** : En tant que **membre**, je veux **commenter les posts** afin de **participer aux discussions**.
- **Critères d'acceptation** :
  - Commentaires imbriqués (réponses)
  - Support Markdown
  - Édition/suppression de mes propres commentaires

**US-010** : En tant que **membre**, je veux **voter (upvote/downvote) sur les posts et commentaires** afin de **valoriser les contributions pertinentes**.
- **Critères d'acceptation** :
  - Un vote par utilisateur par post/commentaire
  - Possibilité de changer son vote
  - Score visible en temps réel

**US-011** : En tant que **membre**, je veux **réagir avec des emojis aux posts** afin d'**exprimer rapidement mon sentiment**.
- **Critères d'acceptation** :
  - Sélection d'emoji dans un picker
  - Compteur de réactions par type
  - Une réaction par emoji par utilisateur

**US-012** : En tant que **membre**, je veux **mentionner d'autres utilisateurs avec @username** afin de **les impliquer dans une discussion**.
- **Critères d'acceptation** :
  - Autocomplétion des usernames
  - Notification envoyée à l'utilisateur mentionné
  - Lien cliquable vers le profil

### Signalement et Contribution

**US-013** : En tant que **membre**, je veux **signaler un nouveau cas de changement de licence** afin de **contribuer à la base de données**.
- **Critères d'acceptation** :
  - Formulaire complet (entreprise, produit, licences, dates, sources)
  - Validation des champs requis
  - Statut "PENDING" par défaut
  - Confirmation de soumission

**US-014** : En tant que **membre**, je veux **suggérer des alternatives à un logiciel propriétaire** afin d'**aider les utilisateurs à trouver des solutions**.
- **Critères d'acceptation** :
  - Formulaire d'ajout d'alternative
  - Description et lien vers le projet
  - Validation par la communauté (votes)

### Profil et Gamification

**US-015** : En tant que **membre**, je veux **voir mon dashboard personnel** afin de **suivre mon activité et ma progression**.
- **Critères d'acceptation** :
  - Statistiques personnelles (posts, commentaires, votes)
  - Points de réputation
  - Badges débloqués
  - Historique des contributions

**US-016** : En tant que **membre**, je veux **gagner des points de réputation** afin d'**être reconnu pour mes contributions**.
- **Critères d'acceptation** :
  - Points pour posts, commentaires, votes reçus
  - Points pour cas approuvés
  - Système transparent et équitable

**US-017** : En tant que **membre**, je veux **débloquer des badges** afin de **visualiser mes accomplissements**.
- **Critères d'acceptation** :
  - Badges pour différentes actions (premier post, 100 upvotes, etc.)
  - Affichage sur le profil
  - Notification lors du déblocage

**US-018** : En tant que **membre**, je veux **consulter le leaderboard** afin de **voir les membres les plus actifs**.
- **Critères d'acceptation** :
  - Classement par réputation
  - Top 50 utilisateurs
  - Statistiques par utilisateur

### Notifications

**US-019** : En tant que **membre**, je veux **recevoir des notifications** afin d'**être informé des interactions importantes**.
- **Critères d'acceptation** :
  - Notifications pour réponses, mentions, votes
  - Badge avec compteur non-lu
  - Marquage comme lu
  - Lien direct vers le contenu concerné

**US-020** : En tant que **membre**, je veux **gérer mes préférences de notifications** afin de **contrôler ce que je reçois**.
- **Critères d'acceptation** :
  - Activation/désactivation par type
  - Préférences sauvegardées
  - Possibilité de recevoir par email (future)

---

## Modérateur

### Modération du Contenu

**US-021** : En tant que **modérateur**, je veux **approuver ou rejeter les cas signalés** afin de **maintenir la qualité de la base de données**.
- **Critères d'acceptation** :
  - Interface de modération dédiée
  - Visualisation des cas PENDING
  - Actions : Approuver, Rejeter, Demander modifications
  - Notification au contributeur

**US-022** : En tant que **modérateur**, je veux **modifier les cas existants** afin de **corriger les erreurs ou mettre à jour les informations**.
- **Critères d'acceptation** :
  - Accès à l'édition de tous les cas
  - Historique des modifications
  - Raison de la modification (optionnel)

**US-023** : En tant que **modérateur**, je veux **modérer les posts et commentaires du forum** afin de **maintenir un environnement sain**.
- **Critères d'acceptation** :
  - Suppression de contenu inapproprié
  - Avertissement aux utilisateurs
  - Logs d'actions de modération

**US-024** : En tant que **modérateur**, je veux **épingler des posts importants** afin de **mettre en avant les discussions essentielles**.
- **Critères d'acceptation** :
  - Action "épingler/désépingler"
  - Posts épinglés en haut de la liste
  - Badge visuel "épinglé"

**US-025** : En tant que **modérateur**, je veux **gérer les signalements abusifs** afin de **protéger la communauté**.
- **Critères d'acceptation** :
  - File d'attente des signalements
  - Actions : Ignorer, Supprimer, Avertir
  - Historique des décisions

---

## Administrateur

### Gestion Globale

**US-026** : En tant qu'**administrateur**, je veux **accéder à un dashboard admin complet** afin de **superviser l'ensemble de la plateforme**.
- **Critères d'acceptation** :
  - Statistiques globales (utilisateurs, cas, posts, activité)
  - Graphiques de croissance
  - Alertes sur activités suspectes

**US-027** : En tant qu'**administrateur**, je veux **gérer les utilisateurs** afin de **contrôler les accès et rôles**.
- **Critères d'acceptation** :
  - Liste de tous les utilisateurs
  - Modification des rôles (Member, Moderator, Admin)
  - Suspension/bannissement de comptes
  - Raison documentée

**US-028** : En tant qu'**administrateur**, je veux **ajouter directement des cas à la base** afin d'**enrichir rapidement le contenu**.
- **Critères d'acceptation** :
  - Formulaire complet d'ajout
  - Statut APPROVED automatiquement
  - Sélection de la sévérité

**US-029** : En tant qu'**administrateur**, je veux **gérer les catégories et tags** afin d'**organiser efficacement le contenu**.
- **Critères d'acceptation** :
  - CRUD sur catégories
  - Fusion de tags similaires
  - Renommage en masse

### Sécurité et Maintenance

**US-030** : En tant qu'**administrateur**, je veux **consulter les logs d'activité** afin de **détecter les comportements suspects**.
- **Critères d'acceptation** :
  - Logs d'authentification
  - Logs d'actions administratives
  - Filtres par type et date
  - Export CSV

**US-031** : En tant qu'**administrateur**, je veux **effectuer des sauvegardes manuelles** afin de **sécuriser les données critiques**.
- **Critères d'acceptation** :
  - Backup de la base de données
  - Backup des uploads
  - Téléchargement du backup
  - Restauration possible

---

## Contributeur / Chercheur

### Recherche et Documentation

**US-032** : En tant que **chercheur**, je veux **effectuer une recherche avancée dans la base de cas** afin de **trouver rapidement des informations spécifiques**.
- **Critères d'acceptation** :
  - Recherche full-text
  - Filtres multiples (date, catégorie, sévérité, entreprise)
  - Export des résultats (CSV/JSON)
  - Sauvegarde de requêtes

**US-033** : En tant que **contributeur**, je veux **proposer des sources additionnelles pour un cas** afin d'**enrichir la documentation**.
- **Critères d'acceptation** :
  - Formulaire d'ajout de source
  - URL + description
  - Validation par modérateur
  - Crédit au contributeur

**US-034** : En tant que **chercheur**, je veux **accéder à une API publique** afin d'**utiliser les données dans mes propres outils**.
- **Critères d'acceptation** :
  - API REST documentée
  - Endpoints pour cas, catégories, statistiques
  - Rate limiting
  - Clé API optionnelle

**US-035** : En tant que **contributeur**, je veux **rédiger des articles** afin de **partager mes analyses avec la communauté**.
- **Critères d'acceptation** :
  - Éditeur Markdown avancé
  - Prévisualisation en temps réel
  - Publication avec validation modérateur
  - Système de brouillons

---

## Développeur Open Source

### Veille et Protection

**US-036** : En tant que **développeur open source**, je veux **surveiller un projet spécifique** afin d'**être alerté de changements de licence**.
- **Critères d'acceptation** :
  - Liste de projets suivis
  - Notifications email lors de changements
  - Comparaison de licences
  - Historique des versions

**US-037** : En tant que **développeur**, je veux **consulter les alternatives à un logiciel** afin de **migrer avant qu'il ne devienne payant**.
- **Critères d'acceptation** :
  - Liste d'alternatives par cas
  - Comparatif fonctionnel
  - Niveau de maturité des alternatives
  - Liens vers la documentation

**US-038** : En tant que **développeur**, je veux **comprendre les différentes licences** afin de **choisir la bonne pour mon projet**.
- **Critères d'acceptation** :
  - Guide complet des licences
  - Comparateur de licences
  - Cas d'usage recommandés
  - Implications légales

**US-039** : En tant que **développeur**, je veux **voir les tendances de changements de licences** afin d'**anticiper les risques**.
- **Critères d'acceptation** :
  - Graphiques temporels
  - Statistiques par type de licence
  - Secteurs les plus touchés
  - Prédictions (ML)

---

## Entreprise / Organisation

### Due Diligence et Risk Management

**US-040** : En tant que **responsable IT**, je veux **vérifier les dépendances de mon stack technique** afin d'**identifier les risques de changement de licence**.
- **Critères d'acceptation** :
  - Upload de package.json / requirements.txt
  - Scan automatique des dépendances
  - Rapport de risque
  - Suggestions d'alternatives

**US-041** : En tant que **décideur**, je veux **consulter l'historique d'une entreprise** afin d'**évaluer sa fiabilité avant adoption**.
- **Critères d'acceptation** :
  - Vue chronologique des changements
  - Pattern de comportement
  - Score de confiance
  - Avis de la communauté

**US-042** : En tant que **responsable juridique**, je veux **exporter un rapport complet sur un logiciel** afin de **documenter mes audits de conformité**.
- **Critères d'acceptation** :
  - Export PDF professionnel
  - Toutes les sources incluses
  - Analyse légale détaillée
  - Horodatage et version

**US-043** : En tant qu'**organisation**, je veux **recevoir une newsletter hebdomadaire** afin d'**être informé des nouveaux cas critiques**.
- **Critères d'acceptation** :
  - Inscription à la newsletter
  - Résumé des cas critiques de la semaine
  - Filtrage par secteur d'activité
  - Désabonnement facile

**US-044** : En tant que **CTO**, je veux **accéder à des statistiques sur les modèles économiques** afin de **prendre des décisions stratégiques éclairées**.
- **Critères d'acceptation** :
  - Dashboard analytique
  - Tendances par secteur
  - Coûts moyens post-changement
  - ROI des migrations

---

## Personas Additionnels

### Journaliste / Média Tech

**US-045** : En tant que **journaliste**, je veux **accéder aux derniers cas ajoutés via RSS** afin de **rédiger des articles d'actualité**.
- **Critères d'acceptation** :
  - Flux RSS disponible
  - Filtres par catégorie
  - Informations complètes dans le flux

### Étudiant / Chercheur Académique

**US-046** : En tant qu'**étudiant**, je veux **citer correctement les données de la plateforme** afin de **respecter les normes académiques**.
- **Critères d'acceptation** :
  - Citation générée automatiquement (APA, MLA, etc.)
  - DOI ou identifiant permanent par cas
  - Métadonnées complètes

### Militant / Activiste Open Source

**US-047** : En tant qu'**activiste**, je veux **partager facilement un cas sur les réseaux sociaux** afin de **sensibiliser le public**.
- **Critères d'acceptation** :
  - Boutons de partage (Twitter, Mastodon, LinkedIn)
  - Image Open Graph personnalisée
  - Texte pré-rempli optimisé

---

## User Stories Techniques (Non-fonctionnelles)

### Performance

**US-048** : En tant qu'**utilisateur**, je veux **que la page se charge en moins de 2 secondes** afin d'**avoir une expérience fluide**.
- **Critères d'acceptation** :
  - Lighthouse score > 90
  - Lazy loading des images
  - Code splitting
  - CDN pour les assets statiques

### Accessibilité

**US-049** : En tant qu'**utilisateur malvoyant**, je veux **naviguer au clavier et utiliser un lecteur d'écran** afin d'**accéder à toutes les fonctionnalités**.
- **Critères d'acceptation** :
  - WCAG 2.1 niveau AA
  - Navigation au clavier
  - Alt text sur images
  - Contraste suffisant

### Sécurité

**US-050** : En tant qu'**utilisateur**, je veux **que mes données soient sécurisées** afin de **protéger ma vie privée**.
- **Critères d'acceptation** :
  - HTTPS obligatoire
  - Passwords hachés (bcrypt)
  - Protection CSRF
  - Rate limiting sur login

### Mobile

**US-051** : En tant qu'**utilisateur mobile**, je veux **utiliser le site sur mon smartphone** afin d'**accéder aux informations en déplacement**.
- **Critères d'acceptation** :
  - Responsive design
  - Touch-friendly
  - Menu burger
  - Performance optimisée 4G

### SEO

**US-052** : En tant que **visiteur Google**, je veux **trouver le site via recherche** afin de **découvrir les cas qui m'intéressent**.
- **Critères d'acceptation** :
  - Métadonnées complètes par page
  - Sitemap.xml
  - Structured data (Schema.org)
  - URLs SEO-friendly

---

## Estimation et Priorisation

### Matrice MoSCoW

#### Must Have (MVP)
- US-001 à US-007 (Découverte et authentification)
- US-013 (Signalement de cas)
- US-021, US-026, US-028 (Administration de base)
- US-048, US-050 (Performance et sécurité)

#### Should Have (V1)
- US-008 à US-012 (Forum)
- US-015 à US-018 (Gamification)
- US-019, US-020 (Notifications)
- US-022 à US-025 (Modération avancée)
- US-032 (Recherche avancée)

#### Could Have (V2)
- US-033 à US-035 (Contribution avancée)
- US-036 à US-039 (Veille et tendances)
- US-040 à US-044 (Features entreprise)
- US-034 (API publique)

#### Won't Have (Future)
- US-045 à US-047 (Features communautaires avancées)
- US-049 (Accessibilité avancée)
- US-051 (PWA)

---

## Estimation en Story Points (Fibonacci)

| User Story | Points | Complexité | Priorité |
|------------|--------|------------|----------|
| US-001     | 3      | Facile     | Must     |
| US-002     | 8      | Moyenne    | Must     |
| US-003     | 5      | Moyenne    | Must     |
| US-008     | 13     | Élevée     | Should   |
| US-013     | 8      | Moyenne    | Must     |
| US-015     | 5      | Moyenne    | Should   |
| US-021     | 13     | Élevée     | Must     |
| US-032     | 21     | Très élevée| Could    |
| US-034     | 21     | Très élevée| Could    |
| US-040     | 34     | Complexe   | Could    |

---

## Définition de "Done"

Une User Story est considérée comme terminée quand :

✅ **Développement**
- Code écrit et fonctionnel
- Pas d'erreurs console
- Responsive (mobile + desktop)

✅ **Qualité**
- Tests unitaires passés (couverture > 70%)
- Code review validé
- Pas de bugs critiques

✅ **Documentation**
- README mis à jour si nécessaire
- Commentaires dans le code complexe
- API documentée (si applicable)

✅ **UX/UI**
- Design validé
- Accessible (navigation clavier)
- Messages d'erreur clairs

✅ **Validation**
- Démo faite à l'équipe
- Critères d'acceptation vérifiés
- Testé en environnement de staging

---

## Backlog Priorisé (3 premiers sprints)

### Sprint 1 (MVP - 2 semaines)
1. US-001 : Page d'accueil ✅ (DONE)
2. US-006, US-007 : Authentification ✅ (DONE)
3. US-002, US-003 : Base de données et consultation ✅ (DONE)
4. US-028 : Admin - Ajout de cas ✅ (DONE)

### Sprint 2 (Forum - 2 semaines)
1. US-008 : Création de posts ✅ (DONE)
2. US-009 : Commentaires ✅ (DONE)
3. US-010 : Système de votes ✅ (DONE)
4. US-011 : Réactions emoji ✅ (DONE)

### Sprint 3 (Gamification - 2 semaines)
1. US-015 : Dashboard utilisateur ✅ (DONE)
2. US-016, US-017 : Réputation et badges ✅ (DONE)
3. US-018 : Leaderboard ✅ (DONE)
4. US-019 : Notifications ✅ (DONE)

### Sprint 4 (Modération et Contenu - 2 semaines)
1. US-013 : Signalement de cas par les utilisateurs
2. US-021 : Workflow de modération
3. US-033 : Sources additionnelles
4. US-035 : Système d'articles

### Sprint 5 (Recherche et Analytics - 2 semaines)
1. US-032 : Recherche avancée
2. US-026 : Dashboard admin amélioré
3. US-039 : Statistiques et tendances
4. US-024 : Posts épinglés et mise en avant

### Sprint 6 (API et Intégrations - 2 semaines)
1. US-034 : API REST publique
2. US-036 : Système de surveillance
3. US-045 : Flux RSS
4. US-040 : Scan de dépendances

---

## Métriques de Succès

### Métriques Utilisateurs
- **Inscription** : 100 utilisateurs le premier mois
- **Engagement** : 30% d'utilisateurs actifs mensuels
- **Rétention** : 60% reviennent après 1 semaine
- **Contribution** : 10 nouveaux cas signalés par semaine

### Métriques Contenu
- **Base de données** : 50 cas documentés au lancement
- **Forum** : 20 discussions actives par semaine
- **Articles** : 1 article pédagogique par semaine
- **Qualité** : 90% des cas avec sources vérifiables

### Métriques Techniques
- **Performance** : Lighthouse score > 90
- **Disponibilité** : Uptime > 99.5%
- **Sécurité** : 0 vulnérabilité critique
- **SEO** : Top 10 sur "changement licence open source"

---

**Document maintenu par** : Équipe OpenBait  
**Dernière mise à jour** : 20 octobre 2025  
**Version** : 1.0
