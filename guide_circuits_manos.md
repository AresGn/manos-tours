# Guide Complet - Intégration Page Circuits Mano's Tours

## 📋 Structure des Données - Circuits Disponibles

### A. CIRCUIT BIODIVERSITÉ
- **Durée :** 2h30 à 3h
- **Description :** Explorez la nature luxuriante de Grand-Popo entre mangrove, tortues et oiseaux migrateurs
- **Activités :**
  - Visite de l'écloserie de tortues marines
  - Visite de la mangrove avec ses palétuviers
  - Visite de l'île où se prépare le sel de cuisine artisanale
  - Visite de l'embouchure du fleuve Roy
- **Tarifs :**
  - Bateau motorisé : 35 000 F CFA
  - Enfant (≥ 7 ans) : 5 000 F CFA
  - Adulte : 10 000 F CFA

### B. CIRCUIT ACTIVITÉ SOCIO-ÉCONOMIQUE
- **Durée :** 4h
- **Description :** Découvrez les gestes ancestraux des artisans, de la fabrication du caramel à l'extraction d'huile de coco
- **Activités :**
  - Atelier de fabrication traditionnelle de caramel : démonstration et dégustation
  - Techniques ancestrales : extraction d'huile de coco et tissage de natte en jonc
  - Pause déjeuner
- **Tarifs :**
  - Bateau motorisé : 35 000 F CFA
  - Enfant (≥ 7 ans) : 6 000 F CFA
  - Adulte : 12 500 F CFA

### C. ROUTE DU FROMAGE PEULH / IMMERSION PASTORALE
- **Durée :** 2h à 2h30
- **Description :** Vivez l'authenticité pastorale en participant à la traite et à la fabrication traditionnelle du fromage
- **Activités :**
  - Visite de l'étable à vaches
  - Assister à la traite manuelle
  - Filtration et coagulation du lait à l'aide du Calotropis procera
  - Assister à l'égouttage du lait de vache avec des petits paniers
  - Dégustation de fromage
- **Tarifs :**
  - Enfant (≥ 7 ans) : 5 000 F CFA
  - Adulte : 10 000 F CFA

### D. ZANGBETO LIVE / VOYAGE AU CŒUR DU VODOUN
- **Durée :** 1h30
- **Groupe :** 1 à 6 personnes
- **Description :** Plongez dans le mystère et l'énergie du Vodoun à travers les danses et percussions du Zangbeto
- **Activités :**
  - Introduction à la culture Vodoun
  - Clarification sur le rôle du Zangbeto dans la société africaine
  - Prestations : danses rituelles, rotations spectaculaires et ambiance musicale
- **Tarif :** Prix unique : 70 000 F CFA

### E. CIRCUIT BALADE À TRAVERS LES ÉPOQUES À GRAND-POPO
- **Durée :** 3h
- **Description :** Explorez le passé colonial et vernaculaire de Grand-Popo en découvrant ses monuments et lieux de vie d'hier à aujourd'hui
- **Activités :**
  - Visite du pont métallique colonial de Grand-Popo
  - Visite du marché du samedi de Grand-Popo
  - Visite de la zone administrative coloniale d'Apoutagbo (Gbecon)
- **Tarifs :**
  - Enfant (≥ 7 ans) : 5 000 F CFA
  - Adulte : 10 000 F CFA

### F. CIRCUIT AU CŒUR DE LA PÊCHE TRADITIONNELLE
- **Durée :** 1h30 à 2h
- **Description :** Vivez une expérience authentique aux côtés des pêcheurs de Grand-Popo et apprenez leurs méthodes ancestrales
- **Activités :**
  - Pratique des techniques de pêche : Pêche à la Seine, Avec filet Magnan, Avec nasses ou casiers et canne à pêche
  - Pause dégustation : noix de coco
- **Tarif :** Prix unique : 12 500 F CFA par personne (pour ≥ 5 personnes)

