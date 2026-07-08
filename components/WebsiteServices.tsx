import { Globe, Smartphone, Zap, Search, Mail, Rocket } from "lucide-react";

const services = [
  {
    Icon: Globe,
    title: "Bedrijfswebsite",
    text: "Een duidelijke website waarop klanten direct zien wie je bent en wat je aanbiedt.",
  },
  {
    Icon: Smartphone,
    title: "Responsive design",
    text: "Jouw website werkt netjes op mobiel, tablet en desktop.",
  },
  {
    Icon: Zap,
    title: "Snelle laadtijd",
    text: "Een snelle website geeft een betere ervaring en helpt bij Google.",
  },
  {
    Icon: Search,
    title: "Basis SEO",
    text: "Titels, teksten en structuur worden goed ingericht voor zoekmachines.",
  },
  {
    Icon: Mail,
    title: "Contactformulier",
    text: "Bezoekers kunnen eenvoudig contact opnemen via een werkend formulier.",
  },
  {
    Icon: Rocket,
    title: "Online zetten",
    text: "Hulp met domein, hosting, Vercel en publicatie.",
  },
];

export default function WebsiteServices() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Wat wij bouwen
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-950">
            Websites die professioneel overkomen
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Van eenvoudige bedrijfswebsites tot moderne portfolio&apos;s en
            landingspagina&apos;s.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ Icon, title, text }) => (
            <div
              key={title}
              className="group rounded-3xl border border-slate-200 bg-white p-9 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-blue-600">
                <Icon className="h-8 w-8 text-blue-600 transition group-hover:text-white" />
              </div>

              <h3 className="mt-6 text-xl font-bold text-slate-950">
                {title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">{text}</p>

              <a
                href="/#contact"
                className="mt-6 inline-block font-semibold text-blue-600 hover:text-blue-700"
              >
                Meer informatie →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}