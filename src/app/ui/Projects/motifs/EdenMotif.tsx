const EdenMotif = () => (
    <svg
        viewBox="0 0 120 80"
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        strokeLinejoin="round"
        aria-hidden="true"
    >
        <path d="M60 10 L98 30 L60 50 L22 30 Z" />
        <path d="M22 30 L22 56 L60 76 L60 50 Z" />
        <path d="M60 50 L60 76 L98 56 L98 30 Z" />
        <path d="M60 10 L60 50" strokeOpacity={0.45} />
        <path d="M22 30 L60 50" strokeOpacity={0.45} />
        <path d="M98 30 L60 50" strokeOpacity={0.45} />
    </svg>
);

export default EdenMotif;
