import type { Metadata } from "next";
import ComputerUpgradeHero from "@/components/ComputerUpgradeHero";

export const metadata: Metadata = {
  title: "Computer Upgrade & Reparatie Breda | AMR IT Solutions",
  description:
    "Computer of laptop traag? AMR IT Solutions helpt met SSD upgrades, RAM-uitbreidingen, virusverwijdering en computerreparaties in Breda.",
};

export default function ComputerUpgradePage() {
  return (
    <main className="min-h-screen bg-white">
      <ComputerUpgradeHero />
    </main>
  );
}