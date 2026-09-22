import Link from "next/link";
import {
  ArrowRight,
  Check,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Users,
  Zap,
} from "lucide-react";

const reasons = [
  {
    icon: Users,
    title: "Persoonlijk contact",
    text: "Je weet bij wie je terechtkunt en krijgt duidelijke hulp die past bij jouw situatie.",
  },
  {
    icon: Zap,
    title: "Snel schakelen",
    text: "We pakken IT-vragen praktisch aan en zoeken zo snel mogelijk naar een passende oplossing.",
  },
  {
    icon: ShieldCheck,
    title: "Zorgvuldig werken",
    text: "We gaan netjes om met apparaten, accounts en gegevens. Veiligheid en betrouwbaarheid staan voorop.",
  },
  {
    icon: MapPin,
    title: "Breda & omgeving",
    text: "Hulp in Breda en omgeving, op locatie of waar mogelijk gewoon op afstand.",
  },
];

const benefits = [
  "Persoonlijke aanpak",
  "Duidelijke uitleg",
  "Breda & omgeving",
];

export default function WhyUs() {
  return (
    <section
      id="waarom"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Zachte blauwe achtergrond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-white via-blue-50/50 to-slate-50"
      />

      {/* Glow links */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 top-16 -z-10 h-[500px] w-[500px] rounded-full bg-blue-100/60 blur-3xl"
      />

      {/* Glow rechts */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 bottom-0 -z-10 h-[520px] w-[520px] rounded-full bg-cyan-100/40 blur-3xl"
      />

      {/* Stippen links */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-10 top-1/2 -z-10 hidden grid-cols-5 gap-3 opacity-35 lg:grid"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-blue-300"
          />
        ))}
      </div>

      {/* Stippen rechtsboven */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-12 top-16 -z-10 hidden grid-cols-5 gap-3 opacity-30 lg:grid"
      >
        {Array.from({ length: 20 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-blue-300"
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          {/* =========================
              LINKERKANT
          ========================== */}
          <div>
            {/* Label */}
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-100/70 px-4 py-2 text-xs font-bold uppercase tracking-[0.14em] text-blue-600 ring-1 ring-blue-200/60 sm:text-sm">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              Waarom AMR IT Solutions?
            </div>

            {/* Titel */}
            <h2 className="mt-7 max-w-xl text-4xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-[3.35rem]">
              Persoonlijke IT-hulp,{" "}
              <span className="text-blue-600">
                samen geregeld.
              </span>
            </h2>

            {/* Tekst */}
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
              Bij AMR IT Solutions draait het om persoonlijk contact, duidelijke
              uitleg en praktische oplossingen. Of het nu gaat om een
              computerprobleem, Microsoft 365, WiFi of een website: we kijken
              naar wat jij echt nodig hebt.
            </p>

            {/* Voordelen */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              {benefits.map((benefit) => (
                <div
                  key={benefit}
                  className="flex items-center gap-2.5 text-sm font-semibold text-slate-800"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                    <Check
                      className="h-4 w-4"
                      aria-hidden="true"
                    />
                  </span>

                  {benefit}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link
                href="/#contact"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(37,99,235,0.24)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_20px_45px_rgba(37,99,235,0.32)]"
              >
                Vraag vrijblijvend advies

                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>

              <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <MessageCircle
                  className="h-4 w-4 text-blue-600"
                  aria-hidden="true"
                />
                Duidelijk en persoonlijk contact
              </div>
            </div>
          </div>

          {/* =========================
              RECHTERKANT
          ========================== */}
          <div className="grid gap-5 sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.title}
                  className={[
                    "group relative min-h-[220px] overflow-hidden rounded-[28px]",
                    "border border-slate-200/80 bg-white/80 p-7",
                    "shadow-[0_14px_40px_rgba(15,23,42,0.06)]",
                    "backdrop-blur-sm",
                    "transition-all duration-300 ease-out",
                    "hover:-translate-y-1.5 hover:border-blue-200",
                    "hover:shadow-[0_22px_50px_rgba(37,99,235,0.12)]",
                  ].join(" ")}
                >
                  {/* Subtiele blauwe gloed */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-100/60 blur-2xl transition-all duration-300 group-hover:bg-blue-200/70"
                  />

                  {/* Icoon */}
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_10px_28px_rgba(37,99,235,0.20)]">
                    <Icon
                      className="h-7 w-7"
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Titel */}
                  <h3 className="relative mt-5 text-xl font-bold tracking-tight text-slate-950">
                    {reason.title}
                  </h3>

                  {/* Tekst */}
                  <p className="relative mt-3 text-[15px] leading-7 text-slate-600">
                    {reason.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>

        {/* =========================
            ONDERSTE BALK
        ========================== */}
        <div className="mt-14 border-t border-slate-200 pt-8">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-bold text-slate-950">
                IT-hulp voor thuis én op het werk
              </p>

              <p className="mt-1 text-sm leading-6 text-slate-600">
                Van computerproblemen tot Microsoft 365, WiFi, websites en
                andere dagelijkse IT-vragen.
              </p>
            </div>

            <Link
              href="/#contact"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-bold text-blue-600 transition-colors hover:text-blue-700"
            >
              Bespreek je IT-vraag

              <ArrowRight
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}