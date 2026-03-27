'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

/* ─── SCROLL REVEAL WRAPPER ─── */
function FadeIn({ children, delay = 0, style = {} }: { children: React.ReactNode; delay?: number; style?: React.CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null)
  const [vis, setVis] = useState(false)
  useEffect(() => {
    if (!ref.current) return
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVis(true); io.disconnect() } }, { threshold: 0.1 })
    io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return (
    <div ref={ref} style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(32px)', transition: `opacity .85s ease ${delay}ms, transform .85s ease ${delay}ms`, ...style }}>
      {children}
    </div>
  )
}

/* ─── DIVIDER ─── */
function Divider({ mb = '6rem' }: { mb?: string }) {
  return (
    <div style={{ width: '100%', height: 1, background: 'linear-gradient(to right, transparent, rgba(255,255,255,0.2), transparent)', position: 'relative', marginBottom: mb }}>
      <span style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)', color: 'rgba(255,255,255,0.3)', fontSize: '.5rem', background: '#000', padding: '0 1rem' }}>◆</span>
    </div>
  )
}

export default function SEOPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  /* ─── LIQUID CANVAS ─── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let t = 0, raf = 0
    function resize() {
      if (!canvas) return
      canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth
      canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)
    function draw() {
      const w = canvas!.width, h = canvas!.height
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < 4; i++) {
        const x = w * .5 + Math.sin(t * .0004 + i * 1.5) * w * .25
        const y = h * .5 + Math.cos(t * .0003 + i * 2.1) * h * .25
        const r = w * .3 + Math.sin(t * .0005 + i) * w * .08
        const a = .035 + Math.sin(t * .0006 + i) * .015
        const g = ctx.createRadialGradient(x, y, 0, x, y, r)
        g.addColorStop(0, i % 2 === 0 ? `rgba(255,255,255,${a * 0.4})` : `rgba(180,180,180,${a * 0.2})`)
        g.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = g
        ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill()
      }
      t++; raf = requestAnimationFrame(draw)
    }
    draw()
    return () => { window.removeEventListener('resize', resize); cancelAnimationFrame(raf) }
  }, [])

  /* ─── CURSOR ─── */
  useEffect(() => {
    const dot = document.getElementById('seo-dot')
    const ring = document.getElementById('seo-ring')
    if (!dot || !ring) return
    let mx = 0, my = 0, rx = 0, ry = 0
    const onMove = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY
      dot.style.left = mx + 'px'; dot.style.top = my + 'px'
    }
    document.addEventListener('mousemove', onMove);
    (function loop() {
      rx += (mx - rx) * .12; ry += (my - ry) * .12
      ring.style.left = rx + 'px'; ring.style.top = ry + 'px'
      requestAnimationFrame(loop)
    })()
    return () => document.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <style>{`
        @keyframes seo-fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
        @keyframes seo-scrollPulse { 0%,100%{opacity:.4} 50%{opacity:1} }
        @keyframes seo-orbFloat { 0%,100%{transform:translate(0,0)scale(1)} 33%{transform:translate(30px,-20px)scale(1.05)} 66%{transform:translate(-20px,15px)scale(.97)} }
        @keyframes seo-breathe { 0%,100%{opacity:.7;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)} }
        .seo-btn-white { display:inline-block; padding:1rem 2.8rem; border:1px solid rgba(255,255,255,0.6); color:#ffffff; font-size:.8rem; letter-spacing:.2em; text-transform:uppercase; text-decoration:none; position:relative; overflow:hidden; transition:color .4s; }
        .seo-btn-white::before { content:''; position:absolute; inset:0; background:#ffffff; transform:scaleX(0); transform-origin:left; transition:transform .45s cubic-bezier(.77,0,.175,1); }
        .seo-btn-white:hover::before { transform:scaleX(1); }
        .seo-btn-white:hover { color:#000000; }
        .seo-btn-white span { position:relative; z-index:1; }
        .seo-btn-ghost { display:inline-block; padding:1rem 2.8rem; color:rgba(255,255,255,.6); font-size:.8rem; letter-spacing:.2em; text-transform:uppercase; text-decoration:none; border:1px solid rgba(255,255,255,.15); transition:all .4s; }
        .seo-btn-ghost:hover { border-color:rgba(255,255,255,.5); color:#ffffff; }
        .seo-img-banner { width:100%; position:relative; overflow:hidden; display:block; line-height:0; }
        .seo-img-banner img { width:100%; height:100%; object-fit:cover; display:block; filter:brightness(.4) saturate(.5); transition:transform 8s ease, filter .6s; }
        .seo-img-banner:hover img { transform:scale(1.03); filter:brightness(.5) saturate(.6); }
        .seo-img-banner::after { content:''; position:absolute; inset:0; background:linear-gradient(to bottom, rgba(0,0,0,.3) 0%, rgba(0,0,0,.05) 50%, rgba(0,0,0,.45) 100%); pointer-events:none; }
        .seo-img-caption { position:absolute; bottom:2.5rem; left:3rem; z-index:2; font-size:.68rem; letter-spacing:.3em; text-transform:uppercase; color:rgba(255,255,255,.4); }
        .seo-eco-card { background:#0a0a0a; padding:5rem 4rem; position:relative; overflow:hidden; transition:background .5s; }
        .seo-eco-card:hover { background:#111111; }
        .seo-eco-card::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(to right, transparent, #ffffff, transparent); opacity:0; transition:opacity .5s; }
        .seo-eco-card:hover::before { opacity:1; }
        .seo-eco-num { font-family:var(--font-cormorant),serif; font-size:7rem; font-weight:300; color:rgba(255,255,255,.15); position:absolute; top:1rem; right:2rem; pointer-events:none; transition:color .5s; }
        .seo-eco-card:hover .seo-eco-num { color:rgba(255,255,255,.25); }
        .seo-tag-item { font-size:.72rem; padding:.3rem .8rem; border:1px solid rgba(255,255,255,.12); color:rgba(255,255,255,.45); transition:all .3s; display:inline-block; }
        .seo-eco-card:hover .seo-tag-item { border-color:rgba(255,255,255,.3); color:rgba(255,255,255,.75); }
        .seo-diff-item { padding:4rem; border-bottom:1px solid rgba(255,255,255,.06); border-right:1px solid rgba(255,255,255,.06); position:relative; overflow:hidden; }
        .seo-diff-item:nth-child(even) { border-right:none; }
        .seo-diff-item:nth-last-child(-n+2) { border-bottom:none; }
        .seo-diff-item::after { content:''; position:absolute; inset:0; background:rgba(255,255,255,.02); opacity:0; transition:opacity .4s; }
        .seo-diff-item:hover::after { opacity:1; }
        .seo-orb { position:absolute; border-radius:50%; filter:blur(80px); pointer-events:none; z-index:1; }
      `}</style>

      {/* Cursor */}
      <div id="seo-dot" style={{ position:'fixed', width:10, height:10, background:'#ffffff', borderRadius:'50%', pointerEvents:'none', zIndex:9999, transform:'translate(-50%,-50%)', mixBlendMode:'difference' }}/>
      <div id="seo-ring" style={{ position:'fixed', width:36, height:36, border:'1px solid rgba(255,255,255,.3)', borderRadius:'50%', pointerEvents:'none', zIndex:9998, transform:'translate(-50%,-50%)' }}/>

      <Header />

      <main style={{ backgroundColor:'#000000', color:'#ffffff', fontFamily:'var(--font-montserrat)', cursor:'none' }}>

        {/* ══════════════ HERO ══════════════ */}
        <section style={{ position:'relative', minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center', overflow:'hidden', padding:'0 6vw' }}>
          {/* Orbs */}
          <div className="seo-orb" style={{ width:500, height:500, background:'rgba(35,35,35,.5)', top:-100, left:-150, animation:'seo-orbFloat 12s ease-in-out infinite' }}/>
          <div className="seo-orb" style={{ width:400, height:400, background:'rgba(255,255,255,.04)', bottom:-80, right:-100, animation:'seo-orbFloat 12s ease-in-out infinite', animationDelay:'-6s' }}/>
          <div className="seo-orb" style={{ width:300, height:300, background:'rgba(25,25,25,.5)', top:'50%', right:'10%', animation:'seo-orbFloat 12s ease-in-out infinite', animationDelay:'-3s' }}/>
          <canvas ref={canvasRef} style={{ position:'absolute', inset:0, width:'100%', height:'100%', opacity:.4 }}/>
          <div style={{ position:'absolute', inset:0, zIndex:1, background:'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(25,25,25,.45) 0%, transparent 70%), #000000' }}/>
          <div style={{ position:'absolute', inset:0, opacity:.03, zIndex:2, pointerEvents:'none', backgroundImage:`url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }}/>

          <div style={{ position:'relative', zIndex:3, textAlign:'center', maxWidth:1280 }}>
            <p style={{ fontWeight:200, fontSize:'clamp(.65rem,1.2vw,.8rem)', letterSpacing:'.35em', textTransform:'uppercase', color:'rgba(255,255,255,.5)', opacity:0, animation:'seo-fadeUp 1s ease .3s forwards', marginBottom:'2rem' }}>
              Enhanccee — Search Architecture
            </p>
            <h1 style={{ fontFamily:'var(--font-cormorant)', fontWeight:300, fontSize:'clamp(3.2rem,8vw,8.5rem)', lineHeight:1, color:'#ffffff', opacity:0, animation:'seo-fadeUp 1.1s ease .6s forwards', marginBottom:'1.2rem' }}>
              Ranking is Vanity.<br /><em style={{ fontStyle:'italic', color:'rgba(255,255,255,.7)' }}>Relevance</em><br />is Power.
            </h1>
            <p style={{ fontWeight:200, fontSize:'clamp(.9rem,1.5vw,1.1rem)', lineHeight:1.8, color:'rgba(255,255,255,.55)', maxWidth:580, margin:'0 auto 3.5rem', opacity:0, animation:'seo-fadeUp 1.1s ease .9s forwards' }}>
              SEO isn&apos;t a service — it&apos;s a permanent infrastructure investment. We engineer organic authority that compounds, positioning your brand as the definitive voice in every market you choose to own.
            </p>
            <div style={{ opacity:0, animation:'seo-fadeUp 1.1s ease 1.1s forwards', display:'inline-flex', gap:'1.5rem', alignItems:'center' }}>
              <Link href="/contact" className="seo-btn-white"><span>Engineer Your Authority</span></Link>
            </div>
          </div>

          <div style={{ position:'absolute', bottom:'2.5rem', left:'50%', transform:'translateX(-50%)', zIndex:3, display:'flex', flexDirection:'column', alignItems:'center', gap:'.5rem', opacity:0, animation:'seo-fadeUp 1s ease 1.6s forwards' }}>
            <span style={{ fontSize:'.65rem', letterSpacing:'.3em', textTransform:'uppercase', color:'rgba(255,255,255,.25)' }}>Explore</span>
            <div style={{ width:1, height:50, background:'linear-gradient(to bottom, rgba(255,255,255,.4), transparent)', animation:'seo-scrollPulse 2s ease-in-out infinite' }}/>
          </div>
        </section>

        {/* ══════════════ BANNER 1 ══════════════ */}
        <FadeIn>
          <div className="seo-img-banner" style={{ height:'clamp(400px,58vh,700px)' }}>
            <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1800&q=80&fit=crop&crop=center" alt="Data analytics — search architecture" loading="lazy"/>
            <span className="seo-img-caption">Visibility is permanent infrastructure</span>
          </div>
        </FadeIn>

        {/* ══════════════ PHILOSOPHY ══════════════ */}
        <section style={{ padding:'14vh 8vw' }}>
          <Divider mb="6rem"/>
          <FadeIn>
            <p style={{ fontSize:'.7rem', letterSpacing:'.4em', textTransform:'uppercase', color:'rgba(255,255,255,.5)', marginBottom:'4rem' }}>The Philosophy</p>
          </FadeIn>
          <FadeIn>
            <h2 style={{ fontFamily:'var(--font-cormorant)', fontWeight:300, fontSize:'clamp(2.4rem,5.5vw,6rem)', lineHeight:1.1, color:'#ffffff', marginBottom:'5rem' }}>
              We don&apos;t chase rankings.<br />We build <em style={{ fontStyle:'italic', color:'rgba(255,255,255,.7)' }}>search empires.</em>
            </h2>
          </FadeIn>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem 8rem' }}>
            {[
              { n:'01', strong:'Visibility that compounds over time.', body:'Unlike paid media, organic authority accumulates — every piece of content, every backlink, every technical improvement building a permanent moat that competitors cannot simply outbid.' },
              { n:'02', strong:'Intent drives everything.', body:'We map every search query to the exact commercial intent behind it — ensuring your brand appears at the precise moment a high-value prospect is ready to make a decision.' },
              { n:'03', strong:'Technical foundations, not just content.', body:'Elite SEO begins in the architecture. Site speed, crawlability, schema, and Core Web Vitals are not afterthoughts — they are the foundations everything else is built upon.' },
              { n:'04', strong:'Authority signals that cannot be faked.', body:'We build the links, mentions, and domain signals that genuine authority requires — earned through quality, not manufactured through shortcuts that algorithms eventually punish.' },
            ].map((b, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div>
                  <div style={{ fontFamily:'var(--font-cormorant)', fontSize:'5rem', color:'rgba(255,255,255,.15)', lineHeight:1, marginBottom:'1.5rem', fontWeight:300 }}>{b.n}</div>
                  <p style={{ fontSize:'clamp(1rem,1.4vw,1.15rem)', lineHeight:1.9, color:'rgba(255,255,255,.55)', fontWeight:200 }}>
                    <strong style={{ color:'#ffffff', fontWeight:400 }}>{b.strong}</strong> {b.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ══════════════ BANNER 2 — SPLIT ══════════════ */}
        <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, background:'rgba(255,255,255,.1)' }}>
          <FadeIn>
            <div className="seo-img-banner" style={{ height:'clamp(300px,44vh,560px)' }}>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80&fit=crop" alt="Search analytics and keyword strategy" loading="lazy"/>
              <span className="seo-img-caption">Technical Architecture</span>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="seo-img-banner" style={{ height:'clamp(300px,44vh,560px)' }}>
              <img src="https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=1200&q=80&fit=crop" alt="Content strategy and authority building" loading="lazy"/>
              <span className="seo-img-caption">Authority Building</span>
            </div>
          </FadeIn>
        </div>

        {/* ══════════════ ECOSYSTEM ══════════════ */}
        <section style={{ padding:'14vh 8vw' }}>
          <Divider mb="8rem"/>
          <div style={{ textAlign:'center', marginBottom:'8rem' }}>
            <FadeIn><span style={{ fontSize:'.7rem', letterSpacing:'.4em', textTransform:'uppercase', color:'rgba(255,255,255,.5)', display:'block', marginBottom:'1.5rem' }}>What We Deliver</span></FadeIn>
            <FadeIn delay={100}>
              <h2 style={{ fontFamily:'var(--font-cormorant)', fontWeight:300, fontSize:'clamp(2.5rem,5vw,5.5rem)', color:'#ffffff', lineHeight:1.15 }}>
                Your Complete<br /><em style={{ fontStyle:'italic', color:'rgba(255,255,255,.65)' }}>Search Ecosystem</em>
              </h2>
            </FadeIn>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, background:'rgba(255,255,255,.08)' }}>
            {[
              { num:'I', tag:'Foundation', title:'Technical SEO\nArchitecture', body:'The infrastructure beneath every high-ranking site. We audit, engineer, and optimise crawlability, indexation, site speed, Core Web Vitals, schema, and metadata — so search engines can find, understand, and reward your content.', tags:['Site Audit','Core Web Vitals','Schema Markup','Crawl Optimisation','Index Management'] },
              { num:'II', tag:'Content', title:'Authority-Led\nContent Strategy', body:'Intent-mapped content systems that build topical authority, establish category trust, and guide high-value prospects through every stage of their decision journey — without keyword stuffing or content sprawl.', tags:['Keyword Intelligence','Topic Clustering','Content Architecture','Editorial Calendar','Semantic SEO'] },
              { num:'III', tag:'Authority', title:'Off-Page &\nLink Acquisition', body:'Earned authority, not manufactured links. We build the quality backlink profile, brand mentions, and digital PR signals that tell search engines your domain deserves to rank — and sustain that ranking under algorithm updates.', tags:['Link Building','Digital PR','Brand Mentions','Authority Signals','Competitor Gap Analysis'] },
              { num:'IV', tag:'Intelligence', title:'Analytics &\nGrowth Reporting', body:'You cannot optimise what you cannot measure. We instrument comprehensive tracking, build executive dashboards, and deliver the attribution clarity that connects organic search activity directly to commercial outcomes.', tags:['GA4 & GSC Setup','Rank Tracking','Revenue Attribution','Cohort Analysis','Competitive Intelligence'] },
            ].map((card, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="seo-eco-card">
                  <span className="seo-eco-num">{card.num}</span>
                  <p style={{ fontSize:'.65rem', letterSpacing:'.35em', textTransform:'uppercase', color:'rgba(255,255,255,.4)', marginBottom:'1.5rem' }}>{card.tag}</p>
                  <h3 style={{ fontFamily:'var(--font-cormorant)', fontWeight:400, fontSize:'clamp(1.8rem,2.8vw,2.8rem)', color:'#ffffff', marginBottom:'1.8rem', lineHeight:1.2, whiteSpace:'pre-line' }}>{card.title}</h3>
                  <p style={{ fontSize:'.9rem', lineHeight:1.85, color:'rgba(255,255,255,.5)', fontWeight:200 }}>{card.body}</p>
                  <div style={{ marginTop:'2rem', display:'flex', flexWrap:'wrap', gap:'.5rem' }}>
                    {card.tags.map((t, j) => <span key={j} className="seo-tag-item">{t}</span>)}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={100}>
            <p style={{ textAlign:'center', marginTop:'6rem', fontFamily:'var(--font-cormorant)', fontSize:'clamp(1.3rem,2.5vw,2rem)', fontStyle:'italic', color:'rgba(255,255,255,.5)', fontWeight:300 }}>
              Every signal engineered to work together — <em style={{ color:'rgba(255,255,255,.8)', fontStyle:'normal' }}>technically, editorially, and commercially.</em>
            </p>
          </FadeIn>
        </section>

        {/* ══════════════ IMAGE + TEXT ROW — PROCESS ══════════════ */}
        <FadeIn>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, background:'rgba(255,255,255,.08)', minHeight:500 }}>
            <div style={{ position:'relative', overflow:'hidden' }}>
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&fit=crop" alt="SEO strategy process" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'brightness(.4) saturate(.5)', display:'block' }}/>
            </div>
            <div style={{ background:'#0a0a0a', padding:'6rem 5rem', display:'flex', flexDirection:'column', justifyContent:'center' }}>
              <span style={{ fontSize:'.68rem', letterSpacing:'.4em', textTransform:'uppercase', color:'rgba(255,255,255,.4)', marginBottom:'1.8rem' }}>The Enhanccee SEO Method</span>
              <h2 style={{ fontFamily:'var(--font-cormorant)', fontWeight:300, fontSize:'clamp(2rem,3.5vw,4rem)', lineHeight:1.15, color:'#ffffff', marginBottom:'2rem' }}>
                Precision at<br /><em style={{ fontStyle:'italic', color:'rgba(255,255,255,.65)' }}>every signal</em>
              </h2>
              <p style={{ fontSize:'.95rem', lineHeight:1.9, color:'rgba(255,255,255,.5)', fontWeight:200 }}>We begin where most agencies end — with a forensic audit of your current position, your competitive landscape, and the exact gap between where you rank and where your buyers search. From there, every technical decision, every piece of content, every link is placed with strategic intent.</p>
            </div>
          </div>
        </FadeIn>

        {/* ══════════════ BANNER 3 ══════════════ */}
        <FadeIn>
          <div className="seo-img-banner" style={{ height:'clamp(300px,42vh,540px)' }}>
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1800&q=80&fit=crop" alt="Data-driven search strategy" loading="lazy"/>
            <span className="seo-img-caption">Where data becomes dominance</span>
          </div>
        </FadeIn>

        {/* ══════════════ PHILOSOPHY STATS ══════════════ */}
        <section style={{ padding:'16vh 8vw', position:'relative', overflow:'hidden', background:'#050505' }}>
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(25,25,25,.4) 0%, transparent 70%)', animation:'seo-breathe 8s ease-in-out infinite', pointerEvents:'none' }}/>
          <div style={{ maxWidth:1280, margin:'0 auto', position:'relative', zIndex:1 }}>
            <FadeIn>
              <p style={{ fontSize:'.7rem', letterSpacing:'.4em', textTransform:'uppercase', color:'rgba(255,255,255,.4)', marginBottom:'4rem', textAlign:'center' }}>The SEO Standard</p>
            </FadeIn>
            <FadeIn delay={100}>
              <h2 style={{ fontFamily:'var(--font-cormorant)', fontWeight:300, fontSize:'clamp(2.8rem,6vw,6.5rem)', lineHeight:1.05, textAlign:'center', color:'#ffffff', marginBottom:'5rem' }}>
                Ranking is<br /><em style={{ fontStyle:'italic', color:'rgba(255,255,255,.65)' }}>not the goal.</em>
              </h2>
            </FadeIn>
            <FadeIn delay={200}>
              <p style={{ fontSize:'clamp(1.1rem,1.6vw,1.3rem)', lineHeight:1.9, color:'rgba(255,255,255,.5)', textAlign:'center', fontWeight:200, marginBottom:'5rem' }}>
                Rankings fluctuate. Revenue doesn&apos;t lie.<br />
                We build SEO systems measured by <strong style={{ color:'#ffffff' }}>pipeline, not position.</strong><br />
                That is what separates us.
              </p>
            </FadeIn>
            <div style={{ display:'grid', gridTemplateColumns:'repeat(3,1fr)', gap:1, background:'rgba(255,255,255,.08)', marginTop:'4rem' }}>
              {[
                { word:'Authority', sub:'Over Traffic' },
                { word:'Intent', sub:'Over Keywords' },
                { word:'Revenue', sub:'Over Rankings' },
              ].map((s, i) => (
                <FadeIn key={i} delay={i * 100}>
                  <div style={{ background:'#000', padding:'3rem 2rem', textAlign:'center' }}>
                    <span style={{ fontFamily:'var(--font-cormorant)', fontSize:'1.6rem', fontWeight:400, color:'#ffffff', display:'block', marginBottom:'.5rem' }}>{s.word}</span>
                    <span style={{ fontSize:'.75rem', letterSpacing:'.15em', color:'rgba(255,255,255,.4)', textTransform:'uppercase', fontWeight:200 }}>{s.sub}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════ BANNER 4 — TRIO ══════════════ */}
        <div style={{ display:'grid', gridTemplateColumns:'2fr 1fr 1fr', gap:2, background:'rgba(255,255,255,.08)' }}>
          {[
            { src:'https://images.unsplash.com/photo-1416339134316-0e91dc9ded92?w=1200&q=80&fit=crop', cap:'Content Strategy' },
            { src:'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80&fit=crop', cap:'Analytics' },
            { src:'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80&fit=crop', cap:'Editorial Authority' },
          ].map((img, i) => (
            <FadeIn key={i} delay={i * 100}>
              <div className="seo-img-banner" style={{ height:'clamp(260px,38vh,460px)' }}>
                <img src={img.src} alt={img.cap} loading="lazy"/>
                <span className="seo-img-caption">{img.cap}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* ══════════════ DIFFERENTIATORS ══════════════ */}
        <section style={{ padding:'14vh 8vw' }}>
          <Divider mb="6rem"/>
          <div style={{ textAlign:'center', marginBottom:'4rem' }}>
            <FadeIn><span style={{ fontSize:'.7rem', letterSpacing:'.4em', textTransform:'uppercase', color:'rgba(255,255,255,.4)', display:'block', marginBottom:'1.5rem' }}>What Makes Enhanccee Different</span></FadeIn>
            <FadeIn delay={100}>
              <h2 style={{ fontFamily:'var(--font-cormorant)', fontWeight:300, fontSize:'clamp(2.5rem,5vw,5.5rem)', color:'#ffffff', lineHeight:1.15 }}>
                Built to<br /><em style={{ fontStyle:'italic', color:'rgba(255,255,255,.65)' }}>Compound</em>
              </h2>
            </FadeIn>
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', maxWidth:1200, margin:'6rem auto 0' }}>
            {[
              { vs:'Revenue-focused', h:'Not Rank-focused', p:'Position one means nothing if the traffic doesn\'t convert. We align every SEO decision with commercial intent — building visibility in the queries that actually drive pipeline, not just traffic volume.' },
              { vs:'Technical precision', h:'Not Surface Tactics', p:'Quick fixes and surface-level tactics decay. We engineer the technical foundations, structural architecture, and content systems that withstand algorithm updates and compound over years.' },
              { vs:'AEO & GEO ready', h:'Not Backwards-looking', p:'Search is evolving toward AI-generated answers and generative experiences. We future-proof your visibility for Answer Engine Optimization and Generative Engine Optimization — not just today\'s algorithms.' },
              { vs:'Full attribution', h:'Not Vanity Metrics', p:'Every organic session, lead, and closed deal traced back to its source. We connect SEO activity to revenue outcomes with attribution clarity that justifies the investment at board level.' },
            ].map((d, i) => (
              <FadeIn key={i} delay={i * 100}>
                <div className="seo-diff-item">
                  <div style={{ width:48, height:1, background:'rgba(255,255,255,.4)', marginBottom:'2rem', position:'relative' }}>
                    <span style={{ position:'absolute', right:0, top:-3, width:7, height:7, borderRadius:'50%', background:'rgba(255,255,255,.6)', display:'block' }}/>
                  </div>
                  <span style={{ fontSize:'.7rem', color:'rgba(255,255,255,.4)', letterSpacing:'.15em', textTransform:'uppercase', marginBottom:'1rem', display:'block' }}>{d.vs}</span>
                  <h3 style={{ fontFamily:'var(--font-cormorant)', fontWeight:400, fontSize:'clamp(1.6rem,2.5vw,2.5rem)', color:'#ffffff', marginBottom:'1rem', lineHeight:1.2 }}>{d.h}</h3>
                  <p style={{ fontSize:'.88rem', lineHeight:1.85, color:'rgba(255,255,255,.5)', fontWeight:200 }}>{d.p}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </section>

        {/* ══════════════ IMAGE + TEXT ROW REVERSED ══════════════ */}
        <FadeIn>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:2, background:'rgba(255,255,255,.08)', minHeight:500 }}>
            <div style={{ background:'#0a0a0a', padding:'6rem 5rem', display:'flex', flexDirection:'column', justifyContent:'center' }}>
              <span style={{ fontSize:'.68rem', letterSpacing:'.4em', textTransform:'uppercase', color:'rgba(255,255,255,.4)', marginBottom:'1.8rem' }}>The Long-Term Outcome</span>
              <h2 style={{ fontFamily:'var(--font-cormorant)', fontWeight:300, fontSize:'clamp(2rem,3.5vw,4rem)', lineHeight:1.15, color:'#ffffff', marginBottom:'2rem' }}>
                Organic authority<br />that feels <em style={{ fontStyle:'italic', color:'rgba(255,255,255,.65)' }}>unassailable</em>
              </h2>
              <p style={{ fontSize:'.95rem', lineHeight:1.9, color:'rgba(255,255,255,.5)', fontWeight:200 }}>When we&apos;re done, your organic channel isn&apos;t a cost centre — it&apos;s a compounding asset. A domain with genuine authority, content that answers every relevant question, and a technical foundation that search engines reward for years. That is what elite SEO looks like.</p>
            </div>
            <div style={{ position:'relative', overflow:'hidden' }}>
              <img src="https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=1200&q=80&fit=crop" alt="Organic search authority outcome" loading="lazy" style={{ width:'100%', height:'100%', objectFit:'cover', filter:'brightness(.38) saturate(.5)', display:'block' }}/>
            </div>
          </div>
        </FadeIn>

        {/* ══════════════ SIGNATURE QUOTE ══════════════ */}
        <section style={{ padding:'20vh 8vw', position:'relative', overflow:'hidden', textAlign:'center' }}>
          <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 90% 70% at 50% 50%, rgba(20,20,20,.4) 0%, transparent 70%)', animation:'seo-breathe 10s ease-in-out infinite alternate', pointerEvents:'none' }}/>
          <FadeIn>
            <p style={{ fontSize:'.7rem', letterSpacing:'.45em', textTransform:'uppercase', color:'rgba(255,255,255,.35)', marginBottom:'4rem', position:'relative', zIndex:1 }}>The Enhanccee Search Statement</p>
          </FadeIn>
          <FadeIn delay={100}>
            <h2 style={{ fontFamily:'var(--font-cormorant)', fontWeight:300, fontSize:'clamp(2.5rem,6.5vw,7.5rem)', lineHeight:1.1, color:'#ffffff', maxWidth:1280, margin:'0 auto 3rem', position:'relative', zIndex:1 }}>
              The difference between<br /><em style={{ fontStyle:'italic', color:'rgba(255,255,255,.7)' }}>ranking and relevance</em><br />is intention.
            </h2>
          </FadeIn>
          <FadeIn delay={300}>
            <div style={{ width:200, height:1, background:'linear-gradient(to right, transparent, rgba(255,255,255,.3), transparent)', margin:'0 auto', position:'relative', zIndex:1 }}/>
          </FadeIn>
        </section>

        {/* ══════════════ BANNER 5 ══════════════ */}
        <FadeIn>
          <div className="seo-img-banner" style={{ height:'clamp(200px,28vh,360px)' }}>
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1800&q=80&fit=crop" alt="SEO strategy session" loading="lazy"/>
            <span className="seo-img-caption">Where intent meets infrastructure</span>
          </div>
        </FadeIn>

        {/* ══════════════ CTA ══════════════ */}
        <section style={{ padding:'14vh 8vw' }}>
          <FadeIn>
            <div style={{ background:'rgba(12,12,12,.9)', border:'1px solid rgba(255,255,255,.1)', backdropFilter:'blur(20px)', padding:'8rem 6rem', textAlign:'center', position:'relative', overflow:'hidden', maxWidth:1100, margin:'0 auto' }}>
              <div style={{ position:'absolute', top:0, left:0, right:0, height:1, background:'linear-gradient(to right, transparent, rgba(255,255,255,.3), transparent)' }}/>
              <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,255,255,.025) 0%, transparent 60%)', pointerEvents:'none' }}/>
              <span style={{ fontSize:'.7rem', letterSpacing:'.4em', textTransform:'uppercase', color:'rgba(255,255,255,.4)', marginBottom:'2rem', display:'block', position:'relative', zIndex:1 }}>Engineer Your Search Dominance</span>
              <h2 style={{ fontFamily:'var(--font-cormorant)', fontWeight:300, fontSize:'clamp(2.5rem,5vw,5.5rem)', color:'#ffffff', lineHeight:1.1, marginBottom:'2rem', position:'relative', zIndex:1 }}>
                Your organic authority is<br />a <em style={{ fontStyle:'italic', color:'rgba(255,255,255,.65)' }}>permanent asset</em> — if<br />you build it correctly.
              </h2>
              <p style={{ fontSize:'clamp(.9rem,1.3vw,1.1rem)', color:'rgba(255,255,255,.45)', fontWeight:200, lineHeight:1.8, maxWidth:520, margin:'0 auto 4rem', position:'relative', zIndex:1 }}>We partner with brands ready to build search authority that compounds over years, not campaigns. Let&apos;s begin the conversation.</p>
              <div style={{ display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap', position:'relative', zIndex:1 }}>
                <Link href="/contact" className="seo-btn-white"><span>Begin Your SEO Architecture</span></Link>
                <Link href="/clientele" className="seo-btn-ghost">View Our Work</Link>
              </div>
            </div>
          </FadeIn>
        </section>

      </main>

      <Footer />
    </>
  )
}
