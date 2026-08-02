import {
  Check,
  Clock3,
  MapPin,
  ShieldCheck,
  UserRound,
} from "lucide-react";

const reasons = [
  {
    Icon: Clock3,
    title: "Snelle hulp",
    description:
      "Wij proberen IT-problemen zo snel mogelijk op te lossen, vaak nog dezelfde dag of de volgende werkdag.",
  },
  {
    Icon: UserRound,
    title: "Persoonlijke ondersteuning",
    description:
      "Geen ingewikkelde helpdesk of lange wachtrijen, maar direct en persoonlijk contact met AMR IT Solutions.",
  },
  {
    Icon: MapPin,
    title: "Breda & omgeving",
    description:
      "Wij helpen particulieren, zzp’ers en kleine bedrijven in Breda en omliggende plaatsen.",
  },
  {
    Icon: ShieldCheck,
    title: "Betrouwbare oplossingen",
    description:
      "We lossen niet alleen het probleem op, maar zorgen ook dat je computer veilig en stabiel blijft werken.",
  },
];

const trustItems = [
  "Persoonlijke service",
  "Snelle ondersteuning",
  "Lokaal in Breda",
  "Duidelijke afspraken",
];

export default function ITSupportWhy() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-6 py-24 sm:py-28">
      {/* Achtergrondglows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-16 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/45 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-100/30 blur-[120px]"
      />

      {/* Decoratieve stippen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-10 bottom-20 hidden grid-cols-6 gap-4 opacity-40 lg:grid"
      >
        {Array.from({ length: 24 }).map((_, index) => (
          <span
            key={index}
            className="h-2 w-2 rounded-full bg-blue-300"
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl">
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
            Persoonlijke service, duidelijke communicatie en betrouwbare
            oplossingen voor al je IT-vragen in Breda en omgeving.
          </p>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ Icon, title, description }) => (
            <article
              key={title}
              className="group relative flex min-h-[355px] flex-col overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-8 shadow-[0_16px_42px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_28px_65px_rgba(37,99,235,0.15)]"
            >
              {/* Blauwe lijn bovenaan */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-[3px] w-28 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full"
              />

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_14px_30px_rgba(37,99,235,0.24)]">
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="mt-8 text-2xl font-extrabold leading-snug tracking-tight text-slate-950">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {description}
              </p>

              <div className="mt-auto flex items-center gap-2 pt-7 text-sm font-bold text-blue-600">
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