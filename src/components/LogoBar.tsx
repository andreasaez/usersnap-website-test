import { logoBar } from '../data/content'
import Reveal from './Reveal'

export default function LogoBar() {
  return (
    <div id="customers" className="border-t border-ink/10 py-10">
      <Reveal>
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-ink-faint">
          {logoBar.label}
        </p>
        <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logoBar.logos.map((name) => (
            <span key={name} className="text-xl font-bold text-ink/30 grayscale">
              {name}
            </span>
          ))}
        </div>
      </Reveal>
    </div>
  )
}
