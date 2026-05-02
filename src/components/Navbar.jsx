import { navItems } from "../constants/links";

export default function Navbar({ name = "Izzat Farhan" }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-[#071013]/82 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#hero" className="text-sm font-semibold tracking-wide text-white">
          {name}
        </a>
        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="transition hover:text-teal-300">
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
