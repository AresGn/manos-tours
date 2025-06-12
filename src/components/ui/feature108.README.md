# Feature108 Component - Documentation

## Vue d'ensemble

Le composant `Feature108` est une section interactive avec onglets conçue spécifiquement pour présenter les atouts de Grand-Popo dans le projet Manos Tours. Il utilise la même couleur d'arrière-plan que le footer pour une cohérence visuelle parfaite.

## Caractéristiques

### ✅ **Améliorations apportées :**

1. **Suppression du badge** - Le badge "Manos Tours" a été retiré comme demandé
2. **Mise en page horizontale** - Les onglets sont maintenant disposés horizontalement côte à côte
3. **Texte de description mis à jour** - Utilise le texte spécifique sur Grand-Popo
4. **Couleur d'arrière-plan** - Utilise le même gradient que le footer (`linear-gradient(135deg, #111827 0%, #1f2937 100%)`)
5. **Design responsive** - Entièrement responsive sur tous les appareils
6. **Accessibilité améliorée** - Support complet des lecteurs d'écran et navigation clavier

### 🎨 **Design et Style :**

- **Arrière-plan** : Gradient sombre identique au footer
- **Typographie** : Texte blanc avec contraste optimal
- **Images** : Optimisées avec Next.js Image pour de meilleures performances
- **Animations** : Transitions fluides et hover effects
- **Responsive** : Adaptation parfaite mobile/tablette/desktop

### ♿ **Accessibilité :**

- Support des lecteurs d'écran
- Navigation clavier complète
- Liens de saut (skip links)
- Attributs ARIA appropriés
- Contraste de couleurs conforme WCAG

## Structure des fichiers

```
src/components/ui/
├── feature108.tsx              # Composant principal
├── feature108-demo.tsx         # Composant de démonstration
├── feature108.types.ts         # Types TypeScript
├── feature108.data.tsx         # Données par défaut
├── feature108.accessibility.tsx # Utilitaires d'accessibilité
└── feature108.README.md        # Cette documentation
```

## Utilisation

### Utilisation basique :
```tsx
import { Feature108 } from '@/components/ui/feature108';

export default function MyPage() {
  return <Feature108 />;
}
```

### Utilisation avec props personnalisées :
```tsx
import { Feature108 } from '@/components/ui/feature108';

const customData = {
  heading: "Mon titre personnalisé",
  description: "Ma description personnalisée...",
  tabs: [
    // Vos onglets personnalisés
  ]
};

export default function MyPage() {
  return <Feature108 {...customData} />;
}
```

## Props

| Prop | Type | Défaut | Description |
|------|------|--------|-------------|
| `heading` | `string` | "Pourquoi Grand-Popo ?" | Titre principal de la section |
| `description` | `string` | Texte sur Grand-Popo | Description sous le titre |
| `tabs` | `Tab[]` | `defaultTabs` | Tableau des onglets à afficher |

## Intégration

Le composant est actuellement intégré dans :
- **Page d'accueil** (`src/app/page.tsx`) - Remplace l'ancien `WhyGrandPopoFeatureSection`
- **Page de test** (`src/app/test-feature/page.tsx`) - Pour les tests isolés

## Performance

- **Images optimisées** avec Next.js Image
- **Lazy loading** pour les images non visibles
- **Responsive images** avec sizes appropriées
- **Priority loading** pour la première image

## Maintenance

Le composant respecte les bonnes pratiques :
- **Séparation des responsabilités** (types, données, accessibilité)
- **Fichiers < 250 lignes** chacun
- **Code propre et maintenable**
- **TypeScript strict**
- **Tests d'accessibilité**

## Tests

Pour tester le composant :
1. **Site principal** : http://localhost:3000
2. **Page de test isolée** : http://localhost:3000/test-feature
