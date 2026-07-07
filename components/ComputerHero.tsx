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
        <div className="relative z-20">
          <Breadcrumb current="Computerreparatie" />

          <p className="mt-10 text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
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
              className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 font-bold text-white shadow-xl shadow-blue-600/30 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              <Phone className="h-5 w-5" />
              Vraag direct hulp aan
            </a>

            <a
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-2xl border-2 border-green-500 bg-white px-8 py-5 font-bold text-green-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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

        <div className="relative hidden min-h-[610px] lg:block">
          <div className="absolute left-[-70px] top-[20px] h-[600px] w-[760px] rounded-[48%_52%_45%_55%/42%_48%_52%_58%] bg-blue-100" />
          <div className="absolute left-[-35px] top-[80px] h-[520px] w-[700px] rounded-[55%_45%_58%_42%/45%_55%_45%_55%] bg-blue-200/40 blur-3xl" />

          <div className="absolute right-8 top-10 z-10 grid grid-cols-6 gap-5 opacity-70">
            {Array.from({ length: 36 }).map((_, i) => (
              <span key={i} className="h-2 w-2 rounded-full bg-blue-300" />
            ))}
          </div>

          <Image
            src="/images/computerrepair.png"
            alt="Computerreparatie laptop en pc"
            width={900}
            height={680}
            className="relative z-20 mt-10 w-full translate-x-4 translate-y-2 object-contain mix-blend-multiply drop-shadow-[0_35px_70px_rgba(15,23,42,0.16)] transition duration-500 hover:scale-[1.02]"
            priority
          />
        </div>
      </div>
    </section>
  );
}