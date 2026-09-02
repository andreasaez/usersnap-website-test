const GRADIENT_ID = 'snappyCharacterGradient'

function TicketChip({ x, y, rotate, lineColor }: { x: number; y: number; rotate: number; lineColor: string }) {
  return (
    <g transform={`translate(${x},${y}) rotate(${rotate})`}>
      <rect width="34" height="22" rx="6" fill="white" stroke="#2E314622" strokeWidth="1.4" />
      <line x1="6" y1="8" x2="25" y2="8" stroke={lineColor} strokeWidth="2.6" strokeLinecap="round" />
      <line x1="6" y1="14" x2="17" y2="14" stroke="#2E314633" strokeWidth="2.6" strokeLinecap="round" />
    </g>
  )
}

export default function SnappyCharacter({ mood }: { mood: 'overwhelmed' | 'confident' }) {
  const isConfident = mood === 'confident'

  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" role="img" aria-label={isConfident ? 'Snappy, confident' : 'Snappy, overwhelmed'}>
      <defs>
        <linearGradient id={GRADIENT_ID} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#392CCB" />
          <stop offset="100%" stopColor="#7D2AE8" />
        </linearGradient>
      </defs>

      <ellipse cx="100" cy="178" rx="40" ry="7" fill="#2E3146" opacity="0.08" />

      {isConfident ? (
        <g opacity="0.95">
          <TicketChip x={14} y={40} rotate={0} lineColor="#899ED7" />
          <TicketChip x={34} y={68} rotate={0} lineColor="#7071A0" />
          <line x1="46" y1="55" x2="66" y2="80" stroke="#B3BEB3" strokeWidth="1.6" strokeDasharray="2.5 3.5" />
          <line x1="64" y1="83" x2="80" y2="100" stroke="#B3BEB3" strokeWidth="1.6" strokeDasharray="2.5 3.5" />
        </g>
      ) : (
        <g opacity="0.9">
          <TicketChip x={20} y={22} rotate={-16} lineColor="#899ED7" />
          <TicketChip x={132} y={16} rotate={13} lineColor="#7071A0" />
          <TicketChip x={4} y={78} rotate={-8} lineColor="#3A21C0" />
          <TicketChip x={146} y={80} rotate={18} lineColor="#899ED7" />
        </g>
      )}

      <g transform={isConfident ? 'translate(96,118)' : 'translate(94,116) rotate(-5)'}>
        {isConfident ? (
          <>
            <rect x="-52" y="-6" width="15" height="28" rx="7.5" fill={`url(#${GRADIENT_ID})`} transform="rotate(12)" />
            <rect x="32" y="-8" width="38" height="15" rx="7.5" fill={`url(#${GRADIENT_ID})`} transform="rotate(24)" />
          </>
        ) : (
          <>
            <rect x="-47" y="-31" width="16" height="34" rx="8" fill={`url(#${GRADIENT_ID})`} transform="rotate(-38)" />
            <rect x="31" y="-31" width="16" height="34" rx="8" fill={`url(#${GRADIENT_ID})`} transform="rotate(38)" />
          </>
        )}

        <ellipse cx="-16" cy="54" rx="11" ry="6.5" fill={`url(#${GRADIENT_ID})`} />
        <ellipse cx="16" cy="54" rx="11" ry="6.5" fill={`url(#${GRADIENT_ID})`} />

        <rect x="-42" y="-38" width="84" height="80" rx="31" fill={`url(#${GRADIENT_ID})`} />

        <line x1="0" y1="-38" x2="0" y2="-57" stroke="#7D2AE8" strokeWidth="3.5" strokeLinecap="round" />
        <circle cx="0" cy="-62" r="5.5" fill="white" stroke="#7D2AE8" strokeWidth="2" />

        {isConfident ? (
          <>
            <path d="M-19,-15 L-9,-13.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M19,-15 L9,-13.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M-19,-3 Q-13,-8.5 -8,-3" stroke="white" strokeWidth="2.8" fill="none" strokeLinecap="round" />
            <path d="M8,-3 Q13,-8.5 19,-3" stroke="white" strokeWidth="2.8" fill="none" strokeLinecap="round" />
            <path d="M-9,13.5 Q0,20.5 9,13.5" stroke="white" strokeWidth="2.8" fill="none" strokeLinecap="round" />
          </>
        ) : (
          <>
            <path d="M-19,-13 L-9,-17.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <path d="M19,-13 L9,-17.5" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="-13.5" cy="-3" r="7" fill="white" />
            <circle cx="13.5" cy="-3" r="7" fill="white" />
            <circle cx="-12" cy="-1.5" r="3.2" fill="#2E3146" />
            <circle cx="15" cy="-1.5" r="3.2" fill="#2E3146" />
            <ellipse cx="0" cy="16" rx="5" ry="5.5" fill="white" opacity="0.92" />
          </>
        )}
      </g>

      {isConfident && (
        <g transform="translate(160,118)">
          <circle r="14" fill="#3A21C014" stroke="#3A21C0" strokeWidth="1.3" />
          <path d="M-5,0 L-1.5,4 L6,-5" stroke="#3A21C0" strokeWidth="2.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      )}
    </svg>
  )
}
