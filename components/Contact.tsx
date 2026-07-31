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
  "min-h-[66px] w-full rounded-[18px] border border-slate-700/80 bg-[#111827]/90 px-5 py-4 text-slate-50 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] outline-none transition-all duration-300 placeholder:text-slate-500 hover:border-slate-600 hover:bg-[#131d31] focus:border-blue-400 focus:bg-[#131d31] focus:ring-4 focus:ring-blue-500/15";

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
      <div className="mx-auto max-w-[1500px] px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[38px] border border-blue-500/30 bg-[#020817] text-slate-50 shadow-[0_40px_120px_rgba(2,8,23,0.42)] ring-1 ring-white/[0.03]">
          <div className="pointer-events-none absolute -left-48 -top-48 h-[620px] w-[620px] rounded-full bg-blue-600/25 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-[360px] -left-[250px] h-[720px] w-[720px] rounded-full border border-blue-500/35 bg-blue-600/[0.08] shadow-[0_0_120px_rgba(37,99,235,0.28)]" />
          <div className="pointer-events-none absolute right-0 top-0 h-[190px] w-[190px] rounded-bl-full border-b border-l border-blue-400/35 bg-blue-500/[0.08] shadow-[0_0_100px_rgba(59,130,246,0.50)]" />

          <div className="relative grid lg:grid-cols-[0.66fr_1.34fr]">
            <aside className="relative border-b border-white/10 px-7 py-12 sm:px-10 lg:border-b-0 lg:border-r lg:px-12 lg:py-16 xl:px-16">
              <div className="pointer-events-none absolute -left-2 top-[41%] grid grid-cols-4 gap-3 opacity-50">
                {Array.from({ length: 20 }).map((_, index) => (
                  <span key={index} className="h-1 w-1 rounded-full bg-blue-400" />
                ))}
              </div>

              <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-blue-600/15 blur-[75px]" />

              <p className="text-sm font-bold uppercase tracking-[0.18em] text-blue-400">
                Contact
              </p>

              <h2 className="mt-5 max-w-md text-4xl font-bold tracking-[-0.03em] text-slate-50 sm:text-5xl xl:text-[54px] xl:leading-[1.04]">
                Hulp nodig
                <br />
                met IT?
              </h2>

              <p className="mt-6 max-w-sm text-base leading-7 text-slate-300 sm:text-lg">
                Vertel ons waar je hulp bij nodig hebt. We nemen meestal binnen
                één werkdag contact met je op.
              </p>

              <div className="mt-9 grid grid-cols-3 overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
                {[
                  [Zap, "Snelle reactie"],
                  [MapPin, "Breda & omgeving"],
                  [ShieldCheck, "Betrouwbaar & veilig"],
                ].map(([Icon, label], index) => {
                  const TrustIcon = Icon as typeof Zap;

                  return (
                    <div
                      key={String(label)}
                      className={`flex min-h-[110px] flex-col items-center justify-center gap-2.5 px-3 text-center transition-colors duration-300 hover:bg-white/[0.025] ${
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

              <div className="mt-6 rounded-[22px] border border-white/10 bg-white/[0.03] p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
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

            <div className="relative p-4 sm:p-5 lg:p-6">
              <form
                onSubmit={handleSubmit}
                encType="multipart/form-data"
                className="relative space-y-7 overflow-hidden rounded-[30px] border border-blue-300/15 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.12),transparent_34%),linear-gradient(145deg,rgba(255,255,255,0.05),rgba(255,255,255,0.018)_45%,rgba(37,99,235,0.04))] p-7 shadow-[0_24px_80px_rgba(0,0,0,0.22),inset_0_1px_0_rgba(255,255,255,0.045)] sm:p-9 lg:p-10 xl:p-11"
              >
                <div className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-blue-500/10 blur-[72px]" />
                <div className="pointer-events-none absolute -bottom-32 left-1/3 h-64 w-64 rounded-full bg-blue-600/[0.045] blur-[80px]" />

                <div className="relative flex items-center gap-4">
                  <span className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-[22px] border border-blue-300/40 bg-gradient-to-br from-blue-400/20 to-blue-700/20 text-blue-200 shadow-[0_0_26px_rgba(59,130,246,0.55),0_0_60px_rgba(37,99,235,0.24)] before:absolute before:inset-2 before:rounded-[16px] before:border before:border-blue-300/10">
                    <MessageSquare className="h-7 w-7" />
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold tracking-[-0.02em] text-slate-50 sm:text-[28px]">
                      Stuur ons een bericht
                    </h3>
                    <p className="mt-1 text-slate-400">
                      We helpen je graag verder.
                    </p>
                  </div>
                </div>

                <div className="relative contents">
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
                      placeholder="Bijv. Ahmed"
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
                      placeholder="Bijv. ahmed@email.nl"
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
                      placeholder="Bijv. 06 12345678"
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
                    placeholder="Vertel zo duidelijk mogelijk waar we u mee kunnen helpen..."
                    rows={6}
                    required
                    className={`${inputClass} min-h-[180px] resize-y pl-14`}
                  />
                </Field>

                <div>
                  <p className="mb-2 text-sm font-medium text-slate-200">
                    Foto of bestand toevoegen{" "}
                    <span className="text-slate-400">(optioneel)</span>
                  </p>

                  <div className="rounded-[20px] border border-dashed border-slate-700/90 bg-[#0d1526]/80 p-5 transition-all duration-300 hover:border-blue-400/55 hover:bg-[#101a2d]">
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
                      className="inline-flex items-center gap-2 rounded-xl border border-slate-600 bg-white/[0.045] px-5 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-400 hover:bg-blue-500/10"
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
                    className="mt-0.5 h-6 w-6 shrink-0 cursor-pointer rounded-md border-2 border-slate-500 bg-slate-900 text-blue-600 accent-blue-600 focus:ring-4 focus:ring-blue-500/20 focus:ring-offset-0"
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
                  className="group relative inline-flex min-h-[72px] w-full items-center justify-center overflow-hidden rounded-[20px] border border-blue-200/55 bg-[linear-gradient(110deg,#1d4ed8_0%,#2563eb_42%,#3b82f6_62%,#1d4ed8_100%)] bg-[length:220%_100%] px-16 py-4 text-lg font-bold text-white shadow-[0_18px_40px_rgba(37,99,235,0.32),0_0_36px_rgba(59,130,246,0.18)] transition-all duration-300 before:absolute before:inset-x-8 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/80 before:to-transparent hover:-translate-y-1 hover:bg-[position:100%_0] hover:shadow-[0_26px_58px_rgba(37,99,235,0.44),0_0_48px_rgba(59,130,246,0.24)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-400/30 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
                >
                  <Send className="absolute left-6 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />

                  <span>
                    {submitting ? "Bericht verzenden..." : "Bericht verzenden"}
                  </span>

                  <ArrowRight className="absolute right-6 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>

                <div className="grid gap-6 border-t border-white/10 pt-7 text-sm leading-5 text-slate-300 sm:grid-cols-3 lg:text-[15px] lg:leading-6">
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
                </div>
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

          {/* Titel */}
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

          {/* Kaart en locaties */}
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

              {/* Visuele werkgebiedcirkel zoals in het voorbeeld */}
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

          {/* Voordelenbalk */}
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
    "group flex min-h-[86px] items-center gap-4 rounded-[20px] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.035),rgba(37,99,235,0.025))] p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/45 hover:bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(37,99,235,0.055))] hover:shadow-[0_20px_46px_rgba(0,0,0,0.20),0_0_28px_rgba(37,99,235,0.10)]";

  const content = (
    <>
      <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-blue-300/20 bg-gradient-to-br from-blue-500/20 to-blue-700/15 text-blue-300 shadow-[0_0_22px_rgba(59,130,246,0.24)] transition-all duration-300 group-hover:scale-105 group-hover:border-blue-300/45 group-hover:bg-blue-500 group-hover:text-white group-hover:shadow-[0_0_32px_rgba(59,130,246,0.36)]">
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
      className={`flex min-h-[64px] cursor-pointer items-center gap-3 rounded-[18px] border px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 ${
        selected
          ? "border-blue-500 bg-blue-500/10 shadow-[0_0_26px_rgba(37,99,235,0.18)]"
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