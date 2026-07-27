import { useState } from "react";
import { ArrowRight, BarChart3, ShoppingCart, ShieldCheck, Settings2 } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";
import FadeIn from "../ui/FadeIn.jsx";
import ScreenFrame from "../ui/ScreenFrame.jsx";

const FEATURES = [
  {
    id: "painel",
    title: "Painel operacional completo",
    description: "Centralize vendas, créditos, consumo e indicadores em um painel claro e atualizado.",
    bullets: ["Indicadores de desempenho em tempo real", "Visão consolidada de cada operação", "Acompanhamento rápido do negócio"],
    mockupKey: "dashboard",
    icon: BarChart3,
  },
  {
    id: "pdv",
    title: "Fluxo de vendas pensado para o dia a dia",
    description: "Atenda clientes com rapidez, registre pedidos e acompanhe cada etapa em poucos cliques.",
    bullets: ["Busca por cliente e TAG", "Finalização de venda simples", "Controle de itens e pagamento"],
    mockupKey: "vendas",
    icon: ShoppingCart,
  },
  {
    id: "controle",
    title: "Segurança e controle financeiro",
    description: "Gerencie contas, créditos, cashbacks e saldos com rastreio completo do movimento.",
    bullets: ["Operações financeiras organizadas", "Histórico de movimentação", "Controles de saldo e TAG"],
    mockupKey: "pagamento",
    icon: ShieldCheck,
  },
  {
    id: "automacao",
    title: "Automação para gestão de operação",
    description: "Organize estoque, comandas, clientes e relatórios em uma plataforma que conecta tudo.",
    bullets: ["Módulos integrados por contexto", "Cadastros e relatórios unificados", "Mais produtividade para equipe"],
    mockupKey: "financeiro",
    icon: Settings2,
  },
];

export default function FeaturesSection() {
  const { dark } = useTheme();
  const [activeFeature, setActiveFeature] = useState(FEATURES[0]);
  const ActiveIcon = activeFeature.icon;

  return (
    <section id="funcionalidades" className="py-32 relative">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-[#2563EB]/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#2563EB]/10 border border-[#2563EB]/20 rounded-full text-sm text-[#3B82F6] mb-5">
            Funcionalidades do SmartFlow
          </div>
          <h2
            className={`text-4xl lg:text-5xl font-bold mb-4 ${dark ? "text-white" : "text-slate-900"}`}
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Uma plataforma pensada para operar, acompanhar e crescer.
          </h2>
          <p className={`text-lg leading-relaxed ${dark ? "text-slate-400" : "text-slate-600"}`}>
            Cada bloco do sistema foi desenhado para reduzir esforço manual e dar mais clareza para a operação.
          </p>
        </FadeIn>

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-8 items-start">
          <div className="space-y-3">
            {FEATURES.map((feature) => {
              const Icon = feature.icon;
              const isActive = activeFeature.id === feature.id;

              return (
                <button
                  key={feature.id}
                  onClick={() => setActiveFeature(feature)}
                  className={`w-full text-left rounded-2xl border p-4 transition-all ${
                    isActive
                      ? "border-[#2563EB]/35 bg-[#2563EB]/10 shadow-lg shadow-blue-600/10"
                      : dark
                      ? "border-white/8 bg-white/3 hover:bg-white/5"
                      : "border-black/8 bg-white hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${isActive ? "bg-[#2563EB]" : "bg-white/8"}`}>
                      <Icon size={18} className={isActive ? "text-white" : "text-[#3B82F6]"} />
                    </div>
                    <div className="flex-1">
                      <div className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{feature.title}</div>
                      <div className={`text-sm mt-1 ${dark ? "text-slate-400" : "text-slate-600"}`}>{feature.description}</div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <FadeIn delay={0.08} className="rounded-3xl border border-white/10 bg-[#060D1C] p-4 shadow-2xl shadow-black/40">
            <div className="flex items-center justify-between mb-4">
              <div>
                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500">Visualização</div>
                <div className="text-white font-semibold flex items-center gap-2 mt-1">
                  <div className="w-8 h-8 rounded-lg bg-[#2563EB]/20 border border-[#2563EB]/30 flex items-center justify-center">
                    <ActiveIcon size={16} className="text-[#3B82F6]" />
                  </div>
                  {activeFeature.title}
                </div>
              </div>
              <button className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-white/6 text-slate-300 text-sm border border-white/8">
                Ver mais
                <ArrowRight size={14} />
              </button>
            </div>

            <ScreenFrame mockupKey={activeFeature.mockupKey} height={420} />

            <div className="mt-4 grid sm:grid-cols-3 gap-2">
              {activeFeature.bullets.map((item) => (
                <div key={item} className="rounded-xl border border-white/8 bg-white/5 px-3 py-2 text-[11px] text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
