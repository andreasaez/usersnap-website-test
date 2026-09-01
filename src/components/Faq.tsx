import { faqs } from '../data/content'
import Reveal from './Reveal'
import GradientBackdrop from './GradientBackdrop'

export default function Faq() {
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
          {faqs.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.05}>
              <div className="rounded-2xl border border-sage/40 bg-gradient-to-b from-purple-faint to-white p-6 shadow-[0_16px_40px_-24px_rgba(58,33,192,0.18)] backdrop-blur-sm">
                <p className="text-sm font-semibold text-ink sm:text-base">{item.q}</p>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{item.a}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
