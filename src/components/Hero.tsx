import { motion } from 'motion/react'
import { hero } from '../data/content'
import OrchestrationDiagram from '../illustrations/OrchestrationDiagram'

const SKETCH_COLOR = '#EF5996'

function Underlined({ children }: { children: React.ReactNode }) {
  return (
    <span className="relative inline-block">
      {children}
      <svg
        viewBox="0 0 100 14"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-2 left-0 h-3.5 w-full"
        aria-hidden="true"
      >
        <path
          d="M2 8 C 18 3, 32 11, 50 6 S 82 2, 98 8"
          fill="none"
          stroke={SKETCH_COLOR}
          strokeWidth="3.5"
          strokeLinecap="round"
        />
      </svg>
    </span>
  )
}

export default function Hero() {
  const [line1, line2] = hero.h1.split('\n')
  const [line1Before, line1After] = line1.split('products')
  const [line2Before, line2After] = line2.split('evidence')

  return (
    <section id="top" className="relative overflow-hidden pt-16 pb-8">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-faint via-white to-white" />

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
            className="text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl"
          >
            {line1Before}
            <Underlined>products</Underlined>
            {line1After}
            <br />
            {line2Before}
            <Underlined>evidence</Underlined>
            {line2After}
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

          <p className="mt-4 text-xs text-ink-faint">{hero.note}</p>
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
