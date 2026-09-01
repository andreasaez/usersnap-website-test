import { motion } from 'motion/react'
import { snappyGlyph20 } from '../icons'

const HUB = { x: 300, y: 175, r: 34 }

const inputs = [
  { label: 'Support tickets', y: 40, color: '#899ED7' },
  { label: 'Sales calls', y: 113, color: '#7071A0' },
  { label: 'In-app comments', y: 186, color: '#3A21C0' },
  { label: 'Surveys', y: 259, color: '#7071A0' },
]

const outputs = [
  { label: 'Hypotheses', y: 15, color: '#3A21C0' },
  { label: 'Prototypes', y: 90, color: '#7071A0' },
  { label: 'Trending problems', y: 165, color: '#899ED7' },
  { label: 'Sentiment', y: 240, color: '#7071A0' },
  { label: 'Solutions', y: 315, color: '#3A21C0' },
]

const inPathFor = (y: number) =>
  `M 150 ${y} C 220 ${y}, 220 ${HUB.y}, ${HUB.x - HUB.r} ${HUB.y}`
const outPathFor = (y: number) =>
  `M ${HUB.x + HUB.r} ${HUB.y} C ${HUB.x + 70} ${HUB.y}, ${HUB.x + 70} ${y}, 470 ${y}`

export default function OrchestrationDiagram() {
  return (
    <div className="relative w-full max-w-xl">
      <svg viewBox="0 0 610 360" className="w-full" fill="none">
        {inputs.map((s, i) => (
          <motion.path
            key={`in-line-${s.label}`}
            d={inPathFor(s.y)}
            stroke={s.color}
            strokeOpacity="0.25"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + i * 0.15, ease: 'easeOut' }}
          />
        ))}

        {inputs.map((s, i) => (
          <motion.circle
            key={`in-dot-${s.label}`}
            r="3.5"
            fill={s.color}
            style={{ offsetPath: `path("${inPathFor(s.y)}")`, offsetRotate: '0deg' }}
            initial={{ offsetDistance: '0%', opacity: 0 }}
            whileInView={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
            viewport={{ once: false }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: 'linear',
              delay: 1.2 + i * 0.35,
              repeatDelay: 0.5,
            }}
          />
        ))}

        {inputs.map((s, i) => (
          <motion.g
            key={`in-card-${s.label}`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <rect
              x="10"
              y={s.y - 16}
              width="140"
              height="32"
              rx="12"
              fill="white"
              fillOpacity="0.85"
              stroke="#2E314618"
            />
            <circle cx="28" cy={s.y} r="4" fill={s.color} />
            <text x="42" y={s.y + 4} fontSize="11" fill="#2E3146" fontFamily="Inter, sans-serif">
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
          <defs>
            {/* Snappy's own mark color — the fixed gradient from the dashboard's
                agent dock, kept as-is so the mascot reads as the same character
                across surfaces rather than being retinted to the site palette. */}
            <linearGradient id="snappyGradient" x1="15%" y1="10%" x2="85%" y2="90%">
              <stop offset="0%" stopColor="#392CCB" />
              <stop offset="100%" stopColor="#7D2AE8" />
            </linearGradient>
          </defs>
          <circle cx={HUB.x} cy={HUB.y} r={HUB.r} fill="url(#snappyGradient)" />
          <motion.circle
            cx={HUB.x}
            cy={HUB.y}
            r={HUB.r}
            fill="url(#snappyGradient)"
            opacity="0.15"
            animate={{ r: [HUB.r, HUB.r + 10, HUB.r], opacity: [0.15, 0, 0.15] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />
          <g
            transform={`translate(${HUB.x - 13} ${HUB.y - 13}) scale(1.3)`}
            stroke="white"
            strokeWidth="1.4"
            fill="none"
          >
            {snappyGlyph20}
          </g>
        </motion.g>

        {outputs.map((o, i) => (
          <motion.path
            key={`out-line-${o.label}`}
            d={outPathFor(o.y)}
            stroke={o.color}
            strokeWidth="2"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.9 + i * 0.1, ease: 'easeOut' }}
          />
        ))}

        {outputs.map((o, i) => (
          <motion.circle
            key={`out-dot-${o.label}`}
            r="3.5"
            fill={o.color}
            style={{ offsetPath: `path("${outPathFor(o.y)}")`, offsetRotate: '0deg' }}
            initial={{ offsetDistance: '0%', opacity: 0 }}
            whileInView={{ offsetDistance: '100%', opacity: [0, 1, 1, 0] }}
            viewport={{ once: false }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: 'linear',
              delay: 1.7 + i * 0.3,
              repeatDelay: 0.6,
            }}
          />
        ))}

        {outputs.map((o, i) => (
          <motion.g
            key={`out-card-${o.label}`}
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
          >
            <rect
              x="470"
              y={o.y - 15}
              width="130"
              height="30"
              rx="12"
              fill="white"
              fillOpacity="0.85"
              stroke="#2E314618"
            />
            <circle cx="487" cy={o.y} r="4" fill={o.color} />
            <text x="500" y={o.y + 3.5} fontSize="10" fill="#2E3146" fontFamily="Inter, sans-serif">
              {o.label}
            </text>
          </motion.g>
        ))}
      </svg>
    </div>
  )
}
