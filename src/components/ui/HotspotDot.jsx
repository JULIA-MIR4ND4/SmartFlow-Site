import { AnimatePresence, motion } from "motion/react";

const HOTSPOT_PALETTE = {
  "🟢 Ação": {
    ring: "bg-emerald-500/40",
    dot: "bg-emerald-500",
    hover: "hover:bg-emerald-400",
    border: "border-emerald-400/40",
    text: "text-emerald-600",
  },
  "🔵 Visualização": {
    ring: "bg-sky-500/40",
    dot: "bg-sky-500",
    hover: "hover:bg-sky-400",
    border: "border-sky-400/40",
    text: "text-sky-600",
  },
  "🟠 Navegação": {
    ring: "bg-amber-500/40",
    dot: "bg-amber-500",
    hover: "hover:bg-amber-400",
    border: "border-amber-400/40",
    text: "text-amber-600",
  },
  "🟣 Configuração": {
    ring: "bg-violet-500/40",
    dot: "bg-violet-500",
    hover: "hover:bg-violet-400",
    border: "border-violet-400/40",
    text: "text-violet-600",
  },
  "🟡 Download / Exportação": {
    ring: "bg-yellow-500/40",
    dot: "bg-yellow-500",
    hover: "hover:bg-yellow-400",
    border: "border-yellow-400/40",
    text: "text-yellow-600",
  },
  "⚪ Informação": {
    ring: "bg-slate-500/40",
    dot: "bg-slate-500",
    hover: "hover:bg-slate-400",
    border: "border-slate-400/40",
    text: "text-slate-600",
  },
  default: {
    ring: "bg-blue-500/40",
    dot: "bg-blue-500",
    hover: "hover:bg-blue-400",
    border: "border-blue-400/40",
    text: "text-blue-600",
  },
};

export default function HotspotDot({ spot, index, isActive, onToggle }) {
  const num = spot.number || `${index + 1}`.padStart(2, "0");
  const flipX = spot.x > 55;
  const flipY = spot.y > 60;
  const palette = HOTSPOT_PALETTE[spot.category] || HOTSPOT_PALETTE.default;

  return (
    <div
      className={`absolute cursor-pointer ${isActive ? "z-30" : "z-10"}`}
      data-hotspot-id={spot.id || `hotspot-${index}`}
      data-hotspot-index={index}
      style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: "translate(-50%,-50%)" }}
      onMouseEnter={() => onToggle(index)}
      onMouseLeave={() => onToggle(null)}
      onClick={(event) => {
        event.stopPropagation();
        onToggle(isActive ? null : index);
      }}
    >
      <div className={`absolute inset-0 w-5 h-5 -translate-x-px -translate-y-px rounded-full ${palette.ring} animate-ping motion-reduce:animate-none`} />
      <div
        className={`w-5 h-5 rounded-full border-2 border-white shadow-lg flex items-center justify-center transition-all duration-200 ${palette.dot} ${palette.hover} ${
          isActive ? "scale-125" : "hover:scale-110"
        }`}
      >
        <span className="text-[8px] font-bold text-white leading-none select-none">{num}</span>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute z-20 w-60 pointer-events-none"
            style={{
              [flipX ? "right" : "left"]: "calc(100% + 8px)",
              [flipY ? "bottom" : "top"]: "50%",
              transform: `translateY(${flipY ? "50%" : "-50%"})`,
            }}
          >
            <div className={`rounded-xl border bg-slate-950/95 p-3 shadow-2xl shadow-black/50 ${palette.border}`}>
              <div className={`text-[11px] font-semibold ${palette.text} mb-1`}>{spot.number || index + 1} · {spot.name}</div>
              <div className="text-[10px] text-slate-300 leading-relaxed mb-2">{spot.function}</div>
              <div className="text-[10px] text-slate-400 leading-relaxed">{spot.usage}</div>
              {spot.observations && (
                <div className={`mt-2 text-[10px] font-medium ${palette.text}`}>
                  {spot.observations}
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}