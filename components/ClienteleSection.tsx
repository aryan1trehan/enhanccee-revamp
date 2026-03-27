import Image from 'next/image'
import Link from 'next/link'
import Fabcurate from './IMG/images (1).png'
import Superkicks from './IMG/images (2).png'
import Tichu from './IMG/images (4)_edited.png'
import RangatJaipur from './IMG/images (4)_edited_edited.jpg'
import Vako from './IMG/Untitled design (7).png'
import Outro from './IMG/Untitled design (8).png'

const clients = [
  { name: 'Fabcurate', logo: Fabcurate },
  { name: 'Superkicks', logo: Superkicks },
  { name: 'Tichu', logo: Tichu },
  { name: 'Rangat Jaipur', logo: RangatJaipur },
  { name: 'VAKO', logo: Vako },
  { name: 'OUTRO', logo: Outro },
]

export default function ClienteleSection() {
  return (
    <section id="clientele" className="py-24 bg-black border-t border-white/10">
      <div className="container mx-auto px-6 md:px-12 lg:px-16">

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-white/20 rounded-full px-4 py-1.5 mb-8">
            <span className="text-white/60 text-xs uppercase tracking-[0.25em] font-medium">Trusted By</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
            Our Clientele
          </h2>
          <p className="text-white/50 text-base max-w-3xl mx-auto leading-8">
            We partner with founders, visionaries, and enterprises who think beyond immediate wins.
            <br />
            Ambition recognizes ambition. Precision attracts precision.
            <br />
            Together, we don&apos;t chase markets - we shape them.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-12">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center border border-white/10 rounded-2xl px-6 py-6 hover:border-white/25 transition-all duration-300 group"
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={160}
                height={80}
                className="object-contain w-auto h-24 opacity-40 group-hover:opacity-90 transition-opacity duration-300 filter invert"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/clientele"
            className="inline-flex items-center gap-2 border border-white/30 text-white text-sm font-medium tracking-wide px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            View All Clients
          </Link>
        </div>

      </div>
    </section>
  )
}