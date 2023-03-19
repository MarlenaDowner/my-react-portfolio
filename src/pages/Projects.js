import React from "react";
import "../components/style/header.css";
import project1 from "../assets/pictures/Project1.JPG";
import project2 from "../assets/pictures/Project2.JPG";
import project3 from "../assets/pictures/Project3.JPG";
import project4 from "../assets/pictures/Project4.JPG";
import project5 from "../assets/pictures/Project5.JPG";
import project6 from "../assets/pictures/Project6.JPG";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import icon from "../assets/pictures/github.svg";
import globe from "../assets/pictures/globe.svg";


const cardsData = [
  {
    title: "Refactoring Existing Site",
    text: "HTML + CSS",
    img: project1,
    button: "Link",
    link: "https://marlenadowner.github.io/HTML-CSS-Code-Refactor/",
    github: "https://github.com/MarlenaDowner/HTML-CSS-Code-Refactor"
  },
  {
    title: "HTML Portfolio",
    text: "HTML + CSS",
    img: project2,
    button: "Link",
    link: "https://marlenadowner.github.io/personal-portfolio/",
    github: "https://github.com/MarlenaDowner/personal-portfolio"
  },
  {
    title: "Bootstrap Portfolio",
    text: "Bootstrap, CSS + JavaScript",
    img: project3,
    button: "Link",
    link: "https://marlenadowner.github.io/Bootstrap-Portfolio/",
    github: "https://github.com/MarlenaDowner/Bootstrap-Portfolio"
  },
  {
    title: "Planning Calender",
    text: "HTML, jQuery, CSS + Local Storage",
    img: project4,
    button: "Link",
    link: "https://marlenadowner.github.io/Planning-Calender/",
    github: "https://github.com/MarlenaDowner/Planning-Calender"
  },
  {
    title: "Weather Dashboard",
    text: "HTML, Javascript + API",
    img: project5,
    button: "Link",
    link: "https://marlenadowner.github.io/Weather-Dashboard/",
    github: "https://github.com/MarlenaDowner/Weather-Dashboard"
  },
  {
    title: "Password Generator",
    text: "Javascript, CSS + HTML",
    img: project6,
    button: "Link",
    link: "https://marlenadowner.github.io/JavaScript-Password-Generator/",
    github: "https://github.com/MarlenaDowner/JavaScript-Password-Generator"
  },
];

const Projects = () => {
  return (
    <div className="body2">
      <br />
      <div class="container">
        <div>
          <div className="ProjectHeader">
            <div className="ProjectHeader-text">
             Projects
            </div>
          </div>
          {/* <br></br> */}
          {/* <h2 className="ProjectsH2"> Have a look around...👀</h2> */}
          <br></br>
          <div class="Projectintro">My projects are an exibition of the skills sets I have learnt while enrolled in my Front-End Web Development Bootcamp. I used the following: HTML5, CSS, JavaScript, jQuery, Bootstrap, React, API request, Node.js and Local Storage.
          <br></br>
          <br></br>
          Feel free to view my GitHib Repositories to get a detailed breakdown of each project listed and the motivation behind the project. You can also view projects not listed below in my repository...Have a look around 👀</div>
          <br></br>
          <div className="row">
            {cardsData.map((card, index) => (
              <div key={index} className="col-sm-6 col-md-4">
                <div className="card">
                  <img src={card.img} className="card-img-top" alt="Project" />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>


                    <div className="Button" style={{ display: "flex", alignItems: "center" }}>
                       {/* glob icon */}
                      <a href={card.link} className="">
                      <img className="globeIcon" src={globe} alt="githublogo" />
                      </a>

                      {/* git hub icon */}
                      <div className="github">
                        <a href={card.github} className="">
                          <img className="gitIcon" src={icon} alt="githublogo" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Projects;





