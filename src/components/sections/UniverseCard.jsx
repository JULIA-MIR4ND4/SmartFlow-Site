import { Eye } from "lucide-react";
import FadeIn from "../ui/FadeIn.jsx";
import BrowserChrome from "../ui/BrowserChrome.jsx";
import ScreenImage from "../ui/ScreenImage.jsx";
import { getFirstScreenImage, getScreenImages } from "../../data/screenImages.js";

export default function UniverseCard({ universe, index, onSelect }) {
  const firstImage = getFirstScreenImage(universe.id);
  const screenCount = getScreenImages(universe.id).length;
  const Icon = universe.icon;

  return (
    <FadeIn delay={index * 0.04}>
      <button
        type="button"
        id={`universo-${universe.id}`}
        className={[
          "group relative block w-full rounded-xl overflow-hidden border border-black/8 bg-white",
          "text-left cursor-pointer transition-all duration-300 hover:border-brand/40",
          "hover:shadow-xl hover:shadow-brand/10 scroll-mt-24 dark:border-white/8",
          "dark:bg-transparent dark:hover:shadow-brand/8",
        ].join(" ")}
        onClick={onSelect}
      >
        <div
          className={[
            "absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1",
            "rounded-full text-white text-[11px] font-semibold shadow-lg",
          ].join(" ")}
          style={{ background: universe.color }}
        >
          <Icon size={10} className="text-white" />
          {universe.name}
        </div>
        <div
          className={[
            "absolute top-3 right-3 z-10 px-2 py-1 rounded-full text-[10px] font-medium",
            "bg-white/90 text-slate-500 border border-black/8",
            "dark:bg-[#1E293B]/90 dark:text-slate-400 dark:border-white/10",
          ].join(" ")}
        >
          {screenCount} {screenCount === 1 ? "tela" : "telas"}
        </div>
        <div className="bg-slate-100 dark:bg-[#060D1C]">
          <BrowserChrome address={`app.smartflow.com.br/${universe.id}`} />
          <div style={{ height: 210, pointerEvents: "none" }}>
            {firstImage && (
              <ScreenImage
                name={firstImage}
                fit="contain"
              />
            )}
          </div>
        </div>
        <div
          className={[
            "absolute inset-0 bg-brand/0 group-hover:bg-brand/8 transition-colors",
            "flex items-center justify-center",
          ].join(" ")}
        >
          <div
            className={[
              "opacity-0 group-hover:opacity-100 transition-all scale-95 group-hover:scale-100",
              "bg-brand text-white text-sm font-medium px-5 py-2.5 rounded-xl",
              "flex items-center gap-2 shadow-xl",
            ].join(" ")}
          >
            <Eye size={15} />
            Explorar
          </div>
        </div>
        <div
          className="px-4 py-3 border-t border-black/5 bg-slate-50 dark:border-white/5 dark:bg-[#1E293B]/60"
        >
          <div className="font-semibold text-sm text-slate-900 dark:text-white">
            {universe.name}
          </div>
          <div className="text-xs mt-0.5 text-slate-500">
            {universe.description}
          </div>
        </div>
      </button>
    </FadeIn>
  );
}
