# 🛠️ Commandes Utiles - License Monitoring System

## 📦 Installation & Setup

```bash
# Installer les dépendances
cd my-app
npm install

# Copier l'exemple d'env
cp .env.example .env
# Puis éditez .env et ajoutez votre GITHUB_TOKEN et CRON_SECRET

# Migrer la base de données
npx prisma migrate dev

# Seed la base avec des données de test
npx tsx prisma/seed.ts

# Démarrer en dev
npm run dev
```

## 🔍 Monitoring - Commandes Locales

### Tester le scan manuellement

```bash
# Avec curl
curl http://localhost:3000/api/monitor/scan \
  -H "Authorization: Bearer YOUR_CRON_SECRET"

# Ou directement avec Node
node -e "
fetch('http://localhost:3000/api/monitor/scan', {
  headers: { 'Authorization': 'Bearer YOUR_CRON_SECRET' }
}).then(r => r.json()).then(console.log)
"
```

### Ajouter un repository

```bash
# Via API (remplacez USER_ID par votre ID utilisateur)
curl -X POST http://localhost:3000/api/monitor/repos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_USER_ID" \
  -d '{
    "owner": "facebook",
    "name": "react",
    "priority": "high",
    "notes": "Popular React library"
  }'
```

### Voir les repositories surveillés

```bash
curl http://localhost:3000/api/monitor/repos \
  -H "Authorization: Bearer YOUR_USER_ID"
```

### Voir les changements détectés

```bash
# Tous les changements en attente
curl http://localhost:3000/api/monitor/changes?status=detected \
  -H "Authorization: Bearer YOUR_USER_ID"

# Tous les changements (detected, reviewed, approved, rejected)
curl "http://localhost:3000/api/monitor/changes?status=all" \
  -H "Authorization: Bearer YOUR_USER_ID"
```

### Approuver/Rejeter un changement

```bash
# Approuver sans créer de cas
curl -X POST http://localhost:3000/api/monitor/changes \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_USER_ID" \
  -d '{
    "changeId": "CHANGE_ID",
    "action": "approve",
    "createCase": false
  }'

# Approuver ET créer un cas
curl -X POST http://localhost:3000/api/monitor/changes \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_USER_ID" \
  -d '{
    "changeId": "CHANGE_ID",
    "action": "approve",
    "createCase": true
  }'

# Rejeter
curl -X POST http://localhost:3000/api/monitor/changes \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_USER_ID" \
  -d '{
    "changeId": "CHANGE_ID",
    "action": "reject",
    "reason": "False positive"
  }'
```

## 🗄️ Base de données

### Prisma

```bash
# Voir le statut des migrations
npx prisma migrate status

# Créer une nouvelle migration
npx prisma migrate dev --name description_du_changement

# Réinitialiser la base (⚠️ efface toutes les données)
npx prisma migrate reset

# Générer le client Prisma
npx prisma generate

# Ouvrir Prisma Studio (GUI)
npx prisma studio
```

### Requêtes SQL directes

```bash
# SQLite CLI
sqlite3 prisma/dev.db

# Voir les repos surveillés
SELECT owner, name, currentLicense, priority FROM watched_repositories;

# Voir les changements récents
SELECT * FROM license_changes ORDER BY detectedAt DESC LIMIT 10;

# Voir les logs de monitoring
SELECT * FROM monitoring_logs ORDER BY executedAt DESC LIMIT 20;
```

## 🔬 Debug & Tests

### Tester la détection de licence

```bash
node -e "
const { GitHubLicenseMonitor } = require('./lib/license-monitor.ts');
const monitor = new GitHubLicenseMonitor(process.env.GITHUB_TOKEN);

monitor.monitorRepository('hashicorp', 'terraform', 'test-id')
  .then(changes => {
    console.log('Changements détectés:', changes.length);
    console.log(JSON.stringify(changes, null, 2));
  })
  .catch(console.error);
"
```

### Vérifier le rate limit GitHub

```bash
curl -H "Authorization: token $GITHUB_TOKEN" \
  https://api.github.com/rate_limit
```

### Logs de monitoring

