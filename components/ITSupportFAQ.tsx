"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Waarvoor kan ik IT Support aanvragen?",
    answer:
      "Wij helpen onder andere met computers, laptops, WiFi, printers, Microsoft 365, Outlook, e-mailproblemen en algemene IT-vragen.",
  },
  {
    question: "Komen jullie ook aan huis in Breda?",
    answer:
      "Ja. Wij bieden IT Support aan huis in Breda en omgeving. Indien mogelijk kunnen we je ook op afstand helpen.",
  },
  {
    question: "Helpen jullie ook bedrijven?",
    answer:
      "Zeker. Wij ondersteunen particulieren, zzp'ers en kleine bedrijven met professionele IT-oplossingen.",
  },
  {
    question: "Kan ik ook hulp krijgen met Microsoft 365?",
    answer:
      "Ja. Wij helpen met Outlook, OneDrive, Teams, e-mailinstellingen en andere Microsoft 365-diensten.",
  },
  {
    question: "Hoe snel kunnen jullie helpen?",
    answer:
      "In veel gevallen kunnen we dezelfde dag of de volgende werkdag ondersteuning bieden. Neem contact op om de mogelijkheden te bespreken.",
  },
];

export default function ITSupportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Veelgestelde vragen over IT Support
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Hieronder vind je antwoorden op de meest gestelde vragen over onze
            IT Support in Breda.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200"
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
                  <div className="border-t border-slate-200 px-6 py-5 text-slate-600 leading-7">
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