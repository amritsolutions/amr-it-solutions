import {
  Printer,
  Wifi,
  Router,
  Cable,
  Monitor,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Printer,
    title: "Printer installeren",
    text: "Wij installeren printers en zorgen dat deze correct werken via USB of WiFi.",
  },
  {
    icon: Wifi,
    title: "WiFi problemen oplossen",
    text: "Last van traag of wegvallend internet? Wij zoeken de oorzaak en lossen het op.",
  },
  {
    icon: Router,
    title: "Router instellen",
    text: "We helpen met het instellen en beveiligen van jouw modem of router.",
  },
  {
    icon: Cable,
    title: "Netwerk verbinden",
    text: "Computers, laptops, printers en andere apparaten correct met elkaar verbinden.",
  },
  {
    icon: Monitor,
    title: "Nieuwe apparaten",
    text: "Een nieuwe printer of computer? Wij zorgen dat alles direct goed samenwerkt.",
  },
  {
    icon: Settings,
    title: "Persoonlijk advies",
    text: "Advies over een stabiel thuisnetwerk, WiFi-bereik en veilige instellingen.",
  },
];

export default function PrinterServices() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-blue-600">
            Onze diensten
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-900">
            Waarmee kunnen wij helpen?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Van printerinstallaties tot WiFi- en netwerkproblemen. Wij zorgen
            dat jouw apparaten weer probleemloos samenwerken.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                  {service.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {service.text}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}