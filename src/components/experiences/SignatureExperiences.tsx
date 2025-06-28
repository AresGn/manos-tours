'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Sunrise,
  Waves,
  Sparkles,
  ChefHat,
  Clock,
  Users,
  Star,
  MapPin,
  Camera,
  Heart,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';
import BookingSimulator from './BookingSimulator';

interface SignatureExperience {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription: string;
  duration: string;
  price: string;
  groupSize: string;
  difficulty: 'Facile' | 'Modéré' | 'Difficile';
  highlights: string[];
  included: string[];
  schedule: {
    time: string;
    activity: string;
  }[];
  image: string;
  icon: React.ReactNode;
  color: string;
  category: string;
}

export default function SignatureExperiences() {
  const [selectedExperience, setSelectedExperience] = useState<string | null>(null);
  const [bookingExperience, setBookingExperience] = useState<any>(null);
  const [showBookingSimulator, setShowBookingSimulator] = useState(false);

  const signatureExperiences: SignatureExperience[] = [
    {
      id: 'sunrise-turtle',
      title: 'Sunrise Turtle Experience',
      subtitle: 'Lever de soleil avec les tortues marines',
      description: 'Observation des pontes de tortues marines au lever du soleil, suivie d\'un petit-déjeuner traditionnel sur la plage.',
      longDescription: 'Vivez un moment magique en observant les tortues marines géantes venir pondre leurs œufs sur les plages vierges de Grand-Popo. Cette expérience unique commence avant l\'aube pour maximiser vos chances d\'observation. Après ce spectacle naturel exceptionnel, savourez un petit-déjeuner traditionnel béninois préparé sur la plage.',
      duration: '4 heures',
      price: 'À partir de 35,000 CFA',
      groupSize: '2-8 personnes',
      difficulty: 'Facile',
      highlights: [
        'Observation des tortues marines en ponte',
        'Lever de soleil spectaculaire sur l\'Atlantique',
        'Petit-déjeuner traditionnel sur la plage',
        'Photos souvenirs professionnelles'
      ],
      included: [
        'Guide expert local',
        'Transport aller-retour',
        'Petit-déjeuner traditionnel',
        'Équipement d\'observation',
        'Photos numériques'
      ],
      schedule: [
        { time: '05:00', activity: 'Départ de votre hébergement' },
        { time: '05:30', activity: 'Arrivée sur la plage de ponte' },
        { time: '06:00', activity: 'Observation des tortues marines' },
        { time: '07:30', activity: 'Petit-déjeuner sur la plage' },
        { time: '09:00', activity: 'Retour à votre hébergement' }
      ],
      image: '/images/Guide_Sites/nature-014.jpg',
      icon: <Sunrise className="w-6 h-6" />,
      color: 'from-orange-500 to-yellow-500',
      category: 'Nature'
    },
    {
      id: 'bouche-du-roy',
      title: 'Bouche du Roy Mystique',
      subtitle: 'Navigation sacrée où le fleuve rencontre l\'océan',
      description: 'Navigation en pirogue traditionnelle à la Bouche du Roy, rencontre avec les pêcheurs locaux et cérémonie d\'eau bénite.',
      longDescription: 'Découvrez l\'embouchure mythique où le fleuve Mono se jette dans l\'océan Atlantique. Cette navigation en pirogue traditionnelle vous mènera au cœur d\'un écosystème unique, refuge des hippopotames et des oiseaux migrateurs. Rencontrez les pêcheurs Xwlà et participez à une cérémonie d\'eau bénite respectueuse des traditions locales.',
      duration: '6 heures',
      price: 'À partir de 45,000 CFA',
      groupSize: '2-6 personnes',
      difficulty: 'Modéré',
      highlights: [
        'Navigation en pirogue traditionnelle',
        'Observation des hippopotames',
        'Rencontre avec les pêcheurs Xwlà',
        'Cérémonie d\'eau bénite traditionnelle'
      ],
      included: [
        'Guide expert et piroguier',
        'Pirogue traditionnelle',
        'Gilets de sauvetage',
        'Déjeuner chez les pêcheurs',
        'Cérémonie traditionnelle'
      ],
      schedule: [
        { time: '08:00', activity: 'Départ vers la Bouche du Roy' },
        { time: '09:00', activity: 'Embarquement en pirogue' },
        { time: '10:30', activity: 'Observation de la faune' },
        { time: '12:00', activity: 'Déjeuner chez les pêcheurs' },
        { time: '13:30', activity: 'Cérémonie d\'eau bénite' },
        { time: '14:00', activity: 'Retour en pirogue et transport' }
      ],
      image: '/images/Guide_Sites/P8050059.jpg',
      icon: <Waves className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'Culture & Nature'
    },
    {
      id: 'vodun-heritage',
      title: 'Vodun Heritage Respectful Tour',
      subtitle: 'Découverte respectueuse du patrimoine spirituel',
      description: 'Visite des temples vodoun avec guide spirituel, atelier d\'artisanat traditionnel dans une approche éthique et respectueuse.',
      longDescription: 'Explorez le riche patrimoine spirituel de Grand-Popo dans le plus grand respect des traditions. Accompagné d\'un guide spirituel local, visitez les temples sacrés, découvrez les 4 groupes de divinités Xwlà et participez à un atelier d\'artisanat rituel. Cette expérience éducative et respectueuse vous initiera aux vraies valeurs du Vodun.',
      duration: '5 heures',
      price: 'À partir de 40,000 CFA',
      groupSize: '2-10 personnes',
      difficulty: 'Facile',
      highlights: [
        'Visite respectueuse des temples sacrés',
        'Rencontre avec un prêtre vodoun',
        'Atelier d\'artisanat rituel',
        'Découverte de Hounsoukoè'
      ],
      included: [
        'Guide spirituel certifié',
        'Autorisation de visite des temples',
        'Atelier artisanat traditionnel',
        'Offrandes respectueuses',
        'Livret explicatif'
      ],
      schedule: [
        { time: '09:00', activity: 'Accueil et présentation' },
        { time: '09:30', activity: 'Visite du temple de Dan' },
        { time: '11:00', activity: 'Rencontre avec le prêtre' },
        { time: '12:30', activity: 'Atelier artisanat rituel' },
        { time: '13:30', activity: 'Visite de Hounsoukoè' },
        { time: '14:00', activity: 'Fin de l\'expérience' }
      ],
      image: '/images/Guide_Sites/01-5.jpg',
      icon: <Sparkles className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500',
      category: 'Culture & Spiritualité'
    },
    {
      id: 'flavors-journey',
      title: 'Grand-Popo Flavors Journey',
      subtitle: 'Voyage culinaire authentique',
      description: 'Tour gastronomique des marchés locaux, cours de cuisine traditionnelle et dégustation chez l\'habitant.',
      longDescription: 'Embarquez pour un voyage culinaire authentique à travers les saveurs de Grand-Popo. Explorez les marchés colorés, apprenez les secrets de la cuisine béninoise avec une famille locale et dégustez les spécialités de la région. Cette expérience gourmande vous fera découvrir l\'âme culinaire de la côte béninoise.',
      duration: '7 heures',
      price: 'À partir de 50,000 CFA',
      groupSize: '2-8 personnes',
      difficulty: 'Facile',
      highlights: [
        'Tour des marchés locaux',
        'Cours de cuisine traditionnelle',
        'Dégustation chez l\'habitant',
        'Découverte des épices locales'
      ],
      included: [
        'Guide culinaire expert',
        'Transport vers les marchés',
        'Cours de cuisine complet',
        'Tous les repas et dégustations',
        'Recettes à emporter'
      ],
      schedule: [
        { time: '08:00', activity: 'Visite du marché de Grand-Popo' },
        { time: '10:00', activity: 'Sélection des ingrédients' },
        { time: '11:00', activity: 'Cours de cuisine chez l\'habitant' },
        { time: '13:00', activity: 'Déjeuner des plats préparés' },
        { time: '14:30', activity: 'Dégustation de sodabi' },
        { time: '15:00', activity: 'Fin de l\'expérience' }
      ],
      image: '/images/Guide_Sites/coolpix-may-187.jpg',
      icon: <ChefHat className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500',
      category: 'Gastronomie'
    }
  ];

  const ExperienceCard = ({ experience, isSelected }: { experience: SignatureExperience; isSelected: boolean }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`bg-gray-800/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-600/50 hover:border-blue-400/70 ${
        isSelected ? 'ring-2 ring-blue-400 shadow-blue-400/30' : ''
      }`}
    >
      <div className="relative h-64">
        <OptimizedImage
          src={experience.image}
          className="w-full h-full"
          alt={experience.title}
          fallbackText={experience.title}
        />
        <div className="absolute top-4 left-4">
          <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${experience.color} flex items-center justify-center text-white shadow-lg`}>
            {experience.icon}
          </div>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-gray-800">
            {experience.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2 font-playfair">
          {experience.title}
        </h3>
        <p className="text-blue-400 font-semibold mb-3">
          {experience.subtitle}
        </p>
        <p className="text-gray-300 mb-4 line-clamp-3">
          {experience.description}
        </p>

        <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {experience.duration}
          </div>
          <div className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            {experience.groupSize}
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4" />
            {experience.difficulty}
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <span className="text-2xl font-bold text-blue-400">
            {experience.price}
          </span>
          <button
            onClick={() => setSelectedExperience(isSelected ? null : experience.id)}
            className="text-blue-400 hover:text-blue-300 font-semibold flex items-center gap-1 transition-colors duration-200"
          >
            {isSelected ? 'Voir moins' : 'Voir détails'}
            <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${isSelected ? 'rotate-90' : ''}`} />
          </button>
        </div>

        <button
          onClick={() => {
            setBookingExperience({
              id: experience.id,
              title: experience.title,
              price: experience.price,
              duration: experience.duration
            });
            setShowBookingSimulator(true);
          }}
          className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 rounded-full font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
        >
          Réserver Maintenant
        </button>
      </div>

      {/* Detailed View */}
      {isSelected && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t border-gray-600/50 p-6 bg-gray-900/60"
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-white mb-3">Description complète</h4>
              <p className="text-gray-300 mb-4">{experience.longDescription}</p>

              <h4 className="font-bold text-white mb-3">Points forts</h4>
              <ul className="space-y-2">
                {experience.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-white mb-3">Inclus dans le prix</h4>
              <ul className="space-y-2 mb-4">
                {experience.included.map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-4 h-4 text-blue-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <h4 className="font-bold text-white mb-3">Programme détaillé</h4>
              <div className="space-y-2">
                {experience.schedule.map((item, index) => (
                  <div key={index} className="flex gap-3">
                    <span className="text-blue-400 font-semibold text-sm">{item.time}</span>
                    <span className="text-gray-300 text-sm">{item.activity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );

  return (
    <div className="max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl font-bold text-white mb-4 font-playfair">
          Nos Expériences Signature
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Découvrez nos 4 expériences phares, soigneusement conçues pour vous offrir
          le meilleur de Grand-Popo dans le respect des traditions locales.
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-2 gap-8">
        {signatureExperiences.map((experience) => (
          <ExperienceCard
            key={experience.id}
            experience={experience}
            isSelected={selectedExperience === experience.id}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-12"
      >
        <p className="text-gray-300 mb-6">
          Toutes nos expériences peuvent être personnalisées selon vos préférences
        </p>
        <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg">
          Demander une Personnalisation
        </button>
      </motion.div>

      {/* Booking Simulator */}
      {bookingExperience && (
        <BookingSimulator
          isOpen={showBookingSimulator}
          onClose={() => {
            setShowBookingSimulator(false);
            setBookingExperience(null);
          }}
          experience={bookingExperience}
        />
      )}
    </div>
  );
}
