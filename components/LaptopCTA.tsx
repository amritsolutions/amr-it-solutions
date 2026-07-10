export default function LaptopCTA() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl rounded-[2rem] bg-gradient-to-r from-blue-600 to-blue-700 px-8 py-16 text-center text-white shadow-2xl">

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-100">
          DIRECT HULP NODIG?
        </p>

        <h2 className="mt-4 text-4xl font-extrabold">
          Maak je laptop weer snel
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Last van een trage laptop? Neem vandaag nog contact op.
          Wij helpen met optimalisatie, SSD-upgrades, geheugenuitbreiding
          en eerlijk advies.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href="/#contact"
            className="rounded-2xl bg-white px-8 py-4 font-bold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Neem contact op
          </a>

          <a
            href="/#contact"
            className="rounded-2xl border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-blue-600"
          >
            WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}