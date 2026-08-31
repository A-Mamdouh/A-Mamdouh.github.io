const DRONES = [
    { x: 18, y: 49 },
    { x: 38, y: 27 },
    { x: 55, y: 58 },
    { x: 75, y: 38 },
    { x: 94, y: 58 },
];

const LINKS = [
    [0, 1],
    [0, 2],
    [1, 3],
    [2, 3],
    [2, 4],
    [3, 4],
];

const SwarmMotif = () => (
    <svg
        viewBox="0 0 120 80"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <g strokeWidth={1} strokeOpacity={0.38} strokeDasharray="3 3">
            {LINKS.map(([from, to]) => (
                <line
                    key={`${from}-${to}`}
                    x1={DRONES[from].x}
                    y1={DRONES[from].y}
                    x2={DRONES[to].x}
                    y2={DRONES[to].y}
                />
            ))}
        </g>

        <g strokeWidth={1.2}>
            {DRONES.map(({ x, y }, index) => (
                <g key={`${x}-${y}`} transform={`translate(${x} ${y})`}>
                    <circle r="4.5" fill="var(--surface)" />
                    <path d="M-7 0 H7 M0 -7 V7 M-4 -4 L4 4 M4 -4 L-4 4" strokeOpacity={0.72} />
                    <circle r="1.5" fill="currentColor" stroke="none" />
                    <text
                        x="0"
                        y="13"
                        fill="currentColor"
                        stroke="none"
                        fontSize="5.5"
                        textAnchor="middle"
                        fontFamily="monospace"
                        opacity="0.65"
                    >
                        {index + 1}
                    </text>
                </g>
            ))}
        </g>

        <g transform="translate(104 19)" strokeWidth={1.2}>
            <path d="M0 -7 L5 5 H-5 Z" fill="var(--surface)" />
            <circle r="1.5" fill="currentColor" stroke="none" />
            <path d="M-9 -7 A12 12 0 0 1 9 -7" strokeOpacity={0.65} />
            <path d="M-13 -11 A18 18 0 0 1 13 -11" strokeOpacity={0.35} />
        </g>
    </svg>
);

export default SwarmMotif;
