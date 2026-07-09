import {
  Clock3,
  ShieldCheck,
  MapPin,
  MessageCircle,
} from "lucide-react";

const reasons = [
  {
    icon: Clock3,
    title: "Snelle hulp",
    text: "In veel gevallen maken we je laptop dezelfde dag of de volgende werkdag weer snel.",
  },
  {
    icon: ShieldCheck,
    title: "Eerlijk advies",
    text: "We kijken eerst of een upgrade zinvol is. Je betaalt nooit voor onnodige reparaties.",
  },
  {
    icon: MapPin,
    title: "Breda & omgeving",
    text: "Wij helpen particulieren en kleine bedrijven in Breda en de omliggende regio.",
  },
  {
    icon: MessageCircle,
    title: "Duidelijke uitleg",
    text: "Geen ingewikkelde IT-taal, maar heldere uitleg over wat we doen en waarom.",
  },
];

export default function LaptopWhy() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Waarom AMR IT Solutions?
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Waarom klanten voor ons kiezen
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Persoonlijke service, snelle communicatie en betrouwbare oplossingen
            om jouw laptop weer optimaal te laten presteren.
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