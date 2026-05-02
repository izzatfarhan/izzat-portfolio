import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Sparkles, Zap } from "lucide-react";
import Button from "../components/Button";
import { fadeUp } from "../utils/animations";

export default function Hero({ hero }) {
  return (
    <section id="hero" className="relative px-5 pb-20 pt-16 sm:pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div initial="hidden" animate="visible" transition={{ duration: 0.65 }} variants={fadeUp}>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-300/25 bg-teal-300/8 px-4 py-2 text-sm text-teal-200">
            <Sparkles size={16} />
            {hero.role}
          </div>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-white sm:text-6xl">
            {hero.headline}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
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
          <div className="rounded-lg border border-white/10 bg-white/[0.045] p-5 shadow-glow backdrop-blur">
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-sm text-slate-400">Current Focus</p>
                <p className="font-medium text-white">Industrial Systems to Digital Infrastructure</p>
              </div>
              <Zap className="text-teal-300" />
            </div>
            <div className="grid gap-3">
              {hero.focusAreas.map((area) => (
                <div key={area.label} className="rounded-md border border-white/10 bg-black/18 p-4">
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-medium text-white">{area.label}</p>
                    <ArrowUpRight className="h-4 w-4 text-teal-300" />
                  </div>
                  <p className="mt-1 text-sm text-slate-400">{area.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
