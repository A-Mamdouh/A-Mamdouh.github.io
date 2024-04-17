import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import "./workExperience.css";
import AnimatedScrollCard from "@/app/ui/AnimatedScrollCard/AnimatedScrollCard";
import { Dispatch, SetStateAction, useEffect } from "react";
import { VisDataSetter } from "@/app/types";

const WorkExperienceCard = ({title, children}:Readonly<{title: string, children: React.ReactNode}>) => {
    return (
        <div className="w-full border-solid border border-[var(--primary)] max-w-[40rem] p-5 mb-2 m-auto">
            <p className="text-2xl text-[var(--secondary)]">{title}</p>
            <p>
                {children}
            </p>
        </div>

    );
};


function WorkExperience({visSetter}: {visSetter: VisDataSetter}) {
    const [intersection, ref] = useIntersectionObserver({slices: 100});
    useEffect(() => { visSetter(intersection); }, [intersection, visSetter]);
    return (
        <AnimatedScrollCard reff={ref} id="experience" className="flex flex-col items-center content-center p-10">
            <p className="text-4xl flex mb-5 text-primary">Problem solver at heart</p>
            <div className="w-full h-full flex flex-col justify-center items-center">
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
            </div>
        </AnimatedScrollCard>
    );
}

export default WorkExperience;