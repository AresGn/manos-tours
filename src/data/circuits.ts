// Données des circuits Manos Tours
// Basé sur guide_circuits_manos.md

import { Circuit, CircuitCategory, CalculPrixParams, CalculPrixResult } from '@/types/circuits';

// Métadonnées des catégories
export const categoriesMetadata = {
  'nature-biodiversite': {
    nom: 'Nature & Biodiversité',
    description: 'Explorez la richesse naturelle de Grand-Popo',
    icon: '🌿',
    color: 'from-green-600 to-emerald-600'
  },
  'culture-spiritualite': {
    nom: 'Culture & Spiritualité',
    description: 'Découvrez les traditions Vodoun et spirituelles',
    icon: '🎭',
    color: 'from-purple-600 to-indigo-600'
  },
  'artisanat-traditions': {
    nom: 'Artisanat & Traditions',
    description: 'Apprenez les savoir-faire ancestraux',
    icon: '🎨',
    color: 'from-orange-600 to-red-600'
  },
  'histoire-patrimoine': {
    nom: 'Histoire & Patrimoine',
    description: 'Voyagez à travers les époques',
    icon: '🏛️',
    color: 'from-blue-600 to-cyan-600'
  }
} as const;

export const circuits: Circuit[] = [
  {
    id: 'biodiversite',
    nom: 'Circuit Biodiversité',
    slug: 'circuit-biodiversite',
    description: 'Explorez la nature luxuriante de Grand-Popo entre mangrove, tortues et oiseaux migrateurs',
    descriptionLongue: 'Plongez au cœur de la biodiversité exceptionnelle de Grand-Popo lors de cette aventure aquatique unique. Découvrez l\'écosystème fragile de la mangrove, observez les tortues marines dans leur habitat naturel, et assistez aux techniques ancestrales de production de sel artisanal. Cette expérience vous connecte intimement avec la nature préservée du littoral béninois.',
    duree: '2h30 à 3h',
    dureeType: 'moyenne',
    activites: [
      'Visite de l\'écloserie de tortues marines',
      'Exploration de la mangrove avec ses palétuviers',
      'Découverte de l\'île de production de sel artisanal',
      'Visite de l\'embouchure du fleuve Roy'
    ],
    tarifs: [
      { type: 'bateau', prix: 35000, description: 'Bateau motorisé obligatoire' },
      { type: 'enfant', prix: 5000, condition: '≥ 7 ans' },
      { type: 'adulte', prix: 10000 }
    ],
    categories: ['nature-biodiversite'],
    difficulte: 'Facile',
    highlights: [
      'Observation des tortues marines',
      'Écosystème unique de mangrove',
      'Techniques traditionnelles de production de sel',
      'Biodiversité exceptionnelle'
    ],
    included: [
      'Guide expert local',
      'Transport en bateau motorisé',
      'Équipement de sécurité',
      'Explications détaillées de l\'écosystème'
    ],
    images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800', 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'],
    imageHero: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200',
    bateauRequis: true,
    ageMinimum: 7,
    pointDepart: 'Embarcadère de Grand-Popo',
    saisonOptimale: ['Novembre', 'Décembre', 'Janvier', 'Février', 'Mars'],
    equipementRecommande: ['Chapeau', 'Crème solaire', 'Appareil photo étanche']
  },
  {
    id: 'socio-economique',
    nom: 'Circuit Activité Socio-Économique',
    slug: 'circuit-socio-economique',
    description: 'Découvrez les gestes ancestraux des artisans, de la fabrication du caramel à l\'extraction d\'huile de coco',
    descriptionLongue: 'Immergez-vous dans l\'économie traditionnelle de Grand-Popo en participant aux activités artisanales séculaires. Apprenez les secrets de la fabrication du caramel traditionnel, maîtrisez les techniques d\'extraction d\'huile de coco, et découvrez l\'art du tissage de nattes en jonc. Cette expérience authentique vous connecte aux savoir-faire transmis de génération en génération.',
    duree: '4h',
    dureeType: 'longue',
    activites: [
      'Atelier de fabrication traditionnelle de caramel avec démonstration et dégustation',
      'Techniques ancestrales d\'extraction d\'huile de coco',
      'Apprentissage du tissage de natte en jonc',
      'Pause déjeuner traditionnel'
    ],
    tarifs: [
      { type: 'bateau', prix: 35000, description: 'Transport en bateau motorisé' },
      { type: 'enfant', prix: 6000, condition: '≥ 7 ans' },
      { type: 'adulte', prix: 12500 }
    ],
    categories: ['artisanat-traditions'],
    difficulte: 'Facile',
    highlights: [
      'Fabrication de caramel traditionnel',
      'Extraction d\'huile de coco ancestrale',
      'Tissage de nattes en jonc',
      'Déjeuner traditionnel inclus'
    ],
    included: [
      'Guide artisan expert',
      'Matériaux pour les ateliers',
      'Dégustation de caramel',
      'Déjeuner traditionnel',
      'Transport en bateau'
    ],
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'],
    imageHero: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200',
    bateauRequis: true,
    ageMinimum: 7,
    pointDepart: 'Village artisanal de Grand-Popo',
    equipementRecommande: ['Vêtements confortables', 'Appareil photo']
  },
  {
    id: 'fromage-peulh',
    nom: 'Route du Fromage Peulh / Immersion Pastorale',
    slug: 'route-fromage-peulh',
    description: 'Vivez l\'authenticité pastorale en participant à la traite et à la fabrication traditionnelle du fromage',
    descriptionLongue: 'Découvrez l\'art pastoral des communautés Peulh dans une expérience immersive unique. Participez à la traite manuelle des vaches, apprenez les techniques traditionnelles de coagulation du lait avec le Calotropis procera, et assistez au processus d\'égouttage dans des paniers artisanaux. Cette aventure authentique se termine par une dégustation de fromage frais.',
    duree: '2h à 2h30',
    dureeType: 'moyenne',
    activites: [
      'Visite de l\'étable à vaches traditionnelle',
      'Participation à la traite manuelle',
      'Filtration et coagulation du lait avec Calotropis procera',
      'Observation de l\'égouttage avec paniers artisanaux',
      'Dégustation de fromage frais'
    ],
    tarifs: [
      { type: 'enfant', prix: 5000, condition: '≥ 7 ans' },
      { type: 'adulte', prix: 10000 }
    ],
    categories: ['artisanat-traditions'],
    difficulte: 'Facile',
    highlights: [
      'Traite manuelle authentique',
      'Techniques traditionnelles Peulh',
      'Fabrication de fromage artisanal',
      'Dégustation de produits frais'
    ],
    included: [
      'Guide pastoral expert',
      'Participation aux activités',
      'Dégustation de fromage',
      'Explications culturelles'
    ],
    images: ['https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800', 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800'],
    imageHero: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200',
    bateauRequis: false,
    ageMinimum: 7,
    pointDepart: 'Campement pastoral',
    equipementRecommande: ['Chaussures fermées', 'Vêtements pratiques']
  },
  {
    id: 'zangbeto-live',
    nom: 'Zangbeto Live / Voyage au Cœur du Vodoun',
    slug: 'zangbeto-live',
    description: 'Plongez dans le mystère et l\'énergie du Vodoun à travers les danses et percussions du Zangbeto',
    descriptionLongue: 'Entrez dans l\'univers mystique du Vodoun lors de cette expérience spirituelle intense. Découvrez le rôle sacré du Zangbeto dans la société africaine traditionnelle, assistez à des danses rituelles spectaculaires avec rotations hypnotiques, et laissez-vous emporter par l\'ambiance musicale envoûtante des percussions ancestrales.',
    duree: '1h30',
    dureeType: 'courte',
    activites: [
      'Introduction approfondie à la culture Vodoun',
      'Clarification sur le rôle du Zangbeto dans la société',
      'Prestations de danses rituelles spectaculaires',
      'Rotations mystiques et démonstrations',
      'Ambiance musicale avec percussions traditionnelles'
    ],
    tarifs: [
      { type: 'groupe', prix: 70000, condition: '1 à 6 personnes', description: 'Prix unique pour le groupe' }
    ],
    groupeMin: 1,
    groupeMax: 6,
    categories: ['culture-spiritualite'],
    difficulte: 'Facile',
    highlights: [
      'Expérience spirituelle authentique',
      'Danses rituelles du Zangbeto',
      'Percussions traditionnelles',
      'Immersion culturelle profonde'
    ],
    included: [
      'Guide spirituel expert',
      'Cérémonie complète',
      'Explications culturelles',
      'Ambiance musicale'
    ],
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'],
    imageHero: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200',
    bateauRequis: false,
    pointDepart: 'Temple Vodoun de Grand-Popo',
    recommandations: [
      'Respect des traditions spirituelles',
      'Tenue vestimentaire appropriée',
      'Ouverture d\'esprit recommandée'
    ]
  },
  {
    id: 'balade-epoques',
    nom: 'Circuit Balade à Travers les Époques à Grand-Popo',
    slug: 'balade-epoques',
    description: 'Explorez le passé colonial et vernaculaire de Grand-Popo en découvrant ses monuments et lieux de vie d\'hier à aujourd\'hui',
    descriptionLongue: 'Voyagez dans le temps à travers les rues de Grand-Popo et découvrez les traces de son riche passé colonial. Explorez le pont métallique historique, plongez dans l\'ambiance authentique du marché du samedi, et visitez la zone administrative coloniale d\'Apoutagbo. Cette balade historique révèle les strates temporelles de cette ville fascinante.',
    duree: '3h',
    dureeType: 'moyenne',
    activites: [
      'Visite du pont métallique colonial historique',
      'Exploration du marché du samedi traditionnel',
      'Découverte de la zone administrative coloniale d\'Apoutagbo (Gbecon)',
      'Récits historiques et anecdotes locales'
    ],
    tarifs: [
      { type: 'enfant', prix: 5000, condition: '≥ 7 ans' },
      { type: 'adulte', prix: 10000 }
    ],
    categories: ['histoire-patrimoine'],
    difficulte: 'Facile',
    highlights: [
      'Architecture coloniale préservée',
      'Marché traditionnel authentique',
      'Histoire vivante de Grand-Popo',
      'Patrimoine architectural unique'
    ],
    included: [
      'Guide historien local',
      'Accès aux sites historiques',
      'Récits et anecdotes',
      'Documentation historique'
    ],
    images: ['https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800', 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800'],
    imageHero: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1200',
    bateauRequis: false,
    ageMinimum: 7,
    pointDepart: 'Centre historique de Grand-Popo',
    equipementRecommande: ['Chaussures de marche', 'Appareil photo', 'Carnet de notes']
  },
  {
    id: 'peche-traditionnelle',
    nom: 'Circuit au Cœur de la Pêche Traditionnelle',
    slug: 'peche-traditionnelle',
    description: 'Vivez une expérience authentique aux côtés des pêcheurs de Grand-Popo et apprenez leurs méthodes ancestrales',
    descriptionLongue: 'Rejoignez les pêcheurs locaux dans leur quotidien et maîtrisez les techniques de pêche traditionnelles transmises depuis des générations. Apprenez la pêche à la Seine, manipulez les filets Magnan, découvrez l\'usage des nasses et casiers, et perfectionnez-vous à la canne à pêche. Cette aventure aquatique se termine par une pause rafraîchissante avec dégustation de noix de coco.',
    duree: '1h30 à 2h',
    dureeType: 'courte',
    activites: [
      'Apprentissage de la pêche à la Seine',
      'Manipulation des filets Magnan traditionnels',
      'Utilisation des nasses et casiers artisanaux',
      'Pratique de la pêche à la canne',
      'Pause dégustation de noix de coco fraîche'
    ],
    tarifs: [
      { type: 'unique', prix: 12500, condition: '≥ 5 personnes', description: 'Prix par personne pour groupe minimum 5' }
    ],
    groupeMin: 5,
    categories: ['nature-biodiversite'],
    difficulte: 'Modéré',
    highlights: [
      'Techniques de pêche ancestrales',
      'Immersion avec pêcheurs locaux',
      'Apprentissage pratique',
      'Dégustation de noix de coco'
    ],
    included: [
      'Guide pêcheur expert',
      'Équipement de pêche traditionnel',
      'Noix de coco fraîche',
      'Techniques pratiques'
    ],
    images: ['https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800', 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800'],
    imageHero: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200',
    bateauRequis: false,
    pointDepart: 'Plage des pêcheurs de Grand-Popo',
    equipementRecommande: ['Vêtements pouvant être mouillés', 'Chaussures d\'eau', 'Serviette']
  },
  {
    id: 'vodoun-traditions',
    nom: 'Circuit Vodoun et Traditions Ancestrales',
    slug: 'vodoun-traditions',
    description: 'Approfondissez votre compréhension de la spiritualité locale et participez à des rites respectueux des croyances',
    descriptionLongue: 'Plongez dans la richesse spirituelle du Vodoun lors de cette expérience culturelle profonde. Découvrez les mystères du Fâ (géomancie), comprenez le panthéon des divinités, et participez respectueusement à l\'initiation au culte des ancêtres à travers libations, prières et offrandes traditionnelles.',
    duree: '2h30 à 3h',
    dureeType: 'moyenne',
    activites: [
      'Clarification approfondie sur la spiritualité Vodoun',
      'Introduction au Fâ (géomancie traditionnelle)',
      'Découverte du panthéon des divinités',
      'Initiation respectueuse au culte des ancêtres',
      'Participation aux libations, prières et offrandes'
    ],
    tarifs: [
      { type: 'adulte', prix: 12500, condition: '1-4 personnes' },
      { type: 'enfant', prix: 6250, condition: '≥ 7 ans', description: 'Demi-tarif' },
      { type: 'adulte', prix: 8000, condition: '≥ 5 personnes' }
    ],
    categories: ['culture-spiritualite'],
    difficulte: 'Modéré',
    highlights: [
      'Spiritualité Vodoun authentique',
      'Géomancie traditionnelle (Fâ)',
      'Culte des ancêtres',
      'Rites respectueux et éducatifs'
    ],
    included: [
      'Guide spirituel certifié',
      'Matériel pour les rites',
      'Explications culturelles approfondies',
      'Respect des traditions'
    ],
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'],
    imageHero: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200',
    bateauRequis: false,
    ageMinimum: 7,
    pointDepart: 'Temple Vodoun traditionnel',
    recommandations: [
      'Respect absolu des traditions',
      'Tenue vestimentaire appropriée',
      'Ouverture d\'esprit essentielle'
    ]
  },
  {
    id: 'guerrier-sacre',
    nom: 'Circuit la Danse du Guerrier Sacré',
    slug: 'danse-guerrier-sacre',
    description: 'Découvrez l\'intensité et la puissance de la divinité Kokou à travers ses adeptes et leurs objets rituels',
    descriptionLongue: 'Assistez à une démonstration spirituelle intense dédiée à Kokou, divinité guerrière du panthéon Vodoun. Observez la puissance des adeptes en transe, découvrez les objets rituels sacrés, et ressentez l\'énergie protectrice de cette divinité à travers des démonstrations de protection spirituelle authentiques.',
    duree: '1h30 à 2h',
    dureeType: 'courte',
    activites: [
      'Explication détaillée de la divinité Kokou',
      'Observation des danses des adeptes en transe',
      'Découverte des objets rituels sacrés',
      'Démonstration de protection spirituelle',
      'Utilisation rituelle d\'objets traditionnels'
    ],
    tarifs: [
      { type: 'groupe', prix: 80000, condition: '1-10 personnes', description: 'Prix unique pour le groupe' }
    ],
    groupeMin: 1,
    groupeMax: 10,
    categories: ['culture-spiritualite'],
    difficulte: 'Difficile',
    highlights: [
      'Divinité guerrière Kokou',
      'Transes spirituelles authentiques',
      'Objets rituels sacrés',
      'Protection spirituelle'
    ],
    included: [
      'Guide spirituel expert',
      'Cérémonie complète',
      'Démonstrations rituelles',
      'Explications approfondies'
    ],
    images: ['https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800'],
    imageHero: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1200',
    bateauRequis: false,
    pointDepart: 'Temple de Kokou',
    recommandations: [
      'Expérience spirituelle intense',
      'Respect absolu requis',
      'Sensibilité spirituelle recommandée',
      'Non recommandé aux personnes sensibles'
    ]
  }
];

// Fonction utilitaire pour calculer le prix d'un circuit
export function calculerPrixCircuit({ circuit, nombreAdultes, nombreEnfants }: CalculPrixParams): CalculPrixResult {
  let prixAdultes = 0;
  let prixEnfants = 0;
  let prixBateau = 0;
  let prixGroupe = 0;
  let montantTotal = 0;
  const detailsCalcul: string[] = [];

  // Cas spéciaux avec tarif groupe unique
  const tarifGroupe = circuit.tarifs.find(t => t.type === 'groupe');
  if (tarifGroupe) {
    prixGroupe = tarifGroupe.prix;
    montantTotal = prixGroupe;
    detailsCalcul.push(`Tarif groupe: ${prixGroupe.toLocaleString()} F CFA`);
    return { prixAdultes, prixEnfants, prixBateau, prixGroupe, montantTotal, detailsCalcul };
  }

  // Calcul standard adultes/enfants
  const tarifAdulte = circuit.tarifs.find(t => t.type === 'adulte');
  const tarifEnfant = circuit.tarifs.find(t => t.type === 'enfant');
  const tarifBateau = circuit.tarifs.find(t => t.type === 'bateau');

  if (tarifAdulte) {
    prixAdultes = nombreAdultes * tarifAdulte.prix;
    montantTotal += prixAdultes;
    if (nombreAdultes > 0) {
      detailsCalcul.push(`${nombreAdultes} adulte(s) × ${tarifAdulte.prix.toLocaleString()} = ${prixAdultes.toLocaleString()} F CFA`);
    }
  }

  if (tarifEnfant && nombreEnfants > 0) {
    prixEnfants = nombreEnfants * tarifEnfant.prix;
    montantTotal += prixEnfants;
    detailsCalcul.push(`${nombreEnfants} enfant(s) × ${tarifEnfant.prix.toLocaleString()} = ${prixEnfants.toLocaleString()} F CFA`);
  }

  if (tarifBateau && circuit.bateauRequis) {
    prixBateau = tarifBateau.prix;
    montantTotal += prixBateau;
    detailsCalcul.push(`Bateau motorisé: ${prixBateau.toLocaleString()} F CFA`);
  }

  return { prixAdultes, prixEnfants, prixBateau, prixGroupe, montantTotal, detailsCalcul };
}

// Fonction pour obtenir les circuits par catégorie
export function getCircuitsByCategory(category: CircuitCategory): Circuit[] {
  return circuits.filter(circuit => circuit.categories.includes(category));
}

// Fonction pour obtenir un circuit par son slug
export function getCircuitBySlug(slug: string): Circuit | undefined {
  return circuits.find(circuit => circuit.slug === slug);
}

// Fonction pour obtenir un circuit par son ID
export function getCircuitById(id: string): Circuit | undefined {
  return circuits.find(circuit => circuit.id === id);
}
