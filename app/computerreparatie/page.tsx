import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata = {
  title: "Computerreparatie Breda | Laptop & PC Reparatie | AMR IT Solutions",
  description:
    "Computer of laptop laten repareren in Breda? AMR IT Solutions helpt met computerreparatie, Windows-installaties, SSD-upgrades, virusverwijdering en IT-support voor particulieren en bedrijven.",
};

export default function ComputerReparatiePage() {
  return (
    <main className="min-h-screen bg-white">
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
              Snelle en betrouwbare hulp bij computerproblemen,
              Windows-installaties, SSD-upgrades, virusverwijdering en meer.
              Voor particulieren en kleine bedrijven in Breda en omgeving.
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
              src="/images/hero.jpg"
              alt="Computerreparatie en IT support"
              width={700}
              height={500}
              className="relative rounded-[2rem] shadow-2xl"
              priority
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Onze diensten
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Waarmee kunnen wij helpen?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Wij lossen de meest voorkomende computer- en laptopproblemen snel
              en professioneel op.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["💻", "Trage computer", "Wij maken je computer weer snel door opschoning en optimalisatie."],
              ["🛡️", "Virus verwijderen", "Last van virussen of malware? Wij maken je systeem weer veilig."],
              ["⚙️", "Windows installeren", "Schone installatie van Windows inclusief updates en drivers."],
              ["💾", "SSD upgrade", "Maak je laptop tot wel vijf keer sneller met een SSD-upgrade."],
              ["📂", "Data overzetten", "Veilig bestanden, foto's en documenten overzetten naar een nieuwe computer."],
              ["🖨️", "Printer & WiFi", "Problemen met printers of WiFi? Wij zorgen dat alles weer werkt."],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-blue-600 px-8 py-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold">
            Hulp nodig met je computer of laptop?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Neem vandaag nog contact op. Wij helpen snel met
            computerreparaties, Windows-problemen en IT-support in Breda en
            omgeving.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Neem contact op
          </a>
        </div>
      </section>
    </main>
  );
}