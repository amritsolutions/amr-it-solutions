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
      <div className="mx-auto grid min-h-[760px] max-w-[1500px] items-center gap-10 px-8 py-20 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="relative z-20">
          <Breadcrumb current="Computerreparatie" />

          <p className="mt-10 text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Computerreparatie Breda
          </p>

          <h1 className="mt-6 max-w-[760px] text-4xl font-extrabold leading-[1.15] tracking-tight text-slate-950 sm:text-5xl lg:text-[56px]">
            Computer of laptop laten repareren in Breda?
          </h1>

          <p className="mt-7 max-w-[620px] text-lg leading-8 text-slate-600">
            AMR IT Solutions helpt particulieren en kleine bedrijven met snelle
            computerreparaties, laptopproblemen, Windows-installaties,
            virusverwijdering en hardware-upgrades.
          </p>

          <div className="mt-9 flex flex-wrap gap-6">
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

          <div className="mt-14 grid max-w-[640px] grid-cols-2 gap-8 sm:grid-cols-4">
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

        <div className="relative hidden min-h-[650px] lg:block">
          <div className="absolute -left-28 top-4 h-[680px] w-[920px] rounded-[44%_56%_52%_48%/42%_48%_52%_58%] bg-blue-100" />

          <div className="absolute -left-20 top-14 h-[620px] w-[870px] rounded-[55%_45%_58%_42%/45%_55%_45%_55%] bg-blue-200/40 blur-3xl" />

          <div className="absolute right-20 top-6 z-10 grid grid-cols-6 gap-5 opacity-70">
            {Array.from({ length: 36 }).map((_, i) => (
              <span key={i} className="h-2 w-2 rounded-full bg-blue-300" />
            ))}
          </div>

          <Image
            src="/images/computerrepair.png"
            alt="Computerreparatie laptop en pc"
            width={1150}
            height={850}
            className="relative z-20 mt-6 w-[108%] max-w-none -translate-x-6 translate-y-2 object-contain mix-blend-multiply drop-shadow-[0_35px_70px_rgba(15,23,42,0.16)] transition duration-500 hover:scale-[1.02]"
            priority
          />
        </div>
      </div>
    </section>
  );
}