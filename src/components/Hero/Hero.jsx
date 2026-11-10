import "./Hero.css";
import miFoto from "../../assets/images/miFoto.png";

const Hero = () => {
  return (
    <section className="hero" id="inicio">
      <div className="hero__container">

        <div className="hero__content">
          <p className="hero__eyebrow">
            Estudiante de Ingeniería de Software con IA
          </p>

          <h1 className="hero__title">
            Kevin Jesús
            <span>Muños Valdivia.</span>
          </h1>

          <p className="hero__description">
            Me encuentro desarrollando mis conocimientos y experiencia en el
            ámbito tecnológico, participando en proyectos relacionados con
            <span className="text-highlight"> páginas web</span>,
            <span className="text-highlight"> aplicaciones</span> y
            herramientas de <span className="text-highlight">automatización</span>.
            Busco seguir fortaleciendo mis habilidades, asumir nuevos desafíos
            y aportar valor mediante soluciones digitales.
          </p>

          <div className="hero__actions">
            <a href="#proyectos" className="hero__button hero__button--primary">
              Ver proyectos
              <span aria-hidden="true">↗</span>
            </a>

            <a href="#contacto" className="hero__button hero__button--secondary">
              Contactarme
            </a>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo-frame">
            <img
              src={miFoto}
              alt="Fotografía de Kevin Jesús Muños Valdivia"
              className="hero__photo"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;