import { motion } from 'framer-motion'
import { Zap, Circle, Layers } from 'lucide-react'
import { useParallax } from '../hooks/useParallax'

const beans = [
  {
    Icon: Zap,
    title: 'Bright & Fruity',
    subtitle: 'High acidity · Light body · Floral & citrus notes',
    origin: 'Think: Ethiopian Yirgacheffe',
    featured: false,
    ph: 'pH 4.85',
    compound: 'C₆H₈O₇'
  },
  {
    Icon: Circle,
    title: 'Balanced & Nutty',
    subtitle: 'Medium acidity · Full body · Caramel & almond',
    origin: 'Think: Colombian Huila',
    featured: true,
    ph: 'pH 5.05',
    compound: 'C₁₂H₂₂O₁₁'
  },
  {
    Icon: Layers,
    title: 'Deep & Chocolatey',
    subtitle: 'Low acidity · Heavy body · Dark cocoa & molasses',
    origin: 'Think: Sumatra Mandheling',
    featured: false,
    ph: 'pH 5.25',
    compound: 'C₇H₈N₄O₂'
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

export default function BeanSelection() {
  const parallaxSlow = useParallax(0.3)
  const parallaxMedium = useParallax(0.5)

  return (
    <section id="beans" className="bg-espresso py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
      {/* Beaker decorations - floating with parallax */}
      <div ref={parallaxSlow} className="absolute top-10 right-20 beaker-outline opacity-20 hidden xl:block float-2" />
      <div ref={parallaxMedium} className="absolute bottom-20 left-16 beaker-outline opacity-15 hidden xl:block float-4" style={{ transform: 'scale(0.7)' }} />

      {/* Subtle top gradient divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent">
        <span className="absolute left-1/4 top-1/2 w-2 h-2 bg-gold/30 rounded-full -translate-y-1/2" />
        <span className="absolute right-1/4 top-1/2 w-2 h-2 bg-gold/30 rounded-full -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

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
            The Coffeemistry Difference
          </p>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="font-normal text-3xl sm:text-4xl md:text-6xl text-cream tracking-wide leading-tight"
          >
            Choose Your Origin.
            <br />
            Taste the Difference.
          </h2>
          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="font-light text-base text-text-muted max-w-2xl mx-auto mt-6 leading-relaxed"
          >
            Unlike anywhere else in Islamabad, you choose your bean first. Our
            baristas walk you through origin, acidity, body, and finish — and
            every note they describe is exactly what lands in your cup. Dedicated
            grinders per bean. No cross-contamination. Total flavor clarity.
          </p>
        </motion.div>

        {/* Bean Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start"
          variants={grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {beans.map((bean) => (
            <motion.div
              key={bean.title}
              variants={fadeUp}
              whileHover={{ y: -6, scale: 1.02 }}
              className={`element-card p-8 text-center flex flex-col items-center transition-all duration-300 group relative overflow-hidden ${bean.featured
                ? 'border-t-2 border-t-gold border-x-gold/25 border-b-gold/25 md:-mt-4 md:pb-12 md:pt-10 shadow-xl shadow-gold/10'
                : 'hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5'
                }`}
            >
              {/* Hexagonal pattern on hover */}
              <div className="absolute inset-0 hex-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10 w-full">
                {/* pH indicator */}
                <div className="absolute top-0 right-0 chemical-formula text-[9px] text-gold/40">
                  {bean.ph}
                </div>

                {/* Icon with molecular glow */}
                <div className="w-14 h-14 flex items-center justify-center mb-6 mx-auto relative">
                  <div className="absolute inset-0 bg-gold/5 rounded-full blur-xl group-hover:bg-gold/10 transition-colors" />
                  {/* Molecular orbit rings */}
                  <div className="absolute inset-0 border border-gold/10 rounded-full group-hover:border-gold/20 transition-colors" />
                  <div className="absolute inset-2 border border-gold/5 rounded-full group-hover:border-gold/15 transition-colors" />
                  <bean.Icon className="text-gold relative z-10 group-hover:scale-110 transition-transform" size={30} strokeWidth={1.5} />
                </div>

                <h3
                  style={{ fontFamily: 'var(--font-display)' }}
                  className="font-semibold text-2xl text-cream mb-4 group-hover:text-gold/95 transition-colors"
                >
                  {bean.title}
                </h3>
                <p
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="font-light text-sm text-text-muted leading-relaxed mb-4"
                >
                  {bean.subtitle}
                </p>
                <p
                  style={{ fontFamily: 'var(--font-body)' }}
                  className="font-light text-xs text-gold/70 italic mb-3"
                >
                  {bean.origin}
                </p>

                {/* Chemical compound */}
                <div className="chemical-formula text-[10px] text-gold/50 mb-4">
                  {bean.compound}
                </div>

                {bean.featured && (
                  <span
                    style={{ fontFamily: 'var(--font-body)' }}
                    className="mt-2 text-[10px] uppercase tracking-[0.2em] text-gold/70 border border-gold/30 px-3 py-1.5 bg-gold/5 inline-block"
                  >
                    Most Popular
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tagline with molecular decoration */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 bg-gold/30 rounded-full" />
              <span className="w-8 h-px bg-gold/20" />
            </div>
            <p
              style={{ fontFamily: 'var(--font-display)' }}
              className="italic text-xl text-cream max-w-xl"
            >
              Tell us what you love. We'll find the bean.
            </p>
            <div className="flex items-center gap-1">
              <span className="w-8 h-px bg-gold/20" />
              <span className="w-2 h-2 bg-gold/30 rounded-full" />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
