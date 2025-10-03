# 📝 Fonctionnalités Admin - Édition et Prévisualisation

## ✨ Nouvelles fonctionnalités ajoutées

### 🔍 Page de prévisualisation et d'édition

Une nouvelle page a été créée pour visualiser et modifier les cas existants : `/admin/cases/edit/[id]`

## 🎯 Comment accéder

### Depuis le tableau de bord admin

1. Allez sur http://localhost:3000/admin
2. Dans le tableau des cas, cliquez sur l'icône 👁️ (œil) de n'importe quel cas
3. Vous serez redirigé vers la page de prévisualisation

### Accès direct

URL : `http://localhost:3000/admin/cases/edit/[id]`

Remplacez `[id]` par l'ID du cas (visible dans le tableau admin)

## 📋 Fonctionnalités de la page

### Mode Prévisualisation (par défaut)

Quand vous ouvrez un cas, vous êtes en mode lecture seule :

#### Informations affichées :
- ✅ **Métadonnées** en haut :
  - Statut du cas (Approuvé/En attente/Rejeté)
  - Nom du signaleur
  - Date de création
  - Date de dernière modification

- ✅ **Toutes les sections** :
  1. Informations de base (entreprise, produit, catégorie, site web)
  2. Changement de licence (initiale, finale, date)
  3. Description et analyse (description, juridique, communauté)
  4. Sources (liens cliquables)

#### Boutons disponibles :
- 🔵 **Modifier** : Passe en mode édition
- 🔴 **Supprimer** : Supprime le cas (avec confirmation)
- ⬅️ **Retour à l'admin** : Retourne au tableau de bord

### Mode Édition

Cliquez sur le bouton **"Modifier"** en haut à droite pour entrer en mode édition.

#### Champs éditables :

**Section 1 - Informations de base**
- Nom de l'entreprise (input text)
- Nom du produit (input text)
- Catégorie (dropdown avec les catégories prédéfinies)
- Site web (input URL)

**Section 2 - Changement de licence**
- Licence initiale (input text)
- Licence finale (input text)
- Date du changement (input text - format libre)

**Section 3 - Description et analyse**
- Description du cas (textarea)
- Analyse juridique (textarea)
- Réaction de la communauté (textarea)

**Section 4 - Sources**
- Liste modifiable de sources (input URL)
- **+ Ajouter une source** : Ajoute un nouveau champ
- **Supprimer** : Retire une source (minimum 1)

#### Boutons en mode édition :
- ✅ **Enregistrer** : Sauvegarde les modifications
- ❌ **Annuler** : Restaure les valeurs d'origine et quitte le mode édition

### Feedback utilisateur

#### Messages de succès
- ✅ Bannière verte : "Modifications enregistrées avec succès !"
- Auto-disparaît après 3 secondes
- Repasse automatiquement en mode prévisualisation

#### Messages d'erreur
- ❌ Bannière rouge avec détails de l'erreur
- Reste affichée jusqu'à correction

#### États de chargement
- 🔄 Spinner pendant le chargement du cas
- 🔄 Bouton "Enregistrement..." pendant la sauvegarde
- Bouton désactivé pendant le traitement

## 🔧 Fonctionnement technique

### API Route mise à jour

L'API `/api/admin/cases/[id]` supporte maintenant deux modes :

#### Mode 1 : Changement de statut (existant)
```json
{
  "status": "APPROVED"
}
```
Utilisé pour approuver/rejeter rapidement depuis le tableau

#### Mode 2 : Mise à jour complète (nouveau)
```json
{
  "companyName": "...",
  "productName": "...",
  "category": "...",
  // tous les champs
}
```
Utilisé pour modifier toutes les informations du cas

### Permissions

- **MODERATOR et ADMIN** : Peuvent modifier tous les cas
- **ADMIN uniquement** : Peut supprimer les cas
- Les métadonnées (ID, dates, signaleur) ne sont **jamais** modifiables

## 💡 Cas d'usage

### Corriger une faute de frappe
1. Cliquez sur 👁️ du cas concerné
2. Cliquez sur "Modifier"
3. Corrigez le champ (ex: nom de l'entreprise)
4. Cliquez sur "Enregistrer"

### Ajouter une source manquante
1. Ouvrez le cas
2. Passez en mode édition
3. Cliquez sur "+ Ajouter une source"
4. Collez l'URL
5. Sauvegardez

### Améliorer la description
1. Ouvrez le cas
2. Mode édition
3. Modifiez le texte dans les textareas
4. Sauvegardez

### Changer la catégorie
1. Ouvrez le cas
2. Mode édition
3. Sélectionnez la nouvelle catégorie dans le dropdown
4. Sauvegardez

### Supprimer un cas obsolète
1. Ouvrez le cas
2. Cliquez sur "Supprimer" (bouton rouge)
3. Confirmez dans la popup
4. Le cas est supprimé et vous êtes redirigé vers /admin

## 🎨 Interface

### Design cohérent
- Même style que le formulaire d'ajout
- Sections numérotées et séparées
- Champs clairement labellisés

### Adaptative
- Mode lecture : Champs en gris clair non-cliquables
- Mode édition : Champs blancs avec bordures
- Transitions fluides entre les modes

### Navigation intuitive
- Breadcrumb en haut (Retour à l'admin)
- Boutons d'action toujours visibles en haut
- Pas de perte de données avec le bouton Annuler

## 🔐 Sécurité

### Vérifications
- ✅ Token JWT vérifié
- ✅ Rôle MODERATOR/ADMIN requis pour modifier
- ✅ Rôle ADMIN uniquement pour supprimer
- ✅ Validation des données côté serveur

### Intégrité des données
- Les métadonnées (ID, dates, signaleur) sont protégées
- Seuls les champs fournis sont mis à jour
- Le statut n'est pas modifiable depuis cette page (utiliser le tableau admin)

## 📊 Workflow complet

```
Tableau Admin (/admin)
       ↓
  Cliquer sur 👁️
       ↓
Prévisualisation (/admin/cases/edit/[id])
       ↓
  Cliquer "Modifier"
       ↓
  Mode Édition
       ↓
  Modifier les champs
       ↓
  "Enregistrer" ou "Annuler"
       ↓
Retour en prévisualisation
       ↓
  "Retour à l'admin"
       ↓
Tableau Admin
```

## 🆕 Différences avec l'ajout

### Page d'ajout (`/admin/cases/add`)
- Formulaire vide
- Tous les champs requis
- Création d'un nouveau cas
- Statut automatiquement APPROVED
- Pas de métadonnées affichées

### Page d'édition (`/admin/cases/edit/[id]`)
- Champs pré-remplis
- Modification de cas existant
- Deux modes : prévisualisation et édition
- Métadonnées affichées (statut, dates, signaleur)
- Option de suppression

## ✅ Testé et validé

- ✅ Chargement des cas existants
- ✅ Affichage correct de toutes les données
- ✅ Parsing des sources JSON
- ✅ Modification et sauvegarde
- ✅ Gestion des erreurs
- ✅ Messages de feedback
- ✅ Bouton Annuler restaure les valeurs
- ✅ Suppression avec confirmation
- ✅ Navigation fluide

---

**Prêt à l'emploi !** Vous pouvez maintenant gérer complètement votre base de données de cas depuis l'interface admin. 🚀
