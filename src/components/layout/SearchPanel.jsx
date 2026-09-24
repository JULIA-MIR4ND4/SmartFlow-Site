export default function SearchPanel({ query, onQueryChange, results, onClose, onResult }) {
  return (
    <div className="border-t border-black/6 bg-white/95 dark:border-white/5 dark:bg-[#0F172A]/95">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div className="rounded-2xl border border-black/8 bg-slate-50 p-3 dark:border-white/10 dark:bg-[#0B1220]">
          <div className="relative">
            <input
              autoFocus
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Pesquisar universos, funcionalidades e conteúdos"
              className="w-full rounded-xl border border-black/8 bg-white text-slate-900 placeholder:text-slate-400 pl-4 pr-16 py-3 text-sm outline-none dark:border-white/10 dark:bg-[#0F172A] dark:text-white dark:placeholder:text-slate-500"
            />
            <button
              type="button"
              onClick={onClose}
              title="Fechar busca (Esc)"
              className="absolute right-2 top-1/2 -translate-y-1/2 text-[10px] px-2 py-1 rounded-lg font-mono transition-colors bg-black/5 text-slate-500 hover:bg-black/10 hover:text-slate-900 dark:bg-white/10 dark:text-slate-400 dark:hover:bg-white/20 dark:hover:text-white"
            >
              ESC
            </button>
          </div>
          {results.length > 0 && (
            <div className="mt-3 space-y-2">
              {results.map((item) => (
                <button
                  key={`${item.title}-${item.type}`}
                  onClick={() => onResult(item.href)}
                  className="w-full rounded-xl border border-black/8 px-3 py-2 text-left transition-colors hover:bg-black/5 dark:border-white/10 dark:hover:bg-white/5"
                >
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{item.title}</div>
                  <div className="text-xs mt-1 text-slate-600 dark:text-slate-400">{item.type} · {item.description}</div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
