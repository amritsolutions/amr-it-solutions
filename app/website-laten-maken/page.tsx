export const metadata = {
  title: "Website laten maken Breda | Moderne websites | AMR IT Solutions",
  description:
    "Website laten maken in Breda? AMR IT Solutions bouwt moderne, snelle en responsive websites voor zzp'ers, starters en kleine bedrijven.",
};
import Breadcrumb from "@/components/Breadcrumb";
export default function WebsiteLatenMakenPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto max-w-7xl px-6 py-24">
        <Breadcrumb current="Website laten maken" />
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Website laten maken Breda
        </p>

        <h1 className="mt-4 text-5xl font-bold text-slate-900">
          Een professionele website voor jouw bedrijf
        </h1>

        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
          AMR IT Solutions bouwt moderne, snelle en mobiele websites voor
          zzp&apos;ers, starters en kleine bedrijven in Breda en omgeving.
        </p>

        <a
          href="/#contact"
          className="mt-8 inline-block rounded-full bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
        >
          Website bespreken
        </a>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Wat wij bouwen
            </p>

            <h2 className="mt-3 text-4xl font-bold text-slate-900">
              Websites die professioneel overkomen
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Van eenvoudige bedrijfswebsites tot moderne portfolio&apos;s en
              landingspagina&apos;s.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["🌐", "Bedrijfswebsite", "Een duidelijke website waarop klanten direct zien wie je bent en wat je aanbiedt."],
              ["📱", "Responsive design", "Jouw website werkt netjes op mobiel, tablet en desktop."],
              ["⚡", "Snelle laadtijd", "Een snelle website geeft een betere ervaring en helpt bij Google."],
              ["🔍", "Basis SEO", "We richten titels, teksten en structuur goed in voor zoekmachines."],
              ["📩", "Contactformulier", "Bezoekers kunnen eenvoudig contact opnemen via een werkend formulier."],
              ["🚀", "Online zetten", "Wij helpen met domein, hosting, Vercel en publicatie."],
            ].map(([icon, title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="text-4xl">{icon}</div>
                <h3 className="mt-4 text-xl font-bold text-slate-900">
                  {title}
                </h3>
                <p className="mt-3 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-5xl rounded-[2rem] bg-blue-600 px-8 py-16 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold">
            Wil je een website laten maken?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Neem contact op en bespreek jouw idee. We denken mee over uitstraling,
            structuur, techniek en vindbaarheid.
          </p>

          <a
            href="/#contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-4 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            Vraag een website aan
          </a>
        </div>
      </section>
    </main>
  );
}