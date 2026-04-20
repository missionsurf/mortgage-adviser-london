import Link from "next/link";

interface CtaSectionProps {
  heading?: string;
  subtext?: string;
}

export default function CtaSection({
  heading = "Ready to speak to a London mortgage adviser?",
  subtext = "Get free initial advice from Roger Iyamu, CeMAP Qualified, with access to 90+ lenders.",
}: CtaSectionProps) {
  return (
    <section className="bg-green-800 text-white py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">{heading}</h2>
        <p className="text-green-100 mb-8 text-lg">{subtext}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-gold-500 hover:bg-gold-400 text-green-900 font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Get Free Advice
          </Link>
          <a
            href="tel:08448849748"
            className="border-2 border-white hover:bg-white hover:text-green-800 font-semibold px-8 py-3 rounded-md transition-colors"
          >
            Call 0844 884 9748
          </a>
        </div>
        <p className="text-green-200 text-sm mt-6">
          Mortgage International Ltd · FCA Ref 478810 · 207 Regent Street, London W1B 3HH
        </p>
      </div>
    </section>
  );
}
