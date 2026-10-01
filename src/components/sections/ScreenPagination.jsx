export default function ScreenPagination({ images, screenIdx, onSelect }) {
  return (
    <div className={`flex items-center justify-center gap-2 mt-4 flex-shrink-0 ${images.length > 1 ? "" : "invisible"}`}>
      {images.map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Abrir tela ${index + 1}`}
          aria-current={index === screenIdx ? "page" : undefined}
          onClick={() => onSelect(index)}
          className={`rounded-full transition-all duration-300 ${
            index === screenIdx
              ? "w-6 h-2 bg-brand"
              : "w-2 h-2 bg-slate-300 hover:bg-slate-400 dark:bg-slate-600 dark:hover:bg-slate-400"
          }`}
        />
      ))}
    </div>
  );
}
