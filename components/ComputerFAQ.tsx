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
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50 px-6 py-24 sm:py-28">
      {/* Achtergrond */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-44 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-100/40 blur-[120px]"
      />

      <div className="mx-auto max-w-4xl">
        {/* Titel */}
        <div className="text-center">
          <div className="inline-flex items-center gap-3">
            <span className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
              Veelgestelde vragen
            </span>

            <span className="h-0.5 w-8 rounded-full bg-blue-600" />
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Antwoorden op de{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              meest gestelde vragen
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Heb je een vraag? Grote kans dat het antwoord hieronder staat.
          </p>
        </div>

        {/* FAQ */}
        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <div
                key={faq.question}
                className="group overflow-hidden rounded-[24px] border border-slate-200/80 bg-white shadow-[0_12px_35px_rgba(15,23,42,0.05)] transition-all duration-300 hover:border-blue-200 hover:shadow-[0_20px_50px_rgba(37,99,235,0.12)]"
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <span className="text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-blue-600 text-white"
                        : "group-hover:bg-blue-600 group-hover:text-white"
                    }`}
                  >
                    <ChevronDown className="h-5 w-5" />
                  </span>
                </button>

                <div
                  className={`grid transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-7 py-6 text-base leading-8 text-slate-600">
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