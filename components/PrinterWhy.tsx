import {
  Clock3,
  Wifi,
  MapPin,
  MessageCircle,
} from "lucide-react";

const reasons = [
  {
    icon: Clock3,
    title: "Snelle hulp",
    text: "In veel gevallen kunnen we printer- en WiFi-problemen dezelfde dag of de volgende werkdag oplossen.",
  },
  {
    icon: Wifi,
    title: "Stabiele verbinding",
    text: "We zoeken de echte oorzaak van storingen en zorgen voor een betrouwbare verbinding.",
  },
  {
    icon: MapPin,
    title: "Breda & omgeving",
    text: "Wij helpen particulieren en kleine bedrijven in Breda en omliggende plaatsen.",
  },
  {
    icon: MessageCircle,
    title: "Duidelijke uitleg",
    text: "Je krijgt begrijpelijke uitleg en praktisch advies zonder ingewikkelde technische taal.",
  },
];

export default function PrinterWhy() {
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
            Persoonlijke hulp, duidelijke communicatie en betrouwbare
            oplossingen voor printers, WiFi en netwerken.
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