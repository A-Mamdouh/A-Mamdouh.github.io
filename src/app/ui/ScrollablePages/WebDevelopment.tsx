import { PropsWithChildren, ReactNode } from "react";
import Icon from "../Icon";
import ScrollablePage from "./ScrollablePage";

interface ProjectInfo {
    title: string,
    icons: {href: string, alt: string}[],
    date: {start: string, end: string},
    children?: ReactNode,
};

interface JobExperienceInfo extends ProjectInfo {
    employer: string
};

const Description = ({children}: Readonly<PropsWithChildren>) => <p className="text-sm description">{children}</p>

const JobExperience = ({title, children, icons, employer, date}: Readonly<JobExperienceInfo>) =>
<div className="grow flex flex-col mb-10">
    <div className="w-full items-center flex flex-row">
        <p className="text-subtitle text-left pr-2"> {title} </p>
        <div className="flex flex-row">
            { icons.map(({href, alt}, key) => <Icon key={key} href={href} alt={alt} className="max-w-6 max-h-6 text-primary" />) }
        </div>
    </div>
    <p className="w-full items-center pr-5 text-md mb-3">{employer} | <span className="text-sm">{date.start} - {date.end}</span></p>
    {children}
</div>

const Project = ({title, children, icons, date}: Readonly<ProjectInfo>) =>
<div className="grow flex flex-col mb-10">
    <div className="w-full items-center flex flex-row">
        <p className="text-subtitle text-left pr-2"> {title} </p>
        <div className="flex flex-row">
            { icons.map(({href, alt}, key) => <Icon key={key} href={href} alt={alt} className="max-w-6 max-h-6 text-primary" />) }
        </div>
    </div>
    <p className="w-full items-center pr-5 text-md mb-3"><span className="text-sm">{date.start} - {date.end}</span></p>
    {children}
</div>

export default () =>
<ScrollablePage className="grid webdev-container">
    {/* Title */}
    <p className="text-title text-center items-center justify-between">Web Development</p>
    {/* Page icon */}
    <Icon className="h-28 text-primary" href="/icons/web_development.svg#icon"/>
    {/* Work experience */}
    <div className="flex flex-col h-full justify-between pl-10">
        <JobExperience
            title="React Native Intern"
            icons={[
                {href: "/icons/react_native.svg#icon", alt: "ReactNative"},
                {href: "/icons/firebase.svg#icon", alt: "Firebase"},
            ]}
            employer="Sequel Solutions"
            date={{start: "Jan. 20", end: "Mar. 20"}}
        >
            <Description>
                I implemented a new search feature that worked with 
                weather data to find an appropriate location/time. 
                I also created a Firebase caching service and integrated
                it into the application.
            </Description>
        </JobExperience>
        <JobExperience
            title="Software Developer"
            icons={[
                {href: "/icons/react_native.svg#icon", alt: "ReactNative"},
                {href: "/icons/firebase.svg#icon", alt: "Firebase"},
            ]}
            employer="Sequel Solutions"
            date={{start: "Mar. 20", end: "Jul. 21"}}
        >
            <Description>
                I worked with the frontend team on a trip reservation app
                by updating a deprecated legacy code base in React Native
                to a modern, lightweight version that had 30% faster load times.
                I also worked on the ExpressJS backend.
            </Description>
        </JobExperience>
    </div>
    <div></div>
    <div className="flex flex-col h-full justify-between pl-10">
        <Project
            title="Sumerge Investors Web Portal"
            icons={[
                {href: "/icons/react.svg#icon", alt:"ReactJS"},
                {href: "/icons/mongodb.svg#icon", alt:"MongoDB"},
            ]}
            date={{start: "Sep. 18", end: "Apr. 19"}}
        >
            <Description>
                This is a MERN project to digitize investors' processes for the government. I implemented the features for fees calculation, update and payment, PDF generation of contracts, and a tool for the government portal to create new forms to accommodate policy changes.
            </Description>
        </Project>
    </div>
</ScrollablePage>