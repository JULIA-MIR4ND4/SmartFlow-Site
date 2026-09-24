import { AnimatePresence, motion } from "motion/react";
import { NAV_LINKS } from "../../data/navLinks.js";
import { Menu, Moon, Search, Sun, X } from "lucide-react";

export function MobileActions({ dark, menuOpen, onToggleTheme, onToggleSearch, onToggleMenu }) {
  return (
    <div className="md:hidden flex items-center gap-2">
      <button onClick={onToggleSearch} className="p-2 text-slate-500 dark:text-slate-400">
        <Search size={18} />
      </button>
      <button onClick={onToggleTheme} className="p-2 text-slate-500 dark:text-slate-400">
        {dark ? <Sun size={18} /> : <Moon size={18} />}
      </button>
      <button className="p-1 text-slate-500 dark:text-slate-400" onClick={onToggleMenu}>
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>
    </div>
  );
}

export default function MobileMenu({ open, onNavigate }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t bg-white/95 backdrop-blur-xl border-black/6 dark:bg-[#0F172A]/95 dark:border-white/5"
        >
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => onNavigate(href)}
                className="block w-full text-left px-4 py-2.5 rounded-lg transition-colors text-slate-600 hover:text-slate-900 hover:bg-black/5 dark:text-slate-300 dark:hover:text-white dark:hover:bg-white/5"
              >
                {label}
              </button>
            ))}
            <button
              onClick={() => onNavigate("#funcionalidades")}
              className="w-full mt-2 px-5 py-2.5 bg-brand text-white rounded-lg font-medium"
            >
              Conhecer o SmartFlow
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
