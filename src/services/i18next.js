import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import en from "../locales/eng.json";
import ta from "../locales/tam.json";

export const languageResource = {
  eng: { translation: en },
  tam: { translation: ta },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  resources: languageResource,
});

export default i18next;
