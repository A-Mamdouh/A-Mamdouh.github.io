"use client";
import {Big_Shoulders_Display} from "next/font/google";
import "./styles.css";
import useScrollAnimator from "@/app/hooks/useScrollAnimator";
import { Theme, VisData } from "@/app/types";
import useTheme from "@/app/hooks/useTheme";
import { Tooltip } from "@nextui-org/react";

const titleFont = Big_Shoulders_Display({ subsets: ["latin"] });

const SocialIcon = ({href, icon}: Readonly<{href: string, icon: string}>) => (
    <a href={href} className="social">
        <svg className="icon">
            <use href={icon}></use>
        </svg>
    </a>
);

const ThemeButton = () => {
    const [theme, setTheme] = useTheme();
    const themeNames: { [id: number]: string; } = {
        [Theme.dark]: "dark",
        [Theme.light]: "light",
        [Theme.system]: "system",
    };
    const themeCycle: {[id: number]: Theme} = {
        [Theme.dark]: Theme.light,
        [Theme.light]: Theme.system,
        [Theme.system]: Theme.dark,
    }
    return (
        <div className="fixed z-20 h-[50px] w-[50px] top-2 right-2 fill-[var(--bg-secondary)]">
            <svg className="w-full h-full" onClick={() => setTheme(themeCycle[theme])}>
                <Tooltip content={`${themeNames[theme]} theme`}>
                <use href={`/icons/theme-${themeNames[theme]}.svg#icon`}></use>
                </Tooltip>
            </svg>
        </div>
    );
}

type NavIconProps = {
    href: string,
    name: string,
    intersection: number | undefined
}

const NavIcon = (props: NavIconProps) => {
    let classes = "nav-item-text";
    if(props.intersection && props.intersection > 0.5) {
        classes += " nav-active";
    }
    return(
        <p className="nav-item">
            <a className={classes} href={props.href}>
                {props.name}
                </a>
            </p>
    )
};

function TitleCard({ visData }: { visData: VisData }) {
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
            <ThemeButton />
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