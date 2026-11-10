import { useState } from "react";
import "./Skills.css";

const technologies = [
  // Vista principal: ocho tecnologías destacadas
  { name: "HTML", logo: "html5/html5-original.svg", featured: true, category: "Frontend" },
  { name: "CSS", logo: "css3/css3-original.svg", featured: true, category: "Frontend" },
  { name: "JavaScript", logo: "javascript/javascript-original.svg", featured: true, category: "Frontend" },
  { name: "Python", logo: "python/python-original.svg", featured: true, category: "Lenguajes de programación" },
  { name: "PHP", logo: "php/php-original.svg", featured: true, category: "Backend" },
  { name: "MySQL", logo: "mysql/mysql-original.svg", featured: true, category: "Bases de datos" },
  { name: "React", logo: "react/react-original.svg", featured: true, category: "Frontend" },
  { name: "Laravel", logo: "laravel/laravel-original.svg", featured: true, category: "Backend" },

  // Tecnologías adicionales
  { name: "Angular", logo: "angular/angular-original.svg", category: "Frontend" },
  { name: "Node.js", logo: "nodejs/nodejs-original.svg", category: "Backend" },
  { name: "Express", logo: "express/express-original.svg", category: "Backend" },
  { name: "MongoDB", logo: "mongodb/mongodb-original.svg", category: "Bases de datos" },
  { name: "SQLite", logo: "sqlite/sqlite-original.svg", category: "Bases de datos" },
  { name: "Java", logo: "java/java-original.svg", category: "Lenguajes de programación" },
  { name: "C++", logo: "cplusplus/cplusplus-original.svg", category: "Lenguajes de programación" },
  { name: "Kotlin", logo: "kotlin/kotlin-original.svg", category: "Lenguajes de programación" },
];

const categories = [
  "Frontend",
  "Backend",
  "Bases de datos",
  "Lenguajes de programación",
];

const certificates = [
  {
    name: "Red Hat System Administration 1",
    organization: "Red Hat",
    url: "https://senatipe-my.sharepoint.com/:b:/g/personal/1640854_senati_pe/IQAv4LdsR5fiSKtjlX-zkN3kAQ0cpQ90HZOtgq9v_H7Jz-Q?e=YY3vgb",
  },
  {
    name: "Introduction to IoT",
    organization: "Certificación",
    url: "https://senatipe-my.sharepoint.com/:b:/g/personal/1640854_senati_pe/IQBzt1BOzyIdSJ3vv9ZsfkNAAeEqzne8geWNGKYVkJXVMLY?e=qU1aMj",
  },
  {
    name: "Introduction to Cybersecurity",
    organization: "Certificación",
    url: "https://senatipe-my.sharepoint.com/:b:/g/personal/1640854_senati_pe/IQBhgJXNVgEGQbo-OekRvwwAAeMUtEVp_Oy1UPTr0YQ4rjs?e=KNDvlC",
  },
  {
    name: "Python Essentials 1",
    organization: "Certificación",
    url: "https://senatipe-my.sharepoint.com/:b:/g/personal/1640854_senati_pe/IQDOulTtb2nlRpK1w6QG0jySATA3MxPGE4Y8VoM6Fim1UmU?e=392zON",
  },
  {
    name: "Networking Basics",
    organization: "Certificación",
    url: "https://senatipe-my.sharepoint.com/:b:/g/personal/1640854_senati_pe/IQAaTLvbbGGeQJwi7Fse86MBAVWBvhdJKqdjPZkZGWrt46I?e=MQJc8X",
  },
  {
    name: "Introduction to Data Science",
    organization: "Certificación",
    url: "https://senatipe-my.sharepoint.com/:b:/g/personal/1640854_senati_pe/IQDALYt2dUk8SbZYbK37Oq70AQz9R_mYCz_JQb2hDAc-rLQ?e=76sCFs",
  },
  {
    name: "Computer Hardware Basics",
    organization: "Certificación",
    url: "https://senatipe-my.sharepoint.com/:b:/g/personal/1640854_senati_pe/IQD6ovpSWiy-SYJ00N8IZrJNAQ6drbATk6caWQGCrC-bne4?e=LhIke0",
  },
];

const TechnologyCard = ({ technology }) => {
  const logoUrl = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${technology.logo}`;

  return (
    <div className="skills__technology">
      <img
        src={logoUrl}
        alt={`Logo de ${technology.name}`}
        className="skills__technology-logo"
        loading="lazy"
      />
      <span>{technology.name}</span>
    </div>
  );
};

const Skills = () => {
  const [showAllTechnologies, setShowAllTechnologies] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  const featuredTechnologies = technologies.filter(
    (technology) => technology.featured
  );

  const visibleCertificates = showAllCertificates
    ? certificates
    : certificates.slice(0, 4);

  return (
    <section className="skills" id="habilidades">
      <div className="skills__container">

        {/* Encabezado */}
        <div className="skills__header">
          <h2 className="skills__title">Tecnologías y herramientas</h2>
          <p className="skills__description">
            Tecnologías utilizadas y aprendidas durante mi formación y proyectos.
          </p>
        </div>

        {/* Tecnologías */}
        <div className="skills__section">

          {showAllTechnologies ? (
            <>
              <div className="skills__section-heading">
                <h3>Todas las tecnologías</h3>

                <button
                  className="skills__back-button"
                  onClick={() => setShowAllTechnologies(false)}
                >
                  <span>←</span> Volver
                </button>
              </div>

              <div className="skills__categories">
                {categories.map((category) => {
                  const categoryTechnologies = technologies.filter(
                    (technology) => technology.category === category
                  );

                  return (
                    <div className="skills__category" key={category}>
                      <h4 className="skills__category-title">
                        {category}
                      </h4>

                      <div className="skills__grid">
                        {categoryTechnologies.map((technology) => (
                          <TechnologyCard
                            key={technology.name}
                            technology={technology}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <>
              <div className="skills__grid skills__grid--featured">
                {featuredTechnologies.map((technology) => (
                  <TechnologyCard
                    key={technology.name}
                    technology={technology}
                  />
                ))}
              </div>

              <button
                className="skills__view-button"
                onClick={() => setShowAllTechnologies(true)}
              >
                Ver todas las tecnologías <span>→</span>
              </button>
            </>
          )}
        </div>

        {/* Certificaciones */}
        <div className="skills__certificates">
          <div className="skills__section-heading">
            <h3>Certificaciones</h3>

            {showAllCertificates && (
              <button
                className="skills__back-button"
                onClick={() => setShowAllCertificates(false)}
              >
                <span>←</span> Volver
              </button>
            )}
          </div>

          <div className="skills__certificate-grid">
            {visibleCertificates.map((certificate) => (
              <div
                className="skills__certificate"
                key={certificate.name}
              >
                <div className="skills__certificate-icon">
                  <span>✦</span>
                </div>

                <div className="skills__certificate-info">
                  <h4>{certificate.name}</h4>
                  <p>{certificate.organization}</p>
                  <a
                        href={certificate.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="skills__certificate-link"
                   >
                        Ver credencial ↗
                   </a>
                </div>
              </div>
            ))}
          </div>

          {!showAllCertificates && (
            <button
              className="skills__view-button"
              onClick={() => setShowAllCertificates(true)}
            >
              Ver todas las certificaciones <span>→</span>
            </button>
          )}
        </div>

      </div>
    </section>
  );
};

export default Skills;