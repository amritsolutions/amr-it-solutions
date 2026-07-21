import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/Navbar";
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

const siteUrl = "https://www.amritsolutions.nl";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "AMR IT Solutions | IT Support, Websites & Microsoft 365",
    template: "%s | AMR IT Solutions",
  },

  description:
    "AMR IT Solutions biedt informatie en ondersteuning op het gebied van IT, computerreparatie, websites, Microsoft 365 en cloudoplossingen.",

  keywords: [
    "IT Support",
    "Computer reparatie",
    "Websites",
    "Microsoft 365",
    "Cloudoplossingen",
    "Breda",
    "AMR IT Solutions",
  ],

  authors: [{ name: "AMR IT Solutions" }],
  creator: "AMR IT Solutions",
  publisher: "AMR IT Solutions",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "AMR IT Solutions | IT Support in Breda",
    description:
      "Informatie en ondersteuning voor IT, computerreparatie, websites, Microsoft 365 en cloudoplossingen.",
    url: siteUrl,
    siteName: "AMR IT Solutions",
    images: [
      {
        url: "/images/hero.jpg",
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
      "Informatie en ondersteuning voor IT, computerreparatie, websites en Microsoft 365.",
    images: ["/images/hero.jpg"],
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "AMR IT Solutions",
  url: siteUrl,
  description:
    "Een website over IT-support, computerreparatie, websites, Microsoft 365 en cloudoplossingen.",
  inLanguage: "nl-NL",
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
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />

        <Navbar />

        <main className="flex-1">{children}</main>

        <WhatsAppButton />

        <Footer />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-T2ZBBR79D5"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag() {
              window.dataLayer.push(arguments);
            }

            gtag("js", new Date());
            gtag("config", "G-T2ZBBR79D5");
          `}
        </Script>

        <CookieBanner />
      </body>
    </html>
  );
}