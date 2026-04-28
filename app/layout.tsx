import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GrainOverlay from "@/components/GrainOverlay";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Consuldent | Where Dental Practices Grow",
  description:
    "Dental practice consulting powered by AI. Results in 90 days. PMS optimisation, automation, training for dental practices in Melbourne.",
  icons: {
    icon: "/favicons/favicon.ico",
    apple: "/favicons/apple-touch-icon.png",
    other: [
      { rel: "icon", url: "/favicons/favicon-16x16.png", sizes: "16x16" },
      { rel: "icon", url: "/favicons/favicon-32x32.png", sizes: "32x32" },
    ],
  },
  manifest: "/favicons/site.webmanifest",
  openGraph: {
    title: "Consuldent | Where Dental Practices Grow",
    description:
      "Dental practice consulting powered by AI. Results in 90 days. PMS optimisation, automation, training for dental practices in Melbourne.",
    url: "https://consuldent.com.au",
    siteName: "Consuldent",
    locale: "en_AU",
    type: "website",
  },
  other: {
    "msapplication-TileColor": "#ffffff",
    "theme-color": "#ffffff",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Consuldent",
  description:
    "Dental practice consulting powered by AI. Results in 90 days. PMS optimisation, automation, training for dental practices in Melbourne.",
  url: "https://consuldent.com.au",
  email: "hello@consuldent.com.au",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: ["VIC", "NSW", "QLD"],
  serviceType: [
    "Dental Practice Consulting",
    "PMS Optimisation",
    "AI Automation",
    "Team Training",
    "Patient Experience",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} scroll-smooth`}>
      <body className="w-full overflow-x-hidden">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <GrainOverlay />
        <CustomCursor />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
