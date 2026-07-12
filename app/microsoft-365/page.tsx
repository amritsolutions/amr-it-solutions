import type { Metadata } from "next";
import MicrosoftHero from "@/components/MicrosoftHero";
import MicrosoftServices from "@/components/MicrosoftServices";
import MicrosoftWhy from "@/components/MicrosoftWhy";
import MicrosoftFAQ from "@/components/MicrosoftFAQ";

export const metadata: Metadata = {
  title: "Microsoft 365 hulp Breda | Outlook, Teams & OneDrive | AMR IT Solutions",
  description:
    "Hulp nodig met Microsoft 365 in Breda? AMR IT Solutions ondersteunt bij Outlook, Teams, OneDrive, e-mailinstellingen en Microsoft 365 voor particulieren en bedrijven.",
  alternates: {
    canonical: "https://www.amritsolutions.nl/microsoft-365",
  },
  openGraph: {
    title: "Microsoft 365 hulp Breda | AMR IT Solutions",
    description:
      "Professionele hulp bij Outlook, Teams, OneDrive en Microsoft 365 in Breda.",
    url: "https://www.amritsolutions.nl/microsoft-365",
    images: [
      {
        url: "/images/microsoft-365-hero.png",
        width: 1200,
        height: 630,
        alt: "Microsoft 365 hulp in Breda",
      },
    ],
  },
};

export default function Microsoft365Page() {
  return (
    <main className="min-h-screen bg-white">
      <MicrosoftHero />
      <MicrosoftServices />
      <MicrosoftWhy />
      <MicrosoftFAQ />
    </main>
  );
}