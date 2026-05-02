import { motion } from "framer-motion";
import Icon from "../components/Icon";
import SkillBadge from "../components/SkillBadge";
import Section from "./Section";

export default function Skills({ skills }) {
  return (
    <Section eyebrow="Skills" id="skills" title="Technical strengths across automation, infrastructure, software, and AI.">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {skills.map((skill) => (
          <motion.div key={skill.category} whileHover={{ y: -6 }} className="card">
            <Icon name={skill.icon} className="mb-5 text-teal-300" />
            <h3 className="text-lg font-semibold text-white">{skill.category}</h3>
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
