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
  linkText: string;
};

const services: Service[] = [
  {
    icon: Laptop,
    title: "IT Support Breda",
    text: "Hulp bij computerproblemen, software, e-mail, accounts en dagelijks IT-gebruik.",
    link: "/it-support-breda",
    linkText: "Bekijk IT-support",
  },
  {
    icon: Monitor,
    title: "Computerreparatie & Windows",
    text: "Hulp bij Windows, foutmeldingen, updates, herstel en computers die niet goed meer werken.",
    link: "/computerreparatie",
    linkText: "Bekijk computerreparatie",
  },
  {
    icon: Zap,
    title: "Laptop sneller maken",
    text: "Is je laptop traag? We controleren en optimaliseren het systeem en adviseren over mogelijke upgrades.",
    link: "/laptop-sneller-maken",
    linkText: "Bekijk laptop sneller maken",
  },
  {
    icon: Printer,
    title: "Printer, WiFi & netwerk",
    text: "Problemen met je printer, WiFi of netwerk? We helpen met installatie, verbinding en storingen.",
    link: "/printer-wifi-netwerk",
    linkText: "Bekijk WiFi & netwerk",
  },
  {
    icon: Globe,
    title: "Website laten maken",
    text: "Een moderne, snelle en mobielvriendelijke website voor zzp’ers en kleine bedrijven.",
    link: "/website-laten-maken",
    linkText: "Bekijk websites",
  },
  {
    icon: Cloud,
    title: "Microsoft 365 hulp",
    text: "Hulp met Outlook, OneDrive, Teams, e-mail en het instellen of gebruiken van Microsoft 365.",
    link: "/microsoft-365",
    linkText: "Bekijk Microsoft 365",
  },
  {
    icon: HardDrive,
    title: "Data overzetten & back-up",
    text: "Bestanden, foto’s, e-mail en instellingen veilig overzetten of een betrouwbare back-up maken.",
    link: "/data-overzetten",
    linkText: "Bekijk data & back-up",
  },
];

const benefits = [
  "Persoonlijke service",
  "Snelle ondersteuning",
  "Duidelijke afspraken",
];

export default function Services() {
  return (
    <section
      id="diensten"
      className="relative isolate overflow-hidden bg-white pb-20 pt-28 sm:pb-24 sm:pt-32 lg:pb-28 lg:pt-36"
    >
      {/* Subtiele achtergrond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-44 top-0 -z-10 h-[430px] w-[430px] rounded-full bg-blue-100/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-1/2 -z-10 grid grid-cols-6 gap-3 opacity-30"
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

          <h2 className="mt-6 max-w-4xl text-4xl font-extrabold tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Waar kunnen we je{" "}
            <span className="text-blue-600">mee helpen?</span>
          </h2>

          <p className="mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Van IT-support en computerreparatie tot Microsoft 365, WiFi en
            websites. AMR IT Solutions helpt particulieren, zzp&apos;ers en
            kleine bedrijven in Breda en omgeving.
          </p>

          <div className="mt-7 flex flex-wrap gap-x-7 gap-y-3 text-sm font-medium text-slate-700">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                  ✓
                </span>
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Kaarten */}
        <div className="mt-14 grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isLast = index === services.length - 1;

            return (
              <article
                key={service.title}
                className={[
                  "group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-[30px]",
                  "border border-slate-200/80 bg-white/90 p-7 backdrop-blur-sm",
                  "shadow-[0_14px_40px_rgba(15,23,42,0.06)]",
                  "transition-all duration-300 ease-out",
                  "before:absolute before:inset-x-0 before:top-0 before:h-[3px]",
                  "before:bg-gradient-to-r before:from-blue-500 before:via-blue-600 before:to-cyan-400",
                  "hover:-translate-y-1.5 hover:border-blue-200",
                  "hover:shadow-[0_24px_55px_rgba(37,99,235,0.14)]",
                  isLast
                    ? "md:col-span-2 md:mx-auto md:w-[calc(50%-14px)] lg:col-span-1 lg:col-start-2 lg:w-full"
                    : "",
                ].join(" ")}
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[22px] bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 ring-1 ring-blue-100/80 transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_28px_rgba(37,99,235,0.18)]">
                    <Icon
                      aria-hidden="true"
                      className="h-9 w-9 text-blue-600 transition-transform duration-300 group-hover:-rotate-3"
                      strokeWidth={2}
                    />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-xl font-bold leading-snug tracking-tight text-slate-950">
                      {service.title}
                    </h3>

                    <p className="mt-3 text-[15px] leading-7 text-slate-600">
                      {service.text}
                    </p>
                  </div>
                </div>

                <Link
                  href={service.link}
                  aria-label={service.linkText}
                  className="mt-auto flex items-center justify-between pt-7 text-sm font-bold text-blue-600"
                >
                  <span className="transition-colors duration-300 group-hover:text-blue-700">
                    {service.linkText}
                  </span>

                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.28)]">
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                </Link>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/#contact"
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