import { BriefcaseBusiness } from "lucide-react";
import Section from "./Section";

export default function About({ about }) {
  return (
    <Section id="about" eyebrow={about.eyebrow} title={about.title}>
      <div className="grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="card">
          <BriefcaseBusiness className="mb-5 text-[var(--color-amber)]" />
          <p className="text-[var(--color-ink-muted)]">{about.highlights[0]}</p>
        </div>
        <div className="card">
          <div className="space-y-4 leading-8 text-[var(--color-ink-muted)]">
            {about.highlights.slice(1).map((highlight) => (
              <p key={highlight}>{highlight}</p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
