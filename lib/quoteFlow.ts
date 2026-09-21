export type QuoteCategory =
  | "website"
  | "computer"
  | "microsoft365"
  | "wifi"
  | "printer"
  | "other";

export type QuoteQuestion = {
  id: string;
  question: string;
  placeholder?: string;
};

export const QUOTE_FLOWS: Record<QuoteCategory, QuoteQuestion[]> = {
  website: [
    {
      id: "websiteType",
      question:
        "Wat voor soort website wil je laten maken? Bijvoorbeeld een bedrijfswebsite, portfolio of landingpage.",
      placeholder: "Bijv. bedrijfswebsite",
    },
    {
      id: "pages",
      question: "Hoeveel pagina's denk je ongeveer nodig te hebben?",
      placeholder: "Bijv. 5 pagina's",
    },
    {
      id: "domain",
      question: "Heb je al een domeinnaam?",
      placeholder: "Ja / Nee / Weet ik niet",
    },
    {
      id: "email",
      question: "Wil je ook zakelijke e-mail bij je domeinnaam?",
      placeholder: "Ja / Nee",
    },
    {
      id: "websiteDetails",
      question:
        "Zijn er nog speciale functies nodig, zoals een contactformulier, afsprakenformulier of iets anders?",
      placeholder: "Omschrijf kort wat je nodig hebt",
    },
  ],

  computer: [
    {
      id: "device",
      question: "Om welk apparaat gaat het?",
      placeholder: "Bijv. HP laptop",
    },
    {
      id: "operatingSystem",
      question: "Welk besturingssysteem gebruik je?",
      placeholder: "Bijv. Windows 11",
    },
    {
      id: "problemSince",
      question: "Sinds wanneer heb je het probleem?",
      placeholder: "Bijv. sinds gisteren",
    },
    {
      id: "computerProblem",
      question: "Kun je het probleem kort omschrijven?",
      placeholder: "Omschrijf het probleem",
    },
  ],

  microsoft365: [
    {
      id: "m365Product",
      question:
        "Waar heb je hulp mee nodig? Bijvoorbeeld Outlook, OneDrive, Teams of zakelijke e-mail.",
      placeholder: "Bijv. Outlook",
    },
    {
      id: "m365Device",
      question: "Op welk apparaat speelt het probleem?",
      placeholder: "Bijv. Windows-laptop",
    },
    {
      id: "m365Issue",
      question: "Kun je kort omschrijven wat er misgaat?",
      placeholder: "Omschrijf het probleem",
    },
  ],

  wifi: [
    {
      id: "wifiDevice",
      question: "Op welk apparaat merk je het wifi-probleem?",
      placeholder: "Bijv. laptop",
    },
    {
      id: "otherDevices",
      question: "Hebben andere apparaten hetzelfde probleem?",
      placeholder: "Ja / Nee",
    },
    {
      id: "wifiIssue",
      question: "Kun je kort omschrijven wat er gebeurt?",
      placeholder: "Bijv. verbinding valt steeds weg",
    },
  ],

  printer: [
    {
      id: "printerBrand",
      question: "Welk merk en model printer heb je?",
      placeholder: "Bijv. HP LaserJet",
    },
    {
      id: "printerConnection",
      question: "Is de printer verbonden via wifi of USB?",
      placeholder: "Wifi / USB",
    },
    {
      id: "printerIssue",
      question: "Kun je kort omschrijven wat er misgaat?",
      placeholder: "Bijv. printer blijft offline",
    },
  ],

  other: [
    {
      id: "otherDetails",
      question: "Kun je kort omschrijven waar je hulp of een offerte voor wilt?",
      placeholder: "Omschrijf je aanvraag",
    },
  ],
};

export function detectQuoteCategory(service: string): QuoteCategory {
  const text = service.toLowerCase();

  if (
    text.includes("website") ||
    text.includes("webshop") ||
    text.includes("domein")
  ) {
    return "website";
  }

  if (
    text.includes("computer") ||
    text.includes("laptop") ||
    text.includes("pc") ||
    text.includes("windows")
  ) {
    return "computer";
  }

  if (
    text.includes("microsoft 365") ||
    text.includes("office 365") ||
    text.includes("outlook") ||
    text.includes("onedrive") ||
    text.includes("teams")
  ) {
    return "microsoft365";
  }

  if (
    text.includes("wifi") ||
    text.includes("internet") ||
    text.includes("netwerk") ||
    text.includes("router")
  ) {
    return "wifi";
  }

  if (
    text.includes("printer") ||
    text.includes("printen") ||
    text.includes("scanner")
  ) {
    return "printer";
  }

  return "other";
}