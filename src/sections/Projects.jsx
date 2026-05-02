import ProjectCard from "../components/ProjectCard";
import Section from "./Section";

export default function Projects({ projects }) {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Selected work demonstrating infrastructure, backend, monitoring, and automation experience."
    >
      <div className="grid gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
