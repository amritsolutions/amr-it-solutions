import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock3,
  Cloud,
  Globe2,
  HardDrive,
  Laptop,
  LockKeyhole,
  Mail,
  MapPin,
  Monitor,
  Phone,
  Printer,
  Send,
  ShieldCheck,
  Zap,
} from "lucide-react";

const services = [
  {
    label: "IT Support Breda",
    href: "/it-support-breda",
    icon: Laptop,
  },
  {
    label: "Computerreparatie & Windows",
    href: "/computerreparatie",
    icon: Monitor,
  },
  {
    label: "Laptop sneller maken",
    href: "/laptop-sneller-maken",
    icon: Zap,
  },
  {
    label: "Printer, WiFi & netwerk",
    href: "/printer-wifi-netwerk",
    icon: Printer,
  },
  {
    label: "Website laten maken",
    href: "/website-laten-maken",
    icon: Globe2,
  },
  {
    label: "Microsoft 365 hulp",
    href: "/microsoft-365",
    icon: Cloud,
  },
  {
    label: "Data overzetten & back-up",
    href: "/data-overzetten",
    icon: HardDrive,
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
    <footer className="relative overflow-hidden rounded-t-[36px] border border-blue-500/20 bg-[#020817] text-slate-300">
      {/* Blauwe bovenlijn */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-blue-500/60 sm:inset-x-12 lg:inset-x-16" />

      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-blue-500 to-transparent shadow-[0_0_18px_rgba(59,130,246,0.95)]" />

      {/* Achtergrondglows */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-16 w-[600px] -translate-x-1/2 rounded-full bg-blue-500/35 blur-[42px]" />

      <div className="pointer-events-none absolute -left-28 top-0 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 pb-6 pt-10 sm:px-8 sm:pt-12 lg:px-10">
        {/* BOVENSTE GEDEELTE */}
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.9fr_1fr] lg:gap-10 xl:gap-12">
          {/* LINKS */}
          <div>
            <Image
              src="/logos/amr-logo-dark.png"
              alt="AMR IT Solutions"
              width={280}
              height={105}
              className="h-auto w-[240px] object-contain sm:w-[270px]"
            />

            <p className="mt-6 max-w-md text-[15px] leading-7 text-slate-400">
              Persoonlijke IT-oplossingen voor particulieren en bedrijven.
              Van computerproblemen en Microsoft 365 tot professionele
              websites. Snel, duidelijk en zonder ingewikkelde IT-taal.
            </p>

            {/* USP's */}
            <ul className="mt-6 grid gap-x-6 gap-y-3 text-sm text-slate-300 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-blue-500/50 bg-blue-500/10 text-blue-400">
                    <Check className="h-3.5 w-3.5" />
                  </span>

                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            {/* CTA's */}
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="/#contact"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 text-sm font-bold text-white shadow-[0_12px_30px_rgba(37,99,235,0.25)] transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-600 hover:shadow-[0_18px_40px_rgba(37,99,235,0.35)]"
              >
                <Send className="h-4 w-4" />

                Contact opnemen

                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/31649718684"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat via WhatsApp"
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-2xl border border-green-500/35 bg-green-500/[0.03] px-6 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-green-400/60 hover:bg-green-500/10"
              >
                <WhatsAppIcon className="h-5 w-5 text-green-400" />

                WhatsApp
              </a>
            </div>

            <div className="mt-5 flex items-center gap-2.5 text-sm text-slate-400">
              <ShieldCheck className="h-5 w-5 shrink-0 text-blue-400" />

              <span>
                Vrijblijvend advies • Geen verborgen kosten
              </span>
            </div>
          </div>

          {/* MIDDEN - DIENSTEN */}
          <div>
            <SectionTitle>Diensten</SectionTitle>

            <ul className="mt-5 divide-y divide-white/10">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="group -mx-3 flex min-h-[50px] items-center gap-4 rounded-xl border border-transparent px-3 py-2.5 text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:border-blue-500/20 hover:bg-white/[0.04] hover:text-white"
                    >
                      <Icon className="h-5 w-5 shrink-0 text-blue-500 transition-transform duration-300 group-hover:scale-110" />

                      <span className="font-medium">
                        {service.label}
                      </span>

                      <ArrowRight className="ml-auto h-4 w-4 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* Locatie + afstand */}
            <a
              href="/#contact"
              className="group mt-5 flex items-center gap-4 rounded-[20px] border border-white/10 bg-white/[0.025] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/35 hover:bg-blue-500/[0.05] hover:shadow-[0_0_30px_rgba(37,99,235,0.12)]"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400">
                <Monitor className="h-5 w-5" />
              </span>

              <span>
                <span className="block font-bold text-white">
                  Hulp op locatie én op afstand
                </span>

                <span className="mt-1 block text-sm leading-5 text-slate-400">
                  Breda en omgeving of veilig online.
                </span>
              </span>

              <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          {/* RECHTS - CONTACT */}
          <div>
            <SectionTitle>Contact</SectionTitle>

            <div className="mt-5 space-y-3">
              <ContactCard
                icon={<MapPin className="h-5 w-5" />}
                label="Werkgebied"
                value="Breda en omgeving"
              />

              <ContactCard
                href="tel:+31649718684"
                icon={<Phone className="h-5 w-5" />}
                label="Telefoon"
                value="06 49718684"
              />

              <ContactCard
                href="mailto:info@amritsolutions.nl"
                icon={<Mail className="h-5 w-5" />}
                label="E-mail"
                value="info@amritsolutions.nl"
              />

              <ContactCard
                href="https://wa.me/31649718684"
                external
                whatsapp
                icon={<WhatsAppIcon className="h-5 w-5" />}
                label="WhatsApp"
                value="Start direct een chat"
              />
            </div>
          </div>
        </div>

        {/* ONDERSTE BALK */}
        <div className="mt-9 border-t border-white/10 pt-6">
          <div className="grid gap-6 text-sm text-slate-400 lg:grid-cols-[0.65fr_1.8fr_1.35fr] lg:items-center lg:gap-5">
            {/* Copyright */}
            <div>
              <p>© 2026 AMR IT Solutions</p>

              <p className="mt-1 text-xs text-slate-500">
                Alle rechten voorbehouden.
              </p>
            </div>

            {/* Vertrouwen */}
            <div className="grid gap-4 sm:grid-cols-3">
              <TrustItem
                icon={<Clock3 className="h-5 w-5" />}
                text="Reactie meestal binnen één werkdag"
              />

              <TrustItem
                icon={<LockKeyhole className="h-5 w-5" />}
                text="Je gegevens worden veilig verwerkt"
                bordered
              />

              <TrustItem
                icon={<ShieldCheck className="h-5 w-5" />}
                text="Vrijblijvend advies • Geen verborgen kosten"
                bordered
              />
            </div>

            {/* Navigatie */}
            <nav
              aria-label="Footer navigatie"
              className="flex flex-wrap items-center gap-x-2.5 gap-y-2 lg:justify-end xl:flex-nowrap xl:whitespace-nowrap"
            >
              <a
                href="/#home"
                className="transition hover:text-white"
              >
                Home
              </a>

              <span className="text-blue-500">•</span>

              <a
                href="/#diensten"
                className="transition hover:text-white"
              >
                Diensten
              </a>

              <span className="text-blue-500">•</span>

              <a
                href="/#portfolio"
                className="transition hover:text-white"
              >
                Portfolio
              </a>

              <span className="text-blue-500">•</span>

              <a
                href="/#waarom"
                className="transition hover:text-white"
              >
                Waarom
              </a>

              <span className="text-blue-500">•</span>

              <a
                href="/#contact"
                className="transition hover:text-white"
              >
                Contact
              </a>

              <span className="text-blue-500">•</span>

              <Link
                href="/privacy"
                className="transition hover:text-white"
              >
                Privacy
              </Link>

              <span className="text-blue-500">•</span>

              <Link
                href="/cookies"
                className="transition hover:text-white"
              >
                Cookies
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h3 className="text-xl font-bold text-white">
        {children}
      </h3>

      <span className="mt-3 block h-0.5 w-8 rounded-full bg-blue-500" />
    </div>
  );
}

function ContactCard({
  href,
  icon,
  label,
  value,
  whatsapp = false,
  external = false,
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
  whatsapp?: boolean;
  external?: boolean;
}) {
  const className = [
    "group flex min-h-[72px] items-center gap-4 rounded-[20px] border p-4",
    "transition-all duration-300 hover:-translate-y-1",
    "hover:shadow-[0_0_30px_rgba(37,99,235,0.15)]",
    whatsapp
      ? "border-green-500/20 bg-green-500/[0.035] hover:border-green-400/45 hover:bg-green-500/[0.075]"
      : "border-white/10 bg-white/[0.025] hover:border-blue-400/35 hover:bg-white/[0.05]",
  ].join(" ");

  const content = (
    <>
      <span
        className={[
          "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300",
          whatsapp
            ? "bg-green-500/15 text-green-400 group-hover:bg-green-500 group-hover:text-white"
            : "bg-blue-500/15 text-blue-400 group-hover:bg-blue-500 group-hover:text-white",
        ].join(" ")}
      >
        {icon}
      </span>

      <span className="min-w-0">
        <span className="block text-xs text-slate-500">
          {label}
        </span>

        <span className="mt-0.5 block break-all text-sm font-semibold text-white">
          {value}
        </span>
      </span>

      <ArrowRight className="ml-auto h-4 w-4 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400" />
    </>
  );

  if (!href) {
    return <div className={className}>{content}</div>;
  }

  return (
    <a
      href={href}
      className={className}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      {content}
    </a>
  );
}

function TrustItem({
  icon,
  text,
  bordered = false,
}: {
  icon: React.ReactNode;
  text: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-3 ${
        bordered
          ? "sm:border-l sm:border-white/10 sm:pl-5"
          : ""
      }`}
    >
      <span className="shrink-0 text-blue-500">
        {icon}
      </span>

      <span className="text-xs leading-5 sm:text-sm">
        {text}
      </span>
    </div>
  );
}