import { differentiators } from '../data/content'
import Reveal from './Reveal'
import GradientBackdrop from './GradientBackdrop'
import { icons } from '../icons'

const ICON_ACCENT = '#899ED7'

export default function Differentiators() {
  return (
    <section className="relative overflow-hidden py-24">
      <GradientBackdrop />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">
            {differentiators.kicker}
          </p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {differentiators.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {differentiators.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-3xl border border-sage/40 bg-white/80 p-8 shadow-[0_16px_40px_-24px_rgba(58,33,192,0.18)] backdrop-blur-md">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: ICON_ACCENT }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.7"
                    strokeLinecap="round"
                  >
                    {icons[item.icon]}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                <a
                  href={item.href}
                  className="mt-5 text-sm font-semibold text-purple transition-colors hover:text-purple-dark"
                >
                  Learn more &rarr;
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
