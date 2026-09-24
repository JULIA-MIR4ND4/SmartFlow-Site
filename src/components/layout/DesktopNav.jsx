import { NAV_LINKS } from "../../data/navLinks.js";

export default function DesktopNav({ onNavigate }) {
  return (
    <nav className="hidden md:flex items-center gap-1">
      {NAV_LINKS.map(({ label, href }) => (
        <button
          key={href}
          onClick={() => onNavigate(href)}
          className="px-4 py-2 text-sm rounded-lg transition-colors text-slate-500 hover:text-slate-900 hover:bg-black/5 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5"
        >
          {label}
        </button>
      ))}
    </nav>
  );
}
