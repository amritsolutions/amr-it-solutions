import type { Metadata } from "next";
import ITSupportHero from "@/components/ITSupportHero";
import ITSupportServices from "@/components/ITSupportServices";
import ITSupportWhy from "@/components/ITSupportWhy";
import ITSupportFAQ from "@/components/ITSupportFAQ";

export const metadata: Metadata = {
  title: "IT Support Breda | Computerhulp aan huis & op afstand | AMR IT Solutions",
  description:
    "Professionele IT Support in Breda voor particulieren, zzp'ers en kleine bedrijven. Hulp bij computers, laptops, wifi, printers en Microsoft 365.",
};

export default function ITSupportBredaPage() {
  return (
    <main className="min-h-screen bg-white">
      <ITSupportHero />
      <ITSupportServices />
      <ITSupportWhy />
      <ITSupportFAQ />
    </main>
  );
}