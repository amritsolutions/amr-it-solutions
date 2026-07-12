"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Kunnen jullie mijn printer installeren?",
    answer:
      "Ja. Wij installeren printers via USB of WiFi en zorgen dat printen en scannen correct werkt.",
  },
  {
    question: "Kunnen jullie problemen met slechte WiFi oplossen?",
    answer:
      "Ja. We controleren het bereik, de routerinstellingen en mogelijke storingsbronnen en adviseren over een stabielere verbinding.",
  },
  {
    question: "Helpen jullie ook met routers en modems?",
    answer:
      "Ja. Wij helpen met het instellen, beveiligen en optimaliseren van routers en modems.",
  },
  {
    question: "Kunnen jullie apparaten opnieuw verbinden met het netwerk?",
    answer:
      "Ja. We kunnen computers, laptops, smartphones, printers en andere apparaten opnieuw met het netwerk verbinden.",
  },
];

export default function PrinterFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Vragen over printers, WiFi en netwerken
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
                className="flex w-full items-center justify-between p-6 text-left font-semibold text-slate-900"
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