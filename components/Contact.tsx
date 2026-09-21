"use client";

import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Mail,
  MapPin,
  Monitor,
  Paperclip,
  Phone,
  ShieldCheck,
  User,
} from "lucide-react";
import { useRef, useState } from "react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

const locations = [
  "Breda",
  "Oosterhout",
  "Etten-Leur",
  "Prinsenbeek",
  "Teteringen",
];

const services = [
  "Computerreparatie",
  "Laptop sneller maken",
  "Windows installeren",
  "Virus verwijderen",
  "Printer, WiFi & netwerk",
  "Microsoft 365",
  "Data overzetten",
  "Website laten maken",
  "IT Support Breda",
  "Anders",
];


const inputClass =
  "min-h-[58px] w-full rounded-xl border border-slate-700 bg-[#0b1424] px-4 py-3.5 text-slate-50 outline-none transition placeholder:text-slate-500 hover:border-slate-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/15";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [preference, setPreference] = useState("whatsapp");
  const [fileName, setFileName] = useState("");
  const fileRef = useRef<HTMLInputElement>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setSubmitting(true);
    setSent(false);
    setError(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Het bericht kon niet worden verzonden.");
      }

      setSent(true);
      setPreference("whatsapp");
      setFileName("");
      form.reset();
      window.setTimeout(() => setSent(false), 7000);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  }

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0];

    if (!file) {
      setFileName("");
      return;
    }

    const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
    const validSize = file.size <= 5 * 1024 * 1024;

    if (!allowedTypes.includes(file.type) || !validSize) {
      event.target.value = "";
      setFileName("");
      setError(true);
      return;
    }

    setError(false);
    setFileName(file.name);
  }

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-white via-slate-50/70 to-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6">
        {/* Contact: bewust rustiger en minder 'dashboard/SaaS'. */}
        <div className="relative overflow-hidden rounded-[24px] border border-blue-400/20 bg-[#06101f] text-slate-50 shadow-[0_28px_80px_rgba(15,23,42,0.20)]">
          <div aria-hidden="true" className="pointer-events-none absolute -left-40 -top-40 h-96 w-96 rounded-full bg-blue-500/[0.07] blur-[100px]" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-blue-500/[0.045] blur-[110px]" />
          <div className="relative grid lg:grid-cols-[0.78fr_1.22fr]">
            <aside className="border-b border-white/10 px-7 py-10 sm:px-10 sm:py-12 lg:border-b-0 lg:border-r lg:border-white/[0.07] lg:px-12 lg:py-14 xl:px-14">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-400">
                Contact
              </p>

              <h2 className="mt-4 max-w-md text-4xl font-bold tracking-[-0.035em] text-white sm:text-5xl">
                Hulp nodig met <span className="text-blue-400">IT?</span>
              </h2>

              <p className="mt-6 max-w-md text-base leading-7 text-slate-300">
                Of het nu gaat om een computerprobleem, Microsoft 365, een
                nieuwe website of een andere IT-vraag: we denken met je mee en
                helpen je graag verder.
              </p>

              <div className="mt-11 space-y-8 border-t border-white/10 pt-9">
                <SimpleContactRow
                  href="tel:+31649718684"
                  icon={<Phone className="h-6 w-6" />}
                  label="Bel ons direct"
                  value="06 49718684"
                />
                <SimpleContactRow
                  href="mailto:info@amritsolutions.nl"
                  icon={<Mail className="h-6 w-6" />}
                  label="Stuur een e-mail"
                  value="info@amritsolutions.nl"
                />
                <SimpleContactRow
                  icon={<MapPin className="h-6 w-6" />}
                  label="Werkgebied"
                  value="Breda en omgeving"
                />
              </div>

              <div className="mt-11 rounded-xl border border-blue-400/20 bg-blue-500/[0.055] p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-blue-500/15 text-blue-300 ring-1 ring-blue-400/10">
                    <User className="h-5 w-5" />
                  </span>
                  <div>
                    <p className="font-semibold text-white">Persoonlijke IT-hulp, zonder gedoe.</p>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Je hebt direct contact met AMR IT Solutions — geen helpdesk of tussenpersoon.
                    </p>
                  </div>
                </div>
              </div>
            </aside>

            <div className="px-7 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14 xl:px-14">
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="mx-auto max-w-3xl"
              >
                <div className="mb-9">
                  <h3 className="text-2xl font-bold tracking-[-0.02em] text-white sm:text-3xl">
                    Waar kunnen we je mee helpen?
                  </h3>
                  <p className="mt-2 max-w-2xl text-[15px] leading-7 text-slate-300">
                    Vertel kort wat er speelt. Je krijgt meestal binnen één
                    werkdag persoonlijk antwoord.
                  </p>
                </div>

                {sent && (
                  <div
                    role="status"
                    className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-3.5 text-sm leading-6 text-emerald-300"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0" />
                    Bedankt! We hebben je bericht ontvangen en nemen zo snel
                    mogelijk contact met je op.
                  </div>
                )}

                {error && (
                  <div
                    role="alert"
                    className="mb-6 rounded-xl border border-red-400/25 bg-red-400/10 px-4 py-3.5 text-sm leading-6 text-red-300"
                  >
                    Het verzenden is niet gelukt, of het gekozen bestand is niet
                    geldig. Gebruik JPG, PNG of PDF tot maximaal 5 MB.
                  </div>
                )}

                <div className="grid gap-x-5 gap-y-5 md:grid-cols-2">
                  <Field label="Naam" required>
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Bijv. Ahmed"
                      required
                      className={inputClass}
                    />
                  </Field>

                  <Field label="E-mailadres" required>
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Bijv. ahmed@email.nl"
                      required
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Telefoonnummer">
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="Bijv. 06 12345678"
                      className={inputClass}
                    />
                  </Field>

                  <Field label="Waar heb je hulp bij nodig?" required>
                    <div className="relative">
                      <select
                        name="service"
                        defaultValue=""
                        required
                        className={`${inputClass} appearance-none pr-11`}
                      >
                        <option value="" disabled className="bg-slate-900">
                          Kies een dienst
                        </option>
                        {services.map((service) => (
                          <option
                            key={service}
                            value={service}
                            className="bg-slate-900"
                          >
                            {service}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                    </div>
                  </Field>
                </div>

                <div className="mt-5">
                  <Field label="Beschrijf je vraag of probleem" required>
                    <textarea
                      name="message"
                      placeholder="Vertel kort waar we je mee kunnen helpen..."
                      rows={5}
                      required
                      className={`${inputClass} min-h-[150px] resize-y`}
                    />
                  </Field>
                </div>

                <div className="mt-5">
                  <p className="mb-2 text-sm font-medium text-slate-200">
                    Foto of bestand{" "}
                    <span className="font-normal text-slate-500">(optioneel)</span>
                  </p>

                  <input
                    ref={fileRef}
                    type="file"
                    name="attachment"
                    accept=".jpg,.jpeg,.png,.pdf,image/jpeg,image/png,application/pdf"
                    onChange={handleFileChange}
                    className="sr-only"
                  />

                  <button
                    type="button"
                    onClick={() => fileRef.current?.click()}
                    className="flex min-h-[58px] w-full items-center gap-3 rounded-xl border border-dashed border-slate-700 bg-[#0b1424] px-4 py-3 text-left text-sm transition hover:border-slate-500"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-800 text-blue-400">
                      <Paperclip className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-medium text-slate-200">
                        {fileName || "Foto, screenshot of PDF toevoegen"}
                      </span>
                      <span className="mt-0.5 block text-xs text-slate-500">
                        JPG, PNG of PDF · maximaal 5 MB
                      </span>
                    </span>
                  </button>
                </div>

                <fieldset className="mt-7">
                  <legend className="mb-3 text-sm font-medium text-slate-200">
                    Hoe wil je dat we contact met je opnemen?{" "}
                    <span className="text-red-400">*</span>
                  </legend>

                  <div className="grid gap-3 sm:grid-cols-3">
                    <PreferenceOption
                      value="whatsapp"
                      label="WhatsApp"
                      selected={preference === "whatsapp"}
                      onSelect={setPreference}
                      icon={<WhatsAppIcon className="h-5 w-5" />}
                      iconClass="text-emerald-400"
                    />
                    <PreferenceOption
                      value="phone"
                      label="Bellen"
                      selected={preference === "phone"}
                      onSelect={setPreference}
                      icon={<Phone className="h-5 w-5" />}
                      iconClass="text-blue-400"
                    />
                    <PreferenceOption
                      value="email"
                      label="E-mail"
                      selected={preference === "email"}
                      onSelect={setPreference}
                      icon={<Mail className="h-5 w-5" />}
                      iconClass="text-blue-400"
                    />
                  </div>
                </fieldset>

                <label className="mt-6 flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-300">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    value="yes"
                    required
                    className="mt-0.5 h-5 w-5 shrink-0 cursor-pointer rounded border-slate-500 bg-slate-900 accent-blue-600 focus:ring-2 focus:ring-blue-500/20"
                  />
                  <span>
                    Ik ga akkoord met de{" "}
                    <a
                      href="/privacy"
                      className="font-medium text-blue-400 underline underline-offset-4 hover:text-blue-300"
                    >
                      privacyverklaring
                    </a>{" "}
                    <span className="text-red-400">*</span>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group mt-6 inline-flex min-h-[58px] w-full items-center justify-center gap-3 rounded-xl border border-blue-400/30 bg-blue-600 px-6 py-4 text-base font-bold text-white shadow-[0_10px_28px_rgba(37,99,235,0.18)] transition hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {submitting ? "Bericht verzenden..." : "Verstuur bericht"}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </button>

                <p className="mt-4 flex items-center justify-center gap-2 text-center text-[13px] leading-5 text-slate-400">
                  <ShieldCheck className="h-4 w-4 shrink-0" />
                  Je gegevens worden alleen gebruikt om contact met je op te nemen.
                </p>
              </form>
            </div>
          </div>
        </div>

        <div className="relative mt-20 overflow-hidden py-4 sm:py-8">
          {/* Subtiele achtergronddecoratie */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-48 top-12 h-[460px] w-[460px] rounded-full bg-blue-100/55 blur-[130px]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-cyan-100/35 blur-[130px]"
          />

          <div className="relative mx-auto mb-12 max-w-4xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-bold uppercase tracking-[0.12em] text-blue-600 ring-1 ring-blue-100">
              <MapPin className="h-4 w-4" />
              Werkgebied
            </span>

            <h3 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.08]">
              Actief in <span className="text-blue-600">Breda</span> en omgeving
            </h3>

            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Wij helpen particulieren en bedrijven aan huis, op locatie of op
              afstand. Woont u in Breda of omgeving? Dan staan wij graag voor u
              klaar.
            </p>
          </div>

          <div className="relative grid items-start gap-10 lg:grid-cols-[1.55fr_0.85fr] lg:gap-12">
            <div className="relative h-[480px] overflow-hidden rounded-[30px] bg-white shadow-[0_24px_70px_rgba(37,99,235,0.12)] ring-1 ring-blue-100/80 sm:h-[520px]">
              <iframe
                title="Werkgebied AMR IT Solutions in Breda"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79374.54472286106!2d4.681941777056458!3d51.559900647613816!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c6a1b47e17d16d%3A0xe5057ea284d71b41!2sBreda!5e0!3m2!1snl!2snl!4v1782939734087!5m2!1snl!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="block h-full w-full"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/25 bg-blue-500/10 shadow-[0_0_70px_rgba(37,99,235,0.18)] sm:h-80 sm:w-80"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-4 border-white bg-blue-600 text-white shadow-[0_12px_30px_rgba(37,99,235,0.35)]"
              >
                <MapPin className="h-6 w-6" />
              </div>
            </div>

            <div className="flex min-h-[480px] flex-col sm:min-h-[520px]">
              <h4 className="text-2xl font-extrabold tracking-tight text-slate-950">
                Wij werken in:
              </h4>

              <div className="mt-5 divide-y divide-slate-200/80">
                {locations.map((location) => (
                  <a
                    key={location}
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex min-h-[66px] items-center gap-4 py-3 outline-none transition-colors duration-300 hover:text-blue-600 focus-visible:rounded-2xl focus-visible:ring-4 focus-visible:ring-blue-500/15"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-[0_10px_24px_rgba(37,99,235,0.22)]">
                      <MapPin className="h-5 w-5" />
                    </span>
                    <span className="font-medium text-slate-700 transition-colors duration-300 group-hover:text-blue-700">
                      {location}
                    </span>
                    <ArrowRight className="ml-auto h-4 w-4 text-blue-500 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-7">
                <div className="rounded-[24px] bg-gradient-to-br from-blue-50 via-blue-50 to-cyan-50 p-6 shadow-[0_18px_45px_rgba(37,99,235,0.10)] ring-1 ring-blue-100">
                  <div className="flex items-start gap-4">
                    <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-blue-600 shadow-sm ring-1 ring-blue-100">
                      <Monitor className="h-7 w-7" />
                    </span>
                    <div>
                      <p className="text-lg font-bold text-blue-700">
                        Ook hulp op afstand mogelijk
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Veel problemen kunnen wij direct online oplossen via
                        veilige ondersteuning op afstand.
                      </p>
                      <ul className="mt-4 space-y-2.5">
                        {[
                          "Snel en veilig",
                          "Persoonlijke begeleiding",
                          "Zonder voorrijkosten",
                        ].map((item) => (
                          <li
                            key={item}
                            className="flex items-center gap-2.5 text-sm font-medium text-slate-700"
                          >
                            <Check className="h-4 w-4 shrink-0 text-blue-600" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <a
                  href="/#contact"
                  className="group mt-5 inline-flex min-h-[56px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-4 text-sm font-bold text-white shadow-[0_14px_34px_rgba(37,99,235,0.28)] transition-all duration-300 hover:-translate-y-1 hover:from-blue-700 hover:to-blue-600 hover:shadow-[0_20px_44px_rgba(37,99,235,0.38)]"
                >
                  Vraag vrijblijvend advies aan
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>

          <div className="relative mt-14 grid overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.07)] md:grid-cols-3">
            {[
              {
                icon: Clock3,
                title: "Vaak dezelfde dag geholpen",
                text: "Snelle hulp wanneer u het nodig heeft.",
              },
              {
                icon: User,
                title: "Persoonlijk contact",
                text: "Direct contact met korte lijnen.",
              },
              {
                icon: ShieldCheck,
                title: "Breda en omgeving",
                text: "Lokaal actief, altijd dichtbij.",
              },
            ].map((item, index) => {
              const BenefitIcon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`flex items-center gap-5 px-7 py-7 ${
                    index > 0
                      ? "border-t border-slate-200/80 md:border-l md:border-t-0"
                      : ""
                  }`}
                >
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                    <BenefitIcon className="h-7 w-7" />
                  </span>
                  <span>
                    <span className="block font-bold text-slate-950">
                      {item.title}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-slate-600">
                      {item.text}
                    </span>
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function SimpleContactRow({
  href,
  icon,
  label,
  value,
}: {
  href?: string;
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  const content = (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
        {icon}
      </span>
      <span>
        <span className="block text-sm text-slate-400">{label}</span>
        <span className="mt-0.5 block font-semibold text-white">{value}</span>
      </span>
    </>
  );

  return href ? (
    <a
      href={href}
      className="flex items-center gap-4 rounded-lg outline-none transition hover:opacity-80 focus-visible:ring-2 focus-visible:ring-blue-500/40"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-center gap-4">{content}</div>
  );
}


function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-medium text-slate-200">
        {label} {required && <span className="text-red-400">*</span>}
      </span>
      <span className="relative block">{children}</span>
    </label>
  );
}

function PreferenceOption({
  value,
  label,
  selected,
  onSelect,
  icon,
  iconClass,
}: {
  value: string;
  label: string;
  selected: boolean;
  onSelect: (value: string) => void;
  icon: React.ReactNode;
  iconClass: string;
}) {
  return (
    <label
      className={`flex min-h-[58px] cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 transition ${
        selected
          ? "border-blue-400/80 bg-blue-500/[0.07]"
          : "border-slate-700 bg-[#0b1424] hover:border-slate-600"
      }`}
    >
      <input
        type="radio"
        name="contactPreference"
        value={value}
        checked={selected}
        onChange={() => onSelect(value)}
        className="sr-only"
        required
      />
      <span className={iconClass}>{icon}</span>
      <span className="font-semibold text-white">{label}</span>
      <span
        className={`ml-auto flex h-5 w-5 items-center justify-center rounded-full border ${
          selected ? "border-blue-400 bg-blue-500" : "border-slate-500"
        }`}
      >
        {selected && <span className="h-2 w-2 rounded-full bg-white" />}
      </span>
    </label>
  );
}
