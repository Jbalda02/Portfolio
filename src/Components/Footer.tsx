import Reveal from "./Reveal";

type ContactInfo = {
  id: number;
  platform: string;
  user_name: string;
  img_source: string;
  link: string;
};

type FooterProps = {
  contactInfo: ContactInfo[];
};

/*
 * Inline paths instead of hotlinked PNGs: the LinkedIn image was 404ing in
 * production, and remote icons cannot inherit colour or hover state.
 */
const ICONS: Record<string, string> = {
  LinkedIn:
    "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",
  GitHub:
    "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12",
  Email:
    "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z",
};

function Footer({ contactInfo }: FooterProps) {
  return (
    <footer
      id="contact-footer"
      className="relative border-t border-edge bg-ink-900"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent"
      />

      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-center gap-8">
            <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {contactInfo.map((contact) => (
                <li key={contact.id}>
                  <a
                    href={contact.link}
                    target={contact.link.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    aria-label={contact.platform}
                    title={contact.user_name}
                    className="group flex h-12 w-12 items-center justify-center rounded-full border border-edge bg-ink-600/60 text-mist transition-all duration-300 hover:-translate-y-1 hover:border-brand/60 hover:text-brand-soft hover:shadow-[0_12px_30px_-12px_rgba(139,92,246,.8)]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-5 w-5 transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    >
                      <path d={ICONS[contact.platform] ?? ICONS.Email} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>

            <p className="text-center text-xs text-dusk">
              &copy; {new Date().getFullYear()} Jose Fernando Balda. Built with
              React, TypeScript and Tailwind CSS.
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}

export default Footer;
