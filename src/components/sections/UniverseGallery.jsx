import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Eye } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { UNIVERSES } from "../../data/universes.js";
import { getFirstScreenImage } from "../../data/screenImages.js";
import FadeIn from "../ui/FadeIn.jsx";
import ScreenImage from "../ui/ScreenImage.jsx";
import UniverseViewer from "./UniverseViewer.jsx";

export default function UniverseGallery() {
  const { dark } = useTheme();
  const [selectedUniverse, setSelectedUniverse] = useState(null);

  return (
    <section id="galeria" className="py-24 relative">
      <div
        className={`absolute inset-0 pointer-events-none ${
          dark ? "bg-gradient-to-b from-transparent via-[#1E293B]/10 to-transparent" : ""
        }`}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-full text-sm text-[#3B82F6] mb-4">
            Central de Aprendizagem SmartFlow
          </div>
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-4 ${dark ? "text-white" : "text-slate-900"}`}
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Central de Aprendizagem SmartFlow
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-slate-500">
            Selecione um Universo para explorar as telas reais do sistema. Os números nas bolinhas
            indicam a sequência lógica de utilização. Passe o mouse para saber mais sobre cada
            elemento.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {UNIVERSES.map((universe, i) => {
            const firstImage = getFirstScreenImage(universe.id);
            const Icon = universe.icon;
            return (
              <FadeIn key={universe.id} delay={i * 0.04}>
                <div
                  className={`group relative rounded-xl overflow-hidden border cursor-pointer transition-all duration-300 hover:shadow-xl ${
                    dark
                      ? "border-white/8 hover:border-[#2563EB]/40 hover:shadow-[#2563EB]/8"
                      : "border-black/8 hover:border-[#2563EB]/40 hover:shadow-[#2563EB]/10 bg-white"
                  }`}
                  onClick={() => setSelectedUniverse(universe)}
                >
                  <div
                    className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-white text-[11px] font-semibold shadow-lg"
                    style={{ background: universe.color }}
                  >
                    <Icon size={10} className="text-white" />
                    {universe.name}
                  </div>
                  <div
                    className={`absolute top-3 right-3 z-10 px-2 py-1 rounded-full text-[10px] font-medium ${
                      dark
                        ? "bg-[#1E293B]/90 text-slate-400 border border-white/10"
                        : "bg-white/90 text-slate-500 border border-black/8"
                    }`}
                  >
                    {universe.screens.length} {universe.screens.length === 1 ? "tela" : "telas"}
                  </div>

                  <div className={dark ? "bg-[#060D1C]" : "bg-slate-100"}>
                    <div className={`flex items-center gap-1.5 px-3 py-2 border-b ${dark ? "border-white/5" : "border-slate-200"}`}>
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <div style={{ height: 210, fontFamily: "'Inter', sans-serif", pointerEvents: "none" }}>
                      {firstImage && <ScreenImage name={firstImage} />}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-[#2563EB]/0 group-hover:bg-[#2563EB]/8 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100 bg-[#2563EB] text-white text-sm font-medium px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-xl">
                      <Eye size={15} />
                      Explorar
                    </div>
                  </div>

                  <div className={`px-4 py-3 border-t ${dark ? "border-white/5 bg-[#1E293B]/60" : "border-black/5 bg-slate-50"}`}>
                    <div className={`font-semibold text-sm ${dark ? "text-white" : "text-slate-900"}`}>
                      {universe.name}
                    </div>
                    <div className="text-xs mt-0.5 text-slate-500">{universe.description}</div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selectedUniverse && (
          <UniverseViewer universe={selectedUniverse} onClose={() => setSelectedUniverse(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
