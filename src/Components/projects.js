import React from "react";
import HP from "../Images/HP.png";
import GP from "../Images/GP.png";
import GS from "../Images/GS.png";

const Projects = () => {



    return (
        <div className="projects-wrapper">
            <div className="projects">
                <a target="_blank" rel="noopener noreferrer" href="https://www.hackathon-portal.tech/">
                    <h3>Hackathon Portal</h3>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://www.hackathon-portal.tech/">
                    <img src={HP} alt="Hackathon Portal Screen Shot" />
                </a>
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
                <a target="_blank" rel="noopener noreferrer" href="https://gigapet-3.github.io/Marketing-Page/index.html">
                    <h3>Lambdi-Pet</h3>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://gigapet-3.github.io/Marketing-Page/index.html">
                    <img src={GP} alt="Giga-Pet Screen Shot" />
                </a>
                <p>Developed a website to help parents inspire their kids to eat healthy meals. The child can feed their pet the same food they have eaten, and the pet will become more or less healthy depending on their food choices
                <br />
                - Produced a backend for the website in Node.js
                <br />
                - Created nodes that could handle all of the necessary inputs from the frontend
                <br />
                - Lead the back-end for the project while also coaching other team members on the front-end
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
                <a target="_blank" rel="noopener noreferrer" href="https://github-social.netlify.app/">
                    <h3>Github Social</h3>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github-social.netlify.app/">
                    <img src={GS} alt="Github Social Screen Shot" />
                </a>
                <p>Constructed a website where a user can search the github API for repositories or users
                <br />
                - Constructed the front end of the website using React
                <br />
                - Collaborated with other developers
                <br />
                - Built using: React and Sass
                </p>
                <a target="_blank" rel="noopener noreferrer" href="https://github-social.netlify.app/">
                    <button>
                        View Project
                    </button>
                </a>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/github-social/frontend">
                    <button>
                        View Github
                    </button>
                </a>
            </div>
        </div>
    )
}

export default Projects;