import type { Metadata } from "next";
import VirusServices from "@/components/VirusServices";
import VirusHero from "@/components/VirusHero";
import VirusWhy from "@/components/VirusWhy";
import VirusFAQ from "@/components/VirusFAQ";
import VirusCTA from "@/components/VirusCTA";

export const metadata: Metadata = {
  title:
    "Virus verwijderen Breda | Malware verwijderen | AMR IT Solutions",
  description:
    "Virus of malware verwijderen in Breda? AMR IT Solutions controleert en reinigt computers en laptops van virussen, malware en ongewenste software.",
  alternates: {
    canonical: "https://www.amritsolutions.nl/virus-verwijderen",
  },
  openGraph: {
    title: "Virus verwijderen Breda | AMR IT Solutions",
    description:
      "Professionele controle en verwijdering van virussen, malware en ongewenste software in Breda.",
    url: "https://www.amritsolutions.nl/virus-verwijderen",
    images: [
      {
        url: "/images/virus-hero.png",
        width: 1200,
        height: 630,
        alt: "Virus en malware verwijderen in Breda",
      },
    ],
  },
};

export default function VirusVerwijderenPage() {
  return (
    <main className="min-h-screen bg-white">
      <VirusHero />
      <VirusServices />
        <VirusWhy />
         <VirusFAQ />
          <VirusCTA />
    </main>
  );
}