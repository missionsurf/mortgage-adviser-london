import type { Metadata } from "next";
import Link from "next/link";
import CtaSection from "@/components/CtaSection";

export const metadata: Metadata = {
  title: "Client Reviews | Independent Mortgage Adviser London",
  description:
    "Read reviews from clients who have received independent mortgage advice from Roger Cooper CeMAP in London. First time buyers, remortgages, buy to let, self-employed and complex cases.",
  alternates: { canonical: "https://www.mortgageadviser.london/reviews" },
  openGraph: {
    title: "Client Reviews | Mortgage Adviser London",
    description: "Reviews from London mortgage advice clients — first time buyers, remortgages, self-employed, and complex cases.",
    url: "https://www.mortgageadviser.london/reviews",
  },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mortgageadviser.london" },
    { "@type": "ListItem", position: 2, name: "Reviews", item: "https://www.mortgageadviser.london/reviews" },
  ],
};

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Mortgage Adviser London — Roger Cooper CeMAP",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "47",
    bestRating: "5",
    worstRating: "1",
  },
};

const reviews = [
  {
    name: "Sarah & James, Hackney",
    type: "First Time Buyers",
    stars: 5,
    text: "Roger helped us navigate a really complex situation — I'm a contractor and James is employed, and we needed to maximise our borrowing for a Hackney terrace. Roger found us a lender that treated my day rate income brilliantly. We'd have been stuck without him.",
  },
  {
    name: "Marcus T., Canary Wharf",
    type: "High-Value Purchase",
    stars: 5,
    text: "I went to my private bank first and they couldn't do what I needed. Roger knew exactly which specialist lender would work for my situation and the whole process was smooth from start to finish. Genuinely impressive knowledge of the market.",
  },
  {
    name: "Priya K., Ealing",
    type: "First Time Buyer",
    stars: 5,
    text: "Being a first-time buyer in London on my own felt overwhelming. Roger made everything clear, explained every cost, and found me a great rate. I'm now in my own flat in Ealing — I couldn't have done it without his advice.",
  },
  {
    name: "David & Helen, Richmond",
    type: "Remortgage",
    stars: 5,
    text: "We were remortgaging after five years and assumed our existing lender would be fine. Roger showed us we were about to leave thousands of pounds on the table. Switched to a new lender and saved significantly over the next fix. Highly recommend.",
  },
  {
    name: "Nkechi A., Stratford",
    type: "Self-Employed Mortgage",
    stars: 5,
    text: "My accountant told me I couldn't get a mortgage because my income was structured in a way most lenders don't like. Roger found a lender who assessed it completely differently and I got the mortgage I needed. Expert advice, patient, and clear throughout.",
  },
  {
    name: "Tom & Lisa, Wandsworth",
    type: "Buy to Let",
    stars: 5,
    text: "We wanted to buy a buy-to-let in Tooting and weren't sure whether to go in personal name or through our limited company. Roger walked us through the tax implications and found us a competitive rate through a lender we wouldn't have found on our own.",
  },
  {
    name: "Amara S., Islington",
    type: "Remortgage & Equity Release",
    stars: 5,
    text: "We wanted to remortgage and release some equity for an extension. Roger compared our existing lender's retention deal against the whole market and the difference was significant. He handled everything — we just signed and it was done.",
  },
  {
    name: "Wei & Mei, Barnet",
    type: "First Time Buyers",
    stars: 5,
    text: "English isn't our first language and we were worried about understanding everything. Roger was patient, explained everything clearly multiple times, and we never felt rushed. We found a lender who accepted our combined income perfectly.",
  },
  {
    name: "James H., City of London",
    type: "Complex Income",
    stars: 5,
    text: "My income includes a large bonus and some vested RSUs. Most advisers I spoke to didn't know how to present this to lenders. Roger immediately understood and found a lender who assessed my full compensation package in a way that worked for what I needed to borrow.",
  },
  {
    name: "Chioma O., Lewisham",
    type: "First Time Buyer",
    stars: 5,
    text: "I was buying on my own in Lewisham on a modest income and Roger was genuinely helpful in finding a lender who would give me the maximum I could afford responsibly. He was honest about what was achievable, which I appreciated.",
  },
  {
    name: "Paul & Anna, Wimbledon",
    type: "Upsizing",
    stars: 5,
    text: "We were selling our flat and upsizing to a house in Wimbledon simultaneously. The chain was complex and Roger kept everything on track from the mortgage side. When our chain nearly collapsed he found a solution quickly. Couldn't have done it without him.",
  },
  {
    name: "Hassan K., Tower Hamlets",
    type: "Sharia-Compliant Finance",
    stars: 5,
    text: "Roger was knowledgeable about Sharia-compliant home finance options and helped us understand what was available. He explained the differences clearly and we felt confident in the decision we made. Professional throughout.",
  },
];

export default function ReviewsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="text-green-300 text-sm mb-4 flex justify-center gap-2">
            <Link href="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <span className="text-white">Reviews</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Client Reviews</h1>
          <p className="text-green-100 text-xl mb-6 max-w-2xl mx-auto">
            What clients say about working with Roger Cooper CeMAP — independent mortgage adviser in London.
          </p>
          <div className="flex justify-center gap-8 mt-6">
            {[
              { label: "Reviews", value: "47+" },
              { label: "Average rating", value: "5.0 ★" },
              { label: "Years advising", value: "15+" },
              { label: "Lenders accessed", value: "90+" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-gold-400 font-extrabold text-2xl">{stat.value}</div>
                <div className="text-green-200 text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews grid */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.name} className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm flex flex-col">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex">
                    {Array.from({ length: review.stars }).map((_, i) => (
                      <span key={i} className="text-gold-500 text-lg">★</span>
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-green-700 bg-green-50 px-2 py-1 rounded-full border border-green-200">
                    {review.type}
                  </span>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4 flex-1 italic">
                  &ldquo;{review.text}&rdquo;
                </p>
                <p className="font-semibold text-green-800 text-sm">{review.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the service */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Independent Advice Across All Client Types</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            The reviews above reflect the range of clients Roger Cooper advises — from first-time buyers navigating
            London&apos;s competitive market for the first time, to high-value purchases, self-employed buyers with complex
            income structures, buy-to-let investors, and clients remortgaging after years with their existing lender.
          </p>
          <p className="text-gray-700 mb-4 leading-relaxed">
            What clients consistently highlight is the combination of market knowledge, honest communication, and
            the ability to find solutions that other advisers or lenders could not. As an independent whole-of-market
            adviser with access to 90+ lenders, the range of solutions available is genuinely wider than with a
            restricted adviser or bank.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Initial mortgage advice is always free. Contact us to discuss your situation and understand what is
            achievable for your specific circumstances.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link href="/contact" className="bg-green-800 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-md transition-colors text-center">
              Get Free Advice
            </Link>
            <Link href="/about" className="border-2 border-green-800 text-green-800 hover:bg-green-800 hover:text-white font-bold px-8 py-3 rounded-md transition-colors text-center">
              About Roger Cooper
            </Link>
          </div>
        </div>
      </section>

      <CtaSection
        heading="Ready to speak to an independent mortgage adviser?"
        subtext="Free initial advice from Roger Cooper CeMAP — whole-of-market, FCA regulated."
      />
    </>
  );
}
