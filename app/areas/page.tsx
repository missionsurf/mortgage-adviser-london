import type { Metadata } from "next";
import Link from "next/link";
import { areas } from "@/lib/areas";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Mortgage Adviser Near Me — All London Boroughs & Home Counties",
  description:
    "Independent mortgage adviser covering all 33 London boroughs and key Home Counties. Local knowledge, whole-of-market access. Find your area.",
  alternates: { canonical: "https://www.mortgageadviser.london/areas" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mortgageadviser.london" },
    { "@type": "ListItem", position: 2, name: "Areas", item: "https://www.mortgageadviser.london/areas" },
  ],
};

const boroughs = areas.filter((a) => a.type === "borough");
const counties = areas.filter((a) => a.type === "county");

export default function AreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> › Areas
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Mortgage Adviser Near Me — London & Home Counties</h1>
          <p className="text-green-100 text-xl">
            Independent mortgage advice covering all 33 London boroughs and key Home Counties locations. Local knowledge matters.
          </p>
        </div>
      </section>

      {/* Why local knowledge matters */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-gray-700 leading-relaxed text-lg">
            Every area of London has its own property market characteristics — price points, property types, buyer
            profiles, and specific challenges. An independent mortgage adviser who understands the area you&apos;re
            buying in can anticipate issues before they arise: whether that&apos;s leasehold complexity in a particular
            development, lender restrictions on certain property types, or the specific affordability questions that
            arise in the area&apos;s price bracket. Browse all areas below to find specific guidance for your location.
          </p>
        </div>
      </section>

      {/* London boroughs */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">London Boroughs</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {boroughs.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-white rounded-xl p-5 border border-gray-100 hover:border-green-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-green-800 group-hover:text-green-700 text-sm leading-tight">{area.name}</h3>
                  <span className="text-gold-600 font-bold text-xs ml-2 flex-shrink-0">{area.avgPrice}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{area.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Home Counties */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-8">Home Counties</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {counties.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-green-50 rounded-xl p-5 border border-green-100 hover:border-green-300 hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-green-800 group-hover:text-green-700 text-sm leading-tight">{area.name}</h3>
                  <span className="text-gold-600 font-bold text-xs ml-2 flex-shrink-0">{area.avgPrice}</span>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{area.note}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaSection heading="Need mortgage advice for your area?" subtext="Independent whole-of-market advice from Roger Iyamu CeMAP — covering London and the Home Counties." />
    </>
  );
}
