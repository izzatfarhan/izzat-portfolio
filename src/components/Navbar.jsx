import { navItems } from "../constants/links";

export default function Navbar({ name = "Izzat Farhan" }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--color-border)] bg-[color:var(--color-base)]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#hero" className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-ink)]">
          {name}
        </a>
        <div className="hidden items-center gap-6 font-mono text-xs uppercase tracking-[0.12em] text-[var(--color-ink-muted)] md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="trace-link transition">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
