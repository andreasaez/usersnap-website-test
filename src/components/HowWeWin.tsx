import { howWeWin } from '../data/content'
import Reveal from './Reveal'
import GradientBackdrop from './GradientBackdrop'
import logo from '../assets/logo.svg'
import logoMark from '../assets/icon-mark.svg'
import { icons as iconSet } from '../icons'

const accents = ['#3A21C0', '#899ED7', '#7071A0', '#3A21C0', '#7071A0']

const icons: React.ReactNode[] = [
  iconSet.feedback,
  iconSet.engagement,
  iconSet.research,
  iconSet.roadmapping,
  iconSet.ai,
]

function CategoryIcon({ color, children }: { color: string; children: React.ReactNode }) {
  return (
    <span
      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/60 bg-white/50 shadow-sm backdrop-blur-md"
      style={{ color }}
    >
      <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="currentColor" strokeWidth="1.8">
        {children}
      </svg>
    </span>
  )
}

export default function HowWeWin() {
  return (
    <section id="how-we-win" className="relative overflow-hidden bg-mist/45 py-24">
      <GradientBackdrop />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">{howWeWin.kicker}</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{howWeWin.heading}</h2>
          <p className="mt-4 whitespace-pre-line text-lg text-ink-soft">{howWeWin.sub}</p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <div className="overflow-x-auto rounded-3xl border border-sage/40 bg-white/80 shadow-[0_16px_40px_-24px_rgba(58,33,192,0.18)] backdrop-blur-md">
            <table className="w-full min-w-[900px] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-ink/10 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                  <th className="px-5 py-4">Category</th>
                  <th className="px-5 py-4">Named players</th>
                  <th className="px-5 py-4">Avg. cost</th>
                  <th className="px-5 py-4">Their promise</th>
                  <th className="px-5 py-4">The gap</th>
                </tr>
              </thead>
              <tbody>
                {howWeWin.categories.map((row, i) => (
                  <tr key={row.name} className="border-b border-ink/10 align-top">
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <CategoryIcon color={accents[i % accents.length]}>{icons[i % icons.length]}</CategoryIcon>
                        <span className="font-semibold text-ink">{row.name}</span>
                      </div>
                    </td>
                    <td className="px-5 py-4 text-ink-soft">
                      {row.competitors}
                      {row.redOcean && (
                        <span className="mt-1 block text-xs font-medium text-ink-faint">{row.redOcean}</span>
                      )}
                    </td>
                    <td className="px-5 py-4 whitespace-nowrap text-ink-soft">{row.cost}</td>
                    <td className="px-5 py-4 text-ink-soft">{row.promise}</td>
                    <td className="px-5 py-4 text-ink-faint">{row.gap}</td>
                  </tr>
                ))}
                <tr className="bg-purple-faint">
                  <td className="px-5 py-4">
                    <div className="flex items-center gap-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/60 bg-white shadow-sm">
                        <img src={logoMark} alt="" className="h-5 w-5" />
                      </span>
                      <span className="font-semibold text-purple">{howWeWin.usersnap.name}</span>
                    </div>
                  </td>
                  <td className="px-5 py-4">
                    <img src={logo} alt="Usersnap" className="h-4 w-auto" />
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap text-ink-soft">
                    {howWeWin.usersnap.cost}
                    <span className="mt-1 block text-xs font-semibold text-purple">(best value)</span>
                  </td>
                  <td className="px-5 py-4 font-semibold text-ink">{howWeWin.usersnap.promise}</td>
                  <td className="px-5 py-4 font-semibold text-purple">{howWeWin.usersnap.gap}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
