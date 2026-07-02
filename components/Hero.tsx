import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="grid flex-1 items-center gap-20 py-16 lg:grid-cols-2"
    >
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold text-blue-600">
          IT Support • Reparatie • Websites • Microsoft 365
        </p>

        <h1 className="text-5xl font-bold tracking-tight md:text-7xl">
          IT-problemen?
          <br />
          Wij lossen ze op.
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
          Van Windows-installaties en computerreparaties tot Microsoft 365,
          websites en cloudoplossingen. AMR IT Solutions biedt snelle en
          betrouwbare IT-oplossingen voor particulieren en bedrijven.
        </p>

        <div className="mt-8 flex gap-4">
          <a
            href="#contact"
            className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white"
          >
            Offerte aanvragen
          </a>

          <a
            href="#diensten"
            className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold"
          >
            Onze diensten
          </a>
        </div>
      </div>

      <div className="flex justify-center">
        <Image
          src="/images/hero.jpg"
          alt="AMR IT Solutions"
          width={700}
          height={700}
          className="rounded-3xl shadow-2xl hover:scale-105 transition duration-300"
          priority
        />
      </div>
    </section>
  );
}