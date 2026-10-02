"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Hoe snel kunnen jullie helpen met een computerprobleem?",
    answer:
      "We proberen je zo snel mogelijk te helpen. De mogelijkheden hangen af van het probleem en onze planning. Neem contact op, dan bespreken we wat mogelijk is.",
  },
  {
    question: "Helpen jullie ook met laptops?",
    answer:
      "Ja. Wij helpen met verschillende problemen aan laptops en desktopcomputers, zoals Windows-problemen, trage systemen, malware en mogelijke hardware-upgrades.",
  },
  {
    question: "Kunnen jullie ook aan huis komen in Breda?",
    answer:
      "Ja. Wij bieden computerhulp aan huis en op locatie in Breda en omgeving. Voor problemen die op afstand opgelost kunnen worden, is ondersteuning op afstand ook mogelijk.",
  },
  {
    question: "Wat kost een computerreparatie?",
    answer:
      "De kosten zijn afhankelijk van het probleem en de benodigde werkzaamheden. Neem contact op en leg het probleem aan ons uit, dan kunnen we de mogelijkheden en kosten bespreken.",
  },
  {
    question: "Kunnen jullie een trage computer of laptop sneller maken?",
    answer:
      "Ja. We kunnen onderzoeken waardoor je computer of laptop traag is en kijken naar bijvoorbeeld software, opstartprogramma's, opslag en mogelijke SSD- of geheugenupgrades.",
  },
  {
    question: "Kunnen jullie Windows opnieuw installeren?",
    answer:
      "Ja. We kunnen helpen met het opnieuw installeren en instellen van Windows. Vooraf bespreken we wat er met je bestanden en instellingen moet gebeuren en welke aanpak geschikt is.",
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
            Veelgestelde vragen over{" "}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
              computerreparatie
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Computer- of laptopproblemen in Breda en omgeving? Hieronder
            beantwoorden we een aantal veelgestelde vragen over onze hulp.
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
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between px-7 py-6 text-left"
                >
                  <span className="pr-4 text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-600 transition-all duration-300 ${
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
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
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