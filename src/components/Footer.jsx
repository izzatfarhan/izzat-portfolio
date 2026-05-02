import { Network } from "lucide-react";

export default function Footer({ name = "Izzat Farhan", tagline = "Malaysia / Singapore tech market focus" }) {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface-2)] px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 font-mono text-xs uppercase tracking-[0.08em] text-[var(--color-ink-muted)] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {name}. Electrical, Automation, IT-OT & AI Automation.</p>
        <div className="flex items-center gap-2">
          <Network size={16} className="text-[var(--color-teal)]" />
          <span>{tagline}</span>
        </div>
      </div>
    </footer>
  );
}
