import { useState } from 'react'
import { motion } from 'motion/react'
import { pillars } from '../data/content'
import Reveal from './Reveal'
import GradientBackdrop from './GradientBackdrop'
import PillarScene from '../illustrations/PillarScene'

const accents = ['#3A21C0', '#7071A0', '#899ED7']

export default function Pillars() {
  const [active, setActive] = useState(0)

  return (
    <section id="pillars" className="relative overflow-hidden py-24">
      <GradientBackdrop />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{pillars.heading}</h2>
          <p className="mt-4 whitespace-pre-line text-lg text-ink-soft">{pillars.sub}</p>
          <a
            href={pillars.ctaHref}
            className="mt-6 inline-block rounded-full border border-purple px-6 py-3 text-sm font-semibold text-purple transition-colors hover:bg-purple-faint"
          >
            {pillars.cta}
          </a>
        </Reveal>

        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <PillarScene active={active} />
          </Reveal>

          <Reveal delay={0.1} className="order-1 flex flex-col gap-2 lg:order-2">
            {pillars.items.map((item, i) => {
              const isActive = i === active
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-pressed={isActive}
                  className="cursor-pointer rounded-2xl border-l-2 py-4 pl-5 pr-4 text-left transition-colors hover:bg-mist/60"
                  style={{
                    borderColor: isActive ? accents[i % accents.length] : 'rgba(46,49,70,0.1)',
                    backgroundColor: isActive ? accents[i % accents.length] + '0d' : undefined,
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full transition-opacity"
                      style={{ backgroundColor: accents[i % accents.length], opacity: isActive ? 1 : 0.4 }}
                    />
                    <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                  <motion.div
                    initial={false}
                    animate={{ height: isActive ? 'auto' : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                    aria-hidden={!isActive}
                  >
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {item.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-full border border-sage/40 bg-white px-2.5 py-1 text-xs text-ink-soft"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                    <a
                      href={item.href}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-3 inline-block text-sm font-semibold text-purple transition-colors hover:text-purple-dark"
                    >
                      Learn more &rarr;
                    </a>
                  </motion.div>
                </button>
              )
            })}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
