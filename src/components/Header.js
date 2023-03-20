import React from "react";
import { Link } from "react-router-dom";
import github from "../assets/pictures/github.svg";
import pdf from "../assets/pictures/pdf.svg";
import email from "../assets/pictures/email.svg";
import linked from "../assets/pictures/linkedin.svg";

const navLinks = [
  {
    linkedin: "https://www.linkedin.com/in/marlena-asantewah-downer-74562213b/",
    github: "https://github.com/MarlenaDowner",
    cv: "/cv.pdf",
    email: "marlenadowner@hotmail.co.uk"
  },
];

const CustomNavbar = () => {
  const handleCVDownload = () => {
    window.open(navLinks[0].cv, '_blank');
  };

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
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>

          <div className="Navicons">
            <a href={navLinks[0].linkedin} className="">
              <img className="linked" src={linked} alt="linkedinlogo" />
            </a>
            <a href={navLinks[0].github} className="">
              <img className="gitnIcon" src={github} alt="githublogo" />
            </a>
            <a href={navLinks[0].cv} download onClick={handleCVDownload}>
              <img src={pdf} className="pdf" alt="pdf-icon" />
            </a>
            <a href={`mailto:${navLinks[0].email}`} className="">
              <img className="email" src={email} alt="emaillogo" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default CustomNavbar;
