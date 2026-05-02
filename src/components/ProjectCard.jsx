import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Image } from "lucide-react";
import SkillBadge from "./SkillBadge";

function getAssetPath(src) {
  if (!src || src.startsWith("http") || src.startsWith("data:")) {
    return src;
  }

  return `${import.meta.env.BASE_URL}${src.replace(/^\//, "")}`;
}

export default function ProjectCard({ project }) {
  const mediaItems = project.mediaItems?.length
    ? project.mediaItems
    : project.media?.src
      ? [project.media]
      : [];
  const hasMedia = mediaItems.length > 0;
  const [activeMediaIndex, setActiveMediaIndex] = useState(0);

  useEffect(() => {
    setActiveMediaIndex(0);
  }, [project.title]);

  useEffect(() => {
    if (mediaItems.length <= 1) return undefined;

    const interval = window.setInterval(() => {
      setActiveMediaIndex((currentIndex) => (currentIndex + 1) % mediaItems.length);
    }, 4500);

    return () => window.clearInterval(interval);
  }, [mediaItems.length]);

  return (
    <motion.article
      key={project.title}
      whileHover={{ y: -4 }}
      className="card grid gap-6 overflow-hidden p-0 md:grid-cols-[minmax(260px,0.9fr)_1.4fr] md:items-stretch"
    >
      <div className="relative min-h-[220px] overflow-hidden border-b border-[var(--color-border)] bg-[var(--color-surface-2)] md:border-b-0 md:border-r">
        {hasMedia ? (
          <div className="relative h-full min-h-[220px] overflow-hidden bg-[var(--color-surface-2)]">
            {mediaItems.map((media, index) => (
              <motion.img
                key={media.src}
                src={getAssetPath(media.src)}
                alt={media.alt || `${project.title} media ${index + 1}`}
                className={`absolute inset-0 h-full w-full ${media.fit === "contain" ? "object-contain" : "object-cover"}`}
                loading={index === 0 ? "eager" : "lazy"}
                initial={false}
                animate={{
                  opacity: index === activeMediaIndex ? 1 : 0,
                  scale: index === activeMediaIndex ? 1 : 1.015,
                }}
                transition={{ duration: 1.05, ease: [0.4, 0, 0.2, 1] }}
                style={{ willChange: "opacity, transform" }}
              />
            ))}
          </div>
        ) : null}

        {!hasMedia ? (
          <div className="flex h-full min-h-[220px] flex-col items-center justify-center gap-3 px-6 text-center text-[var(--color-ink-muted)]">
            <Image className="h-9 w-9 text-[var(--color-teal)]" />
            <div>
              <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-ink)]">
                Project media
              </p>
              <p className="mt-1 text-xs leading-5">
                Add photos or videos in{" "}
                <span className="text-[var(--color-teal)]">
                  public/media/projects
                </span>
              </p>
            </div>
          </div>
        ) : null}
      </div>

      <div className="flex flex-col p-6">
        <div className="mb-4">{/*<SkillBadge>Projects</SkillBadge>*/}</div>
        <h3 className="font-display text-[clamp(1.65rem,2.4vw,2.3rem)] font-semibold uppercase leading-tight text-[var(--color-ink)]">
          {project.title}
        </h3>
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
