import ComputerHero from "@/components/ComputerHero";
import ComputerServices from "@/components/ComputerServices";
import ComputerWhy from "@/components/ComputerWhy";

export const metadata = {
  title: "Computerreparatie Breda | Laptop & PC Reparatie | AMR IT Solutions",
  description:
    "Computer of laptop laten repareren in Breda? AMR IT Solutions helpt met computerreparatie, Windows-installaties, SSD-upgrades, virusverwijdering en IT-support voor particulieren en bedrijven.",
};

export default function ComputerReparatiePage() {
  return (
    <main className="min-h-screen bg-white">
      <ComputerHero />
      <ComputerServices />
      <ComputerWhy />
    </main>
  );
}