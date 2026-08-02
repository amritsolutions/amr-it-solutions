import {
  ArrowRight,
  Cloud,
  Laptop,
  Mail,
  Printer,
  ShieldCheck,
  Wifi,
} from "lucide-react";

const services = [
  {
    Icon: Laptop,
    title: "Computer & laptop hulp",
    description:
      "Hulp bij trage computers, Windows-problemen, foutmeldingen en dagelijks IT-gebruik.",
  },
  {
    Icon: Wifi,
    title: "WiFi & netwerk",
    description:
      "Wij lossen internetproblemen op, stellen routers in en verbeteren het WiFi-bereik.",
  },
  {
    Icon: Printer,
    title: "Printer installeren",
    description:
      "Nieuwe printer aansluiten, drivers installeren en problemen met printen of scannen oplossen.",
  },
  {
    Icon: Mail,
    title: "Outlook & e-mail",
    description:
      "Outlook instellen, e-mail synchroniseren en problemen met accounts of ontvangst oplossen.",
  },
  {
    Icon: Cloud,
    title: "Microsoft 365",
    description:
      "Ondersteuning bij Outlook, OneDrive, Teams en het instellen van Microsoft-accounts.",
  },
  {
    Icon: ShieldCheck,
    title: "Beveiliging & onderhoud",
    description:
      "Hulp bij Windows-updates, viruscontrole, back-ups en het veilig houden van je computer.",
  },
];

export default function ITSupportServices() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-white px-6 py-24 sm:py-28">
      {/* Achtergrondglows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/55 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-10 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-100/35 blur-[120px]"
      />

      {/* Decoratieve stippen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-20 hidden grid-cols-6 gap-4 opacity-50 lg:grid"
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
              Onze oplossingen
            </span>

            <span className="h-0.5 w-8 rounded-full bg-blue-600" />
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Onze{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              IT Support
            </span>{" "}
            diensten
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Of je nu problemen hebt met je computer, laptop, WiFi, printer of
            Microsoft 365: wij bieden snelle en betrouwbare IT Support in Breda
            en omgeving.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, description }) => (
            <article
              key={title}
              className="group relative flex min-h-[320px] flex-col overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-8 shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_28px_70px_rgba(37,99,235,0.16)]"
            >
              {/* Blauwe lijn bovenaan */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-[3px] w-40 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full"
              />

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_14px_30px_rgba(37,99,235,0.24)]">
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="mt-8 text-2xl font-extrabold tracking-tight text-slate-950">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {description}
              </p>

              <div className="mt-auto flex justify-end pt-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_10px_24px_rgba(37,99,235,0.24)]">
                  <ArrowRight className="h-5 w-5" />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}