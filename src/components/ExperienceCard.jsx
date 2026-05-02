export default function ExperienceCard({ item }) {
  return (
    <div className="card">
      <div className="mb-5">
        <p className="text-sm font-medium text-teal-300">{item.period}</p>
        <h3 className="mt-2 text-xl font-semibold text-white">{item.role}</h3>
        <p className="mt-1 text-sm text-slate-400">{item.company}</p>
      </div>
      <ul className="space-y-3 text-slate-300">
        {item.bullets.map((bullet) => (
          <li key={bullet} className="leading-7">
            {bullet}
          </li>
        ))}
      </ul>
    </div>
  );
}
