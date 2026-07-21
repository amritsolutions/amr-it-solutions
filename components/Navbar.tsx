"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  Globe2,
  Menu,
  MessageCircle,
  Search,
  X,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";

const navigationLinks = [
  {
    label: "Home",
    href: "/#home",
  },
  {
    label: "Diensten",
    href: "/#diensten",
  },
  {
    label: "Portfolio",
    href: "/#portfolio",
  },
  {
    label: "Waarom",
    href: "/#waarom",
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
  const [languageOpen, setLanguageOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const languageMenuRef = useRef<HTMLDivElement>(null);
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
    function handleOutsideClick(event: MouseEvent) {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target as Node)
      ) {
        setLanguageOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setLanguageOpen(false);
        setMobileMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
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

  function closeMenus() {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setLanguageOpen(false);
    setSearchQuery("");
  }

  function toggleSearch() {
    setSearchOpen((current) => !current);
    setLanguageOpen(false);
    setMobileMenuOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-xl">
      <nav aria-label="Hoofdnavigatie">
        <div className="mx-auto flex min-h-[88px] max-w-7xl items-center justify-between gap-8 px-6">
          <Link
            href="/#home"
            aria-label="Ga naar de homepage"
            className="relative z-10 flex shrink-0 items-center"
            onClick={closeMenus}
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
            {navigationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
              >
                {link.label}
              </Link>
            ))}

            <div
              ref={languageMenuRef}
              className="relative ml-2"
            >
              <button
                type="button"
                onClick={() => {
                  setLanguageOpen((current) => !current);
                  setSearchOpen(false);
                }}
                aria-expanded={languageOpen}
                aria-haspopup="menu"
                aria-label="Taal selecteren"
                className="inline-flex items-center gap-2 rounded-xl px-3 py-3 text-sm font-bold text-slate-700 transition-colors duration-200 hover:bg-blue-50 hover:text-blue-600"
              >
                <Globe2 className="h-5 w-5" />
                <span>NL</span>

                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-200 ${
                    languageOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {languageOpen && (
                <div
                  role="menu"
                  className="absolute right-0 top-full mt-3 w-48 overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/10"
                >
                  <Link
                    href="/"
                    role="menuitem"
                    onClick={closeMenus}
                    className="flex items-center justify-between rounded-xl bg-blue-50 px-4 py-3 text-sm font-bold text-blue-600"
                  >
                    <span>Nederlands</span>
                    <span className="text-xs">NL</span>
                  </Link>

                  <Link
                    href="/en"
                    role="menuitem"
                    onClick={closeMenus}
                    className="mt-1 flex items-center justify-between rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-600"
                  >
                    <span>English</span>
                    <span className="text-xs text-slate-400">EN</span>
                  </Link>
                </div>
              )}
            </div>

            <button
              type="button"
              onClick={toggleSearch}
              aria-label={
                searchOpen ? "Zoekvenster sluiten" : "Website doorzoeken"
              }
              aria-expanded={searchOpen}
              className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-xl text-slate-700 transition-all duration-200 hover:bg-blue-50 hover:text-blue-600"
            >
              {searchOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Search className="h-5 w-5" />
              )}
            </button>

            <Link
              href="/#contact"
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
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
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
                setLanguageOpen(false);
              }}
              aria-label={
                mobileMenuOpen ? "Menu sluiten" : "Menu openen"
              }
              aria-expanded={mobileMenuOpen}
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
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

              <div className="mt-4 overflow-hidden rounded-2xl border border-slate-200">
                {filteredSearchItems.length > 0 ? (
                  filteredSearchItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenus}
                      className="group flex items-center justify-between gap-5 border-b border-slate-100 px-5 py-4 last:border-b-0 hover:bg-blue-50"
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
          <div className="border-t border-slate-200 bg-white px-6 py-6 shadow-xl lg:hidden">
            <div className="mx-auto flex max-w-7xl flex-col">
              {navigationLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenus}
                  className="border-b border-slate-100 py-4 text-base font-bold text-slate-800 transition-colors hover:text-blue-600"
                >
                  {link.label}
                </Link>
              ))}

              <div className="mt-6">
                <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.2em] text-slate-400">
                  Taal
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/"
                    onClick={closeMenus}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-50 px-4 py-3 font-bold text-blue-600"
                  >
                    <Globe2 className="h-4 w-4" />
                    NL
                  </Link>

                  <Link
                    href="/en"
                    onClick={closeMenus}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 font-bold text-slate-700 transition-colors hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <Globe2 className="h-4 w-4" />
                    EN
                  </Link>
                </div>
              </div>

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
  );
}