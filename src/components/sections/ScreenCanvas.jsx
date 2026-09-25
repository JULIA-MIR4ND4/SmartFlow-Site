import ScreenImage from "../ui/ScreenImage.jsx";
import HotspotDot from "../ui/HotspotDot.jsx";
import BrowserChrome from "../ui/BrowserChrome.jsx";

export default function ScreenCanvas({ universe, currentImage, hotspots, activeHotspot, onClearHotspot, onToggleHotspot }) {
  return (
    <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/70 dark:border-white/10 dark:shadow-black/50">
      <BrowserChrome address={`app.smartflow.com.br/${universe.id}`} />
      <div className="relative" style={{ height: 380 }} onClick={onClearHotspot}>
        {currentImage && <ScreenImage name={currentImage} fit={universe.imageFit || "cover"} />}
        {hotspots.map((spot, i) => (
          <HotspotDot
            key={spot.id || i}
            spot={spot}
            index={i}
            isActive={activeHotspot === i}
            onToggle={onToggleHotspot}
          />
        ))}
      </div>
    </div>
  );
}
