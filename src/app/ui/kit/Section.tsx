"use client";
import { PropsWithChildren, ReactNode, useEffect } from "react";
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import useReveal from "@/app/hooks/useReveal";
import { SectionId } from "@/app/types";

type SectionProps = PropsWithChildren<{
    id: SectionId;
    eyebrow: string;
    title: string;
    description?: string;
    onIntersect?: (ratio: number | undefined) => void;
    children?: ReactNode;
}>;

const Section = ({ id, eyebrow, title, description, onIntersect, children }: Readonly<SectionProps>) => {
    const [navRatio, navRef] = useIntersectionObserver({ slices: 3 });
    const [revealed, revealRef] = useReveal(0.12);

    useEffect(() => {
        onIntersect?.(navRatio);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [navRatio]);

    return (
        <section
            id={id}
            ref={(el) => {
                navRef(el);
                revealRef(el);
            }}
            className={`reveal scroll-mt-24 border-t border-hairline px-6 py-20 md:px-10 md:py-28 ${
                revealed ? "reveal-visible" : ""
            }`}
        >
            <div className="mx-auto max-w-content">
                <p className="eyebrow mb-3">{eyebrow}</p>
                <h2 className="mb-4 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
                {description && (
                    <p className="text-muted mb-10 max-w-2xl text-base md:text-lg">{description}</p>
                )}
                <div>{children}</div>
            </div>
        </section>
    );
};

export default Section;
