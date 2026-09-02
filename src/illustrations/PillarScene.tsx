import { motion } from 'motion/react'
import { snappyGlyph20 } from '../icons'
import SnappyCharacter from './SnappyCharacter'

const labels = ['Research & Discovery', 'Roadmaps & Reporting', 'Integrations & Workflows']

function Chrome({ label }: { label: string }) {
  return (
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
        {label}
      </span>
    </div>
  )
}

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

// Research & Discovery: scattered signal becomes tagged evidence
function ResearchScene() {
  return (
    <div className="flex flex-col items-center gap-5 px-6 py-8">
      <div className="flex items-center gap-4">
        <motion.div
          className="h-20 w-20"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <SnappyCharacter mood="overwhelmed" />
        </motion.div>
        <svg viewBox="0 0 40 16" className="h-4 w-9 shrink-0 text-ink-faint" fill="none">
          <path d="M2 8h32M28 3l6 5-6 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <motion.div
          className="h-20 w-20"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
        >
          <SnappyCharacter mood="confident" />
        </motion.div>
      </div>
      <motion.div
        className="flex flex-wrap items-center justify-center gap-1.5"
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
        className="text-xs text-ink-faint"
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
    <div className="flex items-center gap-5 px-6 py-8">
      <div className="h-24 w-24 shrink-0">
        <SnappyCharacter mood="confident" />
      </div>
      <div className="flex-1">
        <div className="flex h-14 items-end gap-1.5">
          {bars.map((h, i) => (
            <motion.span
              key={i}
              className="w-full rounded-sm"
              style={{ backgroundColor: i === bars.length - 1 ? '#3A21C0' : '#899ED7' }}
              initial={{ height: 0 }}
              animate={{ height: h }}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.08, ease: 'easeOut' }}
            />
          ))}
        </div>
        <div className="mt-3 flex gap-1.5">
          {lanes.map((lane, i) => (
            <motion.span
              key={lane.label}
              className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-white"
              style={{ backgroundColor: lane.color }}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + i * 0.1 }}
            >
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
    <div className="px-6 py-8">
      <div className="relative mx-auto h-28 w-52">
        <svg viewBox="0 0 200 110" className="absolute inset-0 h-full w-full">
          {nodes.map((n, i) => (
            <motion.line
              key={i}
              x1={n.x}
              y1={n.y}
              x2={100}
              y2={55}
              stroke="#2E314622"
              strokeWidth="1.4"
              strokeDasharray="3 4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.1 }}
            />
          ))}
          {nodes.map((n, i) => (
            <motion.circle
              key={i}
              cx={n.x}
              cy={n.y}
              r="6"
              fill={n.color}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3, delay: 0.15 + i * 0.1 }}
            />
          ))}
        </svg>
        <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2">
          <SnappyCharacter mood="confident" />
        </div>
      </div>
      <motion.p
        className="mt-2 text-center text-xs text-ink-faint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.4 }}
      >
        No manual exports. No one-off syncs.
      </motion.p>
    </div>
  )
}

const SCENES = [ResearchScene, RoadmapScene, IntegrationsScene]

export default function PillarScene({ active }: { active: number }) {
  const Scene = SCENES[active] ?? SCENES[0]

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
        <Chrome label={labels[active] ?? labels[0]} />
        <motion.div key={active} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.25 }}>
          <Scene />
        </motion.div>
      </div>
    </div>
  )
}
