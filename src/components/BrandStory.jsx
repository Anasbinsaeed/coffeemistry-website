import { motion } from 'framer-motion'

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
}

const childFade = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const leftContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const photographyUrl = `${import.meta.env.BASE_URL}photography.jpg`

export default function BrandStory() {
  return (
    <section id="story" className="bg-espresso py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
      {/* Subtle top gradient divider with molecular nodes */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent">
        <span className="absolute left-1/4 top-1/2 w-2 h-2 bg-gold/30 rounded-full -translate-y-1/2" />
        <span className="absolute right-1/4 top-1/2 w-2 h-2 bg-gold/30 rounded-full -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">

        {/* Left */}
        <motion.div
          variants={leftContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.p
            variants={childFade}
            style={{ fontFamily: 'var(--font-body)' }}
            className="font-normal uppercase tracking-[0.25em] text-xs text-gold/90 mb-6"
          >
            Our Philosophy
          </motion.p>

          <motion.h2
            variants={childFade}
            style={{ fontFamily: 'var(--font-display)' }}
            className="font-normal text-3xl sm:text-4xl md:text-5xl text-cream leading-tight tracking-wide mb-8"
          >
            We Don't Just Make Coffee. We Respect It.
          </motion.h2>

          <motion.div variants={childFade} className="space-y-4">
            <p
              style={{ fontFamily: 'var(--font-body)' }}
              className="font-light text-base text-text-muted leading-relaxed"
            >
              Every decision at Coffeemistry — from the single-origin beans we
              source to the dedicated grinders assigned per origin — is made with
              one obsession: clarity in the cup.
            </p>
            <p
              style={{ fontFamily: 'var(--font-body)' }}
              className="font-light text-base text-text-muted leading-relaxed"
            >
              You don't order 'a coffee' here. You choose a flavor profile.
              Bright and fruity from Ethiopia. Deep and chocolatey from Colombia.
              We dial it in on state-of-the-art espresso machines and tell you
              exactly what you're tasting — because our baristas know, and
              they're right.
            </p>
          </motion.div>

          <motion.div variants={childFade} className="w-full h-px bg-gradient-to-r from-gold/0 via-gold/15 to-gold/0 my-8" />

          {/* Trust stats */}
          <motion.div
            variants={childFade}
            className="flex flex-wrap items-center gap-y-2"
          >
            <span
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-xs uppercase tracking-[0.15em] text-gold/90"
            >
              4.4 ★ Google Rating
            </span>
            <span className="hidden md:block w-px h-4 bg-gold/30 mx-5" />
            <span
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-xs uppercase tracking-[0.15em] text-gold/90"
            >
              20+ Reviews
            </span>
            <span className="hidden md:block w-px h-4 bg-gold/30 mx-5" />
            <span
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-xs uppercase tracking-[0.15em] text-gold/90"
            >
              F-8, Islamabad
            </span>
          </motion.div>
        </motion.div>

        {/* Right — image */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative group"
        >
          <div className="aspect-[3/4] bg-roast/80 backdrop-blur-sm border border-gold/10 flex items-center justify-center overflow-hidden group-hover:border-gold/25 transition-all duration-500">
            <img
              src={photographyUrl}
              alt="Coffee Photography"
              className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
            />
          </div>
          {/* Subtle glow effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
        </motion.div>

      </div>
    </section>
  )
}
