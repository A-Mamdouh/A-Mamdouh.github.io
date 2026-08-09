"use client";
import Section from "@/app/ui/kit/Section";
import AnimatedScrollCard from "@/app/ui/AnimatedScrollCard/AnimatedScrollCard";
import { education } from "@/app/data/content";
import { SectionId } from "@/app/types";

type Props = { onIntersect?: (ratio: number | undefined) => void };

const Education = ({ onIntersect }: Readonly<Props>) => {
    const id: SectionId = "education";
    return (
        <Section id={id} eyebrow="05 / Education" title="Education" onIntersect={onIntersect}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {education.map((entry, i) => (
                    <AnimatedScrollCard
                        key={entry.school}
                        delayMs={i * 80}
                        className="rounded-2xl border border-hairline p-6"
                    >
                        <p className="text-muted font-mono text-xs uppercase tracking-wide">
                            {entry.start} – {entry.end} · Grade {entry.grade}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold">{entry.degree}</h3>
                        <p className="text-muted mt-1">{entry.school}</p>
                        <p className="mt-4 text-sm leading-relaxed">{entry.details}</p>
                    </AnimatedScrollCard>
                ))}
            </div>
        </Section>
    );
};

export default Education;
