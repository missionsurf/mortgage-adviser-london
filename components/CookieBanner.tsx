"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("cookie-consent")) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-green-900 text-white px-4 py-4 shadow-2xl">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-3 justify-between">
        <p className="text-sm text-green-100 leading-relaxed">
          We use essential cookies to keep this site running. No advertising or tracking cookies are used.{" "}
          <Link href="/privacy-policy" className="underline hover:text-white">
            Privacy Policy
          </Link>
        </p>
        <button
          onClick={accept}
          className="flex-shrink-0 bg-gold-500 hover:bg-gold-400 text-green-900 font-semibold px-5 py-2 rounded-md text-sm transition-colors"
        >
          Accept
        </button>
      </div>
    </div>
  );
}
