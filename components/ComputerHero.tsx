import Image from "next/image";
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

          <Image
            src="/images/computerrepair.png"
            alt="Computerreparatie laptop en pc"
            width={700}
            height={520}
            className="relative w-full rounded-[2rem] shadow-2xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}