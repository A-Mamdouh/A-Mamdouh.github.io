"use client";
import Section from "@/app/ui/kit/Section";
import AnimatedScrollCard from "@/app/ui/AnimatedScrollCard/AnimatedScrollCard";
import { experience } from "@/app/data/content";
import { SectionId } from "@/app/types";

type Props = { onIntersect?: (ratio: number | undefined) => void };

const Experience = ({ onIntersect }: Readonly<Props>) => {
    const id: SectionId = "experience";
    return (
        <Section id={id} eyebrow="03 / Experience" title="Where I've built things" onIntersect={onIntersect}>
            <div className="border-hairline divide-[var(--border)] divide-y border-t">
                {experience.map((job, i) => (
                    <AnimatedScrollCard
                        key={job.company}
                        delayMs={i * 80}
                        className="grid grid-cols-1 gap-4 py-10 md:grid-cols-[1fr_2fr] md:gap-8"
                    >
                        <div>
                            <h3 className="text-xl font-semibold">{job.company}</h3>
                            <p className="text-muted mt-1">{job.role}</p>
                            <p className="text-muted mt-3 font-mono text-xs uppercase tracking-wide">
                                {job.start} – {job.end}
                            </p>
                            <p className="text-muted font-mono text-xs uppercase tracking-wide">{job.location}</p>
                        </div>
                        <ul className="space-y-2.5 text-base leading-relaxed">
                            {job.bullets.map((bullet) => (
                                <li key={bullet} className="flex gap-3">
                                    <span className="text-accent mt-2 block h-1.5 w-1.5 shrink-0 rounded-full bg-current" />
                                    <span>{bullet}</span>
                                </li>
                            ))}
                        </ul>
                    </AnimatedScrollCard>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
