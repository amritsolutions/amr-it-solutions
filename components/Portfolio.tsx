import Link from "next/link";
import {
  ArrowRight,
  Cloud,
  Gauge,
  Globe2,
  type LucideIcon,
} from "lucide-react";

type Project = {
  category: string;
  title: string;
  text: string;
  tags: string[];
  icon: LucideIcon;
  href: string;
};

const projects: Project[] = [
  {
    category: "Webdesign",
    title: "Professionele bedrijfswebsite",
    text: "Een moderne en responsive bedrijfswebsite met snelle laadtijd, contactformulier, basis-SEO en een professionele uitstraling.",
    tags: ["Responsive", "SEO", "Next.js"],
    icon: Globe2,
    href: "/website-laten-maken",
  },
  {
    category: "IT Support",
    title: "Laptop sneller maken",
    text: "Een trage laptop opgeschoond, Windows geoptimaliseerd en advies gegeven over een SSD- en geheugenupgrade.",
    tags: ["Windows", "Optimalisatie", "Support"],
    icon: Gauge,
    href: "/laptop-sneller-maken",
  },
  {
    category: "Microsoft 365",
    title: "Microsoft 365 inrichting",
    text: "Outlook, OneDrive, Teams en e-mailinstellingen ingericht voor professioneel, veilig en overzichtelijk werken.",
    tags: ["Outlook", "OneDrive", "Teams"],
    icon: Cloud,
    href: "/microsoft-365",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* Subtiele achtergrondglow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 -z-10 h-[340px] w-[340px] rounded-full bg-cyan-100/30 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold uppercase tracking-[0.14em] text-blue-600">
            <span className="h-2 w-2 rounded-full bg-blue-600" />
            Portfolio
          </div>

          <h2 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            Projecten & praktijkvoorbeelden
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
            Een overzicht van praktische IT-oplossingen waarmee wij
            particulieren en bedrijven kunnen helpen.
          </p>
        </div>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.07)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_28px_65px_rgba(37,99,235,0.16)]"
              >
                {/* Compactere blauwe header */}
                <div className="relative flex h-40 items-center justify-center overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-slate-900">
                  <div
                    aria-hidden="true"
                    className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-cyan-400/20 blur-2xl transition-transform duration-500 group-hover:scale-125"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute -bottom-16 -left-10 h-40 w-40 rounded-full bg-blue-300/20 blur-2xl"
                  />

                  <div className="relative flex flex-col items-center gap-3 text-white">
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white/15 group-hover:shadow-[0_12px_35px_rgba(59,130,246,0.38)]">
                      <Icon className="h-8 w-8" aria-hidden="true" />
                    </div>

                    <span className="text-sm font-bold uppercase tracking-[0.16em]">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-2xl font-bold leading-snug tracking-tight text-slate-950">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-[15px] leading-7 text-slate-600">
                    {project.text}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-bold text-blue-600"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={project.href}
                    aria-label={`Bekijk ${project.title}`}
                    className="mt-auto flex items-center justify-between pt-8 text-sm font-bold text-blue-600"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      Project bekijken
                    </span>

                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_8px_20px_rgba(37,99,235,0.28)]">
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex justify-center">
          <Link
            href="/#contact"
            className="group inline-flex items-center gap-3 rounded-full bg-blue-600 px-8 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(37,99,235,0.28)] transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-[0_20px_45px_rgba(37,99,235,0.38)]"
          >
            Ook een project starten?
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}