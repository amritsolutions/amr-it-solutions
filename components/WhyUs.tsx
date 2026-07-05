const reasons = [
  {
    icon: "⚡",
    title: "Snelle service",
    text: "Vaak dezelfde dag geholpen bij computerproblemen, WiFi-storingen en softwareproblemen.",
  },
  {
    icon: "👨‍💻",
    title: "Persoonlijke aanpak",
    text: "Je hebt direct contact met één persoon die met je meedenkt en duidelijke oplossingen biedt.",
  },
  {
    icon: "📍",
    title: "Breda & omgeving",
    text: "IT-hulp aan huis, op locatie of op afstand voor particulieren en kleine bedrijven.",
  },
  {
    icon: "💻",
    title: "IT & Webdesign",
    text: "Van computerreparaties en Microsoft 365 tot professionele websites en cloudoplossingen.",
  },
  {
    icon: "🔒",
    title: "Betrouwbare oplossingen",
    text: "Veilige, stabiele en toekomstbestendige IT-oplossingen waar je op kunt vertrouwen.",
  },
  {
    icon: "💬",
    title: "Duidelijke communicatie",
    text: "Geen moeilijke IT-taal, maar eerlijk advies en heldere uitleg zodat je precies weet waar je aan toe bent.",
  },
];

export default function WhyUs() {
  return (
    <section
      id="waarom"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Waarom kiezen voor AMR IT Solutions?
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Betrouwbare IT-oplossingen met persoonlijke service
        </h2>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-slate-600">
          AMR IT Solutions helpt particulieren, zzp'ers en kleine bedrijven
          met betrouwbare IT-oplossingen. Persoonlijk contact, duidelijke
          communicatie en snelle service staan altijd centraal.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reasons.map((reason) => (
          <div
            key={reason.title}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
          >
            <div className="mb-5 text-4xl">{reason.icon}</div>

            <h3 className="text-xl font-bold text-slate-900">
              {reason.title}
            </h3>

            <p className="mt-3 leading-7 text-slate-600">
              {reason.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}