import { useMemo, useState } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { roiCopy, roiDefaults } from '../data/content'
import Reveal from './Reveal'
import GradientBackdrop from './GradientBackdrop'

function AnimatedNumber({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const motionVal = useMotionValue(value)
  const spring = useSpring(motionVal, { stiffness: 90, damping: 20 })
  const display = useTransform(spring, (v) => `${prefix}${Math.round(v).toLocaleString('en-US')}${suffix}`)

  motionVal.set(value)

  return <motion.span>{display}</motion.span>
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  format: (v: number) => string
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <label className="text-sm font-medium text-ink">{label}</label>
        <span className="text-sm font-semibold text-purple">{format(value)}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-purple"
      />
    </div>
  )
}

export default function RoiCalculator() {
  const [numPMs, setNumPMs] = useState(roiDefaults.numPMs)
  const [hoursPerWeek, setHoursPerWeek] = useState(roiDefaults.hoursPerWeek)
  const [hourlyCost, setHourlyCost] = useState(roiDefaults.hourlyCost)

  const results = useMemo(() => {
    const hoursSavedPerWeek = numPMs * hoursPerWeek * roiDefaults.reductionRate
    const hoursSavedPerYear = hoursSavedPerWeek * 52
    const dollarsSavedPerYear = hoursSavedPerYear * hourlyCost
    return { hoursSavedPerWeek, hoursSavedPerYear, dollarsSavedPerYear }
  }, [numPMs, hoursPerWeek, hourlyCost])

  return (
    <section id="roi" className="relative overflow-hidden bg-mist py-24">
      <GradientBackdrop />
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">{roiCopy.kicker}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            {roiCopy.heading}
          </h2>
          <p className="mt-4 text-lg text-ink-soft">{roiCopy.sub}</p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-12 grid gap-0 overflow-hidden rounded-3xl border border-white/60 shadow-[0_20px_60px_-25px_rgba(58,33,206,0.25)] backdrop-blur-xl md:grid-cols-2">
            <div className="space-y-8 bg-white/70 p-8">
              <Slider
                label="Product managers on your team"
                value={numPMs}
                min={2}
                max={30}
                step={1}
                format={(v) => `${v}`}
                onChange={setNumPMs}
              />
              <Slider
                label="Hours per PM spent on manual feedback synthesis, per week"
                value={hoursPerWeek}
                min={1}
                max={15}
                step={1}
                format={(v) => `${v} hrs`}
                onChange={setHoursPerWeek}
              />
              <Slider
                label="Average fully-loaded PM hourly cost"
                value={hourlyCost}
                min={40}
                max={150}
                step={5}
                format={(v) => `$${v}`}
                onChange={setHourlyCost}
              />
            </div>

            <div className="flex flex-col justify-center gap-6 border-t border-white/60 bg-gradient-to-br from-purple-faint via-white to-sky/10 p-8 backdrop-blur-xl md:border-t-0 md:border-l">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  Hours saved per week
                </p>
                <p className="mt-1 text-3xl font-bold text-ink">
                  <AnimatedNumber value={results.hoursSavedPerWeek} />
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  Hours saved per year
                </p>
                <p className="mt-1 text-3xl font-bold text-ink">
                  <AnimatedNumber value={results.hoursSavedPerYear} />
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  Estimated savings per year
                </p>
                <p className="mt-1 text-4xl font-bold text-purple">
                  <AnimatedNumber value={results.dollarsSavedPerYear} prefix="$" />
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs text-ink-faint">{roiCopy.disclaimer}</p>
      </div>
    </section>
  )
}
