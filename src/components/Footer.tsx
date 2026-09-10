import logo from '../assets/logo.svg'
import { footer, nav } from '../data/content'

function findNavItem(label: string) {
  return nav.find((item) => item.label === label)
}

function flattenColumns(children: { label: string; href: string }[][]) {
  return children.flat()
}

const platformItem = findNavItem('Platform')
const solutionsItem = findNavItem('Solutions')
const resourcesItem = findNavItem('Resources')

const platformLinks =
  platformItem && 'columns' in platformItem && platformItem.columns
    ? flattenColumns(platformItem.columns.map((c) => c.children))
    : []

const useCasesColumn =
  solutionsItem && 'columns' in solutionsItem && solutionsItem.columns ? solutionsItem.columns[0] : undefined
const pmToolkitColumn =
  solutionsItem && 'columns' in solutionsItem && solutionsItem.columns ? solutionsItem.columns[1] : undefined

const resourcesLinks = resourcesItem && 'children' in resourcesItem && resourcesItem.children ? resourcesItem.children : []

const footerColumns = [
  { heading: 'Platform', links: platformLinks },
  { heading: useCasesColumn?.heading ?? 'Solutions', links: useCasesColumn?.children ?? [] },
  { heading: pmToolkitColumn?.heading ?? 'PM toolkit', links: pmToolkitColumn?.children ?? [] },
  { heading: 'Resources', links: resourcesLinks },
  {
    heading: 'Company',
    links: [
      { label: 'Customers', href: '#customers' },
      { label: 'Pricing', href: '#' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-[1.3fr_repeat(5,1fr)] lg:gap-6">
          <div className="col-span-2 flex flex-col items-start gap-5 sm:col-span-3 lg:col-span-1">
            <img src={logo} alt="Usersnap" className="h-6 w-auto" />
            <p className="max-w-xs text-sm font-medium text-ink">
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
          </div>

          {footerColumns.map((column) => (
            <div key={column.heading}>
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-faint">{column.heading}</p>
              <ul className="mt-4 flex flex-col gap-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-ink-soft transition-colors hover:text-purple"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 border-t border-ink/10 pt-6">
          <p className="text-xs text-ink-faint">© {new Date().getFullYear()} Usersnap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
