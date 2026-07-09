"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Waarom is mijn laptop zo traag?",
    answer:
      "Dat kan komen door een oude harde schijf, te weinig geheugen, veel opstartprogramma's, virussen of een vervuilde Windows-installatie.",
  },
  {
    question: "Helpt een SSD-upgrade echt?",
    answer:
      "Ja. Een SSD-upgrade is vaak de grootste snelheidsverbetering voor oudere laptops. Opstarten en programma's openen gaat meestal veel sneller.",
  },
  {
    question: "Is mijn laptop nog de moeite waard om te upgraden?",
    answer:
      "Dat beoordelen we eerlijk. Soms is upgraden slim, maar bij hele oude laptops kan vervangen verstandiger zijn.",
  },
  {
    question: "Hoelang duurt het om een laptop sneller te maken?",
    answer:
      "In veel gevallen kan dit dezelfde dag of de volgende werkdag, afhankelijk van het probleem en de benodigde onderdelen.",
  },
];

export default function LaptopFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Vragen over je laptop sneller maken
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