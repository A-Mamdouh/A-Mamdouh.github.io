import { Metadata } from "next";
import { TbArrowUpRight as ArrowIcon } from "react-icons/tb";
import SiteHeader from "@/app/ui/site/SiteHeader";
import Tag from "@/app/ui/kit/Tag";
import AnimatedScrollCard from "@/app/ui/AnimatedScrollCard/AnimatedScrollCard";
import { featuredProjects, secondaryProjects } from "@/app/data/content";
import { MOTIFS } from "@/app/ui/Projects/motifs";

export const metadata: Metadata = {
    title: "Project Archive",
    description:
        "The full catalog of Ahmed Mamdouh's engineering projects, including the systems-level and C++ work behind Askier, Eden/NoClip and SkyFox.",
};

const CPP_STACK = ["C++", "Qt 6", "OpenCV", "OpenGL", "OpenCL", "Intel TBB", "CMake"];

export default function ProjectsArchivePage() {
    return (
        <main id="main">
            <SiteHeader visible />
            <div className="mx-auto max-w-content px-6 pb-28 pt-32 md:px-10">
                <p className="eyebrow mb-3">Archive</p>
                <h1 className="mb-4 text-4xl font-semibold tracking-tight md:text-5xl">All projects</h1>
                <p className="text-muted max-w-2xl text-lg">
                    The fuller picture beyond the homepage highlights — including the systems-level and C++ work
                    that a short list can&apos;t fully show.
                </p>

                <div className="mt-12 max-w-2xl space-y-4 border-y border-hairline py-8">
                    <p className="eyebrow">C++ &amp; Systems Engineering</p>
                    <p className="text-base leading-relaxed">
                        I use modern C++ where performance, control and cross-platform execution matter. My work
                        includes real-time image processing with Qt 6 and OpenCV, GPU acceleration with OpenCL,
                        parallel execution with Intel TBB and graphics programming with OpenGL.
                    </p>
                    <p className="text-muted text-base leading-relaxed">
                        Askier explores modular real-time processing across camera, CPU and GPU workloads.
                        Eden/NoClip is where I experiment with graphics-engine architecture, extensible interfaces
                        and testable native systems. I&apos;m particularly interested in performance engineering,
                        developer tooling, computer graphics and the intersection of C++ with production machine
                        learning.
                    </p>
                </div>

                <div className="mt-8 flex flex-wrap items-center gap-2">
                    <span className="eyebrow mr-1">Core C++ &amp; systems stack</span>
                    {CPP_STACK.map((item) => (
                        <Tag key={item}>{item}</Tag>
                    ))}
                </div>

                <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
                    {featuredProjects.map((project, i) => {
                        const Motif = MOTIFS[project.motif];
                        return (
                            <AnimatedScrollCard
                                key={project.id}
                                delayMs={(i % 2) * 80}
                                className="group overflow-hidden rounded-2xl border border-hairline bg-surface"
                            >
                                <a
                                    href={project.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex h-full flex-col"
                                >
                                    <div className="text-accent flex h-28 items-center justify-center border-b border-hairline p-6">
                                        <div className="w-24">
                                            <Motif />
                                        </div>
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        <div className="flex items-start justify-between gap-3">
                                            <h2 className="text-xl font-semibold">{project.name}</h2>
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
                                        {project.extraFacts && (
                                            <ul className="text-muted mt-4 space-y-1 border-t border-hairline pt-4 text-sm">
                                                {project.extraFacts.map((fact) => (
                                                    <li key={fact} className="flex gap-2">
                                                        <span className="text-accent font-mono">&gt;</span>
                                                        {fact}
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
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
                                    <h3 className="font-semibold">{project.name}</h3>
                                    <ArrowIcon className="text-muted mt-0.5 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                                </div>
                                <p className="text-muted mt-2 text-sm leading-relaxed">{project.description}</p>
                                {project.extraFacts && (
                                    <ul className="text-muted mt-3 space-y-1 text-sm">
                                        {project.extraFacts.map((fact) => (
                                            <li key={fact} className="flex gap-2">
                                                <span className="text-accent font-mono">&gt;</span>
                                                {fact}
                                            </li>
                                        ))}
                                    </ul>
                                )}
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
                    href="/#top"
                    className="text-muted mt-20 inline-flex items-center gap-2 font-mono text-sm hover:text-[var(--text)]"
                >
                    ← Back home
                </a>
            </div>
        </main>
    );
}
