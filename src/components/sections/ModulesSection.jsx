import { motion } from "motion/react";
import { FEATURES } from "../../data/features.js";
import FadeIn from "../ui/FadeIn.jsx";
import ModuleCard from "./ModuleCard.jsx";
export default function ModulesSection() {
  return (
    <section id="funcionalidades" className="relative overflow-hidden bg-slate-50 py-24 md:py-32 lg:py-36 dark:bg-[#0D1629]">
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.3em] text-blue-700 dark:border-brand/35 dark:bg-brand/10 dark:text-[#6DA5FF]">
            Funcionalidades
          </div>
          <h2
            className="font-display text-4xl font-semibold text-slate-900 sm:text-5xl lg:text-6xl dark:text-white"
          >
            Módulos do sistema
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-400">
            15+ módulos completamente integrados, cada um desenvolvido para uma etapa específica da gestão do seu estabelecimento.
          </p>
        </FadeIn>

        <div className="space-y-10 lg:space-y-14">
          {FEATURES.map((feature, index) => <ModuleCard key={feature.title} feature={feature} index={index} />)}
        </div>
      </div>
    </section>
  );
}