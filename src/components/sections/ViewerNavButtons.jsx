import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ViewerNavButtons({ screenIdx, total, onPrevious, onNext }) {
  return (
    <div className="flex gap-3 pt-2 border-t border-white/5 flex-shrink-0">
      <button
        onClick={onPrevious}
        disabled={screenIdx === 0}
        className={`flex-1 flex items-center justify-center gap-1.5
          py-2.5 rounded-xl text-sm font-medium border transition-all
          ${screenIdx === 0
            ? "border-black/5 text-slate-300 cursor-not-allowed dark:border-white/5 dark:text-slate-700"
            : "border-black/10 text-slate-600 hover:bg-slate-50 dark:border-white/10 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-white"}`}
      >
        <ChevronLeft size={14} />
        Anterior
      </button>
      <button
        onClick={onNext}
        disabled={screenIdx === total - 1}
        className={`flex-1 flex items-center justify-center gap-1.5
          py-2.5 rounded-xl text-sm font-medium transition-all
          ${screenIdx === total - 1
            ? "bg-slate-100 text-slate-300 cursor-not-allowed dark:bg-brand/20 dark:text-brand/40"
            : "bg-brand hover:bg-brand-hover text-white shadow-lg shadow-blue-600/20"}`}
      >
        Próxima
        <ChevronRight size={14} />
      </button>
    </div>
  );
}
