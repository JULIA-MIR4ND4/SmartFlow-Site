import { useState } from "react";
import { ThemeCtx } from "./context/ThemeContext.jsx";
import Header from "./components/layout/Header.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import WhatIsSection from "./components/sections/WhatIsSection.jsx";
import UniverseGallery from "./components/sections/UniverseGallery.jsx";

export default function App() {
  const [dark, setDark] = useState(true);

  return (
    <ThemeCtx.Provider value={{ dark, toggle: () => setDark((d) => !d) }}>
      <div
        className={`min-h-screen transition-colors duration-300 ${
          dark ? "bg-[#0F172A] text-white" : "bg-slate-50 text-slate-900"
        }`}
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        <Header onSearchOpen={() => {}} />
        <HeroSection />
        <WhatIsSection />
        <UniverseGallery />

        {/* Próximas seções entram aqui, uma por vez:
            <FeaturesSection />
            <SystemFlowSection />
            <Footer /> */}
      </div>
    </ThemeCtx.Provider>
  );
}
