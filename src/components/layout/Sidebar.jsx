import { useEffect, useState } from "react";
import { X, Home, Compass, Layers, Sparkles, Mail } from "lucide-react";
import { useTheme } from "../../context/ThemeContext.jsx";

const MENU_ITEMS = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Sobre", href: "#sobre", icon: Sparkles },
  { label: "Central de Aprendizagem", href: "#galeria", icon: Compass },
  { label: "Funcionalidades", href: "#funcionalidades", icon: Layers },
  { label: "Contato", href: "#contato", icon: Mail },
];

export default function Sidebar({ open, onClose }) {
  const { dark } = useTheme();
  const [hovered, setHovered] = useState(false);

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
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
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
          {MENU_ITEMS.map(({ label, href, icon: Icon }) => (
            <div key={href} className="relative group">
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
            </div>
          ))}
        </div>

      </aside>
    </>
  );
}
