"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Menu, MessageCircle, Search, X } from "lucide-react";
import {
  type KeyboardEvent as ReactKeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

const HEADER_HEIGHT = 88;

const navigationLinks = [
  {
    label: "Home",
    sectionId: "home",
  },
  {
    label: "Diensten",
    sectionId: "diensten",
  },
  {
    label: "Portfolio",
    sectionId: "portfolio",
  },
  {
    label: "Waarom",
    sectionId: "waarom",
  },
];

const searchItems = [
  {
    title: "Computerreparatie",
    description: "Hulp bij een trage, defecte of instabiele computer.",
    href: "/computerreparatie",
    keywords: "computer pc reparatie defect traag",
    category: "Dienst",
  },
  {
    title: "Computer upgrade & reparatie",
    description: "SSD-upgrades, extra RAM, onderhoud en reparaties.",
    href: "/computer-upgrade-reparatie",
    keywords: "upgrade ssd ram geheugen computer reparatie",
    category: "Dienst",
  },
  {
    title: "Laptop sneller maken",
    description: "Maak je laptop sneller en betrouwbaarder.",
    href: "/laptop-sneller-maken",
    keywords: "laptop sneller traag ssd ram upgrade",
    category: "Dienst",
  },
  {
    title: "Windows installeren",
    description: "Professionele installatie en configuratie van Windows.",
    href: "/windows-installeren",
    keywords: "windows installeren installatie herinstallatie",
    category: "Dienst",
  },
  {
    title: "Virus verwijderen",
    description: "Virussen, malware en ongewenste software verwijderen.",
    href: "/virus-verwijderen",
    keywords: "virus malware beveiliging verwijderen antivirus",
    category: "Dienst",
  },
  {
    title: "Printer, wifi & netwerk",
    description: "Hulp met printers, wifi en netwerkproblemen.",
    href: "/printer-wifi-netwerk",
    keywords: "printer wifi netwerk internet storing",
    category: "Dienst",
  },
  {
    title: "Microsoft 365",
    description: "Installatie, configuratie en ondersteuning.",
    href: "/microsoft-365",
    keywords: "microsoft office 365 outlook word excel",
    category: "Dienst",
  },
  {
    title: "Data overzetten",
    description: "Veilig bestanden en gegevens overzetten.",
    href: "/data-overzetten",
    keywords: "data bestanden fotos documenten overzetten",
    category: "Dienst",
  },
  {
    title: "Website laten maken",
    description: "Een professionele website voor jouw onderneming.",
    href: "/website-laten-maken",
    keywords: "website webdesign laten maken bedrijf",
    category: "Website",
  },
  {
    title: "IT-support in Breda",
    description: "Persoonlijke IT-hulp voor particulieren en bedrijven.",
    href: "/it-support-breda",
    keywords: "it support breda hulp ondersteuning",
    category: "Dienst",
  },
  {
    title: "Contact",
    description: "Neem rechtstreeks contact op met AMR IT Solutions.",
    href: "/#contact",
    keywords: "contact offerte hulp afspraak whatsapp bellen",
    category: "Contact",
  },
];

function HighlightedText({
  text,
  query,
}: {
  text: string;
  query: string;
}) {
  const normalizedQuery = query.trim();

  if (!normalizedQuery) {
    return text;
  }

  const lowerCaseText = text.toLowerCase();
  const lowerCaseQuery = normalizedQuery.toLowerCase();
  const parts: ReactNode[] = [];

  let currentIndex = 0;
  let matchIndex = lowerCaseText.indexOf(lowerCaseQuery);

  while (matchIndex !== -1) {
    if (matchIndex > currentIndex) {
      parts.push(text.slice(currentIndex, matchIndex));
    }

    parts.push(
      <mark
        key={`${matchIndex}-${text}`}
        className="rounded bg-blue-100 px-0.5 text-blue-700"
      >
        {text.slice(matchIndex, matchIndex + normalizedQuery.length)}
      </mark>,
    );

    currentIndex = matchIndex + normalizedQuery.length;
    matchIndex = lowerCaseText.indexOf(lowerCaseQuery, currentIndex);
  }

  if (currentIndex < text.length) {
    parts.push(text.slice(currentIndex));
  }

  return <>{parts}</>;
}

export default function Navbar() {
  const router = useRouter();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeSection, setActiveSection] = useState("home");
  const [selectedResultIndex, setSelectedResultIndex] = useState(0);

  const searchInputRef = useRef<HTMLInputElement>(null);
  const resultRefs = useRef<Array<HTMLAnchorElement | null>>([]);

  const filteredSearchItems = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    if (!normalizedQuery) {
      return searchItems.slice(0, 5);
    }

    return searchItems
      .map((item) => {
        const title = item.title.toLowerCase();
        const description = item.description.toLowerCase();
        const keywords = item.keywords.toLowerCase();
        const category = item.category.toLowerCase();

        let relevance = 0;

        if (title === normalizedQuery) {
          relevance += 100;
        }

        if (title.startsWith(normalizedQuery)) {
          relevance += 50;
        }

        if (title.includes(normalizedQuery)) {
          relevance += 30;
        }

        if (keywords.includes(normalizedQuery)) {
          relevance += 20;
        }

        if (description.includes(normalizedQuery)) {
          relevance += 10;
        }

        if (category.includes(normalizedQuery)) {
          relevance += 5;
        }

        return {
          ...item,
          relevance,
        };
      })
      .filter((item) => item.relevance > 0)
      .sort((firstItem, secondItem) => {
        return secondItem.relevance - firstItem.relevance;
      });
  }, [searchQuery]);

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSearchOpen(false);
        setMobileMenuOpen(false);
        setSearchQuery("");
        setSelectedResultIndex(0);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  useEffect(() => {
    if (!searchOpen) {
      return;
    }

    const timeout = window.setTimeout(() => {
      searchInputRef.current?.focus();
    }, 100);

    return () => {
      window.clearTimeout(timeout);
    };
  }, [searchOpen]);

  useEffect(() => {
    setSelectedResultIndex(0);
  }, [searchQuery]);

  useEffect(() => {
    const selectedResult = resultRefs.current[selectedResultIndex];

    selectedResult?.scrollIntoView({
      block: "nearest",
      behavior: "smooth",
    });
  }, [selectedResultIndex]);

  useEffect(() => {
    let animationFrameId: number | null = null;

    function updateActiveSection() {
      const activationPoint = HEADER_HEIGHT + 80;

      let currentSection = "home";

      for (const link of navigationLinks) {
        const section = document.getElementById(link.sectionId);

        if (!section) {
          continue;
        }

        const rectangle = section.getBoundingClientRect();

        if (
          rectangle.top <= activationPoint &&
          rectangle.bottom > activationPoint
        ) {
          currentSection = link.sectionId;
          break;
        }

        if (rectangle.top <= activationPoint) {
          currentSection = link.sectionId;
        }
      }

      setActiveSection(currentSection);
      animationFrameId = null;
    }

    function handleScroll() {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updateActiveSection);
    }

    updateActiveSection();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  function closeMenus() {
    setMobileMenuOpen(false);
    setSearchOpen(false);
    setSearchQuery("");
    setSelectedResultIndex(0);
  }

  function toggleSearch() {
    setSearchOpen((current) => !current);
    setMobileMenuOpen(false);
    setSearchQuery("");
    setSelectedResultIndex(0);
  }

  function openSearchResult(href: string) {
    closeMenus();
    router.push(href);
  }

  function handleSearchKeyDown(
    event: ReactKeyboardEvent<HTMLInputElement>,
  ) {
    if (filteredSearchItems.length === 0) {
      return;
    }

    if (event.key === "ArrowDown") {
      event.preventDefault();

      setSelectedResultIndex((currentIndex) => {
        return currentIndex >= filteredSearchItems.length - 1
          ? 0
          : currentIndex + 1;
      });
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setSelectedResultIndex((currentIndex) => {
        return currentIndex <= 0
          ? filteredSearchItems.length - 1
          : currentIndex - 1;
      });
    }

    if (event.key === "Enter") {
      event.preventDefault();

      const selectedItem = filteredSearchItems[selectedResultIndex];

      if (selectedItem) {
        openSearchResult(selectedItem.href);
      }
    }
  }

  function scrollToSection(
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string,
  ) {
    event.preventDefault();

    const section = document.getElementById(sectionId);

    if (!section) {
      window.location.href = `/#${sectionId}`;
      return;
    }

    setActiveSection(sectionId);
    closeMenus();

    const sectionTop =
      section.getBoundingClientRect().top +
      window.scrollY -
      HEADER_HEIGHT;

    window.scrollTo({
      top: Math.max(sectionTop, 0),
      behavior: "smooth",
    });

    window.history.replaceState(
      null,
      "",
      sectionId === "home" ? "/" : `/#${sectionId}`,
    );
  }

  function scrollToContact(event: MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();

    const contactSection = document.getElementById("contact");

    if (!contactSection) {
      window.location.href = "/#contact";
      return;
    }

    closeMenus();

    const sectionTop =
      contactSection.getBoundingClientRect().top +
      window.scrollY -
      HEADER_HEIGHT;

    window.scrollTo({
      top: Math.max(sectionTop, 0),
      behavior: "smooth",
    });

    window.history.replaceState(null, "", "/#contact");
  }

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-slate-200/70 bg-white/95 shadow-sm backdrop-blur-xl">
        <nav aria-label="Hoofdnavigatie">
          <div className="mx-auto flex min-h-[88px] max-w-7xl items-center justify-between gap-8 px-6">
            <a
              href="#home"
              aria-label="Ga naar de homepage"
              onClick={(event) => scrollToSection(event, "home")}
              className="relative z-10 flex shrink-0 items-center transition-transform duration-300 hover:scale-[1.02]"
            >
              <Image
                src="/logos/logo.png"
                alt="AMR IT Solutions"
                width={170}
                height={55}
                priority
                className="h-auto w-[145px] sm:w-[160px] lg:w-[170px]"
              />
            </a>

            <div className="hidden items-center gap-1 lg:flex">
              {navigationLinks.map((link) => {
                const isActive = activeSection === link.sectionId;

                return (
                  <a
                    key={link.sectionId}
                    href={`#${link.sectionId}`}
                    onClick={(event) =>
                      scrollToSection(event, link.sectionId)
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
                  </a>
                );
              })}

              <button
                type="button"
                onClick={toggleSearch}
                aria-label={
                  searchOpen
                    ? "Zoekvenster sluiten"
                    : "Website doorzoeken"
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

              <a
                href="#contact"
                onClick={scrollToContact}
                className="ml-3 inline-flex items-center justify-center gap-2.5 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
                  <MessageCircle className="h-4 w-4" />
                </span>

                Contact
              </a>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={toggleSearch}
                aria-label={
                  searchOpen
                    ? "Zoekvenster sluiten"
                    : "Website doorzoeken"
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
                  setSelectedResultIndex(0);
                }}
                aria-label={
                  mobileMenuOpen ? "Menu sluiten" : "Menu openen"
                }
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
                    onChange={(event) =>
                      setSearchQuery(event.target.value)
                    }
                    onKeyDown={handleSearchKeyDown}
                    placeholder="Waar kunnen we je mee helpen?"
                    aria-label="Zoeken op de website"
                    aria-controls="website-search-results"
                    aria-activedescendant={
                      filteredSearchItems.length > 0
                        ? `search-result-${selectedResultIndex}`
                        : undefined
                    }
                    autoComplete="off"
                    className="h-14 w-full rounded-2xl border border-slate-300 bg-slate-50 pl-14 pr-14 text-base text-slate-900 outline-none transition-all placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                  />

                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => {
                        setSearchQuery("");
                        setSelectedResultIndex(0);
                        searchInputRef.current?.focus();
                      }}
                      aria-label="Zoekopdracht wissen"
                      className="absolute right-4 top-1/2 inline-flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-slate-200 hover:text-slate-700"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                <div className="mt-3 flex items-center justify-between gap-4 px-1 text-xs text-slate-400">
                  <span>
                    {searchQuery
                      ? `${filteredSearchItems.length} resultaat${
                          filteredSearchItems.length === 1 ? "" : "en"
                        }`
                      : "Populaire zoekopdrachten"}
                  </span>

                  <span className="hidden items-center gap-2 sm:flex">
                    <kbd className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 font-sans">
                      ↑
                    </kbd>
                    <kbd className="rounded-md border border-slate-200 bg-slate-50 px-2 py-1 font-sans">
                      ↓
                    </kbd>
                    navigeren
                    <kbd className="ml-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-1 font-sans">
                      Enter
                    </kbd>
                    openen
                  </span>
                </div>

                <div
                  id="website-search-results"
                  role="listbox"
                  aria-label="Zoekresultaten"
                  className="mt-4 max-h-[60vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white"
                >
                  {filteredSearchItems.length > 0 ? (
                    filteredSearchItems.map((item, index) => {
                      const isSelected =
                        selectedResultIndex === index;

                      return (
                        <Link
                          key={item.href}
                          ref={(element) => {
                            resultRefs.current[index] = element;
                          }}
                          id={`search-result-${index}`}
                          role="option"
                          aria-selected={isSelected}
                          href={item.href}
                          onMouseEnter={() =>
                            setSelectedResultIndex(index)
                          }
                          onFocus={() =>
                            setSelectedResultIndex(index)
                          }
                          onClick={closeMenus}
                          className={`group flex items-center justify-between gap-5 border-b border-slate-100 px-5 py-4 outline-none transition-all last:border-b-0 ${
                            isSelected
                              ? "bg-blue-50 ring-1 ring-inset ring-blue-100"
                              : "hover:bg-slate-50"
                          }`}
                        >
                          <div className="min-w-0">
                            <span
                              className={`inline-flex rounded-full px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide ${
                                isSelected
                                  ? "bg-blue-600 text-white"
                                  : "bg-slate-100 text-slate-500"
                              }`}
                            >
                              {item.category}
                            </span>

                            <p
                              className={`mt-2 font-bold transition-colors ${
                                isSelected
                                  ? "text-blue-700"
                                  : "text-slate-900 group-hover:text-blue-600"
                              }`}
                            >
                              <HighlightedText
                                text={item.title}
                                query={searchQuery}
                              />
                            </p>

                            <p className="mt-1 text-sm leading-6 text-slate-500">
                              <HighlightedText
                                text={item.description}
                                query={searchQuery}
                              />
                            </p>
                          </div>

                          <span
                            className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-all ${
                              isSelected
                                ? "bg-blue-600 text-white shadow-md shadow-blue-600/20"
                                : "bg-slate-100 text-slate-400 group-hover:bg-blue-100 group-hover:text-blue-600"
                            }`}
                          >
                            <Search className="h-4 w-4" />
                          </span>
                        </Link>
                      );
                    })
                  ) : (
                    <div className="px-5 py-10 text-center">
                      <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
                        <Search className="h-5 w-5" />
                      </span>

                      <p className="mt-4 font-bold text-slate-900">
                        Geen resultaten gevonden
                      </p>

                      <p className="mt-2 text-sm text-slate-500">
                        Probeer bijvoorbeeld computer, laptop, wifi,
                        website of Microsoft 365.
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
                  const isActive =
                    activeSection === link.sectionId;

                  return (
                    <a
                      key={link.sectionId}
                      href={`#${link.sectionId}`}
                      onClick={(event) =>
                        scrollToSection(event, link.sectionId)
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
                    </a>
                  );
                })}

                <a
                  href="#contact"
                  onClick={scrollToContact}
                  className="mt-6 inline-flex items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-700"
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15">
                    <MessageCircle className="h-4 w-4" />
                  </span>

                  Contact opnemen
                </a>
              </div>
            </div>
          )}
        </nav>
      </header>

      <div aria-hidden="true" className="h-[88px]" />
    </>
  );
}