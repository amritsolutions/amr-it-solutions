import {
  ShieldCheck,
  Bug,
  ScanSearch,
  Ban,
  Lock,
  Laptop,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Virus verwijderen",
    text: "Wij verwijderen virussen veilig en zorgen dat jouw computer weer stabiel en betrouwbaar werkt.",
  },
  {
    icon: Bug,
    title: "Malware opruimen",
    text: "Hardnekkige malware, spyware en andere schadelijke software worden volledig opgeschoond.",
  },
  {
    icon: ScanSearch,
    title: "Volledige systeemcontrole",
    text: "We controleren Windows op verborgen bedreigingen, verdachte processen en beveiligingsproblemen.",
  },
  {
    icon: Ban,
    title: "Pop-ups & advertenties",
    text: "Last van ongewenste pop-ups of een browser die vreemd doet? Wij lossen het professioneel op.",
  },
  {
    icon: Lock,
    title: "Computer beveiligen",
    text: "Na het opschonen verbeteren we de beveiliging zodat nieuwe besmettingen minder kans krijgen.",
  },
  {
    icon: Laptop,
    title: "Computer weer snel",
    text: "Na de schoonmaak optimaliseren we Windows zodat jouw laptop of desktop weer soepel werkt.",
  },
];

export default function VirusServices() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Onze diensten
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Professionele virusverwijdering
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Wij verwijderen virussen, malware en ongewenste software en zorgen
            ervoor dat jouw computer weer veilig en snel gebruikt kan worden.
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
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
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