import Link from 'next/link';
import { ArrowLeft, Search } from 'lucide-react';

export default function CircuitNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
      <div className="text-center max-w-2xl mx-auto px-4">
        <div className="text-8xl mb-8">🗺️</div>
        <h1 className="text-4xl font-bold text-white mb-6 font-playfair">
          Circuit non trouvé
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Désolé, le circuit que vous recherchez n'existe pas ou a été déplacé.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/experiences"
            className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 inline-flex items-center gap-2"
          >
            <ArrowLeft className="w-5 h-5" />
            Voir tous les circuits
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 inline-flex items-center gap-2"
          >
            <Search className="w-5 h-5" />
            Demander de l'aide
          </Link>
        </div>
      </div>
    </div>
  );
}
