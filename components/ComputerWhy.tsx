import {
  ArrowRight,
  Clock,
  MapPin,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";

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
    text: "Geen moeilijke IT-taal, maar heldere uitleg zodat je precies weet wat er gebeurt.",
  },
];

export default function ComputerWhy() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white px-6 py-24 sm:py-28">
      {/* Achtergrond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-0 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-44 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-[120px]"
      />

      <div className="mx-auto max-w-7xl">
        {/* Titel */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
              Waarom AMR IT Solutions?
            </span>

            <span className="h-0.5 w-8 rounded-full bg-blue-600" />
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Waarom klanten voor{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              ons kiezen
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Persoonlijke service, snelle communicatie en betrouwbare oplossingen
            voor computer- en laptopproblemen.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reasons.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-8 shadow-[0_14px_40px_rgba(15,23,42,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_28px_60px_rgba(37,99,235,0.16)]"
            >
              {/* Blauwe lijn */}
              <div className="absolute left-0 top-0 h-[3px] w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full" />

              {/* Glow */}
              <div className="absolute -right-12 -top-12 h-36 w-36 rounded-full bg-blue-100/0 blur-3xl transition-all duration-500 group-hover:bg-blue-100/70" />

              {/* Icon */}
              <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-blue-500 text-white shadow-lg shadow-blue-500/20 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <Icon className="h-8 w-8" />
              </div>

              {/* Titel */}
              <h3 className="relative z-10 mt-7 text-2xl font-extrabold text-slate-950">
                {title}
              </h3>

              {/* Tekst */}
              <p className="relative z-10 mt-4 leading-7 text-slate-600">
                {text}
              </p>

              {/* Pijl */}
              <div className="relative z-10 mt-8 flex items-center text-blue-600">
                <span className="text-sm font-bold">
                  Meer voordelen
                </span>

                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}