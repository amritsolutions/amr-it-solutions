import { Phone, MessageCircle } from "lucide-react";

export default function ComputerCTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-[2rem] bg-gradient-to-r from-blue-600 to-blue-700 px-10 py-20 text-center text-white shadow-2xl">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-100">
            Direct hulp nodig?
          </p>

          <h2 className="mt-4 text-4xl font-extrabold lg:text-5xl">
            Hulp nodig met je computer of laptop?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Neem vandaag nog contact op. Wij helpen je snel met
            computerreparaties, Windows-problemen, wifi-storingen,
            Microsoft 365 en IT-support in Breda en omgeving.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <a
              href="/#contact"
              className="inline-flex items-center gap-3 rounded-2xl bg-white px-8 py-4 font-bold text-blue-700 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Phone className="h-5 w-5" />
              Neem contact op
            </a>

            <a
              href="https://wa.me/31600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-2xl border-2 border-white px-8 py-4 font-bold text-white transition hover:bg-white hover:text-blue-700"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}