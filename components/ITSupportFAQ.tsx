"use client";

import { useState } from "react";
import {
  HelpCircle,
  Minus,
  Plus,
} from "lucide-react";

const faqs = [
  {
    question: "Waarvoor kan ik IT Support aanvragen?",
    answer:
      "Wij helpen onder andere met computers, laptops, WiFi, printers, Microsoft 365, Outlook, e-mailproblemen en algemene IT-vragen.",
  },
  {
    question: "Komen jullie ook aan huis in Breda?",
    answer:
      "Ja. Wij bieden IT Support aan huis in Breda en omgeving. Indien mogelijk kunnen we je ook veilig op afstand helpen.",
  },
  {
    question: "Helpen jullie ook bedrijven?",
    answer:
      "Zeker. Wij ondersteunen particulieren, zzp'ers en kleine bedrijven met professionele en betrouwbare IT-oplossingen.",
  },
  {
    question: "Kan ik ook hulp krijgen met Microsoft 365?",
    answer:
      "Ja. Wij helpen met Outlook, OneDrive, Teams, e-mailinstellingen en andere Microsoft 365-diensten.",
  },
  {
    question: "Hoe snel kunnen jullie helpen?",
    answer:
      "In veel gevallen kunnen we dezelfde dag of de volgende werkdag ondersteuning bieden. Neem contact op om de actuele mogelijkheden te bespreken.",
  },
];

export default function ITSupportFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white px-6 py-24 sm:py-28">
      {/* Achtergrondglows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-20 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-cyan-100/30 blur-[120px]"
      />

      {/* Decoratieve stippen */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-12 top-20 hidden grid-cols-6 gap-4 opacity-40 lg:grid"
      >
        {Array.from({ length: 24 }).map((_, index) => (
          <span
            key={index}
            className="h-2 w-2 rounded-full bg-blue-300"
          />
        ))}
      </div>

      <div className="mx-auto max-w-5xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-3">
            <span className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
              Veelgestelde vragen
            </span>

            <span className="h-0.5 w-8 rounded-full bg-blue-600" />
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Veelgestelde vragen over{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              IT Support
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
            Hieronder vind je antwoorden op de meest gestelde vragen over onze
            IT Support in Breda en omgeving.
          </p>
        </div>

        <div className="mt-14 space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const panelId = `faq-panel-${index}`;
            const buttonId = `faq-button-${index}`;

            return (
              <article
                key={faq.question}
                className={`group overflow-hidden rounded-[24px] border bg-white transition-all duration-300 ${
                  isOpen
                    ? "border-blue-200 shadow-[0_20px_55px_rgba(37,99,235,0.12)]"
                    : "border-slate-200/80 shadow-[0_10px_30px_rgba(15,23,42,0.05)] hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_18px_45px_rgba(37,99,235,0.1)]"
                }`}
              >
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`flex w-full items-center gap-4 px-5 py-5 text-left transition-colors duration-300 sm:px-7 sm:py-6 ${
                    isOpen ? "bg-blue-50/60" : "hover:bg-slate-50/80"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-600 text-white ring-blue-600 shadow-[0_10px_25px_rgba(37,99,235,0.25)]"
                        : "bg-blue-50 text-blue-600 ring-blue-100 group-hover:bg-blue-600 group-hover:text-white"
                    }`}
                  >
                    <HelpCircle className="h-6 w-6" />
                  </span>

                  <span className="flex-1 text-base font-extrabold text-slate-950 sm:text-lg">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ring-1 transition-all duration-300 ${
                      isOpen
                        ? "bg-blue-600 text-white ring-blue-600"
                        : "bg-blue-50 text-blue-600 ring-blue-100 group-hover:bg-blue-600 group-hover:text-white"
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="h-5 w-5" />
                    ) : (
                      <Plus className="h-5 w-5" />
                    )}
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="border-t border-blue-100 bg-white px-5 py-6 sm:px-7">
                      <p className="pl-0 leading-8 text-slate-600 sm:pl-16">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/#contact"
            className="inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_20px_45px_rgba(37,99,235,0.35)]"
          >
            Staat je vraag er niet tussen?
          </a>
        </div>
      </div>
    </section>
  );
}