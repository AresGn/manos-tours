'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { 
  Users, 
  Crown, 
  Clock, 
  Star,
  CheckCircle,
  ArrowRight,
  Heart,
  Camera,
  MapPin,
  Shield
} from 'lucide-react';
import OptimizedImage from '@/components/ui/OptimizedImage';

export default function ToursPrivesClient() {
  const [selectedTour, setSelectedTour] = useState<string | null>(null);

  const privateTours = [
    {
      id: 'vip-discovery',
      title: 'Découverte VIP Grand-Popo',
      subtitle: 'L\'expérience premium complète',
      description: 'Tour privé exclusif avec guide dédié, transport de luxe et accès privilégié aux sites les plus authentiques.',
      duration: 'Journée complète (8h)',
      groupSize: '1-4 personnes',
      price: '120,000 CFA',
      image: '/images/Guide_Sites/manos-1-2.jpg',
      highlights: [
        'Guide privé expert Manos',
        'Transport climatisé premium',
        'Déjeuner gastronomique local',
        'Accès privilégié aux sites sacrés',
        'Photos professionnelles incluses'
      ],
      included: [
        'Guide privé francophone',
        'Véhicule climatisé avec chauffeur',
        'Tous les frais d\'entrée',
        'Déjeuner dans restaurant sélectionné',
        'Eau et rafraîchissements',
        'Assurance complète'
      ]
    },
    {
      id: 'cultural-immersion',
      title: 'Immersion Culturelle Privée',
      subtitle: 'Au cœur des traditions Xwlà',
      description: 'Plongée authentique dans la culture locale avec rencontres privilégiées et expériences exclusives.',
      duration: '6 heures',
      groupSize: '1-6 personnes',
      price: '85,000 CFA',
      image: '/images/Guide_Sites/01-8.jpg',
      highlights: [
        'Rencontre avec les anciens du village',
        'Participation aux activités traditionnelles',
        'Visite d\'ateliers d\'artisans',
        'Cérémonie de bienvenue',
        'Repas chez l\'habitant'
      ],
      included: [
        'Guide culturel spécialisé',
        'Transport local authentique',
        'Repas traditionnel',
        'Cadeaux de bienvenue',
        'Traduction si nécessaire'
      ]
    },
    {
      id: 'nature-private',
      title: 'Exploration Nature Privée',
      subtitle: 'Écosystèmes secrets de Grand-Popo',
      description: 'Découverte exclusive des trésors naturels cachés avec accès à des zones préservées.',
      duration: '7 heures',
      groupSize: '1-5 personnes',
      price: '95,000 CFA',
      image: '/images/Guide_Sites/nature-014.jpg',
      highlights: [
        'Zones naturelles préservées',
        'Observation de la faune rare',
        'Navigation en pirogue privée',
        'Pique-nique dans la nature',
        'Guide naturaliste expert'
      ],
      included: [
        'Guide naturaliste certifié',
        'Équipement d\'observation',
        'Pirogue privée avec piroguier',
        'Pique-nique écologique',
        'Jumelles et matériel photo'
      ]
    }
  ];

  const groupTours = [
    {
      id: 'group-discovery',
      title: 'Découverte en Groupe',
      subtitle: 'L\'essentiel de Grand-Popo',
      description: 'Tour en petit groupe pour découvrir les incontournables de Grand-Popo dans une ambiance conviviale.',
      duration: '5 heures',
      groupSize: '6-12 personnes',
      price: '35,000 CFA',
      image: '/images/Guide_Sites/photo-lieu-446-2.jpg',
      highlights: [
        'Groupe limité à 12 personnes',
        'Sites incontournables',
        'Ambiance conviviale',
        'Guide expert partagé',
        'Transport confortable'
      ],
      included: [
        'Guide francophone expérimenté',
        'Transport en minibus climatisé',
        'Frais d\'entrée aux sites',
        'Collation locale',
        'Assurance groupe'
      ]
    },
    {
      id: 'group-adventure',
      title: 'Aventure Groupe Nature',
      subtitle: 'Exploration collective',
      description: 'Aventure nature en groupe avec activités partagées et découvertes collectives.',
      duration: '6 heures',
      groupSize: '8-15 personnes',
      price: '42,000 CFA',
      image: '/images/Guide_Sites/P8050060.jpg',
      highlights: [
        'Activités de groupe dynamiques',
        'Exploration des mangroves',
        'Jeux traditionnels',
        'Déjeuner collectif',
        'Échanges culturels'
      ],
      included: [
        'Guide animateur spécialisé',
        'Matériel d\'activités',
        'Transport groupe',
        'Déjeuner buffet local',
        'Animations culturelles'
      ]
    }
  ];

  const advantages = [
    {
      icon: <Crown className="w-8 h-8" />,
      title: 'Service Premium',
      description: 'Attention personnalisée et service haut de gamme pour une expérience inoubliable'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Sécurité Garantie',
      description: 'Assurance complète, véhicules entretenus et guides certifiés pour votre tranquillité'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Expérience Authentique',
      description: 'Accès privilégié aux traditions locales et rencontres authentiques avec les communautés'
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: 'Souvenirs Mémorables',
      description: 'Photos professionnelles et souvenirs personnalisés pour immortaliser votre voyage'
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <OptimizedImage
            src="/images/Guide_Sites/manos-1-2.jpg"
            className="absolute inset-0 w-full h-full"
            alt="Tours privés avec Manos à Grand-Popo"
            fallbackText="Tours privés avec Manos à Grand-Popo"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 font-playfair"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Tours Privés
            <span className="block text-yellow-400">& Groupes</span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl mb-8 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Explorez Grand-Popo avec un service personnalisé,
            <span className="text-cyan-400"> en privé ou en petit groupe convivial</span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Réserver un Tour Privé
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
              Rejoindre un Groupe
            </button>
          </motion.div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(31, 41, 55, 0.95) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">
              Pourquoi Choisir Nos Tours ?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Une expérience unique alliant expertise locale, service premium et authenticité
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {advantage.title}
                </h3>
                <p className="text-gray-300">
                  {advantage.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Private Tours Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.98) 0%, rgba(31, 41, 55, 0.98) 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">
              Tours Privés Exclusifs
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expériences sur-mesure avec guide dédié et service premium
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {privateTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <OptimizedImage
                    src={tour.image}
                    className="w-full h-full"
                    alt={tour.title}
                    fallbackText={tour.title}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Privé
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-playfair">
                    {tour.title}
                  </h3>
                  <p className="text-purple-600 font-semibold mb-3">
                    {tour.subtitle}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {tour.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {tour.groupSize}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Points forts :</h4>
                    <ul className="space-y-1">
                      {tour.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-purple-600">
                      {tour.price}
                    </span>
                    <span className="text-sm text-gray-500">par groupe</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300">
                    Réserver ce Tour Privé
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Group Tours Section */}
      <section className="py-20" style={{ background: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)' }}>
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6 font-playfair">
              Tours en Groupe
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Partagez l'aventure avec d'autres voyageurs dans une ambiance conviviale
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {groupTours.map((tour, index) => (
              <motion.div
                key={tour.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-64">
                  <OptimizedImage
                    src={tour.image}
                    className="w-full h-full"
                    alt={tour.title}
                    fallbackText={tour.title}
                  />
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Groupe
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 font-playfair">
                    {tour.title}
                  </h3>
                  <p className="text-green-600 font-semibold mb-3">
                    {tour.subtitle}
                  </p>
                  <p className="text-gray-600 mb-4">
                    {tour.description}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {tour.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {tour.groupSize}
                    </div>
                  </div>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Inclus :</h4>
                    <ul className="space-y-1">
                      {tour.included.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-blue-500" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex justify-between items-center mb-4">
                    <span className="text-2xl font-bold text-green-600">
                      {tour.price}
                    </span>
                    <span className="text-sm text-gray-500">par personne</span>
                  </div>

                  <button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-3 rounded-full font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300">
                    Rejoindre ce Groupe
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-playfair">
              Prêt pour Votre Aventure ?
            </h2>
            <p className="text-xl mb-8 leading-relaxed">
              Contactez Manos pour organiser votre tour privé ou rejoindre un groupe. 
              Chaque expérience est unique et adaptée à vos envies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Demander un Devis Privé
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
                Voir les Prochains Groupes
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
