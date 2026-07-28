import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Hero from "../Components/Hero";
import PreSection from "../Components/PreSection";
import TextSection from "../Components/TextSection";
import SmallGallery from "../Components/SmallGallery";
import BigGallery from "../Components/BigGallery";
import Reveal from "../Components/Reveal";
import { useLanguage } from "../i18n/context";
// Vite resolves JSON imports natively; the old `assert { type: 'json' }`
// syntax is deprecated and breaks on newer toolchains.
import data from "../jsons/Technologies.json";
import projectData from "../jsons/projects.json";
//Images Imports
import section1image from "../assets/Images/Asap_React_140120.jpg";
import section2image from "../assets/Images/ksr-banner-5.jpg";
import aboutmeImg from "../assets/Icons/Portafolio.jpg";
import classicGamesImg from "../assets/Images/ClassicGamesGallery.png";
import todoListImg from "../assets/Images/toDoList.png";
import nenecakesImg from "../assets/Images/nenecakes.png";
import portfolioImg from "../assets/Images/portafolio.png";

const contactImg = "https://cdn-icons-png.flaticon.com/512/493/493808.png";

function Home() {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    if (!location.hash) return;
    const id = location.hash.slice(1);
    // Give the route a beat to mount before measuring its position.
    const timer = setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 60);
    return () => clearTimeout(timer);
  }, [location.hash]);

  const FrontEndTechnologies = data.FrontEndTechnologies;
  const BackendTechnologies = data.BackendTechnologies;
  const ManagementTechnologies = data.ManagmentTechnologies;

  return (
    <main>
      <Hero />

      <section id="stack" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              {t.stack.eyebrow}
            </p>
            <h2 className="mb-12 max-w-2xl font-display text-2xl font-bold tracking-tight text-chalk sm:text-3xl">
              {t.stack.title}
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            <SmallGallery technologies={FrontEndTechnologies} title={t.stack.frontend} delay={0} />
            <SmallGallery technologies={BackendTechnologies} title={t.stack.backend} delay={110} />
            <SmallGallery technologies={ManagementTechnologies} title={t.stack.other} delay={220} />
          </div>
        </div>
      </section>

      <PreSection ImageToLoad={section1image} />

      <section id="projects" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
              {t.projects.eyebrow}
            </p>
            <h2 className="mb-12 max-w-2xl font-display text-2xl font-bold tracking-tight text-chalk sm:text-3xl">
              {t.projects.title}
            </h2>
          </Reveal>

          <BigGallery
            projects={projectData.projects.map((p) => {
              const imageMap: Record<string, string> = {
                "1": classicGamesImg,
                "2": todoListImg,
                "3": nenecakesImg,
                "5": portfolioImg,
              };
              return imageMap[p.id] ? { ...p, image: imageMap[p.id] } : p;
            })}
          />
        </div>
      </section>

      <section id="about" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <TextSection
          text={t.about.text}
          imgSrc={aboutmeImg}
          title={t.about.title}
          variant="portrait"
        />
      </section>

      <PreSection ImageToLoad={section2image} strength={45} />

      <section id="contact" className="relative px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
        <TextSection
          text={t.contactSection.text}
          imgSrc={contactImg}
          title={t.contactSection.title}
          variant="icon"
          reversed
        >
          <div className="mt-8 flex flex-col items-start gap-4">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_40px_-12px_rgba(139,92,246,.9)] transition-transform duration-500 hover:-translate-y-0.5"
            >
              {t.contactSection.cta}
              <svg
                className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
            <a
              href="mailto:jbaldac02@gmail.com"
              className="text-sm text-mist underline decoration-edge-bright underline-offset-4 transition-colors duration-500 hover:text-brand-soft"
            >
              {t.contactSection.emailPrefix} jbaldac02@gmail.com
            </a>
          </div>
        </TextSection>
      </section>
    </main>
  );
}

export default Home;
