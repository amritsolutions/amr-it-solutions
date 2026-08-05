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
    Icon: Mail,
    title: "Outlook & e-mail",
    text: "Wij helpen met Outlook instellen, e-mailaccounts koppelen en problemen met verzenden of ontvangen oplossen.",
  },
  {
    Icon: Cloud,
    title: "OneDrive instellen",
    text: "Bestanden veilig opslaan, synchroniseren en openen op computer, laptop en smartphone.",
  },
  {
    Icon: Users,
    title: "Microsoft Teams",
    text: "Hulp bij Teams, vergaderingen, chats, accounts en samenwerken binnen jouw organisatie.",
  },
  {
    Icon: CalendarDays,
    title: "Agenda & contacten",
    text: "Wij zorgen dat agenda's, contacten en afspraken automatisch synchroniseren op al jouw apparaten.",
  },
  {
    Icon: ShieldCheck,
    title: "Beveiliging & accounts",
    text: "Hulp met wachtwoorden, tweestapsverificatie, herstelopties en veilig gebruik van Microsoft-accounts.",
  },
  {
    Icon: Settings,
    title: "Microsoft 365 instellen",
    text: "Volledige installatie en configuratie van Microsoft 365 voor particulieren, zzp'ers en kleine bedrijven.",
  },
];

export default function MicrosoftServices() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Onze oplossingen
          </p>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Hulp met Microsoft 365 van A tot Z
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Van Outlook en OneDrive tot Teams en accountbeveiliging. Wij zorgen
            dat Microsoft 365 correct is ingesteld, veilig werkt en prettig is
            in dagelijks gebruik.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(37,99,235,0.16)]"
            >
              {/* Blauwe lijn */}
              <div className="absolute left-0 top-0 h-[3px] w-28 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full" />

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

              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {text}
              </p>

              <a
                href="/#contact"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3"
              >
                Meer informatie
                <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}