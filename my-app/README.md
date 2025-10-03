# 🚀 OpenBait.org - Documentation du Projet

OpenBait.org est une plateforme communautaire non-lucrative qui documente les changements de modèles économiques dans l'écosystème logiciel (open source → propriétaire, gratuit → payant, etc.).

## 📋 Table des matières

- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration de la base de données](#configuration-de-la-base-de-données)
- [Démarrage du projet](#démarrage-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Contribution](#contribution)

## 🛠️ Prérequis

Avant de commencer, assurez-vous d'avoir installé :

- **Node.js** 18.x ou supérieur
- **npm** ou **yarn** ou **pnpm**
- **Git**

## 📦 Installation

### 1. Cloner le repository

\`\`\`bash
git clone https://github.com/damiensabau/OpenBait.git
cd OpenBait/my-app
\`\`\`

### 2. Installer les dépendances

\`\`\`bash
npm install
# ou
yarn install
# ou
pnpm install
\`\`\`

## 🗄️ Configuration de la base de données

### 1. Initialiser Prisma (si pas déjà fait)

\`\`\`bash
npx prisma init
\`\`\`

Cette commande crée :
- Un dossier \`prisma/\` avec \`schema.prisma\`
- Un fichier \`.env\` pour les variables d'environnement

### 2. Configurer les variables d'environnement

Créez ou modifiez le fichier \`.env\` à la racine du projet :

\`\`\`env
# Database
DATABASE_URL="file:./dev.db"

# JWT Secret (générez une clé aléatoire sécurisée)
JWT_SECRET="votre_secret_jwt_super_securise_ici"
\`\`\`

> **Note :** Pour générer un JWT_SECRET sécurisé :
> \`\`\`bash
> node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
> \`\`\`

### 3. Générer le client Prisma

\`\`\`bash
npx prisma generate
\`\`\`

Cette commande génère le client Prisma TypeScript basé sur votre schéma.

### 4. Créer la base de données et appliquer les migrations

\`\`\`bash
npx prisma migrate dev --name init
\`\`\`

Cette commande :
- Crée la base de données SQLite (\`prisma/dev.db\`)
- Applique toutes les migrations
- Génère le client Prisma

### 5. Peupler la base de données (seeding)

\`\`\`bash
npm run seed
# ou
npx prisma db seed
\`\`\`

Cette commande ajoute :
- Un utilisateur admin par défaut (\`admin@openbait.org\` / \`admin123\`)
- 9 cas documentés célèbres (HashiCorp Terraform, Docker Desktop, etc.)

### 6. (Optionnel) Ouvrir Prisma Studio

Pour visualiser et éditer vos données dans une interface graphique :

\`\`\`bash
npx prisma studio
\`\`\`

Ouvrez http://localhost:5555 dans votre navigateur.

## 🚀 Démarrage du projet

### Mode développement

\`\`\`bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
\`\`\`

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

### Mode production

\`\`\`bash
# Build
npm run build

# Start
npm start
\`\`\`

## ✨ Fonctionnalités

### 🔐 Système d'authentification
- **Inscription** avec validation (email unique, mot de passe fort)
- **Connexion** avec JWT (tokens valides 7 jours)
- **Trois rôles** : MEMBER, MODERATOR, ADMIN
- Protection des routes selon les rôles

### 👤 Espace utilisateur
- **Dashboard** pour les membres
- Consultation des cas documentés
- Signalement de nouveaux cas

### 🛡️ Panneau Admin
- **Gestion des cas** (CRUD complet)
  - Création manuelle de cas
  - Édition avec mode preview/edit
  - Approbation/Rejet des soumissions
  - Suppression de cas
- **Statistiques** : pending, approved, rejected, total
- **Filtres et recherche**

### 💬 Forum communautaire (Reddit-style)
- **Création de posts** avec catégories
  - Discussion générale
  - Aide & Support
  - Suggestions
  - Cas documentés
  - Actualités
  - Autre
- **Système de vote** (upvote/downvote)
  - Sur les posts
  - Sur les commentaires
  - Tracking des votes par utilisateur
- **Commentaires imbriqués** (réponses aux réponses)
- **Filtres** : Hot, New, Top
- **Compteur de vues**

### 📊 Base de données
- **Consultation publique** des cas documentés
- **Recherche et filtres** avancés
- **Détails complets** par cas
- **Timeline** des changements

## 📁 Structure du projet

\`\`\`
my-app/
├── app/                          # Next.js App Router
│   ├── api/                      # Routes API
│   │   ├── auth/                 # Authentication
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── verify/
│   │   ├── admin/                # Admin endpoints
│   │   │   └── cases/
│   │   └── forum/                # Forum endpoints
│   │       ├── posts/
│   │       └── comments/
│   ├── admin/                    # Pages admin
│   │   └── cases/
│   │       ├── add/
│   │       └── edit/[id]/
│   ├── auth/                     # Pages d'authentification
│   │   ├── login/
│   │   └── register/
│   ├── dashboard/                # Dashboard utilisateur
│   ├── database/                 # Base de données publique
│   ├── forum/                    # Forum
│   │   ├── [id]/                 # Détail d'un post
│   │   └── new/                  # Nouveau post
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Page d'accueil
│   └── globals.css               # Styles globaux
├── lib/                          # Utilitaires
│   ├── auth.ts                   # JWT & hashing
│   └── prisma.ts                 # Client Prisma
├── prisma/                       # Prisma ORM
│   ├── schema.prisma             # Schéma de base de données
│   ├── seed.ts                   # Script de seeding
│   ├── dev.db                    # Base SQLite
│   └── migrations/               # Historique des migrations
├── public/                       # Fichiers statiques
├── .env                          # Variables d'environnement
├── next.config.ts                # Config Next.js
├── package.json                  # Dépendances
├── tsconfig.json                 # Config TypeScript
└── README.md                     # Ce fichier
\`\`\`

## 🛠️ Technologies utilisées

### Frontend
- **Next.js 15.5.4** - Framework React avec App Router
- **React 19.1.0** - Bibliothèque UI
- **TypeScript 5** - Typage statique
- **Tailwind CSS 4** - Framework CSS utility-first
- **Lucide React** - Icônes modernes

### Backend
- **Next.js API Routes** - Endpoints REST
- **Prisma 6.16.3** - ORM moderne
- **SQLite** - Base de données (facile pour dev)

### Authentification & Sécurité
- **bcryptjs** - Hashing de mots de passe
- **jsonwebtoken** - Tokens JWT
- **Validation** - Côté client et serveur

### Base de données (Prisma Schema)

\`\`\`prisma
- User (id, email, name, password, role, organization)
- Case (company, product, licenses, descriptions, status)
- Post (title, content, category, views, upvotes, downvotes)
- Comment (content, parentId pour nesting, upvotes, downvotes)
- PostVote (userId, postId, value)
- CommentVote (userId, commentId, value)
\`\`\`

## 📝 Commandes utiles

### Prisma

\`\`\`bash
# Générer le client Prisma
npx prisma generate

# Créer une migration
npx prisma migrate dev --name nom_de_la_migration

# Appliquer les migrations
npx prisma migrate deploy

# Réinitialiser la base de données
npx prisma migrate reset

# Ouvrir Prisma Studio
npx prisma studio

# Voir le statut des migrations
npx prisma migrate status

# Formater le schema.prisma
npx prisma format
\`\`\`

### Next.js

\`\`\`bash
# Dev avec Turbopack (plus rapide)
npm run dev

# Build pour production
npm run build

# Lancer en production
npm start

# Linter
npm run lint
\`\`\`

### Git

\`\`\`bash
# Configurer le pull strategy
git config pull.rebase false

# Pull
git pull origin main

# Push
git push origin main
\`\`\`

## 👥 Comptes par défaut

Après le seeding, vous pouvez vous connecter avec :

**Admin :**
- Email : \`admin@openbait.org\`
- Mot de passe : \`admin123\`

> ⚠️ **Important** : Changez ce mot de passe en production !

## 🔒 Sécurité

- ✅ Mots de passe hashés avec bcrypt (10 rounds)
- ✅ JWT tokens avec expiration (7 jours)
- ✅ Validation côté client et serveur
- ✅ Protection CORS
- ✅ Variables d'environnement sécurisées
- ✅ SQL injection protection (Prisma)

## 🐛 Troubleshooting

### La base de données ne se crée pas
\`\`\`bash
# Supprimez et recréez
rm prisma/dev.db
npx prisma migrate dev --name init
npm run seed
\`\`\`

### Erreur "Prisma Client not generated"
\`\`\`bash
npx prisma generate
\`\`\`

### Erreur JWT "Token invalide"
- Vérifiez que \`JWT_SECRET\` est défini dans \`.env\`
- Déconnectez-vous et reconnectez-vous
- Videz le localStorage du navigateur

### Les votes ne fonctionnent pas
- Assurez-vous d'être connecté
- Vérifiez que le token JWT est valide
- Regardez la console du navigateur pour les erreurs

### Port 3000 déjà utilisé
\`\`\`bash
# Utilisez un autre port
PORT=3001 npm run dev
\`\`\`

## �� Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le projet
2. Créez une branche (\`git checkout -b feature/AmazingFeature\`)
3. Committez vos changements (\`git commit -m 'Add some AmazingFeature'\`)
4. Pushez vers la branche (\`git push origin feature/AmazingFeature\`)
5. Ouvrez une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier \`LICENSE\` pour plus de détails.

## 📧 Contact

- **Email** : contact@openbait.org
- **GitHub** : [damiensabau/OpenBait](https://github.com/damiensabau/OpenBait)

## 🙏 Remerciements

- Communauté open source
- Tous les contributeurs
- Next.js, Prisma, et toutes les technologies utilisées

---

**🌟 Si ce projet vous plaît, n'hésitez pas à lui donner une étoile sur GitHub !**
