import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AMR IT Solutions | IT Support, Websites & Microsoft 365",
  description:
    "AMR IT Solutions helpt particulieren en bedrijven met IT Support, computerreparatie, websites, Microsoft 365 en cloudoplossingen.",
  keywords: [
    "IT Support",
    "Computer reparatie",
    "Websites",
    "Microsoft 365",
    "Breda",
    "AMR IT Solutions",
  ],
  authors: [{ name: "AMR IT Solutions" }],
  openGraph: {
    title: "AMR IT Solutions | IT Support in Breda",
    description:
      "Hulp nodig met IT, computerreparatie, websites of Microsoft 365? AMR IT Solutions helpt particulieren en bedrijven in Breda en omgeving.",
    url: "https://www.amritsolutions.nl",
    siteName: "AMR IT Solutions",
    images: [
      {
        url: "https://www.amritsolutions.nl/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "AMR IT Solutions",
      },
    ],
    locale: "nl_NL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMR IT Solutions | IT Support in Breda",
    description:
      "IT Support, computerreparatie, websites en Microsoft 365 voor Breda en omgeving.",
    images: ["https://www.amritsolutions.nl/images/hero.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
  <main className="flex-1">
    {children}
  </main>

  <WhatsAppButton />

  <Footer />

  <Script
    src="https://www.googletagmanager.com/gtag/js?id=G-T2ZBBR79D5"
    strategy="afterInteractive"
  />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-T2ZBBR79D5');
          `}
        </Script>
        <CookieBanner />
      </body>
    </html>
  );
}