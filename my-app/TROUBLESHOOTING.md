# 🔧 Troubleshooting - License Monitoring System

## Problèmes Courants

### ❌ "Changements détectés" vide alors que des changements existent

**Symptômes** :
- Le scan détecte des changements
- Les notifications sont envoyées
- Mais l'onglet "Changements Détectés" est vide

**Cause** : Problème d'authentification JWT dans le dashboard

**Solution** :
1. Déconnectez-vous et reconnectez-vous
2. Rechargez la page (F5)
3. Vérifiez que le token est bien stocké : `localStorage.getItem('token')`

**Vérification** :
```bash
# Vérifier qu'il y a des changements dans la DB
sqlite3 prisma/dev.db "SELECT COUNT(*) FROM license_changes WHERE status='detected';"
```

---

### ❌ "Change already recorded" lors du scan

**Symptômes** :
```
Change already recorded: 8db3eb90ae8c20e1a2bbbad300e0683def9bf8fb
```

**Cause** : Le changement a déjà été enregistré dans la base

**Solutions** :

**Option 1 : Réinitialiser complètement la base**
```bash
npm run reset-db
# ou
./reset-database.sh
# ou
npx prisma migrate reset --force
```

**Option 2 : Supprimer seulement les changements détectés**
```bash
sqlite3 prisma/dev.db "DELETE FROM license_changes;"
```

**Option 3 : Marquer les changements comme "reviewed"**
```bash
sqlite3 prisma/dev.db "UPDATE license_changes SET status='reviewed' WHERE status='detected';"
```

---

### ❌ Erreur "Unique constraint failed"

**Symptômes** :
```
Unique constraint failed on the fields: (`platform`,`owner`,`name`)
```

**Cause** : Tentative d'ajouter un repository qui existe déjà

**Solution** :
Le seed utilise maintenant `upsert` au lieu de `create` pour éviter ce problème.

Si vous avez modifié le seed :
```typescript
// ❌ Ne pas faire
await prisma.watchedRepository.create({ data: repoData });

// ✅ Faire
await prisma.watchedRepository.upsert({
  where: {
    platform_owner_name: {
      platform: repoData.platform,
      owner: repoData.owner,
      name: repoData.name
    }
  },
  update: {},
  create: repoData
});
```

---

### ❌ Erreur "Token invalide" ou 401/403

**Symptômes** :
- API retourne 401 Unauthorized
- API retourne 403 Forbidden

**Causes possibles** :
1. Token expiré (7 jours)
2. Token mal formé
3. Utilisateur n'a pas le bon rôle

**Solutions** :

**Vérifier le token** :
```javascript
// Dans la console du navigateur
const token = localStorage.getItem('token');
console.log('Token:', token);

// Décoder le token (sans vérification)
const payload = JSON.parse(atob(token.split('.')[1]));
console.log('Payload:', payload);
```

**Se reconnecter** :
1. Aller sur `/auth/login`
2. Login: `admin@openbait.org`
3. Password: `admin123`

**Vérifier le rôle** :
```bash
sqlite3 prisma/dev.db "SELECT id, email, role FROM users WHERE email='admin@openbait.org';"
```

---

### ❌ GitHub API rate limit

**Symptômes** :
```
GitHub API error: 403
X-RateLimit-Remaining: 0
```

**Cause** : Limite de l'API GitHub dépassée

**Vérifier le rate limit** :
```bash
curl -H "Authorization: token $GITHUB_TOKEN" \
  https://api.github.com/rate_limit
```

**Limites** :
- **Sans token** : 60 requêtes/heure
- **Avec token** : 5000 requêtes/heure

**Solutions** :
1. Ajouter un `GITHUB_TOKEN` dans `.env`
2. Attendre que le rate limit se réinitialise
3. Réduire la fréquence de scan

---

### ❌ Prisma Client pas à jour

**Symptômes** :
```
Property 'watchedRepository' does not exist on type 'PrismaClient'
```

