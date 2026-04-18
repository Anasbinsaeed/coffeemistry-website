import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useParallax } from '../hooks/useParallax'

const espressoBased = [
  { name: 'Espresso', size: '1.5 oz', desc: 'Liquid Gold', price: '450', formula: 'C₈H₁₀N₄O₂' },
  { name: 'Piccolo', size: '3 oz', desc: 'A baby Latte', price: '470', formula: 'C₁₂H₂₂O₁₁' },
  { name: 'Cortado', size: '4 oz', desc: 'A more concentrated latte', price: '580', formula: 'Ca²⁺' },
  { name: 'Cappuccino', size: '8 oz', desc: 'The OG milk drink', price: '620', formula: 'H₂O + C₈' },
  { name: 'Latte', size: '8 oz', desc: 'Creamy milky goodness', price: '620', formula: 'C₆H₁₂O₆' },
  { name: 'Flat White', size: '8 oz', desc: 'The greatest kiwi gift to coffee', price: '620', formula: 'C₇H₈N₄O₂' },
  { name: 'Spanish Latte', size: '8 oz', desc: 'A sweeter, creamier latte', price: '680', formula: 'C₁₂H₂₂O₁₁' },
  { name: 'Mocha', size: '8 oz', desc: 'A delicious blend of chocolate and coffee', price: '680', formula: 'C₇H₈N₄O₂' },
  { name: 'Iced Latte', size: '12 oz', desc: 'The perfect summer coffee', price: '680', formula: 'H₂O(s)' },
  { name: 'Iced Spanish Latte', size: '12 oz', desc: 'An iced, irresistible treat', price: '750', formula: 'H₂O(l)' },
  { name: 'Iced Mocha', size: '12 oz', desc: 'Iced chocolaty heaven', price: '750', formula: 'C₆H₈O₇' },
]

const slowBar = [
  { name: 'Classic', method: 'V60, Aeropress, Chemex', desc: 'A blend for those who prefer a lighter yet floral coffee', price: '680', formula: 'C₈H₁₀N₄O₂' },
  { name: 'Signature', method: 'V60, Aeropress, Chemex', desc: 'A Single Origin coffee that shines in Pourover methods', price: '750', formula: 'C₆H₈O₇' },
]

const notCoffee = [
  { name: 'Hot Chocolate', size: '8 oz', desc: 'Creamy rich concoction of the finest chocolate and milk', price: '580', formula: 'C₇H₈N₄O₂' },
  { name: 'Iced Chocolate', size: '12 oz', desc: 'Iced chocolaty heaven', price: '620', formula: 'C₁₂H₂₂O₁₁' },
  { name: 'Cascara', size: '12 oz', desc: 'A refreshing tea made from the coffee cherry', price: '790', formula: 'C₆H₁₂O₆' },
]

const extras = [
  { name: 'Extra Shot', desc: 'Add an extra shot of espresso to any drink', price: '400', formula: 'C₈H₁₀N₄O₂' },
]

const grid = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
}

