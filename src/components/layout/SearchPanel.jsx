export default function SearchPanel({
  panelRef,
  query,
  onQueryChange,
  results,
  onClose,
  onResult,
}) {
  return (
    <div className="max-h-[60dvh] overflow-y-auto overscroll-contain border-t border-black/6 bg-white/95 dark:border-white/5 dark:bg-[#0F172A]/95 sm:max-h-[calc(100dvh-4rem)]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
        <div ref={panelRef} className="rounded-2xl border border-black/8 bg-slate-50 p-3 dark:border-white/10 dark:bg-[#0B1220]">
          <div className="relative">
            <input
              autoFocus
              value={query}
              onChange={(event) => onQueryChange(event.target.value)}
              placeholder="Pesquisar universos, funcionalidades e conteúdos"
              className={[
                "w-full rounded-xl border border-black/8 bg-white text-slate-900",
                "placeholder:text-slate-400 pl-4 pr-16 py-3 text-base outline-none sm:text-sm",
                "dark:border-white/10 dark:bg-[#0F172A] dark:text-white dark:placeholder:text-slate-500",
              ].join(" ")}
            />
            <button
              type="button"
              onClick={onClose}
              title="Fechar busca (Esc)"
              className={[
                "absolute right-2 top-1/2 -translate-y-1/2 text-[10px] px-2 py-1",
                "rounded-lg font-mono transition-colors bg-black/5 text-slate-500",
                "hover:bg-black/10 hover:text-slate-900 dark:bg-white/10 dark:text-slate-400",
                "dark:hover:bg-white/20 dark:hover:text-white",
              ].join(" ")}
            >
              ESC
            </button>
          </div>
          {results.length > 0 && (
            <div className="mt-3 space-y-2">
              {results.map((item) => (
                <div
                  key={item.id || `${item.title}-${item.type}`}
                  className={[
                    "w-full rounded-xl border border-black/8 px-3 py-2",
                    "dark:border-white/10",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    onClick={() => onResult(item.href)}
                    className="w-full text-left transition-colors hover:text-brand"
                  >
                    <div className="text-sm font-semibold text-slate-900 dark:text-white">
                      {item.title}
                    </div>
                    <div className="text-xs mt-1 text-slate-600 dark:text-slate-400">
                      {item.type} · {item.matches.length} correspondências
                    </div>
                    {item.matches[0] && (
                      <div className="text-xs mt-1 text-slate-600 dark:text-slate-400">
                        {item.matches[0].title}: {item.matches[0].matchDescription || item.matches[0].description}
                      </div>
                    )}
                  </button>
                  {item.matches.length > 1 && (
                    <details className="mt-2 border-t border-black/6 pt-2 dark:border-white/10">
                      <summary className="cursor-pointer text-xs font-medium text-brand">
                        Ver todas as correspondências
                      </summary>
                      <div className="mt-2 space-y-2">
                        {item.matches.map((match) => (
                          <button
                            key={match.id}
                            type="button"
                            onClick={() => onResult(match.href)}
                            className="block w-full rounded-lg px-2 py-1 text-left transition-colors hover:bg-black/5 dark:hover:bg-white/5"
                          >
                            <span className="block text-xs font-semibold text-slate-800 dark:text-slate-200">
                              {match.title}
                            </span>
                            <span className="mt-0.5 block text-xs text-slate-600 dark:text-slate-400">
                              {match.type} · {match.matchDescription || match.description}
                            </span>
                          </button>
                        ))}
                      </div>
                    </details>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
