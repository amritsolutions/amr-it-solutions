import { Monitor, ShieldCheck, Gauge, Wrench } from "lucide-react";

const services = [
  {
    Icon: Monitor,
    title: "Windows installeren",
    text: "Nieuwe Windows-installatie of opnieuw installeren zonder dataverlies.",
    link: "/windows-installeren",
  },
  {
    Icon: ShieldCheck,
    title: "Virus verwijderen",
    text: "Virussen, malware en ongewenste programma’s veilig verwijderen.",
    link: "/virus-verwijderen",
  },
  {
    Icon: Gauge,
    title: "Laptop sneller maken",
    text: "Optimalisatie, opschoning en advies over SSD- of geheugenupgrades.",
    link: "/laptop-sneller-maken",
  },
  {
    Icon: Wrench,
    title: "Upgrades & reparaties",
    text: "Hardware-upgrades en reparaties voor laptops en desktopcomputers.",
    link: "/#computer-upgrade-reparatie",
  },
];

export default function ComputerServices() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-blue-600">
            Onze diensten
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-slate-950">
            Waarmee kunnen wij helpen?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-600">
            Wij lossen de meest voorkomende computer- en laptopproblemen snel en professioneel op.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ Icon, title, text, link }) => (
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

              <p className="mt-4 leading-7 text-slate-600">
                {text}
              </p>

              <a
                href={link}
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