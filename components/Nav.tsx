"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-green-800 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <img src="/logo.png" alt="Mortgage Adviser London" className="h-10 w-auto bg-white rounded-md px-1.5 py-0.5" />
          </Link>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-gold-400 transition-colors">Home</Link>
            <Link href="/#services" className="hover:text-gold-400 transition-colors">Services</Link>
            <Link href="/areas" className="hover:text-gold-400 transition-colors">Areas</Link>
            <Link href="/about" className="hover:text-gold-400 transition-colors">About</Link>
            <Link href="/blog" className="hover:text-gold-400 transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-gold-400 transition-colors">Contact</Link>
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
        <div className="md:hidden bg-green-900 px-4 pb-4 space-y-2 text-sm font-medium">
          <Link href="/" className="block py-2 hover:text-gold-400" onClick={() => setOpen(false)}>Home</Link>
          <Link href="/#services" className="block py-2 hover:text-gold-400" onClick={() => setOpen(false)}>Services</Link>
          <Link href="/areas" className="block py-2 hover:text-gold-400" onClick={() => setOpen(false)}>Areas</Link>
          <Link href="/about" className="block py-2 hover:text-gold-400" onClick={() => setOpen(false)}>About</Link>
          <Link href="/blog" className="block py-2 hover:text-gold-400" onClick={() => setOpen(false)}>Blog</Link>
          <Link href="/contact" className="block py-2 hover:text-gold-400" onClick={() => setOpen(false)}>Contact</Link>
          <Link href="/contact" className="block bg-gold-500 text-green-900 font-semibold px-4 py-2 rounded-md text-center mt-2" onClick={() => setOpen(false)}>Free Advice</Link>
        </div>
      )}
    </nav>
  );
}
