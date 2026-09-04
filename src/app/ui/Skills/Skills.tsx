"use client";
import { TbArrowUpRight as ArrowIcon } from "react-icons/tb";
import Section from "@/app/ui/kit/Section";
import Tag from "@/app/ui/kit/Tag";
import AnimatedScrollCard from "@/app/ui/AnimatedScrollCard/AnimatedScrollCard";
import { skillGroups } from "@/app/data/content";
import { SectionId } from "@/app/types";

type Props = { onIntersect?: (ratio: number | undefined) => void };

const Skills = ({ onIntersect }: Readonly<Props>) => {
    const id: SectionId = "skills";
    return (
        <Section id={id} eyebrow="04 / Skills" title="Tools I reach for" onIntersect={onIntersect}>
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
                {skillGroups.map((group, i) => (
                    <AnimatedScrollCard key={group.title} delayMs={i * 80}>
                        <h3 className="text-accent mb-4 font-mono text-sm uppercase tracking-wide">
                            {group.title}
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <Tag key={skill}>{skill}</Tag>
                            ))}
                        </div>
                    </AnimatedScrollCard>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
