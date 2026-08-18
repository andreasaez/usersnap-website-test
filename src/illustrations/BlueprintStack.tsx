import { motion } from 'motion/react'

const accents = ['#48BBE7', '#3A21CE', '#EF5996', '#FB585B']

const icons = [
  // Connect: nodes joining
  <path key="connect" d="M8 24h8m8 0h8M16 16v16" stroke="white" strokeWidth="2.5" strokeLinecap="round" />,
  // Understand: magnifier
  <g key="understand">
    <circle cx="18" cy="18" r="9" stroke="white" strokeWidth="2.5" fill="none" />
    <path d="M25 25l6 6" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
  </g>,
  // Act: target
  <g key="act">
    <circle cx="24" cy="24" r="10" stroke="white" strokeWidth="2" fill="none" />
    <circle cx="24" cy="24" r="4" fill="white" />
  </g>,
  // Engage: send/paper plane
  <path key="engage" d="M10 24l28-12-10 28-6-10-12-6z" stroke="white" strokeWidth="2.5" strokeLinejoin="round" fill="none" />,
]

export default function BlueprintStack({ active, count }: { active: number; count: number }) {
  return (
    <div className="relative mx-auto h-72 w-72">
      {Array.from({ length: count }).map((_, i) => {
        const isActive = i === active
        const depth = i
        return (
          <motion.div
            key={i}
            className="absolute inset-0 flex items-end rounded-[28px] border p-5 shadow-[0_16px_40px_-20px_rgba(33,43,55,0.35)] backdrop-blur-md"
            style={{ zIndex: count - depth }}
            animate={{
              x: depth * 16,
              y: -depth * 12,
              rotate: (depth - (count - 1) / 2) * 5,
              backgroundColor: isActive ? accents[i % accents.length] : 'rgba(255,255,255,0.7)',
              borderColor: isActive ? accents[i % accents.length] : 'rgba(255,255,255,0.7)',
              scale: isActive ? 1.03 : 1,
            }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <motion.svg
              viewBox="0 0 48 48"
              className="h-10 w-10"
              animate={{ opacity: isActive ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {icons[i % icons.length]}
            </motion.svg>
          </motion.div>
        )
      })}
    </div>
  )
}
