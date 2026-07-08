import Link from "next/link";
import { MapPin, Mail, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="text-2xl font-extrabold text-white">
            AMR IT Solutions
          </h3>

          <p className="mt-4 max-w-md leading-7 text-slate-400">
            Betrouwbare IT-oplossingen voor particulieren, zzp&apos;ers en
            kleine bedrijven in Breda en omgeving.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:bg-blue-700"
            >
              Contact opnemen
            </a>

            <a
              href="/#contact"
              className="rounded-full border border-slate-700 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-green-500 hover:text-green-400"
            >
              WhatsApp
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Diensten</h3>

          <ul className="mt-5 space-y-3 text-sm">
            <li>
              <Link href="/computerreparatie" className="hover:text-blue-400">
                Computerreparatie
              </Link>
            </li>
            <li>
              <a href="/#diensten" className="hover:text-blue-400">
                Laptop sneller maken
              </a>
            </li>
            <li>
              <a href="/#diensten" className="hover:text-blue-400">
                Windows installeren
              </a>
            </li>
            <li>
              <a href="/#diensten" className="hover:text-blue-400">
                Printer & WiFi
              </a>
            </li>
            <li>
              <Link href="/website-laten-maken" className="hover:text-blue-400">
                Website laten maken
              </Link>
            </li>
            <li>
              <a href="/#diensten" className="hover:text-blue-400">
                Microsoft 365
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold text-white">Contact</h3>

          <div className="mt-5 space-y-4 text-sm">
            <p className="flex gap-3">
              <MapPin className="h-5 w-5 text-blue-400" />
              Breda en omgeving
            </p>

            <p className="flex gap-3">
              <Mail className="h-5 w-5 text-blue-400" />
              Via het contactformulier
            </p>

            <p className="flex gap-3">
              <MessageCircle className="h-5 w-5 text-green-400" />
              WhatsApp binnenkort beschikbaar
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-500 md:flex-row">
          <p>© 2026 AMR IT Solutions. Alle rechten voorbehouden.</p>

          <div className="flex flex-wrap items-center justify-center gap-6">
            <a href="/#home" className="hover:text-white">
              Home
            </a>
            <a href="/#diensten" className="hover:text-white">
              Diensten
            </a>
            <a href="/#portfolio" className="hover:text-white">
              Portfolio
            </a>
            <a href="/#contact" className="hover:text-white">
              Contact
            </a>
            <Link href="/privacy" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/cookies" className="hover:text-white">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}