### G. CIRCUIT VODOUN ET TRADITIONS ANCESTRALES
- **Durée :** 2h30 à 3h
- **Description :** Approfondissez votre compréhension de la spiritualité locale et participez à des rites respectueux des croyances
- **Activités :**
  - Clarification sur la spiritualité Vodoun, le Fâ (géomancie) et les divinités
  - Initiation au culte des ancêtres à travers libation, prière et offrandes
- **Tarifs :**
  - 1-4 personnes : 12 500 F CFA/personne
  - Enfant (≥ 7 ans) : demi-tarif
  - ≥ 5 personnes : 8 000 F CFA/personne

### H. CIRCUIT LA DANSE DU GUERRIER SACRÉ
- **Durée :** 1h30 à 2h
- **Description :** Découvrez l'intensité et la puissance de la divinité Kokou à travers ses adeptes et leurs objets rituels
- **Activités :**
  - Explication de la danse des adeptes de la divinité Kokou
  - Observation d'une démonstration de protection spirituelle par la divinité Kokou à travers l'utilisation de plusieurs objets
- **Tarif :** Groupe (1-10 pers.) : 80 000 F CFA

---

## 🏗️ Plan de Développement Technique

### 1. Structure Backend (Nest.js)

#### A. Modèles de Données
```typescript
// Circuit Entity
interface Circuit {
  id: string;
  nom: string;
  description: string;
  duree: string;
  activites: string[];
  tarifs: Tarif[];
  groupeMin?: number;
  groupeMax?: number;
  categories: string[];
}

// Tarif Entity
interface Tarif {
  type: 'adulte' | 'enfant' | 'bateau' | 'groupe';
  prix: number;
  condition?: string;
}

// Réservation Entity
interface Reservation {
  id: string;
  circuitId: string;
  clientNom: string;
  clientEmail: string;
  clientTelephone: string;
  nombreAdultes: number;
  nombreEnfants: number;
  dateReservation: Date;
  montantTotal: number;
  statut: 'en_attente' | 'confirmee' | 'annulee';
}
```

#### B. Endpoints API Nécessaires
```typescript
// Circuits Controller
GET /api/circuits - Récupérer tous les circuits
GET /api/circuits/:id - Récupérer un circuit spécifique
GET /api/circuits/filter?categorie=spirituel&duree=courte - Filtrer circuits

// Réservations Controller
POST /api/reservations - Créer une réservation
GET /api/reservations/:id - Récupérer une réservation
PUT /api/reservations/:id/statut - Mettre à jour statut

// Factures Controller
POST /api/factures/generer - Générer une facture PDF
GET /api/factures/:reservationId - Télécharger facture
```

### 2. Structure Frontend (Tailwind CSS)

#### A. Page Circuits (/circuits)
```html
<!-- Layout Principal -->
<div class="min-h-screen bg-gray-50">
  <!-- Header avec filtres -->
  <header class="bg-white shadow-sm border-b">
    <div class="max-w-7xl mx-auto px-4 py-6">
      <h1>Circuits Disponibles</h1>
      <!-- Barre de filtres -->
    </div>
  </header>
  
  <!-- Grille des circuits -->
  <main class="max-w-7xl mx-auto px-4 py-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Cards des circuits -->
    </div>
  </main>
</div>
```

#### B. Système de Filtres
```javascript
// Catégories de filtres
const filtres = {
  categories: [
    'Nature & Biodiversité',
    'Culture & Spiritualité', 
    'Artisanat & Traditions',
    'Histoire & Patrimoine'
  ],
  durees: [
    'Courte (< 2h)',
    'Moyenne (2-4h)',
    'Longue (> 4h)'
  ],
  prix: [
    'Économique (< 10 000 F)',
    'Standard (10 000 - 20 000 F)',
    'Premium (> 20 000 F)'
  ]
};
```

### 3. Composants Principaux

#### A. Composant Circuit Card
- Image du circuit
- Titre et description courte
- Durée et tarif à partir de
- Badges catégories
- Bouton "Réserver maintenant"

#### B. Composant Filtres
- Filtres par catégorie
- Filtres par durée
- Filtres par prix
- Recherche textuelle
- Bouton reset filtres

