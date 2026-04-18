import { motion } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

const features = [
  { name: 'Indoor & Outdoor Seating', desc: 'Cosy corners and open-air terrace' },
  { name: 'Free Parking', desc: 'Plenty of space on-site' },
  { name: 'Boutique Add-ons', desc: 'Candles, lotions, flowers & tattoo cards' },
  { name: 'No Reservations', desc: 'Walk in. Always welcome.' },
]

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const rightContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function BoutiqueExperience() {
  const parallaxMedium = useParallax(0.5)

  return (
    <section className="bg-espresso py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
      {/* Molecular nodes background */}
      <div className="molecular-nodes" />

      {/* Beaker decoration - floating with parallax */}
      <div ref={parallaxMedium} className="absolute bottom-10 right-10 beaker-outline opacity-15 hidden xl:block float-3" style={{ transform: 'scale(1.2)' }} />

      {/* Subtle top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent">
        <span className="absolute left-1/4 top-1/2 w-2 h-2 bg-gold/30 rounded-full -translate-y-1/2" />
        <span className="absolute right-1/4 top-1/2 w-2 h-2 bg-gold/30 rounded-full -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left — image */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative group"
        >
          <div className="aspect-[4/5] bg-roast/80 backdrop-blur-sm border border-gold/10 flex items-center justify-center overflow-hidden group-hover:border-gold/25 transition-all duration-500">
            <img
              src="/atmosphere.jpg"
              alt="Café Atmosphere"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          </div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>

        {/* Right — content */}
        <motion.div
          variants={rightContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p
            variants={slideRight}
            style={{ fontFamily: 'var(--font-body)' }}
            className="font-normal uppercase tracking-[0.25em] text-xs text-gold/90 mb-6"
          >
            The Space
          </motion.p>

          <motion.h2
            variants={slideRight}
            style={{ fontFamily: 'var(--font-display)' }}
            className="font-normal text-3xl sm:text-4xl md:text-5xl text-cream leading-tight tracking-wide mb-8"
          >
            More Than Coffee. A Destination.
          </motion.h2>

          <motion.p
            variants={slideRight}
            style={{ fontFamily: 'var(--font-body)' }}
            className="font-light text-base text-text-muted leading-relaxed mb-10"
          >
            Coffeemistry F-8 is a full sensory experience. While your espresso
            extracts, explore our curated boutique — perfumed candles, natural
            lotions, fresh flowers, and tattoo cards. Equal parts café and
            concept store.
          </motion.p>

          {/* Feature list */}
          <motion.div variants={slideRight} className="space-y-0">
            {features.map((f, i) => (
              <div key={f.name} className="group/item">
                {i > 0 && <div className="w-full h-px bg-gradient-to-r from-gold/0 via-gold/15 to-gold/0" />}
                <div className="py-4 flex items-baseline gap-3 transition-all duration-300 group-hover/item:pl-2">
                  <span className="text-gold text-sm leading-none group-hover/item:text-gold/80 transition-colors">·</span>
                  <div>
                    <span
                      style={{ fontFamily: 'var(--font-body)' }}
                      className="font-normal text-sm text-cream group-hover/item:text-gold/90 transition-colors"
                    >
                      {f.name}
                    </span>
                    <span
                      style={{ fontFamily: 'var(--font-body)' }}
                      className="font-light text-sm text-text-muted ml-2"
                    >
                      — {f.desc}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

      </div>
    </section>
  )
}
