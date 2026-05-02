import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import Button from "../components/Button";
import Section from "./Section";

export default function Contact({ contact }) {
  return (
    <Section id="contact" eyebrow="Contact" title="Open to AI automation, IT-OT, and electrical automation opportunities.">
      <div className="card">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <p className="max-w-2xl leading-8 text-[var(--color-ink-muted)]">
            {contact.summary}
          </p>
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href={`mailto:${contact.email}`}>
              Email <Mail size={18} />
            </Button>
            <Button href={contact.linkedin} variant="secondary">
              LinkedIn <BriefcaseBusiness size={18} />
            </Button>
            <Button href={contact.github} variant="secondary">
              GitHub <Code2 size={18} />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
