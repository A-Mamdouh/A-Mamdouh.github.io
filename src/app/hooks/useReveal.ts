"use client";

import { useEffect, useRef, useState } from "react";
import { RefCallback } from "../types";

/**
 * Cheap "reveal once" observer for section/card fade-ins — a single
 * threshold crossing flips a boolean and disconnects, unlike
 * useIntersectionObserver's per-frame ratio tracking (reserved for the
 * hero's scroll-scrubbed collapse, where that cost is actually needed).
 */
function useReveal(threshold = 0.2): [boolean, RefCallback] {
    const nodeRef = useRef<HTMLElement | null>(null);
    const [revealed, setRevealed] = useState(false);

    useEffect(() => {
        const node = nodeRef.current;
        if (!node) return;
        if (typeof IntersectionObserver === "undefined") {
            const timeout = window.setTimeout(() => setRevealed(true), 0);
            return () => window.clearTimeout(timeout);
        }
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setRevealed(true);
                    observer.disconnect();
                }
            },
            { threshold, rootMargin: "0px 0px -10% 0px" }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [threshold]);

    return [revealed, (el) => { nodeRef.current = el; }];
}

export default useReveal;
