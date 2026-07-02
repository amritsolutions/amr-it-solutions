"use client";

import { useEffect, useState } from "react";
export default function Contact() {
  const [sent, setSent] = useState(false);

useEffect(() => {
  setSent(window.location.search.includes("sent=true"));
}, []);

  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-24">
      <div className="rounded-3xl bg-slate-950 px-8 py-14 text-white md:px-14">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-400">
              Contact
            </p>

            <h2 className="mt-3 text-4xl font-bold">Hulp nodig met IT?</h2>

            <p className="mt-4 text-slate-300">
              Neem contact op voor computerproblemen, websites, Microsoft 365,
              WiFi, printers of andere IT-vragen.
            </p>

            <div className="mt-8 space-y-3 text-slate-300">
              <p>📧 info@amritsolutions.nl</p>
              <p>📞 +31 6 12345678</p>
              <p>📍 Breda en omgeving</p>
            </div>
          </div>

          <form action="/api/contact" method="POST" className="space-y-4">
            {sent && (
  <div className="rounded-xl border border-green-400/30 bg-green-500/10 px-4 py-3 text-sm font-medium leading-6 text-green-300">
    ✅ Bedankt! We hebben je bericht goed ontvangen. We nemen zo snel mogelijk contact met je op.
  </div>
)}
            <input
              type="text"
              name="name"
              placeholder="Naam"
              required
              className="w-full rounded-xl border border-slate-700 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400"
            />

            <input
              type="email"
              name="email"
              placeholder="E-mailadres"
              required
              className="w-full rounded-xl border border-slate-700 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400"
            />

            <textarea
              name="message"
              placeholder="Waarmee kunnen wij helpen?"
              rows={5}
              required
              className="w-full rounded-xl border border-slate-700 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Bericht verzenden
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16 overflow-hidden rounded-2xl shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79374.54472286106!2d4.681941777056458!3d51.559900647613816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6a1b47e17d16d%3A0xe5057ea284d71b41!2sBreda!5e0!3m2!1snl!2snl!4v1782939734087!5m2!1snl!2snl"
          width="100%"
          height="400"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
}