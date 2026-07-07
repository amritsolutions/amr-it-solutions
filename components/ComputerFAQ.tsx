"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Hoe snel kunnen jullie langskomen?",
    answer:
      "In veel gevallen kunnen wij dezelfde dag of de volgende werkdag helpen, afhankelijk van de planning.",
  },
  {
    question: "Repareren jullie ook laptops?",
    answer:
      "Ja. Wij repareren zowel laptops als desktopcomputers van vrijwel alle merken.",
  },
  {
    question: "Kunnen jullie ook aan huis komen?",
    answer:
      "Ja. Wij bieden hulp aan huis in Breda en omgeving. Ook hulp op afstand is mogelijk.",
  },
  {
    question: "Wat kost een computerreparatie?",
    answer:
      "De kosten hangen af van het probleem. Neem gerust contact op voor een vrijblijvende prijsindicatie.",
  },
];

export default function ComputerFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-950">
            Antwoorden op de meest gestelde vragen
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            Heb je een vraag? Grote kans dat het antwoord hieronder staat.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="text-lg font-semibold text-slate-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`h-5 w-5 text-blue-600 transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-600 leading-7">
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