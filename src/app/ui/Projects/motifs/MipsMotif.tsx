const STAGES = ["IF", "ID", "EX", "MEM", "WB"];

const MipsMotif = () => (
    <svg viewBox="0 0 120 80" className="h-full w-full" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth={1.2}>
            {STAGES.map((label, i) => {
                const x = 4 + i * 23;
                return (
                    <g key={label}>
                        <rect x={x} y={12} width={18} height={18} rx={2} />
                        {i < STAGES.length - 1 && (
                            <line x1={x + 18} y1={21} x2={x + 23} y2={21} />
                        )}
                    </g>
                );
            })}
        </g>
        <g fill="currentColor" stroke="none" fontSize={6.5} textAnchor="middle" fontFamily="monospace">
            {STAGES.map((label, i) => (
                <text key={label} x={4 + i * 23 + 9} y={24}>
                    {label}
                </text>
            ))}
        </g>
        <g fill="none" stroke="currentColor" strokeWidth={1} strokeOpacity={0.55}>
            {Array.from({ length: 4 }).map((_, r) =>
                Array.from({ length: 8 }).map((_, c) => (
                    <rect key={`${r}-${c}`} x={4 + c * 14.25} y={46 + r * 8} width={11} height={5} />
                ))
            )}
        </g>
    </svg>
);

export default MipsMotif;
