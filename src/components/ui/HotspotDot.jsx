import { useLayoutEffect, useRef, useState } from "react";
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
  const markerRef = useRef(null);
  const tooltipRef = useRef(null);
  const [tooltipPosition, setTooltipPosition] = useState({ left: 0, top: 0, maxHeight: null });
  const num = spot.number || `${index + 1}`.padStart(2, "0");
  const tooltipSide = spot.x < 30 ? "right" : spot.x > 70 ? "left" : "center";
  const palette = HOTSPOT_PALETTE[spot.category] || HOTSPOT_PALETTE.default;
  const markerSize = "clamp(14px, 2.6041667vw, 20px)";

  useLayoutEffect(() => {
    if (!isActive) return undefined;

    const updatePosition = () => {
      const marker = markerRef.current?.getBoundingClientRect();
      const tooltip = tooltipRef.current?.getBoundingClientRect();
      if (!marker || !tooltip) return;

      let scrollContainer = markerRef.current.parentElement;
      while (scrollContainer) {
        const overflowY = window.getComputedStyle(scrollContainer).overflowY;
        if (overflowY === "auto" || overflowY === "scroll") break;
        scrollContainer = scrollContainer.parentElement;
      }

      const container = scrollContainer?.getBoundingClientRect();
      const margin = 12;
      const minLeft = Math.max(margin, container?.left + margin || margin);
      const maxRight = Math.min(
        document.documentElement.clientWidth - margin,
        container?.right - margin || document.documentElement.clientWidth - margin,
      );
      const minTop = Math.max(margin, container?.top + margin || margin);
      const maxBottom = Math.min(
        window.innerHeight - margin,
        container?.bottom - margin || window.innerHeight - margin,
      );
      const maxHeight = Math.max(0, maxBottom - minTop);
      const tooltipHeight = Math.min(tooltip.height, maxHeight);
      const preferredLeft = tooltipSide === "right"
        ? marker.right + 8
        : tooltipSide === "left"
          ? marker.left - tooltip.width - 8
          : marker.left + (marker.width - tooltip.width) / 2;
      const left = Math.min(
        Math.max(preferredLeft, minLeft),
        maxRight - tooltip.width,
      );
      const top = Math.min(
        Math.max(marker.top + (marker.height - tooltipHeight) / 2, minTop),
        maxBottom - tooltipHeight,
      );

      const nextPosition = {
        left: left - marker.left,
        top: top - marker.top,
        maxHeight,
      };
      setTooltipPosition((current) => (
        Math.abs(current.left - nextPosition.left) < 1
        && Math.abs(current.top - nextPosition.top) < 1
        && current.maxHeight === nextPosition.maxHeight
          ? current
          : nextPosition
      ));
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isActive, tooltipSide]);

  return (
    <div
      ref={markerRef}
      className={`absolute flex h-11 w-11 cursor-pointer select-none items-center justify-center rounded-full touch-manipulation [-webkit-touch-callout:none] sm:h-5 sm:w-5 ${isActive ? "z-30" : "z-10"}`}
      data-hotspot-id={spot.id || `hotspot-${index}`}
      data-hotspot-index={index}
      style={{ left: `${spot.x}%`, top: `${spot.y}%`, transform: "translate(-50%,-50%)" }}
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") onToggle(index);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") onToggle(null);
      }}
      onClick={(event) => {
        event.stopPropagation();
        if (isActive && event.nativeEvent.pointerType === "mouse") return;
        onToggle(isActive ? null : index);
      }}
    >
      <div
        className={`pointer-events-none absolute left-1/2 top-1/2
          -translate-x-1/2 -translate-y-1/2 rounded-full
          ${palette.ring} animate-ping motion-reduce:animate-none`}
        style={{ width: markerSize, height: markerSize }}
      />
      <div
        className={`pointer-events-none flex items-center justify-center rounded-full
          border-2 border-white shadow-lg transition-all duration-200
          ${palette.dot} ${palette.hover}
          ${isActive ? "scale-125" : "hover:scale-110"}`}
        style={{ width: markerSize, height: markerSize }}
      >
        <span className="select-none text-[7px] font-bold leading-none text-white sm:text-[8px]">{num}</span>
      </div>
      <AnimatePresence>
        {isActive && (
          <motion.div
            ref={tooltipRef}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.15 }}
            className="absolute z-20 w-[min(15rem,calc(100vw-10rem))] max-h-[calc(100dvh-1.5rem)] overflow-y-auto pointer-events-none sm:w-60"
            style={{
              left: tooltipPosition.left,
              top: tooltipPosition.top,
              maxHeight: tooltipPosition.maxHeight ?? undefined,
            }}
          >
            <div
              className={`rounded-xl border bg-white/95 p-3 shadow-2xl shadow-black/15 dark:bg-slate-950/95 dark:shadow-black/50
                ${palette.border}`}
            >
              <div className={`text-[11px] font-semibold ${palette.text} mb-1`}>
                {spot.number || index + 1} · {spot.name}
              </div>
              <div className="text-[10px] text-slate-700 leading-relaxed mb-2 dark:text-slate-300">{spot.function}</div>
              <div className="text-[10px] text-slate-600 leading-relaxed dark:text-slate-400">{spot.usage}</div>
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