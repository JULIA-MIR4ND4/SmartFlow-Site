import { useState } from "react";
import { ThemeCtx } from "./context/ThemeContext.jsx";
import Header from "./components/layout/Header.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import WhatIsSection from "./components/sections/WhatIsSection.jsx";
import UniverseGallery from "./components/sections/UniverseGallery.jsx";
import ModulesSection from "./components/sections/ModulesSection.jsx";

export default function App() {
  const [dark, setDark] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeCtx.Provider value={{ dark, toggle: () => setDark((d) => !d) }}>
      <div className="min-h-screen bg-[#0D1629] text-white" style={{ fontFamily: "'Inter', sans-serif" }}>
        <div className="flex min-h-screen">
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <div className="flex-1">
            <Header
              onSearchOpen={() => setSidebarOpen(true)}
              onMenuToggle={() => setSidebarOpen((value) => !value)}
            />
            <main className="pt-16">
              <HeroSection />
              <WhatIsSection />
              <UniverseGallery />
              <ModulesSection />
            </main>
          </div>
        </div>
      </div>
    </ThemeCtx.Provider>
  );
}
