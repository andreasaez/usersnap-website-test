import { motion } from 'motion/react'
import { snappyGlyph20 } from '../icons'

const activity = [
  { text: 'Tagged 12 tickets to Research & Discovery', color: '#899ED7' },
  { text: 'Updated the Now / Next / Later roadmap', color: '#7071A0' },
  { text: 'Synced Slack, Jira, and Salesforce automatically', color: '#3A21C0' },
]

export default function SnappyPanel({ active }: { active: number }) {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div
        className="absolute -inset-8 -z-10 rounded-[32px] opacity-70 blur-2xl"
        style={{
          background:
            'radial-gradient(60% 60% at 25% 20%, rgba(58,33,192,0.16), transparent 70%), radial-gradient(55% 55% at 80% 85%, rgba(137,158,215,0.22), transparent 70%)',
        }}
      />

      <div className="overflow-hidden rounded-3xl border border-sage/40 bg-white/95 shadow-[0_24px_60px_-24px_rgba(46,49,70,0.35)] backdrop-blur-sm">
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3.5">
          <div className="flex gap-2">
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
          </div>
          <span className="flex items-center gap-2 text-xs font-semibold text-ink-faint">
            <span
              className="flex h-5 w-5 items-center justify-center rounded-full"
              style={{ background: 'linear-gradient(135deg, #392CCB, #7D2AE8)' }}
            >
              <svg viewBox="0 0 20 20" className="h-3 w-3" fill="none" stroke="white" strokeWidth="1.6">
                {snappyGlyph20}
              </svg>
            </span>
            Snappy
          </span>
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 rounded-full border border-ink/10 bg-mist/70 px-4 py-3">
            <span
              className="animate-snappy-breathe flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
              style={{ background: 'linear-gradient(135deg, #392CCB, #7D2AE8)' }}
            >
              <svg viewBox="0 0 20 20" className="h-3.5 w-3.5" fill="none" stroke="white" strokeWidth="1.6">
                {snappyGlyph20}
              </svg>
            </span>
            <span className="flex-1 text-xs text-ink-faint">
              Ask Snappy anything about your product evidence…
            </span>
            <span className="text-xs text-ink-faint">&crarr;</span>
          </div>

          <div className="mt-4 flex flex-col gap-2.5">
            {activity.map((row, i) => {
              const isActive = i === active
              return (
                <motion.div
                  key={row.text}
                  className="flex items-center gap-2.5 rounded-xl border px-4 py-3"
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  animate={{
                    borderColor: isActive ? row.color + '55' : 'rgba(46,49,70,0.1)',
                    backgroundColor: isActive ? row.color + '0f' : 'rgba(255,255,255,1)',
                    scale: isActive ? 1.02 : 1,
                  }}
                  transition={{ duration: 0.3, delay: 0.15 + i * 0.12 }}
                >
                  <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: row.color }} />
                  <span
                    className="text-xs transition-colors"
                    style={{ color: isActive ? '#2e3146' : 'rgba(46,49,70,0.65)', fontWeight: isActive ? 600 : 500 }}
                  >
                    {row.text}
                  </span>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
