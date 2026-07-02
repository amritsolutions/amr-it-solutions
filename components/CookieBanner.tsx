"use client";

import { useEffect, useState } from "react";

export default function CookieBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("amr-cookie-consent");
    if (!consent) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[9999] border-t border-slate-700 bg-slate-950 px-6 py-5 text-white shadow-2xl">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <p className="text-sm leading-6 text-slate-200">
          🍪 Deze website gebruikt cookies om de website goed te laten werken en
          bezoekersstatistieken te verzamelen via Google Analytics.
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => {
              localStorage.setItem("amr-cookie-consent", "declined");
              setShow(false);
            }}
            className="rounded-lg bg-slate-700 px-4 py-2 text-sm font-semibold hover:bg-slate-600"
          >
            Weigeren
          </button>

          <button
            onClick={() => {
              localStorage.setItem("amr-cookie-consent", "accepted");
              setShow(false);
            }}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold hover:bg-blue-700"
          >
            Accepteren
          </button>
        </div>
      </div>
    </div>
  );
}