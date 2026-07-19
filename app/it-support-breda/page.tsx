import ServiceHero from "@/components/ServiceHero";

export default function ITSupportBredaPage() {
  return (
    <>
      <ServiceHero
        eyebrow="IT SUPPORT BREDA"
        title="IT Support in Breda voor particulieren én bedrijven"
        description="Heeft u problemen met uw computer, laptop, wifi, printer of Microsoft 365? AMR IT Solutions biedt snelle en persoonlijke IT Support in Breda en omgeving. Wij helpen particulieren, zzp'ers en kleine bedrijven op locatie of op afstand."

        image="/images/services/it-support-breda.png"
        imageAlt="IT Support Breda"

        primaryButtonText="IT Support aanvragen"
        primaryButtonHref="/contact"

        secondaryButtonText="WhatsApp ons"
        secondaryButtonHref="whatsapp"

        features={[
          {
            icon: "monitor",
            title: "Computerhulp",
          },
          {
            icon: "wifi",
            title: "Wifi & Netwerk",
          },
          {
            icon: "shield",
            title: "Veilig & Betrouwbaar",
          },
          {
            icon: "message-circle",
            title: "Persoonlijke hulp",
          },
        ]}
      />
    </>
  );
}