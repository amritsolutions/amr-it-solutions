export default function Stats() {
  const stats = [
    {
      icon: "⚡",
      title: "Snelle service",
      text: "Vaak dezelfde dag geholpen",
    },
    {
      icon: "👨‍💻",
      title: "Persoonlijke aanpak",
      text: "Direct contact met één aanspreekpunt",
    },
    {
      icon: "📍",
      title: "Breda & omgeving",
      text: "Hulp op locatie en op afstand",
    },
    {
      icon: "💻",
      title: "IT & Webdesign",
      text: "Complete IT-oplossingen",
    },
  ];

  return (
    <section className="bg-slate-900 py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <div
            key={stat.title}
            className="rounded-3xl border border-slate-700 bg-slate-800 p-8 text-center transition duration-300 hover:-translate-y-2 hover:border-blue-500"
          >
            <div className="mb-5 text-5xl">{stat.icon}</div>

            <h3 className="text-xl font-bold text-white">
              {stat.title}
            </h3>

            <p className="mt-3 text-slate-300">
              {stat.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}