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
      className="card grid gap-6 overflow-hidden p-0 md:grid-cols-[minmax(260px,0.9fr)_1.4fr] md:items-stretch"
    >
      <div className="relative min-h-[220px] overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface-2)] md:border-b-0 md:border-r">
        {hasMedia && isVideo ? (
          <video
            className="h-full w-full object-cover"
            controls
            muted
            playsInline
            poster={project.media.poster || undefined}
          >
            <source
              src={project.media.src}
              type={project.media.mimeType || "video/mp4"}
            />
          </video>
        ) : null}

        {hasMedia && !isVideo ? (
          <img
            src={project.media.src}
            alt={project.media.alt || project.title}
            className="h-full w-full object-cover"
          />
        ) : null}

        {!hasMedia ? (
          <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 px-6 text-center text-[var(--color-ink-muted)]">
            {isVideo ? (
              <PlaySquare className="h-9 w-9 text-[var(--color-teal)]" />
            ) : (
              <Image className="h-9 w-9 text-[var(--color-teal)]" />
            )}
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-ink)]">
                Project media
              </p>
              <p className="mt-1 text-xs leading-5">
                Add photos or videos in{" "}
                <span className="text-[var(--color-teal)]">public/media/projects</span>
              </p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col p-6">
        <div className="mb-4">{/*<SkillBadge>Projects</SkillBadge>*/}</div>
        <h3 className="font-display text-[clamp(1.65rem,2.4vw,2.3rem)] font-semibold uppercase leading-tight text-[var(--color-ink)]">{project.title}</h3>
        <div className="mt-4 flex-1 space-y-3 leading-7 text-[var(--color-ink-muted)]">
          <p>{project.summary}</p>
          {project.impact ? (
            <p className="text-[var(--color-ink-muted)]">{project.impact}</p>
          ) : null}
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
