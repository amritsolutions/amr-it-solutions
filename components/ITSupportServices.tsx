import {
  Laptop,
  Wifi,
  Printer,
  Mail,
  Cloud,
  ShieldCheck,
} from "lucide-react";

const services = [
  {
    Icon: Laptop,
    title: "Computer & laptop hulp",
    description:
      "Hulp bij trage computers, Windows-problemen, foutmeldingen en dagelijks IT-gebruik.",
  },
  {
    Icon: Wifi,
    title: "WiFi & netwerk",
    description:
      "Wij lossen internetproblemen op, stellen routers in en verbeteren het WiFi-bereik.",
  },
  {
    Icon: Printer,
    title: "Printer installeren",
    description:
      "Nieuwe printer aansluiten, drivers installeren en problemen met printen of scannen oplossen.",
  },
  {
    Icon: Mail,
    title: "Outlook & e-mail",
    description:
      "Outlook instellen, e-mail synchroniseren en problemen met accounts of ontvangst oplossen.",
  },
  {
    Icon: Cloud,
    title: "Microsoft 365",
    description:
      "Ondersteuning bij Outlook, OneDrive, Teams en het instellen van Microsoft-accounts.",
  },
  {
    Icon: ShieldCheck,
    title: "Beveiliging & onderhoud",
    description:
      "Hulp bij Windows-updates, viruscontrole, back-ups en het veilig houden van je computer.",
  },
];

export default function ITSupportServices() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Onze oplossingen
          </p>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Onze IT Support diensten
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Of je nu problemen hebt met je computer, laptop, WiFi, printer of
            Microsoft 365: wij bieden snelle en betrouwbare IT Support in Breda
            en omgeving.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50">
                <Icon className="h-7 w-7 text-blue-600" />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-950">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}