import Link from "next/link";
import { ArrowRight, MonitorDown } from "lucide-react";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function WindowsCTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 px-8 py-16 text-center text-white shadow-[0_30px_80px_rgba(37,99,235,0.30)] sm:px-12 lg:px-20 lg:py-20">
          {/* Achtergrond glows */}
          <div
            aria-hidden="true"
            className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl"
          />

          <div className="relative z-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-100">
              COMPUTER PROBLEMEN?
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
              Laat Windows professioneel installeren
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
              Wij installeren Windows 10 of Windows 11 volledig opnieuw,
              inclusief drivers, updates en optimale instellingen zodat jouw
              computer weer snel, veilig en betrouwbaar werkt.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                <MonitorDown className="h-5 w-5" />
                Windows laten installeren

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Neem contact op via WhatsApp"
                className="group inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-white/80 px-8 py-5 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-500 hover:shadow-2xl"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp ons
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}