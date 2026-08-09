"use client";
import { PropsWithChildren, ReactNode } from "react";
import useReveal from "@/app/hooks/useReveal";
import { RefCallback } from "@/app/types";

type PropType = PropsWithChildren<{
    children?: ReactNode;
    className?: string;
    id?: string;
    reff?: RefCallback;
    delayMs?: number;
}>;

const AnimatedScrollCard = ({ reff, id, children, className, delayMs = 0 }: Readonly<PropType>) => {
    const [revealed, observeRef] = useReveal();
    return (
        <div
            id={id}
            ref={(ref) => {
                observeRef(ref);
                if (reff) reff(ref);
            }}
            className={`reveal ${revealed ? "reveal-visible" : ""} ${className ?? ""}`}
            style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
        >
            {children}
        </div>
    );
};

export default AnimatedScrollCard;
