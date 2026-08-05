"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Welke bestanden kunnen jullie overzetten?",
    answer:
      "Wij zetten documenten, foto's, video's, muziek, downloads en andere persoonlijke bestanden veilig over naar jouw nieuwe computer of externe schijf.",
  },
  {
    question: "Kunnen jullie ook e-mail en Outlook overzetten?",
    answer:
      "Ja. Wij helpen met Outlook, e-mailaccounts, contacten, agenda's en bestaande e-mailgegevens zodat je direct verder kunt werken.",
  },
  {
    question: "Blijven mijn bestanden privé?",
    answer:
      "Absoluut. Wij behandelen jouw gegevens vertrouwelijk en gebruiken deze uitsluitend voor de afgesproken dataoverdracht.",
  },
  {
    question: "Kunnen jullie ook een back-up voor mij instellen?",
    answer:
      "Ja. We stellen een veilige back-up in via OneDrive of een externe harde schijf en leggen uit hoe je deze eenvoudig blijft gebruiken.",
  },
];

export default function DataFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Veelgestelde vragen over data overzetten
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Hieronder vind je antwoorden op de meest gestelde vragen over het
            veilig overzetten van bestanden, Outlook en het maken van back-ups.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg"
              >
                <button
                  type="button"
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="flex w-full items-center justify-between px-7 py-6 text-left font-semibold text-slate-900 transition-colors hover:bg-slate-50"
                >
                  <span className="pr-6 text-lg">
                    {faq.question}
                  </span>

                  <ChevronDown
                    className={`h-5 w-5 shrink-0 text-blue-600 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`grid overflow-hidden transition-all duration-300 ${
                    isOpen
                      ? "grid-rows-[1fr]"
                      : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-slate-100 px-7 py-6 leading-7 text-slate-600">
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