export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-4xl px-6 pt-24 pb-28">
        <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
          Juridische informatie
        </p>

        <h1 className="mt-5 text-5xl font-extrabold tracking-tight text-slate-950">
          Privacyverklaring
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          AMR IT Solutions respecteert jouw privacy en verwerkt
          persoonsgegevens uitsluitend voor het beantwoorden van
          contactaanvragen, het leveren van IT-diensten en het verbeteren van
          onze website volgens de geldende privacywetgeving (AVG).
        </p>

        <div className="mt-14 space-y-12">
          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Welke gegevens verwerken wij?
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Wanneer je contact met ons opneemt, kunnen wij de volgende
              persoonsgegevens verwerken:
            </p>

            <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-600">
              <li>Naam</li>
              <li>E-mailadres</li>
              <li>Telefoonnummer (indien opgegeven)</li>
              <li>Bericht via het contactformulier</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Waarvoor gebruiken wij deze gegevens?
            </h2>

            <ul className="mt-5 list-disc space-y-2 pl-6 text-slate-600">
              <li>Om contactaanvragen te beantwoorden.</li>
              <li>Voor het uitvoeren van onze IT-diensten.</li>
              <li>Om afspraken met je te kunnen maken.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Google Analytics
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Na jouw toestemming gebruiken wij Google Analytics om inzicht te
              krijgen in het gebruik van onze website. Deze gegevens worden
              uitsluitend gebruikt om onze website en dienstverlening verder te
              verbeteren.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Jouw rechten
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Je hebt het recht om jouw persoonsgegevens in te zien, te laten
              corrigeren of te laten verwijderen. Neem hiervoor gerust contact
              met ons op.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-slate-950">
              Contact
            </h2>

            <p className="mt-4 leading-8 text-slate-600">
              Heb je vragen over deze privacyverklaring? Neem dan contact op via{" "}
              <strong>info@amritsolutions.nl</strong>.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}