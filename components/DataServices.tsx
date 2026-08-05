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
    Icon: HardDrive,
    title: "Bestanden overzetten",
    description:
      "Documenten, foto's, video's en andere bestanden veilig overzetten naar je nieuwe computer.",
  },
  {
    Icon: FolderSync,
    title: "Nieuwe computer instellen",
    description:
      "We zetten je gegevens, instellingen en programma's over zodat je direct verder kunt werken.",
  },
  {
    Icon: ImageIcon,
    title: "Foto's & video's",
    description:
      "Waardevolle herinneringen veilig kopiëren en controleren zodat niets verloren gaat.",
  },
  {
    Icon: Mail,
    title: "Outlook & e-mail",
    description:
      "Outlook, e-mailaccounts, contacten en agenda's correct meenemen naar je nieuwe apparaat.",
  },
  {
    Icon: Cloud,
    title: "Back-up instellen",
    description:
      "OneDrive of een externe back-up instellen zodat jouw bestanden veilig bewaard blijven.",
  },
  {
    Icon: ShieldCheck,
    title: "Veilige dataoverdracht",
    description:
      "We controleren of alle gegevens compleet en veilig zijn overgezet voordat je oude computer wordt vervangen.",
  },
];

export default function DataServices() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Onze oplossingen
          </p>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Alles veilig overzetten
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Van documenten en foto's tot Outlook, instellingen en back-ups.
            Wij zorgen ervoor dat jouw nieuwe computer direct klaar is voor
            gebruik.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, description }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(37,99,235,0.16)]"
            >
              {/* Blauwe lijn boven */}
              <div className="absolute left-0 top-0 h-[3px] w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full" />

              {/* Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg">
                <Icon className="h-8 w-8" />
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