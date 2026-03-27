'use client'

export default function PartnersSaySection() {
  const quotes = [
    'Enhanccee didn’t just grow our business — they elevated our entire market position. We shifted from competing on price to commanding premium.',
    'Finally, a strategic partner who thinks five moves ahead. They don’t execute tasks — they engineer outcomes.',
    'Working with Enhanccee was our inflection point. They helped us transition from startup to industry authority.',
  ]

  return (
    <section className="py-28 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-14">
          <span className="text-white/40 text-xs font-semibold uppercase tracking-[0.3em] mb-5 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-serif font-light">
            What Our Partners Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {quotes.map((quote, index) => (
            <article
              key={index}
              className="border border-white/10 bg-black p-8 md:p-10 rounded-2xl hover:border-white/25 transition-colors duration-300 h-full min-h-[220px] flex items-start"
            >
              <p className="text-white/75 text-base md:text-lg leading-relaxed text-left">“{quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
