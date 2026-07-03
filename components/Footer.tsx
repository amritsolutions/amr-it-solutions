import Link from "next/link";
export default function Footer() {
  return (
    <footer className="mt-24 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-3">
        {/* Bedrijf */}
        <div>
          <h3 className="text-2xl font-bold text-white">
            AMR IT Solutions
          </h3>

          <p className="mt-4 leading-7">
            Betrouwbare IT-oplossingen voor particulieren en bedrijven.
            Van computerreparatie tot websites en Microsoft 365.
          </p>
        </div>

        {/* Diensten */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Diensten
          </h3>

          <ul className="mt-4 space-y-3">
            <li>💻 IT Support</li>
            <li>🪟 Windows installeren</li>
            <li>⚡ Laptop optimalisatie</li>
            <li>🖨️ Printer & WiFi</li>
            <li>🌐 Websites</li>
            <li>☁️ Microsoft 365</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            Contact
          </h3>

          <div className="mt-4 space-y-3">
            <p>📍 Breda en omgeving</p>
            <p>📩 Neem contact op via het contactformulier</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm text-slate-400 md:flex-row">
          <p>© 2026 AMR IT Solutions. Alle rechten voorbehouden.</p>

          
            
           <div className="flex flex-wrap items-center gap-6">
  <a href="#home" className="hover:text-white">
    Home
  </a>

  <a href="#diensten" className="hover:text-white">
    Diensten
  </a>

  <a href="#portfolio" className="hover:text-white">
    Portfolio
  </a>

  <a href="#contact" className="hover:text-white">
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