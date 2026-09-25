import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import { NAV_LINKS } from "../../data/navLinks.js";
import { scrollToSection } from "../../scrollToSection.js";
import FunctionalitiesFlyout from "./FunctionalitiesFlyout.jsx";
import SidebarItem from "./SidebarItem.jsx";

export default function Sidebar({ open, onClose }) {
  const [funcMenuOpen, setFuncMenuOpen] = useState(false);
  const closeTimer = useRef(null);

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

  const overlayClasses = `fixed inset-0 z-30 transition-all duration-300 lg:hidden ${
    open ? "bg-black/50 visible" : "invisible bg-transparent"
  }`;
  const sidebarClasses = `fixed left-0 top-0 z-40 h-full bg-slate-50/90 text-slate-900 transition-all duration-300 lg:sticky lg:translate-x-0 lg:h-screen dark:bg-[#0F172A]/90 dark:text-white ${
    open ? "translate-x-0 w-24" : "-translate-x-full lg:translate-x-0 w-20"
  }`;

  return (
    <>
      <div className={overlayClasses} onClick={onClose} />
      <aside className={sidebarClasses}>
        <div className="flex items-center justify-center px-4 py-5">
          <button type="button" aria-label="Fechar menu lateral" className="rounded-full p-2 hover:bg-black/5 dark:hover:bg-white/5" onClick={onClose}>
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
                <SidebarItem label={label} href={href} Icon={Icon} onClick={() => goTo(href)} />
                {isFunctionalities && (
                  <FunctionalitiesFlyout
                    open={funcMenuOpen}
                    onMouseEnter={openFuncMenu}
                    onMouseLeave={scheduleCloseFuncMenu}
                    onSelect={(featureId) => {
                      setFuncMenuOpen(false);
                      goTo(`#${featureId}`);
                    }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </aside>
    </>
  );
}
