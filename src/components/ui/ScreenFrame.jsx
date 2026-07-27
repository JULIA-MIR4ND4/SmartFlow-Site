import { MOCKUP_MAP } from "../sections/mockups/index.jsx";

export default function ScreenFrame({ mockupKey, height = 320 }) {
  const Comp = MOCKUP_MAP[mockupKey];
  if (!Comp) return null;

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-[#2563EB]/5 rounded-3xl blur-3xl pointer-events-none" />
      <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60">
        <div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#060D1C] border-b border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-3 bg-[#0F172A] rounded text-[10px] text-slate-500 px-2 py-0.5 text-center">
            app.smartflow.com.br/{mockupKey}
          </div>
        </div>
        <div style={{ height, fontFamily: "'Inter', sans-serif" }}>
          <Comp />
        </div>
      </div>
    </div>
  );
}
