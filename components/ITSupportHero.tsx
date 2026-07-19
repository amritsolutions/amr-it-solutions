import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import Image from "next/image";
import Link from "next/link";
import {
  Headphones,
  MapPin,
  MonitorSmartphone,
  ShieldCheck,
} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";
import { WHATSAPP_URL } from "@/lib/whatsapp";

const benefits = [
  {
    Icon: Headphones,
    text: "Snelle ondersteuning",
  },
  {
    Icon: MapPin,
    text: "Breda & omgeving",
  },
  {
    Icon: MonitorSmartphone,
    text: "Op locatie of afstand",
  },
  {
    Icon: ShieldCheck,
    text: "Betrouwbare hulp",
  },
];

export default function ITSupportHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-20">
          <Breadcrumb current="IT Support Breda" />

          <p className="mt-10 text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            IT Support Breda
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[52px]">
            IT Support in Breda voor particulieren én bedrijven
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            Problemen met je computer, laptop, wifi, printer of Microsoft 365?
            AMR IT Solutions biedt snelle en persoonlijke IT Support in Breda
            en omgeving, op locatie of op afstand.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 font-bold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              <Headphones className="h-5 w-5" />
              IT Support aanvragen
            </Link>

            <a
  href={WHATSAPP_URL}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Neem contact op via WhatsApp"
  className="inline-flex items-center gap-3 rounded-2xl border-2 border-green-500 bg-white px-8 py-5 font-bold text-green-600 transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:bg-green-500 hover:text-white hover:shadow-xl"
>
  <WhatsAppIcon className="h-5 w-5" />
  WhatsApp ons
</a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4">
            {benefits.map(({ Icon, text }) => (
              <div key={text} className="text-center text-slate-800">
                <Icon className="mx-auto mb-3 h-10 w-10 text-blue-600" />
                <p className="text-sm font-medium leading-5">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mt-10 min-h-[280px] lg:mt-0 lg:min-h-[610px]">
          <div className="absolute left-1/2 top-8 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-blue-50 lg:left-auto lg:right-0 lg:top-10 lg:h-[520px] lg:w-[620px] lg:translate-x-0" />

          <div className="absolute right-10 top-12 z-10 hidden grid-cols-6 gap-5 opacity-60 lg:grid">
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
            className="relative z-20 mx-auto w-[90%] max-w-[520px] object-contain drop-shadow-[0_25px_50px_rgba(15,23,42,0.12)] transition duration-500 hover:scale-[1.02] lg:w-full lg:max-w-none"
          />
        </div>
      </div>
    </section>
  );
}