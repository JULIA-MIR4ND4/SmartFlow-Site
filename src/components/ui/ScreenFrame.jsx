import ScreenImage from "./ScreenImage.jsx";
import BrowserChrome from "./BrowserChrome.jsx";

export default function ScreenFrame({ mockupKey, imageName }) {
  if (!imageName) return null;

  return (
    <div className="relative">
      <div className="absolute -inset-4 bg-brand/5 rounded-3xl blur-3xl pointer-events-none" />
      <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/80 dark:border-white/10 dark:shadow-black/60">
        <BrowserChrome address={mockupKey ? `app.smartflow.com.br/${mockupKey}` : "app.smartflow.com.br/"} />
        <div className="aspect-[1920/945]">
          <ScreenImage name={imageName} fit="contain" />
        </div>
      </div>
    </div>
  );
}
/*Cria uma moldura para as telas.*/