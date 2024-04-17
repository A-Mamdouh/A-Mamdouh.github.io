"use client";
import { useEffect, useRef } from "react"
import useIntersectionObserver from "./useIntersectionObserver";
import { RefCallback } from "../types";

function useScrollAnimator ({nFrames}: Readonly<{nFrames: number}>) : [RefCallback, RefCallback, number] {
    const [intersection, observeRef] = useIntersectionObserver({slices: nFrames});
    useEffect(() => {
        if(animatedRef.current) {
            animatedRef.current.style.animationDelay = `${-intersection}s`;
        }
    }, [intersection]);

    const animatedRef = useRef<HTMLElement>();

    return [
        observeRef,
        (htmlRef) => {if(htmlRef !== null) animatedRef.current = htmlRef},
        intersection
    ]
}

export default useScrollAnimator;