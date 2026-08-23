"use client";
import { useEffect, useRef, useState } from "react";
import useReveal from "@/app/hooks/useReveal";
import { Stat as StatData } from "@/app/data/content";

const VALUE_PATTERN = /^(\d+(?:\.\d+)?)(.*)$/;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

const Stat = ({ stat }: Readonly<{ stat: StatData }>) => {
    const [revealed, ref] = useReveal(0.4);
    const match = stat.value.match(VALUE_PATTERN);
    const target = match ? parseFloat(match[1]) : null;
    const suffix = match ? match[2] : "";
    const decimals = match && match[1].includes(".") ? match[1].split(".")[1].length : 0;

    const [display, setDisplay] = useState(target !== null ? (0).toFixed(decimals) : stat.value);
    const animatedRef = useRef(false);

    useEffect(() => {
        if (!revealed || animatedRef.current || target === null) return;
        animatedRef.current = true;

        const duration = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 900;
        const start = performance.now();
        let frame: number;
        const tick = (now: number) => {
            const progress = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
            setDisplay((target * easeOutCubic(progress)).toFixed(decimals));
            if (progress < 1) {
                frame = requestAnimationFrame(tick);
            }
        };
        frame = requestAnimationFrame(tick);
        return () => cancelAnimationFrame(frame);
    }, [revealed, target, decimals]);

    return (
        <div ref={ref} className="flex flex-col gap-1.5">
            <p className="text-accent font-mono text-3xl font-semibold tabular-nums md:text-4xl">
                {target !== null ? `${display}${suffix}` : stat.value}
            </p>
            <p className="text-sm font-medium uppercase tracking-wide">{stat.label}</p>
            <p className="text-muted text-xs">{stat.detail}</p>
        </div>
    );
};

export default Stat;
