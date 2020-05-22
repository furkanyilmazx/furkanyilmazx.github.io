import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { MESSAGES_TR, MESSAGES_EN } from "@furkanyilmazx/translations";
import { LOCALE_TR } from "@furkanyilmazx/constants/i18n";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: MESSAGES_EN,
      },
      tr: {
        translation: MESSAGES_TR,
      },
    },
    fallbackLng: LOCALE_TR,
    keySeparator: false,
    nsSeparator: false,
  });
export default i18n;
