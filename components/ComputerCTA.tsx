import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  ShieldCheck,
  Zap,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function ComputerCTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[42px] bg-gradient-to-br from-blue-600 via-blue-600 to-slate-900 px-8 py-20 text-center text-white shadow-[0_35px_90px_rgba(37,99,235,0.35)] sm:px-12 lg:px-20">

          {/* Achtergrond */}
          <div className="absolute left-10 top-10 grid grid-cols-5 gap-3 opacity-30">
            {Array.from({ length: 20 }).map((_, i) => (
              <span key={i} className="h-2 w-2 rounded-full bg-white" />
            ))}
          </div>

          <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/10" />
          <div className="absolute -right-6 -top-6 h-40 w-40 rounded-full border border-white/10" />

          <div className="relative z-10">

            {/* Icon */}
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur">
              <Headphones className="h-8 w-8" />
            </div>

            <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.35em] text-blue-100">
              Direct hulp nodig?
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Hulp nodig met je{" "}
              <span className="text-blue-200">
                computer of laptop?
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-blue-100">
              Neem vandaag nog contact op met AMR IT Solutions.
              Wij helpen je snel met computerreparaties,
              Windows-problemen, wifi-storingen,
              Microsoft 365 en IT-support in Breda en omgeving.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                href="/#contact"
                className="group inline-flex min-h-[64px] items-center justify-center gap-3 rounded-2xl bg-white px-9 py-5 font-bold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Neem contact op

                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[64px] items-center justify-center gap-3 rounded-2xl border-2 border-white/60 px-9 py-5 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-green-500 hover:shadow-2xl"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp ons
              </a>
            </div>

            {/* Divider */}
            <div className="mx-auto mt-14 h-px max-w-3xl bg-white/15" />

            {/* USP's */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-10 text-sm font-semibold">

              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Zap className="h-5 w-5 text-blue-200" />
                </span>
                Snelle reactie
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <Headphones className="h-5 w-5 text-blue-200" />
                </span>
                Persoonlijke hulp
              </div>

              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <ShieldCheck className="h-5 w-5 text-blue-200" />
                </span>
                Geen verborgen kosten
              </div>

            </div>

            <p className="mt-8 text-sm text-blue-100">
              ✓ Vrijblijvend advies voor particulieren en bedrijven
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}