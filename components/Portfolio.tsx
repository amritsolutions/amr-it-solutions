import Image from "next/image";
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
  image: string;
  imageAlt: string;
};

const projects: Project[] = [
  {
    category: "Webdesign",
    title: "Professionele bedrijfswebsite",
    text: "Een moderne en responsive bedrijfswebsite met snelle laadtijd, contactformulier, basis-SEO en een professionele uitstraling.",
    tags: ["Responsive", "SEO", "Next.js"],
    icon: Globe2,
    href: "/website-laten-maken",
    image: "/portfolio/webdesign.webp",
    imageAlt: "Voorbeeld van een moderne professionele bedrijfswebsite",
  },
  {
    category: "IT Support",
    title: "Laptop sneller maken",
    text: "Een trage laptop opgeschoond, Windows geoptimaliseerd en advies gegeven over een SSD- en geheugenupgrade.",
    tags: ["Windows", "Optimalisatie", "Support"],
    icon: Gauge,
    href: "/laptop-sneller-maken",
    image: "/portfolio/laptop-optimalisatie.webp",
    imageAlt: "Laptop waarop een optimalisatie en snelheidsverbetering wordt getoond",
  },
  {
    category: "Microsoft 365",
    title: "Microsoft 365 inrichting",
    text: "Outlook, OneDrive, Teams en e-mailinstellingen ingericht voor professioneel, veilig en overzichtelijk werken.",
    tags: ["Outlook", "OneDrive", "Teams"],
    icon: Cloud,
    href: "/microsoft-365",
    image: "/portfolio/microsoft-365.webp",
    imageAlt: "Microsoft 365 met Outlook OneDrive en Teams op een laptop",
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative isolate overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
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

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_14px_40px_rgba(15,23,42,0.07)] transition-all duration-300 ease-out hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_28px_65px_rgba(37,99,235,0.16)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.imageAlt}
                    fill
                    sizes="(max-width: 767px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent" />

                  <div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/75 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg backdrop-blur-md">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                    {project.category}
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
                    aria-label={`Bekijk voorbeeld van ${project.title}`}
                    className="mt-auto flex items-center justify-between pt-8 text-sm font-bold text-blue-600"
                  >
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      Bekijk voorbeeld
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
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-9 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(37,99,235,0.28)] transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-600 hover:shadow-[0_20px_45px_rgba(37,99,235,0.38)]"
          >
            Ook een project starten?
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}