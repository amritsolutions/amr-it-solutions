import type { Metadata } from "next";
import WindowsHero from "@/components/WindowsHero";
import WindowsServices from "@/components/WindowsServices";
import WindowsWhy from "@/components/WindowsWhy";

export const metadata: Metadata = {
  title:
    "Windows installeren Breda | Windows 11 & 10 | AMR IT Solutions",

  description:
    "Windows opnieuw laten installeren in Breda? AMR IT Solutions installeert Windows professioneel, inclusief drivers, updates en optimale instellingen.",

  alternates: {
    canonical: "https://www.amritsolutions.nl/windows-installeren",
  },

  openGraph: {
    title: "Windows installeren Breda | AMR IT Solutions",

    description:
      "Professionele Windows-installatie in Breda, inclusief drivers, updates en optimale instellingen.",

    url: "https://www.amritsolutions.nl/windows-installeren",

    images: [
      {
        url: "/images/windows-hero.png",
        width: 1200,
        height: 630,
        alt: "Windows installeren Breda",
      },
    ],
  },
};

export default function WindowsInstallerenPage() {
  return (
    <main className="min-h-screen bg-white">
      <WindowsHero />
      <WindowsServices />
       <WindowsWhy />
    </main>
  );
}