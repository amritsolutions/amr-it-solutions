import {
  Check,
  Clock3,
  MapPin,
  MessageCircle,
  Wifi,
} from "lucide-react";

const reasons = [
  {
    Icon: Clock3,
    title: "Snelle hulp",
    text: "In veel gevallen kunnen we printer- en WiFi-problemen dezelfde dag of de volgende werkdag oplossen.",
  },
  {
    Icon: Wifi,
    title: "Stabiele verbinding",
    text: "We zoeken de echte oorzaak van storingen en zorgen voor een betrouwbare verbinding.",
  },
  {
    Icon: MapPin,
    title: "Breda & omgeving",
    text: "Wij helpen particulieren en kleine bedrijven in Breda en omliggende plaatsen.",
  },
  {
    Icon: MessageCircle,
    title: "Duidelijke uitleg",
    text: "Je krijgt begrijpelijke uitleg en praktisch advies zonder ingewikkelde technische taal.",
  },
];

const trustItems = [
  "Snelle ondersteuning",
  "Stabiele verbinding",
  "Persoonlijke service",
  "Geen verborgen kosten",
];

export default function PrinterWhy() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-6 py-24 sm:py-28">
      {/* Achtergrond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-100/35 blur-[120px]"
      />

      {/* Stippen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-12 bottom-24 hidden grid-cols-6 gap-4 opacity-35 lg:grid"
      >
        {Array.from({ length: 24 }).map((_, index) => (
          <span
            key={index}
            className="h-2 w-2 rounded-full bg-blue-300"
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Titel */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
              Waarom AMR IT Solutions?
            </span>

            <span className="h-0.5 w-8 rounded-full bg-blue-600" />
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Waarom klanten voor{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              ons kiezen
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Persoonlijke hulp, duidelijke communicatie en betrouwbare
            oplossingen voor printers, WiFi en netwerken.
          </p>
        </div>

        {/* Kaarten */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="group relative flex min-h-[350px] flex-col overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-8 shadow-[0_16px_42px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_28px_65px_rgba(37,99,235,0.15)]"
            >
              {/* Blauwe lijn */}
              <div className="absolute left-0 top-0 h-[3px] w-28 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full" />

              {/* Glow */}
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-100/0 blur-3xl transition-all duration-500 group-hover:bg-blue-100/70" />

              {/* Icon */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_14px_30px_rgba(37,99,235,0.24)]">
                <Icon className="h-8 w-8" />
              </div>

              {/* Titel */}
              <h3 className="relative z-10 mt-8 text-2xl font-extrabold leading-snug tracking-tight text-slate-950">
                {title}
              </h3>

              {/* Tekst */}
              <p className="relative z-10 mt-4 leading-7 text-slate-600">
                {text}
              </p>

              {/* Onderaan */}
              <div className="relative z-10 mt-auto flex items-center gap-2 pt-7 text-sm font-bold text-blue-600">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-50 ring-1 ring-blue-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Check className="h-4 w-4" />
                </span>

                <span>Direct voordeel voor jou</span>
              </div>
            </article>
          ))}
        </div>

        {/* Vertrouwensbalk */}
        <div className="mt-12 grid overflow-hidden rounded-[26px] border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, index) => (
            <div
              key={item}
              className={`flex items-center justify-center gap-3 px-6 py-5 text-center text-sm font-bold text-slate-700 ${
                index > 0
                  ? "border-t border-slate-200/80 sm:border-l sm:border-t-0"
                  : ""
              } ${
                index === 2
                  ? "sm:border-l-0 sm:border-t lg:border-l lg:border-t-0"
                  : ""
              }`}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <Check className="h-4 w-4" />
              </span>

              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}