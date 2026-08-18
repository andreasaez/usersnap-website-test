import { finalCta } from '../data/content'
import Reveal from './Reveal'

export default function FinalCta() {
  return (
    <section id="book-demo" className="py-24">
      <div className="mx-auto max-w-full px-4 text-center sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-ink px-8 py-16 shadow-[0_30px_80px_-30px_rgba(33,43,55,0.6)] sm:px-16">
            <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-purple/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-pink/20 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl">
                {finalCta.heading}
              </h2>
              <p className="mt-4 text-lg text-white/70">{finalCta.sub}</p>
              <div className="mt-8 flex justify-center">
                <a
                  href="#book-demo"
                  className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-ink transition-colors hover:bg-white/90"
                >
                  {finalCta.primaryCta}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
