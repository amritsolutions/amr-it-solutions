import WhatsAppIcon from "@/components/icons/WhatsAppIcon";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  Clock3,
  Cloud,
  Globe2,
  Laptop,
  LockKeyhole,
  Mail,
  MapPin,
  Monitor,
  PanelsTopLeft,
  Phone,
  Printer,
  Send,
  ShieldCheck,
} from "lucide-react";

const services = [
  { label: "Computerreparatie", href: "/computerreparatie", icon: Monitor },
  { label: "Laptop sneller maken", href: "/laptop-sneller-maken", icon: Laptop },
  { label: "Windows installeren", href: "/windows-installeren", icon: PanelsTopLeft },
  { label: "Printer & WiFi", href: "/printer-wifi-netwerk", icon: Printer },
  { label: "Website laten maken", href: "/website-laten-maken", icon: Globe2 },
  { label: "Microsoft 365", href: "/microsoft-365", icon: Cloud },
  { label: "Zakelijke IT", href: "/#contact", icon: BriefcaseBusiness },
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
      {/* Duidelijke blauwe lijn en glow zoals in het voorbeeld */}
      <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-blue-500/60 sm:inset-x-12 lg:inset-x-16" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-transparent via-blue-400 to-transparent shadow-[0_0_18px_rgba(59,130,246,0.95)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-20 w-[680px] -translate-x-1/2 rounded-full bg-blue-500/35 blur-[42px]" />
      <div className="pointer-events-none absolute -left-28 top-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-blue-500/[0.06] blur-[140px]" />

      <div className="relative mx-auto max-w-[1500px] px-6 pb-8 pt-14 sm:px-8 sm:pt-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_0.9fr_1fr] lg:gap-12 xl:gap-14">
          <div>
            <Image
              src="/logos/amr-logo-dark.png"
              alt="AMR IT Solutions"
              width={320}
              height={120}
              className="h-auto w-[270px] object-contain sm:w-[300px]"
            />

            <p className="mt-7 max-w-md text-base leading-8 text-slate-400">
              Persoonlijke IT-oplossingen voor particulieren en bedrijven. Van
              computerreparaties en Microsoft 365 tot professionele websites.
              Snel, betrouwbaar en zonder ingewikkelde IT-taal.
            </p>

            <ul className="mt-7 grid gap-x-7 gap-y-4 text-sm text-slate-300 sm:grid-cols-2">
              {highlights.map((highlight) => (
                <li key={highlight} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-blue-500/50 bg-blue-500/10 text-blue-400">
                    <Check className="h-4 w-4" />
                  </span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/#contact"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-4 text-sm font-bold text-white shadow-[0_14px_35px_rgba(37,99,235,0.28)] transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-600 hover:shadow-[0_20px_45px_rgba(37,99,235,0.4)]"
              >
                <Send className="h-5 w-5" />
                Contact opnemen
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="https://wa.me/31649718684"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat via WhatsApp"
                className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-2xl border border-green-500/35 bg-green-500/[0.03] px-7 py-4 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-green-400/60 hover:bg-green-500/10"
              >
                <WhatsAppIcon className="h-5 w-5 text-green-400" />
                WhatsApp
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
              <ShieldCheck className="h-5 w-5 shrink-0 text-blue-400" />
              <span>Vrijblijvend advies • Geen verborgen kosten</span>
            </div>
          </div>

          <div>
            <SectionTitle>Diensten</SectionTitle>

            <ul className="mt-6 divide-y divide-white/10">
              {services.map((service) => {
                const Icon = service.icon;

                return (
                  <li key={service.label}>
                    <Link
                      href={service.href}
                      className="group -mx-3 flex min-h-[58px] items-center gap-4 rounded-xl border border-transparent px-3 py-3 text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:border-blue-500/20 hover:bg-white/[0.04] hover:text-white"
                    >
                      <Icon className="h-6 w-6 shrink-0 text-blue-500 transition-transform duration-300 group-hover:scale-110" />
                      <span className="font-medium">{service.label}</span>
                      <ArrowRight className="ml-auto h-4 w-4 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <a
              href="/#contact"
              className="group mb-4 mt-6 flex items-center gap-4 rounded-[22px] border border-white/10 bg-white/[0.025] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/35 hover:bg-blue-500/[0.05] hover:shadow-[0_0_30px_rgba(37,99,235,0.12)]"
            >
              <span className="flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl bg-blue-500/15 text-blue-400">
                <Phone className="h-6 w-6" />
              </span>

              <span>
                <span className="block font-bold text-white">Hulp op locatie</span>
                <span className="mt-1 block text-sm leading-6 text-slate-400">
                  Wij zijn actief in Breda en omgeving.
                </span>
              </span>

              <ArrowRight className="ml-auto h-5 w-5 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div>
            <SectionTitle>Contact</SectionTitle>

            <div className="mt-6 space-y-4">
              <ContactCard
                icon={<MapPin className="h-6 w-6" />}
                label="Werkgebied"
                value="Breda en omgeving"
              />
              <ContactCard
                href="tel:+31649718684"
                icon={<Phone className="h-6 w-6" />}
                label="Telefoon"
                value="06 49718684"
              />
              <ContactCard
                href="mailto:info@amritsolutions.nl"
                icon={<Mail className="h-6 w-6" />}
                label="E-mail"
                value="info@amritsolutions.nl"
              />
              <ContactCard
                href="https://wa.me/31649718684"
                external
                whatsapp
                icon={<WhatsAppIcon className="h-6 w-6" />}
                label="WhatsApp"
                value="Start direct een chat"
              />
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="grid gap-8 text-sm text-slate-400 lg:grid-cols-[0.68fr_1.95fr_1.37fr] lg:items-center lg:gap-6">
            <div>
              <p>© 2026 AMR IT Solutions</p>
              <p className="mt-1">Alle rechten voorbehouden.</p>
            </div>

            <div className="grid gap-6 sm:grid-cols-3">
              <TrustItem
                icon={<Clock3 className="h-6 w-6" />}
                text="We reageren meestal binnen één werkdag"
              />
              <TrustItem
                icon={<LockKeyhole className="h-6 w-6" />}
                text="Jouw gegevens worden veilig verwerkt"
                bordered
              />
              <TrustItem
                icon={<ShieldCheck className="h-6 w-6" />}
                text="Vrijblijvend advies • Geen verborgen kosten"
                bordered
              />
            </div>

            <nav
              aria-label="Footer navigatie"
              className="flex flex-wrap items-center gap-x-3 gap-y-3 lg:justify-end xl:flex-nowrap xl:whitespace-nowrap"
            >
              <a href="/#home" className="transition hover:text-white">Home</a>
              <span className="text-blue-500">•</span>
              <a href="/#diensten" className="transition hover:text-white">Diensten</a>
              <span className="text-blue-500">•</span>
              <a href="/#portfolio" className="transition hover:text-white">Portfolio</a>
              <span className="text-blue-500">•</span>
              <a href="/#contact" className="transition hover:text-white">Contact</a>
              <span className="text-blue-500">•</span>
              <Link href="/privacy" className="transition hover:text-white">Privacy</Link>
              <span className="text-blue-500">•</span>
              <Link href="/cookies" className="transition hover:text-white">Cookies</Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-xl font-bold text-white">{children}</h3>
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
    "group flex min-h-[86px] items-center gap-4 rounded-[22px] border p-5",
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
          "flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-2xl transition-all duration-300",
          whatsapp
            ? "bg-green-500/15 text-green-400 group-hover:bg-green-500 group-hover:text-white"
            : "bg-blue-500/15 text-blue-400 group-hover:bg-blue-500 group-hover:text-white",
        ].join(" ")}
      >
        {icon}
      </span>

      <span className="min-w-0">
        <span className="block text-xs text-slate-500">{label}</span>
        <span className="mt-1 block break-all text-sm font-semibold text-white">{value}</span>
      </span>

      <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-blue-400" />
    </>
  );

  if (!href) return <div className={className}>{content}</div>;

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
    <div className={`flex items-start gap-4 ${bordered ? "sm:border-l sm:border-white/10 sm:pl-6" : ""}`}>
      <span className="shrink-0 text-blue-500">{icon}</span>
      <span className="leading-6">{text}</span>
    </div>
  );
}