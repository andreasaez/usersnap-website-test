import { motion } from 'motion/react'
import { hero } from '../data/content'
import OrchestrationDiagram from '../illustrations/OrchestrationDiagram'

const STAR_PATH = 'M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1 5.9L10 14.8l-5.2 2.8 1-5.9-4.3-4.1 5.9-.7L10 1.5z'

function StarRating() {
  return (
    <span className="flex items-center gap-0.5" aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <svg key={i} viewBox="0 0 20 20" className="h-3 w-3 fill-slate">
          <path d={STAR_PATH} />
        </svg>
      ))}
      <span className="relative h-3 w-3">
        <svg viewBox="0 0 20 20" className="absolute inset-0 h-3 w-3 fill-none stroke-slate stroke-[1.3]">
          <path d={STAR_PATH} />
        </svg>
        <svg
          viewBox="0 0 20 20"
          className="absolute inset-0 h-3 w-3 fill-slate"
          style={{ clipPath: 'inset(0 50% 0 0)' }}
        >
          <path d={STAR_PATH} />
        </svg>
      </span>
    </span>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-8">
      {/* The one aurora moment on the page — Snappy's own gradient, spent here and nowhere else */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(38% 60% at 78% 18%, rgba(57,44,203,0.22), transparent 68%),' +
            'radial-gradient(42% 55% at 95% 55%, rgba(125,42,232,0.18), transparent 70%),' +
            'radial-gradient(46% 50% at 68% 88%, rgba(137,158,215,0.22), transparent 72%)',
          filter: 'blur(60px) saturate(130%)',
        }}
      />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-8 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="text-center lg:text-left">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-sm font-semibold uppercase tracking-wide text-purple"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="whitespace-pre-line font-display text-4xl font-semibold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-[3.25rem]"
          >
            {hero.h1}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-6 max-w-xl text-lg text-ink-soft lg:mx-0"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
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
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-4 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 lg:justify-start"
          >
            <span className="flex items-center gap-1.5 text-xs text-ink-faint">
              <StarRating />
              4.5/5 on G2
            </span>
            <span className="hidden text-ink-faint/50 sm:inline">&middot;</span>
            <span className="text-xs text-ink-faint">{hero.note}</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="flex justify-center"
        >
          <OrchestrationDiagram />
        </motion.div>
      </div>
    </section>
  )
}
