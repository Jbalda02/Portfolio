import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const links = [
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/#projects" },
  { label: "Contact", to: "/contact" },
];

function NavigationBar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "border-b border-edge bg-ink-800/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
      >
        <Link
          to="/"
          className="group font-display text-base font-bold tracking-wide text-chalk sm:text-lg"
        >
          JBalda
          <span className="ml-0.5 inline-block text-brand transition-transform duration-500 group-hover:translate-x-1">
            .
          </span>
        </Link>

        <ul className="flex items-center gap-1 sm:gap-2">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className="group relative block px-2 py-1.5 text-sm font-medium text-mist transition-colors duration-500 hover:text-chalk sm:px-3"
              >
                {link.label}
                <span className="absolute inset-x-2 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-brand to-spark transition-transform duration-500 group-hover:scale-x-100 sm:inset-x-3" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default NavigationBar;
