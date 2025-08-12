import { Metadata } from 'next';
import CategoryPageClient from '@/components/experiences/CategoryPageClient';

export const metadata: Metadata = {
  title: 'Histoire & Patrimoine | Circuits Manos Tours Grand-Popo',
  description: 'Voyagez à travers les époques de Grand-Popo : architecture coloniale, pont métallique historique, marché traditionnel et patrimoine préservé.',
  keywords: 'histoire Grand-Popo, patrimoine Bénin, architecture coloniale, pont métallique, marché traditionnel',
  openGraph: {
    title: 'Circuits Histoire & Patrimoine à Grand-Popo | Manos Tours',
    description: 'Explorez le riche passé colonial et vernaculaire de Grand-Popo à travers ses monuments historiques.',
    images: ['/images/circuits/epoques-hero.jpg'],
  },
};

export default function HistoirePatrimoinePage() {
  return <CategoryPageClient category="histoire-patrimoine" />;
}
