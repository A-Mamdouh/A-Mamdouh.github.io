"use client";
import { useEffect, useRef, useState } from "react"
import useIntersectionObserver from "./useIntersectionObserver";
import { RefCallback } from "../types";

function useScrollAnimator ({nFrames}: Readonly<{nFrames: number}>) : [RefCallback, RefCallback, number | undefined] {
    const [intersection, observeRef] = useIntersectionObserver({slices: nFrames});
    const [loaded, setLoaded] = useState<boolean>(false);
    useEffect(() => {setLoaded(true)}, []);
    useEffect(() => {
        if(!loaded) return;
        if(animatedRef.current && intersection !== undefined) {
            animatedRef.current.style.animationDelay = `${-intersection}s`;
        }
    }, [intersection, loaded]);

    const animatedRef = useRef<HTMLElement>();

    return [
        observeRef,
        (htmlRef) => {if(htmlRef !== null) animatedRef.current = htmlRef},
        intersection
    ]
}

export default useScrollAnimator;