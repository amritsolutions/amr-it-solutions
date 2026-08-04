import {
  ArrowRight,
  Cable,
  Monitor,
  Printer,
  Router,
  Settings,
  Wifi,
} from "lucide-react";

const services = [
  {
    Icon: Printer,
    title: "Printer installeren",
    text: "Wij installeren printers en zorgen dat deze direct goed werken via USB of WiFi.",
  },
  {
    Icon: Wifi,
    title: "WiFi-problemen oplossen",
    text: "Last van traag of wegvallend internet? Wij zoeken de oorzaak en lossen het snel op.",
  },
  {
    Icon: Router,
    title: "Router instellen",
    text: "Wij stellen je modem of router veilig in voor een stabiele internetverbinding.",
  },
  {
    Icon: Cable,
    title: "Netwerk verbinden",
    text: "Computers, laptops, printers en andere apparaten perfect met elkaar verbinden.",
  },
  {
    Icon: Monitor,
    title: "Nieuwe apparaten",
    text: "Nieuwe printer of computer? Wij zorgen dat alles direct goed samenwerkt.",
  },
  {
    Icon: Settings,
    title: "Persoonlijk advies",
    text: "Advies over een stabiel thuisnetwerk, WiFi-bereik en veilige instellingen.",
  },
];

export default function PrinterServices() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-slate-50/80 to-white px-6 py-24 sm:py-28">
      {/* Achtergrond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-100/30 blur-[120px]"
      />

      {/* Stippen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-12 top-20 hidden grid-cols-6 gap-4 opacity-40 lg:grid"
      >
        {Array.from({ length: 24 }).map((_, index) => (
          <span key={index} className="h-2 w-2 rounded-full bg-blue-300" />
        ))}
      </div>

      <div className="mx-auto max-w-7xl">
        {/* Titel */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
              Onze diensten
            </span>

            <span className="h-0.5 w-8 rounded-full bg-blue-600" />
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Waarmee kunnen wij{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              helpen?
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Van printerinstallaties tot WiFi- en netwerkproblemen. Wij zorgen
            dat jouw apparaten weer probleemloos samenwerken.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-8 shadow-[0_16px_42px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_28px_65px_rgba(37,99,235,0.16)]"
            >
              {/* Blauwe lijn */}
              <div className="absolute left-0 top-0 h-[3px] w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full" />

              {/* Glow */}
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-100/0 blur-3xl transition-all duration-500 group-hover:bg-blue-100/70" />

              {/* Icon */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_14px_30px_rgba(37,99,235,0.24)]">
                <Icon className="h-8 w-8" />
              </div>

              {/* Titel */}
              <h3 className="relative z-10 mt-8 text-2xl font-extrabold tracking-tight text-slate-950">
                {title}
              </h3>

              {/* Tekst */}
              <p className="relative z-10 mt-4 leading-7 text-slate-600">
                {text}
              </p>

              {/* Onderkant */}
              <div className="relative z-10 mt-auto flex items-center justify-between pt-8">
                <span className="text-sm font-bold text-blue-600">
                  Meer informatie
                </span>

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