import { motion } from "motion/react";
import { LayoutDashboard } from "lucide-react";
import FadeIn from "../ui/FadeIn.jsx";
import ScreenFrame from "../ui/ScreenFrame.jsx";

const ACTIONS = [
  "Relatórios de vendas do mês (TAP e PDV)",
  "Gráfico de vendas por categoria",
  "Top 10 consumos no TAP",
  "Clientes por dia e aniversariantes",
];

export default function ModulesSection() {
  return (
    <section id="funcionalidades" className="relative overflow-hidden bg-[#0D1629] py-24 md:py-32 lg:py-36">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.18),_transparent_45%)]" />
      <div className="relative mx-auto max-w-[1400px] px-6 sm:px-8 lg:px-10">
        <FadeIn className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center rounded-full border border-[#2563EB]/35 bg-[#2563EB]/10 px-4 py-1.5 text-sm font-medium uppercase tracking-[0.3em] text-[#6DA5FF]">
            Funcionalidades
          </div>
          <h2
            className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl"
            style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
          >
            Módulos do sistema
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-400 sm:text-lg">
            15 módulos completamente integrados, cada um desenvolvido para uma etapa específica da gestão do seu estabelecimento.
          </p>
        </FadeIn>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.35 }}
          className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
        >
          <div className="rounded-[24px] border border-white/10 bg-white/5 p-6 shadow-[0_24px_70px_rgba(0,0,0,0.22)] backdrop-blur-sm sm:p-7 lg:p-8">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#2563EB]/35 bg-[#07111F] shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                <LayoutDashboard className="h-6 w-6 text-[#3B82F6]" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.3em] text-[#6DA5FF]">
                  VISÃO GERAL DOS INDICADORES APÓS O LOGIN
                </div>
              </div>
            </div>

            <h3 className="mt-5 text-2xl font-semibold text-white sm:text-3xl">Dashboard</h3>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400 sm:text-[15px]">
              A tela inicial exibida após o login no SmartFlow. Reúne em um único ambiente indicadores e relatórios que auxiliam no acompanhamento das operações: vendas no TAP, inserção de créditos, vendas no PDV, consumo em litros e Top 10 consumos no TAP do mês.
            </p>

            <div className="mt-6">
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.3em] text-[#3B82F6]">
                PRINCIPAIS AÇÕES DISPONÍVEIS
              </h4>
              <ul className="mt-4 space-y-2.5">
                {ACTIONS.map((action) => (
                  <li key={action} className="flex items-start gap-2.5 text-sm leading-6 text-slate-300">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#3B82F6]" />
                    <span>{action}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center">
            <div className="w-full rounded-[20px] border border-white/10 bg-[#07111F] p-1.5 shadow-[0_18px_48px_rgba(0,0,0,0.24)] sm:p-2 lg:p-2.5">
              <ScreenFrame mockupKey="dashboard" height={340} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
