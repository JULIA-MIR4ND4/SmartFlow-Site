export default function SidebarItem({ label, href, Icon, onClick }) {
  return (
    <>
      <button
        onClick={onClick}
        className="flex h-11 w-11 items-center justify-center rounded-full border transition-all border-black/8 bg-white hover:bg-brand/10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-brand/20"
      >
        <Icon size={16} className="text-[#3B82F6]" />
      </button>
      <div className="pointer-events-none absolute left-14 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-black/8 bg-white px-3 py-1.5 text-[11px] text-slate-700 opacity-0 transition-all duration-200 group-hover:opacity-100 dark:border-white/10 dark:bg-[#0F172A] dark:text-slate-300">
        {label}
      </div>
    </>
  );
}
