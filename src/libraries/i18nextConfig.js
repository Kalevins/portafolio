import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import HttpApi from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(initReactI18next).use(LanguageDetector).use(HttpApi).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false
  },
  backend: {
    loadPath: import.meta.env.VITE_ENDPOINT_TRANSLATION,
    requestOptions: {
      mode: 'cors',
      credentials: 'same-origin',
      cache: 'default'
    }
  }
})
