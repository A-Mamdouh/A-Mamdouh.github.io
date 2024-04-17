import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import "./workExperience.css";
import AnimatedScrollCard from "@/app/ui/AnimatedScrollCard/AnimatedScrollCard";
import { useEffect } from "react";
import { VisDataSetter } from "@/app/types";

const WorkExperienceCard = ({title, children}:Readonly<{title: string, children: React.ReactNode}>) => {
    return (
        <div className="w-full border-solid border border-[var(--primary)] max-w-[40rem] p-5 flex flex-col my-2">
            <p className="text-2xl text-[var(--secondary)]">{title}</p>
            <div className="w-full flex flex-row justify-center items-center p-2">
                <p> {children} </p>
            </div>
        </div>

    );
};

function WorkExperience({visSetter}: {visSetter: VisDataSetter}) {
    const [intersection, ref] = useIntersectionObserver({slices: 100});
    useEffect(() => { visSetter(intersection); }, [intersection, visSetter]);
    return (
        <AnimatedScrollCard reff={ref} id="experience" className="p-10">
            <p className="text-4xl flex mb-8 text-primary">Problem solver at heart</p>
            <WorkExperienceCard title="Primetals Technologies">
                I worked on different projects involving state of the art deep learning models.
                I also developed efficient, real-time software solutions for different problems,
                as well as new internal development tools such as project templates.
            </WorkExperienceCard>
            <WorkExperienceCard title="Sequel Solutions">
                I implemented a new search feature that worked with weather data to find an appropriate location/time.
                I also created a Firebase caching service and integrated it into the application.
                I also updated critical, deprecated parts of the legacy code to boost performance and reduce loading times by up to 30%
            </WorkExperienceCard>
        </AnimatedScrollCard>
    );
}

export default WorkExperience;