import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import Icon from "../Icon";
import "./currentProjects.css";
import AnimatedScrollCard from "@/app/ui/AnimatedScrollCard/AnimatedScrollCard";
import { useEffect } from "react";
import { VisDataSetter } from "@/app/types";

const ProjectCard = ({ title, children, githubLink }: Readonly<{ title: string, children: React.ReactNode, githubLink: string }>) => {
    return (
        <div className="w-full border-solid border border-[var(--primary)] max-w-[40rem] p-5  my-2 flex flex-col">
            <div className="flex flex-row justify-center items-center w-full max-h-[50px] mb-2">
                <p className="bigger-text text-[var(--secondary)]"> {title} </p>
            </div>
            <p className="text-primary normal-text"> {children} </p>
            <div className="w-full flex flex-row justify-center items-center p-2">
                <a href={githubLink}>
                    <Icon href="/icons/github.svg#icon" className="h-[35px] w-[35px] asepct-[1/1]" />
                </a>
            </div>
        </div>
    );
};

function CurrentProjects({ visSetter }: { visSetter: VisDataSetter }) {
    const [intersection, ref] = useIntersectionObserver({ slices: 100 });
    useEffect(() => { visSetter(intersection); }, [intersection, visSetter]);
    return (
        <AnimatedScrollCard reff={ref} id="current-projects" className="p-10">
            <p className="title-text flex mb-8 text-primary">Current projects</p>
            <ProjectCard title="Eden" githubLink="https://github.com/a-mamdouh/Eden">
                Eden is a platform independent graphics engine using C++.
                Eden is built to be extensible and hackable by developers for devlopers,
                while also maintaining performance and a powerful test-suite.
            </ProjectCard>

            <ProjectCard title="Deep RL for NL semantics" githubLink="https://github.com/a-mamdouh/Performance-model-for-tableau-model-generation">
                This is a research project which uses deep reinforcement learning to guide classical
                tableau calculus for logically sound natural language semantic modeling
            </ProjectCard>
        </AnimatedScrollCard>
    );
}

export default CurrentProjects;