import { Bot, BrainCircuit, Cloud, Code2, Cpu, ServerCog, ShieldCheck, Workflow } from "lucide-react";

const iconMap = {
  Bot,
  BrainCircuit,
  Cloud,
  Code2,
  Cpu,
  ServerCog,
  ShieldCheck,
  Workflow,
};

export default function Icon({ name, className = "", size }) {
  const LucideIcon = iconMap[name] ?? Cpu;

  return <LucideIcon className={className} size={size} />;
}
