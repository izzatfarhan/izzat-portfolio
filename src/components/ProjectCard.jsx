import { motion } from "framer-motion";
import { Code2, ExternalLink } from "lucide-react";
import Button from "./Button";
import SkillBadge from "./SkillBadge";

export default function ProjectCard({ project }) {
  return (
    <motion.article key={project.title} whileHover={{ y: -6 }} className="card flex min-h-[360px] flex-col">
      <div className="mb-5 flex items-center justify-between gap-4">
        <SkillBadge>Selected Work</SkillBadge>
        <ExternalLink className="h-5 w-5 text-slate-400" />
      </div>
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <div className="mt-4 flex-1 space-y-3 leading-7 text-slate-300">
        <p>{project.summary}</p>
        {project.impact ? <p className="text-slate-400">{project.impact}</p> : null}
      </div>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <SkillBadge key={item}>{item}</SkillBadge>
        ))}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
        <Button href={project.githubUrl} variant="secondary">
          GitHub <Code2 size={18} />
        </Button>
        <Button href={project.demoUrl}>
          Live Demo <ExternalLink size={18} />
        </Button>
      </div>
    </motion.article>
  );
}
