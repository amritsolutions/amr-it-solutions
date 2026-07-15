import {
  Laptop,
  Monitor,
  Zap,
  Printer,
  Globe,
  Cloud,
  HardDrive,
} from "lucide-react";

const services = [
  {
    icon: <Laptop className="h-8 w-8 text-blue-600" />,
    title: "IT Support Breda",
    text: "Snelle hulp bij computerproblemen, software, e-mail, accounts en dagelijks IT-gebruik voor particulieren en kleine bedrijven in Breda en omgeving.",
    link: "/computerreparatie",
  },
  {
    icon: <Monitor className="h-8 w-8 text-blue-600" />,
    title: "Computerreparatie & Windows",
    text: "Windows installeren, opnieuw installeren, herstellen en computers gebruiksklaar maken. Ook hulp bij foutmeldingen, updates en trage systemen.",
    link: "/computerreparatie",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Laptop sneller maken",
    text: "Trage laptops opschonen, optimaliseren en verbeteren met slimme instellingen, softwarecontrole en advies over SSD- of geheugenupgrades.",
    link: "/laptop-sneller-maken",
  },
  {
    icon: <Printer className="h-8 w-8 text-blue-600" />,
    title: "Printer, WiFi & netwerk",
    text: "Hulp bij printers installeren, WiFi-problemen oplossen, netwerkverbindingen verbeteren en apparaten opnieuw verbinden.",
    link: "/printer-wifi-netwerk",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Website laten maken",
    text: "Moderne, snelle en mobiele websites voor zzp’ers, kleine bedrijven en portfolio’s. Inclusief domein, hostingadvies en basis-SEO.",
    link: "/website-laten-maken",
  },
  {
    icon: <Cloud className="h-8 w-8 text-blue-600" />,
    title: "Microsoft 365 hulp",
    text: "Ondersteuning bij Outlook, OneDrive, Teams, Exchange, e-mailinstellingen en Microsoft 365 voor particulieren en bedrijven.",
    link: "/microsoft-365",
  },
  {
  icon: <HardDrive className="h-8 w-8 text-blue-600" />,
  title: "Data overzetten & back-up",
  text: "Bestanden, foto's, documenten, e-mail en instellingen veilig overzetten naar een nieuwe computer of een betrouwbare back-up maken.",
  link: "/data-overzetten",
},
];

export default function Services() {
  return (
    <section id="diensten" className="mx-auto max-w-7xl px-6 py-24">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        Diensten
      </p>

      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-5xl">
        IT support, computerreparatie en websites in Breda
      </h2>

      <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
        AMR IT Solutions helpt particulieren, studenten, zzp’ers en kleine
        bedrijven met praktische IT-oplossingen. Van trage laptops en
        WiFi-problemen tot Microsoft 365 en professionele websites.
      </p>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
  <div
    key={service.title}
    className={`rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
      index === services.length - 1 ? "lg:col-start-2" : ""
    }`}
  >
            <div className="mb-5">{service.icon}</div>

            <h3 className="text-xl font-semibold text-slate-950">
              {service.title}
            </h3>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              {service.text}
            </p>

            <a
              href={service.link}
              className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-700"
            >
              Meer informatie →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}