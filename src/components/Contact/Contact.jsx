
import "./Contact.css";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name");
    const email = formData.get("email");
    const message = formData.get("message");

    const subject = encodeURIComponent(`Contacto desde mi portafolio - ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`
    );

    window.location.href = `mailto:kmunosvaldivia@gmail.com?subject=${subject}&body=${body}`;
  };

  const contactDetails = [
    {
      label: "Email",
      value: "kmunosvaldivia@gmail.com",
      href: "mailto:kmunosvaldivia@gmail.com",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      label: "Teléfono",
      value: "+51 987 261 858",
      href: "tel:+51987261858",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.84.58 2.8.7A2 2 0 0 1 22 16.92Z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      value: "Ver mi perfil",
      href: "https://www.linkedin.com/in/kmv1507",
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6ZM2 9h4v12H2z" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
    {
      label: "GitHub",
      value: "Ver mis proyectos",
      href: "https://github.com/KevinM-12",
      external: true,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.61 5.21-5.1 5.49.4.35.76 1.02.76 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
        </svg>
      ),
    },
    {
      label: "Ubicación",
      value: "Perú",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
    },
  ];

  return (
    <section className="contact" id="contacto">
      <div className="contact__container">
        <div className="contact__header">
          <h2 className="contact__title">Contacto</h2>
        </div>

        <div className="contact__content">
          <div className="contact__information">
            <h3>Trabajemos juntos.</h3>
            <h4>Ponte en contacto</h4>

            <p className="contact__description">
              ¿Tienes un proyecto en mente o una oportunidad? Me gustaría
              conocer más y conversar contigo.
            </p>

            <div className="contact__details">
              {contactDetails.map((item) => (
                <div className="contact__detail" key={item.label}>
                  <span className="contact__detail-icon">{item.icon}</span>

                  <div className="contact__detail-content">
                    <span className="contact__detail-label">
                      {item.label}
                    </span>

                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noopener noreferrer" : undefined}
                        className="contact__detail-value"
                      >
                        {item.value}
                        {item.external && <span> ↗</span>}
                      </a>
                    ) : (
                      <span className="contact__detail-value">
                        {item.value}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit}>
            <h3>Envíame un mensaje</h3>

            <div className="contact__field">
              <label htmlFor="contact-name">Nombre</label>
              <input
                type="text"
                id="contact-name"
                name="name"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email">Correo electrónico</label>
              <input
                type="email"
                id="contact-email"
                name="email"
                placeholder="tucorreo@ejemplo.com"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">Mensaje</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Cuéntame sobre tu proyecto o propuesta..."
                rows="5"
                required
              />
            </div>

            <button type="submit" className="contact__submit">
              Enviar mensaje
              <span>↗</span>
            </button>

            <p className="contact__form-note">
              Al enviar, se abrirá tu aplicación de correo para completar el
              envío.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
