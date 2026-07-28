import { createContext, useContext } from "react";
import { en, type Language, type Translation } from "./translations";

export type LanguageContextValue = {
  lang: Language;
  /** The active dictionary, e.g. `t.nav.about`. */
  t: Translation;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
};

/*
 * The default keeps the app renderable outside the provider (tests, isolated
 * stories); in the real tree LanguageProvider always supplies a value.
 */
export const LanguageContext = createContext<LanguageContextValue>({
  lang: "en",
  t: en,
  setLang: () => {},
  toggleLang: () => {},
});

export function useLanguage() {
  return useContext(LanguageContext);
}
