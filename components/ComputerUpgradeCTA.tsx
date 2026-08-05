import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { HardDrive } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function ComputerUpgradeCTA() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-16 text-center text-white shadow-2xl">
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-100">
          COMPUTER UPGRADEN OF REPAREREN?
        </p>

        <h2 className="mt-4 text-4xl font-extrabold">
          Geef je computer een tweede leven
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Wij helpen met SSD-upgrades, RAM-uitbreidingen, Windows-herinstallaties,
          virusverwijdering en computerreparaties. Zo werkt jouw computer weer
          snel, stabiel en betrouwbaar.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:shadow-xl"
          >
            <HardDrive className="h-5 w-5" />
            Offerte aanvragen
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Neem contact op via WhatsApp"
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-white px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:border-green-500 hover:bg-green-500 hover:shadow-xl"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}