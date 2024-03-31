import "./styles.css"

import {InView} from "react-intersection-observer";

function Content () {

    return (
        <>
            {/* Empty div for the title animation to work before anything is shown */}
            <div className="buffer-div"> </div>
            <div className="h-[60vh]">
                <p className="text-description px-56">
                    In 2014, I was curious about combinatorics and algorithms.
                    I started reading about combinatorics as well as well as learning Python by reading the documentation.
                    Today, I have a bachelor in computer science, I am experienced in most common programming domains.
                    I also study the artificial intelligence at Fredrich-Alexander-Universität, Erlangen, Germany
                </p>
            </div>
        </>
    )
}

export default Content;