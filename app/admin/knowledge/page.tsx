import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import { supabaseAdmin } from "@/lib/supabase/server";

export default async function KnowledgeAdminPage() {
  const cookieStore = await cookies();

  const session = cookieStore.get("amr_admin_session")?.value;
  const expectedSession = process.env.ADMIN_SESSION_SECRET;

  if (!expectedSession || session !== expectedSession) {
    redirect("/admin/login");
  }

  const { data: knowledgeItems, error } = await supabaseAdmin
    .from("knowledge")
    .select("id, title, slug, content, active, updated_at")
    .order("title", { ascending: true });

  if (error) {
    console.error("Kennisbank ophalen mislukt:", error);
  }

  return (
    <main className="min-h-screen bg-slate-50 px-6 py-10">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <a
            href="/admin"
            className="text-sm font-medium text-blue-600 hover:text-blue-700"
          >
            ← Terug naar dashboard
          </a>

          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">
                Kennisbank
              </h1>

              <p className="mt-2 max-w-2xl text-slate-600">
                Deze informatie komt rechtstreeks uit Supabase en kan straks
                vanuit het dashboard worden aangepast.
              </p>
            </div>

            <a
              href="/admin/knowledge/new"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              + Nieuw onderwerp
            </a>
          </div>
        </div>

        {error && (
          <div className="mb-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
            De kennisbank kon niet worden geladen.
          </div>
        )}

        {!error && (!knowledgeItems || knowledgeItems.length === 0) && (
          <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center text-slate-600">
            Er staan nog geen kennisitems in de database.
          </div>
        )}

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {knowledgeItems?.map((item) => (
            <a
              key={item.id}
              href={`/admin/knowledge/${item.slug}`}
              className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h2>

                    <span
                      className={
                        item.active
                          ? "rounded-full bg-green-50 px-2 py-1 text-[10px] font-medium text-green-700"
                          : "rounded-full bg-slate-100 px-2 py-1 text-[10px] font-medium text-slate-500"
                      }
                    >
                      {item.active ? "Actief" : "Uit"}
                    </span>
                  </div>

                  <p className="mt-3 line-clamp-4 text-sm leading-6 text-slate-600">
                    {item.content}
                  </p>

                  <p className="mt-4 text-xs text-slate-400">
                    Slug: {item.slug}
                  </p>
                </div>

                <span className="text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-600">
                  →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </main>
  );
}