import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Globe,
  HardDrive,
  Laptop,
  Monitor,
  Printer,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Service = {
  icon: LucideIcon;
  title: string;
  text: string;
  link: string;
};

const services: Service[] = [
  {
    icon: Laptop,
    title: "IT Support Breda",
    text: "Snelle hulp bij computerproblemen, software, e-mail, accounts en dagelijks IT-gebruik voor particulieren en kleine bedrijven in Breda en omgeving.",
    link: "/it-support-breda",
  },
  {
    icon: Monitor,
    title: "Computerreparatie & Windows",
    text: "Windows installeren, opnieuw installeren, herstellen en computers gebruiksklaar maken. Ook hulp bij foutmeldingen, updates en trage systemen.",
    link: "/computerreparatie",
  },
  {
    icon: Zap,
    title: "Laptop sneller maken",
    text: "Trage laptops opschonen, optimaliseren en verbeteren met slimme instellingen, softwarecontrole en advies over SSD- of geheugenupgrades.",
    link: "/laptop-sneller-maken",
  },
  {
    icon: Printer,
    title: "Printer, WiFi & netwerk",
    text: "Hulp bij printers installeren, WiFi-problemen oplossen, netwerkverbindingen verbeteren en apparaten opnieuw verbinden.",
    link: "/printer-wifi-netwerk",
  },
  {
    icon: Globe,
    title: "Website laten maken",
    text: "Moderne, snelle en mobiele websites voor zzp’ers, kleine bedrijven en portfolio’s. Inclusief domein, hostingadvies en basis-SEO.",
    link: "/website-laten-maken",
  },
  {
    icon: Cloud,
    title: "Microsoft 365 hulp",
    text: "Ondersteuning bij Outlook, OneDrive, Teams, Exchange, e-mailinstellingen en Microsoft 365 voor particulieren en bedrijven.",
    link: "/microsoft-365",
  },
  {
    icon: HardDrive,
    title: "Data overzetten & back-up",
    text: "Bestanden, foto’s, documenten, e-mail en instellingen veilig overzetten naar een nieuwe computer of een betrouwbare back-up maken.",
    link: "/data-overzetten",
  },
];

export default function Services() {
  return (
    <section
      id="diensten"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Subtiele achtergronddecoratie */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 -z-10 grid grid-cols-6 gap-3 opacity-40"
      >
        {Array.from({ length: 24 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-blue-300"
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Intro */}
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Diensten
          </div>

          <h2 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            IT support, computerreparatie en websites{" "}
            <span className="text-blue-600">in Breda</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            AMR IT Solutions helpt particulieren, studenten, zzp’ers en kleine
            bedrijven met praktische IT-oplossingen. Van trage laptops en
            WiFi-problemen tot Microsoft 365 en professionele websites.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-slate-700">
            {[
              "Persoonlijke service",
              "Snelle ondersteuning",
              "Transparante tarieven",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                  ✓
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Dienstenkaarten */}
        <div className="mt-14 grid items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLast = index === services.length - 1;

            return (
              <article
                key={service.title}
                className={[
                  "group relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-[26px]",
                  "border border-slate-200/90 bg-white p-7",
                  "shadow-[0_12px_40px_rgba(15,23,42,0.06)]",
                  "transition-all duration-300 ease-out",
                  "before:absolute before:inset-x-0 before:top-0 before:h-[3px]",
                  "before:bg-gradient-to-r before:from-blue-500 before:via-blue-600 before:to-cyan-400",
                  "hover:-translate-y-2 hover:border-blue-200",
                  "hover:shadow-[0_24px_60px_rgba(37,99,235,0.16)]",
                  isLast ? "md:col-span-2 md:mx-auto md:w-1/2 lg:col-span-1 lg:col-start-2 lg:w-full" : "",
                ].join(" ")}
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 ring-1 ring-blue-100 transition duration-300 group-hover:scale-110 group-hover:shadow-[0_10px_30px_rgba(37,99,235,0.22)]">
                    <Icon
                      aria-hidden="true"
                      className="h-8 w-8 text-blue-600 transition-transform duration-300 group-hover:rotate-[-3deg]"
                      strokeWidth={2}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold leading-snug text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {service.text}
                    </p>
                  </div>
                </div>

                <Link
                  href={service.link}
                  aria-label={`Meer informatie over ${service.title}`}
                  className="mt-auto flex items-center justify-between pt-7 text-sm font-bold text-blue-600"
                >
                  <span className="transition-colors group-hover:text-blue-700">
                    Meer informatie
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg">
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </article>
            );
          })}
        </div>

        {/* Onderste CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(37,99,235,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_20px_45px_rgba(37,99,235,0.38)]"
          >
            Vraag vrijblijvend advies aan
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}