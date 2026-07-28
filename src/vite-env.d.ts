/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Formspree form ID (the part after https://formspree.io/f/) that receives the contact form. */
  readonly VITE_FORMSPREE_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
