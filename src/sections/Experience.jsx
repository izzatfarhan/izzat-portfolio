import ExperienceCard from "../components/ExperienceCard";
import Section from "./Section";

export default function Experience({ experience }) {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Target roles where industrial systems knowledge strengthens digital engineering."
    >
      <div className="grid gap-5 md:grid-cols-2">
        {experience.map((item) => (
          <ExperienceCard key={item.title} item={item} />
        ))}
      </div>
    </Section>
  );
}
