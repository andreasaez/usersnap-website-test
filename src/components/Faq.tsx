import { useState } from 'react'
import { motion } from 'motion/react'
import { faqs } from '../data/content'
import Reveal from './Reveal'
import GradientBackdrop from './GradientBackdrop'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section id="faq" className="relative overflow-hidden py-24">
      <GradientBackdrop />
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
        </Reveal>

        <div className="mt-12 flex flex-col gap-4">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <Reveal key={item.q} delay={i * 0.05}>
                <div className="rounded-2xl border border-sage/40 bg-gradient-to-b from-purple-faint to-white shadow-[0_16px_40px_-24px_rgba(58,33,192,0.18)] backdrop-blur-sm">
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
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-faint text-purple"
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
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
