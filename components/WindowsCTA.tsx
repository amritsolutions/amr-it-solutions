import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import { MonitorDown } from "lucide-react";

export default function WindowsCTA() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 px-10 py-20 text-center text-white shadow-[0_30px_80px_rgba(37,99,235,0.35)]">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-100">
          COMPUTER PROBLEMEN?
        </p>

        <h2 className="mt-4 text-4xl font-extrabold lg:text-5xl">
          Laat Windows professioneel installeren
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Wij installeren Windows 10 of Windows 11 volledig opnieuw,
          inclusief drivers, updates en optimale instellingen zodat jouw
          computer weer snel en betrouwbaar werkt.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <MonitorDown className="h-5 w-5" />
            Windows laten installeren
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Neem contact op via WhatsApp"
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-500 hover:shadow-xl"
          >
            <WhatsAppIcon className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}