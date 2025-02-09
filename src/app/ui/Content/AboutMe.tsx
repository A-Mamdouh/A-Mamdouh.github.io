import { useEffect } from "react";
import AnimatedScrollCard from "../AnimatedScrollCard/AnimatedScrollCard";
import "./aboutme.css"
import useIntersectionObserver from "@/app/hooks/useIntersectionObserver";
import { VisDataSetter } from "@/app/types";

function AboutMe ({visSetter}: {visSetter: VisDataSetter}) {
    const [intersection, ref] = useIntersectionObserver({slices: 100});
    useEffect(() => { visSetter(intersection); }, [intersection, visSetter]);
    return (
        <AnimatedScrollCard id="aboutme" reff={ref}>
            <p className="about-me text-primary big-text">
            My journey into programming began in 2014 with a deep curiosity about combinatorics and algorithms.
            I started by exploring combinatorics while teaching myself Python through its documentation.
            Over the years, I earned a bachelor&apos;s degree in computer science and gained experience across various programming domains.
            I have since completed my master&apos;s in artificial intelligence at Friedrich-Alexander-Universität Erlangen and
            now work as an ABAP developer at SAP Fioneer, where I apply my expertise to enterprise software solutions.
            </p>
        </AnimatedScrollCard>
    );
}

export default AboutMe;