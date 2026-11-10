
import "./About.css";

const About = () => {
  const details = [
    {
      label: "Formación",
      value: "Ingeniería de Software con IA",
      extra: "SENATI",
    },
    {
      label: "Intereses",
      value: "Desarrollo de software e IA",
      extra: "Aplicaciones y automatización",
    },
    {
      label: "Experiencia",
      value: "Desarrollo web y chatbots",
      extra: "Proyectos académicos y prácticos",
    },
    {
      label: "Objetivo",
      value: "Crecimiento profesional",
      extra: "Aprender y participar en nuevos proyectos",
    },
  ];

  return (
    <section className="about" id="sobre-mi">
      <div className="about__container">

        <div className="about__header">
          <h2 className="about__title">Sobre mí</h2>
        </div>

        <div className="about__content">
          <div className="about__presentation">
            <h3>
              Desarrollo de software e integración de tecnologías inteligentes.
            </h3>

            <p>
              Soy estudiante de Ingeniería de Software con Inteligencia
              Artificial en SENATI, interesado en el desarrollo de aplicaciones,
              la automatización y la integración de tecnologías inteligentes.
            </p>

            <p>
              Me caracterizo por ser perseverante, adaptable y orientado al
              detalle. Me gusta aprender nuevas herramientas, afrontar desafíos
              y aplicar mis conocimientos para desarrollar soluciones
              funcionales que respondan a necesidades reales.
            </p>

            <p>
              Actualmente busco fortalecer mis conocimientos en desarrollo de
              software, explorar nuevas formas de aplicar la inteligencia
              artificial y seguir creciendo mediante proyectos y experiencias
              profesionales.
            </p>
          </div>

          <div className="about__details">
            {details.map((item) => (
              <div className="about__detail" key={item.label}>
                <span className="about__detail-label">{item.label}</span>
                <div>
                  <h4>{item.value}</h4>
                  <p>{item.extra}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
