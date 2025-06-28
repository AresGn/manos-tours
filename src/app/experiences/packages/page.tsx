import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Packages Complets | Manos Tours Grand-Popo',
  description: 'Séjours tout inclus à Grand-Popo avec Manos Tours. Hébergement, repas, activités et transport inclus pour des vacances sans souci au Bénin.',
  keywords: 'packages Grand-Popo, séjour tout inclus Bénin, vacances complètes, Manos Tours',
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-white mb-6 font-playfair">
          Packages Complets
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Cette page est en cours de développement. Découvrez bientôt nos packages tout inclus pour des séjours sans souci à Grand-Popo.
        </p>
        <button className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg">
          Voir les Packages
        </button>
      </div>
    </div>
  );
}
