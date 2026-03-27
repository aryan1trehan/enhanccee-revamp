'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const WORDS = ['Inspire', 'Flow', 'Move']

export default function StatementSection() {
  const [index, setIndex] = useState(0)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      // fade out
      setVisible(false)
      setTimeout(() => {
        // swap word then fade in
        setIndex(i => (i + 1) % WORDS.length)
        setVisible(true)
      }, 400) // 400ms fade out, then swap
    }, 2200) // change every 2.2s

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen bg-black flex flex-col justify-between px-6 md:px-12 lg:px-16 py-16">

      {/* Main text */}
      <div className="flex-1 flex flex-col justify-center">

        {/* Row 1 — left + right */}
        <div className="flex items-start justify-between">
          <span className="text-white font-sans font-semibold leading-none"
            style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}>
            Design
          </span>
          <span className="text-white font-sans font-semibold leading-none"
            style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}>
            That
          </span>
        </div>

        {/* Row 2 — center animated word */}
        <div className="flex justify-center my-2">
          <span
            className="text-white font-sans font-semibold leading-none transition-all duration-600"
            style={{
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0px)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease, transform 0.6s ease',
            }}
          >
            {WORDS[index]}
          </span>
        </div>

        {/* Row 3 — left + right CTA */}
        <div className="flex items-end justify-between">
          <span className="text-white font-sans font-semibold leading-none"
            style={{ fontSize: 'clamp(4rem, 12vw, 10rem)' }}>
            You
          </span>
          <Link
            href="/contact"
            className="self-center border border-white text-white rounded-full px-8 py-3 text-sm font-light tracking-wide hover:bg-white hover:text-black transition-all duration-300 whitespace-nowrap"
          >
            Work With Us
          </Link>
        </div>

      </div>

      {/* Bottom contact bar */}
      <div className="flex gap-12 border-t border-white/10 pt-6">
        <div>
          <a href="tel:+11234567890"
            className="text-white/50 text-sm tracking-wide hover:text-white transition-colors duration-200">
            +1 (123) 456-7890
          </a>
        </div>
        <div>
          <a href="mailto:info@enhanccee.com"
            className="text-white/50 text-sm tracking-wide hover:text-white transition-colors duration-200">
            info@enhanccee.com
          </a>
        </div>
      </div>

    </section>
  )
}

// ---

// **How the animation works:**
// ```
// every 2200ms:
//   1. set visible = false  → word fades out + slides down (400ms)
//   2. after 400ms: swap to next word, set visible = true → fades in + slides up