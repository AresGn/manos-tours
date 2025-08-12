"use client";

import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Quote, Star, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import Image from 'next/image';

const testimonials = [
  {
    name: "Marie Dubois",
    role: "Directrice Marketing",
    company: "Voyages Authentiques",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Notre voyage au Bénin avec Manos Tours a été absolument magique. L'expertise locale de Manos nous a permis de découvrir des endroits secrets que nous n'aurions jamais trouvés seuls. Une expérience authentique inoubliable !",
    results: ["Expérience authentique", "Sites secrets découverts", "Guide expert local"]
  },
  {
    name: "Jean-Pierre Martin",
    role: "Photographe Professionnel",
    company: "Afrique Sauvage",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "Grâce à Manos Tours, j'ai pu capturer l'essence véritable du Togo. Les excursions privées m'ont donné accès à des paysages époustouflants et des moments culturels uniques. Un service exceptionnel !",
    results: ["Accès privilégié", "Moments culturels uniques", "Service personnalisé"]
  },
  {
    name: "Sophie Leclerc",
    role: "Blogueuse Voyage",
    company: "Aventures Africaines",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "L'hébergement organisé par Manos était parfait - authentique mais confortable. L'équipe connaît vraiment les meilleurs endroits pour vivre l'Afrique de l'Ouest comme un local. Je recommande vivement !",
    results: ["Hébergement authentique", "Confort optimal", "Expérience locale"]
  },
  {
    name: "Thomas Rousseau",
    role: "Chef d'Entreprise",
    company: "Évasion Tropicale",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "L'écotourisme proposé par Manos Tours dépasse toutes les attentes. Nous avons découvert la biodiversité incroyable de Grand-Popo tout en respectant l'environnement. Une approche responsable remarquable.",
    results: ["Écotourisme responsable", "Biodiversité préservée", "Impact positif"]
  },
  {
    name: "Isabelle Moreau",
    role: "Consultante Voyage",
    company: "Horizons Nouveaux",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    text: "La planification de notre séjour a été impeccable. Manos a anticipé tous nos besoins et nous a fait découvrir des traditions locales fascinantes. Un professionnalisme exemplaire du début à la fin.",
    results: ["Planification parfaite", "Traditions découvertes", "Professionnalisme"]
  }
];

