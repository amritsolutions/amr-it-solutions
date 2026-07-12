import {
  ShieldCheck,
  CheckCircle2,
  MapPin,
  MessageCircle,
} from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Veilige overdracht",
    text: "Wij gaan zorgvuldig om met jouw bestanden en controleren of alles correct is overgezet.",
  },
  {
    icon: CheckCircle2,
    title: "Alles gecontroleerd",
    text: "Na de overdracht controleren we samen of documenten, foto's, e-mail en instellingen aanwezig zijn.",
  },
  {
    icon: MapPin,
    title: "Breda & omgeving",
    text: "Wij helpen particulieren, zzp’ers en kleine bedrijven in Breda en omliggende plaatsen.",
  },
  {
    icon: MessageCircle,
    title: "Duidelijke uitleg",
    text: "Je krijgt begrijpelijke uitleg over de overdracht en over een veilige back-up voor later.",
  },
];

export default function DataWhy() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Waarom AMR IT Solutions?
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Waarom kiezen klanten voor ons?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Zorgvuldige dataoverdracht, duidelijke controle en persoonlijke hulp
            bij het overstappen naar een nieuwe computer.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div
                key={reason.title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600 text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {reason.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {reason.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}