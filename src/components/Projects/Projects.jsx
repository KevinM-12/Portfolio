
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./Projects.css";

// Imágenes de los proyectos
import novaSaludImg from "../../assets/Projects/NovaSalud.png";
import artFoodImg from "../../assets/Projects/ArtFood-Anychat.png";
import arduinoImg from "../../assets/Projects/Arduino-Sensor.png";

const projects = [
  {
    title: "Software web de gestión de inventario y venta de una botica",
    description:
      "Sistema web para administrar el inventario, las ventas y las compras de una botica, con alertas de stock y vencimiento.",
    image: novaSaludImg,
    technologies: ["React", "Node.js", "Express", "MongoDB"],
    demoUrl: "https://nova-salud-sigma.vercel.app/",
    videoUrl:
      "https://drive.google.com/file/d/1eZf4wnDnm7cRLrYqKLEkTQMyOc_6GKhD/view?usp=sharing",
    githubUrl: "",
  },
  {
    title: "Chatbot de atención al cliente",
    description:
      "Asistente automatizado para responder consultas sobre servicios, recopilar datos y gestionar solicitudes de citas.",
    image: artFoodImg,
    technologies: ["AnyChat", "Gemini"],
    demoUrl:
      "https://drive.google.com/file/d/1NU96yhFLKSCyLkUySIMQrSNVPtL1dgVx/view?usp=sharing",
    videoUrl:
      "https://drive.google.com/file/d/1fL2SmdyYLvA5-wJYIYROaUfKemCw8ErB/view?usp=sharing",
    githubUrl: "https://github.com/KevinM-12/ArtFood-Chatbot",
  },
  {
    title: "Sistema de seguridad con Arduino",
    description:
      "Sistema de seguridad que utiliza un sensor de movimiento, teclado y contraseña para activar una alarma.",
    image: arduinoImg,
    technologies: ["Arduino", "C++", "LCD", "Sensor PIR"],
    demoUrl:
      "https://www.tinkercad.com/things/6doyxgw3zOK-mighty-lappi?sharecode=kOAR6LXo4Dl0_-gdQPUIg6c7Kgxi4pjbX2MNSLjZNCk",
    videoUrl:
      "https://drive.google.com/file/d/1zMmbfas8JMl00Zl3JVsgGxGeVN1RuAOb/view?usp=sharing",
    githubUrl: "",
  },
  {
    title: "Portafolio",
    description:
      "Portafolio personal, preparado para un uso profesional",
    technologies: ["HTML", "CSS", "Bootstrap"],
    demoUrl: "https://portafolio-eta-six-11.vercel.app/",
    videoUrl: "",
    githubUrl: "https://github.com/KevinM-12/portafolio",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedProject]);

  return (
    <section className="projects" id="proyectos">
      <div className="projects__container">
        <div className="projects__header">
          <h2 className="projects__title">Proyectos</h2>
          <p className="projects__description">
            Algunos proyectos en los que he aplicado mis conocimientos y
            desarrollado nuevas habilidades.
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <button
                type="button"
                className="project-card__details-trigger"
                onClick={() => setSelectedProject(project)}
                aria-label={`Ver detalles de ${project.title}`}
                aria-haspopup="dialog"
              />

              <div className="project-card__image-container">
                <img
                  src={project.image}
                  alt={`Captura de ${project.title}`}
                  className="project-card__image"
                  loading="lazy"
                />
              </div>

              <div className="project-card__content">
                <h3 className="project-card__title">{project.title}</h3>

                <p className="project-card__description">
                  {project.description}
                </p>

                <div className="project-card__technologies">
                  {project.technologies.map((technology) => (
                    <span
                      className="project-card__tag"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {(project.demoUrl ||
                  project.videoUrl ||
                  project.githubUrl) && (
                  <div className="project-card__links">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link project-card__link--primary"
                      >
                        Ver proyecto <span>↗</span>
                      </a>
                    )}

                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                      >
                        <span>▶</span> Ver video
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card__link"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="project-card__github-icon"
                        >
                          <path
                            fill="currentColor"
                            d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.71-1.49-2.47-.28-5.07-1.24-5.07-5.5 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.27-2.61 5.21-5.1 5.49.4.35.76 1.02.76 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z"
                          />
                        </svg>
                        GitHub <span>↗</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="projects__more">
          <a href="/proyectos" className="projects__more-link">
            Ver más proyectos <span>→</span>
          </a>
        </div>
      </div>

      {selectedProject &&
        createPortal(
          <div
            className="project-modal"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="project-modal__content"
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                className="project-modal__close"
                onClick={() => setSelectedProject(null)}
                aria-label="Cerrar detalles"
              >
                &times;
              </button>

              <div className="project-modal__image-container">
                <img
                  src={selectedProject.image}
                  alt={`Vista de ${selectedProject.title}`}
                  className="project-modal__image"
                />
              </div>

              <div className="project-modal__body">
                <h3
                  className="project-modal__title"
                  id="project-modal-title"
                >
                  {selectedProject.title}
                </h3>

                <p className="project-modal__description">
                  {selectedProject.description}
                </p>

                <div className="project-modal__technologies">
                  {selectedProject.technologies.map((technology) => (
                    <span
                      className="project-card__tag"
                      key={technology}
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
};

export default Projects;
