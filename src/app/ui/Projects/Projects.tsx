"use client";
import { TbArrowUpRight as ArrowIcon } from "react-icons/tb";
import Section from "@/app/ui/kit/Section";
import Tag from "@/app/ui/kit/Tag";
import AnimatedScrollCard from "@/app/ui/AnimatedScrollCard/AnimatedScrollCard";
import { featuredProjects, secondaryProjects } from "@/app/data/content";
import { SectionId } from "@/app/types";
import { MOTIFS } from "./motifs";

type Props = { onIntersect?: (ratio: number | undefined) => void };

const Projects = ({ onIntersect }: Readonly<Props>) => {
    const id: SectionId = "projects";
    return (
        <Section
            id={id}
            eyebrow="02 / Projects"
            title="Selected engineering projects"
            description="Systems I designed and built end-to-end — Fast DDS process communication, real-time computer vision, a graphics engine and a full-stack operations platform."
            onIntersect={onIntersect}
        >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {featuredProjects.map((project, i) => {
                    const Motif = MOTIFS[project.motif];
                    return (
                        <AnimatedScrollCard
                            key={project.id}
                            delayMs={(i % 2) * 100}
                            className="group overflow-hidden rounded-2xl border border-hairline bg-surface"
                        >
                            <a href={project.href} target="_blank" rel="noreferrer" className=" md:items-center flex h-full flex-col md:flex-row">
                                <div className=" flex h-30 items-center justify-center border-b md:border-b-0 md:border-r border-hairline p-6">
                                    <div className="text-accent w-24">
                                        <Motif />
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="flex items-start justify-between gap-3">
                                        <h3 className="text-xl font-semibold">{project.name}</h3>
                                        <ArrowIcon className="text-muted mt-1 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </div>
                                    <p className="text-muted mt-1 text-sm">{project.tagline}</p>
                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <Tag key={tag}>{tag}</Tag>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </AnimatedScrollCard>
                    );
                })}
            </div>

            <a
                href="/projects"
                className="text-accent mt-10 inline-flex items-center gap-2 font-mono text-sm hover:opacity-80"
            >
                View full project archive
                <ArrowIcon />
            </a>
        </Section>
    );
};

export default Projects;
