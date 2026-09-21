import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Eye } from "lucide-react";
import { UNIVERSES } from "../../data/universes.js";
import { getFirstScreenImage, getScreenImages } from "../../data/screenImages.js";
import FadeIn from "../ui/FadeIn.jsx";
import ScreenImage from "../ui/ScreenImage.jsx";
import UniverseViewer from "./UniverseViewer.jsx";

export default function UniverseGallery() {
  const [selectedUniverse, setSelectedUniverse] = useState(null);

  return (
    <section id="galeria" className="py-24 relative">
      <div
        className={`absolute inset-0 pointer-events-none ${
          "bg-gradient-to-b from-transparent via-transparent to-transparent dark:via-[#1E293B]/10"
        }`}
      />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand/10 border border-brand/20 rounded-full text-sm text-[#3B82F6] mb-4">
            Central de Aprendizagem SmartFlow
          </div>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            Central de Aprendizagem SmartFlow
          </h2>
          <p className="text-lg max-w-2xl mx-auto text-slate-500">
            Selecione um Universo para explorar as telas reais do sistema. Os números nas bolinhas
            indicam a sequência lógica de utilização. Passe o mouse para saber mais sobre cada
            elemento.
            
          </p>
          <p className="text-lg max-w-2xl mx-auto text-slate-500">
             🟢 Ação,  🔵 Visualização, 🟠 Navegação, 🟣 Configuração, ⚪ Informação, 🟡 Download / Exportação.
          </p>
          
          
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {UNIVERSES.map((universe, i) => {
            const firstImage = getFirstScreenImage(universe.id);
            const screenCount = getScreenImages(universe.id).length || universe.screens.length;
            const Icon = universe.icon;
            return (
              <FadeIn key={universe.id} delay={i * 0.04}>
                <div
                  id={`universo-${universe.id}`}
                  className="group relative rounded-xl overflow-hidden border border-black/8 bg-white cursor-pointer transition-all duration-300 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/10 scroll-mt-24 dark:border-white/8 dark:bg-transparent dark:hover:shadow-brand/8"
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
                    className="absolute top-3 right-3 z-10 px-2 py-1 rounded-full text-[10px] font-medium bg-white/90 text-slate-500 border border-black/8 dark:bg-[#1E293B]/90 dark:text-slate-400 dark:border-white/10"
                  >
                    {screenCount} {screenCount === 1 ? "tela" : "telas"}
                  </div>

                  <div className="bg-slate-100 dark:bg-[#060D1C]">
                    <div className="flex items-center gap-1.5 px-3 py-2 border-b border-slate-200 dark:border-white/5">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                      <div className="w-2 h-2 rounded-full bg-green-500/50" />
                    </div>
                    <div style={{ height: 210, pointerEvents: "none" }}>
                      {firstImage && <ScreenImage name={firstImage} fit={universe.imageFit || "cover"} />}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/8 transition-colors flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100 bg-brand text-white text-sm font-medium px-5 py-2.5 rounded-xl flex items-center gap-2 shadow-xl">
                      <Eye size={15} />
                      Explorar
                    </div>
                  </div>

                  <div className="px-4 py-3 border-t border-black/5 bg-slate-50 dark:border-white/5 dark:bg-[#1E293B]/60">
                    <div className="font-semibold text-sm text-slate-900 dark:text-white">
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