import { howWeWin } from '../data/content'
import Reveal from './Reveal'
import GradientBackdrop from './GradientBackdrop'
import logo from '../assets/logo.svg'

const accents = ['#48BBE7', '#EF5996', '#FB585B', '#212B37', '#48BBE7']

const icons: React.ReactNode[] = [
  // Feedback tools: chat bubble
  <path key="feedback" d="M4 4.5h16v11H8.5L4 19V4.5z" strokeLinecap="round" strokeLinejoin="round" />,
  // Communication platforms: megaphone
  <g key="communication">
    <path d="M3 10v4h3l7 4V6l-7 4H3z" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15 9.5a4 4 0 010 5" strokeLinecap="round" />
  </g>,
  // Research tools: magnifying glass
  <g key="research">
    <circle cx="10" cy="10" r="6" />
    <path d="M14.5 14.5L19 19" strokeLinecap="round" />
  </g>,
  // Roadmapping tools: flag
  <path key="roadmapping" d="M5 3v18M5 4h11l-2 4 2 4H5" strokeLinecap="round" strokeLinejoin="round" />,
  // AI platforms: sparkle
  <path
    key="ai"
    d="M12 4l1.8 4.7L18.5 10.5l-4.7 1.8L12 17l-1.8-4.7L5.5 10.5l4.7-1.8L12 4z"
    strokeLinejoin="round"
  />,
]

const usersnapIcon = (
  <g>
    <path d="M12 3l7 3v5c0 5-3 8-7 9-4-1-7-4-7-9V6l7-3z" strokeLinejoin="round" />
    <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
  </g>
)

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
    <section id="how-we-win" className="relative overflow-hidden bg-mist py-24">
      <GradientBackdrop />
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple">{howWeWin.kicker}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{howWeWin.heading}</h2>
          <p className="mt-4 text-lg text-ink-soft">{howWeWin.sub}</p>
        </Reveal>

        <Reveal delay={0.15} className="mt-12">
          <div className="overflow-x-auto rounded-3xl border border-white/60 bg-white/70 shadow-[0_20px_60px_-25px_rgba(58,33,206,0.25)] backdrop-blur-xl">
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
                        <span className="mt-1 block text-xs font-medium text-red">{row.redOcean}</span>
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
                      <CategoryIcon color="#3A21CE">{usersnapIcon}</CategoryIcon>
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
