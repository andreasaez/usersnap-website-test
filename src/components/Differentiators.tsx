import { differentiators } from '../data/content'
import Reveal from './Reveal'
import GradientBackdrop from './GradientBackdrop'

const accents = ['#48BBE7', '#EF5996', '#3A21CE']

const icons = [
  // Orchestration: connected nodes
  <g key="orchestration">
    <circle cx="10" cy="10" r="3.5" />
    <circle cx="26" cy="10" r="3.5" />
    <circle cx="18" cy="26" r="3.5" />
    <path d="M13 11l10 0M11 13l6 11M25 13l-6 11" strokeWidth="1.8" />
  </g>,
  // Reporting: trending bars
  <g key="reporting">
    <path d="M8 27V17M18 27V9M28 27V19" strokeLinecap="round" strokeWidth="3" />
  </g>,
  // Guardrails: shield with check
  <g key="guardrails">
    <path d="M18 6l11 4v8c0 7-4.5 11-11 12-6.5-1-11-5-11-12v-8l11-4z" strokeWidth="1.8" strokeLinejoin="round" />
    <path d="M12 18l4 4 8-8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </g>,
]

export default function Differentiators() {
  return (
    <section className="relative overflow-hidden py-24">
      <GradientBackdrop />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">
            {differentiators.kicker}
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {differentiators.heading}
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {differentiators.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-white/60 bg-white/70 p-8 shadow-[0_20px_60px_-25px_rgba(58,33,206,0.25)] backdrop-blur-xl">
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-2xl"
                  style={{ backgroundColor: accents[i % accents.length] }}
                >
                  <svg
                    viewBox="0 0 36 36"
                    className="h-6 w-6"
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                  >
                    {icons[i % icons.length]}
                  </svg>
                </div>
                <h3 className="mt-5 text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
