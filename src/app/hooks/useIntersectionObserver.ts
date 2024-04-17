"use client";
import { useEffect, useRef, useState } from "react"
import { RefCallback } from "../types";

function useIntersectionObserver ({slices}: Readonly<{slices: number}>) : [number|undefined, RefCallback] {
    const observedRef = useRef<HTMLElement>();
    const observerRef = useRef<IntersectionObserver>();
    const [intersection, setIntersection] = useState<number | undefined>(undefined);
    const [_, setMemRef] = useState<HTMLElement | undefined>(undefined);
    useEffect(() => {
        // Create observer
        observerRef.current = new IntersectionObserver((entries) => {
            let ratio = 0;
            entries.forEach(entry => {
                ratio = entry.intersectionRatio;
            })
            if(ratio < 1 / (slices - 1)) {
                ratio = 0;
            }
            if(ratio > (slices-1) / slices) {
                ratio = 1;
            }
            setIntersection(ratio);
        },
        {
            threshold: Array(slices).fill(0).map((_, i) => i/(slices-1))
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

    return [
        intersection,
        (ref) => {if(ref !== null) observedRef.current = ref;}
    ];
}

export default useIntersectionObserver;