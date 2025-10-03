# 🎯 Guide pour les Administrateurs - OpenBait.org

## 📊 Vue d'ensemble

En tant qu'administrateur, vous avez accès à des fonctionnalités avancées pour gérer la base de données de cas documentés.

## 🔐 Se connecter en tant qu'Admin

### Option 1 : Utiliser le compte admin par défaut
```
Email: admin@openbait.org
Mot de passe: admin123
```
⚠️ **Changez ce mot de passe immédiatement après la première connexion !**

### Option 2 : Promouvoir votre compte existant
1. Ouvrez Prisma Studio : `npx prisma studio`
2. Cliquez sur le modèle **"User"**
3. Trouvez votre compte par email
4. Changez `role` de `MEMBER` à `ADMIN`
5. Sauvegardez
6. **Déconnectez-vous et reconnectez-vous** pour que le changement prenne effet

## 📝 Ajouter des cas dans la base de données

### Méthode 1 : Via l'interface Admin (Recommandé)

1. **Connectez-vous** sur http://localhost:3000/auth/login
2. **Accédez au panneau admin** : http://localhost:3000/admin
3. **Cliquez sur "Ajouter un cas"** (bouton en haut à droite)
4. **Remplissez le formulaire** :
   - **Informations de base** : Entreprise, produit, catégorie, site web
   - **Changement de licence** : Licence initiale, finale, date
   - **Description et analyse** : Description, analyse juridique, réaction communauté
   - **Sources** : Ajoutez des liens de référence
5. **Cliquez sur "Ajouter le cas"**
6. Le cas est **automatiquement approuvé** et visible sur `/database`

### Méthode 2 : Via le script de seed

Pour ajouter plusieurs cas d'un coup :

1. **Éditez** `prisma/seed.ts`
2. **Ajoutez vos cas** dans le tableau `cases`
3. **Exécutez** : `npm run seed`

Exemple de structure :
```typescript
{
  companyName: 'Exemple Inc',
  productName: 'Produit Exemple',
  category: 'Développement',
  licenseInitial: 'MIT',
  licenseFinal: 'Propriétaire',
  changeDate: 'Janvier 2024',
  website: 'https://example.com',
  description: 'Description du changement...',
  legalAnalysis: 'Analyse juridique...',
  communityReaction: 'Réaction de la communauté...',
  sources: JSON.stringify([
    'https://source1.com',
    'https://source2.com'
  ]),
  status: CaseStatus.APPROVED,
  reporterId: admin.id
}
```

## 🔄 Gérer les cas soumis par la communauté

### Workflow d'approbation

1. **Tableau de bord** : http://localhost:3000/admin
2. **Filtrez** les cas par statut :
   - **En attente** : Nouveaux cas à examiner
   - **Approuvés** : Cas validés et visibles publiquement
   - **Rejetés** : Cas refusés
3. **Examinez chaque cas** :
   - Cliquez sur 👁️ pour **voir les détails et modifier**
4. **Actions disponibles dans le tableau** :
   - ✅ **Approuver** : Le cas devient visible sur `/database`
   - ❌ **Rejeter** : Le cas est archivé
   - 👁️ **Voir/Modifier** : Ouvre la page de prévisualisation et d'édition

## ✏️ Modifier un cas existant

### Accès à la page d'édition

1. **Depuis le tableau de bord admin** : Cliquez sur l'icône �️
2. **URL directe** : `/admin/cases/edit/[id]`

### Mode Prévisualisation (par défaut)

- **Affichage lecture seule** de toutes les informations
- **Métadonnées visibles** : Statut, signaleur, dates
- **Actions disponibles** :
  - 🔵 **Modifier** : Passe en mode édition
  - 🔴 **Supprimer** : Supprime définitivement le cas (confirmation requise)

### Mode Édition

1. **Cliquez sur "Modifier"** en haut à droite
2. **Éditez les champs** :
   - Informations de base (entreprise, produit, catégorie, site)
   - Détails du changement (licences, date)
   - Description et analyses (description, juridique, communauté)
   - Sources (ajoutez/supprimez des liens)
3. **Actions disponibles** :
   - ✅ **Enregistrer** : Sauvegarde les modifications
   - ❌ **Annuler** : Restaure les valeurs d'origine

### Fonctionnalités de l'éditeur

