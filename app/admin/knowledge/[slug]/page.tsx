import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import { supabaseAdmin } from "@/lib/supabase/server";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function KnowledgeEditPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const cookieStore = await cookies();

  const session = cookieStore.get("amr_admin_session")?.value;
  const expectedSession = process.env.ADMIN_SESSION_SECRET;

  if (!expectedSession || session !== expectedSession) {
    redirect("/admin/login");
  }

  const { data: knowledgeItem, error } = await supabaseAdmin
    .from("knowledge")
    .select("id, title, slug, content, active, updated_at")
    .eq("slug", slug)
    .single();

  if (error || !knowledgeItem) {
    console.error("Kennisitem ophalen mislukt:", error);
    notFound();
  }

  async function updateKnowledge(formData: FormData) {
    "use server";

    const cookieStore = await cookies();

    const session = cookieStore.get("amr_admin_session")?.value;
    const expectedSession = process.env.ADMIN_SESSION_SECRET;

    if (!expectedSession || session !== expectedSession) {
      redirect("/admin/login");
    }

    const title = String(formData.get("title") || "").trim();
    const content = String(formData.get("content") || "").trim();
    const active = formData.get("active") === "on";

    if (!title || !content) {
      throw new Error("Titel en inhoud zijn verplicht.");
    }

    const { error: updateError } = await supabaseAdmin
      .from("knowledge")
      .update({
        title,
        content,
        active,
        updated_at: new Date().toISOString(),
      })
      .eq("slug", slug);

    if (updateError) {
      console.error("Kennisitem opslaan mislukt:", updateError);
      throw new Error("Opslaan is niet gelukt.");
    }

    revalidatePath("/admin/knowledge");
    revalidatePath(`/admin/knowledge/${slug}`);

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
            {knowledgeItem.title}
          </h1>

          <p className="mt-2 text-slate-600">
            Pas hier de informatie aan die de AI-assistent voor dit onderwerp
            gebruikt.
          </p>
        </div>

        <form
          action={updateKnowledge}
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
              defaultValue={knowledgeItem.title}
              required
              maxLength={100}
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
              type="text"
              value={knowledgeItem.slug}
              disabled
              className="w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-slate-500"
            />

            <p className="mt-2 text-xs text-slate-500">
              De slug laten we voorlopig vast staan zodat de kennisrouter niet
              kapot kan gaan.
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
              defaultValue={knowledgeItem.content}
              required
              rows={14}
              className="w-full resize-y rounded-xl border border-slate-300 px-4 py-3 text-sm leading-6 text-slate-900 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
            />
          </div>

          <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-slate-200 p-4">
            <input
              name="active"
              type="checkbox"
              defaultChecked={knowledgeItem.active}
              className="h-4 w-4"
            />

            <div>
              <p className="text-sm font-medium text-slate-900">
                Actief
              </p>

              <p className="text-xs text-slate-500">
                Alleen actieve kennis gebruiken we in de chatbot.
              </p>
            </div>
          </label>

          <div className="flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
            <p className="text-xs text-slate-500">
              Laatst bijgewerkt:{" "}
              {new Date(knowledgeItem.updated_at).toLocaleString("nl-NL")}
            </p>

            <div className="flex gap-3">
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
                Opslaan
              </button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
}