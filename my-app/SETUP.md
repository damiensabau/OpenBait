# 📖 Guide d'Installation Complet - OpenBait.org

Ce guide vous accompagne étape par étape pour installer et configurer OpenBait.org sur votre machine locale.

---

## 📑 Table des matières

1. [Prérequis](#1-prérequis)
2. [Installation du projet](#2-installation-du-projet)
3. [Configuration de la base de données](#3-configuration-de-la-base-de-données)
4. [Lancement de l'application](#4-lancement-de-lapplication)
5. [Vérification de l'installation](#5-vérification-de-linstallation)
6. [Résolution de problèmes](#6-résolution-de-problèmes)

---

## 1. Prérequis

### Vérifier Node.js

Ouvrez un terminal et exécutez :

```bash
node --version
```

✅ Vous devriez voir une version **18.x ou supérieure** (ex: `v20.11.0`)

❌ Si Node.js n'est pas installé, téléchargez-le depuis [nodejs.org](https://nodejs.org)

### Vérifier npm

```bash
npm --version
```

✅ Vous devriez voir une version de npm (ex: `10.2.4`)

### Vérifier Git

```bash
git --version
```

✅ Vous devriez voir une version de Git (ex: `git version 2.40.0`)

---

## 2. Installation du projet

### Étape 2.1 : Cloner le repository

```bash
git clone https://github.com/damiensabau/OpenBait.git
```

**Résultat attendu :**
```
Cloning into 'OpenBait'...
remote: Enumerating objects: 1234, done.
remote: Counting objects: 100% (1234/1234), done.
...
Resolving deltas: 100% (789/789), done.
```

### Étape 2.2 : Naviguer dans le dossier du projet

```bash
cd OpenBait/my-app
```

### Étape 2.3 : Installer les dépendances

```bash
npm install
```

**Résultat attendu :**
```
added 245 packages, and audited 246 packages in 15s

85 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

⏱️ Cette étape peut prendre 1-2 minutes selon votre connexion internet.

---

## 3. Configuration de la base de données

### 📌 Important : Deux terminaux requis

Pour le développement local, vous aurez besoin de **2 terminaux** :
- **Terminal 1** : Pour le serveur de base de données Prisma (doit rester ouvert)
- **Terminal 2** : Pour l'application Next.js et les commandes

### Étape 3.1 : Démarrer le serveur Prisma Postgres

**Dans le Terminal 1**, exécutez :

```bash
npx prisma dev
```

**Résultat attendu :**
```
Fetching latest updates for this subcommand...
🔌 To connect to your local Prisma Postgres database via HTTP + Prisma ORM
   use the following connection string:

# 📄 .env:

DATABASE_URL="prisma+postgres://localhost:51213/?api_key=..."

✨ The api_key above does not contain any sensitive information.
...
✔  Great Success! 😉👍

   Your _prisma dev_ server default is ready and listening on ports 51213-51215.
```

✅ **Parfait !** Le serveur est prêt. **Laissez ce terminal ouvert.**

### Étape 3.2 : Configurer le JWT Secret

**Ouvrez un second terminal** (Terminal 2) et naviguez dans le même dossier :

```bash
cd OpenBait/my-app
```

**Générez et ajoutez le JWT_SECRET au fichier .env :**

```bash
echo 'JWT_SECRET="'$(node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")'"' >> .env
```

**Vérifiez que le fichier .env contient bien les deux variables :**

```bash
cat .env
```

**Résultat attendu :**
```
DATABASE_URL="prisma+postgres://localhost:51213/?api_key=..."
JWT_SECRET="b7e81990439e97e4ceb5e338f8bfcfec4d1436870b93703e82cd3b3e1856cc1c"
```

### Étape 3.3 : Créer les tables dans la base de données

**Dans le Terminal 2**, exécutez :

```bash
npx prisma db push
```

**Résultat attendu :**
```
Prisma schema loaded from prisma/schema.prisma
Datasource "db": PostgreSQL database "postgres", schema "public" at "localhost:51213"

🚀  Your database is now in sync with your Prisma schema. Done in 43ms

Running generate...
✔ Generated Prisma Client (v6.16.3) to ./lib/generated/prisma in 24ms
```

✅ **Excellent !** Les tables ont été créées (User, Case, Post, Comment, etc.)

### Étape 3.4 : Peupler la base de données

**Dans le Terminal 2**, exécutez :

```bash
npm run seed
```

**Résultat attendu :**
```
🌱 Début du seed de la base de données...

✅ Admin créé: admin@openbait.org
✅ Cas ajouté: HashiCorp - Terraform
✅ Cas ajouté: Docker - Docker Desktop
✅ Cas ajouté: Elastic - Elasticsearch & Kibana
✅ Cas ajouté: Redis - Redis
✅ Cas ajouté: MongoDB - MongoDB
✅ Cas ajouté: Sentry - Sentry
✅ Cas ajouté: CockroachDB - CockroachDB
✅ Cas ajouté: Confluent - Kafka (composants)
✅ Cas ajouté: Grafana Labs - Grafana
✅ Utilisateurs supplémentaires créés
✅ 12 notifications d'exemple créées

🎉 Seed terminé! 9 cas ajoutés.

📝 Identifiants admin:
   Email: admin@openbait.org
   Mot de passe: admin123

📝 Autres utilisateurs:
   Email: john.doe@example.com
   Mot de passe: password123

   Email: jane.smith@example.com
   Mot de passe: password123
```

✅ **Parfait !** La base de données contient maintenant :
- 3 utilisateurs (1 admin, 1 membre, 1 modératrice)
- 9 cas documentés
- 12 notifications d'exemple

---

## 4. Lancement de l'application

### Étape 4.1 : Démarrer le serveur de développement

**Dans le Terminal 2**, exécutez :

```bash
npm run dev
```

**Résultat attendu :**
```
  ▲ Next.js 15.5.4
  - Local:        http://localhost:3000
  - Environments: .env

 ✓ Starting...
 ✓ Ready in 2.3s
```

### Étape 4.2 : Ouvrir l'application

Ouvrez votre navigateur et accédez à :

👉 **[http://localhost:3000](http://localhost:3000)**

Vous devriez voir la page d'accueil d'OpenBait.org ! 🎉

---

## 5. Vérification de l'installation

### ✅ Checklist de vérification

Vérifiez que tout fonctionne correctement :

#### 1. Page d'accueil accessible
- [ ] La page http://localhost:3000 s'affiche correctement
- [ ] Le logo et la navigation sont visibles
- [ ] Les boutons "Connexion" et "Inscription" sont présents

#### 2. Connexion admin
- [ ] Cliquez sur "Connexion"
- [ ] Entrez `admin@openbait.org` / `admin123`
- [ ] Vous êtes redirigé vers le dashboard
- [ ] Un lien "Admin" apparaît dans la navigation

#### 3. Base de données
- [ ] Cliquez sur "Base de données" dans le menu
- [ ] 9 cas sont affichés (HashiCorp, Docker, Redis, etc.)
- [ ] Vous pouvez cliquer sur un cas pour voir les détails

#### 4. Panneau Admin
- [ ] Cliquez sur "Admin" dans la navigation
- [ ] Vous voyez les statistiques (9 approved, 0 pending, etc.)
- [ ] La liste des cas s'affiche

#### 5. Forum
- [ ] Cliquez sur "Forum" dans le menu
- [ ] La page du forum s'affiche
- [ ] Vous pouvez créer un nouveau post

### 🎯 Test complet

Testez de créer un nouveau post :

1. Allez dans le **Forum**
2. Cliquez sur **"Nouveau post"**
3. Remplissez le formulaire :
   - Titre : "Test de mon installation"
   - Contenu : "Mon installation fonctionne parfaitement !"
   - Catégorie : "Discussion générale"
4. Cliquez sur **"Publier"**
5. ✅ Votre post apparaît dans la liste !

---

## 6. Résolution de problèmes

### ❌ Problème : "Can't reach database server"

**Symptôme :** Erreur lors du seed ou du lancement de l'application

**Cause :** Le serveur Prisma n'est pas démarré

**Solution :**
```bash
# Terminal 1
npx prisma dev
# Laissez ce terminal ouvert !
```

---

### ❌ Problème : "Table does not exist"

**Symptôme :** Erreur lors du seed

**Cause :** Les tables n'ont pas été créées

**Solution :**
```bash
# Terminal 2
npx prisma db push
npm run seed
```

---

### ❌ Problème : "Port 3000 already in use"

**Symptôme :** Le port 3000 est déjà utilisé

**Solution :**

**Option 1 - Utiliser un autre port :**
```bash
PORT=3001 npm run dev
# Puis ouvrez http://localhost:3001
```

**Option 2 - Libérer le port 3000 :**
```bash
# macOS/Linux
lsof -ti:3000 | xargs kill -9

# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

---

### ❌ Problème : "Environment variable not found: DATABASE_URL"

**Symptôme :** Erreur lors du seed

**Cause :** Le fichier .env n'est pas chargé

**Solution :**

1. Vérifiez que le fichier `.env` existe et contient `DATABASE_URL` :
   ```bash
   cat .env
   ```

2. Vérifiez que `prisma/seed.ts` commence par :
   ```typescript
   import 'dotenv/config';
   ```

3. Installez dotenv si nécessaire :
   ```bash
   npm install dotenv
   ```

---

### ❌ Problème : "Prisma Client not generated"

**Symptôme :** Erreur TypeScript lors du démarrage

**Cause :** Le client Prisma n'a pas été généré

**Solution :**
```bash
npx prisma generate
```

---

### 🆘 Réinitialisation complète

Si rien ne fonctionne, réinitialisez tout depuis le début :

```bash
# 1. Arrêtez tous les terminaux (Ctrl+C)

# 2. Supprimez les fichiers temporaires
rm -rf node_modules
rm -rf .next
rm .env

# 3. Réinstallez tout
npm install

# 4. Recommencez depuis l'étape 3.1
```

---

## 🎉 Félicitations !

Vous avez installé avec succès **OpenBait.org** !

### 📚 Prochaines étapes

- Explorez le **panneau admin** pour gérer les cas
- Créez des **posts dans le forum**
- Consultez la **base de données** des cas documentés
- Testez le **système de votes** et de commentaires
- Expérimentez avec les **3 comptes utilisateurs** (admin, membre, modératrice)

### 🔗 Liens utiles

- **README principal** : `README.md`
- **Documentation Prisma** : https://www.prisma.io/docs
- **Documentation Next.js** : https://nextjs.org/docs
- **GitHub du projet** : https://github.com/damiensabau/OpenBait

### 💡 Besoin d'aide ?

Si vous rencontrez des problèmes non couverts par ce guide :

1. Vérifiez la section **Troubleshooting** du README
2. Consultez les issues sur GitHub
3. Contactez l'équipe : contact@openbait.org

---

**Bon développement ! 🚀**
