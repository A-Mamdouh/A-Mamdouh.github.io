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
            description="Systems I designed and built end-to-end — real-time computer vision, a graphics engine, a processor simulator, and a full-stack operations platform."
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
                            <a href={project.href} target="_blank" rel="noreferrer" className="flex h-full flex-col">
                                <div className="text-accent flex h-32 items-center justify-center border-b border-hairline p-6">
                                    <div className="w-28">
                                        <Motif />
                                    </div>
                                </div>
                                <div className="flex flex-1 flex-col p-6">
                                    <div className="flex items-start justify-between gap-3">
                                        <h3 className="text-xl font-semibold">{project.name}</h3>
                                        <ArrowIcon className="text-muted mt-1 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                    </div>
                                    <p className="text-muted mt-1 text-sm">{project.tagline}</p>
                                    <p className="mt-4 text-sm leading-relaxed">{project.description}</p>
                                    <ul className="text-muted mt-4 space-y-1 text-sm">
                                        {project.highlights.map((highlight) => (
                                            <li key={highlight} className="flex gap-2">
                                                <span className="text-accent">·</span>
                                                {highlight}
                                            </li>
                                        ))}
                                    </ul>
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

            <div className="mt-14">
                <p className="eyebrow mb-5">More projects</p>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {secondaryProjects.map((project) => (
                        <a
                            key={project.name}
                            href={project.href}
                            target="_blank"
                            rel="noreferrer"
                            className="group rounded-xl border border-hairline p-5 transition-colors hover:bg-surface"
                        >
                            <div className="flex items-start justify-between gap-3">
                                <h4 className="font-semibold">{project.name}</h4>
                                <ArrowIcon className="text-muted mt-0.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                            </div>
                            <p className="text-muted mt-2 text-sm leading-relaxed">{project.description}</p>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Tag key={tag}>{tag}</Tag>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>
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
