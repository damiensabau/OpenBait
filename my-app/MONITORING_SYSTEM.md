# 🔍 License Monitoring System

Système de surveillance automatique des changements de licence sur GitHub.

## 📋 Vue d'ensemble

Ce système détecte automatiquement les changements de licence dans les repositories GitHub surveillés et crée des alertes pour les modérateurs.

## 🏗️ Architecture

### Base de données

- **WatchedRepository** : Liste des repositories à surveiller
- **LicenseChange** : Historique des changements détectés
- **MonitoringLog** : Logs d'exécution des scans

### Services

- **GitHubLicenseMonitor** (`lib/license-monitor.ts`) : Scanne GitHub pour détecter les changements
- **LicenseAlertSystem** (`lib/license-alert.ts`) : Gère les alertes et la création de cas

### API Endpoints

- `GET /api/monitor/scan` : Lance un scan de tous les repos (appelé par cron)
- `POST /api/monitor/repos` : Ajoute un repository à surveiller
- `GET /api/monitor/repos` : Liste les repositories surveillés
- `GET /api/monitor/changes` : Liste les changements détectés
- `POST /api/monitor/changes` : Approuve/rejette un changement

### Dashboard

- `/admin/monitoring` : Interface de gestion du monitoring

## 🚀 Setup

### 1. Variables d'environnement

Ajoutez dans votre `.env` :

```bash
# GitHub Personal Access Token
# Créez-en un sur https://github.com/settings/tokens
# Permissions nécessaires : repo (read)
GITHUB_TOKEN=ghp_your_token_here

# Secret pour sécuriser le cron job
# Générez un avec: openssl rand -base64 32
CRON_SECRET=your_random_secret_here
```

### 2. Migration de la base de données

```bash
cd my-app
npx prisma migrate dev
```

### 3. Déploiement sur Vercel

Le fichier `vercel.json` configure un cron job qui s'exécute toutes les 6 heures.

Pour tester en local :
```bash
curl http://localhost:3000/api/monitor/scan \
  -H "Authorization: Bearer your_cron_secret"
```

## 📖 Utilisation

### Ajouter un repository à surveiller

1. Allez sur `/admin/monitoring`
2. Cliquez sur "➕ Ajouter un Repository"
3. Entrez le owner et le name (ex: `facebook/react`)
4. Choisissez la priorité
5. Validez

Le système va :
- Récupérer les infos actuelles du repo
- Lancer un scan initial
- Ajouter le repo à la liste de surveillance

### Lancer un scan manuel

Cliquez sur "🔄 Lancer un Scan" dans le dashboard.

### Review des changements détectés

1. Allez dans l'onglet "🚨 Changements Détectés"
2. Pour chaque changement :
   - **✓ Approuver** : Marque le changement comme validé
   - **✓ Créer un Cas** : Crée automatiquement un cas dans la base
   - **✗ Rejeter** : Marque comme faux positif

## 🎯 Détection automatique

### Fichiers surveillés

- `LICENSE`, `LICENSE.md`, `LICENSE.txt`, `COPYING`
- `package.json` (champ `license`)
- `Cargo.toml` (champ `license`)

### Licences reconnues

- **Permissives** : MIT, Apache-2.0, BSD-3-Clause, BSD-2-Clause, ISC, Unlicense
- **Restrictives** : SSPL, BSL, AGPL-3.0, GPL-3.0, Proprietary

### Niveaux de sévérité

- **CRITICAL** : Changement permissif → restrictif (ex: MIT → SSPL)
- **WARNING** : Modification de licence
- **STABLE** : Pas de changement majeur

## 🔄 Cron Job

Le scan automatique s'exécute toutes les 6 heures :
- `0 */6 * * *` (minuit, 6h, midi, 18h UTC)

Pour modifier la fréquence, éditez `vercel.json` :

```json
{
  "crons": [
    {
      "path": "/api/monitor/scan",
      "schedule": "0 */12 * * *"  // Toutes les 12 heures
    }
  ]
}
```

Syntaxe cron : `minute hour day month dayOfWeek`

## 🤖 Création automatique de cas

Les changements avec ces critères créent automatiquement un cas :
- Sévérité = CRITICAL
- Confiance ≥ 80%

Le cas est créé avec :
- Status = PENDING
- Description auto-générée
- Analyse légale préliminaire
- Lien vers le commit

## 🔒 Sécurité

- Le cron endpoint vérifie le `CRON_SECRET`
- Les endpoints de gestion nécessitent le rôle ADMIN ou MODERATOR
- Le token GitHub doit avoir uniquement les permissions de lecture

## 📊 Exemples de repositories à surveiller

### High Priority (projets populaires)
- `hashicorp/terraform`
- `elastic/elasticsearch`
- `redis/redis`
- `mongodb/mongo`
- `docker/docker-ce`

### Medium Priority
- `grafana/grafana`
- `cockroachdb/cockroach`
- `questdb/questdb`

### Commandes utiles

```bash
# Ajouter plusieurs repos rapidement
curl -X POST http://localhost:3000/api/monitor/repos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_USER_ID" \
  -d '{"owner": "hashicorp", "name": "terraform", "priority": "high"}'

# Lister tous les repos
curl http://localhost:3000/api/monitor/repos \
  -H "Authorization: Bearer YOUR_USER_ID"

# Voir les changements détectés
curl http://localhost:3000/api/monitor/changes?status=detected \
  -H "Authorization: Bearer YOUR_USER_ID"
```

## 🐛 Debugging

### Logs

Les logs sont disponibles dans :
- Console du serveur (`npm run dev`)
- Table `monitoring_logs` dans la base de données
- Vercel Logs (en production)

### Tester la détection

```bash
# Scanner un repo spécifique
node -e "
const { GitHubLicenseMonitor } = require('./lib/license-monitor');
const monitor = new GitHubLicenseMonitor(process.env.GITHUB_TOKEN);
monitor.monitorRepository('hashicorp', 'terraform', 'test-id')
  .then(changes => console.log(changes));
"
```

## 🔮 Améliorations futures

- [ ] Détection via webhooks GitHub
- [ ] Support GitLab, Bitbucket
- [ ] Scraping de Hacker News / Reddit
- [ ] Machine Learning pour meilleure détection
- [ ] Notifications Discord/Slack
- [ ] API publique de consultation

## 📝 License

Ce système de monitoring est partie intégrante d'OpenBait (MIT License).
