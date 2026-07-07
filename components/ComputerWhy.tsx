import { Clock, ShieldCheck, MapPin, MessageCircle } from "lucide-react";

const reasons = [
  {
    Icon: Clock,
    title: "Snelle hulp",
    text: "In veel gevallen dezelfde dag of de volgende werkdag geholpen.",
  },
  {
    Icon: ShieldCheck,
    title: "Betrouwbare service",
    text: "Duidelijke afspraken, eerlijk advies en geen verrassingen achteraf.",
  },
  {
    Icon: MapPin,
    title: "Breda & omgeving",
    text: "Hulp aan huis, op locatie of op afstand voor particulieren en bedrijven.",
  },
  {
    Icon: MessageCircle,
    title: "Duidelijke uitleg",
    text: "Geen moeilijke IT-taal, maar heldere uitleg zodat je weet wat er gebeurt.",
  },
];

export default function ComputerWhy() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Waarom AMR IT Solutions?
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-950">
            Waarom kiezen klanten voor ons?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Persoonlijke service, snelle communicatie en betrouwbare oplossingen
            voor computer- en laptopproblemen.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
                <Icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}