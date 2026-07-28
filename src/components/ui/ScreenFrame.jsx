import { useTheme } from "../../context/ThemeContext.jsx";
import { MOCKUP_MAP } from "../sections/mockups/index.jsx";
import ScreenImage from "./ScreenImage.jsx";

export default function ScreenFrame({ mockupKey, imageName, height = 320 }) {
  const { dark } = useTheme();
  const Comp = MOCKUP_MAP[mockupKey];

  // Se temos uma imagem real (imageName), ela tem prioridade sobre o mockup de código.
  if (!imageName && !Comp) return null;

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-[#2563EB]/5 rounded-3xl blur-3xl pointer-events-none" />
      <div className={`relative rounded-2xl overflow-hidden border shadow-2xl ${dark ? "border-white/10 shadow-black/60" : "border-slate-200 shadow-slate-200/80"}`}>
        <div className={`flex items-center gap-1.5 px-4 py-2.5 border-b ${dark ? "bg-[#060D1C] border-white/5" : "bg-white border-slate-200"}`}>
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className={`flex-1 mx-3 rounded text-[10px] px-2 py-0.5 text-center ${dark ? "bg-[#0F172A] text-slate-500" : "bg-slate-100 text-slate-500"}`}>
            app.smartflow.com.br/{mockupKey}
          </div>
        </div>
        <div
          className={imageName ? "aspect-[1920/945]" : ""}
          style={imageName ? { fontFamily: "'Inter', sans-serif" } : { height, fontFamily: "'Inter', sans-serif" }}
        >
          {imageName ? <ScreenImage name={imageName} fit="contain" /> : <Comp />}
        </div>
      </div>
    </div>
  );
}