import { Metadata } from 'next';
import ExperiencesClient from '@/components/experiences/ExperiencesClient';

export const metadata: Metadata = {
  title: 'Expériences Sur-Mesure | Manos Tours Grand-Popo',
  description: 'Découvrez nos expériences authentiques à Grand-Popo : tours privés, écotourisme, culture Vodun et aventures personnalisées avec votre guide expert local.',
  keywords: 'expériences Grand-Popo, tours privés Bénin, écotourisme, culture Vodun, guide local, aventures sur-mesure',
  openGraph: {
    title: 'Expériences Sur-Mesure à Grand-Popo | Manos Tours',
    description: 'Vivez des expériences uniques à Grand-Popo avec Manos, votre guide expert local. Tours privés, écotourisme et découvertes culturelles authentiques.',
    images: ['/images/hero-poster.jpg'],
  },
};

export default function ExperiencesPage() {
  return <ExperiencesClient />;
}
