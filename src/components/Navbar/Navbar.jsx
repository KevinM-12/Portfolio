
import { useState, useEffect } from "react";
import { useTheme } from "../../context/ThemeContext";
import "./Navbar.css";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="navbar__theme-toggle"
      onClick={toggleTheme}
      aria-label={
        theme === "dark"
          ? "Cambiar a tema claro"
          : "Cambiar a tema oscuro"
      }
      title={theme === "dark" ? "Tema claro" : "Tema oscuro"}
      aria-pressed={theme === "light"}
    >
      {theme === "dark" ? (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" />
        </svg>
      )}
    </button>
  );
};

const SocialLinks = ({ mobile = false }) => (
  <div
    className={`navbar__social ${
      mobile ? "navbar__social--mobile" : "navbar__social--desktop"
    }`}
  >
    <a
      href="https://github.com/KevinM-12"
      target="_blank"
      rel="noreferrer"
      aria-label="Visitar GitHub"
      title="GitHub"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.53v-2.07c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.7 1.15 1.7 1.15.99 1.69 2.6 1.2 3.23.92.1-.72.39-1.2.7-1.48-2.48-.28-5.09-1.24-5.09-5.53 0-1.22.44-2.22 1.15-3-.12-.28-.5-1.42.11-2.96 0 0 .94-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.12-1.44 3.05-1.15 3.05-1.15.61 1.54.23 2.68.12 2.96.71.78 1.14 1.78 1.14 3.01 0 4.3-2.61 5.24-5.1 5.52.4.34.75 1.02.75 2.06V22c0 .29.2.63.76.53A11.1 11.1 0 0 0 12 .9Z"
        />
      </svg>
    </a>

    <a
      href="https://www.linkedin.com/in/kmv1507/"
      target="_blank"
      rel="noreferrer"
      aria-label="Visitar LinkedIn"
      title="LinkedIn"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.1 0H13v1.64h.05c.5-.94 1.73-1.94 3.56-1.94 3.8 0 4.5 2.5 4.5 5.75V21h-3.8v-5.82c0-1.39-.03-3.18-1.94-3.18-1.95 0-2.25 1.52-2.25 3.08V21H9.4V9Z"
        />
      </svg>
    </a>

    <a
      href="#"
      target="_blank"
      rel="noreferrer"
      aria-label="Ver repositorio del portafolio"
      title="Repositorio del portafolio"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12 2 3 7v10l9 5 9-5V7l-9-5Zm0 2.3 6.5 3.6L12 11.5 5.5 7.9 12 4.3ZM5 9.6l6 3.3v6.4l-6-3.3V9.6Zm8 9.7v-6.4l6-3.3V16l-6 3.3Z"
        />
      </svg>
    </a>
  </div>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");

  const links = [
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ];

  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const sectionIds = [
      "inicio",
      "sobre-mi",
      "habilidades",
      "proyectos",
      "contacto",
    ];

    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-25% 0px -65% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="navbar">
      <div className="navbar__container">

        {/* MARCA */}
        <a href="#inicio" className="navbar__brand" onClick={closeMenu}>
          <span className="navbar__logo">K.</span>
          <span className="navbar__name">Kevin Muños</span>
        </a>

        {/* NAVEGACIÓN */}
        <nav
          id="navbar-menu"
          className={`navbar__menu ${menuOpen ? "is-open" : ""}`}
          aria-label="Navegación principal"
        >
          {links.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.href}
                href={link.href}
                className={`navbar__link ${isActive ? "is-active" : ""}`}
                aria-current={isActive ? "location" : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            );
          })}

          {/* ACCIONES MÓVILES */}
          <div className="navbar__mobile-actions">
            <ThemeToggle />
            <SocialLinks mobile />
          </div>
        </nav>

        {/* ACCIONES DE ESCRITORIO */}
        <div className="navbar__actions">
          <ThemeToggle />
          <SocialLinks />
        </div>

        {/* MENÚ MÓVIL */}
        <button
          type="button"
          className={`navbar__toggle ${menuOpen ? "is-open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={menuOpen}
          aria-controls="navbar-menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

      </div>
    </header>
  );
};

export default Navbar;
