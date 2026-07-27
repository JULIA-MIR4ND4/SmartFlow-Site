import MockupSidebar from "./MockupSidebar.jsx";

// Usado pelos módulos cuja tela real ainda não foi construída em código.
// Mantém a mesma sidebar real, trocando apenas o item ativo e o conteúdo
// central por um aviso simples — assim a Central de Aprendizagem funciona
// para os 15 módulos desde já, e cada tela vai sendo substituída aos poucos.
export default function MockupPlaceholder({ active, label, icon: Icon, path }) {
  return (
    <div className="flex w-full h-full bg-[#0F172A] text-slate-300">
      <MockupSidebar active={active} />
      <div className="flex-1 p-4 flex flex-col gap-3">
        <div className="text-[9px] text-slate-500">
          SmartFlow App / {path || label}
        </div>
        <div className="flex-1 flex flex-col items-center justify-center gap-2 text-center">
          {Icon && (
            <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
              <Icon size={16} className="text-[#3B82F6]" />
            </div>
          )}
          <div className="text-white text-xs font-semibold">{label}</div>
          <div className="text-[8px] text-slate-500 max-w-[200px]">
            Tela em construção — em breve com o layout real deste módulo.
          </div>
        </div>
      </div>
    </div>
  );
}
