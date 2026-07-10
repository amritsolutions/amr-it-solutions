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
      "In de meeste gevallen wel. We proberen jouw documenten, foto's en andere bestanden veilig te behouden tijdens het opschonen.",
  },
  {
    question: "Hoe kan ik nieuwe besmettingen voorkomen?",
    answer:
      "Na de controle geven we advies over veilig internetgebruik, updates en goede beveiligingssoftware zodat de kans op een nieuwe besmetting kleiner wordt.",
  },
];

export default function VirusFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Vragen over virus verwijderen
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