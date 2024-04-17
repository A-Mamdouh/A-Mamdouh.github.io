"use client";
import { VisDataSetters } from "@/app/types";
import AboutMe from "./AboutMe";
import PersonalProjects from "./PersonalProjects";
import WorkExperience from "./WorkExperience"
import "./styles.css"

function Content ({visDataSetter}:{visDataSetter: VisDataSetters}) {

    return (
        <div className="content-container">
            <AboutMe visSetter={visDataSetter.abt}/>
            <WorkExperience visSetter={visDataSetter.exp} />
            <PersonalProjects visSetter={visDataSetter.project} />
        </div>
    )
}

export default Content;