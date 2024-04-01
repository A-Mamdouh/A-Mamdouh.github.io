"use client";
import "./styles.css"
import useScrollAnimator from "@/app/hooks/useScrollAnimator";

function Content () {

    const {observeRef, animateRef} = useScrollAnimator({nFrames: 50});

    return (
        <div ref={(ref) => {observeRef(ref); animateRef(ref)}} className="card">
            <p className="content-text">
                In 2014, I was curious about combinatorics and algorithms.
                I started reading about combinatorics as well as well as learning Python by reading the documentation.
                Today, I have a bachelor in computer science, I am experienced in most common programming domains.
                I also study the artificial intelligence at Fredrich-Alexander-Universität, Erlangen, Germany
            </p>
        </div>
    )
}

export default Content;