import Image from "next/image";
import { WHATSAPP_URL } from "@/lib/whatsapp";
import Breadcrumb from "@/components/Breadcrumb";
import {
  ShieldCheck,
  Bug,
  ScanSearch,
  MessageCircle,
} from "lucide-react";

const benefits = [
  {
    Icon: ShieldCheck,
    text: "Veilige reiniging",
  },
  {
    Icon: Bug,
    text: "Malware verwijderen",
  },
  {
    Icon: ScanSearch,
    text: "Volledige controle",
  },
  {
    Icon: MessageCircle,
    text: "Persoonlijk advies",
  },
];

export default function VirusHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative z-20">
          <Breadcrumb current="Virus verwijderen" />

          <p className="mt-10 text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Virus verwijderen Breda
          </p>

          <h1 className="mt-6 max-w-3xl text-4xl font-extrabold leading-[1.12] tracking-tight text-slate-950 sm:text-5xl lg:text-[52px]">
            Last van een virus of malware?
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">
            AMR IT Solutions controleert en reinigt jouw computer of laptop van
            virussen, malware en ongewenste software. Daarna helpen we je om
            nieuwe problemen zoveel mogelijk te voorkomen.
          </p>

          <div className="mt-8 flex flex-wrap gap-5">
            <a
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-blue-600 px-8 py-5 font-bold text-white shadow-xl shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              <ShieldCheck className="h-5 w-5" />
              Computer laten controleren
            </a>

            <a
              href={WHATSAPP_URL}
              className="inline-flex items-center gap-3 rounded-2xl border-2 border-green-500 bg-white px-8 py-5 font-bold text-green-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <MessageCircle className="h-5 w-5" />
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
          <div className="absolute left-1/2 top-8 h-[340px] w-[340px] -translate-x-1/2 rounded-full bg-blue-100/70 lg:left-[20px] lg:top-[30px] lg:h-[540px] lg:w-[660px] lg:translate-x-0" />

          <div className="absolute right-10 top-12 z-10 hidden grid-cols-6 gap-5 opacity-50 lg:grid">
            {Array.from({ length: 24 }).map((_, index) => (
              <span
                key={index}
                className="h-2 w-2 rounded-full bg-blue-300"
              />
            ))}
          </div>

          <Image
            src="/images/virus-hero.png"
            alt="Virus en malware verwijderen in Breda"
            width={900}
            height={680}
            priority
            className="relative z-20 mx-auto w-full max-w-[560px] object-contain drop-shadow-[0_25px_60px_rgba(37,99,235,0.18)] transition duration-500 hover:scale-[1.02] lg:w-[110%] lg:max-w-none lg:-translate-x-6"
          />
        </div>
      </div>
    </section>
  );
}