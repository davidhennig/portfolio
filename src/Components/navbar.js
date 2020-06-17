import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {



    return (
        <div className="nav-bar-wrapper">
            <div className="navbar-content">
                <Link className="nav-button" to="/about">About</Link>
                <Link className="nav-button" to="/projects">Projects</Link>
                <Link className="nav-button" to="/resume">Resume</Link>
                <Link className="nav-button" to="/contact">Contact</Link>
            </div>
        </div>
    )
}

export default Navbar;