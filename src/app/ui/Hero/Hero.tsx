"use client";
import { useEffect, useRef, useState } from "react";
import {
    TbBrandGithub as GithubIcon,
    TbBrandLinkedin as LinkedinIcon,
    TbDownload as DownloadIcon,
    TbMail as EmailIcon,
} from "react-icons/tb";
import Button from "@/app/ui/kit/Button";
import Stat from "@/app/ui/kit/Stat";
import SiteHeader from "@/app/ui/site/SiteHeader";
import { heroStats, links, person } from "@/app/data/content";
import { SectionId } from "@/app/types";

type HeroProps = { activeSection?: SectionId };

const Hero = ({ activeSection }: Readonly<HeroProps>) => {
    const [pastHero, setPastHero] = useState(false);
    const sentinelRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const node = sentinelRef.current;
        if (!node || typeof IntersectionObserver === "undefined") return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                setPastHero(!entry.isIntersecting && entry.boundingClientRect.top < 0);
            },
            { threshold: 0 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <SiteHeader visible={pastHero} activeSection={activeSection} />

            <section id="top" className="relative flex min-h-[100dvh] flex-col justify-center px-6 pt-24 md:px-10">
                <div className="mx-auto w-full max-w-content">
                    <p className="eyebrow mb-6">
                        {person.location} · {person.availability}
                    </p>
                    <h1 className="text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
                        {person.name}
                    </h1>
                    <p className="text-muted mt-4 text-2xl font-medium md:text-3xl">{person.headline}</p>
                    <p className="mt-6 max-w-2xl text-lg md:text-xl">{person.supportingLine}</p>

                    <div className="mt-9 flex flex-wrap items-center gap-3">
                        <Button href={links.email} variant="primary" icon={<EmailIcon />}>
                            Email me
                        </Button>
                        <Button href={links.linkedin} external icon={<LinkedinIcon />}>
                            LinkedIn
                        </Button>
                        <Button href={links.github} external icon={<GithubIcon />}>
                            GitHub
                        </Button>
                        <Button href={links.resume} download="Ahmed-Mamdouh-Resume.pdf" icon={<DownloadIcon />}>
                            Résumé
                        </Button>
                    </div>

                    <div className="mt-16 grid grid-cols-1 gap-8 border-t border-hairline pt-10 sm:grid-cols-3">
                        {heroStats.map((stat) => (
                            <Stat key={stat.label} stat={stat} />
                        ))}
                    </div>
                </div>
                <div ref={sentinelRef} aria-hidden className="absolute inset-x-0 bottom-0 h-px" />
            </section>
        </>
    );
};

export default Hero;
