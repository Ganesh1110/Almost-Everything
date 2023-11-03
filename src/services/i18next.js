import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import engTranslation from "../locales/eng.json";
import tamTranslation from "../locales/tam.json";
import malTranslation from "../locales/mal.json";
import hinTranslation from "../locales/hin.json";
import telTranslation from "../locales/tel.json";

export const languageResources = {
  eng: { translation: engTranslation },
  tam: { translation: tamTranslation },
  mal: { translation: malTranslation },
  hin: { translation: hinTranslation },
  tel: { translation: telTranslation },
};

i18next.use(initReactI18next).init({
  compatibilityJSON: "v3",
  lng: "en",
  fallbackLng: "en",
  resources: languageResources,
});

export default i18next;
