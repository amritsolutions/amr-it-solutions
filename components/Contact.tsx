"use client";

import { useState } from "react";

function LocationIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path
        d="M12 22s7-6.1 7-13A7 7 0 1 0 5 9c0 6.9 7 13 7 13Z"
        fill="currentColor"
      />
      <circle cx="12" cy="9" r="2.5" fill="#020617" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <path
        d="M7.2 3.8 10 7.3 8.4 9.5c1.1 2.4 3.7 5 6.1 6.1l2.2-1.6 3.5 2.8c.5.4.7 1.1.4 1.7l-.7 1.5c-.4.8-1.2 1.3-2.1 1.2C10.1 20.4 3.6 13.9 2.8 6.2c-.1-.9.4-1.7 1.2-2.1l1.5-.7c.6-.3 1.3-.1 1.7.4Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-6 w-6"
    >
      <rect
        x="3"
        y="5"
        width="18"
        height="14"
        rx="2.5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="m5 7 7 5 7-5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SendIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="m3 11 17-8-7.5 18-2.1-7.4L3 11Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m10.4 13.6 4.3-4.3"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className="h-5 w-5"
    >
      <path
        d="m5 12.5 4.2 4.2L19 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    setSent(false);
    setError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Het bericht kon niet worden verzonden.");
      }

      setSent(true);
      form.reset();

      window.setTimeout(() => {
        setSent(false);
      }, 6000);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white to-slate-50 py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-[2rem] bg-slate-950 text-white shadow-[0_25px_70px_rgba(15,23,42,0.22)]">
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {/* Linkerkant */}
            <div className="relative px-7 py-12 sm:px-10 lg:px-14 lg:py-16">
              <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-600/15 blur-3xl" />

              <div className="relative">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-blue-400">
                  Contact
                </p>

                <h2 className="mt-4 max-w-lg text-4xl font-extrabold tracking-tight sm:text-5xl">
                  Hulp nodig met IT?
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-slate-300 sm:text-lg">
                  Neem contact op voor computerproblemen, websites, Microsoft
                  365, WiFi, printers of andere IT-vragen.
                </p>

                <div className="mt-10 space-y-4">
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                      <LocationIcon />
                    </div>

                    <div>
                      <p className="text-sm text-slate-400">Werkgebied</p>
                      <p className="mt-0.5 font-semibold text-white">
                        Breda en omgeving
                      </p>
                    </div>
                  </div>

                  <a
                    href="tel:+31649718684"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-blue-400/40 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                      <PhoneIcon />
                    </div>

                    <div>
                      <p className="text-sm text-slate-400">Telefoon</p>
                      <p className="mt-0.5 font-semibold text-white">
                        06 49718684
                      </p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@amritsolutions.nl"
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:border-blue-400/40 hover:bg-white/[0.07]"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                      <MailIcon />
                    </div>

                    <div className="min-w-0">
                      <p className="text-sm text-slate-400">E-mail</p>
                      <p className="mt-0.5 break-all font-semibold text-white">
                        info@amritsolutions.nl
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulier */}
            <div className="bg-white/[0.035] px-7 py-12 sm:px-10 lg:px-14 lg:py-16">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Stuur direct een bericht
                  </h3>

                  <p className="mt-2 leading-7 text-slate-400">
                    Vertel kort waarmee we kunnen helpen. We nemen zo snel
                    mogelijk contact met je op.
                  </p>
                </div>

                {sent && (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-4 text-sm leading-6 text-emerald-300"
                  >
                    <span className="mt-0.5 shrink-0">
                      <CheckIcon />
                    </span>

                    <span>
                      Bedankt! We hebben je bericht ontvangen en nemen zo snel
                      mogelijk contact met je op.
                    </span>
                  </div>
                )}

                {error && (
                  <div
                    role="alert"
                    className="rounded-2xl border border-red-400/25 bg-red-400/10 px-4 py-4 text-sm leading-6 text-red-300"
                  >
                    Het verzenden is niet gelukt. Probeer het opnieuw of neem
                    telefonisch contact op.
                  </div>
                )}

                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Naam
                  </label>

                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    autoComplete="name"
                    placeholder="Uw naam"
                    required
                    className="min-h-[58px] w-full rounded-2xl border border-slate-700 bg-white/[0.07] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:bg-white/[0.1] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    E-mailadres
                  </label>

                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    autoComplete="email"
                    placeholder="naam@voorbeeld.nl"
                    required
                    className="min-h-[58px] w-full rounded-2xl border border-slate-700 bg-white/[0.07] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:bg-white/[0.1] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-medium text-slate-300"
                  >
                    Waarmee kunnen wij helpen?
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    placeholder="Beschrijf kort uw vraag of probleem..."
                    rows={6}
                    required
                    className="w-full resize-y rounded-2xl border border-slate-700 bg-white/[0.07] px-5 py-4 text-white outline-none transition placeholder:text-slate-500 focus:border-blue-400 focus:bg-white/[0.1] focus:ring-4 focus:ring-blue-500/10"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-2xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  {submitting ? (
                    "Bericht verzenden..."
                  ) : (
                    <>
                      Bericht verzenden
                      <SendIcon />
                    </>
                  )}
                </button>

                <p className="flex items-center justify-center gap-2 text-center text-sm text-slate-400">
                  <span className="text-blue-400">
                    <CheckIcon />
                  </span>
                  Meestal binnen één werkdag antwoord
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* Google Maps */}
        <div className="mt-14 overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.10)] ring-1 ring-slate-200">
          <iframe
            title="Locatie AMR IT Solutions in Breda"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79374.54472286106!2d4.681941777056458!3d51.559900647613816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6a1b47e17d16d%3A0xe5057ea284d71b41!2sBreda!5e0!3m2!1snl!2snl!4v1782939734087!5m2!1snl!2snl"
            width="100%"
            height="400"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="block min-h-[340px] w-full"
          />
        </div>
      </div>
    </section>
  );
}