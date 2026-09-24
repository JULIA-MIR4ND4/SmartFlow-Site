import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { NAV_LINKS } from "../../data/navLinks.js";
import { FEATURES } from "../../data/features.js";
import { scrollToSection } from "../../scrollToSection.js";

export default function Sidebar({ open, onClose }) {
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
    scrollToSection(href);
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-30 transition-all duration-300 lg:hidden ${open ? "bg-black/50 visible" : "invisible bg-transparent"}`}
        onClick={onClose}
      />
      <aside
        className={`fixed left-0 top-0 z-40 h-full bg-slate-50/90 text-slate-900 transition-all duration-300 lg:sticky lg:translate-x-0 lg:h-screen dark:bg-[#0F172A]/90 dark:text-white ${open ? "translate-x-0 w-24" : "-translate-x-full lg:translate-x-0 w-20"}`}
      >
        <div className="flex items-center justify-center px-4 py-5">
          <button className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/5" onClick={onClose}>
            <X size={14} />
          </button>
        </div>

        <div className="flex flex-col items-center gap-3 px-3 py-3">
          {NAV_LINKS.map(({ label, href, icon: Icon }) => {
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
                    "border-black/8 bg-white hover:bg-brand/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-brand/20"
                  }`}
                >
                  <Icon size={16} className="text-[#3B82F6]" />
                </button>
                {!isFunctionalities && (
                  <div className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-black/8 bg-white px-3 py-1.5 text-[11px] text-slate-700 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-white/10 dark:bg-[#0F172A] dark:text-slate-300">
                    {label}
                  </div>
                )}

                {isFunctionalities && (
                  <div
                    onMouseEnter={openFuncMenu}
                    onMouseLeave={scheduleCloseFuncMenu}
                    className={`absolute left-16 top-0 z-50 min-w-[220px] rounded-2xl border border-black/10 bg-white/95 px-2 py-2 shadow-2xl transition-all duration-200 dark:border-white/10 dark:bg-[#0F172A]/95 ${
                      funcMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="px-2 pb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-brand dark:text-[#6DA5FF]">
                      Funcionalidades
                    </div>
                    <div className="flex flex-col gap-1">
                      {FEATURES.map((feature) => (
                        <button
                          key={feature.id}
                          onClick={() => {
                            setFuncMenuOpen(false);
                            onClose();
                            scrollToSection(`#${feature.id}`);
                          }}
                          className="rounded-xl px-2.5 py-1.5 text-left text-sm text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/5"
                        >
                          {feature.title}
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