import { Metadata } from 'next';
import CategoryPageClient from '@/components/experiences/CategoryPageClient';

export const metadata: Metadata = {
  title: 'Nature & Biodiversité | Circuits Manos Tours Grand-Popo',
  description: 'Explorez la richesse naturelle de Grand-Popo : mangroves, tortues marines, pêche traditionnelle et écosystèmes préservés avec Manos, votre guide expert.',
  keywords: 'nature Grand-Popo, biodiversité Bénin, mangrove, tortues marines, pêche traditionnelle, écotourisme',
  openGraph: {
    title: 'Circuits Nature & Biodiversité à Grand-Popo | Manos Tours',
    description: 'Découvrez la nature exceptionnelle de Grand-Popo : mangroves, tortues marines et techniques de pêche ancestrales.',
    images: ['/images/circuits/biodiversite-hero.jpg'],
  },
};

export default function NatureBiodiversitePage() {
  return <CategoryPageClient category="nature-biodiversite" />;
}
