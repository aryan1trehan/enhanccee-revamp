'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/* ─── SCROLL REVEAL ─── */
function FadeIn({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect() } }, { threshold: 0.08 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(36px)', transition: `opacity .9s cubic-bezier(.16,1,.3,1) ${delay}ms, transform .9s cubic-bezier(.16,1,.3,1) ${delay}ms`, ...style }}>
      {children}
    </div>
  )
}

/* ─── DATA ─── */
const services = [
  {
    num: '01',
    chapter: 'Chapter I — Visibility',
    title: 'Search',
    titleEm: 'Architecture',
    description: 'Visibility is permanent infrastructure. We engineer organic authority that compounds — systematic coverage of every high-intent query, technical foundations that perform, and content that positions your brand as the definitive voice in every market you choose to own.',
    disciplines: ['Technical SEO', 'Content Strategy', 'Link Authority', 'Keyword Intelligence', 'Core Web Vitals', 'Analytics'],
    link: '/seo',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&q=85&fit=crop',
    bg: '#000000',   // black section
    imageSide: 'right' as const,
  },
  {
    num: '02',
    chapter: 'Chapter II — Acceleration',
    title: 'Performance',
    titleEm: 'Marketing',
    description: 'Capital deployed with surgical precision. Every campaign is a signal-driven system, continuously recalibrated against behavioural data — maximising return on every unit of media spend across every channel we activate.',
    disciplines: ['Google Ads', 'Meta Ads', 'Funnel Architecture', 'Creative Strategy', 'ROAS Optimisation', 'Attribution'],
    link: '/meta',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=85&fit=crop',
    bg: '#000000',   // black section
    imageSide: 'left' as const,
  },
  {
    num: '03',
    chapter: 'Chapter III — Infrastructure',
    title: 'Web Design',
    titleEm: '& Development',
    description: 'Digital architecture built to perform and persuade. We construct websites where every structural decision serves conversion — technical excellence meeting precise aesthetic vision, assembled with engineering discipline and precision.',
    disciplines: ['Web Design', 'Next.js Engineering', 'CMS Architecture', 'E-Commerce', 'Core Web Vitals', 'Conversion Rate'],
    link: '/web-dev',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=85&fit=crop',
    bg: '#000000',
    imageSide: 'right' as const,
  },
  {
    num: '04',
    chapter: 'Chapter IV — Experience',
    title: 'UI / UX',
    titleEm: 'Design',
    description: 'Interfaces engineered around the precise geometry of human behaviour. We design experiences that feel inevitable — every transition, every gesture, every micro-moment considered against the psychology of the person using it.',
    disciplines: ['UX Research', 'Interface Design', 'Prototyping', 'Motion Design', 'Design Systems', 'Usability Testing'],
    link: '/ui-ux',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=1200&q=85&fit=crop',
    bg: '#000000',
    imageSide: 'left' as const,
  },
  {
    num: '05',
    chapter: 'Chapter V — Identity',
    title: 'Branding',
    titleEm: '& Identity',
    description: 'Before anything is built, the signal must be precise. We architect brand identities that carry cultural weight — visual languages that outlast trends, narrative systems that hold meaning, and positioning that separates you by design.',
    disciplines: ['Brand Strategy', 'Visual Identity', 'Logotype', 'Brand Voice', 'Positioning', 'Guidelines'],
    link: '/branding',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=85&fit=crop',
    bg: '#000000',
    imageSide: 'right' as const,
  },
  {
    num: '06',
    chapter: 'Chapter VI — Scale',
    title: 'SaaS Growth',
    titleEm: 'Systems',
    description: 'Growth infrastructure designed for software companies. We engineer the full SaaS funnel — from initial acquisition through activation, retention, and expansion — using compounding system logic, not one-off campaigns that spike and fade.',
    disciplines: ['PLG Strategy', 'Onboarding', 'Churn Reduction', 'MRR Growth', 'Product Marketing', 'NRR Optimisation'],
    link: '/saas',
    image: 'https://images.unsplash.com/photo-1639322537228-f710d846310a?w=1200&q=85&fit=crop',
    bg: '#000000',
    imageSide: 'left' as const,
  },
]

