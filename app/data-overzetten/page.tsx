import type { Metadata } from "next";
import DataHero from "@/components/DataHero";
import DataServices from "@/components/DataServices";
import DataWhy from "@/components/DataWhy";
import DataFAQ from "@/components/DataFAQ";

export const metadata: Metadata = {
  title:
    "Data overzetten Breda | Bestanden & back-up | AMR IT Solutions",
  description:
    "Bestanden, foto's en documenten veilig overzetten naar een nieuwe computer? AMR IT Solutions helpt met dataoverdracht en back-ups in Breda.",
  alternates: {
    canonical: "https://www.amritsolutions.nl/data-overzetten",
  },
  openGraph: {
    title: "Data overzetten Breda | AMR IT Solutions",
    description:
      "Veilig bestanden, foto's en documenten overzetten of een back-up maken in Breda.",
    url: "https://www.amritsolutions.nl/data-overzetten",
    images: [
      {
        url: "/images/data-hero.png",
        width: 1200,
        height: 630,
        alt: "Data overzetten en back-up in Breda",
      },
    ],
  },
};

export default function DataOverzettenPage() {
  return (
    <main className="min-h-screen bg-white">
      <DataHero />
      <DataServices />
       <DataWhy />
       <DataFAQ />
    </main>
  );
}