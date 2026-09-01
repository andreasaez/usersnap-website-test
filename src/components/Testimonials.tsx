import { testimonials } from '../data/content'
import Reveal from './Reveal'
import GradientBackdrop from './GradientBackdrop'

const tints = [
  'from-sky/40 via-white to-white',
  'from-[#10B981]/30 via-white to-white',
  'from-purple/30 via-white to-white',
  'from-[#EC4899]/30 via-white to-white',
]

export default function Testimonials() {
  return (
    <section id="customers" className="relative overflow-hidden pt-4 pb-16">
      <GradientBackdrop />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">
            Trusted by B2B enterprise product teams at
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className="h-full">
              <div
                className={`flex h-full flex-col justify-between rounded-3xl border border-sage/40 bg-gradient-to-b p-6 shadow-[0_16px_40px_-24px_rgba(58,33,192,0.18)] backdrop-blur-md ${tints[i % tints.length]}`}
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
