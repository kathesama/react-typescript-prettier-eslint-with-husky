import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

import en from './locales/en.json';
import es from './locales/es.json';

export const defaultLanguage = 'en';
export const supportedLanguages = ['en', 'es'] as const;

export const resources = {
  en: {
    translation: en,
  },
  es: {
    translation: es,
  },
} as const;

if (!i18n.isInitialized) {
  void i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
      fallbackLng: defaultLanguage,
      interpolation: {
        escapeValue: false,
      },
      resources,
      supportedLngs: [...supportedLanguages],
    });
}

export default i18n;
