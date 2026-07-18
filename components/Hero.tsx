import Image from "next/image";

const features = [
  {
    icon: "⚡",
    title: "Snelle service",
    description: "Snel geholpen, zonder lange wachttijden.",
  },
  {
    icon: "📍",
    title: "Breda & omgeving",
    description: "Lokaal actief in Breda en omliggende plaatsen.",
  },
  {
    icon: "🛡️",
    title: "Betrouwbaar & veilig",
    description: "Uw gegevens en systemen zijn in veilige handen.",
  },
  {
    icon: "👤",
    title: "Persoonlijk advies",
    description: "Oplossingen die passen bij uw situatie.",
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[880px] overflow-hidden bg-white lg:min-h-[920px]"
    >
      {/* Grote achtergrondfoto */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.jpg"
          alt="Moderne IT-werkplek van AMR IT Solutions"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[68%_center]"
        />

        {/* Witte overgang aan de linkerkant */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 via-[32%] to-transparent lg:via-white/85 lg:via-[40%]" />

        {/* Lichte onderlaag voor leesbaarheid */}
        <div className="absolute inset-0 bg-gradient-to-t from-white/75 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex min-h-[880px] max-w-[1440px] flex-col px-6 pb-10 pt-20 sm:px-10 lg:min-h-[920px] lg:px-16 lg:pb-12 lg:pt-24">
        {/* Hoofdinhoud */}
        <div className="max-w-[610px]">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full bg-blue-50 px-5 py-3 text-sm font-bold uppercase tracking-wide text-blue-600">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
            IT Support in Breda & omgeving
          </div>

          <h1 className="text-[3.4rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-slate-950 sm:text-6xl lg:text-[4.35rem]">
            IT-oplossingen
            <br />
            voor particulieren
            <br />
            <span className="text-blue-600">én bedrijven.</span>
          </h1>

          <p className="mt-8 max-w-[590px] text-lg leading-8 text-slate-600">
            AMR IT Solutions helpt met computerreparaties,
            Windows-installaties, Microsoft 365, websites, WiFi-problemen en
            betrouwbare IT-support in Breda en omgeving.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-200 hover:-translate-y-0.5 hover:bg-blue-700"
            >
              <span aria-hidden="true">◯</span>
              Vraag direct hulp
            </a>

            <a
              href="#diensten"
              className="inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-white px-8 py-4 text-base font-semibold text-slate-800 shadow-sm ring-1 ring-slate-300 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-50"
            >
              <span aria-hidden="true">▦</span>
              Bekijk diensten
            </a>
          </div>
        </div>

        {/* Kaarten onderaan */}
        <div className="mt-auto grid gap-4 pt-16 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="flex min-h-[126px] items-start gap-5 rounded-2xl bg-white/95 p-6 shadow-[0_10px_35px_rgba(15,23,42,0.10)] ring-1 ring-slate-200 backdrop-blur-sm"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-2xl">
                {feature.icon}
              </div>

              <div>
                <h2 className="font-bold text-slate-950">{feature.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}