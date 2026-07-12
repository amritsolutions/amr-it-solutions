import {
  HardDrive,
  FolderSync,
  ImageIcon,
  Mail,
  ShieldCheck,
  Cloud,
} from "lucide-react";

const services = [
  {
    icon: HardDrive,
    title: "Bestanden overzetten",
    text: "Documenten, foto's, video's en andere bestanden veilig overzetten naar een nieuwe computer.",
  },
  {
    icon: FolderSync,
    title: "Nieuwe computer instellen",
    text: "Wij zetten jouw gegevens, instellingen en programma's over zodat je direct verder kunt werken.",
  },
  {
    icon: ImageIcon,
    title: "Foto's en video's",
    text: "Waardevolle herinneringen veilig kopiëren en controleren zodat niets verloren gaat.",
  },
  {
    icon: Mail,
    title: "E-mail overzetten",
    text: "Outlook, e-mailaccounts, contacten en agenda's correct meenemen naar je nieuwe apparaat.",
  },
  {
    icon: Cloud,
    title: "Back-up instellen",
    text: "Wij richten OneDrive of een externe back-up in zodat jouw bestanden veilig bewaard blijven.",
  },
  {
    icon: ShieldCheck,
    title: "Veilige dataoverdracht",
    text: "Wij controleren of alle gegevens compleet en veilig zijn overgezet voordat je de oude computer vervangt.",
  },
];

export default function DataServices() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Onze diensten
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Alles veilig overzetten
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Van documenten en foto's tot Outlook en instellingen. Wij zorgen
            dat jouw nieuwe computer direct klaar is voor gebruik.
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