import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Globe,
  Rocket,
  Search,
  Smartphone,
} from "lucide-react";

import Breadcrumb from "@/components/Breadcrumb";

const benefits = [
  {
    Icon: Globe,
    title: "Moderne website",
    text: "Een professionele uitstraling die past bij jouw bedrijf.",
  },
  {
    Icon: Smartphone,
    title: "Mobielvriendelijk",
    text: "Perfect zichtbaar op mobiel, tablet en desktop.",
  },
  {
    Icon: Search,
    title: "Basis SEO",
    text: "Een sterke technische basis voor betere vindbaarheid.",
  },
  {
    Icon: Rocket,
    title: "Snel online",
    text: "Efficiënt gebouwd en klaar om klanten te ontvangen.",
  },
];

export default function WebsiteHero() {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-white via-blue-50/70 to-white">
      {/* Achtergrondglows */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-44 bottom-0 -z-10 h-[420px] w-[420px] rounded-full bg-blue-100/55 blur-[120px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-16 -z-10 h-[580px] w-[580px] rounded-full bg-blue-100/45 blur-[120px]"
      />

      <div className="mx-auto max-w-[1440px] px-6 pb-20 pt-10 lg:px-10 xl:px-12">
        <Breadcrumb current="Website laten maken" />

        <div className="mt-10 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          {/* Linkerkant */}
          <div className="relative z-20">
            <div className="inline-flex items-center gap-4">
              <span className="text-sm font-extrabold uppercase tracking-[0.28em] text-blue-600">
                Website laten maken Breda
              </span>

              <span className="h-0.5 w-8 rounded-full bg-blue-600" />
            </div>

            <h1 className="mt-7 text-4xl font-extrabold leading-[1.06] tracking-tight text-slate-950 sm:text-5xl lg:text-[56px] xl:text-[60px]">
              <span className="block">Een professionele</span>

              <span className="block">
                website voor jouw{" "}
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
                  bedrijf
                </span>
              </span>
            </h1>

            <p className="mt-7 max-w-[620px] text-base leading-8 text-slate-600 sm:text-lg">
              AMR IT Solutions bouwt moderne, snelle en mobielvriendelijke
              websites voor zzp&apos;ers, starters en kleine bedrijven in Breda
              en omgeving.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex min-h-[62px] items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 px-8 py-4 font-bold text-white shadow-[0_18px_42px_rgba(37,99,235,0.32)] transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-600 hover:shadow-[0_24px_52px_rgba(37,99,235,0.42)]"
              >
                Website bespreken
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/#portfolio"
                className="group inline-flex min-h-[62px] items-center justify-center gap-3 rounded-2xl border-2 border-blue-600 bg-white px-8 py-4 font-bold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-[0_18px_36px_rgba(37,99,235,0.14)]"
              >
                Bekijk portfolio
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Rechterkant */}
          <div className="relative min-h-[430px] lg:min-h-[570px]">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-blue-100 via-blue-50 to-transparent lg:h-[520px] lg:w-[610px]"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-200/80 lg:h-[570px] lg:w-[660px]"
            />

            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 h-[470px] w-[470px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-100/70 lg:h-[620px] lg:w-[710px]"
            />

            <div
              aria-hidden="true"
              className="absolute right-7 top-5 z-10 hidden grid-cols-6 gap-5 opacity-65 lg:grid"
            >
              {Array.from({ length: 24 }).map((_, index) => (
                <span
                  key={index}
                  className="h-2 w-2 rounded-full bg-blue-300"
                />
              ))}
            </div>

            <Image
              src="/images/website-hero.png"
              alt="Professionele website laten maken in Breda"
              width={1000}
              height={760}
              priority
              className="absolute left-1/2 top-1/2 z-20 w-[98%] max-w-[700px] -translate-x-1/2 -translate-y-1/2 object-contain drop-shadow-[0_34px_72px_rgba(37,99,235,0.24)] transition duration-500 hover:scale-[1.02] lg:w-[108%] lg:max-w-[760px]"
            />
          </div>
        </div>

        {/* Voordelenbalk */}
        <div className="relative z-30 mt-10 grid overflow-hidden rounded-[30px] border border-slate-200/80 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.09)] sm:grid-cols-2 lg:mt-6 lg:grid-cols-4">
          {benefits.map(({ Icon, title, text }, index) => (
            <div
              key={title}
              className={`group px-7 py-8 text-center transition duration-300 hover:bg-blue-50/45 ${
                index > 0
                  ? "border-t border-slate-200/80 sm:border-l sm:border-t-0"
                  : ""
              } ${
                index === 2
                  ? "sm:border-l-0 sm:border-t lg:border-l lg:border-t-0"
                  : ""
              }`}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_12px_28px_rgba(37,99,235,0.25)]">
                <Icon className="h-7 w-7" />
              </div>

              <h2 className="mt-5 text-base font-bold text-slate-950">
                {title}
              </h2>

              <p className="mx-auto mt-2 max-w-[225px] text-sm leading-6 text-slate-600">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}