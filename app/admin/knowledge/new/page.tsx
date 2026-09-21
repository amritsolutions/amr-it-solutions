import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { supabaseAdmin } from "@/lib/supabase/server";

export default async function NewKnowledgePage() {
  const cookieStore = await cookies();

  const session = cookieStore.get("amr_admin_session")?.value;
  const expectedSession = process.env.ADMIN_SESSION_SECRET;

  if (!expectedSession || session !== expectedSession) {
    redirect("/admin/login");
  }

  async function createKnowledge(formData: FormData) {
    "use server";

    const cookieStore = await cookies();

    const session = cookieStore.get("amr_admin_session")?.value;
    const expectedSession = process.env.ADMIN_SESSION_SECRET;

    if (!expectedSession || session !== expectedSession) {
      redirect("/admin/login");
    }

    const title = String(formData.get("title") || "").trim();
    const slug = String(formData.get("slug") || "")
      .trim()
      .toLowerCase();
    const content = String(formData.get("content") || "").trim();
    const active = formData.get("active") === "on";

    if (!title || !slug || !content) {
      throw new Error("Titel, slug en inhoud zijn verplicht.");
    }

    const validSlug = /^[a-z0-9-]+$/.test(slug);

    if (!validSlug) {
      throw new Error(
        "De slug mag alleen kleine letters, cijfers en streepjes bevatten."
      );
    }

    const { error } = await supabaseAdmin
      .from("knowledge")
      .insert({
        title,
        slug,
        content,
        active,
      });

    if (error) {
      console.error("Kennisitem aanmaken mislukt:", error);

      if (error.code === "23505") {
        throw new Error("Deze slug bestaat al.");
      }

      throw new Error("Het kennisitem kon niet worden aangemaakt.");
    }

    revalidatePath("/admin/knowledge");

    redirect("/admin/knowledge");
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-4xl">
        <a
          href="/admin/knowledge"
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          ← Terug naar kennisbank
        </a>

        <div className="mt-4">
          <p className="text-sm font-medium text-blue-600">
            AMR AI kennisbank
          </p>

          <h1 className="mt-2 text-3xl font-bold text-slate-900">
            Nieuw onderwerp
          </h1>

          <p className="mt-2 max-w-2xl text-slate-600">
            Voeg nieuwe kennis toe die de AMR AI Assistent later kan gebruiken.
          </p>
        </div>

        <form
          action={createKnowledge}
          className="mt-8 space-y-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
        >
          <div>
            <label
              htmlFor="title"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Titel
            </label>

            <input
              id="title"
              name="title"
              type="text"
              required
              maxLength={100}
              placeholder="Bijv. Apple Mac"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="slug"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Slug
            </label>

            <input
              id="slug"
              name="slug"
              type="text"
              required
              maxLength={60}
              placeholder="bijv. apple-mac"
              className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />

            <p className="mt-2 text-xs text-slate-500">
              Gebruik alleen kleine letters, cijfers en streepjes. Bijvoorbeeld:
              apple-mac
            </p>
          </div>

          <div>
            <label
              htmlFor="content"
              className="mb-2 block text-sm font-medium text-slate-700"
            >
              Kennis voor de AI
            </label>

            <textarea
              id="content"
              name="content"
              required
              rows={14}
              placeholder="Beschrijf hier wat AMR IT Solutions over dit onderwerp weet en aanbiedt..."
              className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4">
            <input
              name="active"
              type="checkbox"
              defaultChecked
              className="h-4 w-4"
            />

            <div>
              <p className="text-sm font-medium text-slate-900">
                Direct actief
              </p>

              <p className="text-xs text-slate-500">
                Als dit aanstaat, mag de chatbot deze kennis gebruiken.
              </p>
            </div>
          </label>

          <div className="flex justify-end gap-3 border-t border-slate-200 pt-6">
            <a
              href="/admin/knowledge"
              className="rounded-xl border border-slate-300 px-4 py-2.5 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
            >
              Annuleren
            </a>

            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              Onderwerp toevoegen
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}