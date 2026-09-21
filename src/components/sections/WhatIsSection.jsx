import { Check } from "lucide-react";
import FadeIn from "../ui/FadeIn.jsx";
import ScreenFrame from "../ui/ScreenFrame.jsx";

const BULLET_POINTS = [
  "Plataforma 100% web, acessível de qualquer dispositivo",
  "Integração nativa entre todos os módulos do sistema",
  "Interface intuitiva, sem necessidade de treinamento extenso",
  "Dados em tempo real para decisões rápidas e precisas",
];

export default function WhatIsSection() {
  return (
    <section id="sobre" className="py-32 relative">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-brand/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-20 items-center">
        <FadeIn>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand/10 border border-brand/20 rounded-full text-sm text-[#3B82F6] mb-6">
            Sobre o SmartFlow
          </div>
          <h2
            className="font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight text-slate-900 dark:text-white"
          >
            O que é o <span className="text-[#3B82F6]">SmartFlow?</span>
          </h2>
          <p className="text-lg leading-relaxed mb-5 text-slate-600 dark:text-slate-400">
            O SmartFlow é um sistema desenvolvido para auxiliar no gerenciamento de estabelecimentos
            comerciais, centralizando em uma única plataforma as principais atividades administrativas
            e operacionais.
          </p>
          <p className="leading-relaxed mb-8 text-slate-500">
            Seu objetivo é facilitar a gestão do negócio por meio da organização de informações,
            automação de processos e integração entre diferentes funcionalidades, proporcionando maior
            eficiência, praticidade e controle das operações.
          </p>
          <div className="space-y-3">
            {BULLET_POINTS.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check size={10} className="text-[#3B82F6]" />
                </div>
                <span className="text-sm text-slate-600 dark:text-slate-400">{item}</span>
              </div>
            ))}
          </div>
        </FadeIn>
        <FadeIn delay={0.15}>
          <ScreenFrame imageName="financeiro1" />
        </FadeIn>
      </div>
    </section>
  );
}
