import {
  ArrowRight,
  FolderSync,
  HardDrive,
  ShieldCheck,
  ImageIcon,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function DataCTA() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900 px-8 py-16 text-center text-white shadow-[0_35px_90px_rgba(37,99,235,0.28)] sm:px-12 lg:px-20 lg:py-20">

          {/* Glow links */}
          <div
            aria-hidden="true"
            className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl"
          />

          {/* Glow rechts */}
          <div
            aria-hidden="true"
            className="absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-blue-900/40 blur-3xl"
          />

          {/* Decoratieve cirkels */}
          <div
            aria-hidden="true"
            className="absolute -right-8 -top-8 h-52 w-52 rounded-full border border-white/10"
          />

          <div
            aria-hidden="true"
            className="absolute right-6 top-6 h-36 w-36 rounded-full border border-white/10"
          />

          {/* Stippen */}
          <div
            aria-hidden="true"
            className="absolute left-10 top-10 grid grid-cols-5 gap-3 opacity-30"
          >
            {Array.from({ length: 20 }).map((_, index) => (
              <span
                key={index}
                className="h-2 w-2 rounded-full bg-white"
              />
            ))}
          </div>

          <div className="relative z-10">

            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 backdrop-blur">
              <HardDrive className="h-8 w-8" />
            </div>

            <p className="mt-8 text-sm font-extrabold uppercase tracking-[0.35em] text-blue-100">
              NIEUWE COMPUTER GEKOCHT?
            </p>

            <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Zet jouw bestanden{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">
                veilig over
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
              Wij zetten documenten, foto's, video's, Outlook,
              instellingen en andere belangrijke gegevens veilig over naar
              jouw nieuwe computer en zorgen voor een betrouwbare back-up.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-9 py-5 font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
              >
                Data laten overzetten
                <ArrowRight className="h-5 w-5" />
              </a>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-white/50 px-9 py-5 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-green-400 hover:bg-green-500 hover:shadow-2xl"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp ons
              </a>

            </div>

            <div className="mx-auto mt-12 h-px max-w-3xl bg-white/15" />

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-5">

              <div className="flex items-center gap-3 font-semibold">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <FolderSync className="h-5 w-5 text-blue-200" />
                </span>
                Nieuwe pc instellen
              </div>

              <div className="flex items-center gap-3 font-semibold">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <ImageIcon className="h-5 w-5 text-blue-200" />
                </span>
                Foto's & documenten
              </div>

              <div className="flex items-center gap-3 font-semibold">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                  <ShieldCheck className="h-5 w-5 text-blue-200" />
                </span>
                Veilige back-up
              </div>

            </div>

            <p className="mt-8 text-blue-100">
              ✓ Veilige dataoverdracht voor particulieren, zzp'ers en bedrijven in Breda
            </p>

          </div>
        </div>
      </div>
    </section>
  );
}