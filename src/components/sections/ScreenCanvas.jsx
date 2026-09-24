import ScreenImage from "../ui/ScreenImage.jsx";
import HotspotDot from "../ui/HotspotDot.jsx";

export default function ScreenCanvas({ universe, currentImage, hotspots, activeHotspot, onClearHotspot, onToggleHotspot }) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/70 dark:border-white/10 dark:shadow-black/50">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b bg-white border-slate-200 dark:bg-[#060D1C] dark:border-white/5">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 mx-3 rounded text-[10px] px-2 py-0.5 text-center bg-slate-100 text-slate-500 dark:bg-[#0F172A] dark:text-slate-500">
          app.smartflow.com.br/{universe.id}
        </div>
      </div>
      <div className="relative" style={{ height: 380 }} onClick={onClearHotspot}>
        {currentImage && <ScreenImage name={currentImage} fit={universe.imageFit || "cover"} />}
        {hotspots.map((spot, i) => (
          <HotspotDot
            key={spot.id || i}
            spot={spot}
            index={i}
            activeIdx={activeHotspot}
            onToggle={onToggleHotspot}
          />
        ))}
      </div>
    </div>
  );
}
