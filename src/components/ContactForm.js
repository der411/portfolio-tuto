import React, { useState } from 'react';
import { XIcon } from '@heroicons/react/solid';

function ContactForm() {
  // Etats pour gérer l'ouverture et la fermeture du formulaire et de Calendly
  const [isOpen, setIsOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  // Etat pour gérer les données du formulaire
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  // Etat pour gérer le message de statut
  const [status, setStatus] = useState('');

  // Fonction pour ouvrir et fermer le formulaire
  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setIsCalendlyOpen(false); // Assure que Calendly est fermé lorsque le formulaire est ouvert
  };

  // Fonction pour ouvrir et fermer Calendly
  const toggleCalendly = () => setIsCalendlyOpen(!isCalendlyOpen);

  // Fonction pour gérer les changements dans le formulaire
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Fonction pour envoyer le formulaire
  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiKey = process.env.REACT_APP_W3F_API_KEY;

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: apiKey,
        ...formData,
      }),
    });

    const result = await res.json();
    if (result.success) {
      setStatus('Succès ! Votre message a été envoyé.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      }); 
      
      setTimeout(() => {
        setStatus('');
        setIsOpen(false);
      }, 3000); 
    } else {
      setStatus("Oups ! Un problème s'est produit. Veuillez réessayer.");
    }
  };

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className={`relative ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="absolute right-full top-1 transform -translate-y-1">
          <button
            onClick={toggleMenu}
            className="flex items-center justify-center p-4 rounded-l-lg bg-gray-400 bg-opacity-50 dark:bg-gray-700 dark:bg-opacity-50 font-bold text-black dark:text-white shadow-md hover:shadow-lg"
            aria-label={isOpen ? "Fermer le formulaire de contact" : "Ouvrir le formulaire de contact"}
          >
            {isOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <i className="fas fa-envelope"></i>
            )}
          </button>
        </div>

        {/* Affichage conditionnel du formulaire ou du widget Calendly */}
        <div className={`w-72 p-4 bg-nav dark:bg-custom-gray border dark:border-gray-700 rounded-bl-lg shadow-lg ${isOpen ? 'block' : 'hidden'}`}>
          {isCalendlyOpen ? (
            // Afficher l'iframe Calendly
            <div>
              <iframe
                src="https://calendly.com/vincentvaiti/30min" // A remplacer par votre lien Calendly
                width="100%"
                height="500"
                className="rounded-lg shadow-lg border dark:border-gray-700"
                style={{ backgroundColor: 'white', border: 'none' }}
                title="Calendly"
              ></iframe>
              {/* Bouton pour revenir au formulaire */}
              <button
                onClick={toggleCalendly}
                className="mt-4 w-full rounded-md bg-gray-400 dark:bg-gray-700 py-2 px-4 text-black dark:text-white shadow-sm hover:bg-gray-500 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
              >
                Revenir au formulaire
              </button>
            </div>
          ) : (
            // Afficher le formulaire de contact
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 dark:text-white">
                  Prénom
                </label>
                <input
                  type="text"
                  id="prenom"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-bg-dark border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-gray-700 dark:text-white">
                  Nom
                </label>
                <input
                  type="text"
                  id="nom"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-bg-dark border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-white">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-bg-dark border-gray-300 dark:border-gray-700 text-gray-700 dark:text-white"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-white">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="mt-1 block w-full rounded-md bg-gray-100 dark:bg-bg-dark border-gray-300 dark:border-gray-700 shadow-sm text-gray-700 dark:text-white"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-md bg-gradient-to-r from-custom-blue to-custom-blue-dark py-2 px-4 text-white shadow-sm hover:from-custom-blue-dark hover:to-custom-blue focus:outline-none focus:ring-2 focus:ring-custom-blue focus:ring-offset-2"
              >
                Envoyer
              </button>
              {status && <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">{status}</p>}
            </form>
          )}

          {/* Nouveau bouton pour basculer vers Calendly */}
          {!isCalendlyOpen && (
            <button
              onClick={toggleCalendly}
              className="mt-4 w-full rounded-md bg-gray-400 dark:bg-gray-700 py-2 px-4 text-black dark:text-white shadow-sm hover:bg-gray-500 dark:hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Planifier un rendez-vous
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
