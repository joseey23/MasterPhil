import "./about.scss";
import { init } from 'ityped'
import { useEffect, useRef } from "react";

export default function About() {

    const textRef = useRef();

    useEffect(() => {
        init(textRef.current, { showCursor: true, backDelay: 1300, backSpeed: 60, typeSpeed: 200, strings: ["Birds", "Wildlife", "Weddings", "Events", "Photoshoots", "Call: 0724971662"] })
    }, [])
    return (
        <div className="about" id="about">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/man.png" alt="" />
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hello there🙋 Welcome to</h2>
                    <h1>Phil Photography©️</h1>
                    <h3> We are specialized in : <span ref={textRef}></span></h3>
                </div>
                <a href="/posts">
                    <img src="assets/down.png" alt="" />
                </a>
            </div>
        </div>
    )
}
