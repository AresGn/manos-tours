'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  X,
  Calendar,
  Users,
  User,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  CheckCircle,
  ArrowRight,
  Clock
} from 'lucide-react';
import { Circuit } from '@/types/circuits';
import { calculerPrixCircuit } from '@/data/circuits';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  circuit: Circuit;
  initialAdultes?: number;
  initialEnfants?: number;
}

interface BookingFormData {
  nombreAdultes: number;
  nombreEnfants: number;
  datePreferee: string;
  heurePreferee: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  pays: string;
  demandesSpeciales: string;
}

export default function BookingModal({ 
  isOpen, 
  onClose, 
  circuit, 
  initialAdultes = 1, 
  initialEnfants = 0 
}: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<BookingFormData>({
    nombreAdultes: initialAdultes,
    nombreEnfants: initialEnfants,
    datePreferee: '',
    heurePreferee: '',
    prenom: '',
    nom: '',
    email: '',
    telephone: '',
    pays: 'Bénin',
    demandesSpeciales: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const prixCalcule = calculerPrixCircuit({
    circuit,
    nombreAdultes: formData.nombreAdultes,
    nombreEnfants: formData.nombreEnfants
  });

  const updateFormData = (field: keyof BookingFormData, value: string | number) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulation d'envoi (à remplacer par une vraie API)
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setStep(4);
    } catch (error) {
      console.error('Erreur lors de la réservation:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetAndClose = () => {
    setStep(1);
    setIsSubmitted(false);
    setIsSubmitting(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
            onClick={resetAndClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="inline-block w-full max-w-4xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-blue-900/95 backdrop-blur-sm shadow-xl rounded-2xl relative border border-blue-700/50"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white font-playfair">
                  Réserver : {circuit.nom}
                </h2>
                <p className="text-gray-300 mt-1">{circuit.duree} • {circuit.difficulte}</p>
              </div>
              <button
                onClick={resetAndClose}
                className="p-2 text-gray-300 hover:text-white transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Progress bar */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-2">
                {[1, 2, 3, 4].map((stepNumber) => (
                  <div
                    key={stepNumber}
                    className={`flex items-center justify-center w-8 h-8 rounded-full text-sm font-semibold ${
                      step >= stepNumber
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-200 text-gray-600'
                    }`}
                  >
                    {stepNumber === 4 && isSubmitted ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      stepNumber
                    )}
                  </div>
                ))}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${(step / 4) * 100}%` }}
                />
              </div>
            </div>

            {/* Step 1: Participants et date */}
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-white">Participants et date</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nombre d'adultes
                    </label>
                    <select
                      value={formData.nombreAdultes}
                      onChange={(e) => updateFormData('nombreAdultes', Number(e.target.value))}
                      className="w-full px-3 py-2 border border-blue-600 bg-blue-800 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    >
                      {[...Array(10)].map((_, i) => (
                        <option key={i} value={i + 1}>{i + 1} adulte{i > 0 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  {circuit.ageMinimum && (
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre d'enfants (≥ {circuit.ageMinimum} ans)
                      </label>
                      <select
                        value={formData.nombreEnfants}
                        onChange={(e) => updateFormData('nombreEnfants', Number(e.target.value))}
                        className="w-full px-3 py-2 border border-blue-600 bg-blue-800 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      >
                        {[...Array(6)].map((_, i) => (
                          <option key={i} value={i}>{i} enfant{i > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Date préférée
                    </label>
                    <input
                      type="date"
                      value={formData.datePreferee}
                      onChange={(e) => updateFormData('datePreferee', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full px-3 py-2 border border-blue-600 bg-blue-800 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Heure préférée
                    </label>
                    <select
                      value={formData.heurePreferee}
                      onChange={(e) => updateFormData('heurePreferee', e.target.value)}
                      className="w-full px-3 py-2 border border-blue-600 bg-blue-800 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    >
                      <option value="">Sélectionner une heure</option>
                      <option value="08:00">08:00</option>
                      <option value="09:00">09:00</option>
                      <option value="10:00">10:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                    </select>
                  </div>
                </div>

                {/* Récapitulatif prix */}
                <div className="bg-blue-800/50 rounded-lg p-4 border border-blue-700/50">
                  <h4 className="font-semibold text-white mb-3">Récapitulatif des prix</h4>
                  <div className="space-y-2 text-sm">
                    {prixCalcule.detailsCalcul.map((detail, index) => (
                      <div key={index} className="flex justify-between">
                        <span className="text-gray-300">{detail.split(':')[0]}:</span>
                        <span className="font-medium text-white">{detail.split(':')[1]}</span>
                      </div>
                    ))}
                  </div>
                  <div className="border-t border-blue-700/50 mt-3 pt-3">
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-white">Total:</span>
                      <span className="text-xl font-bold text-blue-400">
                        {prixCalcule.montantTotal.toLocaleString()} F CFA
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    onClick={() => setStep(2)}
                    disabled={!formData.datePreferee}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continuer
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 2: Informations personnelles */}
            {step === 2 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-white">Vos informations</h3>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      value={formData.prenom}
                      onChange={(e) => updateFormData('prenom', e.target.value)}
                      className="w-full px-3 py-2 border border-blue-600 bg-blue-800 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      value={formData.nom}
                      onChange={(e) => updateFormData('nom', e.target.value)}
                      className="w-full px-3 py-2 border border-blue-600 bg-blue-800 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      className="w-full px-3 py-2 border border-blue-600 bg-blue-800 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      value={formData.telephone}
                      onChange={(e) => updateFormData('telephone', e.target.value)}
                      className="w-full px-3 py-2 border border-blue-600 bg-blue-800 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                      required
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Pays
                    </label>
                    <input
                      type="text"
                      value={formData.pays}
                      onChange={(e) => updateFormData('pays', e.target.value)}
                      className="w-full px-3 py-2 border border-blue-600 bg-blue-800 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400"
                    />
                  </div>

                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Demandes spéciales ou commentaires
                    </label>
                    <textarea
                      value={formData.demandesSpeciales}
                      onChange={(e) => updateFormData('demandesSpeciales', e.target.value)}
                      rows={3}
                      className="w-full px-3 py-2 border border-blue-600 bg-blue-800 text-white rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-blue-400 placeholder-gray-400"
                      placeholder="Allergies, besoins spéciaux, questions..."
                    />
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(1)}
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    Retour
                  </button>
                  <button
                    onClick={() => setStep(3)}
                    disabled={!formData.prenom || !formData.nom || !formData.email || !formData.telephone}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continuer
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 3: Confirmation */}
            {step === 3 && (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="space-y-6"
              >
                <h3 className="text-xl font-semibold text-white">Confirmation de votre réservation</h3>

                <div className="bg-blue-800/50 rounded-lg p-6 space-y-4 border border-blue-700/50">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Circuit</h4>
                      <p className="text-gray-300">{circuit.nom}</p>
                      <p className="text-sm text-gray-400">{circuit.duree} • {circuit.difficulte}</p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Participants</h4>
                      <p className="text-gray-300">
                        {formData.nombreAdultes} adulte{formData.nombreAdultes > 1 ? 's' : ''}
                        {formData.nombreEnfants > 0 && `, ${formData.nombreEnfants} enfant${formData.nombreEnfants > 1 ? 's' : ''}`}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Date et heure</h4>
                      <p className="text-gray-300">
                        {new Date(formData.datePreferee).toLocaleDateString('fr-FR')}
                        {formData.heurePreferee && ` à ${formData.heurePreferee}`}
                      </p>
                    </div>

                    <div>
                      <h4 className="font-semibold text-white mb-2">Contact</h4>
                      <p className="text-gray-300">{formData.prenom} {formData.nom}</p>
                      <p className="text-sm text-gray-400">{formData.email}</p>
                      <p className="text-sm text-gray-400">{formData.telephone}</p>
                    </div>
                  </div>

                  <div className="border-t border-blue-700/50 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-bold text-white">Total à payer:</span>
                      <span className="text-2xl font-bold text-blue-400">
                        {prixCalcule.montantTotal.toLocaleString()} F CFA
                      </span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Note:</strong> Cette réservation sera confirmée par Manos dans les 24h. 
                    Vous recevrez un email de confirmation avec les détails de paiement.
                  </p>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={() => setStep(2)}
                    className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300"
                  >
                    Retour
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 transition-all duration-300 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        Confirmer la réservation
                        <CheckCircle className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Step 4: Succès */}
            {step === 4 && isSubmitted && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="w-16 h-16 bg-green-600/20 rounded-full flex items-center justify-center mx-auto border border-green-500/50">
                  <CheckCircle className="w-8 h-8 text-green-400" />
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Réservation envoyée !</h3>
                  <p className="text-gray-300">
                    Merci {formData.prenom} ! Votre demande de réservation a été envoyée à Manos.
                  </p>
                </div>

                <div className="bg-green-600/20 border border-green-500/50 rounded-lg p-4">
                  <p className="text-sm text-green-200">
                    Vous recevrez une confirmation par email dans les 24h avec les détails de paiement
                    et les instructions pour finaliser votre réservation.
                  </p>
                </div>
                
                <div className="space-y-3">
                  <button
                    onClick={resetAndClose}
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Fermer
                  </button>
                  
                  <div className="text-sm text-gray-300">
                    <p>Questions ? Contactez Manos directement :</p>
                    <div className="flex items-center justify-center gap-4 mt-2">
                      <a
                        href="tel:+22997123456"
                        className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                      >
                        <Phone className="w-4 h-4" />
                        +229 97 12 34 56
                      </a>
                      <a
                        href="mailto:manos@grandpopotours.com"
                        className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                      >
                        <Mail className="w-4 h-4" />
                        Email
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}
