export default function ExperienceCard({ item }) {
  return (
    <div className="card">
      <div className="mb-5">
        <p className="font-mono text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-teal)]">{item.period}</p>
        <h3 className="mt-2 font-display text-2xl font-semibold uppercase leading-tight text-[var(--color-ink)]">{item.role}</h3>
        <p className="mt-1 text-sm text-[var(--color-ink-muted)]">{item.company}</p>
      </div>
      <ul className="space-y-3 text-[var(--color-ink-muted)]">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="border-l-2 border-[var(--color-amber-pale)] pl-4 leading-7">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
