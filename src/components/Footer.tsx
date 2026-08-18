import logo from '../assets/logo.svg'

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 sm:flex-row lg:px-8">
        <img src={logo} alt="Usersnap" className="h-5 w-auto opacity-70" />
        <p className="text-xs text-ink-faint">© {new Date().getFullYear()} Usersnap. All rights reserved.</p>
      </div>
    </footer>
  )
}
