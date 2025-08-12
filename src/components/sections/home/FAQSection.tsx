"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Calendar, Users, Shield, Leaf, Star, HelpCircle, MessageCircle } from 'lucide-react';

// Types
interface Question {
  question: string;
  answer: string;
}

interface FAQCategory {
  category: string;
  icon: React.ReactNode;
  color: string;
  questions: Question[];
}

interface ExtendedQuestion extends Question {
  categoryIndex: number;
  questionIndex: number;
  category: string;
  icon: React.ReactNode;
  color: string;
}

// Simplified FAQ Data
const faqQuestions: Question[] = [
  {
    question: "Quelles destinations proposez-vous au Bénin et au Togo ?",
    answer: "Nous proposons des circuits dans les sites les plus emblématiques : Ganvié (la Venise de l'Afrique), Abomey (palais royaux), Ouidah (route des esclaves), Kpalimé (montagnes et cascades), Lomé (capitale dynamique), et bien d'autres destinations authentiques."
  },
  {
    question: "Peut-on personnaliser les itinéraires ?",
    answer: "Absolument ! Nous créons des circuits sur mesure selon vos centres d'intérêt, votre budget et la durée de votre séjour. Que vous soyez passionné d'histoire, de nature ou de culture, nous adaptons chaque détail."
  },
  {
    question: "Comment réserver un tour avec Manos Tours ?",
    answer: "La réservation est simple : contactez-nous directement via WhatsApp, email ou téléphone. Nous discuterons de vos préférences, confirmerons les détails et vous enverrons un devis personnalisé. Un acompte sécurise votre réservation."
  },
  {
    question: "Quels sont les tarifs et que comprennent-ils ?",
    answer: "Nos tarifs varient selon la durée, le type d'hébergement et les activités choisies. Ils incluent généralement le guide, le transport, certains repas et les entrées aux sites. Nous vous fournirons un devis détaillé et transparent."
  },
  {
    question: "Quelle est la meilleure période pour visiter ?",
    answer: "La saison sèche (novembre à mars) est idéale avec moins de pluie et des températures agréables. Cependant, chaque saison a ses charmes : la saison des pluies offre des paysages verdoyants et moins de touristes."
  },
  {
    question: "Les tours sont-ils adaptés aux familles ?",
    answer: "Oui ! Nous adaptons nos circuits aux familles avec enfants. Activités ludiques, rythme adapté, hébergements familiaux - nous veillons à ce que chaque membre de la famille vive une expérience mémorable et sécurisée."
  },
  {
    question: "Quelles mesures de sécurité prenez-vous ?",
    answer: "Votre sécurité est notre priorité. Nous travaillons avec des partenaires locaux fiables, suivons les recommandations officielles, et Manos connaît parfaitement les zones sûres. Assurance voyage recommandée."
  },
  {
    question: "Proposez-vous des tours éco-responsables ?",
    answer: "Absolument ! Nous privilégions le tourisme durable : hébergements locaux, guides communautaires, respect de l'environnement et contribution directe aux communautés locales. Voyagez en ayant un impact positif."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleQuestion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative py-10 md:py-12 lg:py-16 overflow-hidden"
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
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-8"
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)" }}
          >
            <HelpCircle className="h-5 w-5 text-blue-400" />
            <span className="text-sm font-semibold text-white/90 tracking-wide">
              FAQ
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-8 leading-tight">
            Questions{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
              Fréquentes
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
            Tout ce que vous devez savoir pour votre aventure au Bénin et au Togo
          </p>

          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 mx-auto rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {faqQuestions.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className={`bg-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/[0.15] hover:border-blue-400/30 transition-all duration-300 overflow-hidden ${isActive ? 'ring-1 ring-blue-400/30 border-blue-400/30' : ''}`}>
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-white/[0.05] transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4 flex-1">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 shadow-lg flex items-center justify-center text-white flex-shrink-0">
                        <MessageCircle className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-semibold text-white leading-tight pr-4">
                        {item.question}
                      </h3>
                    </div>
                    <motion.div
                      className={`w-8 h-8 rounded-full bg-white/[0.1] flex items-center justify-center transition-colors duration-300 flex-shrink-0 ${isActive ? 'bg-blue-400/20' : ''}`}
                      animate={{ rotate: isActive ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown className={`w-5 h-5 ${isActive ? 'text-blue-400' : 'text-white/60'}`} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6">
                          <div className="pl-14">
                            <div className="w-full h-px bg-gradient-to-r from-blue-400/30 to-transparent mb-4"></div>
                            <motion.p
                              className="text-white/80 leading-relaxed text-base"
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: 0.1 }}
                            >
                              {item.answer}
                            </motion.p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="bg-gradient-to-r from-white/[0.08] to-white/[0.05] backdrop-blur-sm border border-white/[0.15] rounded-3xl p-8 lg:p-10 text-white shadow-2xl max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Une question spécifique ?
            </h3>
            <p className="text-white/80 mb-8 text-lg leading-relaxed">
              Manos et son équipe sont là pour vous accompagner dans la préparation de votre voyage sur mesure
            </p>
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-blue-400 to-cyan-400 text-white rounded-full font-semibold hover:from-blue-500 hover:to-cyan-500 transition-all duration-300 shadow-lg text-lg"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Contactez-nous
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
