import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

function LightningIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
      <path
        d="M13 2 4.8 13.2h6.1L10 22l9.2-12.2h-6.4L13 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path
        d="M4.5 21c.5-4.7 3.2-7 7.5-7s7 2.3 7.5 7h-15Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
      <path
        d="M12 22s7-6.1 7-13A7 7 0 1 0 5 9c0 6.9 7 13 7 13Z"
        fill="currentColor"
      />
      <circle cx="12" cy="9" r="2.5" fill="white" />
    </svg>
  );
}

function MonitorIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-9 w-9"
    >
      <rect
        x="3"
        y="4"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9 20h6M12 16v4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-9 w-9">
      <path
        d="M12 2.5 20 6v5.2c0 5.1-3.3 8.9-8 10.3-4.7-1.4-8-5.2-8-10.3V6l8-3.5Z"
        fill="currentColor"
      />
      <path
        d="m8.7 12 2.1 2.1 4.6-4.7"
        fill="none"
        stroke="white"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-9 w-9"
    >
      <path
        d="M20 12a8 8 0 0 1-8 8 8.5 8.5 0 0 1-3-.6L4 20l1-4a8 8 0 1 1 15-4Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 11h8M8 15h5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const reasons = [
  {
    title: "Snelle service",
    text: "Vaak dezelfde dag geholpen bij computerproblemen en software.",
    highlight: "Zelfde dag reactie",
    icon: LightningIcon,
  },
  {
    title: "Persoonlijke aanpak",
    text: "Direct contact met één persoon die meedenkt en de juiste oplossing biedt.",
    highlight: "Persoonlijk en betrokken",
    icon: PersonIcon,
  },
  {
    title: "Breda & omgeving",
    text: "IT-hulp aan huis, op locatie of op afstand voor particulieren en kleine bedrijven.",
    highlight: "Breda en omgeving",
    icon: LocationIcon,
  },
  {
    title: "IT & Webdesign",
    text: "Van computerreparaties tot professionele websites en cloudoplossingen.",
    highlight: "Alles onder één dak",
    icon: MonitorIcon,
  },
  {
    title: "Betrouwbare oplossingen",
    text: "Veilige, stabiele en toekomstbestendige IT-oplossingen waar je op kunt vertrouwen.",
    highlight: "Veilig en betrouwbaar",
    icon: ShieldIcon,
  },
  {
    title: "Duidelijke communicatie",
    text: "Geen moeilijke IT-taal, maar eerlijk advies en heldere uitleg.",
    highlight: "Duidelijk en transparant",
    icon: ChatIcon,
  },
];

export default function WhyUs() {
  return (
    <section
      id="waarom"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Achtergrondglows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 -z-10 h-[440px] w-[440px] rounded-full bg-blue-100/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-100/35 blur-3xl"
      />

      {/* Stippen rechtsboven */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-10 top-20 -z-10 grid grid-cols-6 gap-3 opacity-25"
      >
        {Array.from({ length: 30 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-blue-400"
          />
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Intro */}
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Waarom kiezen voor AMR IT Solutions?
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Betrouwbare IT-oplossingen met persoonlijke service
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            AMR IT Solutions helpt particulieren, zzp&apos;ers en kleine
            bedrijven met betrouwbare IT-oplossingen. Persoonlijk contact,
            duidelijke communicatie en snelle service staan altijd centraal.
          </p>
        </div>

        {/* Kaarten */}
        <div className="mt-16 grid items-stretch gap-7 md:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className={[
                  "group relative flex min-h-[285px] flex-col overflow-hidden rounded-[30px]",
                  "border border-slate-200/80 bg-white/90 p-8 backdrop-blur-sm",
                  "shadow-[0_14px_40px_rgba(15,23,42,0.06)]",
                  "transition-all duration-300 ease-out",
                  "before:absolute before:inset-x-0 before:top-0 before:h-[3px]",
                  "before:bg-gradient-to-r before:from-blue-500 before:via-blue-600 before:to-cyan-400",
                  "hover:-translate-y-2 hover:border-blue-200",
                  "hover:shadow-[0_26px_60px_rgba(37,99,235,0.16)]",
                ].join(" ")}
              >
                <div className="flex h-[72px] w-[72px] items-center justify-center rounded-[22px] bg-gradient-to-br from-blue-50 via-blue-50 to-blue-100 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_12px_32px_rgba(37,99,235,0.24)]">
                  <Icon />
                </div>

                <h3 className="mt-6 text-2xl font-bold tracking-tight text-slate-950">
                  {reason.title}
                </h3>

                <p className="mt-3 text-[15px] leading-7 text-slate-600">
                  {reason.text}
                </p>

                <div className="mt-auto flex items-center gap-3 pt-7 text-sm font-semibold text-slate-700">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>

                  <span>{reason.highlight}</span>
                </div>
              </article>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-9 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(37,99,235,0.28)] transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-600 hover:shadow-[0_20px_45px_rgba(37,99,235,0.38)]"
          >
            Vrijblijvend advies aanvragen
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}