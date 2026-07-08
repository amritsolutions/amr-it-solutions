import ComputerHero from "@/components/ComputerHero";
import ComputerServices from "@/components/ComputerServices";
import ComputerWhy from "@/components/ComputerWhy";
import ComputerFAQ from "@/components/ComputerFAQ";
import ComputerCTA from "@/components/ComputerCTA";

export const metadata = {
  title:
    "Computerreparatie Breda | Laptop & PC Reparatie | AMR IT Solutions",

  description:
    "Computer of laptop laten repareren in Breda? AMR IT Solutions helpt met computerreparatie, Windows-installaties, SSD-upgrades, virusverwijdering, dataherstel en IT-support.",

  keywords: [
    "computerreparatie Breda",
    "laptop reparatie Breda",
    "pc reparatie Breda",
    "Windows installeren Breda",
    "virus verwijderen Breda",
    "SSD upgrade Breda",
    "computer hulp Breda",
    "AMR IT Solutions",
  ],

  alternates: {
    canonical: "https://www.amritsolutions.nl/computerreparatie",
  },

  openGraph: {
    title: "Computerreparatie Breda | AMR IT Solutions",

    description:
      "Snelle computer- en laptopreparatie in Breda. Windows-installaties, SSD-upgrades, virusverwijdering en persoonlijk advies.",

    url: "https://www.amritsolutions.nl/computerreparatie",

    images: [
      {
        url: "/images/computerrepair.png",
        width: 1200,
        height: 630,
        alt: "Computerreparatie Breda",
      },
    ],
  },
};
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "AMR IT Solutions",
  url: "https://www.amritsolutions.nl/computerreparatie",
  image: "https://www.amritsolutions.nl/images/computerrepair.png",
  description:
    "Computerreparatie, laptopreparatie, Windows-installaties, virusverwijdering en IT-support in Breda en omgeving.",
  areaServed: {
    "@type": "City",
    name: "Breda",
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Breda",
    addressCountry: "NL",
  },
  serviceType: [
    "Computerreparatie",
    "Laptop reparatie",
    "Windows installeren",
    "Virus verwijderen",
    "SSD upgrade",
    "IT Support",
  ],
};
export default function ComputerReparatiePage() {
  return (
    <main className="min-h-screen bg-white">
      <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify(structuredData),
  }}
/>
      <ComputerHero />
      <ComputerServices />
      <ComputerWhy />
      <ComputerFAQ />
      <ComputerCTA />
    </main>
  );
}