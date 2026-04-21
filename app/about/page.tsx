import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "About Roger Cooper — CeMAP Qualified Mortgage Adviser London",
  description:
    "Roger Cooper is a CeMAP qualified independent mortgage adviser based in London with 15+ years experience. FCA regulated, whole-of-market, genuinely independent.",
  alternates: { canonical: "https://www.mortgageadviser.london/about" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Roger Cooper",
  jobTitle: "Independent Mortgage Adviser",
  description: "CeMAP qualified independent mortgage adviser based in London with over 15 years of experience advising buyers across Greater London and the Home Counties.",
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: "CeMAP — Certificate in Mortgage Advice and Practice",
    credentialCategory: "Professional Qualification",
    recognizedBy: {
      "@type": "Organization",
      name: "London Institute of Banking and Finance (LIBF)",
    },
  },
  worksFor: {
    "@type": "Organization",
    name: "Mortgage International Ltd",
    url: "https://www.mortgageinternational.co.uk",
  },
  url: "https://www.mortgageadviser.london/about",
  image: "https://www.mortgageadviser.london/roger-iyamu.JPG",
  address: {
    "@type": "PostalAddress",
    streetAddress: "3rd Floor, 207 Regent Street",
    addressLocality: "London",
    postalCode: "W1B 3HH",
    addressCountry: "GB",
  },
  telephone: "+44-844-884-9748",
  email: "admin@mortgageinternational.co.uk",
  knowsAbout: [
    "Residential mortgages",
    "First time buyer mortgages",
    "Buy to let mortgages",
    "Self-employed mortgages",
    "Remortgaging",
    "Expat mortgages",
    "London property market",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mortgageadviser.london" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://www.mortgageadviser.london/about" },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> › About
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">About Roger Cooper</h1>
          <p className="text-green-100 text-xl">
            CeMAP Qualified Independent Mortgage Adviser — London
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Photo and credentials */}
            <div className="lg:col-span-1">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mb-6">
                <Image
                  src="/roger-iyamu.JPG"
                  alt="Roger Cooper — Independent Mortgage Adviser London"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              <div className="bg-green-50 rounded-xl p-5 border border-green-100 space-y-3 text-sm">
                <div>
                  <p className="font-semibold text-green-800">Qualifications</p>
                  <p className="text-gray-700">CeMAP — Certificate in Mortgage Advice and Practice (LIBF)</p>
                </div>
                <div>
                  <p className="font-semibold text-green-800">Experience</p>
                  <p className="text-gray-700">15+ years advising London buyers</p>
                </div>
                <div>
                  <p className="font-semibold text-green-800">Regulation</p>
                  <p className="text-gray-700">Appointed Representative of The Right Mortgage Limited (FCA Ref: 478810)</p>
                </div>
                <div>
                  <p className="font-semibold text-green-800">Lender Access</p>
                  <p className="text-gray-700">90+ lenders — whole-of-market independent</p>
                </div>
                <div>
                  <p className="font-semibold text-green-800">Location</p>
                  <p className="text-gray-700">207 Regent Street, London W1B 3HH</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-2 space-y-6">
              <h2 className="text-3xl font-bold text-green-800">A Mortgage Adviser You Can Trust</h2>

              <p className="text-gray-700 leading-relaxed text-lg">
                I have been providing independent mortgage advice to London buyers for over 15 years. In that
                time, I have helped hundreds of clients — first-time buyers, upsizing families, self-employed
                professionals, property investors, and London expats returning home — navigate one of the world&apos;s
                most complex property markets.
              </p>

              <p className="text-gray-700 leading-relaxed">
                My CeMAP qualification — the Certificate in Mortgage Advice and Practice, awarded by the
                London Institute of Banking and Finance — is the recognised professional standard for mortgage
                advisers in the UK. But qualifications are only part of what makes advice effective. The other
                part is deep, practical experience of London&apos;s market: knowing which lenders are flexible on
                contractor income, which are comfortable with high-rise flats in east London, which will lend
                to directors who retain profits in their company, and which provide the fastest service when a
                purchase chain needs to move quickly.
              </p>

              <h3 className="text-xl font-bold text-green-800 mt-6">Why I Advise Independently</h3>

              <p className="text-gray-700 leading-relaxed">
                I made a deliberate choice to advise independently — whole-of-market — rather than as a tied
                or restricted adviser. The reason is straightforward: restricted advisers can only recommend
                from their approved panel of lenders. If the right mortgage for your circumstances sits outside
                that panel, a restricted adviser simply cannot find it for you. Independence means my
                recommendation is driven entirely by what is right for your situation, not by commercial
                relationships with particular lenders.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Access to 90+ lenders — including specialist lenders who are not panel-listed with many advisory
                firms and private banks who require introduction — means that my clients receive genuinely
                comprehensive market research, not a subset of it.
              </p>

              <h3 className="text-xl font-bold text-green-800 mt-6">My Approach to Advice</h3>

              <p className="text-gray-700 leading-relaxed">
                I believe the best mortgage advice starts with listening. Before I research any product, I want
                to understand your full situation — your income, your plans, your risk tolerance, and what you
                want your mortgage to do for you over its lifetime. A first-time buyer saving for a wedding in
                three years has different needs from a property investor looking to build a portfolio. A
                self-employed professional who values flexibility needs a different structure from a family who
                prioritises payment certainty.
              </p>

              <p className="text-gray-700 leading-relaxed">
                I never recommend on rate alone. The right mortgage considers the product features, the lender&apos;s
                service reputation, the total cost over the deal term including all fees, and the suitability
                for your specific circumstances. I explain my recommendation clearly, including the alternatives
                I considered and why I preferred the one I chose.
              </p>

              <h3 className="text-xl font-bold text-green-800 mt-6">FCA Regulation and Your Protection</h3>

              <p className="text-gray-700 leading-relaxed">
                Mortgage International Ltd is an appointed representative of The Right Mortgage Limited,
                which is authorised and regulated by the Financial Conduct Authority (FCA Reference: 478810).
                You can verify this on the FCA&apos;s Financial Services Register at register.fca.org.uk.
              </p>

              <p className="text-gray-700 leading-relaxed">
                FCA regulation means that the advice you receive is subject to strict conduct rules — I must
                recommend only what is suitable for your circumstances, disclose all fees transparently, and
                give you the opportunity to complain to the Financial Ombudsman Service if you are not satisfied.
                These protections exist for your benefit and I take them seriously.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Link href="/contact" className="bg-green-800 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-md transition-colors text-center">
                  Book a consultation
                </Link>
                <a href="tel:08448849748" className="border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white font-semibold px-8 py-3 rounded-md transition-colors text-center">
                  Call 0844 884 9748
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission statement */}
      <section className="py-16 px-4 bg-green-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Mission Statement</h2>
          <p className="text-gray-700 text-xl leading-relaxed italic">
            &ldquo;My mission is to give every client the same quality of independent mortgage advice that was previously
            only available to the wealthy or well-connected. London&apos;s property market is complex and high-stakes.
            You deserve an adviser who genuinely understands it, has access to the full market, and recommends
            what is right for you — not what is convenient for them.&rdquo;
          </p>
          <p className="font-semibold text-green-800 mt-4">— Roger Cooper, CeMAP</p>
        </div>
      </section>

      <CtaSection heading="Ready to speak with Roger?" subtext="Free initial advice — no obligation, no hard sell. Just clear, independent mortgage guidance." />
    </>
  );
}
