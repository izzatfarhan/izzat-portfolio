import { BriefcaseBusiness, Code2, Mail, MapPin, Phone } from "lucide-react";
import Button from "../components/Button";
import Section from "./Section";

export default function Contact({ contact }) {
  const contactDetails = [
    { label: "Location", value: contact.location, icon: MapPin },
    { label: "Email", value: contact.email, icon: Mail, href: `mailto:${contact.email}` },
    { label: "Phone", value: contact.phone, icon: Phone, href: `tel:${contact.phone}` },
  ];

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Open to AI automation, IT-OT, electrical system and automation opportunities."
    >
      <div className="card">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
          <div>
            <p className="max-w-2xl leading-8 text-[var(--color-ink-muted)]">
              {contact.summary}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {contactDetails.map(({ label, value, icon: Icon, href }) => (
                <div key={label} className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface-2)] p-4">
                  <div className="mb-3 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-teal)]">
                    <Icon size={16} />
                    {label}
                  </div>
                  {href ? (
                    <a href={href} className="trace-link break-words text-sm">
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-[var(--color-ink-muted)]">{value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
            <Button href={contact.linkedin} variant="secondary" external>
              LinkedIn <BriefcaseBusiness size={18} />
            </Button>
            <Button href={contact.github} variant="secondary" external>
              GitHub <Code2 size={18} />
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
