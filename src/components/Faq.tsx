import { useState } from 'react'
import { motion } from 'motion/react'
import { faqs, hero } from '../data/content'
import Reveal from './Reveal'
import GradientBackdrop from './GradientBackdrop'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative overflow-hidden py-24">
      <GradientBackdrop />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start lg:gap-16">
          <Reveal>
            <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              Frequently asked questions
            </h2>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#book-demo"
                className="rounded-full bg-purple px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-purple-dark"
              >
                {hero.primaryCta}
              </a>
              <a
                href="#book-demo"
                className="rounded-full border border-purple px-6 py-3 text-sm font-semibold text-purple transition-colors hover:bg-purple-faint"
              >
                {hero.secondaryCta}
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-4">
            {faqs.map((item, i) => {
              const isOpen = open === i
              return (
                <div
                  key={item.q}
                  className={`overflow-hidden rounded-2xl border transition-colors ${
                    isOpen ? 'border-purple/25 bg-purple-faint' : 'border-sage/40 bg-white'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-ink sm:text-base">{item.q}</span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-purple"
                    >
                      +
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                    aria-hidden={!isOpen}
                  >
                    <p className="px-6 pb-5 text-sm leading-relaxed text-ink-soft">{item.a}</p>
                  </motion.div>
                </div>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
