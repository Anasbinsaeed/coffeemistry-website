import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useParallax } from '../hooks/useParallax'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
}

const logoFade = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
}

export default function Hero() {
  const parallaxSlow = useParallax(0.3)
  const parallaxMedium = useParallax(0.5)
  const parallaxFast = useParallax(0.7)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-coffee-black px-6 overflow-hidden"
    >
      {/* Chemical molecular structure background - floating with parallax */}
      <div ref={parallaxSlow} className="absolute inset-0 opacity-40">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          {/* Caffeine molecule structure (simplified) - main floating */}
          <g stroke="rgba(201, 169, 110, 0.15)" strokeWidth="1" fill="none" className="float-1">
            <polygon points="400,300 450,330 450,390 400,420 350,390 350,330" />
            <polygon points="450,330 500,330 520,380 490,420 450,390" />
            <line x1="400" y1="300" x2="400" y2="250" />
            <line x1="350" y1="330" x2="300" y2="310" />
            <line x1="350" y1="390" x2="300" y2="410" />
            <line x1="500" y1="330" x2="550" y2="310" />
            <line x1="520" y1="380" x2="560" y2="400" />
          </g>

          {/* Molecular nodes with pulse */}
          <circle cx="400" cy="300" r="4" fill="rgba(201, 169, 110, 0.3)" className="pulse-slow" />
          <circle cx="450" cy="330" r="4" fill="rgba(201, 169, 110, 0.3)" />
          <circle cx="450" cy="390" r="4" fill="rgba(201, 169, 110, 0.3)" />
          <circle cx="400" cy="420" r="4" fill="rgba(201, 169, 110, 0.3)" className="pulse-slow" />
          <circle cx="350" cy="390" r="4" fill="rgba(201, 169, 110, 0.3)" />
          <circle cx="350" cy="330" r="4" fill="rgba(201, 169, 110, 0.3)" />
          <circle cx="500" cy="330" r="4" fill="rgba(201, 169, 110, 0.3)" className="pulse-slow" />
          <circle cx="520" cy="380" r="4" fill="rgba(201, 169, 110, 0.3)" />
          <circle cx="490" cy="420" r="4" fill="rgba(201, 169, 110, 0.3)" />

          {/* Small molecule cluster - top left - floating */}
          <g opacity="0.5" className="float-2">
            <circle cx="150" cy="200" r="3" fill="rgba(201, 169, 110, 0.2)" />
            <line x1="150" y1="200" x2="180" y2="220" stroke="rgba(201, 169, 110, 0.1)" strokeWidth="1" />
            <circle cx="180" cy="220" r="3" fill="rgba(201, 169, 110, 0.2)" />
            <line x1="180" y1="220" x2="200" y2="200" stroke="rgba(201, 169, 110, 0.1)" strokeWidth="1" />
            <circle cx="200" cy="200" r="3" fill="rgba(201, 169, 110, 0.2)" />
          </g>

          {/* Small molecule cluster - bottom right - floating */}
          <g opacity="0.5" className="float-3">
            <circle cx="700" cy="500" r="3" fill="rgba(201, 169, 110, 0.2)" />
            <line x1="700" y1="500" x2="730" y2="480" stroke="rgba(201, 169, 110, 0.1)" strokeWidth="1" />
            <circle cx="730" cy="480" r="3" fill="rgba(201, 169, 110, 0.2)" />
            <line x1="730" y1="480" x2="750" y2="500" stroke="rgba(201, 169, 110, 0.1)" strokeWidth="1" />
            <circle cx="750" cy="500" r="3" fill="rgba(201, 169, 110, 0.2)" />
          </g>

          {/* Benzene ring - top right - floating */}
          <g opacity="0.4" className="float-4">
            <polygon points="800,150 830,165 830,195 800,210 770,195 770,165" stroke="rgba(201, 169, 110, 0.12)" strokeWidth="1" fill="none" />
            <circle cx="800" cy="150" r="2" fill="rgba(201, 169, 110, 0.2)" />
            <circle cx="830" cy="165" r="2" fill="rgba(201, 169, 110, 0.2)" />
            <circle cx="830" cy="195" r="2" fill="rgba(201, 169, 110, 0.2)" />
            <circle cx="800" cy="210" r="2" fill="rgba(201, 169, 110, 0.2)" />
            <circle cx="770" cy="195" r="2" fill="rgba(201, 169, 110, 0.2)" />
            <circle cx="770" cy="165" r="2" fill="rgba(201, 169, 110, 0.2)" />
          </g>

          {/* Small molecule - bottom left - floating */}
          <g opacity="0.4" className="float-5">
            <circle cx="100" cy="600" r="3" fill="rgba(201, 169, 110, 0.2)" />
            <line x1="100" y1="600" x2="120" y2="590" stroke="rgba(201, 169, 110, 0.1)" strokeWidth="1" />
            <circle cx="120" cy="590" r="2" fill="rgba(201, 169, 110, 0.2)" />
            <line x1="100" y1="600" x2="120" y2="610" stroke="rgba(201, 169, 110, 0.1)" strokeWidth="1" />
            <circle cx="120" cy="610" r="2" fill="rgba(201, 169, 110, 0.2)" />
          </g>

          {/* Water molecule H2O - middle left - floating */}
          <g opacity="0.4" className="float-1" style={{ transformOrigin: '250px 400px' }}>
            <circle cx="250" cy="400" r="4" fill="rgba(201, 169, 110, 0.25)" />
            <line x1="250" y1="400" x2="235" y2="385" stroke="rgba(201, 169, 110, 0.12)" strokeWidth="1" />
            <circle cx="235" cy="385" r="2" fill="rgba(201, 169, 110, 0.2)" />
            <line x1="250" y1="400" x2="265" y2="385" stroke="rgba(201, 169, 110, 0.12)" strokeWidth="1" />
            <circle cx="265" cy="385" r="2" fill="rgba(201, 169, 110, 0.2)" />
          </g>

          {/* CO2 molecule - middle right - floating */}
          <g opacity="0.4" className="float-3">
            <circle cx="650" cy="350" r="3" fill="rgba(201, 169, 110, 0.2)" />
            <line x1="650" y1="350" x2="670" y2="350" stroke="rgba(201, 169, 110, 0.12)" strokeWidth="1.5" />
            <circle cx="670" cy="350" r="2" fill="rgba(201, 169, 110, 0.2)" />
            <line x1="650" y1="350" x2="630" y2="350" stroke="rgba(201, 169, 110, 0.12)" strokeWidth="1.5" />
            <circle cx="630" cy="350" r="2" fill="rgba(201, 169, 110, 0.2)" />
          </g>
        </svg>
      </div>

      {/* Beaker outline decorations - floating with parallax */}
      <div ref={parallaxMedium} className="absolute top-20 right-10 beaker-outline opacity-30 hidden lg:block float-2" />
      <div ref={parallaxFast} className="absolute bottom-32 left-10 beaker-outline opacity-20 hidden lg:block float-3" style={{ transform: 'scale(0.8)' }} />
      <div className="absolute top-1/3 left-20 beaker-outline opacity-15 hidden xl:block float-4" style={{ transform: 'scale(0.6)' }} />

      {/* Radial gradient spotlight */}
      <div className="absolute inset-0 bg-gradient-radial from-gold/5 via-transparent to-transparent opacity-40" />

      <motion.div
        className="text-center max-w-4xl mx-auto relative z-10"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Logo + Chemical Formula */}
        <motion.div
          variants={logoFade}
          className="flex flex-col items-center mb-10 md:mb-12"
        >
          <div className="relative">
            <img
              src="coffeemistry-logo-white.png"
              alt="Coffeemistry"
              className="h-20 md:h-24 w-auto mb-4 relative z-10"
            />
            {/* Molecular glow */}
            <div className="absolute inset-0 blur-3xl bg-gold/10 scale-150" />
          </div>

          {/* Chemical formula badge */}
          <div className="element-card px-4 py-2 mb-6">
            <div className="flex items-center gap-3">
              <div className="text-center">
                <div className="chemical-formula text-[10px] text-gold/50">194.19</div>
                <div className="text-gold text-lg font-bold" style={{ fontFamily: 'var(--font-display)' }}>C</div>
                <div className="chemical-formula text-[9px] text-gold/40">Caffeine</div>
              </div>
              <div className="chemical-formula text-gold/60 text-sm">C₈H₁₀N₄O₂</div>
            </div>
          </div>

          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="font-normal uppercase tracking-[0.25em] text-xs text-gold/90"
          >
            Islamabad · F-8 · Specialty Coffee
          </p>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp}
          style={{ fontFamily: 'var(--font-display)' }}
          className="font-normal text-5xl sm:text-6xl md:text-8xl text-cream leading-none tracking-wide"
        >
          Coffee Is Chemistry.
        </motion.h1>
        <motion.h1
          variants={fadeUp}
          style={{ fontFamily: 'var(--font-display)' }}
          className="font-normal italic text-5xl sm:text-6xl md:text-8xl text-gold leading-none tracking-wide mt-1"
        >
          Ours Is Exact.
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          variants={fadeUp}
          style={{ fontFamily: 'var(--font-body)' }}
          className="font-light text-base md:text-lg text-text-muted max-w-md mx-auto mt-10 md:mt-12 leading-relaxed"
        >
          Islamabad's only specialty café where you choose your origin, taste
          your tasting notes, and experience the science of extraction —
          perfectly dialed in, every time.
        </motion.p>

        {/* Tagline - 4 lines, 1 word each */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-6 mt-8 md:mt-10"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-gold/30 rounded-full" />
            <span className="w-8 h-px bg-gold/20" />
          </div>

          <div
            style={{ fontFamily: 'var(--font-display)' }}
            className="text-gold/80 text-lg md:text-xl italic leading-tight text-center"
          >
            <div>let · coffee · connect · us</div>
          </div>

          <div className="flex items-center gap-2">
            <span className="w-8 h-px bg-gold/20" />
            <span className="w-2 h-2 bg-gold/30 rounded-full" />
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
        >
          <motion.a
            href="#menu"
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-sm uppercase tracking-widest bg-gold text-espresso px-8 py-4 hover:bg-[#d4b67a] transition-all duration-300 inline-block shadow-lg shadow-gold/20 relative"
            whileHover={{ scale: 1.03, boxShadow: '0 20px 40px rgba(201, 169, 110, 0.3)' }}
            whileTap={{ scale: 0.97 }}
          >
            Explore the Menu
            {/* Corner nodes */}
            <span className="absolute top-0 left-0 w-1.5 h-1.5 bg-espresso rounded-full" />
            <span className="absolute top-0 right-0 w-1.5 h-1.5 bg-espresso rounded-full" />
            <span className="absolute bottom-0 left-0 w-1.5 h-1.5 bg-espresso rounded-full" />
            <span className="absolute bottom-0 right-0 w-1.5 h-1.5 bg-espresso rounded-full" />
          </motion.a>
          <motion.a
            href="#visit"
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-sm uppercase tracking-widest text-gold border border-gold/40 px-8 py-4 hover:bg-gold hover:text-espresso transition-all duration-300 inline-block relative overflow-hidden group backdrop-blur-sm"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <span className="relative z-10">Find Us in F-8</span>
            <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            {/* Molecular bond decoration */}
            <span className="absolute top-1/2 left-2 w-3 h-px bg-gold/30 -translate-y-1/2" />
            <span className="absolute top-1/2 right-2 w-3 h-px bg-gold/30 -translate-y-1/2" />
          </motion.a>
        </motion.div>
      </motion.div>

      {/* Bottom molecular bond line + scroll chevron */}
      <div className="absolute bottom-0 left-0 right-0 flex flex-col items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent relative">
        </div>
        <motion.div
          className="py-8"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="text-gold/60" size={20} />
        </motion.div>
      </div>
    </section>
  )
}
