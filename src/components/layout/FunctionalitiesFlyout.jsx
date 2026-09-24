import { FEATURES } from "../../data/features.js";

export default function FunctionalitiesFlyout({ open, onMouseEnter, onMouseLeave, onSelect }) {
  return (
    <div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={`absolute left-16 top-0 z-50 min-w-[220px] rounded-2xl border border-black/10 bg-white/95 px-2 py-2 shadow-2xl transition-all duration-200 dark:border-white/10 dark:bg-[#0F172A]/95 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand dark:text-[#6DA5FF]">
        Funcionalidades
      </div>
      <div className="flex flex-col gap-1">
        {FEATURES.map((feature) => (
          <button
            key={feature.id}
            onClick={() => onSelect(feature.id)}
            className="rounded-xl px-2.5 py-1.5 text-left text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
          >
            {feature.title}
          </button>
        ))}
      </div>
    </div>
  );
}
