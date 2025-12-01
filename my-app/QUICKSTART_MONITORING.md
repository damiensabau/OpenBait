# 🚀 Quick Start - License Monitoring System

## Installation

### 1. Configurer les variables d'environnement

Créez un fichier `.env` basé sur `.env.example` :

```bash
cp .env.example .env
```

Modifiez le fichier `.env` et ajoutez :

```bash
# GitHub Token (obligatoire)
GITHUB_TOKEN="ghp_votre_token_github"

# Cron Secret (obligatoire pour production)
CRON_SECRET="votre_secret_aleatoire"
```

### 2. Créer un GitHub Token

1. Allez sur https://github.com/settings/tokens
2. Cliquez sur "Generate new token" > "Generate new token (classic)"
3. Donnez un nom : "OpenBait License Monitor"
4. Cochez uniquement : **`repo` (read access)**
5. Cliquez sur "Generate token"
6. Copiez le token (il commence par `ghp_`)
7. Ajoutez-le dans votre `.env`

### 3. Base de données

La migration a déjà été effectuée. Si vous avez besoin de recréer la base :

```bash
npx prisma migrate reset
```

## Utilisation

### Démarrer le serveur

```bash
npm run dev
```

Le serveur démarre sur http://localhost:3000

### Accéder au dashboard

1. Connectez-vous avec :
   - Email: `admin@openbait.org`
   - Mot de passe: `admin123`

2. Allez sur le dashboard admin : http://localhost:3000/admin

3. Cliquez sur "🔍 License Monitor"

### Tester le système

#### Lancer un scan manuel

Dans le dashboard monitoring, cliquez sur **"🔄 Lancer un Scan"**.

Le système va :
- Scanner les 6 repositories pré-configurés
- Détecter les changements de licence
- Créer des alertes si nécessaire

#### Ajouter un repository à surveiller

1. Cliquez sur **"➕ Ajouter un Repository"**
2. Remplissez le formulaire :
   - Owner : `facebook`
   - Name : `react`
   - Priorité : `high`
3. Validez

Le système va immédiatement scanner le repo et afficher les résultats.

#### Tester via API

```bash
# Ajouter un repo
curl -X POST http://localhost:3000/api/monitor/repos \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_USER_ID" \
  -d '{
    "owner": "microsoft",
    "name": "vscode",
    "priority": "high"
  }'

# Lancer un scan
curl http://localhost:3000/api/monitor/scan \
  -H "Authorization: Bearer YOUR_CRON_SECRET"

# Voir les changements détectés
curl http://localhost:3000/api/monitor/changes?status=detected \
  -H "Authorization: Bearer YOUR_USER_ID"
```

## Repositories pré-configurés

Le seed a ajouté ces repositories :

| Repository | License Actuelle | Priorité | Historique |
|------------|------------------|----------|------------|
| hashicorp/terraform | BSL-1.1 | High | MPL → BSL |
| elastic/elasticsearch | SSPL | High | Apache → SSPL |
| redis/redis | RSALv2/SSPL | High | BSD → Dual |
| mongodb/mongo | SSPL | High | AGPL → SSPL |
| grafana/grafana | AGPL-3.0 | Medium | - |
| cockroachdb/cockroach | BSL | Medium | - |

## Cron Job (Production)

### Vercel

Le fichier `vercel.json` configure un cron job automatique :

```json
{
  "crons": [
    {
      "path": "/api/monitor/scan",
      "schedule": "0 */6 * * *"
    }
  ]
}
```

**Exécution : toutes les 6 heures** (minuit, 6h, midi, 18h UTC)

### GitHub Actions (Alternative)

Créez `.github/workflows/license-scan.yml` :

```yaml
name: License Scan
on:
  schedule:
    - cron: '0 */6 * * *'
  workflow_dispatch:

jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - name: Trigger scan
        run: |
          curl -X GET "${{ secrets.APP_URL }}/api/monitor/scan" \
            -H "Authorization: Bearer ${{ secrets.CRON_SECRET }}"
```

## Workflow complet

### 1. Détection automatique

Le cron job s'exécute toutes les 6 heures et :
- Scanne tous les repos actifs
- Détecte les changements de licence
- Calcule la sévérité (CRITICAL, WARNING, STABLE)
- Notifie les modérateurs

### 2. Review manuelle

Les modérateurs reçoivent une notification et peuvent :
- **Approuver** : Valider le changement
- **Créer un Cas** : Publier sur OpenBait
- **Rejeter** : Marquer comme faux positif

### 3. Création de cas automatique

Les changements **CRITICAL** avec confiance ≥ 80% créent automatiquement un cas en statut PENDING.

### 4. Publication

Les modérateurs peuvent ensuite :
- Enrichir le cas avec plus d'informations
- Ajouter des alternatives
- Approuver pour publication publique

## Dépannage

### Erreur "GitHub API rate limit"

- Vérifiez que `GITHUB_TOKEN` est bien configuré
- Le rate limit est de 5000 requêtes/heure avec token
- Sans token : seulement 60 requêtes/heure

### Erreur "Unauthorized" sur le cron

- Vérifiez que `CRON_SECRET` est configuré
- Vérifiez l'en-tête `Authorization: Bearer YOUR_SECRET`

### Aucun changement détecté

- Normal si les repos n'ont pas eu de changement récent
- Testez avec un repo connu pour avoir changé récemment
- Vérifiez les logs dans `monitoring_logs`

### Problèmes de base de données

```bash
# Recréer la base
npx prisma migrate reset

# Vérifier le statut
npx prisma migrate status

# Regénérer le client
npx prisma generate
```

## Ressources

- **Documentation complète** : `MONITORING_SYSTEM.md`
- **API Endpoints** : `app/api/monitor/`
- **Services** : `lib/license-monitor.ts`, `lib/license-alert.ts`
- **Dashboard** : `app/admin/monitoring/page.tsx`

## Support

Pour toute question ou problème :
- Ouvrez une issue sur GitHub
- Consultez `MONITORING_SYSTEM.md` pour plus de détails
- Vérifiez les logs dans la console et la table `monitoring_logs`

---

**Félicitations ! 🎉** Votre système de monitoring est prêt à détecter automatiquement les changements de licence !
