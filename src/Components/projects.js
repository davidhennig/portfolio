import React from "react";
import HP from "../Images/HP.png";
import GP from "../Images/GP.png";
import WJ from "../Images/WJ.png";

const Projects = () => {



    return (
        <div className="projects-wrapper">
            <div className="projects">
                <p>Hackathon Portal</p>
                <img src={HP} alt="Hackathon Portal Screen Shot" />
                <p>Redesigned a platform to host and participate in hackathons built with React.
                <br />
                - Matched the design spec to redesign the website using Figma
                <br />
                - Created a "Dashboard"that helps a user navigate what to do, using React, Sass and Material UI
                <br />
                - Built using: React, Node.js, Material UI, Sass
                </p>
                <a target="_blank" rel="noopener noreferrer" href="https://www.hackathon-portal.tech/">
                    <button>
                        View Project
                    </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Lambda-School-Labs?q=hackathon&type=&language=">
                    <button>
                        View Github
                    </button>
                </a>
            </div>
            <div className="projects">
                <p>Giga-Pet</p>
                <img src={GP} alt="Giga-Pet Screen Shot" />
                <p>Developed a website to help parents inspire their kids to eat healthy meals, that was built with Node.js
                <br />
                - Produced a backend for the website in Node.js
                <br />
                - Created nodes that could handle all of the necessary inputs from the frontend
                <br />
                - Built using: Node.js, Express, Knex
                </p>
                <a target="_blank" rel="noopener noreferrer" href="https://gigapet-3.github.io/Marketing-Page/index.html">
                    <button>
                        View Project
                    </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/gigapet-3/Backend">
                    <button>
                        View Github
                    </button>
                </a>
            </div>
            <div className="projects">
                <p>Weightlifting Journal</p>
                <img src={WJ} alt="Weightlifting Journal Screen Shot" />
                <p>Constructed a website where a user can keep track of their daily workouts with React
                <br />
                - Constructed the front end of the website using React
                <br />
                - Guided less experienced team members
                <br />
                - Built using: React and Material UI
                </p>
                <a target="_blank" rel="noopener noreferrer" href="https://bw-weightlifting-journal.netlify.app/">
                    <button>
                        View Project
                    </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/Build-Week-WeightLiftingJournal/Front-end">
                    <button>
                        View Github
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Projects;