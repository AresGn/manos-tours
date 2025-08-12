import { Metadata } from 'next';
import CategoryPageClient from '@/components/experiences/CategoryPageClient';

export const metadata: Metadata = {
  title: 'Culture & Spiritualité | Circuits Manos Tours Grand-Popo',
  description: 'Plongez dans la spiritualité Vodoun et les traditions ancestrales de Grand-Popo : Zangbeto, culte des ancêtres, divinité Kokou avec Manos.',
  keywords: 'culture Vodoun, spiritualité Bénin, Zangbeto, traditions ancestrales, Kokou, Fâ géomancie',
  openGraph: {
    title: 'Circuits Culture & Spiritualité à Grand-Popo | Manos Tours',
    description: 'Découvrez la richesse spirituelle du Vodoun et les traditions sacrées de Grand-Popo.',
    images: ['/images/circuits/zangbeto-hero.jpg'],
  },
};

export default function CultureSpiritualitePage() {
  return <CategoryPageClient category="culture-spiritualite" />;
}
