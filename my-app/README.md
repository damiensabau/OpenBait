# 🚀 OpenBait.org - Documentation du Projet

OpenBait.org est une plateforme communautaire non-lucrative qui documente les changements de modèles économiques dans l'écosystème logiciel (open source → propriétaire, gratuit → payant, etc.).

## 📋 Table des matières

- [Démarrage Rapide](#-démarrage-rapide)
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Configuration de la base de données](#configuration-de-la-base-de-données)
- [Démarrage du projet](#démarrage-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Technologies utilisées](#technologies-utilisées)
- [Contribution](#contribution)

## ⚡ Démarrage Rapide

Pour les impatients, voici les commandes essentielles pour démarrer le projet :

\`\`\`bash
# 1. Cloner et installer
git clone https://github.com/damiensabau/OpenBait.git
cd OpenBait/my-app
npm install

# 2. Terminal 1 : Démarrer la base de données Prisma
npx prisma dev
# ⚠️ Laissez ce terminal ouvert !

# 3. Terminal 2 : Configurer le JWT_SECRET dans .env
echo 'JWT_SECRET="'$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")'"' >> .env

# 4. Terminal 2 : Créer les tables et données
npx prisma db push
npm run seed

# 5. Terminal 2 : Lancer l'application
npm run dev
# 🚀 Ouvrez http://localhost:3000
\`\`\`

**Connexion admin :**
- Email : `admin@openbait.org`
- Mot de passe : `admin123`

---

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

Ce projet utilise **Prisma Postgres** pour le développement local, une base de données PostgreSQL gérée automatiquement par Prisma.

### 1. Démarrer le serveur Prisma Postgres

**Dans un premier terminal**, lancez le serveur de développement Prisma :

\`\`\`bash
npx prisma dev
\`\`\`

Cette commande :
- Démarre un serveur PostgreSQL local sur les ports 51213-51215
- Génère automatiquement l'URL de connexion
- Crée le fichier \`.env\` avec la variable \`DATABASE_URL\`

> **Important** : Laissez ce terminal ouvert pendant le développement. Le serveur Prisma doit rester actif.

### 2. Configurer les variables d'environnement

Le fichier \`.env\` est créé automatiquement avec la \`DATABASE_URL\`. Ajoutez simplement le \`JWT_SECRET\` :

\`\`\`env
# Database URL (générée automatiquement par Prisma)
DATABASE_URL="prisma+postgres://localhost:51213/?api_key=..."

# JWT Secret (à ajouter manuellement)
JWT_SECRET="votre_secret_jwt_super_securise_ici"
\`\`\`

> **Note :** Pour générer un JWT_SECRET sécurisé :
> \`\`\`bash
> node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
> \`\`\`

### 3. Créer les tables dans la base de données

**Dans un second terminal**, créez les tables à partir du schéma :

\`\`\`bash
npx prisma db push
\`\`\`

Cette commande :
- Crée toutes les tables définies dans \`schema.prisma\`
- Génère le client Prisma TypeScript
- Synchronise la base de données avec le schéma

### 4. Peupler la base de données (seeding)

Ajoutez les données d'exemple :

\`\`\`bash
npm run seed
\`\`\`

Cette commande ajoute :
- **1 utilisateur admin** (\`admin@openbait.org\` / \`admin123\`)
- **2 utilisateurs de test** (john.doe@example.com et jane.smith@example.com)
- **9 cas documentés** célèbres (HashiCorp Terraform, Docker Desktop, Elastic, Redis, MongoDB, etc.)
- **12 notifications** d'exemple

### 5. (Optionnel) Ouvrir Prisma Studio

Pour visualiser et éditer vos données dans une interface graphique :

\`\`\`bash
npx prisma studio
\`\`\`

Ouvrez http://localhost:5555 dans votre navigateur.

---

### ⚠️ Notes importantes

- **Terminal 1** : Gardez \`npx prisma dev\` en cours d'exécution
- **Terminal 2** : Utilisez-le pour lancer l'application (\`npm run dev\`)
- Pour arrêter le serveur Prisma : Appuyez sur \`Ctrl+C\` dans le terminal 1

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
│   └── seed.ts                   # Script de seeding
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
- **PostgreSQL** - Base de données (via Prisma Postgres pour le dev local)

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

Après le seeding, vous pouvez vous connecter avec l'un de ces comptes :

### 🔑 Compte Admin
- **Email** : \`admin@openbait.org\`
- **Mot de passe** : \`admin123\`
- **Rôle** : ADMIN
- **Permissions** : Accès complet au panneau admin, gestion des cas, modération

### 👤 Comptes Utilisateurs

**John Doe (Membre) :**
- **Email** : \`john.doe@example.com\`
- **Mot de passe** : \`password123\`
- **Rôle** : MEMBER
- **Réputation** : 150 points

**Jane Smith (Modératrice) :**
- **Email** : \`jane.smith@example.com\`
- **Mot de passe** : \`password123\`
- **Rôle** : MODERATOR
- **Réputation** : 320 points

> ⚠️ **Important** : Changez ces mots de passe en production !

## 🔒 Sécurité

- ✅ Mots de passe hashés avec bcrypt (10 rounds)
- ✅ JWT tokens avec expiration (7 jours)
- ✅ Validation côté client et serveur
- ✅ Protection CORS
- ✅ Variables d'environnement sécurisées
- ✅ SQL injection protection (Prisma)

## 🐛 Troubleshooting

### Le serveur Prisma ne démarre pas
\`\`\`bash
# Vérifiez si le port est déjà utilisé
lsof -i :51213

# Essayez de redémarrer Prisma
npx prisma dev
\`\`\`

### Erreur "Can't reach database server"
- Assurez-vous que \`npx prisma dev\` est en cours d'exécution dans un terminal séparé
- Vérifiez que le fichier \`.env\` contient la bonne \`DATABASE_URL\`
- Redémarrez le serveur Prisma si nécessaire

### Erreur "Table does not exist"
\`\`\`bash
# Recréez les tables
npx prisma db push

# Puis relancez le seed
npm run seed
\`\`\`

### Erreur "Prisma Client not generated"
\`\`\`bash
npx prisma generate
\`\`\`

### Erreur lors du seed (dotenv)
Si vous voyez "Environment variable not found: DATABASE_URL" lors du seed :
- Vérifiez que \`dotenv\` est installé : \`npm install dotenv\`
- Le fichier \`prisma/seed.ts\` doit commencer par \`import 'dotenv/config';\`

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
