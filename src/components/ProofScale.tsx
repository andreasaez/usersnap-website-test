import Reveal from './Reveal'

// Placeholder figures — swap for real, verified numbers before this ships.
const stats = [
  { value: '1,200+', label: 'Teams served' },
  { value: '50M+', label: 'Insights collected' },
  { value: '18,000+', label: 'Features shipped' },
  { value: '99.98%', label: 'Uptime' },
  { value: '2.4M+', label: 'Monthly users' },
]

// Placeholder badge shapes standing in for real G2 award badges — swap for
// actual G2 badge assets once confirmed which awards apply.
const badges = ['G2 Leader', 'High Performer', 'Best Support', 'Users Love Us']

function BadgeIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="10" cy="7.5" r="4.5" />
      <path d="M7 11.3l-2 6.2 5-2.6 5 2.6-2-6.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function ProofScale() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="text-center">
          <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            Proven. Trusted. Built for scale.
          </h2>
        </Reveal>

        <Reveal
          delay={0.1}
          className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-sage/40 bg-sage/30 sm:grid-cols-5"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-white px-4 py-8 text-center">
              <div className="font-display text-3xl font-semibold text-purple">{s.value}</div>
              <div className="mt-1 text-xs text-ink-faint">{s.label}</div>
            </div>
          ))}
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex flex-wrap items-center justify-center gap-4">
          {badges.map((b) => (
            <span
              key={b}
              className="flex items-center gap-2 rounded-full border border-sage/40 bg-white px-4 py-2 text-xs font-semibold text-ink-soft shadow-sm"
            >
              <span className="text-purple">
                <BadgeIcon />
              </span>
              {b}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
