"use client";
import Section from "@/app/ui/kit/Section";
import { about } from "@/app/data/content";
import { SectionId } from "@/app/types";

type Props = { onIntersect?: (ratio: number | undefined) => void };

const About = ({ onIntersect }: Readonly<Props>) => {
    const id: SectionId = "about";
    return (
        <Section
            id={id}
            eyebrow="01 / About"
            title="Applied AI and performance-critical C++"
            onIntersect={onIntersect}
        >
            <div className="max-w-3xl space-y-5 text-lg leading-relaxed md:text-xl">
                {about.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
        </Section>
    );
};

export default About;
