/*
 * All user-facing copy lives here so the language toggle can swap it in one
 * place. `es` is typed against `en`, so adding a key to English without a
 * Spanish counterpart is a compile error rather than a missing string at
 * runtime.
 */

export const en = {
  nav: {
    about: "About",
    projects: "Projects",
    contact: "Contact",
  },
  langToggle: {
    label: "Change language",
    en: "EN",
    es: "ES",
  },
  hero: {
    badge: "Available for freelance work",
    name: "Jose Fernando Balda",
    tagline: "Quality Web Development",
    intro:
      "Freelance web developer and Computer Science student, building fast and accessible interfaces with React, TypeScript and Tailwind CSS.",
    viewWork: "View my work",
    getInTouch: "Get in touch",
    scrollHint: "Scroll to content",
  },
  stack: {
    eyebrow: "Toolkit",
    title: "Technologies I work with",
    frontend: "FrontEnd",
    backend: "BackEnd",
    other: "Other",
  },
  projects: {
    eyebrow: "Selected work",
    title: "Projects",
    empty: "No projects available",
  },
  about: {
    title: "About me",
    text: "I am a Freelancer Web Developer and Currently a Computer Science Student, with a passion for web development. I have experience in the development of web applications using technologies such as React, Node.js, and Tailwind Css. I am always looking to learn new technologies and improve my skills. I am currently looking for opportunities to work as a web developer.",
  },
  contactSection: {
    title: "Contact",
    text: "Lets Connect! And Start doing projects together, I am always looking for new opportunities to grow as a person and as a professional. You can contact me through my email or my social networks. I am always open to new challenges and opportunities.",
    cta: "Send me a message",
    emailPrefix: "or email me directly at",
  },
  contactPage: {
    back: "Back to portfolio",
    title: "Send me a message",
    subtitle:
      "Tell me a bit about your project or opportunity and I'll get back to you by email.",
    notConnected: "This form isn't connected yet — please reach out directly instead:",
    successTitle: "Message sent — thank you!",
    successBody: "I'll reply to you by email as soon as I can.",
    sendAnother: "Send another message",
    name: "Name",
    namePlaceholder: "Your name",
    email: "Email",
    emailPlaceholder: "you@example.com",
    message: "Message",
    messagePlaceholder: "What would you like to build?",
    errorPrefix: "Something went wrong sending that — please try again, or email",
    errorSuffix: "directly.",
    sending: "Sending…",
    submit: "Send message",
    subject: "New message from your portfolio",
  },
  footer: {
    builtWith: "Built with React, TypeScript and Tailwind CSS.",
  },
};

export type Translation = typeof en;

export const es: Translation = {
  nav: {
    about: "Sobre mí",
    projects: "Proyectos",
    contact: "Contacto",
  },
  langToggle: {
    label: "Cambiar idioma",
    en: "EN",
    es: "ES",
  },
  hero: {
    badge: "Disponible para trabajo freelance",
    name: "Jose Fernando Balda",
    tagline: "Desarrollo Web de Calidad",
    intro:
      "Desarrollador web freelance y estudiante de Ciencias de la Computación, creando interfaces rápidas y accesibles con React, TypeScript y Tailwind CSS.",
    viewWork: "Ver mi trabajo",
    getInTouch: "Contáctame",
    scrollHint: "Desplázate al contenido",
  },
  stack: {
    eyebrow: "Herramientas",
    title: "Tecnologías con las que trabajo",
    frontend: "FrontEnd",
    backend: "BackEnd",
    other: "Otros",
  },
  projects: {
    eyebrow: "Trabajo destacado",
    title: "Proyectos",
    empty: "No hay proyectos disponibles",
  },
  about: {
    title: "Sobre mí",
    text: "Soy desarrollador web freelance y actualmente estudiante de Ciencias de la Computación, con pasión por el desarrollo web. Tengo experiencia creando aplicaciones web con tecnologías como React, Node.js y Tailwind CSS. Siempre busco aprender nuevas tecnologías y mejorar mis habilidades. Actualmente estoy buscando oportunidades para trabajar como desarrollador web.",
  },
  contactSection: {
    title: "Contacto",
    text: "¡Conectemos! Y empecemos a hacer proyectos juntos. Siempre estoy buscando nuevas oportunidades para crecer como persona y como profesional. Puedes contactarme por correo o por mis redes sociales. Siempre estoy abierto a nuevos retos y oportunidades.",
    cta: "Envíame un mensaje",
    emailPrefix: "o escríbeme directamente a",
  },
  contactPage: {
    back: "Volver al portafolio",
    title: "Envíame un mensaje",
    subtitle:
      "Cuéntame un poco sobre tu proyecto u oportunidad y te responderé por correo.",
    notConnected: "Este formulario aún no está conectado — escríbeme directamente:",
    successTitle: "¡Mensaje enviado, gracias!",
    successBody: "Te responderé por correo lo antes posible.",
    sendAnother: "Enviar otro mensaje",
    name: "Nombre",
    namePlaceholder: "Tu nombre",
    email: "Correo",
    emailPlaceholder: "tu@ejemplo.com",
    message: "Mensaje",
    messagePlaceholder: "¿Qué te gustaría construir?",
    errorPrefix: "Algo salió mal al enviarlo — inténtalo de nuevo o escribe a",
    errorSuffix: "directamente.",
    sending: "Enviando…",
    submit: "Enviar mensaje",
    subject: "Nuevo mensaje desde tu portafolio",
  },
  footer: {
    builtWith: "Hecho con React, TypeScript y Tailwind CSS.",
  },
};

export const translations = { en, es };

export type Language = keyof typeof translations;