const card = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function Menu() {
  const [tab, setTab] = useState('espresso')
  const parallaxSlow = useParallax(0.3)

  const getItems = () => {
    switch (tab) {
      case 'espresso': return espressoBased
      case 'slowbar': return slowBar
      case 'notcoffee': return notCoffee
      case 'extras': return extras
      default: return espressoBased
    }
  }

  const items = getItems()

  return (
    <section id="menu" className="bg-coffee-black py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
      {/* Molecular nodes background - floating with parallax */}
      <div ref={parallaxSlow} className="molecular-nodes float-5" />

      {/* Subtle top gradient divider with nodes */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/15 to-transparent">
        <span className="absolute left-1/3 top-1/2 w-2 h-2 bg-gold/30 rounded-full -translate-y-1/2" />
        <span className="absolute right-1/3 top-1/2 w-2 h-2 bg-gold/30 rounded-full -translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p
            style={{ fontFamily: 'var(--font-body)' }}
            className="font-normal uppercase tracking-[0.25em] text-xs text-gold/90 mb-6"
          >
            Our Offerings
          </p>
          <h2
            style={{ fontFamily: 'var(--font-display)' }}
            className="font-normal text-3xl sm:text-4xl md:text-5xl text-cream tracking-wide"
          >
            The Menu. Elevated.
          </h2>
        </motion.div>

        {/* Tabs with molecular decoration */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 mb-16">
          {[
            { id: 'espresso', label: 'Espresso Based' },
            { id: 'slowbar', label: 'Slow Bar' },
            { id: 'notcoffee', label: 'Not Coffee' },
            { id: 'extras', label: 'Extras' }
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              style={{ fontFamily: 'var(--font-body)' }}
              className={`text-xs uppercase tracking-[0.2em] pb-3 transition-all duration-300 relative ${tab === t.id
                ? 'text-cream'
                : 'text-text-muted hover:text-cream'
                }`}
            >
              {t.label}
              {tab === t.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold to-transparent"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                >
                  {/* Molecular nodes on active tab */}
                  <span className="absolute left-0 top-1/2 w-2 h-2 bg-gold/40 rounded-full -translate-y-1/2" />
                  <span className="absolute right-0 top-1/2 w-2 h-2 bg-gold/40 rounded-full -translate-y-1/2" />
                </motion.div>
              )}
            </button>
          ))}
        </div>

        {/* Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={grid}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
          >
            {items.map((item, index) => (
              <motion.div
                key={item.name + index}
                variants={card}
                whileHover={{ y: -6 }}
                className="element-card p-6 flex flex-col transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 group relative overflow-hidden"
              >
                {/* Hexagonal pattern overlay */}
                <div className="absolute inset-0 hex-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10">
                  {/* Header with size/method and formula */}
                  <div className="flex items-start justify-between mb-3">
                    <span
                      style={{ fontFamily: 'var(--font-body)' }}
                      className="text-[10px] uppercase tracking-wider text-gold/50"
                    >
                      {item.size || item.method || '—'}
                    </span>
                    <span className="chemical-formula text-[9px] text-gold/40">
                      {item.formula}
                    </span>
                  </div>

                  <h3
                    style={{ fontFamily: 'var(--font-display)' }}
                    className="font-semibold text-2xl text-cream mb-2 group-hover:text-gold/95 transition-colors"
                  >
                    {item.name}
                  </h3>

                  <p
                    style={{ fontFamily: 'var(--font-body)' }}
                    className="font-light text-sm text-text-muted italic leading-relaxed flex-1 mb-4"
                  >
                    {item.desc}
                  </p>

                  {/* Price */}
                  <div className="flex items-center justify-between">
                    <span
                      style={{ fontFamily: 'var(--font-display)' }}
                      className="text-xl text-gold font-semibold"
                    >
                      {item.price}
                    </span>
                    <span
                      style={{ fontFamily: 'var(--font-body)' }}
                      className="text-xs text-gold/60 uppercase tracking-wider"
                    >
                      PKR
                    </span>
                  </div>

                  {/* Molecular bond divider */}
                  <div className="w-full h-px bg-gradient-to-r from-gold/0 via-gold/10 to-gold/0 mt-4 group-hover:via-gold/20 transition-colors relative">
                    <span className="absolute left-1/4 top-1/2 w-1.5 h-1.5 bg-gold/20 rounded-full -translate-y-1/2" />
                    <span className="absolute right-1/4 top-1/2 w-1.5 h-1.5 bg-gold/20 rounded-full -translate-y-1/2" />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Note about prices */}
        <motion.p
          className="text-center mt-12 text-xs text-text-muted/60 italic"
          style={{ fontFamily: 'var(--font-body)' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          All prices in Pakistani Rupees (PKR)
        </motion.p>

      </div>
    </section>
  )
}
