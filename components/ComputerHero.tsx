import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Laptop,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Zap,
} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const benefits = [
  {
    Icon: Zap,
    title: "Snelle service",
    text: "We reageren snel en helpen je zo snel mogelijk verder.",
  },
  {
    Icon: MapPin,
    title: "Breda & omgeving",
    text: "Computerhulp bij jou thuis, op locatie of op afstand.",
  },
  {
    Icon: Laptop,
    title: "Laptop & pc-reparatie",
    text: "Hulp bij hardware, Windows en verschillende computerproblemen.",
  },
  {
    Icon: MessageCircle,
    title: "Persoonlijk advies",
    text: "Duidelijke uitleg en eerlijk advies zonder ingewikkelde IT-taal.",
  },
];

export default function ComputerHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-blue-50/70 to-white">
      {/* Achtergrondglows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-44 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/55 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-16 -z-10 h-[580px] w-[580px] rounded-full bg-blue-100/45 blur-[120px]"
      />

      <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-10 lg:px-10 xl:px-12">
        <Breadcrumb current="Computerreparatie" />

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-10">
          {/* Linkerkant */}
          <div className="relative z-20">
            <div className="inline-flex items-center gap-4">
              <span className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
                Computerreparatie Breda
              </span>

              <span className="h-0.5 w-8 rounded-full bg-blue-600" />
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.06] tracking-tight text-slate-950 sm:text-5xl lg:text-[56px] xl:text-[60px]">
              <span className="block lg:whitespace-nowrap">
                Computer of laptop
              </span>

              <span className="block">
                laten repareren in{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  Breda?
                </span>
              </span>
            </h1>

            <p className="mt-7 max-w-[630px] text-base leading-8 text-slate-600 sm:text-lg">
              AMR IT Solutions helpt particulieren en kleine bedrijven met
              snelle computerreparaties, laptopproblemen,
              Windows-installaties, virusverwijdering en hardware-upgrades.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex min-h-[62px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-bold text-white shadow-[0_18px_42px_rgba(37,99,235,0.32)] transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-600 hover:shadow-[0_24px_52px_rgba(37,99,235,0.42)]"
              >
                <Phone className="h-5 w-5" />
                Vraag direct hulp aan
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Neem contact op via WhatsApp"
                className="group inline-flex min-h-[62px] items-center justify-center gap-3 rounded-2xl border-2 border-green-500 bg-white px-8 py-4 font-bold text-green-600 transition-all duration-300 hover:-translate-y-1 hover:bg-green-500 hover:text-white hover:shadow-[0_18px_36px_rgba(34,197,94,0.18)]"
              >
                <WhatsAppIcon className="h-5 w-5" />
                WhatsApp ons
              </a>
            </div>
          </div>

          {/* Rechterkant */}
          <div className="relative min-h-[420px] lg:min-h-[560px]">
            {/* Blauwe achtergrondcirkel */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-100 via-blue-50 to-transparent lg:h-[520px] lg:w-[600px]"
            />

            {/* Buitenste cirkel */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/80 lg:h-[570px] lg:w-[650px]"
            />

            {/* Extra zachte cirkel */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/70 lg:h-[620px] lg:w-[700px]"
            />

            {/* Decoratieve stippen */}
            <div
              aria-hidden="true"
              className="absolute right-8 top-4 z-10 hidden grid-cols-6 gap-5 opacity-70 lg:grid"
            >
              {Array.from({ length: 24 }).map((_, index) => (
                <span
                  key={index}
                  className="h-2 w-2 rounded-full bg-blue-300"
                />
              ))}
            </div>

            <Image
              src="/images/computerrepair.png"
              alt="Computer- en laptopreparatie in Breda door AMR IT Solutions"
              width={1000}
              height={760}
              priority
              className="absolute left-1/2 top-1/2 z-20 w-[96%] max-w-[680px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_32px_68px_rgba(37,99,235,0.22)] transition duration-500 hover:scale-[1.02] lg:w-[104%]"
            />
          </div>
        </div>

        {/* Voordelenbalk */}
        <div className="relative z-30 mt-10 grid overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.09)] sm:grid-cols-2 lg:mt-6 lg:grid-cols-4">
          {benefits.map(({ Icon, title, text }, index) => (
            <div
              key={title}
              className={`group px-7 py-8 text-center transition duration-300 hover:bg-blue-50/45 ${
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

              <p className="mx-auto mt-2 max-w-[225px] text-sm leading-6 text-slate-600">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Kleine vertrouwensregel */}
        <div className="mt-6 flex items-center justify-center gap-2 text-sm font-medium text-slate-500">
          <ShieldCheck className="h-4 w-4 text-blue-600" />
          <span>
            Vrijblijvend advies voor particulieren en kleine bedrijven
          </span>
        </div>
      </div>
    </section>
  );
}