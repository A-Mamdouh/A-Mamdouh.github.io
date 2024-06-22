"use client";
import { VisDataSetters } from "@/app/types";
import AboutMe from "./AboutMe";
import CurrentProjects from "./CurrentProjects";
import WorkExperience from "./WorkExperience"
import "./styles.css"
import Projects from "./Projects";

function Content ({visDataSetter}:{visDataSetter: VisDataSetters}) {

    return (
        <div className="content-container">
            <AboutMe visSetter={visDataSetter.abt}/>
            <WorkExperience visSetter={visDataSetter.exp} />
            <CurrentProjects visSetter={visDataSetter.currentProject} />
            <Projects visSetter={visDataSetter.project} />
        </div>
    )
}

export default Content;