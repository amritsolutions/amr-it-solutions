import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import CookieBanner from "@/components/CookieBanner";
import Stats from "@/components/Stats";
export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
  <Navbar />

  <section className="mx-auto flex min-h-screen max-w-7xl flex-col px-6 py-8">
    <Hero />
  </section>

  <Services />
  <WhyUs />
  <Portfolio />
  <Stats />
  <Contact />
  <Footer />
  <WhatsAppButton />
  <CookieBanner />
</main>
  );
}