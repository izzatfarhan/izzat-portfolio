import { motion } from "framer-motion";
import Icon from "../components/Icon";
import SkillBadge from "../components/SkillBadge";
import Section from "./Section";

export default function Skills({ skills }) {
  return (
    <Section eyebrow="Skills" id="skills" title="Technical strengths across electrical automation, IT-OT, data, and AI workflows.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill) => (
          <motion.div key={skill.category} whileHover={{ y: -6 }} className="card">
            <Icon name={skill.icon} className="mb-5 text-[var(--color-teal)]" />
            <h3 className="font-display text-2xl font-semibold uppercase leading-tight text-[var(--color-ink)]">{skill.category}</h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {skill.items.map((item) => (
                <SkillBadge key={item}>{item}</SkillBadge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
