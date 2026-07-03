const reviews = [
  {
    name: "Kevin uit Breda",
    text: "Mijn laptop was dezelfde dag weer snel. Duidelijke communicatie en uitstekende service!",
  },
  {
    name: "Lisa",
    text: "AMR IT Solutions heeft mijn website gebouwd. Erg professioneel en precies zoals ik wilde.",
  },
  {
    name: "Ahmed",
    text: "Vriendelijk geholpen met Microsoft 365 en Outlook. Alles werkt nu perfect.",
  },
];

export default function Reviews() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Reviews
        </p>

        <h2 className="mt-3 text-4xl font-bold">
          Wat klanten over ons zeggen
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Persoonlijke service, duidelijke communicatie en snelle oplossingen.
        </p>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {reviews.map((review) => (
          <div
            key={review.name}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="mb-5 text-2xl text-yellow-400">
              ⭐⭐⭐⭐⭐
            </div>

            <p className="leading-7 text-slate-600">
              "{review.text}"
            </p>

            <div className="mt-6 border-t pt-4">
              <h3 className="font-semibold">{review.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}