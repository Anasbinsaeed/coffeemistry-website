import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu as MenuIcon, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Beans', href: '#beans' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-espresso/30 backdrop-blur-md border-b border-gold/10'
          : 'bg-transparent'
          }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {/* Chemical bond lines decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
          <svg className="absolute top-0 left-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
            {/* Molecular structure lines */}
            <line x1="0" y1="50%" x2="15%" y2="50%" stroke="rgba(201, 169, 110, 0.2)" strokeWidth="1" />
            <circle cx="15%" cy="50%" r="3" fill="rgba(201, 169, 110, 0.3)" />
            <line x1="15%" y1="50%" x2="25%" y2="50%" stroke="rgba(201, 169, 110, 0.2)" strokeWidth="1" />

            <line x1="75%" y1="50%" x2="85%" y2="50%" stroke="rgba(201, 169, 110, 0.2)" strokeWidth="1" />
            <circle cx="85%" cy="50%" r="3" fill="rgba(201, 169, 110, 0.3)" />
            <line x1="85%" y1="50%" x2="100%" y2="50%" stroke="rgba(201, 169, 110, 0.2)" strokeWidth="1" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between h-20 relative z-10">
          <a
            href="#"
            className="flex items-center hover:opacity-80 transition-opacity relative"
          >
            <img
              src="/coffeemistry-logo-white.png"
              alt="Coffeemistry"
              className="h-8 md:h-10 w-auto"
            />
            {/* Chemical formula subtitle */}
            <span className="chemical-formula absolute -bottom-3 left-0 text-[8px] opacity-50">
              C₈H₁₀N₄O₂
            </span>
          </a>

          <div className="hidden md:flex items-center gap-10">
            {links.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                style={{ fontFamily: 'var(--font-body)' }}
                className="text-xs uppercase tracking-widest text-cream hover:text-gold transition-colors duration-300 relative group"
              >
                {link.label}
                {/* Molecular bond underline */}
                <span className="absolute -bottom-2 left-0 w-0 h-px bg-gold transition-all duration-300 group-hover:w-full" />
                <span className="absolute -bottom-2 left-0 w-2 h-2 rounded-full bg-gold/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transform: 'translate(-50%, 50%)' }} />
              </a>
            ))}
            <a
              href="#visit"
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-xs uppercase tracking-widest text-gold border border-gold/40 px-5 py-2.5 hover:bg-gold hover:text-espresso transition-all duration-300 relative overflow-hidden group backdrop-blur-sm"
            >
              <span className="relative z-10">Find Us</span>
              <span className="absolute inset-0 bg-gold transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              {/* Corner molecular nodes */}
              <span className="absolute top-0 left-0 w-1 h-1 bg-gold/50 rounded-full" />
              <span className="absolute top-0 right-0 w-1 h-1 bg-gold/50 rounded-full" />
              <span className="absolute bottom-0 left-0 w-1 h-1 bg-gold/50 rounded-full" />
              <span className="absolute bottom-0 right-0 w-1 h-1 bg-gold/50 rounded-full" />
            </a>
          </div>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-cream hover:text-gold transition-colors"
            aria-label="Open menu"
          >
            <MenuIcon size={24} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-coffee-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-10 hex-pattern"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Chemical structure background */}
            <div className="molecular-nodes" />

            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-cream hover:text-gold transition-colors z-10"
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

            <a
              href="#"
              className="flex flex-col items-center"
              onClick={() => setMobileOpen(false)}
            >
              <img
                src="/coffeemistry-logo-white.png"
                alt="Coffeemistry"
                className="h-12 w-auto mb-2"
              />
              <span className="chemical-formula text-[10px]">C₈H₁₀N₄O₂ · Caffeine</span>
            </a>

            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold to-transparent opacity-30 relative">
              <span className="absolute left-0 top-1/2 w-2 h-2 bg-gold/30 rounded-full -translate-y-1/2" />
              <span className="absolute right-0 top-1/2 w-2 h-2 bg-gold/30 rounded-full -translate-y-1/2" />
            </div>

            {links.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                style={{ fontFamily: 'var(--font-body)' }}
                className="text-sm uppercase tracking-widest text-cream hover:text-gold transition-colors"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.08 }}
              >
                {link.label}
              </motion.a>
            ))}

            <a
              href="#visit"
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-xs uppercase tracking-widest text-gold border border-gold/40 px-8 py-3 hover:bg-gold hover:text-espresso transition-all duration-300 mt-4 backdrop-blur-sm"
              onClick={() => setMobileOpen(false)}
            >
              Find Us
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
