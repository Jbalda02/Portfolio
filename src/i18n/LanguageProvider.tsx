import { useCallback, useEffect, useMemo, useState, type ReactNode } from "react";
import { LanguageContext } from "./context";
import { translations, type Language } from "./translations";

const STORAGE_KEY = "portfolio-lang";

/**
 * Saved choice first, then the browser's preference, then English.
 * Read lazily so the very first paint is already in the right language.
 */
function readInitialLanguage(): Language {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "es") return stored;

  return window.navigator.language.toLowerCase().startsWith("es") ? "es" : "en";
}

function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>(readInitialLanguage);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    // Keeps screen readers and browser translation prompts in sync.
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = useCallback(
    () => setLang((current) => (current === "en" ? "es" : "en")),
    [],
  );

  const value = useMemo(
    () => ({ lang, t: translations[lang], setLang, toggleLang }),
    [lang, toggleLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export default LanguageProvider;
