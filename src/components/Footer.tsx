import logo from '../assets/logo.svg'
import { footer } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-5 px-6 text-left lg:px-8">
        <img src={logo} alt="Usersnap" className="h-6 w-auto" />
        <p className="max-w-md text-sm font-medium text-ink">
          Every tool, every customer, every conversation orchestrated.
          <br />
          Get started in a snap.
        </p>
        <a
          href={footer.ctaHref}
          className="rounded-full bg-purple px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-purple-dark"
        >
          {footer.cta}
        </a>
        <p className="mt-4 text-xs text-ink-faint">© {new Date().getFullYear()} Usersnap. All rights reserved.</p>
      </div>
    </footer>
  )
}
