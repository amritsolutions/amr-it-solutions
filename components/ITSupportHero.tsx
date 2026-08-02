import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Headphones,
  MapPin,
  MonitorSmartphone,
  ShieldCheck,
  Zap,
} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const benefits = [
  {
    Icon: Zap,
    title: "Snelle hulp",
    text: "We reageren snel en helpen je direct verder.",
  },
  {
    Icon: MapPin,
    title: "Breda & omgeving",
    text: "Altijd dichtbij en snel bij jou ter plaatse.",
  },
  {
    Icon: MonitorSmartphone,
    title: "Op locatie of afstand",
    text: "Bij jou thuis, op locatie of veilig op afstand.",
  },
  {
    Icon: ShieldCheck,
    title: "Betrouwbare ondersteuning",
    text: "Persoonlijke service en transparante afspraken.",
  },
];

export default function ITSupportHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-blue-50/80 to-white">
      {/* Achtergrondglows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-24 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/60 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-16 -z-10 h-[560px] w-[560px] rounded-full bg-blue-100/50 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-12 lg:px-8 lg:pb-24">
        <Breadcrumb current="IT Support Breda" />

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* Tekst */}
          <div className="relative z-20">
            <div className="inline-flex items-center gap-3">
              <span className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
                IT Support Breda
              </span>

              <span className="h-0.5 w-8 rounded-full bg-blue-600" />
            </div>

            <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[58px]">
              IT Support in{" "}
              <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                Breda
              </span>{" "}
              voor particulieren én bedrijven
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Problemen met je computer, laptop, wifi, printer of Microsoft
              365? AMR IT Solutions biedt snelle en persoonlijke IT Support in
              Breda en omgeving, op locatie of op afstand.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex min-h-[60px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-bold text-white shadow-[0_16px_38px_rgba(37,99,235,0.3)] transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-600 hover:shadow-[0_22px_48px_rgba(37,99,235,0.4)]"
              >
                <Headphones className="h-5 w-5" />
                IT Support aanvragen
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Neem contact op via WhatsApp"
                className="group inline-flex min-h-[60px] items-center justify-center gap-3 rounded-2xl border-2 border-green-500 bg-white px-8 py-4 font-bold text-green-600 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white hover:shadow-[0_18px_36px_rgba(34,197,94,0.18)]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp ons
              </a>
            </div>
          </div>

          {/* Afbeelding */}
          <div className="relative min-h-[390px] lg:min-h-[570px]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-100/90 via-blue-50 to-transparent lg:h-[540px] lg:w-[620px]"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/70 lg:h-[590px] lg:w-[680px]"
            />

            <div className="absolute right-6 top-4 z-10 hidden grid-cols-6 gap-5 opacity-70 lg:grid">
              {Array.from({ length: 24 }).map((_, index) => (
                <span
                  key={index}
                  className="h-2 w-2 rounded-full bg-blue-300"
                />
              ))}
            </div>

            <Image
              src="/images/it-support-breda.png"
              alt="IT Support in Breda door AMR IT Solutions"
              width={900}
              height={680}
              priority
              className="relative z-20 mx-auto mt-8 w-[95%] max-w-[590px] object-contain drop-shadow-[0_28px_60px_rgba(37,99,235,0.2)] transition duration-500 hover:scale-[1.025] lg:mt-0 lg:w-full lg:max-w-none"
            />
          </div>
        </div>

        {/* Voordelenbalk */}
        <div className="relative z-30 -mt-2 grid overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_24px_65px_rgba(15,23,42,0.08)] sm:grid-cols-2 lg:-mt-8 lg:grid-cols-4">
          {benefits.map(({ Icon, title, text }, index) => (
            <div
              key={title}
              className={`group px-7 py-8 text-center transition duration-300 hover:bg-blue-50/40 ${
                index > 0
                  ? "border-t border-slate-200/80 sm:border-l sm:border-t-0"
                  : ""
              } ${
                index === 2
                  ? "sm:border-l-0 sm:border-t lg:border-l lg:border-t-0"
                  : ""
              }`}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(37,99,235,0.25)]">
                <Icon className="h-7 w-7" />
              </div>

              <h2 className="mt-5 text-base font-bold text-slate-950">
                {title}
              </h2>

              <p className="mx-auto mt-2 max-w-[220px] text-sm leading-6 text-slate-600">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}