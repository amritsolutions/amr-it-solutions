import {
  MonitorDown,
  Cpu,
  ShieldCheck,
  HardDrive,
  Rocket,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: MonitorDown,
    title: "Schone Windows-installatie",
    text: "Wij installeren Windows 10 of Windows 11 volledig opnieuw voor een frisse, snelle en stabiele computer.",
  },
  {
    icon: Cpu,
    title: "Drivers installeren",
    text: "Alle benodigde drivers voor wifi, geluid, videokaart en andere hardware worden correct geïnstalleerd.",
  },
  {
    icon: ShieldCheck,
    title: "Updates & beveiliging",
    text: "Windows wordt volledig bijgewerkt met de nieuwste beveiligingsupdates en instellingen.",
  },
  {
    icon: HardDrive,
    title: "Back-up van bestanden",
    text: "Waar mogelijk helpen wij je documenten, foto's en andere belangrijke bestanden veilig te behouden.",
  },
  {
    icon: Rocket,
    title: "Prestaties optimaliseren",
    text: "Na de installatie optimaliseren we Windows zodat je computer weer snel en soepel werkt.",
  },
  {
    icon: Settings,
    title: "Persoonlijke instellingen",
    text: "We richten e-mail, printer, OneDrive en andere basisinstellingen direct voor je in.",
  },
];

export default function WindowsServices() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Onze diensten
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Professionele Windows-installatie van A tot Z
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Wij zorgen ervoor dat jouw computer weer snel, veilig en volledig
            gebruiksklaar is.
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