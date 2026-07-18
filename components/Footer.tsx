import Image from "next/image";
import Link from "next/link";
import {
  Check,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

const services = [
  {
    label: "Computerreparatie",
    href: "/computerreparatie",
    externalSection: false,
  },
  {
    label: "Laptop sneller maken",
    href: "/#diensten",
    externalSection: true,
  },
  {
    label: "Windows installeren",
    href: "/#diensten",
    externalSection: true,
  },
  {
    label: "Printer & WiFi",
    href: "/#diensten",
    externalSection: true,
  },
  {
    label: "Website laten maken",
    href: "/website-laten-maken",
    externalSection: false,
  },
  {
    label: "Microsoft 365",
    href: "/#diensten",
    externalSection: true,
  },
];

const highlights = [
  "Computerreparatie",
  "Microsoft 365",
  "Websites",
  "Persoonlijke IT-support",
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.75fr_1fr] lg:gap-20">
          {/* Bedrijfsinformatie */}
          <div>
            <Image
              src="/logos/logo.png"
              alt="AMR IT Solutions logo"
              width={150}
              height={62}
              className="rounded-2xl bg-white p-3 shadow-lg shadow-black/10"
            />

            <h2 className="mt-6 text-2xl font-extrabold tracking-tight text-white">
              AMR IT Solutions
            </h2>

            <p className="mt-4 max-w-lg leading-7 text-slate-400">
              AMR IT Solutions helpt particulieren, zzp&apos;ers en bedrijven
              met snelle, betrouwbare en betaalbare IT-oplossingen. Van
              computerreparaties tot websites en Microsoft 365.
            </p>

            <ul className="mt-6 grid gap-3 text-sm text-slate-300 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-400">
                    <Check className="h-3.5 w-3.5" />
                  </span>

                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl"
              >
                Contact opnemen
              </a>

              <a
                href="https://wa.me/31649718684"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-green-500/40 px-6 py-3 text-sm font-semibold text-green-400 transition duration-300 hover:-translate-y-0.5 hover:border-green-400 hover:bg-green-500/10 hover:text-green-300"
              >
                <MessageCircle className="h-5 w-5" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Diensten */}
          <div>
            <h3 className="text-lg font-bold text-white">Diensten</h3>

            <ul className="mt-6 space-y-3 text-sm">
              {services.map((service) => (
                <li key={service.label}>
                  {service.externalSection ? (
                    <a
                      href={service.href}
                      className="inline-flex transition duration-200 hover:translate-x-1 hover:text-blue-400"
                    >
                      {service.label}
                    </a>
                  ) : (
                    <Link
                      href={service.href}
                      className="inline-flex transition duration-200 hover:translate-x-1 hover:text-blue-400"
                    >
                      {service.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white">Contact</h3>

            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                  <MapPin className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Werkgebied</p>
                  <p className="mt-1 text-sm font-medium text-slate-200">
                    Breda en omgeving
                  </p>
                </div>
              </div>

              <a
                href="tel:+31649718684"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-blue-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">Telefoon</p>
                  <p className="mt-1 text-sm font-medium text-slate-200">
                    06 49718684
                  </p>
                </div>
              </a>

              <a
                href="mailto:info@amritsolutions.nl"
                className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:border-blue-400/40 hover:bg-white/[0.06]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 transition group-hover:bg-blue-500 group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs text-slate-500">E-mail</p>
                  <p className="mt-1 break-all text-sm font-medium text-slate-200">
                    info@amritsolutions.nl
                  </p>
                </div>
              </a>

              <a
                href="https://wa.me/31649718684"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-green-500/20 bg-green-500/[0.04] p-4 transition hover:border-green-400/40 hover:bg-green-500/[0.08]"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-green-500/15 text-green-400 transition group-hover:bg-green-500 group-hover:text-white">
                  <MessageCircle className="h-5 w-5" />
                </div>

                <div>
                  <p className="text-xs text-slate-500">WhatsApp</p>
                  <p className="mt-1 text-sm font-medium text-slate-200">
                    Start direct een chat
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Onderste balk */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-6 py-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 AMR IT Solutions · Breda, Nederland</p>

          <nav
            aria-label="Footer navigatie"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            <a
              href="/#home"
              className="transition hover:text-white"
            >
              Home
            </a>

            <a
              href="/#diensten"
              className="transition hover:text-white"
            >
              Diensten
            </a>

            <a
              href="/#portfolio"
              className="transition hover:text-white"
            >
              Portfolio
            </a>

            <a
              href="/#contact"
              className="transition hover:text-white"
            >
              Contact
            </a>

            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>

            <Link href="/cookies" className="transition hover:text-white">
              Cookies
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}