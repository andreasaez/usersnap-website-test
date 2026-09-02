import { icons } from '../icons'

const ICON_ACCENT = '#899ED7'

function MiniChrome({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between border-b border-ink/10 px-3.5 py-2">
      <div className="flex gap-1.5">
        <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
        <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
      </div>
      <span className="text-[9px] font-semibold uppercase tracking-wide text-ink-faint">{label}</span>
    </div>
  )
}

function MiniIcon({ name }: { name: string }) {
  return (
    <span
      className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg"
      style={{ backgroundColor: ICON_ACCENT }}
    >
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="white" strokeWidth="2">
        {icons[name]}
      </svg>
    </span>
  )
}

function CheckBadge() {
  return (
    <span className="flex items-center gap-1 rounded-full bg-purple-faint px-2 py-1 text-[9px] font-semibold text-purple">
      <svg viewBox="0 0 12 12" className="h-2 w-2" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M2.5 6.2l2.2 2.2 4.8-4.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Connected
    </span>
  )
}

function ImplementationPreview() {
  return (
    <>
      <MiniChrome label="Setup" />
      <div className="flex items-center gap-2.5 px-3.5 py-3.5">
        <MiniIcon name="implementation" />
        <div className="flex-1">
          <div className="h-1.5 w-3/4 rounded-full bg-ink/10" />
          <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-ink/10" />
        </div>
        <CheckBadge />
      </div>
    </>
  )
}

function OrchestrationPreview() {
  const nodes = ['#3A21C0', '#7071A0', '#899ED7']
  return (
    <>
      <MiniChrome label="Sync" />
      <div className="flex items-center justify-center gap-2.5 px-3.5 py-3.5">
        {nodes.map((c, i) => (
          <span key={i} className="relative flex items-center">
            <span className="h-4 w-4 rounded-full" style={{ backgroundColor: c }} />
            <span className="h-px w-3 bg-ink/15" />
          </span>
        ))}
        <MiniIcon name="orchestration" />
      </div>
    </>
  )
}

function ReportingPreview() {
  return (
    <>
      <MiniChrome label="Trace" />
      <div className="flex items-center gap-2 px-3.5 py-3.5">
        <span className="h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: '#7071A0' }} />
        <span className="h-px flex-1 border-t border-dashed border-ink/20" />
        <MiniIcon name="reporting" />
        <span className="h-px flex-1 border-t border-dashed border-ink/20" />
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-purple-faint">
          <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" fill="none" stroke="#3A21C0" strokeWidth="2">
            <path d="M2.5 6.2l2.2 2.2 4.8-4.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </div>
    </>
  )
}

function GuardrailsPreview() {
  return (
    <>
      <MiniChrome label="Security" />
      <div className="flex items-center gap-2.5 px-3.5 py-3.5">
        <MiniIcon name="guardrails" />
        <div className="flex-1">
          <div className="h-1.5 w-2/3 rounded-full bg-ink/10" />
        </div>
        <span className="flex h-4 w-7 shrink-0 items-center rounded-full bg-purple p-0.5">
          <span className="ml-auto block h-3 w-3 rounded-full bg-white" />
        </span>
      </div>
    </>
  )
}

const PREVIEWS: Record<string, () => React.ReactElement> = {
  implementation: ImplementationPreview,
  orchestration: OrchestrationPreview,
  reporting: ReportingPreview,
  guardrails: GuardrailsPreview,
}

export default function DifferentiatorPreview({ variant }: { variant: string }) {
  const Preview = PREVIEWS[variant] ?? ImplementationPreview
  return <Preview />
}
