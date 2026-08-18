import { motion } from 'motion/react'

const sources = [
  { label: 'Support tickets', y: 40, color: '#48BBE7' },
  { label: 'Sales calls', y: 120, color: '#EF5996' },
  { label: 'In-app comments', y: 200, color: '#3A21CE' },
  { label: 'Surveys', y: 280, color: '#FB585B' },
]

const pathFor = (y: number) => `M 150 ${y} C 220 ${y}, 220 160, 300 160`
const decisionPath = 'M 334 160 C 370 160, 370 160, 400 160'

export default function OrchestrationDiagram() {
  return (
    <div className="relative w-full max-w-md">
      <div className="absolute -inset-10 -z-10 rounded-full bg-gradient-to-br from-purple-faint via-sky/10 to-pink/10 blur-2xl" />

      <svg viewBox="0 0 420 320" className="w-full" fill="none">
        {sources.map((s, i) => (
          <motion.path
            key={s.label}
            d={pathFor(s.y)}
            stroke={s.color}
            strokeOpacity="0.25"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: 'easeOut' }}
          />
        ))}

        {sources.map((s, i) => (
          <motion.circle
            key={`dot-${s.label}`}
            r="3.5"
            fill={s.color}
            style={{ offsetPath: `path("${pathFor(s.y)}")`, offsetRotate: '0deg' }}
            initial={{ offsetDistance: '0%', opacity: 0 }}
            whileInView={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
            viewport={{ once: false }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
              delay: 1.2 + i * 0.35,
              repeatDelay: 0.5,
            }}
          />
        ))}

        {sources.map((s, i) => (
          <motion.g
            key={s.label}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <rect
              x="10"
              y={s.y - 18}
              width="140"
              height="36"
              rx="14"
              fill="white"
              fillOpacity="0.85"
              stroke="#212B3718"
            />
            <circle cx="30" cy={s.y} r="4" fill={s.color} />
            <text x="44" y={s.y + 4} fontSize="11" fill="#212B37" fontFamily="Inter, sans-serif">
              {s.label}
            </text>
          </motion.g>
        ))}

        <motion.g
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <circle cx="300" cy="160" r="34" fill="#3A21CE" />
          <motion.circle
            cx="300"
            cy="160"
            r="34"
            fill="#3A21CE"
            opacity="0.15"
            animate={{ r: [34, 44, 34], opacity: [0.15, 0, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <path
            d="M290 160l7 7 14-14"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>

        <motion.path
          d={decisionPath}
          stroke="#3A21CE"
          strokeWidth="2"
          strokeOpacity="0.4"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 }}
        />
        <motion.circle
          r="3.5"
          fill="#3A21CE"
          style={{ offsetPath: `path("${decisionPath}")`, offsetRotate: '0deg' }}
          initial={{ offsetDistance: '0%', opacity: 0 }}
          whileInView={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
          viewport={{ once: false }}
          transition={{ duration: 1, repeat: Infinity, ease: 'linear', delay: 1.6, repeatDelay: 1.4 }}
        />

        <motion.g
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 1.1 }}
        >
          <rect
            x="330"
            y="120"
            width="80"
            height="80"
            rx="20"
            fill="white"
            fillOpacity="0.85"
            stroke="#212B3718"
          />
          <rect x="342" y="136" width="56" height="6" rx="2" fill="#EF5996" />
          <rect x="342" y="150" width="40" height="6" rx="2" fill="#212B3733" />
          <rect x="342" y="164" width="48" height="6" rx="2" fill="#212B3733" />
          <rect x="342" y="178" width="30" height="6" rx="2" fill="#48BBE7" />
        </motion.g>
      </svg>
    </div>
  )
}
