import Navbar from "./components/Navbar/Navbar";
import CursorAura from "./components/CursorAura/CursorAura";
import Reveal from "./components/Reveal/Reveal";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import ProjectsMore from "./components/Projects/ProjectsMore";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  const isProjectsPage = window.location.pathname === "/proyectos";

  if (isProjectsPage) {
    return <ProjectsMore />;
  }

  return (
    <>
      <Navbar />
      <CursorAura />

      <main>

        <Hero />

        <Reveal>
          <About />
        </Reveal>

        <Reveal>
          <Skills />
        </Reveal>

        <Reveal>
          <Projects />
        </Reveal>

        <Reveal>
          <Contact />
        </Reveal>

      </main>

      <Footer />
    </>
  );
}

export default App;