import { ArrowRight, Blocks, Cpu, Sparkles } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";
import FadeIn from "../ui/FadeIn.jsx";

const STEPS = [
  {
    title: "Cadastro e operação",
    description: "Clientes, produtos e torneiras entram no sistema com um fluxo estruturado e consistente.",
    icon: Blocks,
  },
  {
    title: "Processamento e acompanhamento",
    description: "Vendas, comandas e cobranças são registradas e acompanhadas em tempo real.",
    icon: Cpu,
  },
  {
    title: "Decisão e crescimento",
    description: "Relatórios e indicadores tornam mais simples tomar decisões e planejar o próximo passo.",
    icon: Sparkles,
  },
];

export default function FlowSection() {
  const { dark } = useTheme();

  return (
    <section id="fluxo" className="py-32 relative">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(37,99,235,0.15),transparent_45%)]" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-full text-sm text-[#3B82F6] mb-5">
            Fluxo do sistema
          </div>
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-4 ${dark ? "text-white" : "text-slate-900"}`}
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Do cadastro à análise, tudo em um caminho único.
          </h2>
          <p className={`text-lg leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
            O SmartFlow conecta cada etapa da operação para que o time trabalhe com mais velocidade e menos ruído.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-3 gap-6">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <FadeIn key={step.title} delay={0.06 * index}>
                <div className={`rounded-3xl border p-6 h-full ${dark ? "border-white/10 bg-white/5" : "border-black/8 bg-white"}`}>
                  <div className="w-12 h-12 rounded-2xl bg-[#2563EB]/15 border border-[#2563EB]/25 flex items-center justify-center mb-5">
                    <Icon size={20} className="text-[#3B82F6]" />
                  </div>
                  <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-3">Passo {index + 1}</div>
                  <h3 className={`text-xl font-semibold mb-3 ${dark ? "text-white" : "text-slate-900"}`}>{step.title}</h3>
                  <p className={`text-sm leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>{step.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.16} className={`mt-10 rounded-3xl border p-6 flex flex-col lg:flex-row items-center justify-between gap-5 ${dark ? "border-white/10 bg-white/5" : "border-black/8 bg-white"}`}>
          <div>
            <div className="text-[11px] uppercase tracking-[0.25em] text-slate-500 mb-2">Pronto para testar</div>
            <div className={`text-2xl font-semibold ${dark ? "text-white" : "text-slate-900"}`}>Explore as telas e veja o SmartFlow em ação.</div>
          </div>
          <button className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-medium transition-colors">
            Conhecer as telas
            <ArrowRight size={15} />
          </button>
        </FadeIn>
      </div>
    </section>
  );
}
