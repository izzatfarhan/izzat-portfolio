import { Award } from "lucide-react";

export default function CertificationCard({ certification }) {
  return (
    <div className="card flex items-start gap-4">
      <Award className="mt-1 h-5 w-5 flex-none text-[var(--color-amber)]" />
      <p className="text-[var(--color-ink-muted)]">{certification}</p>
    </div>
  );
}
