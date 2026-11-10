import "./ProjectsMore.css";

const ProjectsMore = () => {
  return (
    <main className="projects-more">
      <div className="projects-more__content">
        <span className="projects-more__icon">✦</span>

        <h1>En construcción</h1>

        <p>
          Estoy trabajando para incorporar nuevos proyectos.
          Pronto encontrarás más trabajos por aquí.
        </p>

        <a href="/#proyectos" className="projects-more__back">
          ← Volver a proyectos
        </a>
      </div>
    </main>
  );
};

export default ProjectsMore;