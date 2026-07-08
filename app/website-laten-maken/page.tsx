import WebsiteHero from "@/components/WebsiteHero";
import WebsiteServices from "@/components/WebsiteServices";
import WebsiteWhy from "@/components/WebsiteWhy";
import WebsiteFAQ from "@/components/WebsiteFAQ";

export const metadata = {
  title: "Website laten maken Breda | Moderne websites | AMR IT Solutions",
  description:
    "Website laten maken in Breda? AMR IT Solutions bouwt moderne, snelle en responsive websites voor zzp'ers, starters en kleine bedrijven.",
};

export default function WebsiteLatenMakenPage() {
  return (
    <main className="min-h-screen bg-white">
      <WebsiteHero />
      <WebsiteServices />
      <WebsiteWhy />
      <WebsiteFAQ />
    </main>
  );
}