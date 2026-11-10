import "./Footer.css";
import valsImage from "../../assets/Vals/Vals-Footer.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Agrega aquí tu enlace de GitHub cuando tengas la URL de tu perfil.
  const githubUrl = "https://github.com/KevinM-12";
  const portfolioRepoUrl = "";

  const socialLinks = [
     {
        label: "GitHub personal",
        href: githubUrl,
        icon: "github",
     },
     {
        label: "Repositorio del portafolio",
        href: portfolioRepoUrl || "#",
        icon: "repository",
        disabled: !portfolioRepoUrl,
     },
     {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/kmv1507",
        icon: "linkedin",
     },
     {
        label: "Correo electrónico",
        href: "mailto:kmunosvaldivia@gmail.com",
        icon: "mail",
     },
    ];

  const navigationLinks = [
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Habilidades", href: "#habilidades" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Contacto", href: "#contacto" },
  ];

  const renderIcon = (icon) => {
    switch (icon) {
      case "github":
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.59 1.21 3.22.92.1-.72.39-1.21.7-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.6 5.21-5.08 5.49.4.35.75 1.02.75 2.06v3.06c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
            />
          </svg>
        );

      case "repository":
        return (
            <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
                d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5v-16Z"
            />
            <path d="M4 5v15.5A1.5 1.5 0 0 0 5.5 22H20" />
            <path d="M8 6h8M8 10h5" />
            </svg>
        );

      case "linkedin":
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              fill="currentColor"
              d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM8.02 18.8H5.05V9.24h2.97v9.56ZM6.54 7.93a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44Zm12.26 10.87h-2.96v-4.65c0-1.11-.02-2.54-1.55-2.54-1.55 0-1.79 1.21-1.79 2.46v4.73H9.54V9.24h2.84v1.31h.04c.4-.75 1.36-1.55 2.8-1.55 3 0 3.58 1.97 3.58 4.53v5.27Z"
            />
          </svg>
        );

      case "mail":
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <rect x="3" y="5" width="18" height="14" rx="2" />
            <path d="m4 7 8 6 8-6" />
          </svg>
        );

      case "arrow-up":
        return (
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        );

      default:
        return null;
    }
  };

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__main">
          {/* Primera columna: identidad */}
          <div className="footer__intro">
            <a href="#inicio" className="footer__name">
              Kevin Muños<span>.</span>
            </a>

            <h3>¡Gracias por llegar hasta aquí!</h3>

            <p>
              Espero que hayas disfrutado conociendo mis proyectos y mi
              trabajo. ¡Nos vemos pronto!
            </p>
          </div>

          {/* Segunda columna: navegación */}
          <nav className="footer__navigation" aria-label="Navegación del pie de página">
            <h3>Navegación</h3>

            <ul>
              {navigationLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Tercera columna: espacio reservado para Vals */}
          <div className="footer__mascot" aria-label="Espacio reservado para Vals">
            {<div className="footer__mascot">
             </div>}
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__socials">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                aria-disabled={social.disabled || undefined}
                title={social.label}
                target={social.icon === "mail" || social.disabled ? undefined : "_blank"}
                rel={social.icon === "mail" || social.disabled ? undefined : "noreferrer"}
                onClick={social.disabled ? (e) => e.preventDefault() : undefined}
                className={social.disabled ? "is-disabled" : ""}
                >
                {renderIcon(social.icon)}
              </a>
            ))}

            <a href="#inicio" aria-label="Volver al inicio" title="Volver al inicio">
              {renderIcon("arrow-up")}
            </a>
          </div>

          <div className="footer__credits">
            <p>© {currentYear} Kevin Muños. Todos los derechos reservados.</p>
            <span>Diseñado y desarrollado por Kevin.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;