#### C. Composant Modal Réservation
- Sélection nombre de participants
- Calcul automatique du total
- Formulaire client (nom, email, téléphone)
- Validation et soumission

### 4. Génération Automatique de Factures

#### A. Template Facture (basé sur le PDF fourni)
```typescript
interface FactureData {
  numero: string; // Format: XXX/MT/24
  date: string;
  client: {
    nom: string;
    email: string;
    telephone: string;
  };
  circuit: {
    type: string;
    nombre_visiteurs: number;
    designations: string[];
    prix_unitaire: number;
    montant: number;
  };
  total: number;
}
```

#### B. Service de Génération PDF
```typescript
// Utiliser une librairie comme jsPDF ou Puppeteer
generateInvoice(reservationId: string): Promise<Buffer>
```

---

## 🎨 Design et UX avec Tailwind

### 1. Palette de Couleurs Suggérée
```css
/* Couleurs principales */
--primary: #059669; /* Vert nature */
--secondary: #0284c7; /* Bleu océan */
--accent: #d97706; /* Orange coucher de soleil */
--neutral: #374151; /* Gris foncé */
```

### 2. Composants Tailwind Clés
- Cards avec `bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow`
- Buttons avec `bg-primary text-white px-6 py-3 rounded-md font-semibold hover:bg-primary-600`
- Badges avec `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium`

### 3. Responsive Design
- Mobile-first avec breakpoints Tailwind
- Grid adaptatif : `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Navigation mobile avec menu hamburger

---

## 🔧 Fonctionnalités Spécifiques

### 1. Calcul Automatique des Prix
```javascript
// Logique de calcul selon le circuit
function calculerTotal(circuit, nombreAdultes, nombreEnfants) {
  let total = 0;
  
  // Cas spéciaux (Zangbeto, Danse du Guerrier)
  if (circuit.tarifGroupe) {
    total = circuit.tarifGroupe;
  } else {
    total = (nombreAdultes * circuit.prixAdulte) + 
           (nombreEnfants * circuit.prixEnfant);
    
    // Ajout bateau si nécessaire
    if (circuit.bateauRequis) {
      total += circuit.prixBateau;
    }
  }
  
  return total;
}
```

### 2. Système de Réservation en Temps Réel
- Validation côté client et serveur
- Confirmation par email automatique
- Génération immédiate de la facture PDF
- Statut de réservation trackable

### 3. Interface Admin (Bonus)
- Gestion des circuits (CRUD)
- Suivi des réservations
- Statistiques de fréquentation
- Export des données

---

## 📱 Étapes d'Implémentation

### Phase 1 : Backend (Semaine 1-2)
1. Création des entités Nest.js
2. Configuration base de données
3. Développement des APIs
4. Tests des endpoints

### Phase 2 : Frontend Base (Semaine 3)
1. Page circuits avec grille
2. Composants de base
3. Intégration API
4. Responsive design

### Phase 3 : Filtres et Recherche (Semaine 4)
1. Implémentation des filtres
2. Fonction de recherche
3. Tri des résultats
4. Performance et optimisation

### Phase 4 : Réservation (Semaine 5)
1. Modal de réservation
2. Validation formulaire
3. Calcul des prix
4. Intégration paiement (si souhaité)

### Phase 5 : Facturation (Semaine 6)
1. Service génération PDF
2. Template facture
3. Email automatique
4. Stockage et archivage

### Phase 6 : Tests et Déploiement (Semaine 7)
1. Tests utilisateurs
2. Corrections bugs
3. Optimisations finales
4. Déploiement production

---

## 🚀 Points d'Attention Techniques

1. **Performance** : Lazy loading des images, pagination des circuits
2. **Sécurité** : Validation des données, protection CSRF
3. **SEO** : URLs propres, meta descriptions
4. **Analytics** : Tracking des conversions
5. **Maintenance** : Logs, monitoring, backups

Ce guide vous donne une roadmap complète pour intégrer efficacement vos circuits dans votre site existant avec toutes les fonctionnalités demandées.