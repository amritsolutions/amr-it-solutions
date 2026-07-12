import {
  Mail,
  Cloud,
  Users,
  CalendarDays,
  ShieldCheck,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Mail,
    title: "Outlook & e-mail",
    text: "Wij helpen met Outlook instellen, e-mailaccounts koppelen en problemen met verzenden of ontvangen oplossen.",
  },
  {
    icon: Cloud,
    title: "OneDrive instellen",
    text: "Bestanden veilig opslaan, synchroniseren en openen op computer, laptop en smartphone.",
  },
  {
    icon: Users,
    title: "Microsoft Teams",
    text: "Hulp bij Teams, vergaderingen, chats, accounts en samenwerken binnen jouw organisatie.",
  },
  {
    icon: CalendarDays,
    title: "Agenda & contacten",
    text: "Wij zorgen dat agenda’s, contacten en afspraken goed synchroniseren op al jouw apparaten.",
  },
  {
    icon: ShieldCheck,
    title: "Beveiliging & accounts",
    text: "Hulp met wachtwoorden, tweestapsverificatie, herstelopties en veilig accountgebruik.",
  },
  {
    icon: Settings,
    title: "Microsoft 365 instellen",
    text: "Volledige installatie en configuratie van Microsoft 365 voor particulieren, zzp’ers en kleine bedrijven.",
  },
];

export default function MicrosoftServices() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Onze diensten
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Hulp met Microsoft 365 van A tot Z
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Van Outlook en OneDrive tot Teams en accountbeveiliging. Wij zorgen
            dat Microsoft 365 goed is ingesteld en prettig werkt.
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