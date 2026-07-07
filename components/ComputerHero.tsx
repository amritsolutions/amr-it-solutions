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
      <div className="mx-auto grid min-h-[760px] max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative z-10">
          <Breadcrumb current="Computerreparatie" />

          <p className="mt-10 text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Computerreparatie Breda
          </p>

          <h1 className="mt-7 max-w-2xl text-5xl font-extrabold leading-[1.12] tracking-tight text-slate-950 lg:text-7xl">
            Computer of laptop laten repareren in Breda?
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
            Snelle en betrouwbare hulp bij computerproblemen,
            Windows-installaties, SSD-upgrades, virusverwijdering en meer.
          </p>

          <div className="mt-9 flex flex-wrap gap-6">
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 font-bold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              <Phone className="h-5 w-5" />
              Vraag direct hulp aan
            </a>

            <a
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-2xl border-2 border-green-500 bg-white px-8 py-5 font-bold text-green-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              💬 WhatsApp ons
            </a>
          </div>

          <div className="mt-14 grid max-w-2xl grid-cols-2 gap-8 sm:grid-cols-4">
            {benefits.map(({ Icon, text }) => (
              <div key={text} className="text-center text-slate-800">
                <Icon className="mx-auto mb-3 h-9 w-9 text-blue-600" />
                <p className="whitespace-pre-line text-sm font-medium leading-5">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden min-h-[620px] lg:block">
          <div className="absolute left-0 top-8 h-[570px] w-[720px] rounded-[45%_55%_50%_50%] bg-blue-100" />
          <div className="absolute right-8 top-16 grid grid-cols-6 gap-5 opacity-70">
            {Array.from({ length: 36 }).map((_, i) => (
              <span key={i} className="h-2 w-2 rounded-full bg-blue-300" />
            ))}
          </div>

          <Image
            src="/images/computerrepair.png"
            alt="Computerreparatie laptop en pc"
            width={900}
            height={700}
            className="relative z-10 mt-20 w-full scale-110 rounded-[2rem] object-contain mix-blend-multiply drop-shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}