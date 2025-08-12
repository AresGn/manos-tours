"use client";

import React from "react";
import { motion } from "framer-motion";
import { CircularTestimonials } from "./circular-testimonials";
import { Sparkles } from "lucide-react";

// Données des témoignages adaptées pour le nouveau composant
const testimonials = [
  {
    quote: "Notre voyage au Bénin avec Manos Tours a été absolument magique. L'expertise locale de Manos nous a permis de découvrir des endroits secrets que nous n'aurions jamais trouvés seuls. Une expérience authentique inoubliable !",
    name: "Marie Dubois",
    designation: "Directrice Marketing - Voyages Authentiques",
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote: "Grâce à Manos Tours, j'ai pu capturer l'essence véritable du Togo. Les excursions privées m'ont donné accès à des paysages époustouflants et des moments culturels uniques. Un service exceptionnel !",
    name: "Jean-Pierre Martin",
    designation: "Photographe Professionnel - Afrique Sauvage",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote: "L'hébergement organisé par Manos était parfait - authentique mais confortable. L'équipe connaît vraiment les meilleurs endroits pour vivre l'Afrique de l'Ouest comme un local. Je recommande vivement !",
    name: "Sophie Leclerc",
    designation: "Blogueuse Voyage - Aventures Africaines",
    src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote: "L'écotourisme proposé par Manos Tours dépasse toutes les attentes. Nous avons découvert la biodiversité incroyable de Grand-Popo tout en respectant l'environnement. Une approche responsable remarquable.",
    name: "Thomas Rousseau",
    designation: "Chef d'Entreprise - Évasion Tropicale",
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
  },
  {
    quote: "La planification de notre séjour a été impeccable. Manos a anticipé tous nos besoins et nous a fait découvrir des traditions locales fascinantes. Un professionnalisme exemplaire du début à la fin.",
    name: "Isabelle Moreau",
    designation: "Consultante Voyage - Horizons Nouveaux",
    src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

export function ManosTestimonials() {
  return (
    <section
      id="testimonials"
      className="relative py-4 md:py-6 lg:py-8 text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)'
      }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-8"
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-5 w-5 text-indigo-400" />
            </motion.div>
            <span className="text-sm font-semibold text-white/90 tracking-wide">
              Témoignages Authentiques
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg" />
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight leading-tight"
            variants={fadeInUp}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90">
              Ils nous font
            </span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">
              confiance
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl text-white/70 max-w-4xl mx-auto leading-relaxed font-light mb-6"
            variants={fadeInUp}
          >
            Découvrez les expériences authentiques vécues par nos voyageurs au Bénin et au Togo.
          </motion.p>
          
          {/* Decorative line */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-cyan-400 mx-auto rounded-full"
            variants={fadeInUp}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          />
        </motion.div>

        {/* Testimonials Component */}
        <motion.div
          className="flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <CircularTestimonials
            testimonials={testimonials}
            autoplay={true}
            colors={{
              name: "#f7f7ff",
              designation: "#e1e1e1",
              testimony: "#f1f1f7",
              arrowBackground: "#0582CA",
              arrowForeground: "#141414",
              arrowHoverBackground: "#f7f7ff",
            }}
            fontSizes={{
              name: "28px",
              designation: "18px",
              quote: "20px",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default ManosTestimonials;
