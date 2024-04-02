"use client";
import {Big_Shoulders_Inline_Display} from "next/font/google";
import "./styles.css";
import useScrollAnimator from "@/app/hooks/useScrollAnimator";

const bsid = Big_Shoulders_Inline_Display({ subsets: ["latin"] });

const SocialIcon = ({href, icon}: Readonly<{href: string, icon: string}>) => (
    <a href={href} className="social">
        <svg className="icon">
            <use href={icon}></use>
        </svg>
    </a>
)

function TitleCard() {
    const {observeRef, animateRef} = useScrollAnimator({nFrames: 100});
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
            </div>
        </>
    );
}

export default TitleCard;