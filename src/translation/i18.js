/* eslint-disable import/no-extraneous-dependencies */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import englishTranslation from './en/translation.json';
import ukrainianTranslation from './ua/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: false,

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    resources: {
      en: {
        translation: englishTranslation,
      },
      ua: {
        translation: ukrainianTranslation,
      },
    },
  });