export function PremiumTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction > 0 ? 45 : -45
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8,
      rotateY: direction < 0 ? 45 : -45
    })
  };

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative py-8 md:py-10 lg:py-12 text-white overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)'
      }}
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-purple-500/[0.05] to-rose-500/[0.08]"
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundSize: '400% 400%'
          }}
        />
        
        {/* Moving light orbs */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-72 h-72 bg-indigo-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, 80, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/5 w-80 h-80 bg-rose-400/15 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, -60, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating particles */}
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full"
            style={{
              left: `${15 + (i * 7)}%`,
              top: `${25 + (i * 5)}%`,
            }}
            animate={{
              y: [0, -50, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <motion.div 
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-12"
          variants={fadeInUp}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)" }}
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-indigo-300" />
            </motion.div>
            <span className="text-sm font-medium text-white/80">
              ✨ Témoignages Clients
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
            variants={fadeInUp}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Ils nous font
            </span>
            <br />
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600"
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              style={{
                backgroundSize: '200% 200%'
              }}
            >
              confiance
            </motion.span>
          </motion.h2>
          
          <motion.p
            className="text-xl sm:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Découvrez les expériences authentiques vécues par nos voyageurs au Bénin et au Togo.
          </motion.p>
        </motion.div>

        {/* Main Testimonial Display */}
        <div className="relative max-w-6xl mx-auto mb-8">
          <div className="relative min-h-[400px] perspective-1000">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.4 },
                  scale: { duration: 0.4 },
                  rotateY: { duration: 0.6 }
                }}
                className="absolute inset-0 w-full"
              >
                <div className="relative w-full bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl rounded-3xl border border-white/[0.15] p-6 md:p-8 lg:p-12 overflow-hidden group">
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-500/[0.08] via-purple-500/[0.05] to-rose-500/[0.08] rounded-3xl"
                    animate={{
                      backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    style={{
                      backgroundSize: '300% 300%'
                    }}
                  />

                  {/* Quote icon */}
                  <motion.div
                    className="absolute top-6 right-6 md:top-8 md:right-8 opacity-20"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    <Quote className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </motion.div>

                  <div className="relative z-10 w-full flex flex-col lg:flex-row items-start gap-8 lg:gap-10">
                    {/* User Info - Image et infos de base */}
                    <div className="flex-shrink-0 flex flex-col items-center lg:items-start gap-4 w-full lg:w-auto lg:max-w-xs">
                      {/* Avatar */}
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full overflow-hidden border-4 border-white/20 relative shadow-2xl">
                          <Image
                            src={testimonials[currentIndex].avatar}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-full object-cover"
                            width={112}
                            height={112}
                          />
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-br from-indigo-400/20 to-rose-400/20"
                            animate={{ opacity: [0, 0.3, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                        </div>

                        {/* Floating ring animation */}
                        <motion.div
                          className="absolute inset-0 border-2 border-indigo-400/30 rounded-full"
                          animate={{
                            scale: [1, 1.4, 1],
                            opacity: [0.5, 0, 0.5]
                          }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                      </motion.div>

                      {/* Infos utilisateur */}
                      <div className="text-center lg:text-left space-y-2">
                        <h3 className="text-xl lg:text-2xl font-bold text-white leading-tight">
                          {testimonials[currentIndex].name}
                        </h3>
                        <p className="text-indigo-300 font-semibold text-sm lg:text-base">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-white/60 text-sm lg:text-base font-medium">
                          {testimonials[currentIndex].company}
                        </p>

                        {/* Star Rating - Mieux alignées */}
                        <div className="flex justify-center lg:justify-start gap-1 pt-2">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <motion.div
                              key={i}
                              initial={{ opacity: 0, scale: 0 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: i * 0.1, duration: 0.3 }}
                            >
                              <Star className="w-4 h-4 lg:w-5 lg:h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Content - Témoignage optimisé */}
                    <div className="flex-1 w-full lg:w-auto flex flex-col justify-center space-y-6">
                      <motion.blockquote
                        className="text-lg md:text-xl lg:text-2xl text-white/95 leading-relaxed font-light italic relative"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                      >
                        <span className="text-indigo-300 text-3xl lg:text-4xl absolute -top-2 -left-2 lg:-left-4 font-serif">&ldquo;</span>
                        <span className="relative z-10 pl-4 lg:pl-6">{testimonials[currentIndex].text}</span>
                        <span className="text-indigo-300 text-3xl lg:text-4xl absolute -bottom-4 -right-2 font-serif">&rdquo;</span>
                      </motion.blockquote>

                      {/* Results - Disposées avec plus d'espace */}
                      <div className="flex flex-wrap gap-3 lg:gap-4 justify-start">
                        {testimonials[currentIndex].results.map((result, i) => (
                          <motion.div
                            key={i}
                            className="bg-gradient-to-r from-white/[0.08] to-white/[0.05] rounded-full px-4 py-2.5 border border-white/[0.15] backdrop-blur-sm flex-shrink-0 shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                            whileHover={{
                              backgroundColor: "rgba(255, 255, 255, 0.12)",
                              scale: 1.05,
                              borderColor: "rgba(255, 255, 255, 0.25)"
                            }}
                          >
                            <span className="text-sm lg:text-base text-white/80 font-medium whitespace-nowrap">
                              ✓ {result}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center items-center gap-8 mt-12">
            <motion.button
              onClick={prevTestimonial}
              className="group p-4 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.05] border border-white/[0.15] backdrop-blur-sm text-white hover:bg-white/[0.15] transition-all shadow-lg"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowLeft className="w-5 h-5 group-hover:text-indigo-300 transition-colors" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex gap-4">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className={`relative transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 h-3 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full shadow-lg'
                      : 'w-3 h-3 bg-white/30 hover:bg-white/50 rounded-full'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-indigo-400 to-blue-400 rounded-full"
                      layoutId="activeIndicator"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.button>
              ))}
            </div>

            <motion.button
              onClick={nextTestimonial}
              className="group p-4 rounded-full bg-gradient-to-r from-white/[0.08] to-white/[0.05] border border-white/[0.15] backdrop-blur-sm text-white hover:bg-white/[0.15] transition-all shadow-lg"
              whileHover={{
                scale: 1.1,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                borderColor: "rgba(255, 255, 255, 0.25)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowRight className="w-5 h-5 group-hover:text-indigo-300 transition-colors" />
            </motion.button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
