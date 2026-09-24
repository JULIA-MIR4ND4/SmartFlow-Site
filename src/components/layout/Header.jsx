import { useEffect, useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { FEATURES } from "../../data/features.js";
import { UNIVERSES } from "../../data/universes.js";
import { scrollToSection } from "../../scrollToSection.js";
import DesktopNav from "./DesktopNav.jsx";
import HeaderActions from "./HeaderActions.jsx";
import MobileMenu, { MobileActions } from "./MobileMenu.jsx";
import SearchPanel from "./SearchPanel.jsx";

export default function Header() {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [docScreens, setDocScreens] = useState(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setMenuOpen(false);
        setSearchOpen(true);
        return;
      }

      if (searchOpen && event.key === "Escape") {
        setSearchOpen(false);
        setQuery("");
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen || docScreens) return;

    let active = true;
    import("../../data/learningHotspots.js").then(({ default: hotspots }) => {
      if (active) setDocScreens(hotspots);
    });

    return () => {
      active = false;
    };
  }, [searchOpen, docScreens]);

  const openSearch = () => {
    setMenuOpen(false);
    setSearchOpen(true);
  };

  const go = (href) => {
    setMenuOpen(false);
    setSearchOpen(false);
    scrollToSection(href);
  };

  const searchableContent = UNIVERSES.flatMap((universe) => {
    const feature = FEATURES.find(
      (item) => item.id === universe.id || item.universeId === universe.id,
    );

    const screens = docScreens?.[universe.id]
      ? Object.entries(docScreens[universe.id])
          .sort(([firstIndex], [secondIndex]) => Number(firstIndex) - Number(secondIndex))
          .map(([, screen]) => screen)
      : [];

    return [
      {
        title: universe.name,
        description: universe.description,
        type: "Universo",
        href: `#universo-${universe.id}`,
      },
      ...screens.map((screen) => ({
        title: screen.title,
        description: screen.desc,
        type: "Funcionalidade",
        href: feature ? `#${feature.id}` : `#universo-${universe.id}`,
      })),
    ];
  });

  const results = query.trim()
    ? searchableContent.filter((item) => {
        const text = `${item.title} ${item.description} ${item.type}`.toLowerCase();
        return text.includes(query.trim().toLowerCase());
      })
    : [];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-slate-50/92 backdrop-blur-xl border-b border-black/6 shadow-xl shadow-black/5 dark:bg-[#0F172A]/90 dark:border-white/5 dark:shadow-black/30" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button onClick={() => go("#home")} className="flex items-center">
            <img
              src={dark ? "/imagem/logo1-escuro.webp" : "/imagem/logo1-claro.webp"}
              alt="SmartFlow"
              className="h-11 w-auto"
            />
          </button>
          <DesktopNav onNavigate={go} />
          <HeaderActions
            dark={dark}
            onToggleTheme={toggle}
            onToggleSearch={openSearch}
            onNavigate={go}
          />
          <MobileActions
            dark={dark}
            menuOpen={menuOpen}
            onToggleTheme={toggle}
            onToggleSearch={openSearch}
            onToggleMenu={() => setMenuOpen((value) => !value)}
          />
        </div>
      </div>
      {searchOpen && (
        <SearchPanel
          query={query}
          onQueryChange={setQuery}
          results={results}
          onClose={() => {
            setSearchOpen(false);
            setQuery("");
          }}
          onResult={(href) => {
            setQuery("");
            setSearchOpen(false);
            scrollToSection(href);
          }}
        />
      )}
      <MobileMenu open={menuOpen} onNavigate={go} />
    </header>
  );
}
