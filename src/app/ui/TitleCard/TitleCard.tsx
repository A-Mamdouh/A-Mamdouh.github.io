"use client";
import {Big_Shoulders_Inline_Display} from "next/font/google";
import "./styles.css";
import Icon from "../Icon";
import useScrollAnimator from "@/app/hooks/useScrollAnimator";

const bsid = Big_Shoulders_Inline_Display({ subsets: ["latin"] });

const SocialIcon = ({href, icon}: Readonly<{href: string, icon: string}>) => 
<a href={href} className="social">
    <Icon href={icon} className="icon"/>
</a>

function TitleCard() {
    const {observeRef, animateRef} = useScrollAnimator({nFrames: 50});
    return (
        <>
            <div ref={observeRef} className="title-buffer"></div>
            <div ref={animateRef} className="title">
                <div className="title-text-container">
                    <p className={`${bsid.className} text-9xl`}>Ahmed Mamdouh</p>
                    <p className={`${bsid.className} text-8xl`}>Computer Scientist</p>
                </div>
                <svg className="profile-icon">
                    <use href="/icons/profile.svg#icon"></use>
                </svg>
                <div className="container-social ">
                    <SocialIcon href="https://github.com/a-mamdouh/" icon="/icons/github.svg#icon" />
                    <SocialIcon href="https://linkedin.com/in/a-mamdouh99/" icon="/icons/linkedin.svg#icon" />
                </div>
            </div>
        </>
    );
}

export default TitleCard;