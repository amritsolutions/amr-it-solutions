"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Hoe weet ik of mijn computer een virus heeft?",
    answer:
      "Een trage computer, veel pop-ups, onverwachte foutmeldingen of vreemde programma's kunnen wijzen op een virus of malware.",
  },
  {
    question: "Verwijderen jullie ook malware en spyware?",
    answer:
      "Ja. Wij verwijderen niet alleen virussen, maar ook malware, spyware, adware en andere ongewenste software.",
  },
  {
    question: "Blijven mijn bestanden behouden?",
    answer:
      "In de meeste gevallen wel. We proberen jouw documenten, foto's en andere belangrijke bestanden veilig te behouden tijdens het opschonen.",
  },
  {
    question: "Hoe kan ik nieuwe besmettingen voorkomen?",
    answer:
      "Na de controle geven we advies over veilig internetgebruik, updates en goede beveiligingssoftware zodat de kans op een nieuwe besmetting veel kleiner wordt.",
  },
];

export default function VirusFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-5 text-3xl font-extrabold text-slate-950 sm:text-4xl">
            Veelgestelde vragen over virus verwijderen
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Hieronder vind je antwoorden op de meest gestelde vragen over het
            verwijderen van virussen, malware en andere schadelijke software.
          </p>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition-all duration-300 hover:border-blue-200 hover:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                >
                  <span>{faq.question}</span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 ${
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