import {
  Globe,
  Smartphone,
  Zap,
  Search,
  Mail,
  Rocket,
} from "lucide-react";

const services = [
  {
    Icon: Globe,
    title: "Bedrijfswebsite",
    text: "Een professionele website waarop bezoekers direct zien wie je bent en wat je doet.",
  },
  {
    Icon: Smartphone,
    title: "Responsive design",
    text: "Perfect werkend op mobiel, tablet en desktop voor de beste gebruikerservaring.",
  },
  {
    Icon: Zap,
    title: "Snelle laadtijd",
    text: "Razendsnelle websites die prettig werken voor bezoekers én beter scoren in Google.",
  },
  {
    Icon: Search,
    title: "Basis SEO",
    text: "Technisch goed opgebouwd zodat jouw website beter gevonden kan worden.",
  },
  {
    Icon: Mail,
    title: "Contactformulier",
    text: "Een professioneel contactformulier waarmee bezoekers eenvoudig contact opnemen.",
  },
  {
    Icon: Rocket,
    title: "Online zetten",
    text: "Wij regelen hosting, domein, Vercel en zorgen dat jouw website direct online staat.",
  },
];

export default function WebsiteServices() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
            Onze oplossingen
          </p>

          <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Websites die professioneel overkomen
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Van moderne bedrijfswebsites tot portfolio's en landingspagina's.
            Alles wordt snel, mobielvriendelijk en professioneel gebouwd.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, text }) => (
            <article
              key={title}
              className="group relative flex min-h-[340px] flex-col overflow-hidden rounded-[30px] border border-slate-200/80 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_24px_60px_rgba(37,99,235,0.16)]"
            >
              {/* Blauwe bovenlijn */}
              <div className="absolute left-0 top-0 h-[3px] w-28 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 transition-all duration-500 group-hover:w-full" />

              {/* Glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-blue-100/40 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg">
                <Icon className="h-8 w-8" />
              </div>

              <h3 className="mt-7 text-2xl font-bold text-slate-950">
                {title}
              </h3>

              <p className="mt-4 flex-1 leading-7 text-slate-600">
                {text}
              </p>

              <a
                href="/#contact"
                className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3"
              >
                Meer informatie
                <span>→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}