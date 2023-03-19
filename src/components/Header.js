import React from "react";
import { Link } from "react-router-dom";
import { getFID } from "web-vitals";
import github from "../assets/pictures/github.svg";
import pdf from "../assets/pictures/pdf.svg";
import email from "../assets/pictures/email.svg";

const CustomNavbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="contact">
                Contact
              </Link>
            </li>
          </ul>
          <div className="Navicons">
          <img className="gitnIcon" src={github} alt="githublogo" />
            <img className="pdf" src={pdf} alt="githublogo" />
            <img className="email" src={email} alt="githublogo" />
        </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
