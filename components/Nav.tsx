"use client";

import Link from "next/link";
import { useState } from "react";

const services = [
  { href: "/first-time-buyer-advice", label: "First Time Buyers" },
  { href: "/remortgage-advice", label: "Remortgage" },
  { href: "/buy-to-let-advice", label: "Buy to Let" },
  { href: "/self-employed-mortgage-advice", label: "Self-Employed" },
  { href: "/new-build-mortgage-advice", label: "New Build" },
  { href: "/expat-mortgage-advice", label: "Expat Mortgages" },
  { href: "/protection-advice", label: "Protection" },
  { href: "/agreement-in-principle", label: "Agreement in Principle" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white shadow-lg relative z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <img src="/logo.png" alt="Mortgage Adviser London" className="h-10 w-auto bg-white rounded-md px-1.5 py-0.5" />
          </Link>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-5 text-sm font-medium">
            {/* Services dropdown */}
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button className="hover:text-gold-400 transition-colors flex items-center gap-1 py-5">
                Services
                <svg className="w-3 h-3 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-56 bg-white text-gray-800 rounded-xl shadow-xl py-2 border border-gray-100">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-4 py-2 text-sm hover:bg-green-50 hover:text-green-800 transition-colors"
                      onClick={() => setServicesOpen(false)}
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link href="/areas" className="hover:text-gold-400 transition-colors">Areas</Link>
            <Link href="/reviews" className="hover:text-gold-400 transition-colors">Reviews</Link>
            <Link href="/blog" className="hover:text-gold-400 transition-colors">Blog</Link>
            <Link href="/about" className="hover:text-gold-400 transition-colors">About</Link>
            <a href="tel:08448849748" className="text-gold-400 hover:text-gold-300 font-semibold transition-colors">
              0844 884 9748
            </a>
            <Link
              href="/contact"
              className="bg-gold-500 hover:bg-gold-600 text-green-900 font-semibold px-4 py-2 rounded-md transition-colors"
            >
              Free Advice
            </Link>
          </div>
          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-green-700"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-white mb-1"></span>
            <span className="block w-5 h-0.5 bg-white mb-1"></span>
            <span className="block w-5 h-0.5 bg-white"></span>
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-green-900 px-4 pb-4 space-y-1 text-sm font-medium">
          <Link href="/" className="block py-2 hover:text-gold-400" onClick={() => setOpen(false)}>Home</Link>
          <div className="py-1">
            <p className="text-green-400 text-xs uppercase tracking-wide mb-1 mt-2">Services</p>
            {services.map((s) => (
              <Link key={s.href} href={s.href} className="block py-1.5 pl-2 hover:text-gold-400" onClick={() => setOpen(false)}>
                {s.label}
              </Link>
            ))}
          </div>
          <Link href="/areas" className="block py-2 hover:text-gold-400" onClick={() => setOpen(false)}>Areas</Link>
          <Link href="/reviews" className="block py-2 hover:text-gold-400" onClick={() => setOpen(false)}>Reviews</Link>
          <Link href="/blog" className="block py-2 hover:text-gold-400" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/about" className="block py-2 hover:text-gold-400" onClick={() => setOpen(false)}>About</Link>
          <Link href="/contact" className="block py-2 hover:text-gold-400" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/contact" className="block bg-gold-500 text-green-900 font-semibold px-4 py-2 rounded-md text-center mt-2" onClick={() => setOpen(false)}>Free Advice</Link>
        </div>
      )}
    </nav>
  );
}
