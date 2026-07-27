import { AnimatePresence, motion } from "motion/react";

export default function HotspotDot({ spot, index, activeIdx, onToggle }) {
  const isActive = activeIdx === index;
  const num = index + 1;
  const flipX = spot.x > 55;
  const flipY = spot.y > 60;

  return (
    <div
      className="absolute z-10 cursor-pointer"
      style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: "translate(-50%,-50%)" }}
      onMouseEnter={() => onToggle(index)}
      onMouseLeave={() => onToggle(null)}
      onClick={(e) => {
        e.stopPropagation();
        onToggle(isActive ? null : index);
      }}
    >
      <div className="absolute inset-0 w-5 h-5 -translate-x-px -translate-y-px rounded-full bg-[#2563EB]/40 animate-ping" />
      <div
        className={`w-5 h-5 rounded-full border-2 border-white shadow-lg flex items-center justify-center transition-all duration-200 ${
          isActive ? "bg-[#2563EB] scale-125" : "bg-[#2563EB]/85 hover:bg-[#2563EB]"
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
            className="absolute z-20 w-52 pointer-events-none"
            style={{
              [flipX ? "right" : "left"]: "calc(100% + 8px)",
              [flipY ? "bottom" : "top"]: "50%",
              transform: `translateY(${flipY ? "50%" : "-50%"})`,
            }}
          >
            <div className="bg-[#0A1628] border border-[#2563EB]/30 rounded-xl p-3 shadow-2xl shadow-black/50">
              <div className="text-[11px] font-semibold text-[#3B82F6] mb-1">{spot.label}</div>
              <div className="text-[10px] text-slate-400 leading-relaxed">{spot.info}</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
