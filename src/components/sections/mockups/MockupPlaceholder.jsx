import { useTheme } from "../../../context/ThemeContext.jsx";
import MockupSidebar from "./MockupSidebar.jsx";

// Usado pelos módulos cuja tela real ainda não foi construída em código.
// Mantém a mesma sidebar real, trocando apenas o item ativo e o conteúdo
// central por um aviso simples — assim a Central de Aprendizagem funciona
// para os 15 módulos desde já, e cada tela vai sendo substituída aos poucos.
export default function MockupPlaceholder({ active, label, icon: Icon, path }) {
  const { dark } = useTheme();

  return (
    <div className={`flex w-full h-full ${dark ? "bg-[#0F172A] text-slate-300" : "bg-slate-50 text-slate-700"}`}>
      <MockupSidebar active={active} />
      <div className="flex-1 p-4 flex flex-col gap-3">
        <div className={`text-[9px] ${dark ? "text-slate-500" : "text-slate-400"}`}>
          SmartFlow App / {path || label}
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-2 text-center">
          {Icon && (
            <div className={`w-9 h-9 rounded-lg border flex items-center justify-center ${dark ? "bg-white/5 border-white/10" : "bg-white border-slate-200"}`}>
              <Icon size={16} className="text-[#3B82F6]" />
            </div>
          )}
          <div className={`text-xs font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{label}</div>
          <div className={`text-[8px] max-w-[200px] ${dark ? "text-slate-500" : "text-slate-500"}`}>
            Tela em construção — em breve com o layout real deste módulo.
          </div>
        </div>
      </div>
    </div>
  );
}
