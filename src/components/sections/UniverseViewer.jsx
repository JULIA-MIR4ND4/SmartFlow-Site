import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { getDocScreenData } from "../../data/learningHotspots.js";
import { getScreenImages } from "../../data/screenImages.js";
import HotspotList from "./HotspotList.jsx";
import ScreenCanvas from "./ScreenCanvas.jsx";
import ScreenPagination from "./ScreenPagination.jsx";
import ViewerHeader from "./ViewerHeader.jsx";
import ViewerNavButtons from "./ViewerNavButtons.jsx";

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
        onClick={(event) => event.stopPropagation()}
      >
        <ViewerHeader
          universe={universe}
          screenIdx={screenIdx}
          total={total}
          closeButtonRef={closeButtonRef}
          onClose={onClose}
        />
        <div className="grid lg:grid-cols-[1fr_320px] flex-1 min-h-0 lg:h-full" style={{ gridTemplateRows: "minmax(0, 1fr)" }}>
          <div className="bg-slate-50 p-6 dark:bg-transparent">
            <ScreenCanvas
              universe={universe}
              currentImage={currentImage}
              hotspots={hotspots}
              activeHotspot={activeHotspot}
              onClearHotspot={() => setActiveHotspot(null)}
              onToggleHotspot={setActiveHotspot}
            />
            <ScreenPagination images={images} screenIdx={screenIdx} onSelect={setScreenIdx} />
          </div>
          <div className="p-6 h-full min-h-0 flex flex-col gap-4 border-l border-black/6 bg-white dark:border-white/5 dark:bg-transparent">
            <div className="flex-1 min-h-0 overflow-y-auto pr-1 hotspot-scroll">
              <div className="mb-4">
                <div className="text-[11px] font-semibold uppercase tracking-widest mb-1" style={{ color: universe.color }}>
                  {universe.name} — Tela {screenIdx + 1}
                </div>
                <h3 className="font-display text-xl font-bold mb-2 text-slate-900 dark:text-white">{screen.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">{screen.desc}</p>
              </div>
              <HotspotList hotspots={hotspots} activeHotspot={activeHotspot} onToggle={setActiveHotspot} />
            </div>
            <ViewerNavButtons screenIdx={screenIdx} total={total} onPrevious={prev} onNext={next} />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
