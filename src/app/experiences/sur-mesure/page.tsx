import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expériences Sur-Mesure | Manos Tours Grand-Popo',
  description: 'Créez votre expérience unique à Grand-Popo. Manos conçoit des aventures personnalisées selon vos envies, votre budget et vos centres d\'intérêt.',
  keywords: 'expérience sur-mesure Grand-Popo, voyage personnalisé Bénin, aventure unique, Manos Tours',
};

export default function SurMesurePage() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 font-playfair">
          Expériences Sur-Mesure
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Cette page est en cours de développement. Contactez Manos directement pour créer votre expérience unique à Grand-Popo.
        </p>
        <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">
          Contacter Manos
        </button>
      </div>
    </div>
  );
}
