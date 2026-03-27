'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-10">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* ── Top CTA ── */}
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-6xl tracking-[0.1em] uppercase font-serif font-light text-white inline-flex items-center gap-2 flex-wrap justify-center">
            <span>PR</span>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black hover:bg-gray-200 transition-all duration-300 hover:scale-110 group"
              aria-label="Go to contact page"
            >
              <svg
                className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-0.5 transition-transform duration-300"
                fill="none"
                stroke="#000000"
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <span>JECT IN MIND?</span>
          </h2>
          <p className="mt-4 text-white/40 text-sm uppercase tracking-[0.2em]">
            Let&apos;s build something extraordinary together
          </p>
        </div>

        {/* ── Divider ── */}
        <div className="h-px bg-white/10 mb-12" />

        {/* ── Social buttons ── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-14">
          {[
            { label: 'Facebook', href: '#' },
            { label: 'Twitter', href: '#' },
            { label: 'Dribbble', href: '#' },
            { label: 'Instagram', href: '#' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="flex items-center justify-center gap-3 rounded-full bg-black border border-white/15 px-6 py-3 text-white transition-all duration-300 hover:bg-white hover:text-black hover:border-white group"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#000000'
                ;(e.currentTarget.style as any).webkitTextFillColor = '#000000'
                const spans = e.currentTarget.querySelectorAll('span')
                spans.forEach(span => {
                  span.style.color = '#000000'
                  ;(span.style as any).webkitTextFillColor = '#000000'
                })
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#ffffff'
                ;(e.currentTarget.style as any).webkitTextFillColor = '#ffffff'
                const spans = e.currentTarget.querySelectorAll('span')
                spans.forEach(span => {
                  span.style.color = '#ffffff'
                  ;(span.style as any).webkitTextFillColor = '#ffffff'
                })
              }}
            >
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-white text-xs group-hover:bg-black/20 group-hover:text-black transition-colors">
                ●
              </span>
              <span className="uppercase tracking-[0.15em] text-[11px] font-semibold group-hover:text-black transition-colors">{item.label}</span>
            </a>
          ))}
        </div>

        {/* ── Bottom grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-10">

          {/* Brand + email */}
          <div className="space-y-4">
            <h3 className="text-xl text-white font-bold tracking-wider uppercase">Enhanccee</h3>
            <p className="text-white text-sm leading-relaxed">
              We combine strategy, creativity, and technology to help brands grow in today&apos;s digital landscape.
            </p>
            <div className="mt-6">
              <p className="text-white text-sm font-semibold mb-3 uppercase tracking-wider">Stay in the loop</p>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="flex items-stretch rounded-full bg-black border border-white/20 overflow-hidden hover:border-white transition-colors duration-200 focus-within:border-white"
              >
                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="flex-1 px-4 py-2.5 text-sm bg-transparent text-white placeholder-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center px-3 bg-transparent transition-colors"
                  aria-label="Submit email"
                >
                  <span className="h-7 w-7 rounded-full bg-white flex items-center justify-center text-black text-xs hover:bg-gray-200 transition-colors">
                    ↑
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Nav + Office — centered across remaining 2 cols */}
          <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row gap-10 md:gap-20 md:justify-center">

            {/* Main Pages */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-6">Main Pages</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { label: 'Career', href: '#' },
                  { label: 'Clientele', href: '/clientele' },
                  { label: 'Our Services', href: '/services' },
                  { label: 'Why Choose Us?', href: '/why-choose-us' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Contact Us', href: '/contact' },
                ].map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white font-medium hover:text-white/50 transition-colors duration-200 hover:underline underline-offset-4 decoration-1"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Office / Contact */}
            <div>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-6">Office</h4>
              <p className="text-white text-sm mb-6 leading-relaxed">
                Enhanccee Studio<br />Jaipur, India
              </p>
              <h4 className="text-white text-xs font-bold uppercase tracking-[0.25em] mb-4">Contact</h4>
              <div className="space-y-2 text-sm">
                <a
                  href="tel:+917891368868"
                  className="block text-white font-medium hover:text-white/50 transition-colors duration-200 hover:underline underline-offset-4 decoration-1"
                >
                  +91 7891368868
                </a>
                <a
                  href="mailto:info@enhanccee.com"
                  className="block text-white font-medium hover:text-white/50 transition-colors duration-200 hover:underline underline-offset-4 decoration-1"
                >
                  info@enhanccee.com
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white text-xs">
            &copy; {new Date().getFullYear()} Enhanccee. All rights reserved.
          </p>
          <Link
            href="/contact"
            className="text-white text-xs hover:text-white/50 transition-colors duration-200 uppercase tracking-wider hover:underline underline-offset-4"
          >
            Start a Project →
          </Link>
        </div>

      </div>
    </footer>
  )
}
