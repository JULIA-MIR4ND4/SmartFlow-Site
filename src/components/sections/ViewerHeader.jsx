import { ChevronLeft } from "lucide-react";

export default function ViewerHeader({ universe, screenIdx, total, closeButtonRef, onClose }) {
  const Icon = universe.icon;

  return (
    <div className="flex items-center justify-between px-6 py-4 border-b border-black/6 bg-white dark:border-white/5 dark:bg-[#070E1E]">
      <button
        ref={closeButtonRef}
        type="button"
        aria-label="Voltar à galeria"
        onClick={onClose}
        className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-slate-200 transition-colors"
      >
        <ChevronLeft size={16} />
        Voltar à galeria
      </button>
      <div className="flex items-center gap-3">
        <div className="w-5 h-5 rounded flex items-center justify-center" style={{ background: universe.color }}>
          <Icon size={12} className="text-white" />
        </div>
        <span id="universe-viewer-title" className="font-display font-semibold text-slate-900 dark:text-white">
          {universe.name}
        </span>
      </div>
      <div className="text-sm text-slate-400 dark:text-slate-500">
        Tela {screenIdx + 1} de {total}
      </div>
    </div>
  );
}
