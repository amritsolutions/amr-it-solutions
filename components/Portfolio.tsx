const projects = [
  {
    category: "Webdesign",
    title: "AMR IT Solutions website",
    text: "Een moderne bedrijfswebsite gebouwd met Next.js, Tailwind CSS, SEO, contactformulier, Google Analytics en eigen domein.",
    tags: ["Next.js", "SEO", "Vercel"],
  },
  {
    category: "IT Support",
    title: "Laptop sneller maken",
    text: "Trage laptop opgeschoond, Windows geoptimaliseerd en advies gegeven over SSD- en geheugenupgrade.",
    tags: ["Windows", "Optimalisatie", "Support"],
  },
  {
    category: "Microsoft 365",
    title: "Microsoft 365 inrichting",
    text: "Hulp bij Outlook, OneDrive, Teams en e-mailinstellingen voor professioneel en veilig werken.",
    tags: ["Outlook", "OneDrive", "Teams"],
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Portfolio
        </p>

        <h2 className="mt-3 text-4xl font-bold text-slate-900">
          Projecten & praktijkvoorbeelden
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Een overzicht van projecten en IT-oplossingen waarmee AMR IT Solutions
          klanten kan helpen.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-600 to-slate-900 text-white">
              <span className="text-sm font-semibold uppercase tracking-wide">
                {project.category}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold text-slate-950">
                {project.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {project.text}
              </p>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="mt-6 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Project bespreken →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}