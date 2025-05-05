import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import "./projects.css";
import AnimatedScrollCard from "@/app/ui/AnimatedScrollCard/AnimatedScrollCard";
import { useEffect } from "react";
import { VisDataSetter } from "@/app/types";
import {TiSocialGithub} from "react-icons/ti";

type ProjectCardDetails = {
    title: string,
    children: React.ReactNode,
    github: string,
    tags: string[]
};

const ProjectCard = ({ title, children, github, tags }: Readonly<ProjectCardDetails>) => {
    return (
        <div className="w-full border-solid border border-[var(--primary)] max-w-[40rem] p-5  my-2 flex flex-col">
            <p className="flex flex-col m-0 mb-2 bigger-text text-[var(--secondary)]"> {title} </p>
            <p className="text-primary normal-text m-auto"> {children} </p>
            <div className="w-full flex flex-row justify-center items-center p-2">
                <span className="italic text-sm px-2 grow">{tags.join(" · ")}</span>
                <a href={github} className="mr-2 icon-medium">
                    <TiSocialGithub />
                </a>

            </div>
        </div>
    );
};

function Projects({ visSetter }: { visSetter: VisDataSetter }) {
    const [intersection, ref] = useIntersectionObserver({ slices: 100 });
    useEffect(() => { visSetter(intersection); }, [intersection, visSetter]);
    return (
        <AnimatedScrollCard reff={ref} id="projects" className="p-10">
            <p className="title-text flex mb-8 text-primary">Projects</p>
            <div className="grid grid-cols-2 gap-2">
                <ProjectCard title="MIPS Processor Simulation" github="https://github.com/a-mamdouh/mips" tags={["Python", "Computer architecture", "Assembly"]}>
                    A working Python implementation of a MIPS processor that includes an assembly to machine code parser and simulates
                    register tables, control, ALU, data memory and register files
                </ProjectCard>

                <ProjectCard title="CT Imaging Projection Generation" github="https://github.com/A-Mamdouh/intermediate-projection-generation-on-CAT" tags={["Python", "Deep Learning", "GANs", "Generative AI", "Biomedical Engineering", "Pytorch", "Torch lightning"]}>
                    In this project I explored different architectures to generate intermediate projections for CT scans,
                    thus allowing CT scans to take less images, which makes the scans take less time and exposes the patient to less radiation
                </ProjectCard>

                <ProjectCard title="SkyFox" github="https://github.com/A-Mamdouh/SkyFox" tags={["C++", "OpenGL", "Game Development"]}>
                    This is an asteroid shooter game built in C++ using OpenGL.
                    The game features a proecdurally generated background to make the player feel more engaged
                </ProjectCard>

                <ProjectCard title="Sumerge Investors Portal" github="https://github.com/A-Mamdouh/Sumerge-Investors-Portal" tags={["NoSQL", "Fullstack", "MERN-Stack", "MongoDB", "React", "Express", "NodeJS", "Stripe"]}>
                    This is a prototype implementation of an investor portal built to digitalize the interaction between investors and the government body.
                    The portal provides an interal portal for employees and an investor portal both with different authorization permissions.
                    The projects allows creation of new contracts, forms and so on as well as the ability to handle payments using stripe
                </ProjectCard>
                <ProjectCard title="DBMS" github="https://github.com/A-Mamdouh/DBMS" tags={["Java", "Databases", "SQL", "Indexing"]}>
                    A functioning database engine implementation with bitmap indexing.
                    This implementation uses Java generics which provides static time error checking via the type system
                    thus catching errors simply from static conde analysis tools
                </ProjectCard>
                <ProjectCard title="Chatto" github="https://github.com/A-Mamdouh/Chatto" tags={["Java", "Multi-threading", "Socket programming", "Messaging", "Network programming", "JavaFX"]}>
                    Chatto is a simple Texting application which contains a dedicated server and allows multiple users to start 1-to-1 chats
                </ProjectCard>
            </div>
        </AnimatedScrollCard>
    );
}

export default Projects;