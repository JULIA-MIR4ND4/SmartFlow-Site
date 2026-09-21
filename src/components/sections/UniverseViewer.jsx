import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { getDocScreenData } from "../../data/learningHotspots.js";
import { getScreenImages } from "../../data/screenImages.js";
import ScreenImage from "../ui/ScreenImage.jsx";
import HotspotDot from "../ui/HotspotDot.jsx";

export default function UniverseViewer({ universe, onClose }) {
  const [screenIdx, setScreenIdx] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);

  const images = getScreenImages(universe.id);
  const total = images.length;
  const currentImage = images[screenIdx];
  const docScreen = getDocScreenData(universe.id, screenIdx);
  const screen = docScreen ?? universe.screens[screenIdx] ?? {
    title: `Tela ${screenIdx + 1}`,
    desc: "",
    hotspots: [],
  };
  const hotspots = screen.hotspots ?? [];
  const Icon = universe.icon;

  useEffect(() => {
    setActiveHotspot(null);
  }, [screenIdx]);

  useEffect(() => {
    const previousActiveElement = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    const focusableSelector = [
      "button:not([disabled])",
      "[href]",
      "input:not([disabled])",
      "select:not([disabled])",
      "textarea:not([disabled])",
      "[tabindex]:not([tabindex=\"-1\"])",
    ].join(",");

    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusableElements = [...dialogRef.current.querySelectorAll(focusableSelector)];
      if (focusableElements.length === 0) {
        event.preventDefault();
        dialogRef.current.focus();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];
      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      previousActiveElement?.focus?.();
    };
  }, [onClose]);

  const prev = () => screenIdx > 0 && setScreenIdx(screenIdx - 1);
  const next = () => screenIdx < total - 1 && setScreenIdx(screenIdx + 1);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ type: "spring", damping: 28, stiffness: 280 }}
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="universe-viewer-title"
        tabIndex={-1}
        className="relative w-full max-w-6xl rounded-2xl overflow-hidden border border-black/10 bg-slate-100 shadow-2xl flex flex-col h-[640px] max-h-[90vh] dark:border-white/10 dark:bg-[#0B1526]"
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className="flex items-center justify-between px-6 py-4 border-b border-black/6 bg-white dark:border-white/5 dark:bg-[#070E1E]"
        >
          <button
            ref={closeButtonRef}
            onClick={onClose}
            className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors"
          >
            <ChevronLeft size={16} />
            Voltar à galeria
          </button>
          <div className="flex items-center gap-3">
            <div
              className="w-5 h-5 rounded flex items-center justify-center"
              style={{ background: universe.color }}
            >
              <Icon size={12} className="text-white" />
            </div>
            <span
              id="universe-viewer-title"
              className="font-display font-semibold text-slate-900 dark:text-white"
            >
              {universe.name}
            </span>
          </div>
          <div className="text-sm text-slate-400 dark:text-slate-500">
            Tela {screenIdx + 1} de {total}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] flex-1 min-h-0 lg:h-full" style={{ gridTemplateRows: "minmax(0, 1fr)" }}>
          <div className="bg-slate-50 p-6 dark:bg-transparent">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/70 dark:border-white/10 dark:shadow-black/50">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b bg-white border-slate-200 dark:bg-[#060D1C] dark:border-white/5">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-3 rounded text-[10px] px-2 py-0.5 text-center bg-slate-100 text-slate-500 dark:bg-[#0F172A] dark:text-slate-500">
                  app.smartflow.com.br/{universe.id}
                </div>
              </div>
              <div className="relative" style={{ height: 380 }} onClick={() => setActiveHotspot(null)}>
                {currentImage && <ScreenImage name={currentImage} fit={universe.imageFit || "cover"} />}
                {hotspots.map((spot, i) => (
                  <HotspotDot
                    key={spot.id || i}
                    spot={spot}
                    index={i}
                    activeIdx={activeHotspot}
                    onToggle={setActiveHotspot}
                  />
                ))}
              </div>
            </div>
            <div className={`flex items-center justify-center gap-2 mt-4 flex-shrink-0 ${total > 1 ? "" : "invisible"}`}>
              {images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setScreenIdx(i)}
                  className={`rounded-full transition-all duration-300 ${
                    i === screenIdx
                      ? "w-6 h-2 bg-brand"
                      : "w-2 h-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-400"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="p-6 h-full min-h-0 flex flex-col gap-4 border-l border-black/6 bg-white dark:border-white/5 dark:bg-transparent">
            <div className="flex-1 min-h-0 overflow-y-auto pr-1 hotspot-scroll">
              <div className="mb-4">
                <div
                  className="text-[11px] font-semibold uppercase tracking-widest mb-1"
                  style={{ color: universe.color }}
                >
                  {universe.name} — Tela {screenIdx + 1}
                </div>
                <h3
                    className="font-display text-xl font-bold mb-2 text-slate-900 dark:text-white"
                >
                  {screen.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  {screen.desc}
                </p>
              </div>
              {hotspots.length > 0 && (
                <div className="text-[11px] font-semibold uppercase tracking-widest mb-2 text-slate-400 dark:text-slate-500">
                  Elementos interativos
                </div>
              )}
              <div className="space-y-2">
                {hotspots.map((hs, i) => (
                  <button
                    key={hs.id || i}
                    data-hotspot-id={hs.id || undefined}
                    onClick={() => setActiveHotspot(activeHotspot === i ? null : i)}
                    className={`w-full text-left p-2 rounded-lg border transition-all text-[11px] leading-snug ${activeHotspot === i ? "bg-brand/15 border-brand/40 text-[#3B82F6]" : "bg-slate-50 border-black/6 text-slate-500 hover:bg-slate-100 dark:bg-white/3 dark:border-white/5 dark:text-slate-400 dark:hover:bg-white/6 dark:hover:text-slate-300"}`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-brand flex items-center justify-center flex-shrink-0">
                        <span className="text-[8px] font-bold text-white">{hs.number || i + 1}</span>
                      </div>
                      <span className="font-medium line-clamp-2">{hs.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2 border-t border-white/5 flex-shrink-0">
              <button
                onClick={prev}
                disabled={screenIdx === 0}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-medium border transition-all ${screenIdx === 0 ? "border-black/5 text-slate-300 cursor-not-allowed dark:border-white/5 dark:text-slate-700" : "border-black/10 text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"}`}
              >
                <ChevronLeft size={14} />
                Anterior
              </button>
              <button
                onClick={next}
                disabled={screenIdx === total - 1}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-medium transition-all ${screenIdx === total - 1 ? "bg-slate-100 text-slate-300 cursor-not-allowed dark:bg-brand/20 dark:text-brand/40" : "bg-brand hover:bg-brand-hover text-white shadow-lg shadow-blue-600/20"}`}
              >
                Próxima
                <ChevronRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
}