import { useEffect, useRef, useState } from "react";
import { X, Home, Compass, Layers, Sparkles, Mail } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";

const MENU_ITEMS = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Sobre", href: "#sobre", icon: Sparkles },
  { label: "Central de Aprendizagem", href: "#galeria", icon: Compass },
  { label: "Funcionalidades", href: "#funcionalidades", icon: Layers },
  { label: "Contato", href: "#contato", icon: Mail },
];

const FUNCTIONALITY_SUBITEMS = [
  { label: "Dashboard", href: "#dashboard" },
  { label: "Vendas", href: "#vendas" },
  { label: "Pagamento", href: "#pagamento" },
  { label: "Comandas", href: "#comandas" },
  { label: "Clientes", href: "#clientes" },
  { label: "Produto", href: "#produto" },
  { label: "Barril", href: "#barril" },
  { label: "Torneira", href: "#torneira" },
  { label: "Estoque", href: "#estoque" },
  { label: "Consultas Financeiro", href: "#consultas-financeiro" },
  { label: "Consultas Vendas", href: "#consultas-vendas" },
  { label: "Relatórios Financeiro", href: "#relatorios-financeiro" },
  { label: "Relatórios Torneira", href: "#relatorios-torneira" },
  { label: "Relatórios Fiscal", href: "#relatorios-fiscal" },
  { label: "Sistema Filiais", href: "#sistema-filiais" },
  { label: "Sistema", href: "#sistema" },
];

export default function Sidebar({ open, onClose }) {
  const { dark } = useTheme();
  const [funcMenuOpen, setFuncMenuOpen] = useState(false);
  const closeTimer = useRef(null);

  // Abre na hora; fecha com um pequeno atraso para dar tempo do mouse
  // "atravessar" até o submenu sem que ele suma no meio do caminho.
  const openFuncMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setFuncMenuOpen(true);
  };
  const scheduleCloseFuncMenu = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setFuncMenuOpen(false), 200);
  };

  useEffect(() => () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  const goTo = (href) => {
    onClose();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-30 transition-all duration-300 lg:hidden ${open ? "bg-black/50 visible" : "invisible bg-transparent"}`}
        onClick={onClose}
      />
      <aside
        className={`fixed left-0 top-0 z-40 h-full transition-all duration-300 lg:sticky lg:translate-x-0 lg:h-screen ${
          dark ? "bg-[#0F172A]/90 text-white" : "bg-slate-50/90 text-slate-900"
        } ${open ? "translate-x-0 w-24" : "-translate-x-full lg:translate-x-0 w-20"}`}
      >
        <div className="flex items-center justify-center px-4 py-5">
          <button className={`rounded-full p-2 ${dark ? "hover:bg-white/5" : "hover:bg-black/5"}`} onClick={onClose}>
            <X size={14} />
          </button>
        </div>

        <div className="flex flex-col items-center gap-3 px-3 py-3">
          {MENU_ITEMS.map(({ label, href, icon: Icon }) => {
            const isFunctionalities = href === "#funcionalidades";
            return (
              <div
                key={href}
                className="relative group"
                onMouseEnter={isFunctionalities ? openFuncMenu : undefined}
                onMouseLeave={isFunctionalities ? scheduleCloseFuncMenu : undefined}
              >
                <button
                  onClick={() => goTo(href)}
                  className={`flex h-11 w-11 items-center justify-center rounded-full border transition-all ${
                    dark ? "border-white/10 bg-white/5 hover:bg-[#2563EB]/20" : "border-black/8 bg-white hover:bg-[#2563EB]/10"
                  }`}
                >
                  <Icon size={16} className="text-[#3B82F6]" />
                </button>
                <div className={`pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border px-3 py-1.5 text-[11px] opacity-0 transition-all duration-200 group-hover:opacity-100 ${dark ? "border-white/10 bg-[#0F172A] text-slate-300" : "border-black/8 bg-white text-slate-700"}`}>
                  {label}
                </div>

                {isFunctionalities && (
                  <div
                    onMouseEnter={openFuncMenu}
                    onMouseLeave={scheduleCloseFuncMenu}
                    className={`absolute left-16 top-0 z-50 min-w-[220px] rounded-2xl border px-2 py-2 shadow-2xl transition-all duration-200 ${
                      funcMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    } ${dark ? "border-white/10 bg-[#0F172A]/95" : "border-black/10 bg-white/95"}`}
                  >
                    <div className={`px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.3em] ${dark ? "text-[#6DA5FF]" : "text-[#2563EB]"}`}>
                      Funcionalidades
                    </div>
                    <div className="flex flex-col gap-1">
                      {FUNCTIONALITY_SUBITEMS.map((item) => (
                        <button
                          key={item.href}
                          onClick={() => {
                            setFuncMenuOpen(false);
                            onClose();
                            document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth", block: "start" });
                          }}
                          className={`rounded-xl px-2.5 py-1.5 text-left text-sm transition-colors ${dark ? "text-slate-300 hover:bg-white/5" : "text-slate-700 hover:bg-slate-100"}`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </aside>
    </>
  );
}