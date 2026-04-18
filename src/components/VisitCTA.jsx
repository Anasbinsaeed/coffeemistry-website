import { motion } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

export default function VisitCTA() {
  const parallaxSlow = useParallax(0.3)
  const parallaxMedium = useParallax(0.5)

  const handleDirections = () => {
    window.open(
      'https://www.google.com/maps/search/Coffeemistry+F-8+Islamabad+Pakistan',
      '_blank',
      'noopener,noreferrer'
    )
  }

  return (
    <section id="visit" className="bg-coffee-black py-32 px-6 md:px-10 relative overflow-hidden">
      {/* Chemical molecular structure background - floating with parallax */}
      <div ref={parallaxSlow} className="absolute inset-0 opacity-30">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Large central molecule - floating */}
          <g stroke="rgba(201, 169, 110, 0.15)" strokeWidth="1.5" fill="none" className="float-1">
            <circle cx="50%" cy="50%" r="60" />
            <circle cx="50%" cy="50%" r="40" />
            <line x1="calc(50% - 60px)" y1="50%" x2="calc(50% - 100px)" y2="50%" />
            <line x1="calc(50% + 60px)" y1="50%" x2="calc(50% + 100px)" y2="50%" />
            <line x1="50%" y1="calc(50% - 60px)" x2="50%" y2="calc(50% - 100px)" />
            <line x1="50%" y1="calc(50% + 60px)" x2="50%" y2="calc(50% + 100px)" />
          </g>
          <circle cx="50%" cy="50%" r="5" fill="rgba(201, 169, 110, 0.4)" className="pulse-slow" />
          <circle cx="calc(50% - 100px)" cy="50%" r="4" fill="rgba(201, 169, 110, 0.3)" className="pulse-slow" />
          <circle cx="calc(50% + 100px)" cy="50%" r="4" fill="rgba(201, 169, 110, 0.3)" className="pulse-slow" />
          <circle cx="50%" cy="calc(50% - 100px)" r="4" fill="rgba(201, 169, 110, 0.3)" />
          <circle cx="50%" cy="calc(50% + 100px)" r="4" fill="rgba(201, 169, 110, 0.3)" />

          {/* Additional floating molecules */}
          <g opacity="0.5" className="float-2">
            <circle cx="20%" cy="30%" r="3" fill="rgba(201, 169, 110, 0.2)" />
            <line x1="20%" y1="30%" x2="25%" y2="25%" stroke="rgba(201, 169, 110, 0.12)" strokeWidth="1" />
            <circle cx="25%" cy="25%" r="2" fill="rgba(201, 169, 110, 0.2)" />
          </g>

          <g opacity="0.5" className="float-3">
            <circle cx="80%" cy="70%" r="3" fill="rgba(201, 169, 110, 0.2)" />
            <line x1="80%" y1="70%" x2="75%" y2="75%" stroke="rgba(201, 169, 110, 0.12)" strokeWidth="1" />
            <circle cx="75%" cy="75%" r="2" fill="rgba(201, 169, 110, 0.2)" />
          </g>

          <g opacity="0.4" className="float-4">
            <circle cx="15%" cy="70%" r="2" fill="rgba(201, 169, 110, 0.2)" />
            <line x1="15%" y1="70%" x2="18%" y2="65%" stroke="rgba(201, 169, 110, 0.1)" strokeWidth="1" />
            <circle cx="18%" cy="65%" r="2" fill="rgba(201, 169, 110, 0.2)" />
          </g>

          <g opacity="0.4" className="float-5">
            <circle cx="85%" cy="25%" r="2" fill="rgba(201, 169, 110, 0.2)" />
            <line x1="85%" y1="25%" x2="82%" y2="30%" stroke="rgba(201, 169, 110, 0.1)" strokeWidth="1" />
            <circle cx="82%" cy="30%" r="2" fill="rgba(201, 169, 110, 0.2)" />
          </g>
        </svg>
      </div>

      {/* Beaker decorations - floating with parallax */}
      <div ref={parallaxMedium} className="absolute top-20 left-10 beaker-outline opacity-15 hidden lg:block float-2" />
      <div className="absolute bottom-20 right-10 beaker-outline opacity-15 hidden lg:block float-4" style={{ transform: 'scale(0.9)' }} />

      {/* Subtle top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent">
        <span className="absolute left-1/3 top-1/2 w-2 h-2 bg-gold/30 rounded-full -translate-y-1/2" />
        <span className="absolute right-1/3 top-1/2 w-2 h-2 bg-gold/30 rounded-full -translate-y-1/2" />
      </div>

      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent opacity-30" />

      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        <motion.p
          variants={fadeUp}
          style={{ fontFamily: 'var(--font-body)' }}
          className="font-normal uppercase tracking-[0.25em] text-xs text-gold/90 mb-6"
        >
          Find Us
        </motion.p>

        <motion.h2
          variants={fadeUp}
          style={{ fontFamily: 'var(--font-display)' }}
          className="font-normal text-4xl sm:text-5xl md:text-7xl text-cream leading-tight tracking-wide"
        >
          Come In.
        </motion.h2>
        <motion.h2
          variants={fadeUp}
          style={{ fontFamily: 'var(--font-display)' }}
          className="font-normal italic text-4xl sm:text-5xl md:text-7xl text-gold leading-tight tracking-wide mt-2"
        >
          No Reservation Required.
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{ fontFamily: 'var(--font-body)' }}
          className="font-light text-base text-text-muted mt-8"
        >
          F-8, Islamabad, Pakistan · Indoor & Outdoor Seating · Free Parking
        </motion.p>

        <motion.div variants={fadeUp} className="mt-10">
          <motion.button
            onClick={handleDirections}
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-sm uppercase tracking-widest bg-gold text-espresso px-10 py-4 hover:bg-[#d4b67a] transition-all duration-300 inline-block shadow-xl shadow-gold/20 relative overflow-hidden group"
            whileHover={{ scale: 1.03, boxShadow: '0 20px 50px rgba(201, 169, 110, 0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">Get Directions →</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gold via-[#d4b67a] to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            {/* Molecular corner nodes */}
            <span className="absolute top-1 left-1 w-1.5 h-1.5 bg-espresso/50 rounded-full" />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-espresso/50 rounded-full" />
            <span className="absolute bottom-1 left-1 w-1.5 h-1.5 bg-espresso/50 rounded-full" />
            <span className="absolute bottom-1 right-1 w-1.5 h-1.5 bg-espresso/50 rounded-full" />
          </motion.button>
        </motion.div>

        {/* Promo badge with chemical styling */}
        <motion.div variants={fadeUp} className="mt-8">
          <div className="inline-block element-card px-6 py-2.5 relative">
            <span
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-xs uppercase tracking-[0.2em] text-gold/90"
            >
              50% off with JazzCash card
            </span>
            {/* Chemical formula decoration */}
            <span className="chemical-formula absolute -top-2 -right-2 text-[8px] text-gold/30">
              50%
            </span>
          </div>
        </motion.div>

        {/* Decorative molecular bond line */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-4 mt-20"
        >
          <span className="w-2 h-2 bg-gold/20 rounded-full" />
          <span className="w-16 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <span className="w-2 h-2 bg-gold/30 rounded-full" />
          <span className="w-16 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <span className="w-2 h-2 bg-gold/20 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