**Cause** : Le client Prisma n'a pas été régénéré après une migration

**Solution** :
```bash
npx prisma generate
```

---

### ❌ Base de données corrompue

**Symptômes** :
- Erreurs SQLite aléatoires
- "database disk image is malformed"

**Solution** :
```bash
# Sauvegarder les données importantes si nécessaire
cp prisma/dev.db prisma/dev.db.backup

# Réinitialiser la base
npx prisma migrate reset --force

# Ou supprimer et recréer
rm prisma/dev.db
npx prisma migrate deploy
npx tsx prisma/seed.ts
```

---

### ❌ Le cron job ne s'exécute pas

**Symptômes** :
- Aucun scan automatique
- Pas de nouvelles détections

**Vérifications** :

**En local** :
Le cron job ne fonctionne PAS en local. Il faut déclencher manuellement :
```bash
curl http://localhost:3000/api/monitor/scan \
  -H "Authorization: Bearer YOUR_CRON_SECRET"
```

**Sur Vercel** :
1. Vérifier `vercel.json` :
```json
{
  "crons": [{
    "path": "/api/monitor/scan",
    "schedule": "0 */6 * * *"
  }]
}
```

2. Vérifier les logs Vercel :
```bash
vercel logs --follow
```

3. Vérifier que `CRON_SECRET` est défini dans les env vars Vercel

---

## Commandes de Dépannage

### Voir les changements détectés
```bash
sqlite3 prisma/dev.db "SELECT * FROM license_changes ORDER BY detectedAt DESC LIMIT 10;"
```

### Voir les repos surveillés
```bash
sqlite3 prisma/dev.db "SELECT owner, name, currentLicense, lastChecked FROM watched_repositories;"
```

### Voir les logs de monitoring
```bash
sqlite3 prisma/dev.db "SELECT * FROM monitoring_logs ORDER BY executedAt DESC LIMIT 10;"
```

### Compter les changements par status
```bash
sqlite3 prisma/dev.db "SELECT status, COUNT(*) FROM license_changes GROUP BY status;"
```

### Supprimer un repository spécifique
```bash
sqlite3 prisma/dev.db "DELETE FROM watched_repositories WHERE owner='hashicorp' AND name='terraform';"
```

### Réinitialiser tous les changements en "detected"
```bash
sqlite3 prisma/dev.db "UPDATE license_changes SET status='detected', reviewedAt=NULL, reviewedBy=NULL;"
```

---

## Logs & Debugging

### Activer les logs détaillés
Dans `lib/license-monitor.ts` et `lib/license-alert.ts`, décommentez les `console.log()`.

### Voir les logs Next.js
```bash
# En dev
npm run dev

# Les logs apparaissent dans le terminal
```

### Voir les logs Prisma
```bash
# Activer les logs Prisma
DATABASE_URL="..." npx prisma studio --port 5555
```

---

## Scripts Utiles

### Réinitialiser la base
```bash
./reset-database.sh
```

### Tester un scan manuel
```bash
curl http://localhost:3000/api/monitor/scan \
  -H "Authorization: Bearer ${CRON_SECRET:-dev-secret}" \
  | jq
```

### Ajouter des repos de test
```bash
# Créer un fichier add-repos.sh
for repo in "facebook/react" "microsoft/vscode" "vercel/next.js"
do
  IFS='/' read -r owner name <<< "$repo"
  curl -X POST http://localhost:3000/api/monitor/repos \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $TOKEN" \
    -d "{\"owner\":\"$owner\",\"name\":\"$name\",\"priority\":\"medium\"}"
done
```

---

## Contacts & Support

- **Documentation** : `MONITORING_SYSTEM.md`
- **Quick Start** : `QUICKSTART_MONITORING.md`
- **Commandes** : `COMMANDS.md`
- **Ce fichier** : `TROUBLESHOOTING.md`

---

**Dernière mise à jour** : 24 novembre 2024
