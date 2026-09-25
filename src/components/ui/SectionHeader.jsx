const DEFAULT_EYEBROW_CLASSES = "inline-flex items-center gap-2 px-3 py-1.5 bg-brand/10 border border-brand/20 rounded-full text-sm text-[#3B82F6] mb-6";
const DEFAULT_TITLE_CLASSES = "font-display text-4xl lg:text-5xl font-bold mb-6 leading-tight text-slate-900 dark:text-white";
const DEFAULT_DESCRIPTION_CLASSES = "text-lg leading-relaxed mb-5 text-slate-600 dark:text-slate-400";

export default function SectionHeader({
  eyebrow,
  title,
  description,
  className = "",
  eyebrowClassName = DEFAULT_EYEBROW_CLASSES,
  titleClassName = DEFAULT_TITLE_CLASSES,
  descriptionClassName = DEFAULT_DESCRIPTION_CLASSES,
}) {
  return (
    <div className={className}>
      <div className={eyebrowClassName}>{eyebrow}</div>
      <h2 className={titleClassName}>{title}</h2>
      <p className={descriptionClassName}>{description}</p>
    </div>
  );
}
