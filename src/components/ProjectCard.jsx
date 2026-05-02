import { motion } from "framer-motion";
import { Image, PlaySquare } from "lucide-react";
import SkillBadge from "./SkillBadge";

export default function ProjectCard({ project }) {
  const hasMedia = Boolean(project.media?.src);
  const isVideo = project.media?.type === "video";

  return (
    <motion.article
      key={project.title}
      whileHover={{ y: -4 }}
      className="card grid gap-6 overflow-hidden p-4 md:grid-cols-[minmax(260px,0.9fr)_1.4fr] md:items-stretch"
    >
      <div className="relative min-h-[220px] overflow-hidden rounded-md border border-white/10 bg-black/24">
        {hasMedia && isVideo ? (
          <video className="h-full w-full object-cover" controls muted playsInline poster={project.media.poster || undefined}>
            <source src={project.media.src} type={project.media.mimeType || "video/mp4"} />
          </video>
        ) : null}

        {hasMedia && !isVideo ? (
          <img src={project.media.src} alt={project.media.alt || project.title} className="h-full w-full object-cover" />
        ) : null}

        {!hasMedia ? (
          <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 px-6 text-center text-slate-400">
            {isVideo ? <PlaySquare className="h-9 w-9 text-teal-300" /> : <Image className="h-9 w-9 text-teal-300" />}
            <div>
              <p className="text-sm font-medium text-slate-200">Project media</p>
              <p className="mt-1 text-xs leading-5">
                Add photos or videos in <span className="text-teal-200">public/media/projects</span>
              </p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col p-2 md:p-3">
        <div className="mb-4">
          <SkillBadge>Selected Work</SkillBadge>
        </div>
        <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
        <div className="mt-4 flex-1 space-y-3 leading-7 text-slate-300">
          <p>{project.summary}</p>
          {project.impact ? <p className="text-slate-400">{project.impact}</p> : null}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <SkillBadge key={item}>{item}</SkillBadge>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
