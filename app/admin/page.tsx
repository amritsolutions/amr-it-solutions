import { cookies } from "next/headers";
import { redirect } from "next/navigation";
export default async function AdminPage() {
  const cookieStore = await cookies();

  const session = cookieStore.get("amr_admin_session")?.value;
  const expectedSession = process.env.ADMIN_SESSION_SECRET;

  if (!expectedSession || session !== expectedSession) {
    redirect("/admin/login");
  }
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-medium text-blue-600">
            AMR IT Solutions
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            AI Beheer
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Beheer hier later de kennis, veelgestelde vragen en instellingen
            van de AMR AI Assistent.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-2xl">🧠</div>

            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              Kennisbank
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Beheer informatie over computers, Microsoft 365, websites,
              wifi, printers, Windows en beveiliging.
            </p>

            <a
  href="/admin/knowledge"
  className="mt-5 inline-flex rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
>
  Kennis beheren
</a>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-2xl">❓</div>

            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              Veelgestelde vragen
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Voeg later vragen en antwoorden toe die de chatbot direct kan
              gebruiken.
            </p>

            <button
              type="button"
              className="mt-5 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              FAQ beheren
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-2xl">⚙️</div>

            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              AI-instellingen
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Beheer later de toon, antwoordlengte en andere chatbotregels.
            </p>

            <button
              type="button"
              className="mt-5 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Instellingen
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-2xl">📩</div>

            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              Offerteaanvragen
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Hier kunnen we later alle aanvragen uit de chatbot overzichtelijk
              bewaren.
            </p>

            <button
              type="button"
              className="mt-5 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Aanvragen bekijken
            </button>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="text-2xl">📊</div>

            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              Statistieken
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Later tonen we hier bijvoorbeeld chats, populaire onderwerpen en
              offerteconversies.
            </p>

            <button
              type="button"
              className="mt-5 rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Statistieken
            </button>
          </section>

          <section className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <div className="text-2xl">🔒</div>

            <h2 className="mt-4 text-lg font-semibold text-slate-900">
              Beveiliging
            </h2>

            <p className="mt-2 text-sm leading-6 text-slate-700">
              Deze beheeromgeving krijgt eerst een login voordat we hem live
              gebruiken. Zet gevoelige beheerfuncties nooit onbeveiligd online.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}