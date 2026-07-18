function LightningIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7"
    >
      <path
        d="M13 2 4.8 13.2h6.1L10 22l9.2-12.2h-6.4L13 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function PersonIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7"
    >
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
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7"
    >
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
      className="h-7 w-7"
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
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-7 w-7"
    >
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
      className="h-7 w-7"
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
    text: "Vaak dezelfde dag geholpen bij computerproblemen, WiFi-storingen en softwareproblemen.",
    icon: LightningIcon,
  },
  {
    title: "Persoonlijke aanpak",
    text: "Je hebt direct contact met één persoon die met je meedenkt en duidelijke oplossingen biedt.",
    icon: PersonIcon,
  },
  {
    title: "Breda & omgeving",
    text: "IT-hulp aan huis, op locatie of op afstand voor particulieren en kleine bedrijven.",
    icon: LocationIcon,
  },
  {
    title: "IT & Webdesign",
    text: "Van computerreparaties en Microsoft 365 tot professionele websites en cloudoplossingen.",
    icon: MonitorIcon,
  },
  {
    title: "Betrouwbare oplossingen",
    text: "Veilige, stabiele en toekomstbestendige IT-oplossingen waar je op kunt vertrouwen.",
    icon: ShieldIcon,
  },
  {
    title: "Duidelijke communicatie",
    text: "Geen moeilijke IT-taal, maar eerlijk advies en heldere uitleg zodat je precies weet waar je aan toe bent.",
    icon: ChatIcon,
  },
];

export default function WhyUs() {
  return (
    <section id="waarom" className="bg-white py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Waarom kiezen voor AMR IT Solutions?
          </p>

          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Betrouwbare IT-oplossingen met persoonlijke service
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            AMR IT Solutions helpt particulieren, zzp&apos;ers en kleine
            bedrijven met betrouwbare IT-oplossingen. Persoonlijk contact,
            duidelijke communicatie en snelle service staan altijd centraal.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <article
                key={reason.title}
                className="group rounded-3xl bg-white p-8 shadow-[0_12px_35px_rgba(15,23,42,0.08)] ring-1 ring-slate-200 transition duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,23,42,0.14)]"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon />
                </div>

                <h3 className="text-xl font-bold text-slate-950">
                  {reason.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-600">
                  {reason.text}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}