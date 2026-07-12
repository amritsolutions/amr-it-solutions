import { HardDrive, MessageCircle } from "lucide-react";

export default function DataCTA() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-blue-600 via-blue-600 to-blue-700 px-10 py-20 text-center text-white shadow-[0_30px_80px_rgba(37,99,235,0.35)]">
        <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-100">
          Nieuwe computer gekocht?
        </p>

        <h2 className="mt-4 text-4xl font-extrabold lg:text-5xl">
          Zet je bestanden veilig over
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
          Wij helpen met het veilig overzetten van bestanden, foto's,
          documenten, Outlook, instellingen en het instellen van een
          betrouwbare back-up.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <a
            href="/#contact"
            className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <HardDrive className="h-5 w-5" />
            Data laten overzetten
          </a>

          <a
            href="/#contact"
            className="inline-flex items-center gap-3 rounded-2xl border-2 border-white px-8 py-4 font-bold text-white transition-all duration-300 hover:border-green-500 hover:bg-green-500"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}