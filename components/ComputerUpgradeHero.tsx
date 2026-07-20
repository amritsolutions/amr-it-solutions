import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HardDrive,
  MemoryStick,
  ShieldCheck,
  Wrench,
  MessageCircle,
} from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const benefits = [
  {
    Icon: HardDrive,
    text: "SSD upgrades",
  },
  {
    Icon: MemoryStick,
    text: "RAM-geheugen uitbreiden",
  },
  {
    Icon: ShieldCheck,
    text: "Virusverwijdering",
  },
  {
    Icon: Wrench,
    text: "Windows-herinstallatie",
  },
];

export default function ComputerUpgradeHero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 pb-24 pt-16 sm:pt-20 lg:pb-28 lg:pt-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-blue-50 to-white" />

      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <nav
            aria-label="Breadcrumb"
            className="mb-7 flex items-center gap-2 text-sm font-medium text-slate-500"
          >
            <Link href="/" className="transition hover:text-blue-600">
              Home
            </Link>

            <span>/</span>

            <span className="text-slate-900">
              Computer Upgrade & Reparatie
            </span>
          </nav>

          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Sneller, stabieler en betrouwbaar
          </p>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Computer Upgrade & Reparatie in Breda
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Is je computer of laptop traag, instabiel of defect? AMR IT
            Solutions helpt met professionele upgrades, onderhoud en reparaties
            voor particulieren en kleine bedrijven in Breda en omgeving.
          </p>

          <div className="mt-9 grid gap-4 sm:grid-cols-2">
            {benefits.map(({ Icon, text }) => (
              <div
                key={text}
                className="flex items-center gap-3 text-base font-semibold text-slate-800"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Icon className="h-5 w-5" />
                </span>

                <span>{text}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              Offerte aanvragen
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border border-slate-300 bg-white px-7 py-4 font-bold text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:text-blue-600 hover:shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm font-medium text-slate-500">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Persoonlijke service en duidelijke communicatie
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-blue-100/60 blur-3xl" />

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 shadow-2xl">
            <Image
              src="/images/upgrade-reparatie.png"
              alt="Computer upgrade en reparatie door AMR IT Solutions"
              width={900}
              height={700}
              priority
              className="h-auto w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}