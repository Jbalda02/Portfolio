import { useLanguage } from "../i18n/context";
import type { Language } from "../i18n/translations";

const OPTIONS: Language[] = ["en", "es"];

/**
 * Segmented EN / ES pill. A sliding highlight sits behind the active option so
 * the change reads as motion rather than a colour flip.
 */
function LanguageToggle() {
  const { lang, setLang, toggleLang, t } = useLanguage();

  return (
    <div
      role="group"
      aria-label={t.langToggle.label}
      className="relative flex items-center rounded-full border border-edge bg-ink-600/60 p-0.5 backdrop-blur-sm transition-colors duration-500 hover:border-edge-bright"
    >
      <span
        aria-hidden="true"
        className={`absolute inset-y-0.5 left-0.5 w-[calc(50%-0.125rem)] rounded-full bg-brand/90 shadow-[0_6px_18px_-8px_rgba(139,92,246,.9)] transition-transform duration-500 ${
          lang === "es" ? "translate-x-full" : "translate-x-0"
        }`}
      />

      {OPTIONS.map((option) => (
        <button
          key={option}
          type="button"
          // Both buttons drive the same two-state switch; clicking the active
          // one is a no-op rather than a toggle back.
          onClick={() => (option === lang ? undefined : toggleLang())}
          onKeyDown={(event) => {
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              setLang(event.key === "ArrowLeft" ? "en" : "es");
            }
          }}
          aria-pressed={option === lang}
          className={`relative z-10 rounded-full px-2.5 py-1 text-xs font-semibold tracking-wide transition-colors duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand sm:px-3 ${
            option === lang ? "text-white" : "text-mist hover:text-chalk"
          }`}
        >
          {t.langToggle[option]}
        </button>
      ))}
    </div>
  );
}

export default LanguageToggle;
