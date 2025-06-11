# Structure de Style - Manos Tours

Cette documentation décrit l'organisation des styles CSS pour le projet Manos Tours.

## 📁 Organisation des fichiers

```
src/styles/
├── variables.css      # Variables CSS globales (couleurs, espacements, etc.)
├── layout.css         # Styles de mise en page (grid, flexbox, sections)
├── components.css     # Styles des composants réutilisables
├── animations.css     # Animations et transitions
└── README.md         # Cette documentation
```

## 🎨 Palette de couleurs

Basée sur le concept "Grand-Popo Authentique" défini dans le plan d'analyse :

### Couleurs principales
- **Primaire** : `#0077BE` (Bleu océan) - Confiance, professionnalisme
- **Secondaire** : `#F4A460` (Sable doré) - Chaleur, accueil
- **Accent** : `#228B22` (Vert mangrove) - Nature, écotourisme
- **Neutre** : `#CD853F` (Terre rouge béninoise) - Authenticité

### Utilisation
```css
/* Utilisation des variables CSS */
.mon-element {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
}
```

## 🧩 Composants disponibles

### Boutons
```html
<button class="btn btn-primary">Bouton principal</button>
<button class="btn btn-secondary">Bouton secondaire</button>
<button class="btn btn-outline">Bouton contour</button>
```

### Cards
```html
<div class="card">
  <div class="card-header">En-tête</div>
  <div class="card-body">Contenu</div>
  <div class="card-footer">Pied de page</div>
</div>
```

### Navigation
```html
<a href="#" class="nav-link">Lien de navigation</a>
<a href="#" class="nav-link active">Lien actif</a>
```

### Formulaires
```html
<div class="form-group">
  <label class="form-label">Libellé</label>
  <input type="text" class="form-control" />
</div>
```

### Badges
```html
<span class="badge badge-primary">Nouveau</span>
<span class="badge badge-success">Confirmé</span>
```

### Alertes
```html
<div class="alert alert-success">Message de succès</div>
<div class="alert alert-warning">Message d'avertissement</div>
<div class="alert alert-error">Message d'erreur</div>
```

## 📐 Système de mise en page

### Container
```html
<div class="container">Contenu centré</div>
<div class="container container-wide">Contenu large</div>
<div class="container container-narrow">Contenu étroit</div>
```

### Grid
```html
<div class="grid grid-cols-3">
  <div>Colonne 1</div>
  <div>Colonne 2</div>
  <div>Colonne 3</div>
</div>
```

### Flexbox
```html
<div class="flex items-center justify-between">
  <div>Élément 1</div>
  <div>Élément 2</div>
</div>
```

## 🎭 Animations

### Classes d'animation
```html
<div class="fade-in">Animation d'apparition</div>
<div class="slide-up">Animation de glissement</div>
```

### Transitions personnalisées
```css
.mon-element {
  transition: all var(--transition-normal);
}
```

## 📱 Responsive Design

Tous les composants sont conçus pour être responsive avec des breakpoints :
- Mobile : < 768px
- Desktop : ≥ 768px

### Classes utilitaires
```html
<div class="hidden-mobile">Masqué sur mobile</div>
<div class="hidden-desktop">Masqué sur desktop</div>
```

## 🔧 Variables disponibles

### Espacements
- `--spacing-xs` : 4px
- `--spacing-sm` : 8px
- `--spacing-md` : 16px
- `--spacing-lg` : 24px
- `--spacing-xl` : 32px
- `--spacing-2xl` : 48px
- `--spacing-3xl` : 64px
- `--spacing-4xl` : 96px

### Typographie
- `--font-family-primary` : Police principale
- `--font-family-heading` : Police des titres
- `--font-size-xs` à `--font-size-6xl` : Tailles de police

### Rayons de bordure
- `--border-radius-sm` : 4px
- `--border-radius-md` : 8px
- `--border-radius-lg` : 12px
- `--border-radius-xl` : 16px
- `--border-radius-full` : 9999px

### Ombres
- `--shadow-sm` : Ombre légère
- `--shadow-md` : Ombre moyenne
- `--shadow-lg` : Ombre importante
- `--shadow-xl` : Ombre très importante

### Transitions
- `--transition-fast` : 150ms
- `--transition-normal` : 300ms
- `--transition-slow` : 500ms

## 🎯 Bonnes pratiques

1. **Utilisez les variables CSS** plutôt que des valeurs codées en dur
2. **Respectez la palette de couleurs** définie
3. **Utilisez les classes utilitaires** pour la cohérence
4. **Testez sur mobile et desktop** avant de valider
5. **Documentez les nouveaux composants** ajoutés

## 🚀 Intégration avec Tailwind CSS

Cette structure CSS personnalisée complète Tailwind CSS sans le remplacer. Utilisez :
- **Tailwind** pour les utilitaires rapides
- **CSS personnalisé** pour les composants spécifiques à Manos Tours

## 📝 Maintenance

Pour ajouter de nouveaux styles :
1. Ajoutez les variables dans `variables.css`
2. Créez les composants dans `components.css`
3. Documentez dans ce README
4. Testez la compatibilité responsive
