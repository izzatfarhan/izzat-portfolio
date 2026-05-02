import { Award } from "lucide-react";

export default function CertificationCard({ certification }) {
  return (
    <div className="card flex items-start gap-4">
      <Award className="mt-1 h-5 w-5 flex-none text-teal-300" />
      <p className="text-slate-300">{certification}</p>
    </div>
  );
}
