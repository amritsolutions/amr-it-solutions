import type { Metadata } from "next";
import PrinterHero from "@/components/PrinterHero";
import PrinterServices from "@/components/PrinterServices";
import PrinterWhy from "@/components/PrinterWhy";
import PrinterFAQ from "@/components/PrinterFAQ";
import PrinterCTA from "@/components/PrinterCTA";

export const metadata: Metadata = {
  title: "Printer & WiFi hulp Breda | Netwerkproblemen oplossen | AMR IT Solutions",
  description:
    "Hulp bij printer installeren, WiFi-problemen en netwerkverbindingen in Breda. AMR IT Solutions helpt particulieren en kleine bedrijven.",
  alternates: {
    canonical: "https://www.amritsolutions.nl/printer-wifi-netwerk",
  },
  openGraph: {
    title: "Printer & WiFi hulp Breda | AMR IT Solutions",
    description:
      "Professionele hulp bij printers, WiFi en netwerken in Breda.",
    url: "https://www.amritsolutions.nl/printer-wifi-netwerk",
    images: [
      {
        url: "/images/printer-hero.png",
        width: 1200,
        height: 630,
        alt: "Printer en WiFi hulp Breda",
      },
    ],
  },
};

export default function PrinterWifiPage() {
  return (
    <main className="min-h-screen bg-white">
      <PrinterHero />
      <PrinterServices />
      <PrinterWhy />
      <PrinterFAQ />
      <PrinterCTA />
    </main>
  );
}