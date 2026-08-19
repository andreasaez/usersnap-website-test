import { pillars } from '../data/content'
import Reveal from './Reveal'
import GradientBackdrop from './GradientBackdrop'

export default function Pillars() {
  return (
    <section id="pillars" className="relative overflow-hidden py-24">
      <GradientBackdrop />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">{pillars.heading}</h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {pillars.items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-3xl border border-white/60 bg-white/70 p-8 shadow-[0_20px_60px_-25px_rgba(58,33,206,0.25)] backdrop-blur-xl">
                <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                <ul className="mt-5 flex-1 grid grid-cols-2 gap-x-3 gap-y-2">
                  {item.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-xs text-ink-soft">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-purple-faint">
                        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="#3A21CE">
                          <path
                            d="M2.5 6.2l2.2 2.2 4.8-4.8"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
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
