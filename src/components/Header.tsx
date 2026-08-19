import { motion } from 'motion/react'
import { nav, hero } from '../data/content'
import logo from '../assets/logo.svg'

const iconAccents: Record<string, string> = {
  research: '#48BBE7',
  workflows: '#3A21CE',
  roadmaps: '#EF5996',
  feedback: '#FB585B',
  engagement: '#48BBE7',
}

const icons: Record<string, React.ReactNode> = {
  research: (
    <>
      <circle cx="10" cy="10" r="6" />
      <path d="M14.5 14.5L19 19" strokeLinecap="round" />
    </>
  ),
  workflows: (
    <>
      <circle cx="6" cy="6" r="2" />
      <circle cx="18" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M7.7 7L11 16M16.3 7L13 16M8 6H16" strokeLinecap="round" />
    </>
  ),
  roadmaps: <path d="M5 3v18M5 4h11l-2 4 2 4H5" strokeLinecap="round" strokeLinejoin="round" />,
  feedback: <path d="M4 4.5h16v11H8.5L4 19V4.5z" strokeLinecap="round" strokeLinejoin="round" />,
  engagement: (
    <>
      <path d="M3 10v4h3l7 4V6l-7 4H3z" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 9.5a4 4 0 010 5" strokeLinecap="round" />
    </>
  ),
}

type NavChild = {
  label: string
  href: string
  description?: string
  icon?: string
}

function DropdownItem({ child }: { child: NavChild }) {
  if (child.icon) {
    return (
      <a
        href={child.href}
        className="flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-purple-faint"
      >
        <span
          className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl"
          style={{ backgroundColor: iconAccents[child.icon] }}
        >
          <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" stroke="white" strokeWidth="1.8">
            {icons[child.icon]}
          </svg>
        </span>
        <span>
          <span className="block text-sm font-semibold text-ink">{child.label}</span>
          <span className="mt-0.5 block text-xs leading-snug text-ink-faint">{child.description}</span>
        </span>
      </a>
    )
  }

  if (child.description) {
    return (
      <a
        href={child.href}
        className="block rounded-xl px-4 py-2.5 transition-colors hover:bg-purple-faint"
      >
        <span className="block text-sm font-semibold text-ink">{child.label}</span>
        <span className="mt-0.5 block text-xs leading-snug text-ink-faint">{child.description}</span>
      </a>
    )
  }

  return (
    <a
      href={child.href}
      className="block rounded-xl px-4 py-2.5 text-sm font-medium text-ink-soft transition-colors hover:bg-purple-faint hover:text-purple"
    >
      {child.label}
    </a>
  )
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center">
          <img src={logo} alt="Usersnap" className="h-6 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => {
            const hasColumns = 'columns' in item && item.columns
            const hasChildren = 'children' in item && item.children

            if (!hasColumns && !hasChildren) {
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                </a>
              )
            }

            return (
              <div key={item.label} className="group relative">
                <a
                  href={item.href ?? '#'}
                  className="flex items-center gap-1 text-sm font-medium text-ink-soft transition-colors hover:text-ink"
                >
                  {item.label}
                  <svg
                    viewBox="0 0 12 8"
                    className="h-2.5 w-2.5 fill-none stroke-current transition-transform group-hover:rotate-180"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M1 1.5L6 6.5L11 1.5" />
                  </svg>
                </a>

                <div className="invisible absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100">
                  <motion.div
                    initial={false}
                    className={`rounded-2xl border border-ink/10 bg-white p-2 shadow-[0_20px_60px_-20px_rgba(58,33,206,0.35)] ${
                      hasColumns ? 'flex w-[34rem]' : 'w-80'
                    }`}
                  >
                    {hasColumns
                      ? item.columns!.map((column, ci) => (
                          <div
                            key={ci}
                            className={`flex-1 p-1 ${ci > 0 ? 'ml-1 border-l border-ink/10 pl-3' : ''}`}
                          >
                            {'heading' in column && column.heading && (
                              <p className="px-3 pt-1.5 pb-1 text-xs font-semibold uppercase tracking-wide text-ink-faint">
                                {column.heading}
                              </p>
                            )}
                            {column.children.map((child) => (
                              <DropdownItem key={child.label} child={child} />
                            ))}
                          </div>
                        ))
                      : item.children!.map((child) => <DropdownItem key={child.label} child={child} />)}
                  </motion.div>
                </div>
              </div>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#book-demo"
            className="rounded-full bg-purple px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-purple-dark"
          >
            {hero.primaryCta}
          </a>
        </div>
      </div>
    </header>
  )
}
