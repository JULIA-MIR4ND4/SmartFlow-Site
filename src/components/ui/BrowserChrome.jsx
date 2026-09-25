export default function BrowserChrome({ address, variant = "default" }) {
  const isLarge = variant === "large";
  const containerClasses = isLarge
    ? "flex items-center gap-2 px-4 py-3 border-b bg-white border-slate-200 dark:bg-[#060D1C] dark:border-white/5"
    : "flex items-center gap-2 px-4 py-2.5 border-b bg-white border-slate-200 dark:bg-[#060D1C] dark:border-white/5";
  const dotClasses = isLarge ? "w-3 h-3" : "w-2.5 h-2.5";
  const addressClasses = isLarge
    ? "flex-1 mx-4 rounded text-xs px-3 py-1 text-center bg-slate-100 text-slate-500 dark:bg-[#0F172A]"
    : "flex-1 mx-3 rounded text-[10px] px-2 py-0.5 text-center bg-slate-100 text-slate-500 dark:bg-[#0F172A]";

  return (
    <div className={containerClasses}>
      <div className="flex gap-1.5">
        <div className={`${dotClasses} rounded-full bg-red-500/60`} />
        <div className={`${dotClasses} rounded-full bg-yellow-500/60`} />
        <div className={`${dotClasses} rounded-full bg-green-500/60`} />
      </div>
      <div className={addressClasses}>
        {address}
      </div>
    </div>
  );
}
