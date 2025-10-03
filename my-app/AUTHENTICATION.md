# 🛡️ OpenBait.org - Authentication System Setup

## Configuration de la base de données PostgreSQL

### Étape 1 : Installation de PostgreSQL

#### macOS
```bash
brew install postgresql@15
brew services start postgresql@15
```

#### Linux (Ubuntu/Debian)
```bash
sudo apt update
sudo apt install postgresql postgresql-contrib
sudo systemctl start postgresql
```

#### Windows
Téléchargez et installez PostgreSQL depuis : https://www.postgresql.org/download/windows/

### Étape 2 : Création de la base de données

```bash
# Se connecter à PostgreSQL
psql postgres

# Créer un utilisateur
CREATE USER openbait WITH PASSWORD 'votre_mot_de_passe_securise';

# Créer la base de données
CREATE DATABASE openbait;

# Donner les privilèges
GRANT ALL PRIVILEGES ON DATABASE openbait TO openbait;

# Quitter psql
\q
```

### Étape 3 : Configuration de l'environnement

Modifiez le fichier `.env` avec vos informations :

```env
DATABASE_URL="postgresql://openbait:votre_mot_de_passe_securise@localhost:5432/openbait?schema=public"
JWT_SECRET="generez-une-cle-secrete-aleatoire-ici"
```

**⚠️ IMPORTANT** : En production, utilisez des secrets forts et sécurisés !

### Étape 4 : Migrer la base de données

```bash
# Générer le client Prisma
npx prisma generate

# Créer les tables dans la base de données
npx prisma migrate dev --name init

# (Optionnel) Visualiser la base de données
npx prisma studio
```

## 🚀 Démarrer l'application

```bash
npm run dev
```

L'application sera accessible sur : http://localhost:3000

## 📋 Rôles utilisateurs

### MEMBER (par défaut)
- Peut signaler des nouveaux cas
- Les cas sont en statut PENDING jusqu'à approbation
- Accès au dashboard personnel

### MODERATOR
- Tous les droits des MEMBER
- Peut approuver/rejeter les cas signalés
- Accès au panneau d'administration

### ADMIN
- Tous les droits des MODERATOR
- Peut supprimer des cas
- Peut gérer les utilisateurs

## 🔐 Création du premier administrateur

Après la migration, créez un premier compte via `/auth/register`, puis modifiez manuellement le rôle dans la base de données :

### Option 1 : Via Prisma Studio (recommandé)
```bash
# Ouvrir Prisma Studio (interface web sur http://localhost:5555)
npx prisma studio
```
1. Cliquez sur le modèle **"User"**
2. Trouvez votre utilisateur par email
3. Changez `MEMBER` → `ADMIN` dans le champ "role"
4. Cliquez sur "Save 1 change"
5. **Important** : Déconnectez-vous et reconnectez-vous sur le site pour que le changement prenne effet

### Option 2 : Via SQLite CLI
```bash
# Ouvrir la base de données
sqlite3 prisma/dev.db

# Modifier le rôle
UPDATE User SET role = 'ADMIN' WHERE email = 'votre@email.com';

# Vérifier
SELECT email, role FROM User;

# Quitter
.quit
```

**⚠️ Important** : Après avoir changé le rôle, vous DEVEZ vous déconnecter et vous reconnecter pour que le nouveau rôle soit pris en compte (le rôle est stocké dans le localStorage du navigateur).

## 🛠️ Structure du système d'authentification

### Pages publiques
- `/` - Page d'accueil
- `/database` - Base de données (cas APPROVED uniquement)
- `/about`, `/team`, `/partners`, `/support` - Pages informatives
- `/auth/login` - Connexion
- `/auth/register` - Inscription

### Pages protégées
- `/dashboard` - Tableau de bord personnel (MEMBER+)
- `/admin` - Panneau d'administration (MODERATOR+)
- `/report` - Signaler un cas (authentifié)

### API Routes
- `POST /api/auth/register` - Inscription
- `POST /api/auth/login` - Connexion
- `GET /api/auth/verify` - Vérifier le token
- `GET /api/admin/cases` - Récupérer tous les cas (MODERATOR+)
- `POST /api/admin/cases` - Créer un cas (authentifié)
- `PATCH /api/admin/cases/[id]` - Modifier le statut (MODERATOR+)
- `DELETE /api/admin/cases/[id]` - Supprimer un cas (ADMIN uniquement)

## 📊 Schéma de base de données

### User
- id (String, CUID)
- email (String, unique)
- name (String)
- password (String, hashed)
- role (Enum: MEMBER, MODERATOR, ADMIN)
- organization (String, optional)
- cases (Relation vers Case[])
- createdAt, updatedAt

### Case
- id (String, CUID)
- companyName, productName, category
- licenseInitial, licenseFinal
- changeDate, website
- description, legalAnalysis, communityReaction
- sources (String[])
- status (Enum: PENDING, APPROVED, REJECTED)
- reporter (Relation vers User)
- reporterId (String)
- createdAt, updatedAt

## 🔄 Workflow d'approbation

1. Un utilisateur MEMBER signale un cas via `/report`
2. Le cas est créé avec status = PENDING
3. Un MODERATOR/ADMIN accède à `/admin`
4. Il peut approuver (APPROVED) ou rejeter (REJECTED) le cas
5. Seuls les cas APPROVED apparaissent sur `/database`

## 🧪 Tests

Pour tester le système :

1. Créez un compte : `/auth/register`
2. Connectez-vous : `/auth/login`
3. Signalez un cas : `/report`
4. Passez votre compte en ADMIN (via Prisma Studio)
5. Approuvez le cas : `/admin`
6. Vérifiez qu'il apparaît : `/database`

## 📝 Notes importantes

- Les mots de passe sont hashés avec bcrypt (10 rounds)
- Les tokens JWT expirent après 7 jours
- Les tokens sont stockés dans localStorage côté client
- En production, utilisez HTTPS et des secrets forts
- Configurez les CORS selon vos besoins

## 🆘 Dépannage

### Erreur de connexion à la base de données
```bash
# Vérifier que PostgreSQL est en cours d'exécution
pg_isready

# Vérifier la connexion
psql -U openbait -d openbait
```

### Réinitialiser la base de données
```bash
npx prisma migrate reset
```

### Problèmes de migration
```bash
# Supprimer le dossier migrations et recommencer
rm -rf prisma/migrations
npx prisma migrate dev --name init
```
