import {
  ArrowRight,
  HardDrive,
  MemoryStick,
  ShieldCheck,
  MonitorCog,
  Wrench,
  Laptop,
} from "lucide-react";

const services = [
  {
    Icon: HardDrive,
    title: "SSD-upgrade",
    description:
      "Vervang je oude harde schijf door een snelle SSD en ervaar direct veel kortere opstart- en laadtijden.",
  },
  {
    Icon: MemoryStick,
    title: "RAM uitbreiden",
    description:
      "Meer werkgeheugen zorgt voor soepel multitasken en betere prestaties bij dagelijks gebruik.",
  },
  {
    Icon: ShieldCheck,
    title: "Virus verwijderen",
    description:
      "Wij verwijderen virussen, malware en ongewenste software zodat je computer weer veilig werkt.",
  },
  {
    Icon: MonitorCog,
    title: "Windows opnieuw installeren",
    description:
      "Een schone Windows-installatie voor maximale stabiliteit, snelheid en betrouwbaarheid.",
  },
  {
    Icon: Wrench,
    title: "Hardware reparatie",
    description:
      "Reparatie of vervanging van defecte onderdelen zoals SSD's, geheugen, ventilatoren en meer.",
  },
  {
    Icon: Laptop,
    title: "Laptop onderhoud",
    description:
      "Reiniging, updates en optimalisatie om de levensduur en prestaties van je laptop te verbeteren.",
  },
];

export default function ComputerUpgradeServices() {
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
              Onze diensten
            </span>

            <span className="h-0.5 w-8 rounded-full bg-blue-600" />
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Computer{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              upgrades & reparaties
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Van SSD-upgrades en RAM-uitbreidingen tot Windows-installaties,
            virusverwijdering en hardware-reparaties. Wij zorgen ervoor dat jouw
            computer weer snel, stabiel en betrouwbaar werkt.
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