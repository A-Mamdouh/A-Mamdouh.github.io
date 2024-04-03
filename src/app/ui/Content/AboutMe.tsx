import AnimatedScrollCard from "../AnimatedScrollCard/AnimatedScrollCard";
import "./aboutme.css"

function AboutMe () {
    return (
        <AnimatedScrollCard>
            <p className="about-me text-primary">
                In 2014, I was curious about combinatorics and algorithms.
                I started reading about combinatorics as well as learning Python by reading the documentation.
                Today, I have a bachelor in computer science, I am experienced in most common programming domains.
                I also study the artificial intelligence at Fredrich-Alexander-Universität, Erlangen, Germany
            </p>
        </AnimatedScrollCard>
    );
}

export default AboutMe;