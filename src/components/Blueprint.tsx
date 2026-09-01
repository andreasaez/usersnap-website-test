import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { blueprint } from '../data/content'
import Reveal from './Reveal'
import BlueprintStack from '../illustrations/BlueprintStack'
import GradientBackdrop from './GradientBackdrop'

const STEP_ACCENT = '#899ED7'

export default function Blueprint() {
  const [active, setActive] = useState(0)

  return (
    <section id="blueprint" className="relative overflow-hidden bg-mist py-24">
      <GradientBackdrop />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">{blueprint.label}</p>
          <h2 className="mt-4 font-display text-balance text-2xl font-semibold leading-snug tracking-tight text-ink sm:text-3xl">
            {blueprint.kicker}
          </h2>
          <p className="mt-4 text-lg text-ink-soft">{blueprint.sub}</p>
          <a
            href={blueprint.ctaHref}
            className="mt-6 inline-block rounded-full border border-purple px-6 py-3 text-sm font-semibold text-purple transition-colors hover:bg-purple-faint"
          >
            {blueprint.cta}
          </a>
        </Reveal>

        <Reveal delay={0.15} className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 flex flex-col items-center lg:order-1">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-sage/40 bg-white/70 px-4 py-1.5 text-sm font-semibold text-purple shadow-sm backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-purple" />
              {blueprint.cardsLabel}
            </span>
            <BlueprintStack active={active} count={blueprint.steps.length} />
          </div>

          <div className="order-1 divide-y divide-ink/10 overflow-hidden rounded-3xl border border-sage/40 bg-white/80 shadow-[0_16px_40px_-24px_rgba(58,33,192,0.18)] backdrop-blur-md lg:order-2">
            {blueprint.steps.map((step, i) => {
              const isActive = i === active
              return (
                <div key={step.id}>
                  <button
                    type="button"
                    onClick={() => setActive(i)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors"
                    style={{ backgroundColor: isActive ? '#3A21C00d' : 'transparent' }}
                    aria-expanded={isActive}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white"
                        style={{ backgroundColor: STEP_ACCENT }}
                      >
                        {i + 1}
                      </span>
                      <span className="text-sm font-semibold uppercase tracking-wide text-ink sm:text-base">
                        {step.label}
                      </span>
                    </span>
                    <motion.span
                      animate={{ rotate: isActive ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-purple-faint text-purple"
                    >
                      +
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pt-3 pb-5 pl-16">
                          <p className="text-sm font-semibold text-ink">{step.title}</p>
                          <p className="mt-2 text-sm leading-relaxed text-ink-soft">{step.body}</p>
                          <a
                            href={step.href}
                            className="mt-3 inline-block text-sm font-semibold text-purple transition-colors hover:text-purple-dark"
                          >
                            Learn more &rarr;
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
