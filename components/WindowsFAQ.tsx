"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Hoelang duurt een Windows-installatie?",
    answer:
      "Een standaard Windows-installatie duurt meestal 1 tot 2 uur, afhankelijk van de snelheid van de computer en eventuele extra werkzaamheden zoals een back-up of software-installatie.",
  },
  {
    question: "Blijven mijn bestanden behouden?",
    answer:
      "Waar mogelijk maken we eerst een veilige back-up van jouw documenten, foto's en andere belangrijke bestanden voordat we Windows opnieuw installeren. Zo voorkom je dat waardevolle gegevens verloren gaan.",
  },
  {
    question: "Installeren jullie ook Windows 11?",
    answer:
      "Ja. Wij installeren zowel Windows 10 als Windows 11 en controleren vooraf of jouw computer geschikt is voor Windows 11.",
  },
  {
    question: "Worden alle drivers ook geïnstalleerd?",
    answer:
      "Ja. Na de installatie zorgen we ervoor dat wifi, geluid, videokaart, printer en andere hardware direct correct functioneren.",
  },
];

export default function WindowsFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Veelgestelde vragen over Windows installeren
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Hieronder vind je antwoorden op de meest gestelde vragen over het
            opnieuw installeren van Windows en onze werkwijze.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <article
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:border-blue-200 hover:shadow-lg"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                >
                  <span>{faq.question}</span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr] border-t border-slate-200"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="px-6 py-5 leading-7 text-slate-600">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}