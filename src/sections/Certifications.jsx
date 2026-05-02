import CertificationCard from "../components/CertificationCard";
import Section from "./Section";

export default function Certifications({ certifications }) {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Focused development aligned with cloud, DevOps, software, and AI engineering."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {certifications.map((certification) => (
          <CertificationCard key={certification} certification={certification} />
        ))}
      </div>
    </Section>
  );
}
