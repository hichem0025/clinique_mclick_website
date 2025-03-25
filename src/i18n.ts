// i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import translation files
import translationFR from './locales/fr/translation.json';
import translationAR from './locales/ar/translation.json'; // Import Arabic translations

const resources = {
    fr: {
        translation: translationFR,
    },
    ar: {
        translation: translationAR,
    },
};

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: 'fr', // Default language
        fallbackLng: 'fr',
        debug: true, // Add this line for debugging
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
