export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold mb-8">Privacyverklaring</h1>

      <p className="mb-6">
        AMR IT Solutions respecteert jouw privacy en verwerkt persoonsgegevens
        alleen voor het beantwoorden van contactaanvragen en het leveren van
        IT-diensten.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Welke gegevens verwerken wij?
      </h2>

      <ul className="list-disc ml-6 space-y-2">
        <li>Naam</li>
        <li>E-mailadres</li>
        <li>Bericht via het contactformulier</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Google Analytics
      </h2>

      <p>
        Wij gebruiken Google Analytics om inzicht te krijgen in het gebruik van
        onze website. Hiervoor vragen wij toestemming via onze cookiebanner.
      </p>

      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Contact
      </h2>

      <p>
        Vragen over privacy? Mail naar <strong>info@amritsolutions.nl</strong>.
      </p>
    </main>
  );
}