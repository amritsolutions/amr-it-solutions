import Breadcrumb from "@/components/Breadcrumb";

export default function ComputerHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
        <div>
          <Breadcrumb current="Computerreparatie" />

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Computerreparatie Breda
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-950 lg:text-6xl">
            Computer of laptop laten repareren in Breda?
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Snelle en betrouwbare hulp bij computerproblemen,
            Windows-installaties, SSD-upgrades, virusverwijdering en meer.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/#contact"
              className="rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
            >
              📞 Vraag direct hulp aan
            </a>

            <a
              href="/#contact"
              className="rounded-full border border-green-500 bg-white px-7 py-4 font-semibold text-green-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              💬 WhatsApp ons
            </a>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-4">
            {[
              ["⚡", "Snelle service"],
              ["📍", "Breda & omgeving"],
              ["💻", "Laptop & PC"],
              ["💬", "Persoonlijk advies"],
            ].map(([icon, text]) => (
              <div key={text} className="text-slate-700">
                <div className="text-3xl">{icon}</div>
                <p className="mt-2 text-sm font-medium">{text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative hidden lg:block">
          <div className="absolute -inset-10 rounded-full bg-blue-200/40 blur-3xl" />

          <div className="relative rounded-[2.5rem] bg-white/70 p-10 shadow-2xl ring-1 ring-blue-100 backdrop-blur">
            <div className="absolute right-10 top-8 grid grid-cols-4 gap-3 opacity-40">
              {Array.from({ length: 16 }).map((_, i) => (
                <span key={i} className="h-2 w-2 rounded-full bg-blue-400" />
              ))}
            </div>

            <div className="relative mx-auto h-72 w-[32rem]">
              <div className="absolute bottom-8 left-8 h-44 w-72 rounded-3xl bg-slate-900 shadow-2xl">
                <div className="mx-auto mt-4 h-28 w-60 rounded-2xl bg-blue-600 p-5">
                  <div className="mx-auto h-14 w-14 rounded-full border-8 border-white" />
                  <div className="mx-auto mt-4 h-3 w-32 rounded-full bg-white/80" />
                </div>
                <div className="mx-auto mt-3 h-3 w-40 rounded-full bg-slate-700" />
              </div>

              <div className="absolute bottom-0 left-0 h-6 w-96 rounded-b-3xl bg-slate-300 shadow-xl" />
              <div className="absolute bottom-3 left-32 h-3 w-28 rounded-full bg-slate-400" />

              <div className="absolute right-8 bottom-8 h-56 w-32 rounded-3xl bg-slate-900 shadow-2xl">
                <div className="mx-auto mt-8 h-4 w-20 rounded-full bg-slate-700" />
                <div className="mx-auto mt-4 h-4 w-20 rounded-full bg-slate-700" />
                <div className="mx-auto mt-8 h-8 w-8 rounded-full bg-blue-600 shadow-lg shadow-blue-500/40" />
              </div>

              <div className="absolute bottom-0 right-0 h-24 w-24 rounded-full bg-white shadow-xl">
                <div className="mx-auto mt-10 h-10 w-14 rounded-b-full bg-slate-200" />
                <div className="absolute left-8 top-3 h-14 w-4 -rotate-12 rounded-full bg-green-500" />
                <div className="absolute left-12 top-2 h-16 w-5 rotate-12 rounded-full bg-green-600" />
                <div className="absolute left-5 top-5 h-12 w-4 -rotate-45 rounded-full bg-green-400" />
              </div>

              <div className="absolute bottom-2 left-52 h-5 w-36 rotate-[-15deg] rounded-full bg-blue-600 shadow-lg">
                <div className="ml-4 mt-1 h-3 w-24 rounded-full bg-blue-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}