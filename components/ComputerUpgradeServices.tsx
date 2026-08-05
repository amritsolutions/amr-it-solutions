import {
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
    title: "SSD Upgrade",
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
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Onze diensten
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Complete upgrades en reparaties
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Van SSD-upgrades en RAM-uitbreidingen tot Windows-installaties,
            virusverwijdering en hardware-reparaties. Wij zorgen ervoor dat jouw
            computer weer snel en betrouwbaar werkt.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}