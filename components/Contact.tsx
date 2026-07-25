"use client";

import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock3,
  Grid2X2,
  LockKeyhole,
  Mail,
  MapPin,
  MessageSquare,
  Monitor,
  Paperclip,
  Phone,
  Send,
  ShieldCheck,
  Upload,
  User,
  Zap,
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

const benefits = [
  "Persoonlijke service en advies",
  "Snelle ondersteuning",
  "Transparante communicatie",
  "Hulp op locatie of op afstand",
  "Geen verborgen kosten",
];

const inputClass =
  "min-h-[66px] w-full rounded-[1.15rem] border border-slate-700/75 bg-[#121a2b]/95 px-5 py-4 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] outline-none transition duration-300 placeholder:text-slate-500 hover:border-slate-600 hover:bg-[#152036] focus:border-blue-400 focus:bg-[#152036] focus:ring-4 focus:ring-blue-500/15";

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
      className="overflow-hidden bg-gradient-to-b from-white via-slate-50/70 to-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-[1536px] px-3 sm:px-5 lg:px-6">
        <div className="relative overflow-hidden rounded-[2.4rem] border border-blue-500/30 bg-[#020817] text-white shadow-[0_42px_120px_rgba(15,23,42,0.38)] ring-1 ring-white/[0.025]">
          <div className="pointer-events-none absolute -left-44 -top-48 h-[38rem] w-[38rem] rounded-full bg-blue-600/25 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-64 -left-40 h-[42rem] w-[42rem] rounded-full border border-blue-500/35 bg-blue-600/[0.08] shadow-[0_0_115px_rgba(37,99,235,0.26)]" />
          <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-bl-full border-b border-l border-blue-400/35 bg-blue-500/[0.08] shadow-[0_0_95px_rgba(59,130,246,0.48)]" />

          <div className="relative grid lg:grid-cols-[0.68fr_1.32fr]">
            <aside className="relative border-b border-white/10 px-7 py-12 sm:px-10 lg:border-b-0 lg:border-r lg:px-12 lg:py-16 xl:px-16 xl:py-18">
              <div className="pointer-events-none absolute -left-1 top-[42%] grid grid-cols-4 gap-3 opacity-45">
                {Array.from({ length: 20 }).map((_, index) => (
                  <span
                    key={index}
                    className="h-1 w-1 rounded-full bg-blue-400"
                  />
                ))}
              </div>

              <div className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-blue-600/15 blur-[70px]" />

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
                Contact
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-extrabold tracking-[-0.04em] sm:text-5xl xl:text-[3.75rem] xl:leading-[1.02]">
                Hulp nodig
                <br />
                met IT?
              </h2>

              <p className="mt-6 max-w-sm text-base leading-7 text-slate-300 sm:text-lg">
                Vertel ons waar je hulp bij nodig hebt. We nemen meestal binnen
                één werkdag contact met je op.
              </p>

              <div className="mt-9 grid grid-cols-3 overflow-hidden rounded-[1.3rem] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
                {[
                  [Zap, "Snelle reactie"],
                  [MapPin, "Breda & omgeving"],
                  [ShieldCheck, "Betrouwbaar & veilig"],
                ].map(([Icon, label], index) => {
                  const TrustIcon = Icon as typeof Zap;

                  return (
                    <div
                      key={String(label)}
                      className={`flex min-h-[112px] flex-col items-center justify-center gap-2.5 px-3 text-center transition hover:bg-white/[0.025] ${
                        index > 0 ? "border-l border-white/10" : ""
                      }`}
                    >
                      <TrustIcon className="h-5 w-5 text-blue-400" />
                      <span className="text-[11px] font-medium leading-4 text-slate-300 sm:text-xs">
                        {String(label)}
                      </span>
                    </div>
                  );
                })}
              </div>

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
              </div>

              <div className="mt-6 rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                  <h3 className="font-bold text-white">
                    Waarom kiezen voor AMR IT Solutions?
                  </h3>
                </div>

                <ul className="mt-5 space-y-3">
                  {benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-start gap-3 text-sm leading-6 text-slate-300"
                    >
                      <Check className="mt-1 h-4 w-4 shrink-0 text-blue-400" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            <div className="relative px-4 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6">
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="space-y-8 rounded-[1.85rem] border border-white/10 bg-gradient-to-br from-white/[0.04] via-white/[0.02] to-blue-500/[0.035] p-7 shadow-[0_22px_70px_rgba(0,0,0,0.18),inset_0_1px_0_rgba(255,255,255,0.035)] sm:p-9 lg:p-10 xl:p-11"
              >
                <div className="flex items-center gap-5">
                  <span className="flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-[1.4rem] border border-blue-400/35 bg-blue-500/15 text-blue-300 shadow-[0_0_40px_rgba(37,99,235,0.36)]">
                    <MessageSquare className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-extrabold tracking-tight text-white sm:text-[1.9rem]">
                      Stuur ons een bericht
                    </h3>
                    <p className="mt-1 text-slate-400">
                      We helpen je graag verder.
                    </p>
                  </div>
                </div>

                {sent && (
                  <div
                    role="status"
                    className="flex items-start gap-3 rounded-2xl border border-emerald-400/25 bg-emerald-400/10 px-4 py-4 text-sm leading-6 text-emerald-300"
                  >
                    <Check className="mt-0.5 h-5 w-5 shrink-0" />
                    Bedankt! We hebben je bericht ontvangen en nemen zo snel
                    mogelijk contact met je op.
                  </div>
                )}

                {error && (
                  <div
                    role="alert"
                    className="rounded-2xl border border-red-400/25 bg-red-400/10 px-4 py-4 text-sm leading-6 text-red-300"
                  >
                    Het verzenden is niet gelukt, of het gekozen bestand is niet
                    geldig. Gebruik JPG, PNG of PDF tot maximaal 5 MB.
                  </div>
                )}

                <div className="grid gap-x-7 gap-y-7 md:grid-cols-2">
                  <Field label="Naam" required>
                    <User className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                    <input
                      type="text"
                      name="name"
                      autoComplete="name"
                      placeholder="Uw naam"
                      required
                      className={`${inputClass} pl-14`}
                    />
                  </Field>

                  <Field label="E-mailadres" required>
                    <Mail className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                    <input
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="Uw e-mailadres"
                      required
                      className={`${inputClass} pl-14`}
                    />
                  </Field>

                  <Field label="Telefoonnummer">
                    <Phone className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                    <input
                      type="tel"
                      name="phone"
                      autoComplete="tel"
                      placeholder="06 12345678"
                      className={`${inputClass} pl-14`}
                    />
                  </Field>

                  <Field label="Waar heeft u hulp bij nodig?" required>
                    <Grid2X2 className="pointer-events-none absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
                    <select
                      name="service"
                      defaultValue=""
                      required
                      className={`${inputClass} appearance-none pl-14 pr-12`}
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
                    <ChevronDown className="pointer-events-none absolute right-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  </Field>
                </div>

                <Field label="Beschrijf uw vraag of probleem" required>
                  <MessageSquare className="pointer-events-none absolute left-5 top-5 h-5 w-5 text-slate-500" />
                  <textarea
                    name="message"
                    placeholder="Omschrijf zo duidelijk mogelijk waar we u mee kunnen helpen..."
                    rows={6}
                    required
                    className={`${inputClass} min-h-[182px] resize-y pl-14`}
                  />
                </Field>

                <div>
                  <p className="mb-2 text-sm font-medium text-slate-200">
                    Foto of bestand toevoegen{" "}
                    <span className="text-slate-400">(optioneel)</span>
                  </p>

                  <div className="rounded-[1.25rem] border border-dashed border-slate-700/90 bg-[#0d1526]/80 p-5 transition duration-300 hover:border-blue-400/55 hover:bg-[#101a2d]">
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
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-white/[0.045] px-5 py-3.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-500/10"
                    >
                      <Upload className="h-5 w-5" />
                      Bestand kiezen
                    </button>

                    <span className="ml-3 text-sm text-slate-400">
                      {fileName || "Geen bestand gekozen"}
                    </span>

                    <p className="mt-3 text-sm leading-6 text-slate-400">
                      Voeg een foto of screenshot toe zodat wij je sneller kunnen
                      helpen.
                    </p>
                    <p className="text-xs leading-5 text-slate-500">
                      Ondersteunde bestanden: JPG, PNG en PDF (max. 5 MB).
                    </p>
                  </div>
                </div>

                <fieldset>
                  <legend className="mb-3 text-sm font-medium text-slate-200">
                    Voorkeur contact <span className="text-red-400">*</span>
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

                <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-300">
                  <input
                    type="checkbox"
                    name="privacyAccepted"
                    value="yes"
                    required
                    className="mt-0.5 h-6 w-6 shrink-0 cursor-pointer rounded-md border-2 border-slate-500 bg-slate-900 text-blue-600 accent-blue-600 shadow-sm focus:ring-4 focus:ring-blue-500/20 focus:ring-offset-0"
                  />
                  <span>
                    Ik ga akkoord met de{" "}
                    <a
                      href="/privacy"
                      className="font-medium text-blue-400 underline-offset-4 hover:underline"
                    >
                      privacyverklaring
                    </a>{" "}
                    <span className="text-red-400">*</span>
                  </span>
                </label>

                <button
                  type="submit"
                  disabled={submitting}
                  className="group inline-flex min-h-[72px] w-full items-center justify-center gap-3 rounded-[1.2rem] border border-blue-300/55 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 bg-[length:235%_100%] px-6 py-4 text-lg font-extrabold text-white shadow-[0_24px_65px_rgba(37,99,235,0.42)] transition duration-300 hover:-translate-y-1 hover:bg-[position:100%_0] hover:shadow-[0_34px_82px_rgba(37,99,235,0.56)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  <Send className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  {submitting ? "Bericht verzenden..." : "Bericht verzenden"}
                </button>

                <div className="grid gap-6 border-t border-white/10 pt-7 text-sm leading-5 text-slate-300 sm:grid-cols-3 lg:text-[15px]">
                  <TrustLine
                    icon={<Clock3 className="h-5 w-5" />}
                    text="We reageren meestal binnen één werkdag"
                  />
                  <TrustLine
                    icon={<LockKeyhole className="h-5 w-5" />}
                    text="Jouw gegevens worden veilig verwerkt"
                    bordered
                  />
                  <TrustLine
                    icon={<ShieldCheck className="h-5 w-5" />}
                    text="Vrijblijvend advies • Geen verborgen kosten"
                    bordered
                  />
                </div>
              </form>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <div className="mx-auto mb-9 max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
              <span className="h-2.5 w-2.5 rounded-full bg-blue-600" />
              Werkgebied
            </span>

            <h3 className="mt-5 text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Actief in Breda en omgeving
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
              Wij helpen particulieren en bedrijven aan huis, op locatie of op
              afstand. Woont u in Breda of omgeving? Dan staan wij graag voor u
              klaar.
            </p>
          </div>

          <div className="grid items-stretch gap-7 lg:grid-cols-[1.65fr_0.85fr]">
            <div className="h-[420px] overflow-hidden rounded-[2rem] bg-white shadow-[0_18px_50px_rgba(15,23,42,0.10)] ring-1 ring-slate-200">
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
            </div>

            <div className="flex min-h-[420px] flex-col rounded-[2rem] bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.10)] ring-1 ring-slate-200 sm:p-8">
              <h4 className="text-2xl font-bold tracking-tight text-slate-950">
                Wij werken in:
              </h4>

              <div className="mt-6 space-y-3">
                {locations.map((location) => (
                  <div key={location} className="flex items-center gap-5">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <MapPin className="h-5 w-5" />
                    </div>
                    <span className="font-medium text-slate-700">
                      {location}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-7">
                <div className="rounded-2xl bg-blue-50 p-5">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm ring-1 ring-blue-100">
                      <Monitor className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-blue-700">
                        Ook hulp op afstand mogelijk
                      </p>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        Veel problemen kunnen wij direct online oplossen via
                        veilige ondersteuning op afstand.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
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
  const className =
    "group flex min-h-[84px] items-center gap-4 rounded-[1.2rem] border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-400/45 hover:bg-white/[0.06] hover:shadow-[0_20px_42px_rgba(0,0,0,0.18)]";

  const content = (
    <>
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-blue-400/15 bg-blue-500/15 text-blue-400 shadow-[0_0_32px_rgba(59,130,246,0.20)] transition duration-300 group-hover:scale-105 group-hover:bg-blue-500 group-hover:text-white">
        {icon}
      </span>
      <span className="min-w-0">
        <span className="block text-sm text-slate-400">{label}</span>
        <span className="mt-0.5 block break-all font-semibold text-white">
          {value}
        </span>
      </span>
      <ArrowRight className="ml-auto h-5 w-5 shrink-0 text-blue-400 opacity-70 transition group-hover:translate-x-1 group-hover:opacity-100" />
    </>
  );

  return href ? (
    <a href={href} className={className}>
      {content}
    </a>
  ) : (
    <div className={className}>{content}</div>
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
      className={`flex min-h-[64px] cursor-pointer items-center gap-3 rounded-[1.1rem] border px-5 py-4 transition duration-300 ${
        selected
          ? "border-blue-500 bg-blue-500/10 shadow-[0_0_22px_rgba(37,99,235,0.12)]"
          : "border-slate-700 bg-white/[0.025] hover:border-slate-600 hover:bg-white/[0.05]"
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

function TrustLine({
  icon,
  text,
  bordered,
}: {
  icon: React.ReactNode;
  text: string;
  bordered?: boolean;
}) {
  return (
    <div
      className={`flex items-start gap-4 ${
        bordered ? "sm:border-l sm:border-white/10 sm:pl-6" : ""
      }`}
    >
      <span className="mt-0.5 shrink-0 text-blue-400">{icon}</span>
      <span>{text}</span>
    </div>
  );
}