- **Sauvegarde intelligente** : Seuls les champs modifiés sont mis à jour
- **Gestion des sources** :
  - Ajoutez des sources avec le bouton "+ Ajouter une source"
  - Supprimez des sources avec le bouton "Supprimer"
- **Feedback visuel** :
  - ✅ Message de succès après sauvegarde
  - ❌ Message d'erreur en cas de problème
- **Métadonnées préservées** : Statut, signaleur, dates de création

### Statistiques en temps réel

Le tableau de bord affiche :
- 🕒 **En attente** : Nombre de cas à examiner
- ✅ **Approuvés** : Cas publiés
- ❌ **Rejetés** : Cas refusés
- 📊 **Total** : Tous les cas

## 🎯 Bonnes pratiques

### Vérification des cas

Avant d'approuver un cas, vérifiez :
- ✅ Les informations sont exactes et vérifiables
- ✅ Les sources sont fiables et accessibles
- ✅ Le changement de licence est bien documenté
- ✅ L'impact sur la communauté est décrit
- ✅ Pas de doublons dans la base de données

### Catégories disponibles

- Infrastructure & Cloud
- Développement
- Base de données
- Conteneurisation
- Monitoring
- Sécurité
- IA & ML
- Autre

### Format des dates

Utilisez un format cohérent :
- ✅ "Août 2023"
- ✅ "Janvier 2024"
- ✅ "T3 2023"
- ❌ "08/2023"
- ❌ "2023-08"

### Sources

- Ajoutez au minimum 1-2 sources fiables
- Privilégiez les sources officielles (blog de l'entreprise, annonces)
- Incluez des articles d'analyse technique si disponibles
- Ajoutez les liens vers les forks communautaires si existants

## 🔒 Sécurité

### Rôles et permissions

**ADMIN** (vous) :
- ✅ Ajouter des cas directement
- ✅ Approuver/rejeter les soumissions
- ✅ Supprimer des cas
- ✅ Voir tous les cas (pending, approved, rejected)

**MODERATOR** :
- ✅ Approuver/rejeter les soumissions
- ✅ Voir tous les cas
- ❌ Supprimer des cas
- ❌ Gérer les utilisateurs

**MEMBER** :
- ✅ Signaler des nouveaux cas (status = PENDING)
- ✅ Accès au dashboard personnel
- ❌ Accès au panneau admin

### Changer un mot de passe

Depuis Prisma Studio :
1. Ouvrez `npx prisma studio`
2. Cliquez sur **User**
3. Trouvez votre compte
4. Le mot de passe est hashé (bcrypt)
5. Pour changer : utilisez un script ou l'interface `/auth/login`

## 📦 Base de données

### Visualiser les données

```bash
npx prisma studio
```

Ouvre une interface web sur http://localhost:5555

### Réinitialiser la base de données

```bash
npx prisma migrate reset
npm run seed
```

⚠️ **Attention** : Supprime toutes les données !

### Backup

La base de données SQLite est dans : `prisma/dev.db`

Pour sauvegarder :
```bash
cp prisma/dev.db prisma/dev.db.backup
```

## 🚀 Cas déjà ajoutés

Le seed ajoute automatiquement 9 cas célèbres :
1. HashiCorp Terraform (MPL 2.0 → BSL 1.1)
2. Docker Desktop (Gratuit → Payant)
3. Elastic (Apache 2.0 → SSPL)
4. Redis (BSD → SSPL/RSALv2)
5. MongoDB (AGPL → SSPL)
6. Sentry (BSD → BSL)
7. CockroachDB (Apache 2.0 → BSL)
8. Confluent Kafka (Apache 2.0 → CCL)
9. Grafana Labs (Apache 2.0 → AGPL)

## 🆘 Support

Pour toute question :
1. Consultez `AUTHENTICATION.md` pour les détails techniques
2. Vérifiez les logs du serveur : terminal `npm run dev`
3. Utilisez Prisma Studio pour explorer la base de données
4. Les erreurs API sont dans la console du navigateur (F12)

## 📊 Statistiques

Pour voir les statistiques en temps réel :
- **Dashboard admin** : http://localhost:3000/admin
- **Prisma Studio** : `npx prisma studio`

---

**Rappel** : En tant qu'admin, vos cas ajoutés sont **automatiquement approuvés** et visibles publiquement. Assurez-vous que les informations sont exactes avant de publier !
