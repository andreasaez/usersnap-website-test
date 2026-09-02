import { motion } from 'motion/react'
import { snappyGlyph20 } from '../icons'

const steps = ['Connect', 'Understand', 'Act', 'Engage']

export default function ReleaseSummaryCard() {
  return (
    <div className="relative mx-auto w-full max-w-md">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-white shadow-[0_30px_60px_-20px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-3.5">
          <div className="flex gap-2">
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
            <span className="h-2 w-2 rounded-full bg-ink/15" />
          </div>
          <span className="text-xs font-semibold uppercase tracking-wide text-ink-faint">Release</span>
        </div>

        <div className="p-6">
          <div className="flex flex-col gap-2.5">
            {steps.map((s, i) => (
              <motion.div
                key={s}
                className="flex items-center gap-2.5 rounded-xl border border-ink/10 bg-mist/60 px-4 py-2.5"
                initial={{ opacity: 0, x: -8 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.15 + i * 0.1 }}
              >
                <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-purple-faint">
                  <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="#3A21C0">
                    <path
                      d="M2.5 6.2l2.2 2.2 4.8-4.8"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="text-sm font-medium text-ink">{s}</span>
                <span className="ml-auto text-[10px] font-semibold uppercase tracking-wide text-purple">Done</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-4 flex items-center gap-2.5 rounded-xl border px-3.5 py-3"
            style={{
              background:
                'linear-gradient(120deg, rgba(57,44,203,0.14) 0%, rgba(125,42,232,0.13) 55%, rgba(244,114,182,0.12) 100%)',
              borderColor: 'rgba(125,42,232,0.28)',
            }}
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
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
              <span className="font-semibold">Snappy</span> closed the loop automatically
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
