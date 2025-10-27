# 🌍 Système de Traduction (i18n) - OpenBait

## Implémentation Complète

### ✅ Fonctionnalités Ajoutées

1. **Contexte de Langue Global**
   - Fichier : `/contexts/LanguageContext.tsx`
   - Support FR 🇫🇷 et EN 🇬🇧
   - Sauvegarde automatique dans localStorage
   - Hook `useLanguage()` pour accéder aux traductions

2. **Sélecteur de Langue**
   - Composant : `/app/components/LanguageSelector.tsx`
   - Menu déroulant avec drapeaux
   - Changement instantané de langue
   - Design responsive

3. **Traductions Intégrées**
   - Page Admin entièrement traduite
   - Support de 50+ clés de traduction
   - Facile d'ajouter de nouvelles traductions

### 📁 Structure des Fichiers

```
my-app/
├── contexts/
│   └── LanguageContext.tsx         # Contexte global + traductions
├── app/
│   ├── components/
│   │   └── LanguageSelector.tsx    # Composant sélecteur
│   ├── layout.tsx                  # Provider global
│   └── admin/
│       └── page.tsx                # Page traduite
```

### 🚀 Utilisation

#### 1. Dans un composant Client

```tsx
'use client';

import { useLanguage } from '@/contexts/LanguageContext';

export default function MyComponent() {
  const { t, language, setLanguage } = useLanguage();
  
  return (
    <div>
      <h1>{t('admin.title')}</h1>
      <button onClick={() => setLanguage('en')}>
        Switch to English
      </button>
    </div>
  );
}
```

#### 2. Ajouter une nouvelle traduction

Dans `/contexts/LanguageContext.tsx` :

```tsx
export const translations = {
  fr: {
    'mon.cle': 'Mon texte en français',
    // ...
  },
  en: {
    'mon.cle': 'My text in English',
    // ...
  }
};
```

Puis l'utiliser :

```tsx
{t('mon.cle')}
```

### 📦 Traductions Disponibles

#### Navigation
- `nav.home` - Accueil / Home
- `nav.database` - Base de données / Database
- `nav.forum` - Forum / Forum
- `nav.about` - À propos / About
- `nav.login` - Connexion / Login
- `nav.register` - Inscription / Sign Up
- `nav.dashboard` - Dashboard / Dashboard
- `nav.admin` - Admin / Admin
- `nav.logout` - Déconnexion / Logout

#### Page Admin
- `admin.title` - Panneau d'administration / Administration Panel
- `admin.subtitle` - Gérez les cas... / Manage cases...
- `admin.addCase` - Ajouter un cas / Add a case
- `admin.pending` - En attente / Pending
- `admin.approved` - Approuvés / Approved
- `admin.rejected` - Rejetés / Rejected
- `admin.total` - Total / Total
- `admin.all` - Tous / All
- `admin.noCases` - Aucun cas... / No cases...
- `admin.loading` - Chargement... / Loading...

#### Table
- `table.case` - Cas / Case
- `table.category` - Catégorie / Category
- `table.reports` - 🔥 Signalements / 🔥 Reports
- `table.reportedBy` - Signalé par / Reported by
- `table.date` - Date / Date
- `table.status` - Statut / Status
- `table.actions` - Actions / Actions

#### Statuts
- `status.pending` - En attente / Pending
- `status.approved` - Approuvé / Approved
- `status.rejected` - Rejeté / Rejected
- `status.urgent` - 🔥 URGENT / 🔥 URGENT
- `status.priority` - ⚠️ PRIORITÉ / ⚠️ PRIORITY

#### Actions
- `action.approve` - Approuver / Approve
- `action.reject` - Rejeter / Reject
- `action.view` - Voir et modifier / View and edit

### 🎨 Design du Sélecteur

```
┌─────────────────┐
│ 🇫🇷 FR    ▼    │  ← Bouton principal
└─────────────────┘
        ↓ Clic
┌─────────────────┐
│ 🇫🇷 Français  ✓ │  ← Langue active
│ 🇬🇧 English     │
└─────────────────┘
```

### 📱 Responsive

- Desktop : Affiche le drapeau + code langue (FR/EN)
- Mobile : Affiche uniquement le drapeau pour gagner de l'espace
- Menu dropdown adaptatif

### 🔧 Prochaines Étapes

Pour traduire d'autres pages :

1. **Page d'accueil** (`/app/page.tsx`)
   - Importer `useLanguage`
   - Remplacer tous les textes par `{t('home.hero.title')}`
   - Ajouter le `<LanguageSelector />` dans le header

2. **Forum** (`/app/forum/page.tsx`)
   - Ajouter les clés de traduction pour le forum
   - Traduire les boutons, labels, etc.

3. **Database** (`/app/database/page.tsx`)
   - Traduire les filtres et catégories
   - Traduire les détails des cas

### 🌐 Ajout d'une Nouvelle Langue (ex: Espagnol)

1. Modifier le type dans `LanguageContext.tsx` :
```tsx
type Language = 'fr' | 'en' | 'es';
```

2. Ajouter les traductions :
```tsx
export const translations = {
  fr: { ... },
  en: { ... },
  es: {
    'nav.home': 'Inicio',
    // ... toutes les clés
  }
};
```

3. Ajouter le drapeau dans `LanguageSelector.tsx` :
```tsx
const languages = [
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'es', name: 'Español', flag: '🇪🇸' }
];
```

### ✅ Tests

Vérifier que :
- [ ] Le sélecteur apparaît dans le header admin
- [ ] Cliquer sur EN change toute la page en anglais
- [ ] Cliquer sur FR remet en français
- [ ] Le choix est sauvegardé au refresh de page
- [ ] Tous les textes sont traduits (pas de clés affichées)

### 📝 Notes Importantes

- **Client Component Required** : Le hook `useLanguage()` ne fonctionne que dans les composants avec `'use client'`
- **localStorage** : La préférence de langue est sauvegardée localement
- **Fallback** : Si une clé n'existe pas, elle affiche la clé elle-même
- **Performance** : Les traductions sont chargées une seule fois au montage du contexte

### 🎯 Objectifs Atteints

✅ Menu langue avec drapeaux dans la navbar
✅ Traduction complète de la page admin  
✅ Changement instantané français ↔ anglais
✅ Sauvegarde de la préférence utilisateur
✅ Design responsive et professionnel
✅ Architecture extensible pour ajouter d'autres langues

---

**Prochaine étape** : Traduire la page d'accueil et le forum !
