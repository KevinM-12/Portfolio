
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const formRef = useRef(null);

  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const contactDetails = [
    {
      label: "Email",
      value: "kmunosvaldivia@gmail.com",
      href: "mailto:kmunosvaldivia@gmail.com",
      icon: "✉",
    },
    {
      label: "Teléfono",
      value: "+51 987 261 858",
      href: "tel:+51987261858",
      icon: "⌕",
    },
    {
      label: "LinkedIn",
      value: "Ver mi perfil",
      href: "https://www.linkedin.com/in/kmv1507",
      external: true,
      icon: "in",
    },
    {
      label: "GitHub",
      value: "Ver mis proyectos",
      href: "https://github.com/KevinM-12",
      external: true,
      icon: "⌘",
    },
    {
      label: "Ubicación",
      value: "Perú",
      icon: "⌖",
    },
  ];

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );

      setStatus({
        type: "success",
        message: "¡Mensaje enviado correctamente! Gracias por contactarme.",
      });

      formRef.current.reset();
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);

      setStatus({
        type: "error",
        message: "No se pudo enviar el mensaje. Inténtalo nuevamente.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact" id="contacto">
      <div className="contact__container">
        <div className="contact__header">
          <span className="contact__eyebrow">05 · CONTACTO</span>
          <h2 className="contact__title">Trabajemos juntos.</h2>
        </div>

        <div className="contact__content">
          <div className="contact__information">
            <h3>Ponte en contacto</h3>

            <p className="contact__description">
              ¿Tienes un proyecto en mente o una oportunidad?
              Me gustaría conocer más y conversar contigo.
            </p>

            <div className="contact__details">
              {contactDetails.map((item) => (
                <div className="contact__detail" key={item.label}>
                  <span className="contact__detail-icon">
                    {item.icon}
                  </span>

                  <div className="contact__detail-content">
                    <span className="contact__detail-label">
                      {item.label}
                    </span>

                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={
                          item.external
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="contact__detail-value"
                      >
                        {item.value}
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

          <form
            ref={formRef}
            className="contact__form"
            onSubmit={handleSubmit}
          >
            <h3>Envíame un mensaje</h3>

            <div className="contact__field">
              <label htmlFor="contact-name">Nombre</label>
              <input
                type="text"
                id="contact-name"
                name="nombre"
                placeholder="Tu nombre"
                autoComplete="name"
                maxLength="100"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-email">
                Correo electrónico
              </label>
              <input
                type="email"
                id="contact-email"
                name="correo"
                placeholder="tucorreo@ejemplo.com"
                autoComplete="email"
                maxLength="150"
                required
              />
            </div>

            <div className="contact__field">
              <label htmlFor="contact-message">Mensaje</label>
              <textarea
                id="contact-message"
                name="mensaje"
                placeholder="Cuéntame sobre tu proyecto o propuesta..."
                rows="5"
                maxLength="3000"
                required
              />
            </div>

            <button
              type="submit"
              className="contact__submit"
              disabled={isSending}
            >
              {isSending ? "Enviando..." : "Enviar mensaje"}
              {!isSending && <span>↗</span>}
            </button>

            {status.message && (
              <p
                className={`contact__status contact__status--${status.type}`}
                role="status"
                aria-live="polite"
              >
                {status.message}
              </p>
            )}

            <p className="contact__form-note">
              Tu mensaje llegará directamente a mi correo electrónico.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
