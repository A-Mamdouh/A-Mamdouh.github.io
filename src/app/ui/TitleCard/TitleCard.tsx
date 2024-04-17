"use client";
import {Big_Shoulders_Inline_Display} from "next/font/google";
import "./styles.css";
import useScrollAnimator from "@/app/hooks/useScrollAnimator";
import { VisData } from "@/app/types";
import { useEffect, useState } from "react";

const bsid = Big_Shoulders_Inline_Display({ subsets: ["latin"] });

const SocialIcon = ({href, icon}: Readonly<{href: string, icon: string}>) => (
    <a href={href} className="social">
        <svg className="icon">
            <use href={icon}></use>
        </svg>
    </a>
);

type NavIconProps = {
    href: string,
    name: string,
    intersection: number
}

const NavIcon = (props: NavIconProps) => {
    const classes = "nav-item" + (props.intersection > 0.5? " nav-active" : "");
    return(
        <p className={classes}>
            <a href={props.href}>
                {props.name}
                </a>
            </p>
    )
};

function TitleCard({visData}:{visData: VisData}) {
    const [observeRef, animateRef, intersection] = useScrollAnimator({nFrames: 100});
    const navInfo: NavIconProps[] = [
        {
            href: "#aboutme",
            name: "About Me",
            intersection: visData.abt,
        },
        {
            href: "#experience",
            name: "Experience",
            intersection: visData.exp,
        },
        {
            href: "#projects",
            name: "Projects",
            intersection: visData.project,
        },
    ];

    return (
        <>
            <div ref={observeRef} className="title-buffer"></div>
            <div ref={animateRef} className="title-container">
                <div className="title-text-container">
                    <p className={`${bsid.className} text-title`}>Ahmed Mamdouh</p>
                    <p className={`${bsid.className} text-subtitle`}>Computer Scientist</p>
                </div>
                <div>
                    <svg className="title-icon">
                        <use href="/icons/profile.svg#icon"></use>
                    </svg>
                </div>
                <div className="title-social-container">
                    <SocialIcon href="https://linkedin.com/in/a-mamdouh99/" icon="/icons/linkedin.svg#icon" />
                    <SocialIcon href="https://github.com/a-mamdouh/" icon="/icons/github.svg#icon" />
                </div>
                <div className="nav-container">
                    {
                        intersection === 0
                            ? navInfo.map((props, i) => <NavIcon key={i} {...props} />)
                            : undefined
                    }
                </div>
            </div>
        </>
    );
}

export default TitleCard;