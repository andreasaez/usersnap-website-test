// Shared line-icon set, 24x24 viewBox. Each entry is bare path/g content that
// inherits stroke/fill from the wrapping <svg> — kept deliberately specific to
// what Usersnap actually does (a screenshot pin, a traced line to a checkpoint,
// a roadmap waypoint path) rather than the stock chat-bubble/megaphone/shield
// set every SaaS site reaches for.

// Snappy's mark on its native 20x20 grid — a small friendly robot head,
// carried over from the dashboard's agent dock. Use this directly when you
// control the placement transform yourself (e.g. centering it in a hub).
export const snappyGlyph20 = (
  <>
    <circle cx="10" cy="3.6" r="1" fill="currentColor" stroke="none" />
    <path d="M10 4.6v1.4" strokeWidth="1.4" strokeLinecap="round" />
    <rect x="4.7" y="6.4" width="10.6" height="8.4" rx="2.6" strokeWidth="1.4" />
    <circle cx="7.9" cy="10.6" r="1.05" fill="currentColor" stroke="none" />
    <circle cx="12.1" cy="10.6" r="1.05" fill="currentColor" stroke="none" />
    <path d="M4.7 11.3H3.3M15.3 11.3h1.4" strokeWidth="1.4" strokeLinecap="round" />
  </>
)

// Same mark, pre-centered on a 24x24 grid for drop-in use inside the shared icon set.
export const snappyMark = <g transform="translate(2,2)">{snappyGlyph20}</g>

export const icons: Record<string, React.ReactNode> = {
  // Visual feedback tools: a screenshot with an annotation pin dropped on it
  feedback: (
    <g>
      <rect x="3.5" y="4" width="17" height="13" rx="2.2" />
      <path d="M8 20.5h8" strokeLinecap="round" />
      <circle cx="14" cy="10.3" r="1.6" />
      <path d="M14 11.9v2.4" strokeLinecap="round" />
    </g>
  ),
  // Engagement tools: an in-app widget with an active/unread indicator
  engagement: (
    <g>
      <rect x="4" y="5" width="16" height="10" rx="2.6" />
      <path d="M8 15l-1.6 3.2 4.4-2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16.5" cy="9.5" r="1.15" fill="currentColor" stroke="none" />
    </g>
  ),
  // Research tools: a magnifier over two lines of notes, not a bare glass
  research: (
    <g>
      <circle cx="10" cy="10" r="6.2" />
      <path d="M8 8.6h4M8 11.4h2.6" strokeLinecap="round" />
      <path d="M14.6 14.6L19 19" strokeLinecap="round" />
    </g>
  ),
  // Roadmapping tools: a waypoint path, not a flag
  roadmapping: (
    <g>
      <path d="M4.5 17.5c3-1 4-6 7-7s4.5 3.5 8 2.5" strokeLinecap="round" />
      <circle cx="4.7" cy="17.3" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="11.6" cy="10.6" r="1.3" fill="currentColor" stroke="none" />
      <circle cx="19.4" cy="12.6" r="1.3" fill="currentColor" stroke="none" />
    </g>
  ),
  // AI platforms: an orbiting node, not a sparkle
  ai: (
    <g>
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="8.5" ry="3.6" transform="rotate(-24 12 12)" />
      <circle cx="19.6" cy="8.2" r="1.2" fill="currentColor" stroke="none" />
    </g>
  ),
  usersnap: snappyMark,

  // Zero-friction implementation: one node plugging into a module
  implementation: (
    <g>
      <circle cx="6" cy="12" r="2.2" />
      <path d="M8.2 12h4.3" strokeLinecap="round" />
      <rect x="12.5" y="8.8" width="7.5" height="6.4" rx="2" />
      <path d="M15.3 8.8V6.6M17.7 8.8V6.6" strokeLinecap="round" />
    </g>
  ),
  // Orchestration: three connected sources
  orchestration: (
    <g>
      <circle cx="6" cy="7" r="2.1" />
      <circle cx="18" cy="7" r="2.1" />
      <circle cx="12" cy="18" r="2.1" />
      <path d="M8.1 7.6L15.9 7.6M9.4 8.9L11.3 16.1M14.6 8.9L12.7 16.1" strokeLinecap="round" />
    </g>
  ),
  // Evidence-to-impact reporting: a traced line from source to checkpoint
  reporting: (
    <g>
      <circle cx="5.2" cy="18" r="1.7" />
      <path d="M7.3 16.6L16.9 6.6" strokeLinecap="round" strokeDasharray="1 3.2" />
      <rect x="15.6" y="4.4" width="4.6" height="4.6" rx="1.2" />
    </g>
  ),
  // Guardrails: two rails with a path held safely between them
  guardrails: (
    <g>
      <path d="M7 4v16" strokeLinecap="round" />
      <path d="M17 4v16" strokeLinecap="round" />
      <path d="M7 12h10" strokeLinecap="round" strokeDasharray="1 3" />
      <circle cx="12" cy="12" r="1.8" fill="currentColor" stroke="none" />
    </g>
  ),
}
