"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Hoe lang duurt het bouwen van een website?",
    answer:
      "De meeste websites zijn binnen 1 tot 3 weken klaar, afhankelijk van de wensen.",
  },
  {
    question: "Werkt mijn website ook op mobiele telefoons?",
    answer:
      "Ja. Alle websites die wij bouwen zijn volledig responsive en werken perfect op mobiel, tablet en desktop.",
  },
  {
    question: "Kunnen jullie ook mijn domeinnaam en hosting regelen?",
    answer:
      "Ja. Wij helpen met domeinnamen, hosting, e-mail en het online zetten van de website.",
  },
  {
    question: "Kan mijn website later uitgebreid worden?",
    answer:
      "Zeker. We bouwen websites die eenvoudig uitgebreid kunnen worden met nieuwe pagina's en functies.",
  },
];

export default function WebsiteFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-950">
            Antwoorden op de meest gestelde vragen
          </h2>

          <p className="mt-5 text-lg text-slate-600">
            Grote kans dat jouw vraag hieronder al wordt beantwoord.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left font-semibold text-slate-900"
              >
                {faq.question}

                <ChevronDown
                  className={`transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="border-t border-slate-100 px-6 py-5 text-slate-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}