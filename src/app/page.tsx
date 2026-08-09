"use client";
import { useState } from "react";
import { SECTION_IDS, SectionId, VisData } from "./types";
import Hero from "./ui/Hero/Hero";
import About from "./ui/About/About";
import Projects from "./ui/Projects/Projects";
import Experience from "./ui/Experience/Experience";
import Skills from "./ui/Skills/Skills";
import Education from "./ui/Education/Education";
import Contact from "./ui/Contact/Contact";

const initialVisData = Object.fromEntries(
    SECTION_IDS.map((id) => [id, undefined])
) as VisData;

function Page() {
    const [visData, setVisData] = useState<VisData>(initialVisData);

    const handleIntersect = (id: SectionId) => (ratio: number | undefined) => {
        setVisData((prev) => (prev[id] === ratio ? prev : { ...prev, [id]: ratio }));
    };

    const activeSection = SECTION_IDS.reduce<SectionId | undefined>((active, sectionId) => {
        const ratio = visData[sectionId] ?? 0;
        const activeRatio = active ? visData[active] ?? 0 : -1;
        return ratio > 0.5 && ratio > activeRatio ? sectionId : active;
    }, undefined);

    return (
        <main id="main">
            <Hero activeSection={activeSection} />
            <About onIntersect={handleIntersect("about")} />
            <Projects onIntersect={handleIntersect("projects")} />
            <Experience onIntersect={handleIntersect("experience")} />
            <Skills onIntersect={handleIntersect("skills")} />
            <Education onIntersect={handleIntersect("education")} />
            <Contact onIntersect={handleIntersect("contact")} />
        </main>
    );
}

export default Page;
