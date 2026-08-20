import { Link } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import GradientBackdrop from './GradientBackdrop'
import Reveal from './Reveal'

type RelatedPage = {
  label: string
  href: string
  description: string
}

export default function PlatformPageLayout({
  kicker,
  heading,
  body,
  features,
  relatedPages,
}: {
  kicker: string
  heading: string
  body: string
  features?: string[]
  relatedPages?: RelatedPage[]
}) {
  return (
    <>
      <Header />
      <main>
        <section className="relative overflow-hidden py-24">
          <GradientBackdrop />
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <Reveal>
              <p className="text-sm font-semibold uppercase tracking-wide text-purple">{kicker}</p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-ink sm:text-5xl">{heading}</h1>
              <p className="mt-6 max-w-2xl text-lg text-ink-soft">{body}</p>
            </Reveal>

            {features && features.length > 0 && (
              <Reveal delay={0.1} className="mt-10">
                <div className="flex flex-wrap gap-2">
                  {features.map((feature) => (
                    <span
                      key={feature}
                      className="rounded-full border border-ink/10 bg-white/70 px-4 py-1.5 text-sm text-ink-soft backdrop-blur-xl"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </Reveal>
            )}

            {relatedPages && relatedPages.length > 0 && (
              <Reveal delay={0.2} className="mt-14">
                <p className="text-sm font-semibold uppercase tracking-wide text-ink-faint">Go deeper</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {relatedPages.map((page) => (
                    <Link
                      key={page.href}
                      to={page.href}
                      className="block rounded-2xl border border-ink/10 bg-white/70 p-5 backdrop-blur-xl transition-colors hover:border-purple/30 hover:bg-purple-faint"
                    >
                      <span className="block text-base font-semibold text-ink">{page.label}</span>
                      <span className="mt-1 block text-sm leading-relaxed text-ink-faint">
                        {page.description}
                      </span>
                    </Link>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
