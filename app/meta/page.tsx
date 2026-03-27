'use client'

import { useEffect, useRef, useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MetaPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>([])
  const frameworkRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setVisibleSteps([true, false, false, false, false])
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        for (let i = 1; i < 5; i++) {
          setTimeout(() => {
            setVisibleSteps((prev) => { const n = [...prev]; n[i] = true; return n })
          }, i * 300)
        }
        if (frameworkRef.current) observer.unobserve(frameworkRef.current)
      }
    }, { threshold: 0.1 })
    if (frameworkRef.current) observer.observe(frameworkRef.current)
    return () => { if (frameworkRef.current) observer.unobserve(frameworkRef.current) }
  }, [])

  const toggleFAQ = (i: number) => setOpenFAQ(openFAQ === i ? null : i)

  const faqs = [
    { question: 'How quickly can we expect to see results from Meta advertising?', answer: 'Meta advertising typically shows initial results within 1-2 weeks as campaigns optimize. Significant performance improvements and scaling usually occur within 4-8 weeks, depending on your budget, audience targeting, and campaign objectives.' },
    { question: 'What makes Enhanccee different from other Meta advertising agencies?', answer: 'We don\'t just run ads — we engineer campaigns for business impact. Our approach combines creative excellence with data-driven optimization, focusing on conversions and revenue rather than just impressions.' },
    { question: 'Do you work with luxury and enterprise brands?', answer: 'Yes, we specialize in working with luxury and enterprise brands. Our team has extensive experience managing high-value campaigns for premium brands and large-scale organizations.' },
    { question: 'What regions do you serve?', answer: 'We deliver Meta advertising services across India, UAE, Australia, and the US. Our team supports both local and global campaigns.' },
    { question: 'Is your Meta advertising approach future-ready?', answer: 'Absolutely. We stay ahead of Meta\'s evolving platform with advanced targeting, creative optimization, and AI-driven campaign management.' },
  ]

  const frameworkSteps = [
    { number: '01', title: 'Audit', description: 'Comprehensive analysis of current campaigns and competitive landscape' },
    { number: '02', title: 'Strategy', description: 'Data-driven campaign architecture aligned with business objectives' },
    { number: '03', title: 'Execution', description: 'Precision campaign launch across Facebook, Instagram, and Meta platforms' },
    { number: '04', title: 'Optimization', description: 'Continuous A/B testing and performance refinement for maximum ROI' },
    { number: '05', title: 'Scale', description: 'Sustained growth and expanded reach across target audiences' },
  ]

  const deliverables = [
    { title: 'CAMPAIGN STRATEGY & ARCHITECTURE', description: 'Data-driven campaign structure, audience segmentation, budget allocation, and conversion optimization — engineered for performance.' },
    { title: 'CREATIVE OPTIMIZATION', description: 'A/B testing, creative refinement, and visual storytelling that builds trust and guides users toward conversion — not just engagement.' },
    { title: 'AUDIENCE TARGETING & RETARGETING', description: 'Advanced audience segmentation aligned with business intent, customer behavior, and revenue potential.' },
    { title: 'PERFORMANCE ANALYTICS', description: 'Real-time tracking, conversion attribution, and ROI analysis to optimize campaigns and maximize business impact.' },
    { title: 'BUDGET OPTIMIZATION', description: 'Strategic budget allocation and bid management that maximizes ROI while scaling profitable campaigns.' },
    { title: 'CONVERSION TRACKING & ATTRIBUTION', description: 'Advanced tracking setup and multi-touch attribution to understand the full customer journey and optimize for conversions.' },
  ]

  return (
    <div className="min-h-screen">
      <Header />

      {/* ── SECTION 1: HERO — BLACK ── */}
      <section className="relative px-6 md:px-12 lg:px-16 py-20 md:py-36 flex flex-col items-center justify-center min-h-[85vh] bg-black overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80&fit=crop"
            alt="Digital marketing analytics"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.3) saturate(0.7)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-white/40 text-xs font-semibold uppercase tracking-[0.3em] mb-6 block">
            Meta Advertising
          </span>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light mb-6 leading-tight text-white">
            Traffic is Vanity.<br />
            <em className="not-italic">Conversions are Power.</em>
          </h1>
          <div className="h-px w-16 bg-white/20 mx-auto mb-8" />
          <p className="text-lg md:text-xl text-white/60 max-w-3xl mx-auto mb-12">
            We engineer high-performance Meta campaigns that drive measurable business results, not just clicks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-black px-10 py-4 font-semibold text-sm uppercase tracking-[0.2em] hover:bg-gray-100 transition-all duration-300 hover:scale-105" style={{ color: '#000000' }}>
              Get Your Strategy
            </button>
            <button className="border border-white/30 text-white px-10 py-4 font-semibold text-sm uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all duration-300 hover:scale-105">
              View Case Studies
            </button>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: ENHANCCEE STANDARD — WHITE ── */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-black/40 text-xs uppercase tracking-[0.3em] mb-4 block">Our Standard</span>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-black mb-4 leading-tight">
              The Enhanccee<br />Standard
            </h2>
            <div className="h-px w-24 bg-black mb-8" />
            <div className="space-y-5 text-black/70 text-lg leading-relaxed">
              <p>The difference between clicks and conversions is <span className="text-black font-semibold">strategy</span>.</p>
              <p>We don't just run ads; we engineer campaigns for <span className="text-black font-semibold">business impact</span>.</p>
              <p>At Enhanccee, Meta advertising isn't a service — it's a <span className="text-black font-semibold">signature experience</span>.</p>
            </div>
          </div>
          <div className="relative h-96 lg:h-[480px] order-1 lg:order-2 overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&fit=crop"
              alt="Marketing strategy and analytics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* ── SECTION 3: WHAT WE DELIVER — BLACK ── */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-white/40 text-xs uppercase tracking-[0.3em] mb-4 block">What We Deliver</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white">
              Focused. Strategic. Built for Scale.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {deliverables.map((item, i) => (
              <div key={i} className="bg-black p-8 group hover:bg-white/5 transition-all duration-300">
                <div className="text-white/20 text-4xl font-light mb-4">{String(i+1).padStart(2,'0')}</div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 leading-tight">{item.title}</h3>
                <div className="h-px w-8 bg-white/20 mb-4 group-hover:w-16 transition-all duration-300" />
                <p className="text-white/60 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 4: STRATEGIC FRAMEWORK — WHITE ── */}
      <section ref={frameworkRef} className="px-6 md:px-12 lg:px-16 py-24 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-black/40 text-xs uppercase tracking-[0.3em] mb-4 block">Strategic Framework</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-black">The Path to Dominance</h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-black/10 hidden md:block" />
            <div className="space-y-12 md:space-y-16">
              {frameworkSteps.map((step, i) => {
                const vis = visibleSteps[i] ?? false
                return (
                  <div key={i} className={`relative flex items-center ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: vis ? `${i*300}ms` : '0ms' }}>
                    <div className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-black rounded-full z-10 hidden md:block" />
                    <div className={`flex-1 bg-white border border-black/10 p-8 ${i % 2 === 0 ? 'md:mr-auto md:pr-16' : 'md:ml-auto md:pl-16'} max-w-md hover:border-black/30 hover:shadow-lg transition-all duration-300`}>
                      <div className="text-5xl font-light text-black/10 mb-4">{step.number}</div>
                      <h3 className="text-3xl font-semibold text-black mb-3">{step.title}</h3>
                      <p className="text-black/60 text-lg leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: WHY BRANDS CHOOSE — BLACK ── */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-black relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1920&q=80&fit=crop"
            alt="Social media marketing"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.25) saturate(0.6)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/80 to-black/90" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6">Why Brands Choose Enhanccee</h2>
            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              The difference between clicks and conversions is strategy. Brands partner with Enhanccee because they want measurable ROI, scalable growth, and campaigns that drive business impact.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 mb-16">
            {[{ value: '3×', label: 'ROI Increase' }, { value: '85%', label: 'Conversion Rate' }, { value: '10+', label: 'Years Experience' }].map((s, i) => (
              <div key={i} className="bg-black/60 backdrop-blur-sm p-12 text-center border border-white/5">
                <div className="text-6xl md:text-7xl font-bold text-white mb-4">{s.value}</div>
                <div className="text-white/50 text-xs font-semibold uppercase tracking-[0.25em]">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="border border-white/15 p-12 text-center max-w-4xl mx-auto bg-black/40 backdrop-blur-sm">
            <p className="text-white/80 text-xl md:text-2xl italic mb-4">&quot;We don't optimize for impressions alone&quot;</p>
            <p className="text-white text-xl md:text-2xl font-semibold">We optimize for business impact</p>
          </div>
        </div>
      </section>

      {/* ── SECTION 6: WHAT MAKES US DIFFERENT — WHITE ── */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-black mb-2">What Makes Us</h2>
            <h2 className="text-5xl md:text-6xl font-serif font-light text-black/40 mb-8">Different</h2>
            <div className="space-y-6">
              {[
                { title: 'Strategic Intelligence', description: 'Meta advertising veterans with 10+ years driving enterprise and luxury brand growth' },
                { title: 'Creative Excellence', description: 'Data-driven creative optimization across every campaign touchpoint' },
                { title: 'Future-Ready', description: 'Advanced targeting and AI-driven optimization ensuring performance in evolving Meta ecosystem' },
                { title: 'ROI-Focused', description: 'Transparent reporting on conversions, revenue impact, and campaign performance' },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-1.5 h-1.5 bg-black mt-3 flex-shrink-0" />
                  <div>
                    <h3 className="text-black font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-black/60 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative overflow-hidden rounded-lg">
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80&fit=crop"
              alt="Digital marketing team collaboration"
              className="w-full h-full object-cover"
              style={{ minHeight: '500px' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-8">
              <span className="text-white/60 text-xs uppercase tracking-[0.3em] mb-4 block">Recognition</span>
              <h3 className="text-3xl md:text-4xl font-semibold text-white mb-6">Recognised among emerging best Meta advertising agencies</h3>
              <p className="text-white/80 mb-8 leading-relaxed">Delivering Meta advertising services across India, UAE, Australia, and the US — supporting both local and global growth.</p>
              <button className="bg-white text-black px-8 py-4 font-semibold text-sm uppercase tracking-[0.2em] hover:bg-gray-100 transition-all duration-300 hover:scale-105 w-fit" style={{ color: '#000000' }}>
                Start Your Growth
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 7: FAQ — BLACK ── */}
      <section className="px-6 md:px-12 lg:px-16 py-24 bg-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-px bg-white/10">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-black">
                <button onClick={() => toggleFAQ(i)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors duration-200">
                  <span className="text-white text-lg pr-8 font-medium">{faq.question}</span>
                  <svg className={`w-4 h-4 text-white/50 flex-shrink-0 transition-transform duration-300 ${openFAQ === i ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openFAQ === i ? 'max-h-60' : 'max-h-0'}`}>
                  <div className="px-6 pb-5 pt-2 border-t border-white/10">
                    <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTION 8: CTA — WHITE ── */}
      <section className="px-6 md:px-12 lg:px-16 py-24 md:py-36 bg-white relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1920&q=80&fit=crop"
            alt="Business growth and strategy"
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.4) saturate(0.5)' }}
          />
          <div className="absolute inset-0 bg-white/85" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="text-black/40 text-sm uppercase tracking-[0.3em] mb-6 block">Ready to Scale?</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-black mb-6 leading-tight">
            Let&apos;s Engineer Your<br /><em className="not-italic">Meta Strategy</em>
          </h2>
          <div className="h-px w-16 bg-black/20 mx-auto mb-8" />
          <p className="text-lg text-black/60 max-w-2xl mx-auto mb-12">
            Partner with Enhanccee for Meta advertising that drives conversions, trust, and scalable business growth.
          </p>
          <button className="bg-black text-white px-12 py-5 font-semibold text-sm uppercase tracking-[0.2em] hover:bg-gray-800 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5">
            Book Your Strategy Session
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

