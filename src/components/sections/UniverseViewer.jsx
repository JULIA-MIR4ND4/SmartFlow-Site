import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { getDocScreenData } from "../../data/learningHotspots.js";
import { getScreenImages } from "../../data/screenImages.js";
import ScreenImage from "../ui/ScreenImage.jsx";
import HotspotDot from "../ui/HotspotDot.jsx";

export default function UniverseViewer({ universe, onClose }) {
  const { dark } = useTheme();
  const [screenIdx, setScreenIdx] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState(null);

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
        className={`relative w-full max-w-6xl rounded-2xl overflow-hidden border shadow-2xl ${
          dark ? "bg-[#0B1526] border-white/10" : "bg-slate-100 border-black/10"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <div
          className={`flex items-center justify-between px-6 py-4 border-b ${
            dark ? "border-white/5 bg-[#070E1E]" : "border-black/6 bg-white"
          }`}
        >
          <button
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
              className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              {universe.name}
            </span>
          </div>
          <div className={`text-sm ${dark ? "text-slate-500" : "text-slate-400"}`}>
            Tela {screenIdx + 1} de {total}
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px]">
          <div className={`p-6 ${dark ? "" : "bg-slate-50"}`}>
            <div className={`relative rounded-xl overflow-hidden border shadow-2xl ${dark ? "border-white/10 shadow-black/50" : "border-slate-200 shadow-slate-200/70"}`}>
              <div className={`flex items-center gap-2 px-4 py-2.5 border-b ${dark ? "bg-[#060D1C] border-white/5" : "bg-white border-slate-200"}`}>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                </div>
                <div className={`flex-1 mx-3 rounded text-[10px] px-2 py-0.5 text-center ${dark ? "bg-[#0F172A] text-slate-500" : "bg-slate-100 text-slate-500"}`}>
                  app.smartflow.com.br/{universe.id}
                </div>
              </div>
              <div className="relative" style={{ height: 380, fontFamily: "'Inter', sans-serif" }} onClick={() => setActiveHotspot(null)}>
                {currentImage && <ScreenImage name={currentImage} />}
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
            {total > 1 && (
              <div className="flex items-center justify-center gap-2 mt-4">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setScreenIdx(i)}
                    className={`rounded-full transition-all duration-300 ${
                      i === screenIdx
                        ? "w-6 h-2 bg-[#2563EB]"
                        : `w-2 h-2 ${dark ? "bg-slate-600 hover:bg-slate-400" : "bg-slate-300 hover:bg-slate-400"}`
                    }`}
                  />
                ))}
              </div>
            )}
          </div>

          <div className={`p-6 flex flex-col gap-4 border-l ${dark ? "border-white/5" : "border-black/6 bg-white"}`}>
            <div>
              <div
                className="text-[11px] font-semibold uppercase tracking-widest mb-1"
                style={{ color: universe.color }}
              >
                {universe.name} — Tela {screenIdx + 1}
              </div>
              <h3
                className={`text-xl font-bold mb-2 ${dark ? "text-white" : "text-slate-900"}`}
                style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
              >
                {screen.title}
              </h3>
              <p className={`text-sm leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
                {screen.desc}
              </p>
            </div>

            <div className="h-[260px] overflow-y-auto pr-1 hotspot-scroll">
              {hotspots.length > 0 && (
                <div className={`text-[11px] font-semibold uppercase tracking-widest mb-2 ${dark ? "text-slate-500" : "text-slate-400"}`}>
                  Elementos interativos
                </div>
              )}
              <div className="space-y-2">
                {hotspots.map((hs, i) => (
                  <button
                    key={hs.id || i}
                    data-hotspot-id={hs.id || undefined}
                    onClick={() => setActiveHotspot(activeHotspot === i ? null : i)}
                    className={`w-full text-left p-2 rounded-lg border transition-all text-[11px] leading-snug ${
                      activeHotspot === i
                        ? "bg-[#2563EB]/15 border-[#2563EB]/40 text-[#3B82F6]"
                        : dark
                        ? "bg-white/3 border-white/5 text-slate-400 hover:bg-white/6 hover:text-slate-300"
                        : "bg-slate-50 border-black/6 text-slate-500 hover:bg-slate-100"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded-full bg-[#2563EB] flex items-center justify-center flex-shrink-0">
                        <span className="text-[8px] font-bold text-white">{hs.number || i + 1}</span>
                      </div>
                      <span className="font-medium line-clamp-2">{hs.name}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-3 pt-2 border-t border-white/5">
              <button
                onClick={prev}
                disabled={screenIdx === 0}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-medium border transition-all ${
                  screenIdx === 0
                    ? dark
                      ? "border-white/5 text-slate-700 cursor-not-allowed"
                      : "border-black/5 text-slate-300 cursor-not-allowed"
                    : dark
                    ? "border-white/10 text-slate-300 hover:bg-white/5 hover:text-white"
                    : "border-black/10 text-slate-600 hover:bg-slate-50"
                }`}
              >
                <ChevronLeft size={14} />
                Anterior
              </button>
              <button
                onClick={next}
                disabled={screenIdx === total - 1}
                className={`flex-1 flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                  screenIdx === total - 1
                    ? dark
                      ? "bg-[#2563EB]/20 text-[#2563EB]/40 cursor-not-allowed"
                      : "bg-slate-100 text-slate-300 cursor-not-allowed"
                    : "bg-[#2563EB] hover:bg-[#1D4ED8] text-white shadow-lg shadow-blue-600/20"
                }`}
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
