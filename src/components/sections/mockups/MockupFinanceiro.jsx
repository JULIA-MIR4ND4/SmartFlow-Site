import { Wallet, Banknote, CreditCard, QrCode } from "lucide-react";
import { useTheme } from "../../../context/ThemeContext.jsx";
import MockupSidebar from "./MockupSidebar.jsx";

const PAYMENT_METHODS = [
  { label: "Dinheiro", value: "R$ 0,00", pct: 0, icon: Banknote },
  { label: "Débito", value: "R$ 0,00", pct: 0, icon: CreditCard },
  { label: "Crédito", value: "R$ 7,00", pct: 100, icon: CreditCard },
  { label: "Pix", value: "R$ 0,00", pct: 0, icon: QrCode },
];

// Reflete a tela real de Relatórios / Financeiro / Faturamento do SmartFlow.
export default function MockupFinanceiro() {
  const { dark } = useTheme();

  return (
    <div className={`flex w-full h-full ${dark ? "bg-[#0F172A] text-slate-300" : "bg-slate-50 text-slate-700"}`}>
      <MockupSidebar active="Financeiro" />

      <div className="flex-1 p-4 overflow-hidden flex flex-col gap-3">
        <div className={`text-[9px] ${dark ? "text-slate-500" : "text-slate-400"}`}>
          SmartFlow App / Relatórios / Financeiro / Faturamento
        </div>

        <div className={`rounded-lg p-2.5 border ${dark ? "bg-white/5 border-white/10" : "bg-white border-slate-200 shadow-sm"}`}>
          <div className="flex items-center gap-1.5 text-white text-xs font-semibold mb-0.5">
            <Wallet size={12} className="text-[#3B82F6]" />
            Faturamento no período: R$ 7,00
          </div>
          <div className={`text-[7px] ${dark ? "text-slate-500" : "text-slate-500"}`}>
            Não soma entradas das categorias marcadas como "não contábil"
          </div>
        </div>

        <div className={`rounded-lg p-2.5 border flex-1 ${dark ? "bg-white/5 border-white/10" : "bg-white border-slate-200 shadow-sm"}`}>
          <div className="text-[8px] text-slate-400 mb-2">Por método de pagamento</div>
          <div className="space-y-2.5">
            {PAYMENT_METHODS.map(({ label, value, pct, icon: Icon }) => (
              <div key={label}>
                <div className="flex items-center justify-between text-[8px] mb-1">
                  <span className={`flex items-center gap-1 ${dark ? "text-slate-400" : "text-slate-500"}`}>
                    <Icon size={9} className="text-[#3B82F6]" />
                    {label}
                  </span>
                  <span className={dark ? "text-slate-300" : "text-slate-700"}>{value}</span>
                </div>
                <div className="h-1 rounded-full bg-white/5">
                  <div
                    className="h-1 rounded-full bg-[#F97316]"
                    style={{ width: `${Math.max(pct, 3)}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
