export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 pt-24 pb-32">
      <div className="max-w-3xl">
        <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
          Juridische informatie
        </p>

        <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-slate-950">
          Cookiebeleid
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Deze website gebruikt cookies om goed te functioneren. Daarnaast
          gebruiken wij, na jouw toestemming, Google Analytics om anonieme
          bezoekersstatistieken te verzamelen. Zo kunnen wij onze website
          verbeteren en gebruiksvriendelijker maken.
        </p>

        <h2 className="mt-14 text-3xl font-bold text-slate-950">
          Welke cookies gebruiken wij?
        </h2>

        <ul className="mt-6 list-disc space-y-3 pl-6 text-lg leading-8 text-slate-600">
          <li>
            <strong>Noodzakelijke cookies</strong> – Deze zijn nodig om de
            website correct te laten functioneren.
          </li>

          <li>
            <strong>Google Analytics</strong> – Alleen na jouw toestemming
            verzamelen wij anonieme bezoekersstatistieken om de website verder
            te verbeteren.
          </li>
        </ul>

        <h2 className="mt-14 text-3xl font-bold text-slate-950">
          Cookievoorkeur wijzigen
        </h2>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Je kunt jouw cookiekeuze op ieder moment wijzigen door de cookies van
          deze website in je browser te verwijderen. Bij een volgend bezoek
          krijg je opnieuw de mogelijkheid om jouw voorkeur aan te geven via de
          cookiebanner.
        </p>

        <div className="mt-16 border-t border-slate-200" />
      </div>
    </main>
  );
}