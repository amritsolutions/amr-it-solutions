"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Welke bestanden kunnen jullie overzetten?",
    answer:
      "Wij kunnen documenten, foto's, video's, muziek, downloads en andere persoonlijke bestanden overzetten naar een nieuwe computer of externe schijf.",
  },
  {
    question: "Kunnen jullie ook e-mail en Outlook overzetten?",
    answer:
      "Ja. Waar mogelijk helpen we met Outlook, e-mailaccounts, contacten, agenda's en bestaande e-mailgegevens.",
  },
  {
    question: "Blijven mijn bestanden privé?",
    answer:
      "Ja. Wij gaan zorgvuldig en vertrouwelijk om met jouw gegevens en gebruiken deze alleen voor de afgesproken overdracht.",
  },
  {
    question: "Kunnen jullie ook een back-up voor mij instellen?",
    answer:
      "Ja. Wij kunnen een back-up instellen via OneDrive of een externe harde schijf en leggen uit hoe je deze later gebruikt.",
  },
];

export default function DataFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Vragen over data overzetten en back-ups
          </h2>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                type="button"
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left font-semibold text-slate-900"
              >
                {faq.question}

                <ChevronDown
                  className={`h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 ${
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