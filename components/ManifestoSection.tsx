export default function ManifestoSection() {
  return (
    <section className="py-16 bg-black border-b border-white/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto">

          <div className="relative">
            {/* Opening quote */}
            <span
              className="text-white/20 font-serif select-none block leading-none mb-0"
              style={{ fontSize: '6rem', lineHeight: 1 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            {/* Main heading */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight mb-0 px-8">
              Enhanccee builds brands with presence, precision, and authority.
              Through strategy, design, and performance, we help ambitious brands{' '}
              define their legacy &mdash; not chase trends.
            </h2>

            {/* Closing quote */}
            <span
              className="text-white/20 font-serif select-none block leading-none text-right mt-0"
              style={{ fontSize: '6rem', lineHeight: 1 }}
              aria-hidden="true"
            >
              &rdquo;
            </span>
          </div>

            {/* Divider */}
          <div className="h-px w-20 mb-8 lg:ml-auto" style={{ backgroundColor: '#C9A84C' }} />

          {/* Subtext */}
          <p className="text-white/50 text-base md:text-lg font-light tracking-wide lg:text-right">
          This is our commitment to every partner who walks through our doors.
          </p>

        </div>
      </div>
    </section>
  )
}