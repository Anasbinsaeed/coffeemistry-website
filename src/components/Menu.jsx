import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Coffee } from 'lucide-react'
import { useParallax } from '../hooks/useParallax'

// Import menu item images
import espressoImg from '../assets/menu items/espresso.webp'
import piccoloImg from '../assets/menu items/piccolo.webp'
import cortadoImg from '../assets/menu items/cortado.jpg'
import cappuccinoImg from '../assets/menu items/cappiccino.webp'
import latteImg from '../assets/menu items/latte.jpg'
import flatWhiteImg from '../assets/menu items/flat white.avif'
import spanishLatteImg from '../assets/menu items/spanish latte.jpg'
import mochaImg from '../assets/menu items/mocha.jpg'
import icedLatteImg from '../assets/menu items/iced latte.jpg'
import icedSpanishLatteImg from '../assets/menu items/iced spanish latte.webp'
import icedMochaImg from '../assets/menu items/iced mocha.jpg'
import classicImg from '../assets/menu items/classic.jpg'
import signatureImg from '../assets/menu items/signature.avif'
import hotChocolateImg from '../assets/menu items/hot chocolate.jpg'
import icedChocolateImg from '../assets/menu items/iced chocolate.webp'
import cascaraImg from '../assets/menu items/cascara.jpg'

const espressoBased = [
  { name: 'Espresso', size: '1.5 oz', desc: 'Liquid Gold', price: '450', formula: 'C₈H₁₀N₄O₂', image: espressoImg },
  { name: 'Piccolo', size: '3 oz', desc: 'A baby Latte', price: '470', formula: 'C₁₂H₂₂O₁₁', image: piccoloImg },
  { name: 'Cortado', size: '4 oz', desc: 'A more concentrated latte', price: '580', formula: 'Ca²⁺', image: cortadoImg },
  { name: 'Cappuccino', size: '8 oz', desc: 'The OG milk drink', price: '620', formula: 'H₂O + C₈', image: cappuccinoImg },
  { name: 'Latte', size: '8 oz', desc: 'Creamy milky goodness', price: '620', formula: 'C₆H₁₂O₆', image: latteImg },
  { name: 'Flat White', size: '8 oz', desc: 'The greatest kiwi gift to coffee', price: '620', formula: 'C₇H₈N₄O₂', image: flatWhiteImg },
  { name: 'Spanish Latte', size: '8 oz', desc: 'A sweeter, creamier latte', price: '680', formula: 'C₁₂H₂₂O₁₁', image: spanishLatteImg },
  { name: 'Mocha', size: '8 oz', desc: 'A delicious blend of chocolate and coffee', price: '680', formula: 'C₇H₈N₄O₂', image: mochaImg },
  { name: 'Iced Latte', size: '12 oz', desc: 'The perfect summer coffee', price: '680', formula: 'H₂O(s)', image: icedLatteImg },
  { name: 'Iced Spanish Latte', size: '12 oz', desc: 'An iced, irresistible treat', price: '750', formula: 'H₂O(l)', image: icedSpanishLatteImg },
  { name: 'Iced Mocha', size: '12 oz', desc: 'Iced chocolaty heaven', price: '750', formula: 'C₆H₈O₇', image: icedMochaImg },
]

const slowBar = [
  { name: 'Classic', method: 'V60, Aeropress, Chemex', desc: 'A blend for those who prefer a lighter yet floral coffee', price: '680', formula: 'C₈H₁₀N₄O₂', image: classicImg },
  { name: 'Signature', method: 'V60, Aeropress, Chemex', desc: 'A Single Origin coffee that shines in Pourover methods', price: '750', formula: 'C₆H₈O₇', image: signatureImg },
]

const notCoffee = [
  { name: 'Hot Chocolate', size: '8 oz', desc: 'Creamy rich concoction of the finest chocolate and milk', price: '580', formula: 'C₇H₈N₄O₂', image: hotChocolateImg },
  { name: 'Iced Chocolate', size: '12 oz', desc: 'Iced chocolaty heaven', price: '620', formula: 'C₁₂H₂₂O₁₁', image: icedChocolateImg },
  { name: 'Cascara', size: '12 oz', desc: 'A refreshing tea made from the coffee cherry', price: '790', formula: 'C₆H₁₂O₆', image: cascaraImg },
]

const extras = [
  { name: 'Extra Shot', desc: 'Add an extra shot of espresso to any drink', price: '400', formula: 'C₈H₁₀N₄O₂', image: null },
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
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="bg-espresso/40 backdrop-blur-sm border border-gold/10 hover:border-gold/30 hover:shadow-xl hover:shadow-gold/10 transition-all duration-300 group relative overflow-hidden"
              >
                {/* Hexagonal pattern overlay */}
                <div className="absolute inset-0 hex-pattern opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Image with fixed overlay */}
                <div className="relative w-full h-56 overflow-hidden">
                  {/* Image layer */}
                  <div className="absolute inset-0">
                    {item.image ? (
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-roast to-espresso">
                        <Coffee className="text-gold/30" size={64} strokeWidth={1} />
                      </div>
                    )}
                  </div>

                  {/* Fixed gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso via-espresso/60 to-transparent z-10" />

                  {/* Content overlay on image */}
                  <div className="absolute inset-0 z-20 p-5 flex flex-col justify-end">
                    <div className="flex items-end justify-between">
                      <div>
                        <h3
                          style={{ fontFamily: 'var(--font-display)' }}
                          className="font-semibold text-2xl text-cream mb-1 group-hover:text-gold/95 transition-colors"
                        >
                          {item.name}
                        </h3>
                        <span
                          style={{ fontFamily: 'var(--font-body)' }}
                          className="text-[10px] uppercase tracking-wider text-gold/60"
                        >
                          {item.size || item.method || '—'}
                        </span>
                      </div>
                      <div className="text-right">
                        <div
                          style={{ fontFamily: 'var(--font-display)' }}
                          className="text-2xl text-gold font-semibold"
                        >
                          {item.price}
                        </div>
                        <span
                          style={{ fontFamily: 'var(--font-body)' }}
                          className="text-[9px] text-gold/50 uppercase tracking-wider"
                        >
                          PKR
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description section */}
                <div className="relative z-10 p-5 bg-espresso/60 backdrop-blur-sm">
                  <p
                    style={{ fontFamily: 'var(--font-body)' }}
                    className="font-light text-sm text-text-muted italic leading-relaxed mb-3"
                  >
                    {item.desc}
                  </p>

                  {/* Chemical formula badge */}
                  <div className="flex items-center justify-between">
                    <span className="chemical-formula text-[10px] text-gold/40">
                      {item.formula}
                    </span>
                    <div className="flex gap-1">
                      <span className="w-1 h-1 bg-gold/20 rounded-full" />
                      <span className="w-1 h-1 bg-gold/30 rounded-full" />
                      <span className="w-1 h-1 bg-gold/20 rounded-full" />
                    </div>
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
