import { motion } from 'motion/react'
import { snappyGlyph20 } from '../icons'

const accents = ['#3A21C0', '#7071A0', '#899ED7', '#3A21C0']

function Chrome({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3.5">
      <div className="flex gap-2">
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
      </div>
      <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{label}</span>
    </div>
  )
}

// Snappy's suggestion row — the same tri-tone wash and gradient avatar the
// dashboard uses for "Snappy suggests…" rows, so the agent reads as the
// thing orchestrating each step rather than a one-off hero mascot.
function SnappyRow({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      className="mt-4 flex items-start gap-2.5 rounded-xl border px-3.5 py-3"
      style={{
        background:
          'linear-gradient(120deg, rgba(57,44,203,0.14) 0%, rgba(125,42,232,0.13) 55%, rgba(244,114,182,0.12) 100%)',
        borderColor: 'rgba(125,42,232,0.28)',
      }}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.55 }}
    >
      <span
        className="animate-snappy-breathe flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
        style={{ background: 'linear-gradient(135deg, #392CCB, #7D2AE8)' }}
      >
        <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="white" strokeWidth="1.6">
          {snappyGlyph20}
        </svg>
      </span>
      <p className="text-xs leading-snug text-ink">
        <span className="font-semibold">Snappy</span> {children}
      </p>
    </motion.div>
  )
}

// Connect: sources landing in one place, each marked as linked
function ConnectCard() {
  const rows = [
    { label: 'Support tickets', color: '#899ED7' },
    { label: 'Sales calls', color: '#7071A0' },
    { label: 'In-app comments', color: '#3A21C0' },
  ]
  return (
    <>
      <Chrome label="Sources" />
      <div className="flex flex-col gap-3 p-6">
        {rows.map((r, i) => (
          <motion.div
            key={r.label}
            className="flex items-center justify-between rounded-xl border border-ink/10 bg-mist/60 px-4 py-3"
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.15 + i * 0.12 }}
          >
            <span className="flex items-center gap-2.5">
              <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: r.color }} />
              <span className="text-sm font-medium text-ink">{r.label}</span>
            </span>
            <span className="text-[11px] font-semibold uppercase tracking-wide text-purple">Linked</span>
          </motion.div>
        ))}
        <SnappyRow>linked 3 new sources automatically</SnappyRow>
      </div>
    </>
  )
}

// Understand: signal trending up, surfaced as a small evidence card
function UnderstandCard() {
  const bars = [7, 12, 9, 16, 22]
  return (
    <>
      <Chrome label="Signals" />
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold text-ink">Checkout confusion</span>
          <span className="flex items-center gap-1.5 rounded-full bg-purple-faint px-2.5 py-1 text-[11px] font-semibold text-purple">
            <span className="h-2 w-2 rounded-full bg-purple" />
            Rising
          </span>
        </div>
        <div className="mt-5 flex h-20 items-end gap-2">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              className="w-full rounded-sm"
              style={{ backgroundColor: i === bars.length - 1 ? '#3A21C0' : '#899ED7' }}
              initial={{ height: 0 }}
              animate={{ height: h * 1.5 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08, ease: 'easeOut' }}
            />
          ))}
        </div>
        <p className="mt-3 text-xs text-ink-faint">38 mentions this week · up from 12</p>
        <SnappyRow>suggests reviewing this before sprint planning</SnappyRow>
      </div>
    </>
  )
}

// Act: prioritized into a Now / Next / Later lane
function ActCard() {
  const lanes = [
    { label: 'Now', chips: 2, color: '#3A21C0' },
    { label: 'Next', chips: 1, color: '#7071A0' },
    { label: 'Later', chips: 1, color: '#B3BEB3' },
  ]
  return (
    <>
      <Chrome label="Roadmap" />
      <div className="p-6">
        <div className="grid grid-cols-3 gap-3">
          {lanes.map((lane, i) => (
            <div key={lane.label} className="flex flex-col gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wide text-ink-faint">{lane.label}</span>
              {Array.from({ length: lane.chips }).map((_, j) => (
                <motion.div
                  key={j}
                  className="h-9 rounded-lg border border-ink/10 bg-white"
                  style={{ borderTopWidth: 3, borderTopColor: lane.color }}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: 0.15 + (i * 2 + j) * 0.08 }}
                />
              ))}
            </div>
          ))}
        </div>
        <SnappyRow>has identified a new opportunity</SnappyRow>
      </div>
    </>
  )
}

// Engage: the customers who asked, notified automatically
function EngageCard() {
  const avatars = ['#3A21C0', '#7071A0', '#899ED7']
  return (
    <>
      <Chrome label="Release" />
      <div className="p-6">
        <div className="flex items-center justify-between">
          <span className="flex -space-x-2">
            {avatars.map((c, i) => (
              <motion.span
                key={i}
                className="h-7 w-7 rounded-full border-2 border-white"
                style={{ backgroundColor: c }}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.15 + i * 0.1 }}
              />
            ))}
          </span>
          <span className="text-xs font-semibold text-ink">128 customers notified</span>
        </div>
        <motion.div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-mist" initial={false}>
          <motion.span
            className="block h-full rounded-full bg-purple"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          />
        </motion.div>
        <p className="mt-3 text-xs text-ink-faint">Changelog sent · replies auto-tagged</p>
        <SnappyRow>drafted the changelog for this release</SnappyRow>
      </div>
    </>
  )
}

const CARDS = [ConnectCard, UnderstandCard, ActCard, EngageCard]

export default function BlueprintStack({ active, count }: { active: number; count: number }) {
  return (
    <div className="relative mx-auto h-[420px] w-full max-w-[420px]">
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === active
        // Position is relative to the active card, not to each card's fixed
        // index — so whichever step you pick becomes the front card and the
        // rest recede behind it in order, instead of the stack staying put
        // and just swapping which one is highlighted in place.
        const relDepth = (i - active + count) % count
        const baseY = relDepth * 16
        const restOpacity = Math.max(0.14, 0.5 - relDepth * 0.16)
        const restScale = Math.max(0.82, 0.95 - relDepth * 0.05)
        const Card = CARDS[i % CARDS.length]
        return (
          <motion.div
            key={i}
            className="absolute inset-x-0 top-4 mx-auto w-[340px] overflow-hidden rounded-2xl border bg-white/95 shadow-[0_20px_50px_-20px_rgba(46,49,70,0.35)] backdrop-blur-sm"
            style={{ zIndex: isActive ? count + 1 : count - relDepth }}
            animate={{
              x: relDepth * 16,
              y: isActive ? [0, -6, 0] : baseY,
              rotate: isActive ? 0 : relDepth * 2.5,
              opacity: isActive ? 1 : restOpacity,
              scale: isActive ? 1.03 : restScale,
              borderColor: isActive ? accents[i % accents.length] + '55' : 'rgba(46,49,70,0.08)',
            }}
            transition={
              isActive
                ? { y: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' }, default: { duration: 0.4, ease: 'easeOut' } }
                : { duration: 0.4, ease: 'easeOut' }
            }
          >
            <Card />
          </motion.div>
        )
      })}
    </div>
  )
}
