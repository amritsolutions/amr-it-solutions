import type { Metadata } from "next";
import LaptopHero from "@/components/LaptopHero";
import LaptopServices from "@/components/LaptopServices";
import LaptopWhy from "@/components/LaptopWhy";
export const metadata: Metadata = {
  title: "Laptop sneller maken Breda | SSD upgrade & optimalisatie | AMR IT Solutions",
  description:
    "Is je laptop traag? AMR IT Solutions maakt laptops weer snel met Windows-optimalisatie, SSD-upgrades, geheugenuitbreiding en onderhoud in Breda.",
  openGraph: {
    title: "Laptop sneller maken Breda",
    description:
      "Laat je laptop sneller maken door AMR IT Solutions in Breda.",
    url: "https://www.amritsolutions.nl/laptop-sneller-maken",
    images: [
      {
        url: "/images/laptop-sneller.png",
        width: 1200,
        height: 630,
        alt: "Laptop sneller maken Breda",
      },
    ],
  },
};
export default function LaptopSnellerMakenPage() {
  return (
    <main className="min-h-screen bg-white">
      <LaptopHero />
      <LaptopServices />
      <LaptopWhy />
    </main>
  );
}