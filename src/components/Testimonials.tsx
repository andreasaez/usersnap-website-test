import { testimonials } from '../data/content'
import Reveal from './Reveal'
import GradientBackdrop from './GradientBackdrop'

const tints = [
  'from-purple-faint to-white',
  'from-pink/10 to-white',
  'from-sky/10 to-white',
  'from-red/10 to-white',
]

export default function Testimonials() {
  return (
    <section id="customers" className="relative overflow-hidden py-24">
      <GradientBackdrop />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">
            Trusted by enterprise product teams at
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <div
                className={`flex h-full flex-col justify-between rounded-3xl border border-white/60 bg-gradient-to-b p-6 shadow-[0_20px_60px_-25px_rgba(58,33,206,0.25)] backdrop-blur-xl ${tints[i % tints.length]}`}
              >
                <p className="text-sm leading-relaxed text-ink">“{t.quote}”</p>
                <div className="mt-6">
                  <p className="text-sm font-semibold text-ink">{t.name}</p>
                  <p className="text-xs text-ink-faint">{t.title}</p>
                  <p className="mt-3 text-sm font-bold text-ink/70">{t.company}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
