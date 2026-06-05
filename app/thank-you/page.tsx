"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

function generateRef() {
  const letters = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const digits = "0123456789";
  const part1 = Array.from({ length: 4 }, () => digits[Math.floor(Math.random() * digits.length)]).join("");
  const part2 = Array.from({ length: 2 }, () => letters[Math.floor(Math.random() * letters.length)]).join("");
  return `MA-${part1}-${part2}`;
}

export default function ThankYouPage() {
  const [ref, setRef] = useState("");

  useEffect(() => {
    setRef(generateRef());
  }, []);

  return (
    <>
      {/* noindex via meta tag */}
      <meta name="robots" content="noindex, nofollow" />

      <section className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Checkmark */}
          <div className="w-20 h-20 rounded-full bg-gold-500 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-green-900"
              fill="none"
              stroke="currentColor"
              strokeWidth={3}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-4xl font-extrabold mb-3">Thank you — we&apos;ll be in touch within 2 hours</h1>
          <p className="text-green-100 text-xl mb-6">
            Your mortgage enquiry has been received. Roger Cooper will call you shortly.
          </p>
          {ref && (
            <div className="inline-block bg-white/10 border border-white/20 rounded-xl px-6 py-3">
              <p className="text-green-200 text-sm mb-1">Your reference number</p>
              <p className="text-2xl font-bold tracking-widest text-gold-400">{ref}</p>
              <p className="text-green-300 text-xs mt-1">Please quote this if you contact us</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-green-800 mb-8 text-center">What happens next?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              {
                step: "1",
                title: "We call you",
                desc: "Roger Cooper or a member of our team will call you within 2 hours during office hours (Mon–Fri 9am–7pm, Sat 9am–5pm).",
              },
              {
                step: "2",
                title: "Free advice call",
                desc: "We discuss your situation, answer your questions, and outline your options — no obligation, no fees for initial advice.",
              },
              {
                step: "3",
                title: "Tailored recommendation",
                desc: "If you're happy to proceed, we research the full market and provide a personalised mortgage recommendation.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 rounded-full bg-green-800 text-white flex items-center justify-center font-bold text-lg mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-green-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-50 rounded-2xl p-8 border border-green-100 text-center">
            <p className="text-gray-700 mb-2">
              Need to reach us sooner? Call directly on:
            </p>
            <a
              href="tel:08448849748"
              className="text-2xl font-bold text-green-800 hover:text-green-700 transition-colors"
            >
              0844 884 9748
            </a>
            <p className="text-gray-500 text-sm mt-1">Mon–Fri 9am–7pm · Sat 9am–5pm</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <Link
              href="/blog"
              className="bg-green-800 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg text-center transition-colors"
            >
              Read our mortgage advice blog
            </Link>
            <Link
              href="/areas"
              className="border border-green-800 text-green-800 hover:bg-green-50 font-semibold px-6 py-3 rounded-lg text-center transition-colors"
            >
              View London areas we serve
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
