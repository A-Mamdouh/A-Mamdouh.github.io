import Icon from "../Icon";
import "./personalProjects.css";
import AnimatedScrollCard from "@/app/ui/AnimatedScrollCard/AnimatedScrollCard";

const ProjectCard = ({title, children, githubLink}:Readonly<{title: string, children: React.ReactNode, githubLink: string}>) => {
    return (
        <div className="w-full border-solid border border-[var(--primary)] max-w-[40rem] p-5 m-auto flex flex-col">
            <div className="flex flex-row justify-center items-center w-full max-h-[50px]">
                <p className="text-2xl text-[var(--secondary)]"> {title} </p>
                
            </div>
            <p> {children} </p>
            <div className="w-full flex flex-row justify-center items-center p-2">
                <a href={githubLink}>
                    <Icon href="/icons/github.svg#icon" className="h-[35px] w-[35px] asepct-[1/1]" />
                </a>
            </div>
        </div>

    );
};


function PersonalProjects() {
    
    return (
        <AnimatedScrollCard id="projects" className="flex flex-col items-center content-center p-10">
            <p className="text-4xl flex mb-5 text-primary">Personal passions</p>
            <div className="w-full h-full flex flex-col justify-center items-center">
                <ProjectCard title="Eden" githubLink="https://github.com/a-mamdouh/Eden">
                    I am working on a platform independent graphics engine using C++.
                    Eden is built to be extensible and hackable by developers for devlopers.
                    I am focusing on testing, performance and easy of use. Check it out
                </ProjectCard>

                <ProjectCard title="Bonk Patrol" githubLink="https://github.com/a-mamdouh/bonk-patrol">
                    This is a simple, lightweight voice chat time-out Discord bot I developed using the JavaScript Discord API.
                    I also added a feature for message clearing messages
                </ProjectCard>
            </div>
        </AnimatedScrollCard>
    );
}

export default PersonalProjects;