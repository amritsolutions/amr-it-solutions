import {
  ShieldCheck,
  CheckCircle2,
  MapPin,
  MessageCircle,
} from "lucide-react";

const reasons = [
  {
    Icon: ShieldCheck,
    title: "Veilige overdracht",
    text: "Wij gaan zorgvuldig om met jouw bestanden en controleren of alles veilig en volledig is overgezet.",
  },
  {
    Icon: CheckCircle2,
    title: "Alles gecontroleerd",
    text: "Samen controleren we documenten, foto's, e-mail en instellingen voordat de overdracht is afgerond.",
  },
  {
    Icon: MapPin,
    title: "Breda & omgeving",
    text: "Persoonlijke ondersteuning voor particulieren, zzp'ers en kleine bedrijven in Breda en de regio.",
  },
  {
    Icon: MessageCircle,
    title: "Duidelijke uitleg",
    text: "Je krijgt heldere uitleg over de overdracht én advies over een veilige back-up voor de toekomst.",
  },
];

export default function DataWhy() {
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
            Zorgvuldige dataoverdracht, persoonlijke ondersteuning en de
            zekerheid dat al jouw bestanden veilig op de nieuwe computer staan.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="group relative flex min-h-[330px] flex-col overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(37,99,235,0.16)]"
            >
              {/* Blauwe lijn */}
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

              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {text}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}