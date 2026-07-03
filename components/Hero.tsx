import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid flex-1 items-center gap-16 py-20 lg:grid-cols-2"
    >
      <div className="max-w-3xl">
        <div className="mb-6 flex flex-wrap gap-3">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            💻 IT Support Breda
          </span>

          <span className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
            ⭐ Persoonlijke service
          </span>
        </div>

        <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-900 md:text-7xl">
          IT-oplossingen
          <br />
          voor particulieren
          <br />
          én bedrijven.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          AMR IT Solutions helpt particulieren en bedrijven met
          computerreparaties, Windows-installaties, Microsoft 365,
          websites, WiFi-problemen en betrouwbare IT-support in
          Breda en omgeving.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Vraag direct hulp
          </a>

          <a
            href="#diensten"
            className="rounded-full border border-slate-300 px-8 py-4 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
          >
            Bekijk diensten
          </a>
        </div>

        <div className="mt-12 flex flex-wrap gap-8 text-sm font-medium text-slate-600">
          <div>⚡ Snelle service</div>
          <div>📍 Breda & omgeving</div>
          <div>✔ Persoonlijk advies</div>
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src="/images/hero.jpg"
          alt="AMR IT Solutions"
          width={700}
          height={700}
          priority
          className="rounded-3xl shadow-2xl transition duration-500 hover:scale-105"
        />
      </div>
    </section>
  );
}