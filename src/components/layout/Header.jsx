import { useEffect, useMemo, useRef, useState } from "react";
import { useTheme } from "../../context/ThemeContext.jsx";
import { FEATURES } from "../../data/features.js";
import { UNIVERSES } from "../../data/universes.js";
import { scrollToSection } from "../../scrollToSection.js";
import DesktopNav from "./DesktopNav.jsx";
import HeaderActions from "./HeaderActions.jsx";
import MobileMenu, { MobileActions } from "./MobileMenu.jsx";
import SearchPanel from "./SearchPanel.jsx";

function normalizeSearchText(value) {
  return String(value ?? "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function buildSearchableContent(docScreens) {
  return UNIVERSES.flatMap((universe) => {
    const feature = FEATURES.find(
      (item) => item.id === universe.id || item.universeId === universe.id,
    );
    const href = `#${feature?.id || universe.id}`;

    const screens = docScreens?.[universe.id]
      ? Object.entries(docScreens[universe.id])
          .sort(([firstIndex], [secondIndex]) => Number(firstIndex) - Number(secondIndex))
          .map(([, screen]) => screen)
      : [];
    const moduleTitle = feature?.title || universe.name;
    const moduleType = feature ? "Funcionalidade" : "Universo";

    return [
      {
        id: `module-${universe.id}`,
        moduleId: universe.id,
        moduleTitle,
        moduleType,
        title: moduleTitle,
        description: feature?.description || universe.description,
        type: moduleType,
        href,
        searchFields: [
          universe.name,
          universe.description,
          feature?.category,
          feature?.title,
          feature?.description,
          ...(feature?.actions || []),
        ],
      },
      ...screens.flatMap((screen, screenIndex) => [
        {
          id: `screen-${universe.id}-${screenIndex}`,
          moduleId: universe.id,
          moduleTitle,
          moduleType,
          title: screen.title,
          description: screen.desc,
          type: "Tela",
          href,
          searchFields: [screen.title, screen.desc],
        },
        ...(screen.hotspots || [])
          .filter((hotspot) => {
            const name = normalizeSearchText(hotspot.name);
            return !(name.includes("menu") && name.includes("navegacao"));
          })
          .map((hotspot) => ({
            id: `hotspot-${universe.id}-${screenIndex}-${hotspot.id || hotspot.number}`,
            moduleId: universe.id,
            moduleTitle,
            moduleType,
            title: hotspot.name,
            description: hotspot.function || hotspot.usage || hotspot.location || "",
            type: `${screen.title} · ${hotspot.type || "Elemento"}`,
            href,
            searchFields: [
              hotspot.name,
              hotspot.type,
              hotspot.category,
              hotspot.location,
              hotspot.function,
              hotspot.usage,
              hotspot.observations,
            ],
          })),
      ]),
    ];
  });
}

export default function Header() {
  const { dark, toggle } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [docScreens, setDocScreens] = useState(null);
  const searchPanelRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    if (!searchOpen) return undefined;

    const closeOnOutsidePointer = (event) => {
      if (searchPanelRef.current?.contains(event.target)) return;
      setSearchOpen(false);
      setQuery("");
    };

    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePointer);
  }, [searchOpen]);

  useEffect(() => {
    if (!searchOpen || docScreens) return;

    let active = true;
    import("../../data/learningHotspots.js").then(({ DOC_HOTSPOTS }) => {
      if (active) setDocScreens(DOC_HOTSPOTS);
    });

    return () => {
      active = false;
    };
  }, [searchOpen, docScreens]);

  const openSearch = () => {
    setMenuOpen(false);
    setSearchOpen(true);
  };

  const navigateTo = (href) => {
    setMenuOpen(false);
    setSearchOpen(false);
    scrollToSection(href);
  };

  const searchableContent = useMemo(
    () => buildSearchableContent(docScreens),
    [docScreens],
  );
  const normalizedQuery = normalizeSearchText(query).trim();
  const queryTerms = normalizedQuery.split(/\s+/).filter(Boolean);

  const matchingResults = queryTerms.length
    ? searchableContent.flatMap((item) => {
        const fields = item.searchFields.filter(Boolean);
        const normalizedFields = fields.map(normalizeSearchText);
        if (!queryTerms.every((term) => normalizedFields.some((field) => field.includes(term)))) {
          return [];
        }

        const matchingFields = fields.filter((field) =>
          queryTerms.some((term) => normalizeSearchText(field).includes(term)),
        );
        const matchDescription = matchingFields.find((field) =>
          queryTerms.every((term) => normalizeSearchText(field).includes(term)),
        ) || matchingFields[0];
        return [{ ...item, matchDescription, matchCount: matchingFields.length }];
      })
    : [];
  const results = [...matchingResults.reduce((groups, item) => {
    if (!groups.has(item.moduleId)) {
      groups.set(item.moduleId, {
        id: `group-${item.moduleId}`,
        title: item.moduleTitle,
        type: item.moduleType,
        href: item.href,
        matches: [],
      });
    }
    groups.get(item.moduleId).matches.push(item);
    return groups;
  }, new Map()).values()];
  const headerScrolledClasses = scrolled
    ? [
        "bg-slate-50/92 backdrop-blur-xl border-b border-black/6 shadow-xl shadow-black/5",
        "dark:bg-[#0F172A]/90 dark:border-white/5 dark:shadow-black/30",
      ].join(" ")
    : "";
  const headerClasses = `fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${headerScrolledClasses}`;

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => navigateTo("#home")}
            className="flex items-center"
          >
            <img
              src={dark ? "/imagem/logo1-escuro.webp" : "/imagem/logo1-claro.webp"}
              alt="SmartFlow"
              className="h-11 w-auto"
            />
          </button>
          <DesktopNav onNavigate={navigateTo} />
          <HeaderActions
            dark={dark}
            onToggleTheme={toggle}
            onToggleSearch={openSearch}
            onNavigate={navigateTo}
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
          panelRef={searchPanelRef}
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
      <MobileMenu open={menuOpen} onNavigate={navigateTo} />
    </header>
  );
}
