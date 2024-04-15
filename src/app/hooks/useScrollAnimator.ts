"use client";
import { useEffect, useRef } from "react"
import useIntersectionObserver from "./useIntersectionObserver";

type Callback = (ref: (HTMLElement | null)) => void;

function useScrollAnimator ({nFrames}: Readonly<{nFrames: number}>) : [Callback, Callback] {
    const [intersection, observeRef] = useIntersectionObserver({slices: nFrames});
    
    useEffect(() => {
        if(animatedRef.current) {
            animatedRef.current.style.animationDelay = `${-intersection}s`;
        }
    }, [intersection]);

    const animatedRef = useRef<HTMLElement>();

    return [
        (htmlRef) => {if(htmlRef !== null) animatedRef.current = htmlRef},
        observeRef
    ]
}

export default useScrollAnimator;