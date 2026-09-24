import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { UNIVERSES } from "../../data/universes.js";
import FadeIn from "../ui/FadeIn.jsx";
import UniverseCard from "./UniverseCard.jsx";
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
          {UNIVERSES.map((universe, i) => (
            <UniverseCard key={universe.id} universe={universe} index={i} onSelect={() => setSelectedUniverse(universe)} />
          ))}
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