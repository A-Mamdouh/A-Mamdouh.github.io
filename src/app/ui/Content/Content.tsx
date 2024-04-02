"use client";
import { ReactNode } from "react";
import "./styles.css"
import useScrollAnimator from "@/app/hooks/useScrollAnimator";

const Card = ({children}: Readonly<{children?: ReactNode}>) => {
    const {observeRef, animateRef} = useScrollAnimator({nFrames: 100});
    return(
        <div ref={(ref) => {observeRef(ref); animateRef(ref)}} className="card">
            {children}

        </div>
    )
}

function Content () {

    return (
        <div className="content-container">
            <Card>
                <p className="content-text text-primary">
                    In 2014, I was curious about combinatorics and algorithms.
                    I started reading about combinatorics as well as well as learning Python by reading the documentation.
                    Today, I have a bachelor in computer science, I am experienced in most common programming domains.
                    I also study the artificial intelligence at Fredrich-Alexander-Universität, Erlangen, Germany
                </p>
            </Card>
        </div>
    )
}

export default Content;