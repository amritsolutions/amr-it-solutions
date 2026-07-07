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
      <div className="mx-auto grid min-h-[820px] max-w-7xl items-center gap-10 px-6 py-24 lg:grid-cols-[0.92fr_1.08fr]">
        <div className="relative z-20">
          <Breadcrumb current="Computerreparatie" />

          <p className="mt-10 text-sm font-extrabold uppercase tracking-[0.35em] text-blue-600">
            Computerreparatie Breda
          </p>

          <h1 className="mt-7 max-w-2xl text-5xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
            Computer of laptop laten repareren in Breda?
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Snelle en betrouwbare hulp bij computerproblemen,
            Windows-installaties, SSD-upgrades, virusverwijdering en meer.
          </p>

          <div className="mt-9 flex flex-wrap gap-5">
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 font-bold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-600/35"
            >
              <Phone className="h-5 w-5" />
              Vraag direct hulp aan
            </a>

            <a
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-2xl border-2 border-green-500 bg-white px-8 py-5 font-bold text-green-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              💬 WhatsApp ons
            </a>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4">
            {benefits.map(({ Icon, text }) => (
              <div key={text} className="text-center text-slate-800">
                <Icon className="mx-auto mb-3 h-10 w-10 text-blue-600" />
                <p className="whitespace-pre-line text-sm font-semibold leading-5">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[700px] lg:block">
          <div className="absolute left-[-40px] top-16 h-[610px] w-[780px] rounded-[45%_55%_48%_52%/42%_45%_55%_58%] bg-blue-100" />
          <div className="absolute left-8 top-20 h-[560px] w-[720px] rounded-[55%_45%_55%_45%/45%_55%_45%_55%] bg-blue-200/40 blur-3xl" />
          <div className="absolute right-[-10px] top-24 z-10 grid grid-cols-6 gap-5 opacity-70">
            {Array.from({ length: 36 }).map((_, i) => (
              <span key={i} className="h-2 w-2 rounded-full bg-blue-300" />
            ))}
          </div>

          <Image
            src="/images/computerrepair.png"
            alt="Computerreparatie laptop en pc"
            width={1000}
            height={760}
            className="relative z-20 mt-10 w-[122%] max-w-none -translate-x-10 object-contain mix-blend-multiply drop-shadow-[0_45px_90px_rgba(15,23,42,0.22)] transition duration-500 hover:scale-[1.03]"
            priority
          />
        </div>
      </div>
    </section>
  );
}