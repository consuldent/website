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
  metadataBase: new URL("https://consuldent.com.au"),
 alternates: {
    canonical: "/",
  },
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
  twitter: {
    card: "summary_large_image",
    title: "Consuldent | Where Dental Practices Grow",
    description: "Dental practice consulting powered by AI. Results in 90 days.",
  },
  other: {
    "msapplication-TileColor": "#0A3D91",
    "theme-color": "#0A3D91",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Consuldent",
  "alternateName": "Consuldent Dental Practice Consulting",
  "description": "Dental practice consulting powered by AI. Results in 90 days. PMS optimisation, automation, training for dental practices in Melbourne.",
  "url": "https://consuldent.com.au",
  "logo": "https://consuldent.com.au/logo.png",
  "image": "https://consuldent.com.au/logo.png",
  "email": "hello@consuldent.com.au",
  "telephone": "+61-400-000-000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Melbourne, VIC",
    "addressLocality": "Melbourne",
    "addressRegion": "VIC",
    "postalCode": "3000",
    "addressCountry": "AU"
  },
  "areaServed": {
    "@type": "StateOrCountry",
    "name": "Victoria, Australia"
  },
  "priceRange": "$$$",
  "openingHours": "Mo-Fr 09:00-18:00",
  " foundingDate": "2024",
  "founders": [
    {
      "@type": "Person",
      "name": "Dr Vrinda Vashisht",
      "jobTitle": "Founder & Principal Consultant"
    }
  ],
  "employee": [
    {
      "@type": "Person",
      "name": "Dr Vrinda Vashisht",
      "jobTitle": "Founder & Principal Consultant"
    },
    {
      "@type": "Person",
      "name": "Dhruv Oberoi",
      "jobTitle": "Chief Technology Officer"
    },
    {
      "@type": "Person",
      "name": "Jeremy Ciaora",
      "jobTitle": "Head of Growth & Marketing"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/company/consuldent",
    "https://www.instagram.com/consuldent"
  ],
  "serviceType": [
    "Dental Practice Consulting",
    "PMS Optimisation",
    "AI Automation",
    "Team Training",
    "Patient Experience"
  ]
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
