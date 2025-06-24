'use client';

import React from 'react';
import GrandPopoIntro from './GrandPopoIntro';
import HistoryTimeline from './HistoryTimeline';
import CultureSection from './CultureSection';
import { motion } from 'framer-motion';

export default function HistoireClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Introduction cinématique avec carte */}
      <GrandPopoIntro />

      {/* Section Histoire & Culture */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-playfair">
              Histoire & Culture
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Plongez dans l'histoire du royaume Xwlà, des comptoirs français aux traditions vodoun
              qui font l'âme authentique de cette "perle du sud-ouest béninois".
            </p>
          </motion.div>
        </div>
      </section>

      {/* Histoire Vivante */}
      <HistoryTimeline />

      {/* Culture Authentique */}
      <CultureSection />
    </div>
  );
}
