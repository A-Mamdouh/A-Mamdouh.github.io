"use client";
import {Big_Shoulders_Display} from "next/font/google";
import "./styles.css";
import useScrollAnimator from "@/app/hooks/useScrollAnimator";
import { Theme, VisData } from "@/app/types";
import useTheme from "@/app/hooks/useTheme";

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
    let iconNames: { [id: number]: string; } = {};
    iconNames[Theme.dark] = "theme-light.svg";
    iconNames[Theme.light] = "theme-system.svg";
    iconNames[Theme.system] = "theme-dark.svg";
    return (
        <div className="fixed z-20 w-[3vw] top-1 right-1 fill-[var(--bg-secondary)]">
            <svg className="w-full h-full" onClick={() => {
                switch (theme) {
                    case Theme.dark: setTheme(Theme.light); break;
                    case Theme.light: setTheme(Theme.system); break;
                    case Theme.system: setTheme(Theme.dark); break;
                }
            }}>
                <use href={`/icons/${iconNames[theme]}#icon`}></use>
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
                    <p className={`${titleFont.className} text-subtitle`}>Computer Scientist</p>
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