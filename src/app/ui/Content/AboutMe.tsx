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
                In 2014, I was curious about combinatorics and algorithms.
                I started reading about combinatorics as well as learning Python by reading the documentation.
                Today, I have a bachelor in computer science and am experienced in a variety of programming domains.
                I am also attending the artificial intelligence master at Friedrich-Alexander-Universität, Erlangen
            </p>
        </AnimatedScrollCard>
    );
}

export default AboutMe;