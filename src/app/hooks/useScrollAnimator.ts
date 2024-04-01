"use client";
import { useEffect, useRef, useState } from "react"

const useScrollAnimator = ({nFrames}: Readonly<{nFrames: number}>) => {
    const observedRef = useRef<HTMLElement>();
    const observerRef = useRef<IntersectionObserver>();
    const animatedRef = useRef<HTMLElement>();
    const [_, setMemRef] = useState<HTMLElement | undefined>(undefined);
    useEffect(() => {
        // Create observer
        observerRef.current = new IntersectionObserver((entries) => {
            let ratio = 0;
            entries.forEach(entry => {
                ratio = entry.intersectionRatio;
            })
            if(ratio < 1 / (nFrames - 1)) {
                ratio = 0;
            }
            if(ratio > (nFrames-1) / nFrames) {
                ratio = 1;
            }
            if(animatedRef.current) {
                animatedRef.current.style.animationDelay = `${-ratio}s`;
            }
        },
        {
            threshold: Array(nFrames).fill(0).map((_, i) => i/(nFrames-1))
        });
        // Return clean up function
        return () => {
            observerRef.current && observedRef.current && observerRef.current.unobserve(observedRef.current);
        }
    }, []);

    useEffect(
        () => {
            if(observerRef.current === undefined) return;
            setMemRef((oldValue) => {
                oldValue && observerRef.current?.unobserve(oldValue);
                observedRef.current && observerRef.current?.observe(observedRef.current);
                return observedRef.current;
            })
        },
        [observedRef, observerRef]
    );
    return {
        animateRef: (htmlRef: HTMLDivElement | null) => {if(htmlRef !== null) animatedRef.current = htmlRef},
        observeRef: (htmlRef: HTMLDivElement | null) => {if(htmlRef !== null) observedRef.current = htmlRef}
    }
}

export default useScrollAnimator;