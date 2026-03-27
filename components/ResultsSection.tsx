'use client'

import { useEffect, useRef, useState } from 'react'

export default function ResultsSection() {
  const [visible, setVisible] = useState(false)
  const [mounted, setMounted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!sectionRef.current || !mounted) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        io.disconnect()
      }
    }, { threshold: 0.1 })
    io.observe(sectionRef.current)
    return () => io.disconnect()
  }, [mounted])

  const results = [
    {
      number: '127%',
      label: 'Average Revenue Growth',
      description: '',
      icon: '◆',
    },
    {
      number: '$2.4B',
      label: 'Portfolio Market Value',
      description: '',
      icon: '✦',
    },
    {
      number: '94%',
      label: 'Client Retention Rate',
      description: '',
      icon: '●',
    },
    {
      number: '12+ Years',
      label: 'Of Strategic Excellence',
      description: '',
      icon: '▲',
    },
  ]

  return (
    <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />

        <div className="container mx-auto px-6 md:px-12 lg:px-16 relative z-10">
          <div className={`text-center mb-20 ${visible ? 'result-header-visible' : 'result-header-hidden'}`}>
            <span className="text-white/40 text-xs font-semibold uppercase tracking-[0.3em] mb-6 block">
              Results
            </span>
            <h2 className="text-5xl md:text-6xl lg:text-7xl text-white font-serif font-light mb-4">
              Numbers That Speak Louder Than Words
            </h2>
            <p className="text-white/55 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Performance is not a promise.
              <br />
              It is a pattern.
            </p>
            <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/20 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {results.map((result, index) => (
              <div
                key={index}
                className={`result-card bg-black border border-white/10 p-12 text-center transition-all duration-500 hover:border-white/30 hover:shadow-2xl group relative ${visible ? 'result-card-visible' : 'result-card-hidden'}`}
                style={{
                  transitionDelay: visible ? `${index * 150}ms` : '0ms',
                  transition: `opacity 0.8s ease ${index * 150}ms, transform 0.8s ease ${index * 150}ms, border-color 0.4s, box-shadow 0.4s`
                }}
              >
                {/* Decorative icon */}
                <div className="result-icon">{result.icon}</div>
                
                {/* Number with gradient effect */}
                <div className="result-number text-5xl md:text-6xl font-bold mb-5 group-hover:scale-105 transition-transform duration-500 relative inline-block">
                  {result.number}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 blur-xl group-hover:blur-2xl transition-all duration-500" />
                </div>
                
                {/* Label */}
                <h3 className="text-sm md:text-base font-semibold text-white uppercase tracking-[0.12em] mb-3 group-hover:text-white transition-colors">
                  {result.label}
                </h3>
                
                {/* Decorative line */}
                <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto mb-4 group-hover:w-16 transition-all duration-500" />
                
                {/* Description */}
                {result.description ? (
                  <p className="text-white/60 text-sm md:text-base leading-relaxed max-w-xs mx-auto group-hover:text-white/70 transition-colors">
                    {result.description}
                  </p>
                ) : null}

                {/* Hover glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/0 via-black/0 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>

          {/* Bottom decorative element */}
          <div className="mt-20 text-center">
            <div className={`inline-flex items-center gap-4 ${visible ? 'result-footer-visible' : 'result-footer-hidden'}`} style={{
              transitionDelay: visible ? `${results.length * 150 + 300}ms` : '0ms'
            }}>
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-white/20" />
              <span className="text-white/40 text-xs uppercase tracking-widest">Results are not milestones. They are standards.</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-white/20" />
            </div>
          </div>
        </div>
      </section>
  )
}
