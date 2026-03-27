import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'
import Fabcurate from '@/components/IMG/images (1).png'
import Superkicks from '@/components/IMG/images (2).png'
import Tichu from '@/components/IMG/images (4)_edited.png'
import RangatJaipur from '@/components/IMG/images (4)_edited_edited.jpg'
import Vako from '@/components/IMG/Untitled design (7).png'
import Outro from '@/components/IMG/Untitled design (8).png'

const clients = [
  { name: 'Fabcurate', logo: Fabcurate },
  { name: 'Superkicks', logo: Superkicks },
  { name: 'Tichu', logo: Tichu },
  { name: 'Rangat Jaipur', logo: RangatJaipur },
  { name: 'VAKO', logo: Vako },
  { name: 'OUTRO', logo: Outro },
]

export default function ClientelePage() {
  return (
    <main className="min-h-screen bg-black pt-24">
      <Header />

      <section className="py-20 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="text-center mb-14">
            <span className="text-white/40 text-xs font-semibold uppercase tracking-[0.3em] mb-4 block">
              Our Clientele
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light text-white mb-6">
              Our Collaborations
            </h1>
            <div className="h-px w-16 bg-white/20 mx-auto mb-6" />
            <p className="text-lg md:text-xl text-white/60 italic max-w-3xl mx-auto leading-relaxed">
              Select brands that trust Enhanccee with their identity, digital presence, and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center justify-center px-12 py-14 bg-black hover:bg-white/5 transition-all duration-300 group"
              >
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={520}
                  height={320}
                  className="object-contain h-full w-auto max-h-[200px] filter invert opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}



