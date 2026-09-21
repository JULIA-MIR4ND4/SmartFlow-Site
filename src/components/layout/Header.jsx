import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Search, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { NAV_LINKS } from "../../data/navLinks.js";
import { UNIVERSES } from "../../data/universes.js";

// Para cada universo, o anchor exato da seção "Módulos do sistema" que
// representa aquela funcionalidade (mesmos ids usados em ModulesSection e
// no submenu da Sidebar). Quando não existe um módulo equivalente, o clique
// cai no card correspondente dentro da Central de Aprendizagem.
const UNIVERSE_TO_MODULE_HREF = {
  dashboard: "#dashboard",
  vendas: "#vendas",
  pagamento: "#pagamento",
  comandas: "#comandas",
  clientes: "#clientes",
  produto: "#produto",
  barril: "#barril",
  torneira: "#torneira",
  estoque: "#estoque",
  relatoriosfinanceiro: "#relatorios-financeiro",
  torneiraservico: "#relatorios-torneira",
  fiscal: "#relatorios-fiscal",
  sistema: "#sistema",
};

export default function Header() {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // Fecha a barra de pesquisa ao pressionar ESC, para liberar a visualização da tela.
  useEffect(() => {
    if (!searchOpen) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [searchOpen]);

  const go = (href) => {
    setMenuOpen(false);
    setSearchOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  const searchableContent = UNIVERSES.flatMap((universe) => {
    // Destino exato: módulo correspondente em "Módulos do sistema" quando existir,
    // senão o card específico daquele universo na Central de Aprendizagem.
    const targetHref = UNIVERSE_TO_MODULE_HREF[universe.id] ?? `#universo-${universe.id}`;

    return [
      {
        title: universe.name,
        description: universe.description,
        type: "Universo",
        href: `#universo-${universe.id}`,
      },
      ...universe.screens.map((screen) => ({
        title: screen.title,
        description: screen.desc,
        type: "Funcionalidade",
        href: targetHref,
      })),
    ];
  });

  const results = query.trim()
    ? searchableContent.filter((item) => {
        const text = `${item.title} ${item.description} ${item.type}`.toLowerCase();
        return text.includes(query.trim().toLowerCase());
      })
    : [];

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
          <button onClick={() => go("#home")} className="flex items-center">
            <img
              src={dark ? "/imagem/logo1-escuro.png" : "/imagem/logo1-claro.png"}
              alt="SmartFlow"
              className="h-11 w-auto"
            />
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
              onClick={() => {
                setSearchOpen((value) => !value);
              }}
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
            <button
              onClick={() => {
                setSearchOpen((value) => !value);
              }}
              className={`p-2 ${dark ? "text-slate-400" : "text-slate-500"}`}
            >
              <Search size={18} />
            </button>
            <button onClick={toggle} className={`p-2 ${dark ? "text-slate-400" : "text-slate-500"}`}>
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              className={`p-1 ${dark ? "text-slate-400" : "text-slate-500"}`}
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {searchOpen && (
        <div className={`border-t ${dark ? "border-white/5 bg-[#0F172A]/95" : "border-black/6 bg-white/95"}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
            <div className={`rounded-2xl border p-3 ${dark ? "border-white/10 bg-[#0B1220]" : "border-black/8 bg-slate-50"}`}>
              <div className="relative">
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Pesquisar universos, funcionalidades e conteúdos"
                  className={`w-full rounded-xl border pl-4 pr-16 py-3 text-sm outline-none ${dark ? "border-white/10 bg-[#0F172A] text-white placeholder:text-slate-500" : "border-black/8 bg-white text-slate-900 placeholder:text-slate-400"}`}
                />
                <button
                  type="button"
                  onClick={() => {
                    setSearchOpen(false);
                    setQuery("");
                  }}
                  title="Fechar busca (Esc)"
                  className={`absolute right-2 top-1/2 -translate-y-1/2 text-[10px] px-2 py-1 rounded-lg font-mono transition-colors ${
                    dark
                      ? "bg-white/10 text-slate-400 hover:bg-white/20 hover:text-white"
                      : "bg-black/5 text-slate-500 hover:bg-black/10 hover:text-slate-900"
                  }`}
                >
                  ESC
                </button>
              </div>
              {results.length > 0 && (
                <div className="mt-3 space-y-2">
                  {results.map((item) => (
                    <button
                      key={`${item.title}-${item.type}`}
                      onClick={() => {
                        setQuery("");
                        setSearchOpen(false);
                        document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth", block: "start" });
                      }}
                      className={`w-full rounded-xl border px-3 py-2 text-left transition-colors ${dark ? "border-white/10 hover:bg-white/5" : "border-black/8 hover:bg-black/5"}`}
                    >
                      <div className={`text-sm font-semibold ${dark ? "text-white" : "text-slate-900"}`}>{item.title}</div>
                      <div className={`text-xs mt-1 ${dark ? "text-slate-400" : "text-slate-600"}`}>{item.type} · {item.description}</div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

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