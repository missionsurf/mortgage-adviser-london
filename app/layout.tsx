import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Independent Mortgage Adviser London | MA London",
    template: "%s | MA London — Mortgage Adviser",
  },
  description:
    "Independent mortgage adviser in London. CeMAP qualified, FCA regulated, whole-of-market advice from Roger Iyamu. 90+ lenders, 15+ years experience.",
  metadataBase: new URL("https://www.mortgageadviser.london"),
  openGraph: {
    siteName: "Mortgage Adviser London",
    locale: "en_GB",
    type: "website",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Mortgage Adviser London — Mortgage International Ltd",
  image: "https://www.mortgageadviser.london/roger-iyamu.JPG",
  url: "https://www.mortgageadviser.london",
  telephone: "+44-844-884-9748",
  email: "admin@mortgageinternational.co.uk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, 207 Regent Street",
    addressLocality: "London",
    postalCode: "W1B 3HH",
    addressCountry: "GB",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5126,
    longitude: -0.1425,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "17:00",
    },
  ],
  priceRange: "Free initial advice",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roger Iyamu",
  jobTitle: "Independent Mortgage Adviser",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "CeMAP (Certificate in Mortgage Advice and Practice)",
  },
  worksFor: {
    "@type": "Organization",
    name: "Mortgage International Ltd",
  },
  url: "https://www.mortgageadviser.london/about",
  image: "https://www.mortgageadviser.london/roger-iyamu.JPG",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
