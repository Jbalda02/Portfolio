import { useState, type FormEvent } from "react";
import { Link } from "react-router-dom";
import Reveal from "../Components/Reveal";
import { useLanguage } from "../i18n/context";

// Set by the person deploying this site: create a form at formspree.io
// pointed at your inbox, then put its ID in VITE_FORMSPREE_ID (see .env.example).
// Formspree relays the submission by email — no backend of our own needed.
const FORM_ID = import.meta.env.VITE_FORMSPREE_ID;
const ENDPOINT = FORM_ID ? `https://formspree.io/f/${FORM_ID}` : null;

type Status = "idle" | "sending" | "success" | "error";

function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const { t } = useLanguage();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!ENDPOINT) return;

    const form = event.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="relative flex min-h-[100svh] items-center justify-center px-4 py-28 sm:px-6 lg:px-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-dot-grid mask-fade-edges opacity-50" />
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 animate-aurora rounded-full bg-brand/20 blur-[130px]" />
      </div>

      <Reveal className="relative z-10 w-full max-w-lg">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-mist transition-colors duration-500 hover:text-chalk"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
          {t.contactPage.back}
        </Link>

        <div className="rounded-2xl border border-edge bg-ink-600/60 p-6 backdrop-blur-sm sm:p-8">
          <h1 className="font-display text-2xl font-bold tracking-tight text-chalk sm:text-3xl">
            {t.contactPage.title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-mist">
            {t.contactPage.subtitle}
          </p>

          {!ENDPOINT ? (
            <div className="mt-8 rounded-xl border border-edge-bright bg-ink-500/40 p-5 text-sm text-mist">
              <p>{t.contactPage.notConnected}</p>
              <a
                href="mailto:jbaldac02@gmail.com"
                className="mt-2 inline-block font-semibold text-brand-soft transition-colors duration-500 hover:text-chalk"
              >
                jbaldac02@gmail.com
              </a>
            </div>
          ) : status === "success" ? (
            <div className="mt-8 rounded-xl border border-brand/30 bg-brand/10 p-5 text-sm text-chalk">
              <p className="font-semibold">{t.contactPage.successTitle}</p>
              <p className="mt-1 text-mist">{t.contactPage.successBody}</p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-4 text-sm font-semibold text-brand-soft underline decoration-edge-bright underline-offset-4 transition-colors duration-500 hover:text-chalk"
              >
                {t.contactPage.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-5">
              {/* Honeypot: hidden from real visitors, Formspree silently drops submissions that fill it. */}
              <input
                type="text"
                name="_gotcha"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />
              <input type="hidden" name="_subject" value={t.contactPage.subject} />

              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-mist">
                  {t.contactPage.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  className="w-full rounded-xl border border-edge bg-ink-800/60 px-4 py-2.5 text-sm text-chalk placeholder:text-dusk focus:border-brand focus:outline-none"
                  placeholder={t.contactPage.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-mist">
                  {t.contactPage.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-edge bg-ink-800/60 px-4 py-2.5 text-sm text-chalk placeholder:text-dusk focus:border-brand focus:outline-none"
                  placeholder={t.contactPage.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-mist">
                  {t.contactPage.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-edge bg-ink-800/60 px-4 py-2.5 text-sm text-chalk placeholder:text-dusk focus:border-brand focus:outline-none"
                  placeholder={t.contactPage.messagePlaceholder}
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-400">
                  {t.contactPage.errorPrefix}{" "}
                  <a href="mailto:jbaldac02@gmail.com" className="underline">
                    jbaldac02@gmail.com
                  </a>{" "}
                  {t.contactPage.errorSuffix}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-12px_rgba(139,92,246,.9)] transition-transform duration-500 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {status === "sending" ? t.contactPage.sending : t.contactPage.submit}
              </button>
            </form>
          )}
        </div>
      </Reveal>
    </main>
  );
}

export default Contact;
