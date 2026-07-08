import {
  Clock3,
  ShieldCheck,
  Smartphone,
  MessageCircle,
} from "lucide-react";

const reasons = [
  {
    Icon: Clock3,
    title: "Snelle oplevering",
    text: "Binnen korte tijd staat jouw professionele website online.",
  },
  {
    Icon: ShieldCheck,
    title: "Betrouwbare kwaliteit",
    text: "Moderne techniek, veilige code en een professionele uitstraling.",
  },
  {
    Icon: Smartphone,
    title: "Perfect op elk apparaat",
    text: "Desktop, tablet en mobiel zien er allemaal perfect uit.",
  },
  {
    Icon: MessageCircle,
    title: "Persoonlijk contact",
    text: "Geen ingewikkelde termen, maar duidelijke uitleg en korte lijnen.",
  },
];

export default function WebsiteWhy() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Waarom AMR IT Solutions?
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-950">
            Waarom kiezen klanten voor ons?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Wij bouwen niet alleen mooie websites, maar zorgen ook dat ze snel,
            veilig en gebruiksvriendelijk zijn.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600">
                <Icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}