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
      "Vervang een trage harde schijf door een snelle SSD en geef je computer een enorme snelheidsboost.",
  },
  {
    Icon: MemoryStick,
    title: "RAM Uitbreiden",
    description:
      "Meer werkgeheugen zorgt voor betere prestaties bij multitasken en zware programma's.",
  },
  {
    Icon: ShieldCheck,
    title: "Virusverwijdering",
    description:
      "Wij verwijderen virussen, malware en ongewenste software en maken je systeem weer veilig.",
  },
  {
    Icon: MonitorCog,
    title: "Windows Herinstallatie",
    description:
      "Een schone installatie van Windows voor optimale prestaties en stabiliteit.",
  },
  {
    Icon: Wrench,
    title: "Computer Reparatie",
    description:
      "Oplossingen voor hardwareproblemen, foutmeldingen en defecte onderdelen.",
  },
  {
    Icon: Laptop,
    title: "Laptop Onderhoud",
    description:
      "Reiniging, updates en onderhoud om je laptop langer mee te laten gaan en optimaal te laten presteren.",
  },
];

export default function ComputerUpgradeServices() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Onze diensten
          </p>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Upgrades & reparaties voor iedere computer
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Of je nu een tragere computer wilt versnellen of een defect wilt
            laten repareren, wij zorgen voor een betrouwbare oplossing.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-950">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}