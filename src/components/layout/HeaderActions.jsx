import { Search, Sun, Moon } from "lucide-react";

export default function HeaderActions({ dark, onToggleTheme, onToggleSearch, onNavigate }) {
  return (
    <div className="hidden md:flex items-center gap-2">
      <button
        onClick={onToggleSearch}
        className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors text-slate-500 hover:text-slate-900 hover:bg-black/5 border border-black/10 dark:text-slate-400 dark:hover:text-white dark:hover:bg-white/5 dark:border-white/10"
      >
        <Search size={15} />
        <span className="text-xs hidden lg:inline">Buscar</span>
        <kbd className="hidden lg:inline text-[10px] px-1.5 py-0.5 rounded font-mono bg-black/5 text-slate-400 dark:bg-white/10 dark:text-slate-500">
          ⌘K
        </kbd>
      </button>
      <button
        onClick={onToggleTheme}
        className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors text-slate-500 hover:text-blue-600 hover:bg-black/5 border border-black/10 dark:text-slate-400 dark:hover:text-yellow-400 dark:hover:bg-white/5 dark:border-white/10"
      >
        {dark ? <Sun size={15} /> : <Moon size={15} />}
      </button>
      <button
        onClick={() => onNavigate("#funcionalidades")}
        className="px-5 py-2 bg-brand hover:bg-brand-hover text-white text-sm rounded-lg font-medium transition-colors shadow-lg shadow-blue-600/20"
      >
        Conhecer o SmartFlow
      </button>
    </div>
  );
}
