// Types et interfaces pour le système de circuits Manos Tours
// Basé sur guide_circuits_manos.md

export type TarifType = 'adulte' | 'enfant' | 'bateau' | 'groupe' | 'unique';

export interface Tarif {
  type: TarifType;
  prix: number;
  condition?: string;
  description?: string;
}

export type CircuitCategory = 
  | 'nature-biodiversite'
  | 'culture-spiritualite' 
  | 'artisanat-traditions'
  | 'histoire-patrimoine';

export type CircuitDifficulty = 'Facile' | 'Modéré' | 'Difficile';

export type CircuitDuration = 'courte' | 'moyenne' | 'longue';

export interface Circuit {
  id: string;
  nom: string;
  slug: string;
  description: string;
  descriptionLongue: string;
  duree: string;
  dureeType: CircuitDuration;
  activites: string[];
  tarifs: Tarif[];
  groupeMin?: number;
  groupeMax?: number;
  categories: CircuitCategory[];
  difficulte: CircuitDifficulty;
  highlights: string[];
  included: string[];
  notIncluded?: string[];
  schedule?: {
    time: string;
    activity: string;
  }[];
  images: string[];
  imageHero: string;
  bateauRequis?: boolean;
  ageMinimum?: number;
  recommandations?: string[];
  saisonOptimale?: string[];
  pointDepart: string;
  equipementFourni?: string[];
  equipementRecommande?: string[];
}

export interface ReservationData {
  circuitId: string;
  nombreAdultes: number;
  nombreEnfants: number;
  dateReservation: Date;
  heurePreferee?: string;
  informationsPersonnelles: {
    prenom: string;
    nom: string;
    email: string;
    telephone: string;
    pays: string;
  };
  demandesSpeciales?: string;
  montantTotal: number;
  detailsPrix: {
    prixAdultes: number;
    prixEnfants: number;
    prixBateau?: number;
    prixGroupe?: number;
  };
}

export interface Reservation extends ReservationData {
  id: string;
  numeroReservation: string;
  statut: 'en_attente' | 'confirmee' | 'annulee' | 'terminee';
  dateCreation: Date;
  dateModification?: Date;
  notes?: string;
}

export interface CircuitFilter {
  categories?: CircuitCategory[];
  dureeType?: CircuitDuration[];
  prixMin?: number;
  prixMax?: number;
  difficulte?: CircuitDifficulty[];
  recherche?: string;
  bateauRequis?: boolean;
}

export interface CircuitStats {
  totalCircuits: number;
  circuitsParCategorie: Record<CircuitCategory, number>;
  prixMoyen: number;
  dureeMoyenne: string;
}

// Utilitaires pour les calculs de prix
export interface CalculPrixParams {
  circuit: Circuit;
  nombreAdultes: number;
  nombreEnfants: number;
}

export interface CalculPrixResult {
  prixAdultes: number;
  prixEnfants: number;
  prixBateau?: number;
  prixGroupe?: number;
  montantTotal: number;
  detailsCalcul: string[];
}
