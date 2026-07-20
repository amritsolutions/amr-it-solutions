import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  HardDrive,
  MemoryStick,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
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
              aria-label="Neem contact op via WhatsApp"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-green-500 bg-white px-7 py-4 font-bold text-green-600 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-500 hover:text-white hover:shadow-xl"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 text-sm font-medium text-slate-500">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Persoonlijke service en duidelijke communicatie
          </div>
        </div>

        <div className="relative mt-10 min-h-[280px] lg:mt-0 lg:min-h-[610px]">
  <div className="absolute left-1/2 top-8 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-blue-50 lg:left-auto lg:right-0 lg:top-10 lg:h-[520px] lg:w-[620px] lg:translate-x-0" />

  <Image
    src="/images/upgrade-reparatie.png"
    alt="Computer upgrade en reparatie door AMR IT Solutions"
    width={900}
    height={680}
    priority
    className="relative z-20 mx-auto w-[90%] max-w-[520px] object-contain drop-shadow-[0_25px_50px_rgba(15,23,42,0.12)] transition duration-500 hover:scale-[1.02] lg:w-full lg:max-w-none"
  />
</div>
        </div>
      </div>
    </section>
  );
}