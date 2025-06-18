"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, Calendar, Users, Shield, Leaf, Star, Search, ArrowUp } from 'lucide-react';

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

// Data
const faqData: FAQCategory[] = [
  {
    category: "Destinations",
    icon: <MapPin className="w-5 h-5" />,
    color: "from-blue-400 to-blue-600",
    questions: [
      {
        question: "Quelles destinations proposez-vous au Bénin et au Togo ?",
        answer: "Nous proposons des circuits dans les sites les plus emblématiques : Ganvié (la Venise de l'Afrique), Abomey (palais royaux), Ouidah (route des esclaves), Kpalimé (montagnes et cascades), Lomé (capitale dynamique), et bien d'autres destinations authentiques."
      },
      {
        question: "Peut-on personnaliser les itinéraires ?",
        answer: "Absolument ! Nous créons des circuits sur mesure selon vos centres d'intérêt, votre budget et la durée de votre séjour. Que vous soyez passionné d'histoire, de nature ou de culture, nous adaptons chaque détail."
      }
    ]
  },
  {
    category: "Réservations",
    icon: <Calendar className="w-5 h-5" />,
    color: "from-blue-400 to-blue-600",
    questions: [
      {
        question: "Comment puis-je réserver un tour ?",
        answer: "La réservation est simple : contactez-nous par email, WhatsApp ou téléphone. Nous discutons de vos besoins, préparons un devis personnalisé et finalisons votre réservation avec un acompte sécurisé."
      },
      {
        question: "Combien de temps à l'avance dois-je réserver ?",
        answer: "Nous recommandons de réserver au moins 2 semaines à l'avance pour garantir la disponibilité. Pour les périodes de haute saison (décembre-janvier), réservez 1 mois avant votre arrivée."
      },
      {
        question: "Quelle est votre politique d'annulation ?",
        answer: "Annulation gratuite jusqu'à 72h avant le départ. Entre 72h et 24h : 50% de remboursement. Moins de 24h : pas de remboursement, sauf cas de force majeure documenté."
      }
    ]
  },
  {
    category: "Groupes & Tarifs",
    icon: <Users className="w-5 h-5" />,
    color: "from-blue-400 to-blue-600",
    questions: [
      {
        question: "Organisez-vous des tours pour les groupes ?",
        answer: "Oui ! Nous accueillons des groupes de 2 à 25 personnes. Tarifs dégressifs selon la taille du groupe. Idéal pour les familles, amis, entreprises ou associations."
      },
      {
        question: "Quels sont vos tarifs approximatifs ?",
        answer: "Les tarifs varient selon la durée, le nombre de participants et les services inclus. Comptez entre 30-80€/jour/personne pour les tours guidés, incluant transport, guide et entrées des sites."
      }
    ]
  },
  {
    category: "Hébergement",
    icon: <Shield className="w-5 h-5" />,
    color: "from-blue-400 to-blue-600",
    questions: [
      {
        question: "Proposez-vous des hébergements ?",
        answer: "Oui, nous avons des partenariats avec des hôtels de différentes catégories, des appartements privés et des sites de camping. Du budget au haut de gamme, nous trouvons l'hébergement qui vous convient."
      },
      {
        question: "Les hébergements sont-ils sûrs et confortables ?",
        answer: "Tous nos hébergements sont rigoureusement sélectionnés pour leur sécurité, propreté et confort. Nous visitons personnellement chaque établissement partenaire."
      }
    ]
  },
  {
    category: "Écotourisme",
    icon: <Leaf className="w-5 h-5" />,
    color: "from-blue-400 to-blue-600",
    questions: [
      {
        question: "Comment garantissez-vous un tourisme durable ?",
        answer: "Nous travaillons exclusivement avec des communautés locales, utilisons des transports éco-responsables, promouvons l'artisanat local et reversons une partie de nos bénéfices à des projets environnementaux."
      },
      {
        question: "Vos tours respectent-ils l'environnement ?",
        answer: "Absolument ! Groupes limités, sentiers balisés, sensibilisation environnementale, et collaboration avec les autorités locales pour préserver la biodiversité."
      }
    ]
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show/hide scroll to top button based on scroll position
  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const allQuestions: ExtendedQuestion[] = faqData.flatMap((category, categoryIndex) => 
    category.questions.map((q, qIndex) => ({
      ...q,
      categoryIndex,
      questionIndex: qIndex,
      category: category.category,
      icon: category.icon,
      color: category.color
    }))
  );

  const filteredQuestions = allQuestions.filter(item =>
    item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.answer.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setActiveIndex(activeIndex === key ? null : key);
  };

  return (
    <section
      id="faq"
      className="relative py-12 md:py-16 lg:py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)'
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/[0.08] border border-white/[0.15] backdrop-blur-sm mb-6"
            whileHover={{ scale: 1.05, borderColor: "rgba(255, 255, 255, 0.3)" }}
          >
            <Star className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-white/80">
              MANOS TOURS
            </span>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Questions{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
              Fréquentes
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Découvrez tout ce que vous devez savoir pour vivre une expérience inoubliable 
            en Afrique de l'Ouest avec nos experts locaux
          </p>
          
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Rechercher dans les questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 pl-12 text-white bg-white/[0.08] rounded-2xl border border-white/[0.15] focus:border-blue-400/50 focus:outline-none focus:ring-4 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm placeholder-white/60"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
          </div>
        </motion.div>

        {/* Categories Grid - Horizontal Layout */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {faqData.map((category, index) => (
            <motion.div
              key={index}
              className="text-center group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className={`w-16 h-16 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg flex items-center justify-center text-white transform group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <h3 className="text-sm font-semibold text-white/80 group-hover:text-white transition-colors">
                {category.category}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          {(searchTerm ? filteredQuestions : allQuestions).map((item, index) => {
            const key = `${item.categoryIndex}-${item.questionIndex}`;
            const isActive = activeIndex === key;

            return (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className={`bg-white/[0.08] backdrop-blur-sm rounded-2xl border border-white/[0.15] hover:border-blue-400/50 transition-all duration-300 overflow-hidden ${isActive ? 'ring-2 ring-blue-400/30' : ''}`}>
                  <button
                    onClick={() => toggleQuestion(item.categoryIndex, item.questionIndex)}
                    className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-white/[0.05] transition-colors duration-200"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.color} shadow-md flex items-center justify-center text-white flex-shrink-0`}>
                        {item.icon}
                      </div>
                      <div>
                        <span className="text-xs font-medium text-blue-400 uppercase tracking-wide">
                          {item.category}
                        </span>
                        <h3 className="text-lg font-semibold text-white mt-1">
                          {item.question}
                        </h3>
                      </div>
                    </div>
                    <motion.div
                      className={`w-8 h-8 rounded-full bg-white/[0.1] flex items-center justify-center transition-colors duration-300 ${isActive ? 'bg-blue-400/20' : ''}`}
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
                            <div className="w-full h-px bg-gradient-to-r from-white/20 to-transparent mb-4"></div>
                            <motion.p
                              className="text-gray-300 leading-relaxed"
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
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div className="bg-white/[0.08] backdrop-blur-sm border border-white/[0.15] rounded-3xl p-8 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Une question spécifique ?
            </h3>
            <p className="text-white/70 mb-6 max-w-2xl mx-auto text-lg">
              Notre équipe locale est là pour vous accompagner dans la préparation de votre voyage sur mesure
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full font-semibold hover:from-blue-500 hover:to-blue-700 transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Nous écrire
            </motion.button>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform duration-200" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FAQSection;
