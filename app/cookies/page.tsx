export default function CookiesPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Cookiebeleid</h1>

      <p>
        Deze website gebruikt cookies om de website goed te laten functioneren
        en, na toestemming, bezoekersstatistieken te verzamelen via Google
        Analytics.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Welke cookies gebruiken wij?
      </h2>

      <ul className="list-disc ml-6 space-y-2">
        <li>Noodzakelijke cookies</li>
        <li>Google Analytics (na toestemming)</li>
      </ul>

      <p className="mt-8">
        Je kunt jouw cookiekeuze altijd wijzigen door de cookies van deze
        website in je browser te verwijderen.
      </p>
    </main>
  );
}