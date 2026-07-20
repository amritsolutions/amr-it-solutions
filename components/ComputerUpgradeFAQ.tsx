"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Heeft een SSD-upgrade echt zoveel verschil?",
    answer:
      "Ja. Een SSD-upgrade is één van de beste manieren om een trage computer weer snel te maken. Opstarten, programma's openen en bestanden laden gaat vaak meerdere keren sneller.",
  },
  {
    question: "Wanneer is extra RAM-geheugen nodig?",
    answer:
      "Als je computer traag wordt tijdens multitasken of bij zware programma's, kan extra RAM zorgen voor merkbaar betere prestaties.",
  },
  {
    question: "Kunnen jullie mijn bestanden behouden?",
    answer:
      "In veel gevallen wel. Bij upgrades en de meeste reparaties blijven je bestanden behouden. Bij een herinstallatie adviseren we altijd eerst een back-up te maken.",
  },
  {
    question: "Repareren jullie ook laptops?",
    answer:
      "Ja. Wij repareren en upgraden zowel desktops als laptops van de meeste bekende merken.",
  },
  {
    question: "Is repareren goedkoper dan een nieuwe computer kopen?",
    answer:
      "Dat hangt af van de staat van je computer. Wij geven eerlijk advies en vertellen vooraf of een reparatie of upgrade nog de moeite waard is.",
  },
];

export default function ComputerUpgradeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Veelgestelde vragen over upgrades & reparaties
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Hier vind je antwoorden op de meest gestelde vragen over computer- en
            laptopreparaties.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-slate-900 hover:bg-slate-50"
                >
                  {faq.question}

                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="border-t border-slate-200 px-6 py-5 leading-7 text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}