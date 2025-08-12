import { Metadata } from 'next';
import CategoryPageClient from '@/components/experiences/CategoryPageClient';

export const metadata: Metadata = {
  title: 'Artisanat & Traditions | Circuits Manos Tours Grand-Popo',
  description: 'Apprenez les savoir-faire ancestraux de Grand-Popo : fabrication de caramel, extraction d\'huile de coco, fromage Peulh et tissage traditionnel.',
  keywords: 'artisanat Grand-Popo, traditions Bénin, caramel traditionnel, huile de coco, fromage Peulh, tissage',
  openGraph: {
    title: 'Circuits Artisanat & Traditions à Grand-Popo | Manos Tours',
    description: 'Découvrez les techniques artisanales ancestrales et les savoir-faire traditionnels de Grand-Popo.',
    images: ['/images/circuits/socio-economique-hero.jpg'],
  },
};

export default function ArtisanatTraditionsPage() {
  return <CategoryPageClient category="artisanat-traditions" />;
}
