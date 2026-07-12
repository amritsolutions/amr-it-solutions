"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Kunnen jullie Outlook voor mij instellen?",
    answer:
      "Ja. Wij koppelen jouw e-mailaccount aan Outlook en helpen met verzenden, ontvangen, agenda en synchronisatie.",
  },
  {
    question: "Helpen jullie ook met OneDrive?",
    answer:
      "Ja. Wij stellen OneDrive in en zorgen dat bestanden goed synchroniseren tussen jouw computer, laptop en smartphone.",
  },
  {
    question: "Kunnen jullie Microsoft Teams uitleggen?",
    answer:
      "Ja. Wij helpen met vergaderingen, chats, accounts, camera, microfoon en samenwerken binnen Teams.",
  },
  {
    question: "Helpen jullie ook met Microsoft 365 voor bedrijven?",
    answer:
      "Ja. Wij ondersteunen zzp’ers en kleine bedrijven met accounts, e-mail, Teams, OneDrive en basisbeveiliging.",
  },
];

export default function MicrosoftFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Vragen over Microsoft 365
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