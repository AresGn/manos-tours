'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  Calendar,
  Users,
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  X,
  Clock,
  Star
} from 'lucide-react';

interface BookingData {
  experience: {
    id: string;
    title: string;
    price: string;
    duration: string;
  };
  date?: string;
  time?: string;
  participants?: number;
  personalInfo?: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    country: string;
  };
  specialRequests?: string;
}

interface BookingSimulatorProps {
  isOpen: boolean;
  onClose: () => void;
  experience: {
    id: string;
    title: string;
    price: string;
    duration: string;
  };
}

export default function BookingSimulator({ isOpen, onClose, experience }: BookingSimulatorProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [bookingData, setBookingData] = useState<BookingData>({
    experience,
    participants: 2
  });

  const steps = [
    { id: 'datetime', title: 'Date & Heure', description: 'Choisissez votre créneau' },
    { id: 'participants', title: 'Participants', description: 'Nombre de personnes' },
    { id: 'personal', title: 'Informations', description: 'Vos coordonnées' },
    { id: 'payment', title: 'Paiement', description: 'Simulation de paiement' },
    { id: 'confirmation', title: 'Confirmation', description: 'Réservation confirmée' }
  ];

  const availableDates = [
    '2024-01-15', '2024-01-16', '2024-01-17', '2024-01-18', '2024-01-19',
    '2024-01-22', '2024-01-23', '2024-01-24', '2024-01-25', '2024-01-26'
  ];

  const availableTimes = ['06:00', '08:00', '10:00', '14:00', '16:00'];

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleClose = () => {
    setCurrentStep(0);
    setBookingData({ experience, participants: 2 });
    onClose();
  };

  const updateBookingData = (field: string, value: any) => {
    setBookingData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const updatePersonalInfo = (field: string, value: string) => {
    setBookingData(prev => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        [field]: value
      } as any
    }));
  };

  const calculateTotal = () => {
    const basePrice = parseInt(experience.price.replace(/[^\d]/g, ''));
    return basePrice * (bookingData.participants || 1);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 0: // Date & Time
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Sélectionnez une date</h3>
              <div className="grid grid-cols-5 gap-2">
                {availableDates.map(date => (
                  <button
                    key={date}
                    onClick={() => updateBookingData('date', date)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      bookingData.date === date
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {new Date(date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' })}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Choisissez l'heure</h3>
              <div className="grid grid-cols-5 gap-2">
                {availableTimes.map(time => (
                  <button
                    key={time}
                    onClick={() => updateBookingData('time', time)}
                    className={`p-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      bookingData.time === time
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        );

      case 1: // Participants
        return (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Nombre de participants</h3>
              <div className="flex items-center justify-center space-x-4">
                <button
                  onClick={() => updateBookingData('participants', Math.max(1, (bookingData.participants || 1) - 1))}
                  className="w-12 h-12 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200"
                >
                  -
                </button>
                <span className="text-3xl font-bold text-white w-16 text-center">
                  {bookingData.participants || 1}
                </span>
                <button
                  onClick={() => updateBookingData('participants', Math.min(10, (bookingData.participants || 1) + 1))}
                  className="w-12 h-12 rounded-full bg-gray-700 text-white hover:bg-gray-600 transition-colors duration-200"
                >
                  +
                </button>
              </div>
              <p className="text-gray-400 text-center mt-4">
                Maximum 10 participants par réservation
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Prix par personne:</span>
                <span className="text-white font-semibold">{experience.price}</span>
              </div>
              <div className="flex justify-between items-center mt-2">
                <span className="text-gray-300">Nombre de participants:</span>
                <span className="text-white font-semibold">{bookingData.participants || 1}</span>
              </div>
              <div className="border-t border-gray-600 mt-3 pt-3">
                <div className="flex justify-between items-center">
                  <span className="text-white font-bold">Total:</span>
                  <span className="text-blue-400 font-bold text-xl">
                    {calculateTotal().toLocaleString()} CFA
                  </span>
                </div>
              </div>
            </div>
          </div>
        );

      case 2: // Personal Information
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white mb-4">Vos informations personnelles</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Prénom</label>
                <input
                  type="text"
                  value={bookingData.personalInfo?.firstName || ''}
                  onChange={(e) => updatePersonalInfo('firstName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre prénom"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Nom</label>
                <input
                  type="text"
                  value={bookingData.personalInfo?.lastName || ''}
                  onChange={(e) => updatePersonalInfo('lastName', e.target.value)}
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Votre nom"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                value={bookingData.personalInfo?.email || ''}
                onChange={(e) => updatePersonalInfo('email', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="votre@email.com"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Téléphone</label>
              <input
                type="tel"
                value={bookingData.personalInfo?.phone || ''}
                onChange={(e) => updatePersonalInfo('phone', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+229 XX XX XX XX"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Pays de résidence</label>
              <select
                value={bookingData.personalInfo?.country || ''}
                onChange={(e) => updatePersonalInfo('country', e.target.value)}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Sélectionnez votre pays</option>
                <option value="BJ">Bénin</option>
                <option value="FR">France</option>
                <option value="US">États-Unis</option>
                <option value="CA">Canada</option>
                <option value="DE">Allemagne</option>
                <option value="UK">Royaume-Uni</option>
                <option value="OTHER">Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Demandes spéciales (optionnel)</label>
              <textarea
                value={bookingData.specialRequests || ''}
                onChange={(e) => updateBookingData('specialRequests', e.target.value)}
                rows={3}
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Allergies, besoins spéciaux, préférences..."
              />
            </div>
          </div>
        );

      case 3: // Payment Simulation
        return (
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white mb-4">Simulation de paiement</h3>
            
            <div className="bg-yellow-900/30 border border-yellow-600/50 rounded-lg p-4">
              <div className="flex items-center gap-2 text-yellow-400 mb-2">
                <Star className="w-5 h-5" />
                <span className="font-semibold">Mode Simulation</span>
              </div>
              <p className="text-yellow-200 text-sm">
                Ceci est une simulation. Aucun paiement réel ne sera effectué.
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6">
              <h4 className="text-white font-semibold mb-4">Récapitulatif de votre réservation</h4>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-300">Expérience:</span>
                  <span className="text-white">{experience.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Date:</span>
                  <span className="text-white">
                    {bookingData.date ? new Date(bookingData.date).toLocaleDateString('fr-FR') : 'Non sélectionnée'}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Heure:</span>
                  <span className="text-white">{bookingData.time || 'Non sélectionnée'}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Participants:</span>
                  <span className="text-white">{bookingData.participants || 1}</span>
                </div>
                <div className="border-t border-gray-600 pt-3">
                  <div className="flex justify-between">
                    <span className="text-white font-bold">Total à payer:</span>
                    <span className="text-blue-400 font-bold text-xl">
                      {calculateTotal().toLocaleString()} CFA
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-white font-semibold">Informations de paiement (simulation)</h4>
              
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Numéro de carte</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">Expiration</label>
                  <input
                    type="text"
                    placeholder="MM/AA"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
        );

      case 4: // Confirmation
        return (
          <div className="text-center space-y-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto"
            >
              <CheckCircle className="w-12 h-12 text-white" />
            </motion.div>
            
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">Réservation Confirmée !</h3>
              <p className="text-gray-300">
                Votre réservation a été confirmée avec succès (simulation).
              </p>
            </div>

            <div className="bg-gray-800/50 rounded-lg p-6 text-left">
              <h4 className="text-white font-semibold mb-4">Détails de votre réservation</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Numéro de réservation:</span>
                  <span className="text-white font-mono">MT-{Date.now().toString().slice(-6)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Expérience:</span>
                  <span className="text-white">{experience.title}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Date & Heure:</span>
                  <span className="text-white">
                    {bookingData.date ? new Date(bookingData.date).toLocaleDateString('fr-FR') : ''} à {bookingData.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Participants:</span>
                  <span className="text-white">{bookingData.participants}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Contact:</span>
                  <span className="text-white">{bookingData.personalInfo?.email}</span>
                </div>
              </div>
            </div>

            <div className="bg-blue-900/30 border border-blue-600/50 rounded-lg p-4">
              <p className="text-blue-200 text-sm">
                Un email de confirmation vous sera envoyé à {bookingData.personalInfo?.email} avec tous les détails de votre expérience.
              </p>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const canProceed = () => {
    switch (currentStep) {
      case 0:
        return bookingData.date && bookingData.time;
      case 1:
        return bookingData.participants && bookingData.participants > 0;
      case 2:
        return bookingData.personalInfo?.firstName && 
               bookingData.personalInfo?.lastName && 
               bookingData.personalInfo?.email && 
               bookingData.personalInfo?.phone;
      case 3:
        return true; // Simulation, always allow
      default:
        return false;
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={handleClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-700">
            <div>
              <h2 className="text-xl font-bold text-white">Réserver votre expérience</h2>
              <p className="text-gray-400 text-sm">{experience.title}</p>
            </div>
            <button
              onClick={handleClose}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Progress Steps */}
          <div className="px-6 py-4 border-b border-gray-700">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                    index <= currentStep 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-700 text-gray-400'
                  }`}>
                    {index < currentStep ? <CheckCircle className="w-4 h-4" /> : index + 1}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`w-12 h-0.5 mx-2 ${
                      index < currentStep ? 'bg-blue-600' : 'bg-gray-700'
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-2">
              <h3 className="text-white font-semibold">{steps[currentStep].title}</h3>
              <p className="text-gray-400 text-sm">{steps[currentStep].description}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 max-h-96 overflow-y-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderStepContent()}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between p-6 border-t border-gray-700">
            <button
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="flex items-center gap-2 px-4 py-2 text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" />
              Précédent
            </button>

            {currentStep < steps.length - 1 ? (
              <button
                onClick={handleNext}
                disabled={!canProceed()}
                className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
              >
                Suivant
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleClose}
                className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-200"
              >
                Terminer
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
