import About from "../sections/About";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
import Experience from "../sections/Experience";
import Hero from "../sections/Hero";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

export default function Home({ portfolio }) {
  return (
    <>
      <Hero hero={portfolio.hero} />
      <div className="circuit-divider"><span /></div>
      <About about={portfolio.about} />
      <Skills skills={portfolio.skills} />
      <div className="circuit-divider"><span /></div>
      <Projects projects={portfolio.projects} />
      <Certifications certifications={portfolio.certifications} />
      <div className="circuit-divider"><span /></div>
      <Experience experience={portfolio.experience} />
      <Contact contact={portfolio.contact} />
    </>
  );
}
