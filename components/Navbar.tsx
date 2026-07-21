"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu, MessageCircle, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const navigationLinks = [
  {
    label: "Home",
    href: "/#home",
    sectionId: "home",
  },
  {
    label: "Diensten",
    href: "/#diensten",
    sectionId: "diensten",
  },
  {
    label: "Portfolio",
    href: "/#portfolio",
    sectionId: "portfolio",
  },
  {
    label: "Waarom",
    href: "/#waarom",
    sectionId: "waarom",
  },
];

const searchItems = [
  {
    title: "Computerreparatie",
    description: "Hulp bij een trage, defecte of instabiele computer.",
    href: "/computerreparatie",
    keywords: "computer pc reparatie defect traag",
  },
  {
    title: "Computer upgrade & reparatie",
    description: "SSD-upgrades, extra RAM, onderhoud en reparaties.",
    href: "/computer-upgrade-reparatie",
    keywords: "upgrade ssd ram geheugen computer reparatie",
  },
  {
    title: "Laptop sneller maken",
    description: "Maak je laptop sneller en betrouwbaarder.",
    href: "/laptop-sneller-maken",
    keywords: "laptop sneller traag ssd ram upgrade",
  },
  {
    title: "Windows installeren",
    description: "Professionele installatie en configuratie van Windows.",
    href: "/windows-installeren",
    keywords: "windows installeren installatie herinstallatie",
  },
  {
    title: "Virus verwijderen",
    description: "Virussen, malware en ongewenste software verwijderen.",
    href: "/virus-verwijderen",
    keywords: "virus malware beveiliging verwijderen antivirus",
  },
  {
    title: "Printer, wifi & netwerk",
    description: "Hulp met printers, wifi en netwerkproblemen.",
    href: "/printer-wifi-netwerk",
    keywords: "printer wifi netwerk internet storing",
  },
  {
    title: "Microsoft 365",
    description: "Installatie, configuratie en ondersteuning.",
    href: "/microsoft-365",
    keywords: "microsoft office 365 outlook word excel",
  },
  {
    title: "Data overzetten",
    description: "Veilig bestanden en gegevens overzetten.",
    href: "/data-overzetten",
    keywords: "data bestanden fotos documenten overzetten",
  },
  {
    title: "Website laten maken",
    description: "Een professionele website voor jouw onderneming.",
    href: "/website-laten-maken",
    keywords: "website webdesign laten maken bedrijf",
  },
  {
    title: "IT-support in Breda",
    description: "Persoonlijke IT-hulp voor particulieren en bedrijven.",
    href: "/it-support-breda",
    keywords: "it support breda hulp ondersteuning",
  },
  {
    title: "Contact",
    description: "Neem rechtstreeks contact op met AMR IT Solutions.",
    href: "/#contact",
    keywords: "contact offerte hulp afspraak",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredSearchItems = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return searchItems.slice(0, 5);
    }

    return searchItems.filter((item) => {
      const searchableText = [
        item.title,
        item.description,
        item.keywords,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(normalizedQuery);
    });
  }, [searchQuery]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMobileMenuOpen(false);
        setSearchQuery("");
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (searchOpen) {
      window.setTimeout(() => {
        searchInputRef.current?.focus();
      }, 100);
    }
  }, [searchOpen]);

  useEffect(() => {
    let ticking = false;

    function determineActiveSection() {
      const sectionIds = navigationLinks.map((link) => link.sectionId);
      const scrollPosition = window.scrollY + 150;

      let currentSection = "home";

      sectionIds.forEach((sectionId) => {
        const section = document.getElementById(sectionId);

        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sectionId;
        }
      });

      setActiveSection(currentSection);
      ticking = false;
    }

    function handleScroll() {
      if (!ticking) {
        window.requestAnimationFrame(determineActiveSection);
        ticking = true;
      }
    }

    determineActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", determineActiveSection);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", determineActiveSection);
    };
  }, []);

  function closeMenus() {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setSearchQuery("");
  }

  function toggleSearch() {
    setSearchOpen((current) => !current);
    setMobileMenuOpen(false);
  }

  function handleNavigationClick(sectionId: string) {
    setActiveSection(sectionId);
    closeMenus();
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-xl">
        <nav aria-label="Hoofdnavigatie">
          <div className="mx-auto flex min-h-[88px] max-w-7xl items-center justify-between gap-8 px-6">
            <Link
              href="/#home"
              aria-label="Ga naar de homepage"
              className="relative z-10 flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.02]"
              onClick={() => handleNavigationClick("home")}
            >
              <Image
                src="/logos/logo.png"
                alt="AMR IT Solutions"
                width={170}
                height={55}
                priority
                className="h-auto w-[145px] sm:w-[160px] lg:w-[170px]"
              />
            </Link>

            <div className="hidden items-center gap-1 lg:flex">
              {navigationLinks.map((link) => {
                const isActive = activeSection === link.sectionId;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() =>
                      handleNavigationClick(link.sectionId)
                    }
                    aria-current={isActive ? "page" : undefined}
                    className={`relative rounded-xl px-4 py-3 text-sm font-semibold transition-all duration-300 ${
                      isActive
                        ? "bg-blue-50 text-blue-600"
                        : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                    }`}
                  >
                    {link.label}

                    <span
                      className={`absolute bottom-1.5 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 ${
                        isActive ? "w-6 opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </Link>
                );
              })}

              <button
                type="button"
                onClick={toggleSearch}
                aria-label={
                  searchOpen ? "Zoekvenster sluiten" : "Website doorzoeken"
                }
                aria-expanded={searchOpen}
                className={`ml-2 inline-flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-200 ${
                  searchOpen
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {searchOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
              </button>

              <Link
                href="/#contact"
                onClick={closeMenus}
                className="ml-3 inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <MessageCircle className="h-4 w-4" />
                </span>

                Contact
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={toggleSearch}
                aria-label={
                  searchOpen ? "Zoekvenster sluiten" : "Website doorzoeken"
                }
                aria-expanded={searchOpen}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                  searchOpen
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {searchOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Search className="h-5 w-5" />
                )}
              </button>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen((current) => !current);
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                aria-label={mobileMenuOpen ? "Menu sluiten" : "Menu openen"}
                aria-expanded={mobileMenuOpen}
                className={`inline-flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${
                  mobileMenuOpen
                    ? "bg-blue-50 text-blue-600"
                    : "text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                }`}
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {searchOpen && (
            <div className="border-t border-slate-200 bg-white shadow-xl">
              <div className="mx-auto max-w-4xl px-6 py-6">
                <div className="relative">
                  <Search className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

                  <input
                    ref={searchInputRef}
                    type="search"
                    value={searchQuery}
                    onChange={(event) => setSearchQuery(event.target.value)}
                    placeholder="Waar kunnen we je mee helpen?"
                    aria-label="Zoeken op de website"
                    className="h-14 w-full rounded-2xl border border-slate-300 bg-slate-50 pl-14 pr-14 text-base text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />

                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      aria-label="Zoekopdracht wissen"
                      className="absolute right-4 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <div className="mt-4 max-h-[60vh] overflow-y-auto rounded-2xl border border-slate-200">
                  {filteredSearchItems.length > 0 ? (
                    filteredSearchItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={closeMenus}
                        className="group flex items-center justify-between gap-5 border-b border-slate-100 px-5 py-4 transition-colors last:border-b-0 hover:bg-blue-50"
                      >
                        <div>
                          <p className="font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                            {item.title}
                          </p>

                          <p className="mt-1 text-sm text-slate-500">
                            {item.description}
                          </p>
                        </div>

                        <Search className="h-4 w-4 shrink-0 text-slate-300 transition-colors group-hover:text-blue-600" />
                      </Link>
                    ))
                  ) : (
                    <div className="px-5 py-8 text-center">
                      <p className="font-bold text-slate-900">
                        Geen resultaten gevonden
                      </p>

                      <p className="mt-2 text-sm text-slate-500">
                        Probeer bijvoorbeeld computer, laptop, wifi of Microsoft
                        365.
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {mobileMenuOpen && (
            <div className="max-h-[calc(100vh-88px)] overflow-y-auto border-t border-slate-200 bg-white px-6 py-6 shadow-xl lg:hidden">
              <div className="mx-auto flex max-w-7xl flex-col">
                {navigationLinks.map((link) => {
                  const isActive = activeSection === link.sectionId;

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() =>
                        handleNavigationClick(link.sectionId)
                      }
                      aria-current={isActive ? "page" : undefined}
                      className={`flex items-center justify-between border-b border-slate-100 px-3 py-4 text-base font-bold transition-all ${
                        isActive
                          ? "rounded-xl border-transparent bg-blue-50 text-blue-600"
                          : "text-slate-800 hover:text-blue-600"
                      }`}
                    >
                      <span>{link.label}</span>

                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-blue-600" />
                      )}
                    </Link>
                  );
                })}

                <Link
                  href="/#contact"
                  onClick={closeMenus}
                  className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                    <MessageCircle className="h-4 w-4" />
                  </span>

                  Contact opnemen
                </Link>
              </div>
            </div>
          )}
        </nav>
      </header>

      <div aria-hidden="true" className="h-[88px]" />
    </>
  );
}