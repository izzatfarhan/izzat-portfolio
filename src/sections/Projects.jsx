import ProjectCard from "../components/ProjectCard";
import Section from "./Section";

export default function Projects({ projects }) {
  return (
    <Section
      id="projects"
      eyebrow="Featured Projects"
      title="Selected work demonstrating infrastructure, backend, monitoring, and automation experience."
    >
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </Section>
  );
}
