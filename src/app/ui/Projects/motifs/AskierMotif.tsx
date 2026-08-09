const DENSITY = [
    [0.1, 0.2, 0.3, 0.4, 0.4, 0.3, 0.2, 0.1],
    [0.2, 0.4, 0.6, 0.8, 0.8, 0.6, 0.4, 0.2],
    [0.3, 0.6, 0.9, 1.0, 1.0, 0.9, 0.6, 0.3],
    [0.2, 0.4, 0.6, 0.8, 0.8, 0.6, 0.4, 0.2],
    [0.1, 0.2, 0.3, 0.4, 0.4, 0.3, 0.2, 0.1],
];

const CELL_W = 15;
const CELL_H = 16;

const AskierMotif = () => (
    <svg viewBox="0 0 120 80" className="h-full w-full" aria-hidden="true">
        {DENSITY.map((row, y) =>
            row.map((d, x) => {
                const size = d * CELL_W * 0.8;
                const insetX = (CELL_W - size) / 2;
                const insetY = (CELL_H - size) / 2;
                return (
                    <rect
                        key={`${x}-${y}`}
                        x={x * CELL_W + insetX}
                        y={y * CELL_H + insetY}
                        width={size}
                        height={size}
                        fill="currentColor"
                        opacity={0.3 + d * 0.6}
                    />
                );
            })
        )}
    </svg>
);

export default AskierMotif;
