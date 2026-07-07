import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";
import { Zap, MapPin, Laptop, MessageCircle, Phone } from "lucide-react";

const benefits = [
  { Icon: Zap, text: "Snelle\nservice" },
  { Icon: MapPin, text: "Breda &\nomgeving" },
  { Icon: Laptop, text: "Laptop & PC\nreparatie" },
  { Icon: MessageCircle, text: "Persoonlijk\nadvies" },
];

export default function ComputerHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        {/* Linkerkant */}
        <div className="relative z-20">
          <Breadcrumb current="Computerreparatie" />

          <p className="mt-14 text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Computerreparatie Breda
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[52px]">
            Computer of laptop laten repareren in Breda?
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            AMR IT Solutions helpt particulieren en kleine bedrijven met snelle
            computerreparaties, laptopproblemen, Windows-installaties,
            virusverwijdering en hardware-upgrades.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 font-bold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              <Phone className="h-5 w-5" />
              Vraag direct hulp aan
            </a>

            <a
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-2xl border-2 border-green-500 bg-white px-8 py-5 font-bold text-green-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              🟢 WhatsApp ons
            </a>
          </div>

          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4">
            {benefits.map(({ Icon, text }) => (
              <div key={text} className="text-center text-slate-800">
                <Icon className="mx-auto mb-3 h-10 w-10 text-blue-600" />
                <p className="whitespace-pre-line text-sm font-medium leading-5">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Rechterkant */}
<div className="relative mt-4 min-h-[280px] lg:mt-0 lg:min-h-[610px]">

          {/* Grote subtiele achtergrond */}
          <div className="absolute left-1/2 top-8 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-blue-50 lg:left-auto lg:right-0 lg:top-10 lg:h-[520px] lg:w-[620px] lg:translate-x-0" />

          {/* Zachte gloed */}
          <div className="absolute right-16 top-32 h-[380px] w-[420px] rounded-full bg-blue-100/40 blur-3xl" />

          {/* Blauwe stipjes */}
          <div className="absolute right-10 top-12 z-10 grid grid-cols-6 gap-5 opacity-60">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className="h-2 w-2 rounded-full bg-blue-300" />
            ))}
          </div>

          {/* Afbeelding */}
          <Image
  src="/images/computerrepair.png"
  alt="Computerreparatie laptop en pc"
  width={900}
  height={680}
  priority
  className="relative z-20 mx-auto w-[90%] max-w-[520px] object-contain lg:w-full drop-shadow-[0_25px_50px_rgba(15,23,42,0.12)] transition duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}