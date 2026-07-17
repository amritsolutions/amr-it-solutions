import Image from "next/image";
import Link from "next/link";
import { MapPin, Mail, MessageCircle, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <Image
            src="/logos/logo.png"
            alt="AMR IT Solutions logo"
            width={185}
            height={76}
            className="mb-5 rounded-xl bg-white p-2"
          />

          <h3 className="text-2xl font-extrabold text-white">
            AMR IT Solutions
          </h3>

          <p className="mt-4 max-w-md leading-7 text-slate-400">
            AMR IT Solutions helpt particulieren, zzp'ers en bedrijven 
            met snelle, betrouwbare en betaalbare IT-oplossingen. 
            Van computerreparaties tot websites en Microsoft 365.
            
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-lg"
            >
              Contact opnemen
            </a>

            <a
              href="https://wa.me/31649718684"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-green-500 hover:text-green-400"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Diensten</h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link
                href="/computerreparatie"
                className="transition hover:text-blue-400"
              >
                Computerreparatie
              </Link>
            </li>

            <li>
              <a
                href="/#diensten"
                className="transition hover:text-blue-400"
              >
                Laptop sneller maken
              </a>
            </li>

            <li>
              <a
                href="/#diensten"
                className="transition hover:text-blue-400"
              >
                Windows installeren
              </a>
            </li>

            <li>
              <a
                href="/#diensten"
                className="transition hover:text-blue-400"
              >
                Printer & WiFi
              </a>
            </li>

            <li>
              <Link
                href="/website-laten-maken"
                className="transition hover:text-blue-400"
              >
                Website laten maken
              </Link>
            </li>

            <li>
              <a
                href="/#diensten"
                className="transition hover:text-blue-400"
              >
                Microsoft 365
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Contact</h3>

          <div className="mt-5 space-y-4 text-sm">
            <p className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
              <span>Breda en omgeving</span>
            </p>

            <a
              href="tel:+31649718684"
              className="flex items-start gap-3 transition hover:text-blue-400"
            >
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
              <span>06 49718684</span>
            </a>

            <a
              href="mailto:info@amritsolutions.nl"
              className="flex items-start gap-3 transition hover:text-blue-400"
            >
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-blue-400" />
              <span>info@amritsolutions.nl</span>
            </a>

            <a
              href="https://wa.me/31649718684"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 transition hover:text-green-400"
            >
              <MessageCircle className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
              <span>Chat via WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 AMR IT Solutions · Breda, Nederland</p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="/#home" className="transition hover:text-white">
              Home
            </a>

            <a href="/#diensten" className="transition hover:text-white">
              Diensten
            </a>

            <a href="/#portfolio" className="transition hover:text-white">
              Portfolio
            </a>

            <a href="/#contact" className="transition hover:text-white">
              Contact
            </a>

            <Link href="/privacy" className="transition hover:text-white">
              Privacy
            </Link>

            <Link href="/cookies" className="transition hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}