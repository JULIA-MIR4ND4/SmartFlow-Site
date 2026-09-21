import ScreenImage from "./ScreenImage.jsx";

export default function ScreenFrame({ mockupKey, imageName }) {
  if (!imageName) return null;

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-brand/5 rounded-3xl blur-3xl pointer-events-none" />
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/80 dark:border-white/10 dark:shadow-black/60">
        <div className="flex items-center gap-1.5 px-4 py-2.5 border-b bg-white border-slate-200 dark:bg-[#060D1C] dark:border-white/5">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 mx-3 rounded text-[10px] px-2 py-0.5 text-center bg-slate-100 text-slate-500 dark:bg-[#0F172A]">
            app.smartflow.com.br/{mockupKey}
          </div>
        </div>
        <div className="aspect-[1920/945]">
          <ScreenImage name={imageName} fit="contain" />
        </div>
      </div>
    </div>
  );
}
/*Cria uma moldura para as telas.*/