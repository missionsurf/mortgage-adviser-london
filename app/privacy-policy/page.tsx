import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Mortgage Adviser London",
  description: "Privacy policy for Mortgage Adviser London — how we collect, use, and protect your personal data.",
  alternates: { canonical: "https://www.mortgageadviser.london/privacy-policy" },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-green-700 text-sm mb-6">
        <Link href="/" className="hover:text-green-900">Home</Link> › Privacy Policy
      </nav>
      <h1 className="text-3xl font-bold text-green-800 mb-2">Privacy Policy</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: June 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">Who we are</h2>
          <p>
            This website is operated by Mortgage International Ltd, trading as Mortgage Adviser London. We are an
            appointed representative of The Right Mortgage Limited, which is authorised and regulated by the Financial
            Conduct Authority (FCA Ref: 478810).
          </p>
          <p className="mt-2">
            Our registered address is: 3rd Floor, 207 Regent Street, London, W1B 3HH.
          </p>
          <p className="mt-2">
            For data protection enquiries, contact us at: <a href="mailto:admin@mortgageinternational.co.uk" className="text-green-700 hover:text-green-900">admin@mortgageinternational.co.uk</a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">What personal data we collect</h2>
          <p>When you use this website or contact us, we may collect:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Name, email address, and telephone number (from contact forms)</li>
            <li>Financial information you provide in connection with mortgage advice (income, outgoings, deposit, property details)</li>
            <li>IP address and browser information (collected automatically by our website)</li>
            <li>Any other information you choose to provide to us</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">How we use your personal data</h2>
          <p>We use personal data to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Respond to your enquiries and provide mortgage advice</li>
            <li>Process mortgage applications on your behalf</li>
            <li>Comply with our regulatory obligations as an FCA regulated firm</li>
            <li>Improve our website and services</li>
            <li>Send you information about our services where you have consented or where we have a legitimate interest</li>
          </ul>
          <p className="mt-3">
            Our lawful bases for processing include: contract performance (to provide the service you have requested),
            legal obligation (to comply with FCA regulatory requirements), and legitimate interests (to run and improve
            our business).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">How long we retain your data</h2>
          <p>
            As an FCA regulated firm, we are required to retain client records for a minimum of 5 years from the end
            of our relationship. For mortgage advice, records are typically retained for the duration required by our
            regulatory obligations, which may extend beyond the end of our relationship.
          </p>
          <p className="mt-2">
            Website enquiry data that does not progress to a client relationship is retained for 12 months.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">Who we share your data with</h2>
          <p>We may share your personal data with:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Mortgage lenders and product providers (as part of the mortgage advice and application process)</li>
            <li>The Right Mortgage Limited (our appointed representative principal, for regulatory oversight)</li>
            <li>Our technology providers (website hosting, email, and CRM — who process data on our behalf as data processors)</li>
            <li>Regulatory bodies (FCA, Financial Ombudsman Service) where required by law</li>
          </ul>
          <p className="mt-2">We do not sell your personal data to third parties.</p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">Your rights</h2>
          <p>Under UK GDPR, you have the right to:</p>
          <ul className="list-disc list-inside mt-2 space-y-1">
            <li>Access the personal data we hold about you</li>
            <li>Request correction of inaccurate data</li>
            <li>Request erasure of your data (subject to our regulatory retention obligations)</li>
            <li>Object to processing based on legitimate interests</li>
            <li>Request restriction of processing</li>
            <li>Data portability (where processing is based on consent or contract)</li>
          </ul>
          <p className="mt-3">
            To exercise any of these rights, contact us at <a href="mailto:admin@mortgageinternational.co.uk" className="text-green-700 hover:text-green-900">admin@mortgageinternational.co.uk</a>.
          </p>
          <p className="mt-2">
            If you are not satisfied with how we handle your data, you have the right to complain to the Information
            Commissioner&apos;s Office (ICO) at <a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900">ico.org.uk</a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">Cookies</h2>
          <p>
            This website uses cookies to ensure the site functions correctly and to improve your experience. Essential
            cookies are required for the site to operate. We do not use advertising cookies or sell data to advertising
            networks.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">Changes to this policy</h2>
          <p>
            We may update this privacy policy from time to time. The most recent version is always available on this
            page. We will notify you of significant changes where we have your contact details.
          </p>
        </section>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500">
        <Link href="/" className="text-green-700 hover:text-green-900">← Back to home</Link>
        {" · "}
        <Link href="/terms" className="text-green-700 hover:text-green-900">Terms of use</Link>
      </div>
    </div>
  );
}