export default function ServicesPage() {
  return (
    <>
      <style>{`
        @keyframes svc-fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes svc-scrollPulse { 0%,100%{opacity:.4} 50%{opacity:1} }
        .svc-tag-black { font-size:.65rem; padding:.35rem .9rem; border:1px solid rgba(255,255,255,.15); color:rgba(255,255,255,.5); display:inline-block; transition:all .3s; line-height:1.5; }
        .svc-tag-black:hover { border-color:rgba(255,255,255,.5); color:#ffffff; }
        .svc-tag-white { font-size:.65rem; padding:.35rem .9rem; border:1px solid rgba(255,255,255,.15); color:rgba(255,255,255,.5); display:inline-block; transition:all .3s; line-height:1.5; }
        .svc-tag-white:hover { border-color:rgba(255,255,255,.5); color:#ffffff; }
        .svc-link-black { display:inline-flex; align-items:center; gap:.8rem; font-size:.72rem; letter-spacing:.22em; text-transform:uppercase; color:rgba(255,255,255,.5); text-decoration:none; transition:all .35s; border-bottom:1px solid rgba(255,255,255,.15); padding-bottom:.3rem; line-height:1.5; }
        .svc-link-black:hover { color:#ffffff; border-color:#ffffff; gap:1.4rem; }
        .svc-link-white { display:inline-flex; align-items:center; gap:.8rem; font-size:.72rem; letter-spacing:.22em; text-transform:uppercase; color:rgba(255,255,255,.5); text-decoration:none; transition:all .35s; border-bottom:1px solid rgba(255,255,255,.15); padding-bottom:.3rem; line-height:1.5; }
        .svc-link-white:hover { color:#ffffff; border-color:#ffffff; gap:1.4rem; }
        .svc-img-wrap { overflow:hidden; width:100%; }
        .svc-img-wrap img { width:100%; height:100%; object-fit:cover; display:block; transition:transform 8s ease; }
        .svc-img-wrap:hover img { transform:scale(1.04); }
        @media (max-width: 768px) {
          .svc-img-wrap { min-height:400px !important; order:1 !important; }
          .svc-content-wrap { order:2 !important; min-height:auto !important; }
        }
      `}</style>

      <Header />

      <main style={{ backgroundColor:'#000000' }}>

        {/* ══════════════ HERO ══════════════ */}
        <section style={{ minHeight:'100vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', textAlign:'center', padding:'12vh 8vw', background:'#000000', position:'relative', overflow:'hidden' }}>
          {/* Subtle grain */}
          <div style={{ position:'absolute', inset:0, opacity:.025, pointerEvents:'none', backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}/>

          <div style={{ position:'relative', zIndex:2, maxWidth:1280, width:'100%', margin:'0 auto' }}>
            <p style={{ fontFamily:'var(--font-montserrat)', fontSize:'.7rem', letterSpacing:'.4em', textTransform:'uppercase', color:'rgba(255,255,255,.4)', marginBottom:'2.5rem', opacity:0, animation:'svc-fadeUp 1s ease .3s forwards', lineHeight:1.5 }}>
              Enhanccee — Six Disciplines
            </p>
            <h1 style={{ fontFamily:'var(--font-cormorant)', fontWeight:300, fontSize:'clamp(3.5rem,9vw,9rem)', lineHeight:.95, color:'#ffffff', marginBottom:'2.5rem', opacity:0, animation:'svc-fadeUp 1.1s ease .55s forwards', textAlign:'center' }}>
              One<br /><em style={{ fontStyle:'italic', color:'rgba(255,255,255,.55)' }}>Unified</em><br />Intelligence.
            </h1>
            <p style={{ fontFamily:'var(--font-montserrat)', fontSize:'clamp(.9rem,1.4vw,1.05rem)', lineHeight:1.9, color:'rgba(255,255,255,.5)', maxWidth:560, margin:'0 auto 4rem', fontWeight:200, opacity:0, animation:'svc-fadeUp 1.1s ease .8s forwards', textAlign:'center' }}>
              Enhanccee does not offer a menu of services. It offers a single, interconnected system — engineered to build, scale, and elevate brands that last.
            </p>
            {/* Chapter navigation */}
            <div style={{ display:'flex', flexWrap:'wrap', gap:'1rem', justifyContent:'center', alignItems:'center', opacity:0, animation:'svc-fadeUp 1s ease 1.1s forwards', maxWidth:'100%' }}>
              {services.map((s) => (
                <Link key={s.num} href={`#s${s.num}`} style={{ fontFamily:'var(--font-montserrat)', fontSize:'.6rem', letterSpacing:'.2em', textTransform:'uppercase', color:'rgba(255,255,255,.3)', textDecoration:'none', border:'1px solid rgba(255,255,255,.1)', padding:'.5rem 1.2rem', transition:'all .3s', lineHeight:1.5, display:'inline-block' }} onMouseEnter={e=>(e.currentTarget.style.color='#fff',e.currentTarget.style.borderColor='rgba(255,255,255,.4)')} onMouseLeave={e=>(e.currentTarget.style.color='rgba(255,255,255,.3)',e.currentTarget.style.borderColor='rgba(255,255,255,.1)')}>
                  {s.num} {s.title}
                </Link>
              ))}
            </div>
          </div>

          {/* scroll hint */}
          <div style={{ position:'absolute', bottom:'2.5rem', left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:'.5rem', opacity:0, animation:'svc-fadeUp 1s ease 1.4s forwards', zIndex:2 }}>
            <span style={{ fontFamily:'var(--font-montserrat)', fontSize:'.55rem', letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(255,255,255,.2)', lineHeight:1.5 }}>Scroll</span>
            <div style={{ width:1, height:48, background:'linear-gradient(to bottom, rgba(255,255,255,.3), transparent)', animation:'svc-scrollPulse 2s ease-in-out infinite' }}/>
          </div>
        </section>

        {/* ══════════════ SERVICE SECTIONS ══════════════ */}
        {services.map((svc, idx) => {
          const isBlack = svc.bg === '#000000'
          const textColor = isBlack ? '#ffffff' : '#000000'
          const subColor = isBlack ? 'rgba(255,255,255,.55)' : 'rgba(0,0,0,.6)'
          const mutedColor = isBlack ? 'rgba(255,255,255,.35)' : 'rgba(0,0,0,.35)'
          const borderColor = isBlack ? 'rgba(255,255,255,.1)' : 'rgba(0,0,0,.1)'
          const numColor = isBlack ? 'rgba(255,255,255,.15)' : 'rgba(0,0,0,.15)'
          const imgFilter = isBlack ? 'brightness(.5) saturate(.6)' : 'brightness(.75) saturate(.7) contrast(1.05)'
          const tagClass = isBlack ? 'svc-tag-black' : 'svc-tag-white'
          const linkClass = isBlack ? 'svc-link-black' : 'svc-link-white'
          const isRight = svc.imageSide === 'right'

          return (
            <section key={svc.num} id={`s${svc.num}`} style={{ background: svc.bg, position:'relative', width:'100%', overflow:'hidden' }}>

              {/* Top rule */}
              <div style={{ height:1, background: isBlack ? 'linear-gradient(to right, transparent, rgba(255,255,255,.15), transparent)' : 'linear-gradient(to right, transparent, rgba(0,0,0,.12), transparent)', width:'100%' }}/>

              {/* Main grid: image + content */}
              <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', minHeight:'85vh', alignItems:'stretch' }}>

                {/* Content side */}
                {!isRight && (
                  <div style={{ padding:'clamp(4rem,8vw,8vw) clamp(3rem,6vw,6vw)', display:'flex', flexDirection:'column', justifyContent:'center', order:1, position:'relative', maxWidth:'100%', minHeight:'85vh', alignItems:'flex-start' }}>
                    <ContentBlock svc={svc} textColor={textColor} subColor={subColor} mutedColor={mutedColor} borderColor={borderColor} numColor={numColor} tagClass={tagClass} linkClass={linkClass}/>
                  </div>
                )}

                {/* Image side */}
                <div className="svc-img-wrap" style={{ position:'relative', minHeight:'85vh', order: isRight ? 1 : 2, display:'flex', alignItems:'stretch', width:'100%' }}>
                  <img src={svc.image} alt={`${svc.title} ${svc.titleEm}`} style={{ filter: imgFilter, width:'100%', height:'100%', objectFit:'cover', display:'block' }}/>
                  {/* Overlay gradient */}
                  <div style={{ position:'absolute', inset:0, background: isBlack
                    ? (isRight ? 'linear-gradient(to left, transparent 60%, rgba(0,0,0,.7) 100%)' : 'linear-gradient(to right, transparent 60%, rgba(0,0,0,.7) 100%)')
                    : (isRight ? 'linear-gradient(to left, transparent 60%, rgba(255,255,255,.7) 100%)' : 'linear-gradient(to right, transparent 60%, rgba(255,255,255,.7) 100%)')
                  }}/>
                  {/* Chapter label on image */}
                  <div style={{ position:'absolute', bottom:'2rem', left:'2rem', fontFamily:'var(--font-montserrat)', fontSize:'.58rem', letterSpacing:'.3em', textTransform:'uppercase', color: isBlack ? 'rgba(255,255,255,.35)' : 'rgba(255,255,255,.6)', zIndex:2, lineHeight:1.5 }}>{svc.chapter}</div>
                </div>

                {isRight && (
                  <div style={{ padding:'clamp(4rem,8vw,8vw) clamp(3rem,6vw,6vw)', display:'flex', flexDirection:'column', justifyContent:'center', order:2, position:'relative', maxWidth:'100%', minHeight:'85vh', alignItems:'flex-start' }}>
                    <ContentBlock svc={svc} textColor={textColor} subColor={subColor} mutedColor={mutedColor} borderColor={borderColor} numColor={numColor} tagClass={tagClass} linkClass={linkClass}/>
                  </div>
                )}
              </div>

              {/* Bottom rule */}
              <div style={{ height:1, background: isBlack ? 'linear-gradient(to right, transparent, rgba(255,255,255,.1), transparent)' : 'linear-gradient(to right, transparent, rgba(0,0,0,.1), transparent)', width:'100%' }}/>
            </section>
          )
        })}

        {/* ══════════════ FINALE CTA ══════════════ */}
        <section style={{ background:'#000000', padding:'20vh 8vw', textAlign:'center', position:'relative', overflow:'hidden' }}>
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(25,25,25,.6) 0%, transparent 70%)', pointerEvents:'none' }}/>
          <div style={{ position:'relative', zIndex:2, maxWidth:800, margin:'0 auto', width:'100%' }}>
            <FadeIn>
              <p style={{ fontFamily:'var(--font-montserrat)', fontSize:'.68rem', letterSpacing:'.45em', textTransform:'uppercase', color:'rgba(255,255,255,.35)', marginBottom:'3rem', lineHeight:1.5 }}>
                Enhanccee® — The Complete System
              </p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 style={{ fontFamily:'var(--font-cormorant)', fontWeight:300, fontSize:'clamp(2.8rem,6vw,6.5rem)', lineHeight:1.05, color:'#ffffff', marginBottom:'2rem', textAlign:'center' }}>
                Six disciplines.<br /><em style={{ fontStyle:'italic', color:'rgba(255,255,255,.6)' }}>One intelligence.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <div style={{ width:80, height:1, background:'linear-gradient(to right, transparent, rgba(255,255,255,.3), transparent)', margin:'0 auto 3rem' }}/>
            </FadeIn>
            <FadeIn delay={300}>
              <p style={{ fontFamily:'var(--font-montserrat)', fontSize:'clamp(.9rem,1.3vw,1.05rem)', lineHeight:1.9, color:'rgba(255,255,255,.5)', maxWidth:540, margin:'0 auto 4rem', fontWeight:200, textAlign:'center' }}>
                Not a collection of services. A single, interconnected architecture — engineered to build, scale, and sustain brands that last.
              </p>
            </FadeIn>
            <FadeIn delay={400}>
              <div style={{ display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap', alignItems:'center' }}>
                <Link href="/contact" style={{ display:'inline-block', padding:'1rem 3rem', background:'#ffffff', color:'#000000', fontFamily:'var(--font-montserrat)', fontSize:'.75rem', fontWeight:600, letterSpacing:'.2em', textTransform:'uppercase', textDecoration:'none', transition:'all .35s', lineHeight:1.5 }} className="bg-white text-black">
                  Commission Your Architecture
                </Link>
                <Link href="/clientele" style={{ display:'inline-block', padding:'1rem 3rem', border:'1px solid rgba(255,255,255,.25)', color:'rgba(255,255,255,.7)', fontFamily:'var(--font-montserrat)', fontSize:'.75rem', letterSpacing:'.2em', textTransform:'uppercase', textDecoration:'none', transition:'all .35s', lineHeight:1.5 }}>
                  View Our Clientele
                </Link>
              </div>
            </FadeIn>
          </div>
        </section>

      </main>

      <Footer />
    </>
  )
}

/* ─── CONTENT BLOCK COMPONENT ─── */
function ContentBlock({ svc, textColor, subColor, mutedColor, borderColor, numColor, tagClass, linkClass }: {
  svc: typeof services[0]
  textColor: string
  subColor: string
  mutedColor: string
  borderColor: string
  numColor: string
  tagClass: string
  linkClass: string
}) {
  return (
    <div style={{ position:'relative', width:'100%', maxWidth:'100%', paddingTop:'1rem' }}>
      {/* Chapter label - above everything */}
      <FadeIn>
        <p style={{ fontFamily:'var(--font-montserrat)', fontSize:'.6rem', letterSpacing:'.38em', textTransform:'uppercase', color: mutedColor, marginBottom:'2rem', lineHeight:1.5, fontWeight:400, textAlign:'left' }}>
          {svc.chapter}
        </p>
      </FadeIn>

      {/* Number and heading side by side */}
      <div style={{ position:'relative', display:'flex', alignItems:'flex-start', gap:'1.5rem', marginBottom:'2rem' }}>
        {/* Big watermark number - BOLD */}
        <div style={{ fontFamily:'var(--font-cormorant)', fontSize:'9rem', fontWeight:700, color: numColor, lineHeight:1, userSelect:'none', flexShrink:0, pointerEvents:'none', letterSpacing:'-0.02em', marginTop:'-0.5rem' }}>
          {svc.num}
        </div>

        {/* Heading to the right of number */}
        <div style={{ flex:1, paddingTop:'1rem' }}>
          <FadeIn delay={80}>
            <h2 style={{ fontFamily:'var(--font-cormorant)', fontWeight:300, fontSize:'clamp(2.4rem,4vw,4.5rem)', lineHeight:1.08, color: textColor, marginBottom:0, textAlign:'left' }}>
              {svc.title}<br />
              <em style={{ fontStyle:'italic', color: textColor === '#ffffff' ? 'rgba(255,255,255,.65)' : 'rgba(0,0,0,.55)' }}>{svc.titleEm}</em>
            </h2>
          </FadeIn>
        </div>
      </div>

      <div style={{ position:'relative', zIndex:1, paddingLeft:0 }}>
        <FadeIn delay={150}>
          <div style={{ width:56, height:1, background: textColor === '#ffffff' ? 'rgba(255,255,255,.3)' : 'rgba(0,0,0,.25)', marginBottom:'2rem', marginLeft:0 }}/>
        </FadeIn>

        <FadeIn delay={200}>
          <p style={{ fontFamily:'var(--font-montserrat)', fontSize:'clamp(.88rem,1.2vw,.95rem)', lineHeight:1.95, color: subColor, fontWeight:200, marginBottom:'2.5rem', maxWidth:'100%', textAlign:'left' }}>
            {svc.description}
          </p>
        </FadeIn>

        <FadeIn delay={270}>
          {/* Disciplines */}
          <div style={{ marginBottom:'2.5rem' }}>
            <p style={{ fontFamily:'var(--font-montserrat)', fontSize:'.6rem', letterSpacing:'.3em', textTransform:'uppercase', color: mutedColor, marginBottom:'1rem', lineHeight:1.5, fontWeight:400, textAlign:'left' }}>Disciplines</p>
            <div style={{ display:'flex', flexWrap:'wrap', gap:'.5rem', alignItems:'flex-start', justifyContent:'flex-start' }}>
              {svc.disciplines.map((d, i) => (
                <span key={i} className={tagClass} style={{ lineHeight:1.5, textAlign:'left' }}>{d}</span>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={340}>
          <Link href={svc.link} className={linkClass} style={{ display:'inline-flex', marginTop:'auto', alignItems:'center', justifyContent:'flex-start' }}>
            Explore this discipline <span style={{ fontSize:'1rem', lineHeight:1, display:'inline-block', marginLeft:'0.5rem' }}>→</span>
          </Link>
        </FadeIn>
      </div>
    </div>
  )
}
