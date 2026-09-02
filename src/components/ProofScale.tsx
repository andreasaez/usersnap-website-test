import Reveal from './Reveal'
import { icons, snappyGlyph20 } from '../icons'

// Mockup for the team to build on — Speed cites certifications Usersnap is
// targeting (SOC 2 Type II, GDPR, HIPAA), not yet held. Confirm status
// before this ships.
const capabilities = [
  {
    title: 'Speed',
    body: 'Snappy orchestrates every signal into trends automatically before your next planning cycle.',
    icon: 'snappy',
  },
  {
    title: 'Simplicity',
    body: 'No taxonomy to build, no code required. Any product team can run it from day one.',
    icon: 'implementation',
  },
  {
    title: 'Security',
    body: 'Enterprise-ready with SOC 2 Type II, GDPR, and HIPAA compliance.',
    icon: 'guardrails',
  },
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

function CapabilityIcon({ name }: { name: string }) {
  if (name === 'snappy') {
    return (
      <span
        className="flex h-12 w-12 items-center justify-center rounded-2xl"
        style={{ background: 'linear-gradient(135deg, #392CCB, #7D2AE8)' }}
      >
        <svg viewBox="0 0 20 20" className="h-6 w-6" fill="none" stroke="white" strokeWidth="1.5">
          {snappyGlyph20}
        </svg>
      </span>
    )
  }
  return (
    <span
      className="flex h-12 w-12 items-center justify-center rounded-2xl"
      style={{ backgroundColor: '#899ED7' }}
    >
      <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="white" strokeWidth="1.7">
        {icons[name]}
      </svg>
    </span>
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
          <a
            href="#customers"
            className="mt-6 inline-block rounded-full border border-purple px-6 py-3 text-sm font-semibold text-purple transition-colors hover:bg-purple-faint"
          >
            See customer stories
          </a>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {capabilities.map((c, i) => (
            <Reveal key={c.title} delay={0.1 + i * 0.08}>
              <div className="flex h-full flex-col rounded-3xl border border-sage/40 bg-white/80 p-8 shadow-[0_16px_40px_-24px_rgba(58,33,192,0.18)] backdrop-blur-md">
                <CapabilityIcon name={c.icon} />
                <h3 className="mt-5 text-lg font-semibold text-ink">{c.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{c.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3} className="mt-10 flex flex-wrap items-center justify-center gap-4">
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
