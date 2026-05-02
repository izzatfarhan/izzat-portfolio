import { motion } from "framer-motion";
import SectionTitle from "../components/SectionTitle";
import { fadeUp, sectionViewport } from "../utils/animations";

export default function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={sectionViewport}
        transition={{ duration: 0.55, ease: "easeOut" }}
        variants={fadeUp}
        className="mx-auto max-w-6xl"
      >
        <SectionTitle eyebrow={eyebrow} title={title} />
        {children}
      </motion.div>
    </section>
  );
}
