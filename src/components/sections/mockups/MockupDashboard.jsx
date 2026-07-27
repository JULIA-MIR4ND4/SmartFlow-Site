import { TrendingUp, DollarSign, ShoppingBag, Printer, ChevronRight } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext.jsx";
import MockupSidebar from "./MockupSidebar.jsx";

const STAT_CARDS = [
  { icon: TrendingUp, value: "0,00", label: "Vendas no tap no mês" },
  { icon: DollarSign, value: "R$ 861", label: "Inserção de crédito do mês" },
  { icon: ShoppingBag, value: "R$ 144,00", label: "$ de vendas no PDV do mês" },
];

// Reproduz o Dashboard real do SmartFlow (SmartFlow App / Dashboard):
// cards do mês, vendas em litros no tap, vendas PDV por categoria,
// clientes por dia, novas TAGs, aniversariantes do dia e top 10 consumos.
export default function MockupDashboard() {
  const { dark } = useTheme();

  return (
    <div className={`flex w-full h-full ${dark ? "bg-[#0F172A] text-slate-300" : "bg-slate-50 text-slate-700"}`}>
      <MockupSidebar active="Dashboard" />

      <div className="flex-1 p-4 overflow-hidden flex flex-col gap-2.5">
        <div className={`text-[9px] ${dark ? "text-slate-500" : "text-slate-400"}`}>SmartFlow App / Dashboard</div>

        <div className="grid grid-cols-3 gap-2">
          {STAT_CARDS.map(({ icon: Icon, value, label }) => (
            <div key={label} className={`rounded-lg p-2.5 border ${dark ? "bg-white/5 border-white/10" : "bg-white border-slate-200 shadow-sm"}`}>
              <Icon size={13} className="text-[#3B82F6] mb-1.5" />
              <div className="text-white text-xs font-semibold">{value}</div>
              <div className={`text-[8px] leading-tight mt-0.5 ${dark ? "text-slate-500" : "text-slate-500"}`}>{label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-2 flex-1">
          <div className="bg-white/5 rounded-lg p-2.5 border border-white/10 flex flex-col">
            <div className={`text-[8px] mb-1 ${dark ? "text-slate-400" : "text-slate-500"}`}>Vendas em litros no tap por mês</div>
            <div className="flex-1 flex items-center justify-center text-[7px] text-slate-600">
              Sem dados no período
            </div>
          </div>
          <div className="bg-white/5 rounded-lg p-2.5 border border-white/10 flex items-center gap-3">
            <div>
              <div className={`text-[8px] mb-1.5 ${dark ? "text-slate-400" : "text-slate-500"}`}>Vendas PDV por categoria</div>
              <div
                className="w-12 h-12 rounded-full"
                style={{ background: "conic-gradient(#3B82F6 0% 69%, #10B981 69% 100%)" }}
              />
            </div>
            <div className="text-[7px] text-slate-500 space-y-1">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6]" />Bebidas não alcoólicas
              </div>
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Lanches
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/5 rounded-lg p-2.5 border border-white/10">
            <div className="flex items-center justify-between text-[8px] text-slate-400 mb-1">
              <span>Clientes por dia</span>
              <span className="text-[6px] text-slate-600">Baseado na quantidade de tags</span>
            </div>
            <div className="h-8 flex items-center justify-center text-[7px] text-slate-600">
              Sem dados no período
            </div>
          </div>
          <div className="bg-white/5 rounded-lg p-2.5 border border-white/10">
            <div className="text-white text-base font-bold leading-none">2</div>
            <div className={`text-[7px] mb-1.5 ${dark ? "text-slate-500" : "text-slate-600"}`}>Novas TAGs — Mês atual até o dia de hoje</div>
            <div className="space-y-1">
              <div className="flex items-center justify-between text-[7px] text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />Novas Mês anterior
                </span>
                <ChevronRight size={8} />
              </div>
              <div className="flex items-center justify-between text-[7px] text-slate-400">
                <span className="flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />Substituição
                </span>
                <ChevronRight size={8} />
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/5 rounded-lg p-2.5 border border-white/10">
            <div className="flex items-center justify-between text-[8px] text-slate-400 mb-1">
              <span>Aniversariantes do dia</span>
              <Printer size={9} className="text-slate-500" />
            </div>
            <div className={`text-[7px] border-t pt-1 ${dark ? "text-slate-600 border-white/5" : "text-slate-500 border-slate-200"}`}>Cliente</div>
          </div>
          <div className="bg-white/5 rounded-lg p-2.5 border border-white/10">
            <div className="text-[8px] text-slate-400 mb-1">Top 10 consumos no tap do mês</div>
            <div className={`flex text-[7px] border-t pt-1 gap-3 ${dark ? "text-slate-600 border-white/5" : "text-slate-500 border-slate-200"}`}>
              <span>Ranking</span>
              <span>Cliente</span>
              <span>Volume (Litros)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
