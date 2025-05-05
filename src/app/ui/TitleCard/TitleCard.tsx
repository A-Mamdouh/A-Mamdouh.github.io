"use client";
import {Big_Shoulders_Display} from "next/font/google";
import "./styles.css";
import useScrollAnimator from "@/app/hooks/useScrollAnimator";
import {Theme, VisData} from "@/app/types";
import useTheme from "@/app/hooks/useTheme";
import {Tooltip} from "@nextui-org/react";
import {TiSocialLinkedin as LinkedinIcon, TiSocialGithub as GithubIcon, TiMail as EmailIcon} from 'react-icons/ti'
import React from "react";
import {TbMoon as DarkModeIcon, TbSun as LightModeIcon, TbSunMoon as SystemIcon} from "react-icons/tb";
import {IconType} from "react-icons";

const titleFont = Big_Shoulders_Display({subsets: ["latin"]});

const SocialIcon = ({href, Icon}: Readonly<{ href: string, Icon: string | React.ComponentType }>) => (

    <a href={href} className="social">
        {typeof Icon === "string"
            ?
            <svg className="icon">
                <use href={Icon}></use>
            </svg>
            :
            <Icon/>
        }
    </a>
);

const ThemeButton = () => {
    const [theme, setTheme] = useTheme();
    const themeNames: { [id: number]: string; } = {
        [Theme.dark]: "dark",
        [Theme.light]: "light",
        [Theme.system]: "system",
    };
    const themeCycle: { [id: number]: Theme } = {
        [Theme.dark]: Theme.light,
        [Theme.light]: Theme.system,
        [Theme.system]: Theme.dark,
    };
    const themeIcon: { [id: number]: IconType; } = {
        [Theme.dark]: DarkModeIcon,
        [Theme.light]: LightModeIcon,
        [Theme.system]: SystemIcon,
    };
    const ThemeIcon = themeIcon[theme];
    return (
        <Tooltip content={`${themeNames[theme]} theme`}>
            <div className="fixed z-20 top-2 right-2 icon-medium">
                <ThemeIcon onClick={() => setTheme(themeCycle[theme])}/>
            </div>
        </Tooltip>
    );
}

type NavIconProps = {
    href: string,
    name: string,
    intersection: number | undefined
}

const NavIcon = (props: NavIconProps) => {
    let classes = "nav-item-text";
    if (props.intersection && props.intersection > 0.5) {
        classes += " nav-active";
    }
    return (
        <p className="nav-item">
            <a className={classes} href={props.href}>
                {props.name}
            </a>
        </p>
    )
};

function TitleCard({visData}: { visData: VisData }) {
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
            href: "#current-projects",
            name: "Current Projects",
            intersection: visData.currentProject,
        },
        {
            href: "#projects",
            name: "Projects",
            intersection: visData.project,
        },
    ];

    return (
        <>
            <ThemeButton/>
            <div ref={observeRef} className="title-buffer"></div>
            <div ref={animateRef} className="title-container">
                <div className="title-text-container">
                    <p className={`${titleFont.className} text-title`}>Ahmed Mamdouh</p>
                    <p className={`${titleFont.className} text-subtitle`}>Software Developer</p>
                </div>
                <div>
                    <svg className="title-icon">
                        <use href="/icons/profile.svg#icon"></use>
                    </svg>
                </div>
                <div className="title-social-container icon-large">
                    <SocialIcon href="https://linkedin.com/in/a-mamdouh99/" Icon={LinkedinIcon}/>
                    <SocialIcon href="https://github.com/a-mamdouh/" Icon={GithubIcon}/>
                    <SocialIcon href="mailto:work@a-mamdouh.com" Icon={EmailIcon}/>
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