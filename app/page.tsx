import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import FadeIn from "@/components/FadeIn";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-white text-slate-950">


      <Hero />

      <FadeIn>
        <Services />
      </FadeIn>

      <FadeIn>
        <Portfolio />
      </FadeIn>

      <FadeIn>
        <WhyUs />
      </FadeIn>

      <FadeIn>
        <Contact />
      </FadeIn>
    </main>
  );
}