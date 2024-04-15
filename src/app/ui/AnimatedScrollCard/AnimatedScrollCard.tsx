"use client";
import useScrollAnimator from "@/app/hooks/useScrollAnimator";
import { PropsWithChildren, ReactNode } from "react";
import "./styles.css"

type PropType = PropsWithChildren<{
    children?: ReactNode,
    nFrames?: number,
    className?: string,
    classOverride?: boolean,
    animationName?: string
    id?: string
}>

const AnimatedScrollCard = ({id, children, nFrames=100, className, classOverride=false, animationName}: Readonly<PropType>) => {
    const [observeRef, animateRef] = useScrollAnimator({nFrames: nFrames});
    const animationNameStr = animationName? `animate-[${animationName}_1s_paused]` : "";
    let classNameStr = "card";
    if(className) {
        if(classOverride) {
            classNameStr = className;
        } else {
            classNameStr = `card ${className}`;
        }
    }
    return(
        <div id={id} ref={(ref) => {observeRef(ref); animateRef(ref)}} className={`${classNameStr} ${animationNameStr}`}>
            {children}
        </div>
    )
}


export default AnimatedScrollCard;