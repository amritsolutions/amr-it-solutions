import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export default function ComputerHero() {
  return (
    <section className="bg-gradient-to-br from-white via-blue-50 to-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div>
          <Breadcrumb current="Computerreparatie" />

          <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
            Computerreparatie Breda
          </p>

          <h1 className="mt-4 text-5xl font-bold leading-tight text-slate-950">
            Computer of laptop laten repareren in Breda?
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            AMR IT Solutions helpt particulieren en kleine bedrijven met snelle
            computerreparaties, laptopproblemen, Windows-installaties,
            virusverwijdering en hardware-upgrades.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="/#contact"
              className="rounded-full bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
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

          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {[
              ["⚡", "Snelle service"],
              ["📍", "Breda & omgeving"],
              ["💻", "Laptop & PC reparatie"],
              ["💬", "Persoonlijk advies"],
            ].map(([icon, text]) => (
              <div key={text} className="flex items-center gap-3 text-slate-700">
                <span className="text-2xl">{icon}</span>
                <span className="font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-blue-200/40 blur-3xl" />

          <Image
            src="/images/computerreparatie-hero.png"
            alt="Computerreparatie Breda"
            width={800}
            height={600}
            className="relative w-full rounded-[2rem]"
            priority
          />
        </div>
      </div>
    </section>
  );
}