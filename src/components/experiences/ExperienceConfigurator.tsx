'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Heart,
  Camera,
  Waves,
  Sparkles,
  Clock,
  Users,
  Zap,
  Eye,
  Mountain,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import BookingSimulator from './BookingSimulator';

interface ConfigurationStep {
  id: string;
  title: string;
  description: string;
  options: {
    id: string;
    label: string;
    description: string;
    icon: React.ReactNode;
    color: string;
  }[];
}

interface Configuration {
  style?: string;
  duration?: string;
  group?: string;
  activity?: string;
}

export default function ExperienceConfigurator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [configuration, setConfiguration] = useState<Configuration>({});
  const [showResults, setShowResults] = useState(false);
  const [selectedExperience, setSelectedExperience] = useState<any>(null);
  const [showBookingSimulator, setShowBookingSimulator] = useState(false);

  const steps: ConfigurationStep[] = [
    {
      id: 'style',
      title: 'Choisissez votre style',
      description: 'Quel type d\'expérience vous attire le plus ?',
      options: [
        {
          id: 'cultural',
          label: 'Découverte Culturelle',
          description: 'Traditions, histoire et patrimoine local',
          icon: <Heart className="w-6 h-6" />,
          color: 'from-purple-500 to-pink-500'
        },
        {
          id: 'nature',
          label: 'Aventure Nature',
          description: 'Faune, flore et paysages sauvages',
          icon: <Camera className="w-6 h-6" />,
          color: 'from-green-500 to-emerald-500'
        },
        {
          id: 'beach',
          label: 'Détente Plage',
          description: 'Océan, sable fin et couchers de soleil',
          icon: <Waves className="w-6 h-6" />,
          color: 'from-blue-500 to-cyan-500'
        },
        {
          id: 'spiritual',
          label: 'Spirituel/Vodun',
          description: 'Traditions sacrées et spiritualité',
          icon: <Sparkles className="w-6 h-6" />,
          color: 'from-yellow-500 to-orange-500'
        }
      ]
    },
    {
      id: 'duration',
      title: 'Durée souhaitée',
      description: 'Combien de temps voulez-vous consacrer à cette expérience ?',
      options: [
        {
          id: 'half-day',
          label: 'Demi-journée',
          description: '3-4 heures d\'exploration',
          icon: <Clock className="w-6 h-6" />,
          color: 'from-blue-400 to-blue-600'
        },
        {
          id: 'full-day',
          label: 'Journée complète',
          description: '6-8 heures d\'aventure',
          icon: <Clock className="w-6 h-6" />,
          color: 'from-green-400 to-green-600'
        },
        {
          id: 'weekend',
          label: 'Weekend',
          description: '2-3 jours d\'immersion',
          icon: <Clock className="w-6 h-6" />,
          color: 'from-orange-400 to-orange-600'
        },
        {
          id: 'long-stay',
          label: 'Séjour long',
          description: '4+ jours de découverte',
          icon: <Clock className="w-6 h-6" />,
          color: 'from-purple-400 to-purple-600'
        }
      ]
    },
    {
      id: 'group',
      title: 'Composition du groupe',
      description: 'Avec qui voyagez-vous ?',
      options: [
        {
          id: 'solo',
          label: 'Solo',
          description: 'Voyage en solitaire',
          icon: <Users className="w-6 h-6" />,
          color: 'from-indigo-400 to-indigo-600'
        },
        {
          id: 'couple',
          label: 'Couple',
          description: 'Voyage romantique à deux',
          icon: <Users className="w-6 h-6" />,
          color: 'from-pink-400 to-pink-600'
        },
        {
          id: 'family',
          label: 'Famille',
          description: 'Aventure familiale',
          icon: <Users className="w-6 h-6" />,
          color: 'from-green-400 to-green-600'
        },
        {
          id: 'friends',
          label: 'Groupe d\'amis',
          description: 'Entre amis pour plus de fun',
          icon: <Users className="w-6 h-6" />,
          color: 'from-orange-400 to-orange-600'
        }
      ]
    },
    {
      id: 'activity',
      title: 'Niveau d\'activité',
      description: 'Quel rythme préférez-vous ?',
      options: [
        {
          id: 'contemplative',
          label: 'Contemplatif',
          description: 'Observation, détente et découverte douce',
          icon: <Eye className="w-6 h-6" />,
          color: 'from-blue-400 to-blue-600'
        },
        {
          id: 'moderate',
          label: 'Modéré',
          description: 'Équilibre entre activité et repos',
          icon: <Zap className="w-6 h-6" />,
          color: 'from-green-400 to-green-600'
        },
        {
          id: 'adventurous',
          label: 'Aventurier',
          description: 'Activités intenses et challenges',
          icon: <Mountain className="w-6 h-6" />,
          color: 'from-red-400 to-red-600'
        }
      ]
    }
  ];

  const handleOptionSelect = (stepId: string, optionId: string) => {
    setConfiguration(prev => ({
      ...prev,
      [stepId]: optionId
    }));

    if (currentStep < steps.length - 1) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
      }, 300);
    } else {
      setTimeout(() => {
        setShowResults(true);
      }, 300);
    }
  };

  const resetConfigurator = () => {
    setCurrentStep(0);
    setConfiguration({});
    setShowResults(false);
  };

  const generateRecommendations = () => {
    // Logique simple de recommandation basée sur la configuration
    const recommendations = [
      {
        title: 'Expérience Personnalisée #1',
        description: 'Basée sur vos préférences sélectionnées',
        duration: '6h',
        price: '45,000 CFA',
        highlights: ['Guide expert', 'Transport inclus', 'Déjeuner local']
      },
      {
        title: 'Expérience Personnalisée #2',
        description: 'Alternative adaptée à votre profil',
        duration: '4h',
        price: '35,000 CFA',
        highlights: ['Petit groupe', 'Photos incluses', 'Souvenir offert']
      },
      {
        title: 'Expérience Personnalisée #3',
        description: 'Option premium sur-mesure',
        duration: '8h',
        price: '65,000 CFA',
        highlights: ['Service VIP', 'Repas gastronomique', 'Transport privé']
      }
    ];

    return recommendations;
  };

  if (showResults) {
    const recommendations = generateRecommendations();
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4 font-playfair">
            Vos Expériences Personnalisées
          </h2>
          <p className="text-lg text-gray-300">
            Basées sur vos préférences, voici 3 propositions sur-mesure
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {recommendations.map((rec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600/50"
            >
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="w-6 h-6 text-green-400" />
                <h3 className="text-xl font-bold text-white">{rec.title}</h3>
              </div>

              <p className="text-gray-300 mb-4">{rec.description}</p>

              <div className="flex justify-between items-center mb-4">
                <span className="text-sm text-gray-400">Durée: {rec.duration}</span>
                <span className="text-lg font-bold text-blue-400">{rec.price}</span>
              </div>

              <ul className="space-y-2 mb-6">
                {rec.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {highlight}
                  </li>
                ))}
              </ul>
              
              <button
                onClick={() => {
                  setSelectedExperience({
                    id: `custom-${index}`,
                    title: rec.title,
                    price: rec.price,
                    duration: rec.duration
                  });
                  setShowBookingSimulator(true);
                }}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Réserver Cette Expérience
              </button>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={resetConfigurator}
            className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg"
          >
            Recommencer la Configuration
          </button>
        </div>
      </motion.div>
    );
  }

  const currentStepData = steps[currentStep];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <span className="text-sm font-semibold text-gray-300">
            Étape {currentStep + 1} sur {steps.length}
          </span>
          <span className="text-sm text-gray-400">
            {Math.round(((currentStep + 1) / steps.length) * 100)}% complété
          </span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2">
          <motion.div
            className="bg-gradient-to-r from-blue-600 to-cyan-600 h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>
      </div>

      {/* Step Content */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4 font-playfair">
          {currentStepData.title}
        </h2>
        <p className="text-lg text-gray-300">
          {currentStepData.description}
        </p>
      </motion.div>

      {/* Options Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {currentStepData.options.map((option, index) => (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => handleOptionSelect(currentStepData.id, option.id)}
            className="group bg-gray-800/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-left border border-gray-600/50 hover:border-blue-400/70 hover:bg-gray-700/90"
          >
            <div className="flex items-start gap-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${option.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                {option.icon}
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {option.label}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200">
                  {option.description}
                </p>
              </div>

              <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Booking Simulator */}
      {selectedExperience && (
        <BookingSimulator
          isOpen={showBookingSimulator}
          onClose={() => {
            setShowBookingSimulator(false);
            setSelectedExperience(null);
          }}
          experience={selectedExperience}
        />
      )}
    </div>
  );
}
