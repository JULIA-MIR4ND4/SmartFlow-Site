export default function HotspotList({ hotspots, activeHotspot, onToggle }) {
  return (
    <>
      {hotspots.length > 0 && (
        <div className="text-[11px] font-semibold uppercase tracking-widest mb-2 text-slate-400 dark:text-slate-500">
          Elementos interativos
        </div>
      )}
      <div className="space-y-2">
        {hotspots.map((hotspot, index) => {
          const itemClasses = activeHotspot === index
            ? "bg-brand/15 border-brand/40 text-brand-light"
            : [
                "bg-slate-50 border-black/6 text-slate-500 hover:bg-slate-100",
                "dark:bg-white/3 dark:border-white/5 dark:text-slate-400 dark:hover:bg-white/6",
                "dark:hover:text-slate-300",
              ].join(" ");
          const buttonClasses = [
            "w-full text-left p-2 rounded-lg border transition-all text-[11px] leading-snug",
            itemClasses,
          ].join(" ");

          return (
            <button
              key={hotspot.id || index}
              data-hotspot-id={hotspot.id || undefined}
              onClick={() => onToggle(activeHotspot === index ? null : index)}
              className={buttonClasses}
            >
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                  <span className="text-[8px] font-bold text-white">
                    {hotspot.number || index + 1}
                  </span>
                </div>
                <span className="font-medium line-clamp-2">{hotspot.name}</span>
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}
