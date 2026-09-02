import { finalCta } from '../data/content'
import Reveal from './Reveal'
import ReleaseSummaryCard from '../illustrations/ReleaseSummaryCard'

export default function FinalCta() {
  return (
    <section id="book-demo" className="py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 shadow-[0_30px_80px_-30px_rgba(33,43,55,0.6)] sm:px-16">
            <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              <div className="text-center lg:text-left">
                <h2 className="text-balance font-display text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {finalCta.heading}
                </h2>
                <p className="mt-4 text-lg text-white/70">{finalCta.sub}</p>
                <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                  <a
                    href="#book-demo"
                    className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white/90"
                  >
                    {finalCta.primaryCta}
                  </a>
                  <a
                    href="#book-demo"
                    className="rounded-full border border-sky/40 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                  >
                    {finalCta.secondaryCta}
                  </a>
                </div>
              </div>

              <div className="flex justify-center lg:justify-end">
                <ReleaseSummaryCard />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
