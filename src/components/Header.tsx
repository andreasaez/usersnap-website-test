import { nav, hero } from '../data/content'
import logo from '../assets/logo.svg'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="flex items-center">
          <img src={logo} alt="Usersnap" className="h-6 w-auto" />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
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
