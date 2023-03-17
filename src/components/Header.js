import React from "react";
import { Link } from "react-router-dom";

const CustomNavbar = () => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="contact">Contact</Link>
                    </li>
                </ul>
                <span className="mediaIcons">
                    {/* <a href="#"><img src={} alt=""/></a>
                    <a href="#"><img src={} alt=""/></a> */}

                </span>
            </div>
        </nav>
    );
};

export default CustomNavbar;
