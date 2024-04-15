"use client";
import AboutMe from "./AboutMe";
import PersonalProjects from "./PersonalProjects";
import WorkExperience from "./WorkExperience"
import "./styles.css"

function Content () {

    return (
        <div className="content-container">
            <AboutMe />
            <WorkExperience />
            <PersonalProjects />
        </div>
    )
}

export default Content;