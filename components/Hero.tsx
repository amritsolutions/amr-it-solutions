import Image from "next/image";

function LightningIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="M13 2 4.8 13.2h6.1L10 22l9.2-12.2h-6.4L13 2Z"
        fill="currentColor"
      />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <path
        d="M12 22s7-6.1 7-13A7 7 0 1 0 5 9c0 6.9 7 13 7 13Z"
        fill="currentColor"
      />
      <circle cx="12" cy="9" r="2.5" fill="white" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
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

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-7 w-7">
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path
        d="M4.5 21c.5-4.7 3.2-7 7.5-7s7 2.3 7.5 7h-15Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MessageIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="M20 11.5a7.5 7.5 0 0 1-8 7.5 8.8 8.8 0 0 1-3.2-.7L4 20l1.5-4A7.5 7.5 0 1 1 20 11.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5">
      <rect x="4" y="4" width="6" height="6" rx="1" fill="currentColor" />
      <rect x="14" y="4" width="6" height="6" rx="1" fill="currentColor" />
      <rect x="4" y="14" width="6" height="6" rx="1" fill="currentColor" />
      <rect x="14" y="14" width="6" height="6" rx="1" fill="currentColor" />
    </svg>
  );
}

const features = [
  {
    title: "Snelle service",
    description: "Snel geholpen, zonder lange wachttijden.",
    icon: LightningIcon,
  },
  {
    title: "Breda & omgeving",
    description: "Lokaal actief in Breda en omliggende plaatsen.",
    icon: LocationIcon,
  },
  {
    title: "Betrouwbaar & veilig",
    description: "Uw gegevens en systemen zijn in veilige handen.",
    icon: ShieldIcon,
  },
  {
    title: "Persoonlijk advies",
    description: "Oplossingen die passen bij uw situatie.",
    icon: PersonIcon,
  },
];

export default function Hero() {
  return (
    <section id="home" className="relative w-full overflow-hidden bg-white">
      {/* Desktopachtergrond */}
      <div className="absolute inset-0 hidden bg-white lg:block">
        <Image
          src="/images/hero.jpg"
          alt="Moderne IT-werkplek met laptop en serverapparatuur"
          fill
          priority
          sizes="100vw"
          className="object-contain object-right"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, #ffffff 0%, rgba(255,255,255,1) 27%, rgba(255,255,255,0.97) 38%, rgba(255,255,255,0.72) 49%, rgba(255,255,255,0.24) 62%, rgba(255,255,255,0) 76%)",
          }}
        />

        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-white via-white/70 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-6 pb-14 pt-10 sm:px-10 sm:pt-12 lg:min-h-[930px] lg:px-16 lg:pb-16 lg:pt-20 xl:px-20">
        {/* Mobiele afbeelding */}
        <div className="relative mb-9 h-[260px] overflow-hidden rounded-[1.75rem] sm:h-[360px] lg:hidden">
          <Image
            src="/images/hero.jpg"
            alt="Moderne IT-werkplek met laptop en serverapparatuur"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 0px"
            className="object-cover object-[68%_center]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
        </div>

        <div className="flex flex-col lg:min-h-[834px]">
          <div className="max-w-[650px] animate-fade-up">
            <div className="mb-7 inline-flex items-center gap-3 rounded-full bg-blue-50 px-5 py-3 text-xs font-bold uppercase tracking-wide text-blue-600 sm:text-sm">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
              IT Support in Breda & omgeving
            </div>

            <h1 className="max-w-[670px] text-[2.65rem] font-extrabold leading-[1.07] tracking-[-0.045em] text-slate-950 sm:text-[3.6rem] lg:text-[4.15rem] xl:text-[4.4rem]">
              IT-oplossingen
              <br />
              voor particulieren
              <br />
              <span className="text-blue-600">én bedrijven.</span>
            </h1>

            <p className="mt-7 max-w-[610px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              AMR IT Solutions helpt met computerreparaties,
              Windows-installaties, Microsoft 365, websites, WiFi-problemen en
              betrouwbare IT-support in Breda en omgeving.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href="#contact"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-blue-600 px-7 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
              >
                <MessageIcon />
                Vraag direct hulp
              </a>

              <a
                href="#diensten"
                className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-white px-7 py-4 text-sm font-semibold text-slate-800 shadow-sm ring-1 ring-slate-300 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
              >
                <GridIcon />
                Bekijk diensten
              </a>
            </div>
          </div>

          {/* Informatiekaarten */}
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-auto lg:grid-cols-4 lg:pt-20">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article
                  key={feature.title}
                  className="flex min-h-[132px] items-start gap-4 rounded-2xl bg-white/95 p-5 shadow-[0_12px_35px_rgba(15,23,42,0.10)] ring-1 ring-slate-200/90 backdrop-blur-md transition duration-200 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(15,23,42,0.14)] sm:p-6"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                    <Icon />
                  </div>

                  <div className="min-w-0 pt-0.5">
                    <h2 className="font-bold leading-5 text-slate-950">
                      {feature.title}
                    </h2>

                    <p className="mt-2 text-sm leading-5 text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}