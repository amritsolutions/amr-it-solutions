export default function WhyUs() {
  return (
    <section
  id="waarom"
  className="mx-auto max-w-7xl px-6 py-24"
>
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Waarom AMR IT Solutions?
          </p>

          <h2 className="mt-3 text-4xl font-bold text-slate-900">
            Betrouwbare IT voor iedereen
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Wij helpen particulieren en bedrijven met snelle, duidelijke en
            betaalbare IT-oplossingen.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-xl font-semibold">
              Snelle service
            </h3>

            <p className="mt-3 text-slate-600">
              Vaak dezelfde dag geholpen bij computer- en netwerkproblemen.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-xl font-semibold">
              Persoonlijk advies
            </h3>

            <p className="mt-3 text-slate-600">
              Geen ingewikkelde taal, maar duidelijke uitleg en eerlijk advies.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-xl font-semibold">
              Complete oplossingen
            </h3>

            <p className="mt-3 text-slate-600">
              Van reparaties en websites tot Microsoft 365 en cloudoplossingen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}