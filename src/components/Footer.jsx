import { motion } from 'framer-motion'

const footerLinks = [
  { label: 'About', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Our Beans', href: '#beans' },
  { label: 'Instagram', href: 'https://instagram.com/coffeemistrypk', external: true },
]

export default function Footer() {
  return (
    <footer className="bg-coffee-black border-t border-gold/10 py-16 px-6 md:px-10 relative overflow-hidden">
      {/* Chemical structure background */}
      <div className="chemical-lines opacity-50" />

      {/* Subtle gradient line with molecular nodes */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent">
        <span className="absolute left-1/4 top-1/2 w-2 h-2 bg-gold/20 rounded-full -translate-y-1/2" />
        <span className="absolute left-1/2 top-1/2 w-2 h-2 bg-gold/30 rounded-full -translate-y-1/2" />
        <span className="absolute right-1/4 top-1/2 w-2 h-2 bg-gold/20 rounded-full -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">

        {/* Logo + tagline + chemical formula */}
        <div>
          <a
            href="#"
            className="inline-flex flex-col items-center hover:opacity-80 transition-opacity"
          >
            <img
              src="coffeemistry-logo-white.png"
              alt="Coffeemistry"
              className="h-10 w-auto mb-2"
            />
            <span className="chemical-formula text-[9px] text-gold/40">
              C₈H₁₀N₄O₂ · Precision Brewing
            </span>
          </a>
          <p
            style={{ fontFamily: 'var(--font-display)' }}
            className="italic text-sm text-text-muted mt-4"
          >
            Where every cup is an experiment worth repeating.
          </p>
        </div>

        {/* Nav links with molecular decoration */}
        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
          {footerLinks.map((link, i) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              style={{ fontFamily: 'var(--font-body)' }}
              className="text-xs uppercase tracking-[0.2em] text-text-muted hover:text-gold transition-colors duration-300 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gold/50 transition-all duration-300 group-hover:w-full" />
              {/* Molecular node */}
              <span className="absolute -bottom-1 left-0 w-1.5 h-1.5 bg-gold/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ transform: 'translate(-50%, 50%)' }} />
            </a>
          ))}
        </div>

        {/* Copyright with molecular divider */}
        <div className="pt-4">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-2 h-2 bg-gold/20 rounded-full" />
            <span className="w-12 h-px bg-gold/10" />
            <span className="w-2 h-2 bg-gold/30 rounded-full" />
            <span className="w-12 h-px bg-gold/10" />
            <span className="w-2 h-2 bg-gold/20 rounded-full" />
          </div>
          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="text-xs text-text-muted/50"
          >
            © {new Date().getFullYear()} Coffeemistry · F-8, Islamabad
          </p>
        </div>

      </div>
    </footer>
  )
}
