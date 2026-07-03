import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-blue-50 via-white to-slate-100 px-6 py-20 lg:px-12"
    >
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-slate-300/40 blur-3xl" />

      <div className="relative grid items-center gap-16 lg:grid-cols-2">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-6 flex flex-wrap gap-3">
            <span className="rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm">
              💻 IT Support Breda
            </span>

            <span className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200">
              ⭐ Persoonlijke service
            </span>
          </div>

          <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-slate-950 md:text-7xl">
            IT-oplossingen
            <br />
            voor particulieren
            <br />
            én bedrijven.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            AMR IT Solutions helpt met computerreparaties,
            Windows-installaties, Microsoft 365, websites, WiFi-problemen en
            betrouwbare IT-support in Breda en omgeving.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="rounded-full bg-blue-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700"
            >
              Vraag direct hulp
            </a>

            <a
              href="#diensten"
              className="rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:bg-slate-50"
            >
              Bekijk diensten
            </a>
          </div>

          <div className="mt-12 grid gap-4 text-sm font-medium text-slate-700 sm:grid-cols-3">
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200">
              ⚡ Snelle service
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200">
              📍 Breda & omgeving
            </div>
            <div className="rounded-2xl bg-white/80 p-4 shadow-sm ring-1 ring-slate-200">
              ✔ Persoonlijk advies
            </div>
          </div>
        </div>

        <div className="relative flex justify-center animate-fade-up">
          <div className="absolute inset-0 rounded-[2rem] bg-blue-600/20 blur-3xl" />

          <Image
            src="/images/hero.jpg"
            alt="AMR IT Solutions"
            width={760}
            height={760}
            priority
            className="relative rounded-[2rem] shadow-2xl ring-1 ring-slate-200 transition duration-500 hover:scale-[1.02]"
          />
        </div>
      </div>
    </section>
  );
}