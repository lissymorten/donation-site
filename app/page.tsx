"use client";

import { useState } from "react";

export default function Home() {
  const [showZelle, setShowZelle] = useState(false);

  return (
    <main className="relative min-h-screen flex items-center justify-center text-white overflow-hidden bg-black">

      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1f2937,black)] animate-pulse" />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Content */}
      <div className="relative w-full max-w-md px-6 py-10 flex flex-col items-center">

        {/* Title image (bigger now) */}
        <div className="flex justify-center mb-4">
          <img
            src="/images/a-o-a_1mb.png"
            alt="Altar of Appreciation"
            className="max-w-[320px] w-full h-auto drop-shadow-[0_0_20px_rgba(34,211,238,0.5)]"
          />
        </div>

        <p className="text-xs text-gray-400 text-center mt-2 mb-8">
          Offerings for creative work, projects, and content
        </p>

        {/* Buttons (no panel container) */}
        <div className="w-full space-y-3">

          <a
            href="https://www.paypal.com/donate/?hosted_button_id=NENNNVVP3MSNY"
            target="_blank"
            className="block text-center py-3 rounded-lg border border-cyan-400/30 bg-cyan-500/10 hover:bg-cyan-500/20 transition"
          >
            💠 PayPal Offering
          </a>

          <button
            onClick={() => setShowZelle(!showZelle)}
            className="w-full py-3 rounded-lg border border-blue-400/30 bg-blue-500/10 hover:bg-blue-500/20 transition"
          >
            {showZelle ? "Zelle: tylerbsimons@gmail.com" : "🔒 Reveal Zelle Sigil"}
          </button>

          <a
            href="https://venmo.com/lissymorten"
            target="_blank"
            className="block text-center py-3 rounded-lg border border-purple-400/30 bg-purple-500/10 hover:bg-purple-500/20 transition"
          >
            ⚡ Venmo Offering
          </a>

          <a
            href="https://cash.app/$lissymorten"
            target="_blank"
            className="block text-center py-3 rounded-lg border border-yellow-400/30 bg-yellow-500/10 hover:bg-yellow-500/20 transition"
          >
            🟡 Cash App Offering
          </a>

        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-gray-300">
          Thank you for your support 🙏
        </div>

      </div>
    </main>
  );
}