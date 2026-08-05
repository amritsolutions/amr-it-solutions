"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Cookie, ShieldCheck, X } from "lucide-react";

type ConsentChoice = "accepted" | "declined";

const CONSENT_KEY = "amr-cookie-consent";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);

    if (!consent) {
      setShow(true);
    }
  }, []);

  function saveConsent(choice: ConsentChoice) {
    localStorage.setItem(CONSENT_KEY, choice);
    setShow(false);

    window.dispatchEvent(
      new CustomEvent("amr-cookie-consent-change", {
        detail: choice,
      }),
    );
  }

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-[9999] px-4 pb-4 sm:px-6 sm:pb-6">
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.22)] sm:p-7">
          {/* Decoratieve achtergrond */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-100/70 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-20 h-52 w-52 rounded-full bg-cyan-100/50 blur-3xl"
          />

          <div className="relative z-10">
            <div className="flex items-start gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                <Cookie className="h-7 w-7" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-extrabold uppercase tracking-[0.24em] text-blue-600">
                      Cookies & privacy
                    </p>

                    <h2 className="mt-2 text-xl font-extrabold tracking-tight text-slate-950 sm:text-2xl">
                      Jouw privacy is belangrijk
                    </h2>
                  </div>

                  <button
                    type="button"
                    onClick={() => saveConsent("declined")}
                    aria-label="Cookiebanner sluiten en analytische cookies weigeren"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition hover:bg-slate-200 hover:text-slate-900"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base">
                  Wij gebruiken noodzakelijke cookies om de website goed te
                  laten werken. Met jouw toestemming gebruiken we ook
                  analytische cookies om anonieme bezoekersstatistieken te
                  verzamelen en de website te verbeteren.
                </p>

                <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-semibold">
                  <Link
                    href="/privacy"
                    className="text-blue-600 transition hover:text-blue-700 hover:underline"
                  >
                    Privacybeleid
                  </Link>

                  <Link
                    href="/cookies"
                    className="text-blue-600 transition hover:text-blue-700 hover:underline"
                  >
                    Cookiebeleid
                  </Link>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-col-reverse gap-3 border-t border-slate-200/80 pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-xs leading-5 text-slate-500 sm:max-w-[330px]">
                <ShieldCheck className="h-4 w-4 shrink-0 text-blue-600" />

                <span>
                  Je kunt jouw keuze later wijzigen via het cookiebeleid.
                </span>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  type="button"
                  onClick={() => saveConsent("declined")}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50"
                >
                  Alleen noodzakelijk
                </button>

                <button
                  type="button"
                  onClick={() => saveConsent("accepted")}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-700 hover:to-blue-600 hover:shadow-[0_16px_36px_rgba(37,99,235,0.34)]"
                >
                  Alles accepteren
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}