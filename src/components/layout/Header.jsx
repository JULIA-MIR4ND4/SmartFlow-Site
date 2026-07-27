import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Activity, Search, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { NAV_LINKS } from "../../data/navLinks.js";

export default function Header({ onSearchOpen }) {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (href) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? dark
            ? "bg-[#0F172A]/90 backdrop-blur-xl border-b border-white/5 shadow-xl shadow-black/30"
            : "bg-slate-50/92 backdrop-blur-xl border-b border-black/6 shadow-xl shadow-black/5"
          : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => go("#home")} className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#2563EB] flex items-center justify-center shadow-lg shadow-blue-600/30">
              <Activity size={16} className="text-white" />
            </div>
            <span
              className={`font-bold text-xl ${dark ? "text-white" : "text-slate-900"}`}
              style={{ fontFamily: "'Bricolage Grotesque', sans-serif" }}
            >
              Smart<span className="text-[#3B82F6]">Flow</span>
            </span>
          </button>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map(({ label, href }) => (
              <button
                key={href}
                onClick={() => go(href)}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  dark
                    ? "text-slate-400 hover:text-white hover:bg-white/5"
                    : "text-slate-500 hover:text-slate-900 hover:bg-black/5"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={onSearchOpen}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                dark
                  ? "text-slate-400 hover:text-white hover:bg-white/5 border border-white/10"
                  : "text-slate-500 hover:text-slate-900 hover:bg-black/5 border border-black/10"
              }`}
            >
              <Search size={15} />
              <span className="text-xs hidden lg:inline">Buscar</span>
              <kbd
                className={`hidden lg:inline text-[10px] px-1.5 py-0.5 rounded font-mono ${
                  dark ? "bg-white/10 text-slate-500" : "bg-black/5 text-slate-400"
                }`}
              >
                ⌘K
              </kbd>
            </button>
            <button
              onClick={toggle}
              className={`w-9 h-9 rounded-lg flex items-center justify-center transition-colors ${
                dark
                  ? "text-slate-400 hover:text-yellow-400 hover:bg-white/5 border border-white/10"
                  : "text-slate-500 hover:text-blue-600 hover:bg-black/5 border border-black/10"
              }`}
            >
              {dark ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            <button
              onClick={() => go("#funcionalidades")}
              className="px-5 py-2 bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm rounded-lg font-medium transition-colors shadow-lg shadow-blue-600/20"
            >
              Conhecer o SmartFlow
            </button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button onClick={onSearchOpen} className={`p-2 ${dark ? "text-slate-400" : "text-slate-500"}`}>
              <Search size={18} />
            </button>
            <button onClick={toggle} className={`p-2 ${dark ? "text-slate-400" : "text-slate-500"}`}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className={`p-1 ${dark ? "text-slate-400" : "text-slate-500"}`}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={`md:hidden border-t ${
              dark ? "bg-[#0F172A]/95 backdrop-blur-xl border-white/5" : "bg-white/95 backdrop-blur-xl border-black/6"
            }`}
          >
            <div className="px-6 py-4 space-y-1">
              {NAV_LINKS.map(({ label, href }) => (
                <button
                  key={href}
                  onClick={() => go(href)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg transition-colors ${
                    dark
                      ? "text-slate-300 hover:text-white hover:bg-white/5"
                      : "text-slate-600 hover:text-slate-900 hover:bg-black/5"
                  }`}
                >
                  {label}
                </button>
              ))}
              <button
                onClick={() => go("#funcionalidades")}
                className="w-full mt-2 px-5 py-2.5 bg-[#2563EB] text-white rounded-lg font-medium"
              >
                Conhecer o SmartFlow
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
