import { motion } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

const reviews = [
  {
    text: 'The barista explained the tasting notes, acidity, body, and finish — and what he described is exactly what I experienced in the cup. That alignment shows real expertise.',
  },
  {
    text: "It has the specialty coffee taste that is hard to find in Pakistan. People don't understand the standard of what actual coffee should be like — until they come here.",
  },
  {
    text: 'One of those rare spots where good coffee, comfort, and creativity come together perfectly. The Spanish Latte is easily one of the best in the city.',
  },
]

const grid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function SocialProof() {
  const parallaxSlow = useParallax(0.3)

  return (
    <section className="bg-coffee-black py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
      {/* Hexagonal pattern background - floating with parallax */}
      <div ref={parallaxSlow} className="hex-pattern absolute inset-0 opacity-50 float-5" />

      {/* Subtle top gradient divider with nodes */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent z-10">
        <span className="absolute left-1/3 top-1/2 w-2 h-2 bg-gold/30 rounded-full -translate-y-1/2" />
        <span className="absolute right-1/3 top-1/2 w-2 h-2 bg-gold/30 rounded-full -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="font-normal uppercase tracking-[0.25em] text-xs text-gold/90 mb-6"
          >
            Verified Reviews
          </p>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="font-normal text-3xl sm:text-4xl text-cream tracking-wide"
          >
            What Serious Coffee Drinkers Say
          </h2>
          {/* Chemical formula decoration */}
          <div className="chemical-formula text-[10px] text-gold/30 mt-2">
            5.0 · C₈H₁₀N₄O₂ · Excellence
          </div>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="element-card p-8 flex flex-col justify-between hover:border-gold/25 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300 group relative overflow-hidden"
            >
              {/* Hexagonal pattern on hover */}
              <div className="absolute inset-0 hex-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div>
                <span
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="text-6xl text-gold/20 leading-none block mb-4 group-hover:text-gold/30 transition-colors"
                  aria-hidden="true"
                >
                  "
                </span>
                <p
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="italic text-lg text-cream leading-relaxed"
                >
                  {review.text}
                </p>
              </div>
              <div>
                <div className="w-full h-px bg-gradient-to-r from-gold/0 via-gold/15 to-gold/0 mt-8 mb-4" />
                <p
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="text-xs uppercase tracking-[0.2em] text-text-muted"
                >
                  — Verified Google Review
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust badge */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-gold text-xl">★</span>
            ))}
          </div>
          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-sm text-text-muted"
          >
            4.4 average · 20+ Google Reviews
          </p>
        </motion.div>

      </div>
    </section>
  )
}
