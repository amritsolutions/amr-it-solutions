"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Hoe lang duurt het bouwen van een website?",
    answer:
      "De meeste websites zijn binnen 1 tot 3 weken klaar, afhankelijk van de omvang van het project, de gewenste functies en hoe snel de benodigde teksten en afbeeldingen beschikbaar zijn.",
  },
  {
    question: "Werkt mijn website ook op mobiele telefoons?",
    answer:
      "Ja. Iedere website die wij bouwen is responsive en wordt geschikt gemaakt voor mobiel, tablet en desktop.",
  },
  {
    question: "Kunnen jullie ook mijn domeinnaam en hosting regelen?",
    answer:
      "Ja. Wij helpen met het instellen van je domeinnaam, hosting en zakelijke e-mail en zorgen dat jouw website goed en veilig online staat.",
  },
  {
    question: "Kan mijn website later uitgebreid worden?",
    answer:
      "Zeker. We kunnen een website later uitbreiden met extra pagina's, nieuwe onderdelen en aanvullende functies wanneer jouw bedrijf groeit.",
  },
  {
    question: "Maken jullie websites voor bedrijven in Breda?",
    answer:
      "Ja. AMR IT Solutions maakt websites voor zzp'ers, starters en kleine bedrijven in Breda en omgeving. We bespreken jouw wensen en bouwen een website die past bij jouw bedrijf en doelgroep.",
  },
  {
    question: "Wordt mijn website ook geoptimaliseerd voor Google?",
    answer:
      "Ja. We zorgen voor een goede technische SEO-basis, waaronder een duidelijke paginastructuur, goede metadata, snelle laadtijden en een mobielvriendelijke website. Een hoge positie in Google kunnen we niet garanderen, maar we zorgen wel voor een sterke technische basis voor vindbaarheid.",
  },
];

export default function WebsiteFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Veelgestelde vragen over een website laten maken
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Wil je een website laten maken in Breda of omgeving? Hieronder
            beantwoorden we veelgestelde vragen over het bouwen, online zetten
            en vindbaar maken van jouw website.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-7 py-6 text-left font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                >
                  <span className="pr-6 text-lg">{faq.question}</span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-7 py-6 leading-7 text-slate-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}