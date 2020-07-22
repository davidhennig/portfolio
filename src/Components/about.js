import React from "react";
import Headshot from "../Images/Headshot.png"
import HTML5 from "../SVG's/html-5.svg";
import CSS from "../SVG's/css3.svg";
import Javascript from "../SVG's/javascript.svg";
import Node from "../SVG's/nodejs.svg";
import Python from "../SVG's/python.svg";
import react from "../SVG's/react.svg";
import Redux from "../SVG's/redux.svg";
import Sass from "../SVG's/sass.svg";
import SQL from "../SVG's/sql-server.svg";
import Postgresql from "../SVG's/postgresql.svg";
import Materialui from "../SVG's/material-ui.svg";

// gifkj

const About = () => {

    return (
        <div className="about-wrapper">
            <div className="hero">
                <img src={Headshot} />
                <p>DAVID J. HENNIG</p>
            </div>
            <div className="about">

                <h3>About me</h3>

                <p>
                    I am a full stack web developer skilled in Javascript and Python with additional experience in React and Node.js. My studies in audio engineering (BM, University of Massachusetts Lowell '17) developed a strong sense of creativity and aesthetics, as well as critical thinking and abstract problem solving skills. I operate confidently in both front-end and back-end environments. 
                    < br/>
                    Located in Manchester, NH.
                </p>
            </div>
            <div className="skills">
                <h3>Skills</h3>
                <div className="svg">
                    <div>
                        <object type="image/svg+xml" data={HTML5} width="60"></object>
                        <div>HTML5</div>
                    </div>
                    <div>
                        <object type="image/svg+xml" data={CSS} width="60"></object>
                        <div>CSS</div>
                    </div>
                    <div>
                        <object type="image/svg+xml" data={Javascript} width="60"></object>
                        <div>Javascript</div>
                    </div>
                    <div>
                        <object type="image/svg+xml" data={Node} width="60"></object>
                        <div>Node.js</div>
                    </div>
                    <div>
                        <object type="image/svg+xml" data={Python} width="60"></object>
                        <div>Python </div>
                    </div>
                    <div>
                        <object type="image/svg+xml" data={react} width="60"></object>
                        <div>React.js </div>
                    </div>
                    <div>
                        <object type="image/svg+xml" data={Redux} width="60"></object>
                        <div>Redux</div>
                    </div>
                    <div>
                        <object type="image/svg+xml" data={Sass} width="60"></object>
                        <div>Sass</div>
                    </div>
                    <div>
                        <object type="image/svg+xml" data={SQL} width="60"></object>
                        <div>SQLite</div>
                    </div>
                    <div>
                        <object type="image/svg+xml" data={Materialui} width="60"></object>
                        <div>Material-UI</div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default About;