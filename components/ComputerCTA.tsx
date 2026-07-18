import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import { Phone } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function ComputerCTA() {
  return (
    <section className="bg-white px-6 py-20">
      <div className="mx-auto max-w-6xl">
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
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Neem contact op via WhatsApp"
              className="inline-flex items-center gap-3 rounded-2xl border-2 border-white px-8 py-4 font-bold text-white transition hover:-translate-y-1 hover:bg-green-500 hover:border-green-500 hover:shadow-xl"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}