import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-green-900 text-gray-300 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-bold text-xl text-white mb-3">
              <span className="text-gold-400">MA</span> London
            </div>
            <p className="text-sm leading-relaxed mb-3">
              Independent whole-of-market mortgage advice from Roger Cooper, CeMAP Qualified, serving London and the Home Counties.
            </p>
            <p className="text-sm font-medium text-gold-400">0844 884 9748</p>
            <a href="mailto:admin@mortgageinternational.co.uk" className="text-sm hover:text-white transition-colors">
              admin@mortgageinternational.co.uk
            </a>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3">Mortgage Advice</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/first-time-buyer-advice" className="hover:text-white transition-colors">First Time Buyer Advice</Link></li>
              <li><Link href="/remortgage-advice" className="hover:text-white transition-colors">Remortgage Advice</Link></li>
              <li><Link href="/buy-to-let-advice" className="hover:text-white transition-colors">Buy to Let Advice</Link></li>
              <li><Link href="/self-employed-mortgage-advice" className="hover:text-white transition-colors">Self-Employed Advice</Link></li>
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-white font-semibold mb-3">Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition-colors">About Roger Cooper</Link></li>
              <li><Link href="/areas" className="hover:text-white transition-colors">London Areas</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Mortgage Advice Blog</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
              <li>
                <a href="https://www.mortgageinternational.co.uk" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Mortgage International ↗
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Address</h3>
            <address className="not-italic text-sm leading-relaxed">
              Mortgage International Ltd<br />
              3rd Floor, 207 Regent Street<br />
              London, W1B 3HH
            </address>
            <p className="text-sm mt-3">
              <span className="text-gold-400 font-medium">Hours:</span><br />
              Mon–Fri: 9am–7pm<br />
              Sat: 9am–5pm
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-green-700 pt-6 space-y-3 text-xs text-gray-400">
          <p>
            <strong className="text-gray-300">Mortgage International Ltd</strong> is an appointed representative of The Right Mortgage Limited, which is authorised and regulated by the Financial Conduct Authority (FCA Ref: 478810).
          </p>
          <p>
            The guidance and/or information contained within this website is subject to UK regulatory regime and is therefore targeted at consumers based in the UK. Registered in England and Wales.
          </p>
          <p className="font-medium text-gray-300">
            Your home may be repossessed if you do not keep up repayments on your mortgage.
          </p>
          <p>
            &copy; {new Date().getFullYear()} Mortgage International Ltd. All rights reserved. |{" "}
            <Link href="/sitemap.xml" className="hover:text-white">Sitemap</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
