import {
  Clock3,
  UserRound,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    Icon: Clock3,
    title: "Snelle hulp",
    description:
      "Wij proberen IT-problemen zo snel mogelijk op te lossen, vaak nog dezelfde dag of de volgende werkdag.",
  },
  {
    Icon: UserRound,
    title: "Persoonlijke ondersteuning",
    description:
      "Geen ingewikkelde helpdesk of lange wachtrijen, maar direct en persoonlijk contact met AMR IT Solutions.",
  },
  {
    Icon: MapPin,
    title: "Breda & omgeving",
    description:
      "Wij helpen particulieren, zzp’ers en kleine bedrijven in Breda en omliggende plaatsen.",
  },
  {
    Icon: ShieldCheck,
    title: "Betrouwbare oplossingen",
    description:
      "We lossen niet alleen het probleem op, maar zorgen ook dat je computer veilig en stabiel blijft werken.",
  },
];

export default function ITSupportWhy() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Waarom AMR IT Solutions?
          </p>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Waarom klanten voor ons kiezen
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Persoonlijke service, duidelijke communicatie en betrouwbare
            oplossingen voor al je IT-vragen in Breda en omgeving.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ Icon, title, description }) => (
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

              <p className="mt-4 leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}