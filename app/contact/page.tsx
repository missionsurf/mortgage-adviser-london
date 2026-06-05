import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact a Mortgage Adviser in London | Free Initial Advice",
  description:
    "Contact Roger Cooper, independent mortgage adviser in London. Free initial advice. Call 0844 884 9748 or email admin@mortgageinternational.co.uk.",
  alternates: { canonical: "https://www.mortgageadviser.london/contact" },
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.mortgageadviser.london" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://www.mortgageadviser.london/contact" },
  ],
};

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-green-300 text-sm mb-4">
            <Link href="/" className="hover:text-white">Home</Link> › Contact
          </nav>
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">Contact a London Mortgage Adviser</h1>
          <p className="text-green-100 text-xl">
            Free initial advice — no obligation, no hard sell. Just clear, independent mortgage guidance.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact details */}
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-6">Get in Touch</h2>

              <div className="space-y-5 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-800">📞</span>
                  </div>
                  <div>
                    <p className="font-semibold text-green-800">Phone</p>
                    <a href="tel:08448849748" className="text-gray-700 hover:text-green-800 text-lg">0844 884 9748</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-800">✉️</span>
                  </div>
                  <div>
                    <p className="font-semibold text-green-800">Email</p>
                    <a href="mailto:admin@mortgageinternational.co.uk" className="text-gray-700 hover:text-green-800">admin@mortgageinternational.co.uk</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-800">📍</span>
                  </div>
                  <div>
                    <p className="font-semibold text-green-800">Address</p>
                    <address className="not-italic text-gray-700">
                      Mortgage International Ltd<br />
                      3rd Floor, 207 Regent Street<br />
                      London, W1B 3HH
                    </address>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                    <span className="text-green-800">🕐</span>
                  </div>
                  <div>
                    <p className="font-semibold text-green-800">Office Hours</p>
                    <p className="text-gray-700">Monday – Friday: 9am – 7pm</p>
                    <p className="text-gray-700">Saturday: 9am – 5pm</p>
                    <p className="text-gray-500 text-sm">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Google Maps embed */}
              <div className="rounded-xl overflow-hidden border border-gray-200 shadow-sm">
                <iframe
                  title="Mortgage Adviser London — 207 Regent Street"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9887906837!2d-0.14471922346789!3d51.51239637181765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604d4e5ce4b45%3A0x9c4b6b7b7b7b7b7b!2s207%20Regent%20St%2C%20London%20W1B%203HH!5e0!3m2!1sen!2suk!4v1717500000000!5m2!1sen!2suk"
                  width="100%"
                  height="280"
                  style={{ border: 0, display: "block" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div className="bg-white px-4 py-2 flex items-center justify-between text-sm">
                  <span className="text-gray-600">207 Regent Street, London W1B 3HH</span>
                  <a
                    href="https://maps.google.com/?q=207+Regent+Street+London+W1B+3HH"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-700 hover:text-green-800 font-medium text-xs"
                  >
                    Open in Maps →
                  </a>
                </div>
              </div>
              <p className="text-gray-500 text-xs mt-1">Nearest tube: Oxford Circus (Central, Bakerloo, Victoria lines)</p>

              {/* FCA disclaimer */}
              <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-4 text-sm text-amber-800">
                <p className="font-semibold mb-1">Regulatory information</p>
                <p>Mortgage International Ltd is an appointed representative of The Right Mortgage Limited, authorised and regulated by the Financial Conduct Authority (FCA Ref: 478810). Your home may be repossessed if you do not keep up repayments on your mortgage.</p>
              </div>
            </div>

            {/* Contact form */}
            <div>
              <h2 className="text-2xl font-bold text-green-800 mb-6">Send an Enquiry</h2>
              <form action="/api/contact" method="POST" className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                    placeholder="07700 900000"
                  />
                </div>
                <div>
                  <label htmlFor="enquiry_type" className="block text-sm font-medium text-gray-700 mb-1">
                    Enquiry type *
                  </label>
                  <select
                    id="enquiry_type"
                    name="enquiry_type"
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent"
                  >
                    <option value="">Select enquiry type</option>
                    <option value="first-time-buyer">First time buyer advice</option>
                    <option value="remortgage">Remortgage advice</option>
                    <option value="buy-to-let">Buy to let advice</option>
                    <option value="self-employed">Self-employed mortgage advice</option>
                    <option value="expat">Expat/overseas buyer advice</option>
                    <option value="protection">Protection advice</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-700 focus:border-transparent resize-none"
                    placeholder="Tell us about your situation — property value, deposit, income type, any specific questions..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-800 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  Send enquiry
                </button>
                <p className="text-gray-500 text-xs">
                  By submitting this form you agree to us contacting you about your mortgage enquiry. We will not share your details with third parties. Initial advice is free and without obligation.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
