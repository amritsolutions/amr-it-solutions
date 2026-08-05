import Link from "next/link";
import {
  ArrowRight,
  Bug,
  Check,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const trustItems = [
  {
    Icon: ScanSearch,
    text: "Volledige controle",
  },
  {
    Icon: Bug,
    text: "Malware verwijderen",
  },
  {
    Icon: ShieldCheck,
    text: "Veilig ingesteld",
  },
];

export default function VirusCTA() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-24 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-blue-100/45 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-cyan-100/35 blur-[120px]"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative isolate overflow-hidden rounded-[40px] border border-blue-400/20 bg-gradient-to-br from-blue-600 via-blue-700 to-slate-950 px-8 py-14 text-center text-white shadow-[0_35px_90px_rgba(37,99,235,0.3)] sm:px-12 sm:py-16 lg:px-20 lg:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-20 -z-10 h-80 w-80 rounded-full bg-cyan-400/20 blur-[90px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-28 -right-20 -z-10 h-96 w-96 rounded-full bg-blue-300/20 blur-[110px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-2 -top-8 h-44 w-44 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-10 top-10 hidden grid-cols-5 gap-3 opacity-30 lg:grid"
          >
            {Array.from({ length: 20 }).map((_, index) => (
              <span
                key={index}
                className="h-1.5 w-1.5 rounded-full bg-white"
              />
            ))}
          </div>

          <div className="relative z-10">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white shadow-[0_14px_35px_rgba(59,130,246,0.28)] backdrop-blur-sm">
              <ShieldCheck className="h-8 w-8" />
            </div>

            <p className="mt-7 text-sm font-extrabold uppercase tracking-[0.3em] text-blue-100">
              Vermoeden van een virus?
            </p>

            <h2 className="mx-auto mt-5 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-[54px]">
              Laat je computer{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-200 bg-clip-text text-transparent">
                veilig controleren
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-blue-100 sm:text-lg">
              Wij controleren jouw laptop of computer op virussen, malware en
              ongewenste software en zorgen dat je systeem weer veilig, stabiel
              en snel werkt.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex min-h-[62px] items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 shadow-[0_16px_38px_rgba(15,23,42,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-[0_22px_48px_rgba(15,23,42,0.28)]"
              >
                Computer laten controleren

                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Neem contact op via WhatsApp"
                className="group inline-flex min-h-[62px] items-center justify-center gap-3 rounded-2xl border-2 border-white/60 bg-white/[0.04] px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-green-500 hover:shadow-[0_20px_45px_rgba(15,23,42,0.25)]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp ons
              </a>
            </div>

            <div className="mx-auto mt-10 grid max-w-3xl gap-4 border-t border-white/15 pt-8 sm:grid-cols-3">
              {trustItems.map(({ Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center justify-center gap-3 text-sm font-semibold text-blue-100"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-blue-100 ring-1 ring-white/10">
                    <Icon className="h-4 w-4" />
                  </span>

                  <span>{text}</span>
                </div>
              ))}
            </div>

            <div className="mt-7 flex items-center justify-center gap-2 text-sm text-blue-100">
              <Check className="h-4 w-4" />
              <span>
                Vrijblijvend advies voor particulieren en bedrijven
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}