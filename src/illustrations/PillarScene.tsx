import { motion } from 'motion/react'
import SnappyCharacter from './SnappyCharacter'

function Chip({ children, color }: { children: string; color: string }) {
  return (
    <span
      className="rounded-full border px-2.5 py-1 text-[11px] font-medium"
      style={{ borderColor: color + '40', backgroundColor: color + '0f', color: '#2E3146' }}
    >
      {children}
    </span>
  )
}

function FloatingSnappy({ mood, shake }: { mood: 'overwhelmed' | 'confident'; shake?: boolean }) {
  return (
    <motion.div
      className="h-36 w-36"
      initial={{ opacity: 0, y: -6 }}
      animate={{ opacity: 1, y: [0, -5, 0], rotate: shake ? [-1.5, 1.5, -1.5] : 0 }}
      transition={{
        opacity: { duration: 0.4 },
        y: { duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.3 },
        rotate: shake ? { duration: 1.8, repeat: Infinity, ease: 'easeInOut' } : undefined,
      }}
    >
      <SnappyCharacter mood={mood} />
    </motion.div>
  )
}

// Research & Discovery: scattered signal becomes tagged evidence
function ResearchScene() {
  const drifts = [
    { x: -46, y: -58, rotate: -8, delay: 0 },
    { x: 40, y: -66, rotate: 6, delay: 0.3 },
    { x: -60, y: -6, rotate: -4, delay: 0.6 },
  ]
  return (
    <div className="flex flex-col items-center gap-7 px-6 py-10">
      <div className="relative flex items-center gap-6">
        <div className="relative">
          <FloatingSnappy mood="overwhelmed" shake />
          {drifts.map((d, i) => (
            <motion.span
              key={i}
              className="absolute left-1/2 top-1/2 h-2.5 w-2.5 rounded-full"
              style={{ backgroundColor: ['#899ED7', '#7071A0', '#3A21C0'][i] }}
              initial={{ x: d.x * 1.4, y: d.y * 1.4, opacity: 0 }}
              animate={{ opacity: [0, 1, 1, 0], x: [d.x * 1.4, d.x * 1.4 - 8, d.x * 1.4], y: [d.y * 1.4, d.y * 1.4 - 14, d.y * 1.4] }}
              transition={{ duration: 3, repeat: Infinity, delay: d.delay, ease: 'easeInOut' }}
            />
          ))}
        </div>
        <motion.svg
          viewBox="0 0 40 16"
          className="h-5 w-12 shrink-0 text-ink-faint"
          fill="none"
          animate={{ x: [0, 6, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <path d="M2 8h32M28 3l6 5-6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
        <FloatingSnappy mood="confident" />
      </div>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <Chip color="#899ED7">Support tickets</Chip>
        <Chip color="#7071A0">Surveys</Chip>
        <Chip color="#3A21C0">In-app feedback</Chip>
        <Chip color="#899ED7">NPS</Chip>
      </motion.div>
      <motion.p
        className="text-sm text-ink-faint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.45, duration: 0.4 }}
      >
        Tagged back to its source the moment it appears.
      </motion.p>
    </div>
  )
}

// Roadmaps & Reporting: rising signal turns into a prioritized lane
function RoadmapScene() {
  const bars = [24, 34, 28, 46, 62]
  const lanes = [
    { label: 'Now', color: '#3A21C0' },
    { label: 'Next', color: '#7071A0' },
    { label: 'Later', color: '#B3BEB3' },
  ]
  return (
    <div className="flex items-center gap-8 px-6 py-10">
      <FloatingSnappy mood="confident" />
      <div className="flex-1">
        <div className="flex h-24 items-end gap-2.5">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              className="w-full rounded-md"
              style={{ backgroundColor: i === bars.length - 1 ? '#3A21C0' : '#899ED7' }}
              initial={{ height: 0 }}
              animate={{ height: [h * 1.6, h * 1.6 * (i === bars.length - 1 ? 1.1 : 0.85), h * 1.6] }}
              transition={{
                height: {
                  duration: i === bars.length - 1 ? 1.6 : 2.2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 0.5 + i * 0.15,
                },
              }}
            />
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          {lanes.map((lane, i) => (
            <motion.span
              key={lane.label}
              className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold uppercase tracking-wide text-white"
              style={{ backgroundColor: lane.color }}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
            >
              {i === 0 && (
                <motion.span
                  className="h-1.5 w-1.5 rounded-full bg-white"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.3, repeat: Infinity, ease: 'easeInOut' }}
                />
              )}
              {lane.label}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  )
}

// Integrations & Workflows: the stack connects automatically, Snappy as the hub
function IntegrationsScene() {
  const nodes = [
    { x: 24, y: 18, color: '#899ED7' },
    { x: 176, y: 22, color: '#7071A0' },
    { x: 14, y: 78, color: '#3A21C0' },
    { x: 186, y: 82, color: '#899ED7' },
  ]
  return (
    <div className="px-6 py-10">
      <div className="relative mx-auto h-44 w-80">
        <svg viewBox="0 0 200 110" className="absolute inset-0 h-full w-full">
          {nodes.map((n, i) => (
            <motion.line
              key={`line-${i}`}
              x1={n.x}
              y1={n.y}
              x2={100}
              y2={55}
              stroke="#2E314622"
              strokeWidth="1.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            />
          ))}
          {nodes.map((n, i) => (
            <motion.circle
              key={`flow-${i}`}
              r="2.4"
              fill={n.color}
              animate={{ cx: [n.x, 100], cy: [n.y, 55], opacity: [0, 1, 1, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, delay: 0.8 + i * 0.4, ease: 'easeIn' }}
            />
          ))}
          {nodes.map((n, i) => (
            <motion.circle
              key={`node-${i}`}
              cx={n.x}
              cy={n.y}
              r="6"
              fill={n.color}
              initial={{ scale: 0 }}
              animate={{ scale: [1, 1.18, 1] }}
              transition={{
                scale: { duration: 2.2, repeat: Infinity, ease: 'easeInOut', delay: 0.9 + i * 0.2 },
              }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
          ))}
        </svg>
        <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="h-full w-full"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <SnappyCharacter mood="confident" />
          </motion.div>
        </div>
      </div>
      <motion.p
        className="mt-3 text-center text-sm text-ink-faint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        No manual exports or one-off syncs.
      </motion.p>
    </div>
  )
}

const SCENES = [ResearchScene, RoadmapScene, IntegrationsScene]

export default function PillarScene({ active }: { active: number }) {
  const Scene = SCENES[active] ?? SCENES[0]

  return (
    <div className="relative mx-auto w-full max-w-xl">
      <div
        className="absolute -inset-8 -z-10 rounded-[32px] opacity-70 blur-2xl"
        style={{
          background:
            'radial-gradient(60% 60% at 25% 20%, rgba(58,33,192,0.16), transparent 70%), radial-gradient(55% 55% at 80% 85%, rgba(137,158,215,0.22), transparent 70%)',
        }}
      />
      <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
        <Scene />
      </motion.div>
    </div>
  )
}
