import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Sparkles, Zap } from "lucide-react";
import Button from "../components/Button";
import { fadeUp } from "../utils/animations";

export default function Hero({ hero }) {
  return (
    <section id="hero" className="relative px-5 pb-16 pt-14 sm:pb-20 sm:pt-20">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial="hidden" animate="visible" transition={{ duration: 0.65 }} variants={fadeUp}>
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-teal)] shadow-sm">
            <span className="signal-dot" />
            <Sparkles size={16} />
            {hero.role}
          </div>
          <h1 className="max-w-4xl font-display text-[clamp(2.6rem,5.8vw,4.8rem)] font-bold uppercase leading-[1.02] text-[var(--color-ink)]">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-ink-muted)]">
            {hero.summary}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href}>
              {hero.primaryCta.label} <ArrowDown size={18} />
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary">
              {hero.secondaryCta.label} <Download size={18} />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.1 }}
          className="relative"
        >
          <div className="card pcb-dots p-5">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-teal)]">Current Focus</p>
                <p className="mt-1 font-display text-2xl font-semibold uppercase leading-tight text-[var(--color-ink)]">Industrial Systems to AI Automation</p>
              </div>
              <Zap className="text-[var(--color-amber)]" />
            </div>
            <div className="grid gap-3">
              {hero.focusAreas.map((area) => (
                <div key={area.label} className="rounded-md border border-[var(--color-border)] bg-[var(--color-surface)] p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-ink)]">{area.label}</p>
                    <ArrowUpRight className="h-4 w-4 text-[var(--color-amber)]" />
                  </div>
                  <p className="mt-1 text-sm text-[var(--color-ink-muted)]">{area.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
