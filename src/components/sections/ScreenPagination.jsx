export default function ScreenPagination({ images, screenIdx, onSelect }) {
  return (
    <div className={`flex items-center justify-center gap-2 mt-4 flex-shrink-0 ${images.length > 1 ? "" : "invisible"}`}>
      {images.map((_, i) => (
        <button
          key={i}
          type="button"
          aria-label={`Abrir tela ${i + 1}`}
          aria-current={i === screenIdx ? "page" : undefined}
          onClick={() => onSelect(i)}
          className={`rounded-full transition-all duration-300 ${
            i === screenIdx
              ? "w-6 h-2 bg-brand"
              : "w-2 h-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-400"
          }`}
        />
      ))}
    </div>
  );
}
