import type { Metadata } from "next";

import ComputerHero from "@/components/ComputerHero";
import ComputerServices from "@/components/ComputerServices";
import ComputerWhy from "@/components/ComputerWhy";
import ComputerFAQ from "@/components/ComputerFAQ";
import ComputerCTA from "@/components/ComputerCTA";

export const metadata: Metadata = {
  title:
    "Computerreparatie Breda | Laptop & PC Reparatie | AMR IT Solutions",

  description:
    "Computer of laptop laten repareren in Breda? AMR IT Solutions helpt met computerreparatie, Windows-problemen, SSD-upgrades, malware en data overzetten.",

  alternates: {
    canonical: "https://www.amritsolutions.nl/computerreparatie",
  },

  openGraph: {
    title: "Computerreparatie Breda | AMR IT Solutions",

    description:
      "Hulp bij computer- en laptopproblemen in Breda. Van Windows-problemen en SSD-upgrades tot malware en data overzetten.",

    url: "https://www.amritsolutions.nl/computerreparatie",

    images: [
      {
        url: "/images/computerrepair.png",
        width: 1200,
        height: 630,
        alt: "Computerreparatie in Breda door AMR IT Solutions",
      },
    ],
  },
};

export default function ComputerReparatiePage() {
  return (
    <main className="min-h-screen bg-white">
      <ComputerHero />
      <ComputerServices />
      <ComputerWhy />
      <ComputerFAQ />
      <ComputerCTA />
    </main>
  );
}