import {
  Laptop,
  Monitor,
  Zap,
  Printer,
  Globe,
  Cloud,
} from "lucide-react";

const services = [
  {
    icon: <Laptop className="h-8 w-8 text-blue-600" />,
    title: "IT Support",
    text: "Hulp bij computerproblemen, software, e-mail, accounts en dagelijks IT-gebruik.",
  },
  {
    icon: <Monitor className="h-8 w-8 text-blue-600" />,
    title: "Windows installeren",
    text: "Windows installeren, opnieuw installeren, herstellen en klaarzetten voor gebruik.",
  },
  {
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    title: "Laptop sneller maken",
    text: "Trage laptops opschonen, optimaliseren en verbeteren voor betere prestaties.",
  },
  {
    icon: <Printer className="h-8 w-8 text-blue-600" />,
    title: "Printer & WiFi",
    text: "Printers installeren, WiFi-problemen oplossen en netwerkverbindingen verbeteren.",
  },
  {
    icon: <Globe className="h-8 w-8 text-blue-600" />,
    title: "Websites",
    text: "Moderne websites voor zzp'ers, kleine bedrijven en portfolio's.",
  },
  {
    icon: <Cloud className="h-8 w-8 text-blue-600" />,
    title: "Microsoft 365",
    text: "Hulp met Outlook, OneDrive, Teams, Exchange en Microsoft 365 instellingen.",
  },
];

export default function Services() {
  return (
    <section
  id="diensten"
  className="mx-auto max-w-7xl px-6 py-20"
>
      <h2 className="text-3xl font-bold tracking-tight md:text-5xl">
        Onze diensten
      </h2>

      <p className="mt-4 max-w-2xl text-slate-600">
        Van computerproblemen tot moderne cloudoplossingen. Wij helpen snel,
        duidelijk en professioneel.
      </p>

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.title}
            className="rounded-2xl border border-slate-200 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="mb-5 text-3xl">{service.icon}</div>

            <h3 className="text-xl font-semibold">{service.title}</h3>

            <p className="mt-3 text-sm leading-6 text-slate-600">
              {service.text}
            </p>

            <a
              href="#"
              className="mt-5 inline-block text-sm font-semibold text-blue-600"
            >
              Meer informatie →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}