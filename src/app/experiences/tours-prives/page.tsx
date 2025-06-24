import { Metadata } from 'next';
import ToursPrivesClient from '@/components/experiences/ToursPrivesClient';

export const metadata: Metadata = {
  title: 'Tours Privés & Groupes | Manos Tours Grand-Popo',
  description: 'Découvrez Grand-Popo avec nos tours privés personnalisés et nos excursions en groupe. Guide expert local, expériences authentiques et service sur-mesure.',
  keywords: 'tours privés Grand-Popo, excursions groupe Bénin, guide privé, tours personnalisés, Manos Tours',
  openGraph: {
    title: 'Tours Privés & Groupes à Grand-Popo | Manos Tours',
    description: 'Explorez Grand-Popo avec nos tours privés sur-mesure et nos excursions en groupe. Manos, votre guide expert local.',
    images: ['/images/Guide_Sites/manos-1-2.jpg'],
  },
};

export default function ToursPrivesPage() {
  return <ToursPrivesClient />;
}
