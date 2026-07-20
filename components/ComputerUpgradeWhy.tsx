import {
  Gauge,
  BadgeEuro,
  UserRoundCheck,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    Icon: Gauge,
    title: "Merkbaar sneller",
    description:
      "Met de juiste SSD- of RAM-upgrade kan je computer vaak weer jarenlang snel en prettig blijven werken.",
  },
  {
    Icon: BadgeEuro,
    title: "Eerlijk advies",
    description:
      "Wij adviseren alleen een upgrade of reparatie wanneer dit technisch en financieel echt de moeite waard is.",
  },
  {
    Icon: UserRoundCheck,
    title: "Persoonlijke service",
    description:
      "Je hebt direct contact, krijgt duidelijke uitleg en weet vooraf wat er aan je computer wordt gedaan.",
  },
  {
    Icon: ShieldCheck,
    title: "Zorgvuldig uitgevoerd",
    description:
      "Wij werken veilig en nauwkeurig met je apparatuur en zorgen voor een stabiele en betrouwbare oplossing.",
  },
];

export default function ComputerUpgradeWhy() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Waarom AMR IT Solutions?
          </p>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Een slimme keuze voor je computer
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Geen onnodige kosten of ingewikkelde uitleg, maar eerlijk advies en
            een oplossing die past bij jouw computer en gebruik.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ Icon, title, description }) => (
            <article
              key={title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
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