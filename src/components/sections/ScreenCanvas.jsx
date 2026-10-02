import { useState } from "react";
import ScreenImage from "../ui/ScreenImage.jsx";
import HotspotDot from "../ui/HotspotDot.jsx";
import BrowserChrome from "../ui/BrowserChrome.jsx";

export default function ScreenCanvas({ universe, currentImage, hotspots, activeHotspot, onClearHotspot, onToggleHotspot }) {
  const fallbackAspectRatio = universe.imageFit === "contain" ? 387 / 618 : 1920 / 945;
  const [imageAspectRatio, setImageAspectRatio] = useState(fallbackAspectRatio);
  const imageWidth = `min(100%, ${380 * imageAspectRatio}px, ${50 * imageAspectRatio}dvh)`;

  return (
    <div className="relative min-w-0 rounded-xl border border-slate-200 shadow-2xl shadow-slate-200/70 dark:border-white/10 dark:shadow-black/50">
      <div className="overflow-hidden rounded-t-xl">
        <BrowserChrome address={`app.smartflow.com.br/${universe.id}`} />
      </div>
      <div
        className="relative mx-auto max-w-full"
        style={{ width: imageWidth, aspectRatio: imageAspectRatio }}
        onClick={onClearHotspot}
      >
        {currentImage && (
          <ScreenImage
            name={currentImage}
            fit={universe.imageFit || "cover"}
            className="rounded-b-lg"
            onLoad={({ naturalWidth, naturalHeight }) => {
              setImageAspectRatio(naturalWidth / naturalHeight);
            }}
          />
        )}
        {hotspots.map((spot, index) => (
          <HotspotDot
            key={spot.id || index}
            spot={spot}
            index={index}
            isActive={activeHotspot === index}
            onToggle={onToggleHotspot}
          />
        ))}
      </div>
    </div>
  );
}
