const projects = [
  {
    category: "Webdesign",
    title: "Bedrijfswebsite",
    text: "Een moderne website voor een lokale ondernemer met duidelijke diensten en contactmogelijkheden.",
  },
  {
    category: "Cloud",
    title: "Microsoft 365 inrichting",
    text: "E-mail, OneDrive en Teams ingericht voor professioneel en veilig samenwerken.",
  },
  {
    category: "IT Support",
    title: "Laptop optimalisatie",
    text: "Een trage laptop opgeschoond, geüpdatet en sneller gemaakt voor dagelijks gebruik.",
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
          Recente projecten
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
          Een selectie van websites en IT-projecten die AMR IT Solutions kan uitvoeren.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.title}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex h-48 items-center justify-center bg-gradient-to-br from-blue-50 to-slate-100">
              <span className="text-sm font-semibold text-blue-600">
                {project.category}
              </span>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-semibold">{project.title}</h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {project.text}
              </p>

              <a
                href="#contact"
                className="mt-5 inline-block text-sm font-semibold text-blue-600"
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