import CertificationCard from "../components/CertificationCard";
import Section from "./Section";

export default function Certifications({ certifications }) {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Focused development aligned with automation, intelligent workflows, data, and electrical engineering."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((certification) => (
          <CertificationCard key={certification} certification={certification} />
        ))}
      </div>
    </Section>
  );
}
