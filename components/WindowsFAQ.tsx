"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Hoelang duurt een Windows-installatie?",
    answer:
      "Een standaard Windows-installatie duurt meestal 1 tot 2 uur, afhankelijk van de computer en eventuele extra werkzaamheden.",
  },
  {
    question: "Blijven mijn bestanden behouden?",
    answer:
      "Dat hangt af van de situatie. Indien mogelijk maken we eerst een back-up van je belangrijke bestanden voordat we Windows opnieuw installeren.",
  },
  {
    question: "Installeren jullie ook Windows 11?",
    answer:
      "Ja. We installeren zowel Windows 10 als Windows 11 en controleren of jouw computer daarvoor geschikt is.",
  },
  {
    question: "Worden alle drivers ook geïnstalleerd?",
    answer:
      "Ja. We zorgen ervoor dat wifi, geluid, videokaart, printer en andere hardware correct werken.",
  },
];

export default function WindowsFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Vragen over Windows installeren
          </h2>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between p-6 text-left font-semibold text-slate-900"
              >
                {faq.question}

                <ChevronDown
                  className={`h-5 w-5 text-blue-600 transition ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="border-t border-slate-100 px-6 py-5 leading-7 text-slate-600">
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