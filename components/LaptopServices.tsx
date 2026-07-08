import {
  HardDrive,
  Rocket,
  Cpu,
  Wrench,
  ShieldCheck,
  Gauge,
} from "lucide-react";

const services = [
  {
    icon: HardDrive,
    title: "SSD upgrade",
    text: "Vervang je oude harde schijf door een snelle SSD en merk direct verschil in opstart- en laadtijden.",
  },
  {
    icon: Rocket,
    title: "Windows optimalisatie",
    text: "Wij verwijderen overbodige programma's en optimaliseren Windows voor maximale prestaties.",
  },
  {
    icon: Cpu,
    title: "RAM geheugen uitbreiden",
    text: "Meer werkgeheugen zorgt voor soepel multitasken en betere prestaties.",
  },
  {
    icon: Gauge,
    title: "Laptop opschonen",
    text: "Wij verwijderen tijdelijke bestanden, controleren software en maken je systeem weer snel.",
  },
  {
    icon: ShieldCheck,
    title: "Controle op virussen",
    text: "We controleren je laptop op malware en ongewenste software die de prestaties beïnvloeden.",
  },
  {
    icon: Wrench,
    title: "Persoonlijk advies",
    text: "We adviseren eerlijk of upgraden nog zinvol is of dat vervangen verstandiger is.",
  },
];

export default function LaptopServices() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Onze oplossingen
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Geef je laptop een tweede leven
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Of je laptop nu langzaam opstart, vastloopt of traag reageert: wij
            zorgen ervoor dat hij weer soepel en snel werkt.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}