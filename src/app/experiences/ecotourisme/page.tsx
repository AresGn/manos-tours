import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Écotourisme & Éthique | Manos Tours Grand-Popo',
  description: 'Découvrez Grand-Popo de manière responsable avec nos expériences d\'écotourisme éthique. Préservation de l\'environnement et soutien aux communautés locales.',
  keywords: 'écotourisme Grand-Popo, tourisme éthique Bénin, voyage responsable, conservation nature',
};

export default function EcotourismePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">
          Écotourisme & Éthique
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Cette page est en cours de développement. Découvrez bientôt nos expériences d'écotourisme responsable à Grand-Popo.
        </p>
        <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
          En Savoir Plus
        </button>
      </div>
    </div>
  );
}
