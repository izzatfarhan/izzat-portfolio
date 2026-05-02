import { Network } from "lucide-react";

export default function Footer({ name = "Izzat Farhan", tagline = "Malaysia / Singapore tech market focus" }) {
  return (
    <footer className="border-t border-white/10 px-5 py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 {name}. Electrical, Automation, Cloud, DevOps & AI Engineering.</p>
        <div className="flex items-center gap-2">
          <Network size={16} />
          <span>{tagline}</span>
        </div>
      </div>
    </footer>
  );
}
