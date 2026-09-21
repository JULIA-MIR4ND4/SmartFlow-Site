import { useState } from "react";
import { ThemeCtx } from "./context/ThemeContext.jsx";
import Header from "./components/layout/Header.jsx";
import Sidebar from "./components/layout/Sidebar.jsx";
import HeroSection from "./components/sections/HeroSection.jsx";
import WhatIsSection from "./components/sections/WhatIsSection.jsx";
import UniverseGallery from "./components/sections/UniverseGallery.jsx";
import ModulesSection from "./components/sections/ModulesSection.jsx";
import ContactSection from "./components/sections/ContactSection.jsx";

export default function App() {
  const [dark, setDark] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeCtx.Provider value={{ dark, toggle: () => setDark((d) => !d) }}>
      <div className={`min-h-screen transition-colors duration-300 ${dark ? "bg-[#0D1629] text-white" : "bg-slate-50 text-slate-900"}`} style={{ fontFamily: "'Inter', sans-serif" }}>
        <div className="flex min-h-screen">
          <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <div className="flex-1">
            <Header
            />
            <main className="pt-16">
              <HeroSection />
              <WhatIsSection />
              <UniverseGallery />
              <ModulesSection />
              <ContactSection />
            </main>
          </div>
        </div>
      </div>
    </ThemeCtx.Provider>
  );
}