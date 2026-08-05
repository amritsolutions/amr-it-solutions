import {
  Ban,
  Bug,
  Laptop,
  Lock,
  ScanSearch,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    Icon: ShieldCheck,
    title: "Virus verwijderen",
    text: "Wij verwijderen virussen veilig en zorgen ervoor dat jouw computer weer stabiel, veilig en betrouwbaar werkt.",
  },
  {
    Icon: Bug,
    title: "Malware opruimen",
    text: "Hardnekkige malware, spyware en andere schadelijke software worden volledig opgeschoond.",
  },
  {
    Icon: ScanSearch,
    title: "Volledige systeemcontrole",
    text: "We controleren Windows op verborgen bedreigingen, verdachte processen en beveiligingsproblemen.",
  },
  {
    Icon: Ban,
    title: "Pop-ups verwijderen",
    text: "Last van ongewenste pop-ups of een browser die vreemd doet? Wij lossen het professioneel op.",
  },
  {
    Icon: Lock,
    title: "Computer beveiligen",
    text: "Na het opschonen verbeteren we de beveiliging zodat nieuwe besmettingen minder kans krijgen.",
  },
  {
    Icon: Laptop,
    title: "Computer weer snel",
    text: "Na de schoonmaak optimaliseren we Windows zodat jouw laptop of desktop weer soepel werkt.",
  },
];

export default function VirusServices() {
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

      {/* Blauwe stippen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-12 top-20 hidden grid-cols-6 gap-4 opacity-40 lg:grid"
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
              Onze diensten
            </span>

            <span className="h-0.5 w-8 rounded-full bg-blue-600" />
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Professionele{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              virusverwijdering
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Wij verwijderen virussen, malware en ongewenste software en zorgen
            ervoor dat jouw computer weer veilig, snel en betrouwbaar gebruikt
            kan worden.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="group relative flex min-h-[350px] flex-col overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-8 shadow-[0_16px_42px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_28px_65px_rgba(37,99,235,0.16)]"
            >
              {/* Blauwe lijn */}
              <div
                aria-hidden="true"
                className="absolute left-0 top-0 h-[3px] w-32 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full"
              />

              {/* Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-44 w-44 rounded-full bg-blue-100/0 blur-3xl transition-all duration-500 group-hover:bg-blue-100/70"
              />

              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_14px_30px_rgba(37,99,235,0.24)]">
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="relative z-10 mt-8 text-2xl font-extrabold leading-snug tracking-tight text-slate-950">
                {title}
              </h3>

              <p className="relative z-10 mt-4 leading-7 text-slate-600">
                {text}
              </p>

              <div className="relative z-10 mt-auto pt-8">
                <span className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-bold text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  Veilig & grondig
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}