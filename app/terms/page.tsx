import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use | Mortgage Adviser London",
  description: "Terms of use for the Mortgage Adviser London website operated by Mortgage International Ltd.",
  alternates: { canonical: "https://www.mortgageadviser.london/terms" },
  robots: { index: false },
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <nav className="text-green-700 text-sm mb-6">
        <Link href="/" className="hover:text-green-900">Home</Link> › Terms of Use
      </nav>
      <h1 className="text-3xl font-bold text-green-800 mb-2">Terms of Use</h1>
      <p className="text-gray-500 text-sm mb-8">Last updated: June 2026</p>

      <div className="prose prose-gray max-w-none space-y-8 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">About this website</h2>
          <p>
            This website (mortgageadviser.london) is operated by Mortgage International Ltd, an appointed representative
            of The Right Mortgage Limited, which is authorised and regulated by the Financial Conduct Authority
            (FCA Ref: 478810). Registered in England and Wales.
          </p>
          <p className="mt-2">
            By using this website you agree to these terms of use. If you do not agree, please do not use the site.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">Information and advice</h2>
          <p>
            The information provided on this website is for general guidance purposes only and does not constitute
            regulated financial advice. Individual circumstances vary, and you should not act on information from
            this website without obtaining personalised advice that takes your specific circumstances into account.
          </p>
          <p className="mt-2">
            All mortgage advice provided by Mortgage International Ltd is regulated by the Financial Conduct Authority.
            Regulated mortgage advice means advice that is personalised, documented, and subject to FCA rules and
            the Financial Ombudsman Service.
          </p>
          <p className="mt-2 font-medium text-gray-800">
            Your home may be repossessed if you do not keep up repayments on your mortgage.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">Regulatory information</h2>
          <p>
            Mortgage International Ltd is an appointed representative of The Right Mortgage Limited, which is
            authorised and regulated by the Financial Conduct Authority. FCA Reference: 478810.
          </p>
          <p className="mt-2">
            The guidance and information contained within this website is subject to the UK regulatory regime and
            is therefore targeted at consumers based in the United Kingdom.
          </p>
          <p className="mt-2">
            You can check our FCA registration on the Financial Services Register at{" "}
            <a href="https://register.fca.org.uk" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900">
              register.fca.org.uk
            </a>.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">Accuracy of information</h2>
          <p>
            We take reasonable steps to ensure that the information on this website is accurate and up to date.
            However, we make no warranties or representations as to the accuracy, completeness, or timeliness of
            the content. Mortgage rates, lender criteria, and regulatory rules change frequently. You should verify
            current information directly with lenders or through regulated advice before making financial decisions.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">Intellectual property</h2>
          <p>
            All content on this website — including text, images, and design — is owned by or licensed to Mortgage
            International Ltd. You may not reproduce, distribute, or use content from this website without prior
            written permission.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">Limitation of liability</h2>
          <p>
            To the extent permitted by law, Mortgage International Ltd shall not be liable for any loss or damage
            arising from your use of this website or reliance on its content. This limitation does not apply to
            losses arising from our regulated advice activities, which are subject to FCA rules and the Financial
            Ombudsman Service complaints process.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">Complaints</h2>
          <p>
            If you have a complaint about our services, please contact us in the first instance at{" "}
            <a href="mailto:admin@mortgageinternational.co.uk" className="text-green-700 hover:text-green-900">
              admin@mortgageinternational.co.uk
            </a>. We will acknowledge your complaint within 5 business days and issue a final response within 8 weeks.
          </p>
          <p className="mt-2">
            If you are not satisfied with our response, you may refer your complaint to the Financial Ombudsman Service
            (FOS) at{" "}
            <a href="https://www.financial-ombudsman.org.uk" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:text-green-900">
              financial-ombudsman.org.uk
            </a>. The FOS is a free, independent service for resolving disputes between consumers and financial firms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">Governing law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Any disputes will be subject to the exclusive
            jurisdiction of the courts of England and Wales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-green-800 mb-3">Changes to these terms</h2>
          <p>
            We may update these terms from time to time. The current version is always available on this page.
            Continued use of the website after changes constitutes acceptance of the updated terms.
          </p>
        </section>
      </div>

      <div className="mt-10 border-t border-gray-200 pt-6 text-sm text-gray-500">
        <Link href="/" className="text-green-700 hover:text-green-900">← Back to home</Link>
        {" · "}
        <Link href="/privacy-policy" className="text-green-700 hover:text-green-900">Privacy Policy</Link>
      </div>
    </div>
  );
}
