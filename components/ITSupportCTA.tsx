import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/whatsapp";

export default function ITSupportCTA() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[2rem] bg-blue-600 px-8 py-14 text-center text-white shadow-2xl shadow-blue-600/20 sm:px-12 lg:px-20">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-100">
            Direct hulp nodig?
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            Professionele IT Support in Breda
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Neem contact op met AMR IT Solutions voor snelle en persoonlijke
            hulp met computers, laptops, WiFi, printers en Microsoft 365.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-3 rounded-2xl bg-white px-8 py-5 font-bold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              IT Support aanvragen
              <ArrowRight className="h-5 w-5" />
            </Link>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 rounded-2xl border-2 border-white/70 px-8 py-5 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-blue-600"
            >
              <MessageCircle className="h-5 w-5" />
              WhatsApp ons
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}