```bash
# Via Prisma Studio
npx prisma studio
# Puis allez dans la table monitoring_logs

# Via SQL
sqlite3 prisma/dev.db "SELECT * FROM monitoring_logs ORDER BY executedAt DESC LIMIT 10;"
```

## 🚀 Déploiement

### Build production

```bash
npm run build
npm start
```

### Vérifier les erreurs TypeScript

```bash
npm run type-check
# ou
npx tsc --noEmit
```

### Vérifier les erreurs de linting

```bash
npm run lint
```

### Variables d'env pour Vercel

Dans Vercel Dashboard > Settings > Environment Variables :

```
GITHUB_TOKEN=ghp_your_token
CRON_SECRET=your_random_secret
DATABASE_URL=file:./prisma/dev.db
```

## 📊 Statistiques

### Nombre de repos surveillés

```bash
sqlite3 prisma/dev.db "SELECT COUNT(*) FROM watched_repositories WHERE isActive = 1;"
```

### Changements par sévérité

```bash
sqlite3 prisma/dev.db "
SELECT severity, COUNT(*) as count 
FROM license_changes 
GROUP BY severity 
ORDER BY count DESC;
"
```

### Repos les plus actifs

```bash
sqlite3 prisma/dev.db "
SELECT r.owner, r.name, COUNT(c.id) as changes
FROM watched_repositories r
LEFT JOIN license_changes c ON r.id = c.repoId
GROUP BY r.id
ORDER BY changes DESC
LIMIT 10;
"
```

## 🧪 Tests rapides

### Test 1 : Ajouter un repo connu

```bash
# React (MIT, très stable)
curl -X POST http://localhost:3000/api/monitor/repos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_USER_ID" \
  -d '{"owner": "facebook", "name": "react", "priority": "medium"}'
```

### Test 2 : Scanner un repo avec historique

```bash
# Terraform (a changé de MPL à BSL)
curl -X POST http://localhost:3000/api/monitor/repos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_USER_ID" \
  -d '{"owner": "hashicorp", "name": "terraform", "priority": "high"}'
```

### Test 3 : Lancer un scan complet

```bash
curl http://localhost:3000/api/monitor/scan \
  -H "Authorization: Bearer $CRON_SECRET" | jq
```

## 🛠️ Maintenance

### Nettoyer les anciens logs

```bash
sqlite3 prisma/dev.db "
DELETE FROM monitoring_logs 
WHERE executedAt < datetime('now', '-30 days');
"
```

### Désactiver un repo

```bash
sqlite3 prisma/dev.db "
UPDATE watched_repositories 
SET isActive = 0 
WHERE owner = 'owner_name' AND name = 'repo_name';
"
```

### Backup de la base

```bash
# Backup SQLite
cp prisma/dev.db prisma/dev.db.backup-$(date +%Y%m%d)

# Ou avec sqlite3
sqlite3 prisma/dev.db ".backup prisma/dev.db.backup"
```

## 📝 Logs & Debugging

### Voir les logs Next.js

```bash
# Dev
npm run dev

# Production
npm start 2>&1 | tee logs/app.log
```

### Logs Vercel

```bash
# Via CLI
vercel logs

# Via dashboard
https://vercel.com/your-project/deployments
```

## 🔐 Sécurité

### Générer un CRON_SECRET

```bash
# macOS/Linux
openssl rand -base64 32

# Ou avec Node
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### Vérifier les permissions du token GitHub

```bash
curl -H "Authorization: token $GITHUB_TOKEN" \
  https://api.github.com/user
```

## 📚 Documentation

- **Guide complet** : `MONITORING_SYSTEM.md`
- **Quick Start** : `QUICKSTART_MONITORING.md`
- **Résumé** : `LICENSE_MONITORING_SUMMARY.md`
- **Cette page** : `COMMANDS.md`

---

**Raccourci pour démarrer rapidement** :

```bash
cd my-app
npm install
cp .env.example .env
# Éditez .env et ajoutez GITHUB_TOKEN
npx prisma migrate dev
npx tsx prisma/seed.ts
npm run dev
# Ouvrez http://localhost:3000/admin/monitoring
```
