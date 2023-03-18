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


const cardsData = [
  {
    title: "Refactoring Existing Site",
    text: "",
    img: project1,
    button: "Link",
    link: "https://marlenadowner.github.io/HTML-CSS-Code-Refactor/",
    github: "https://github.com/MarlenaDowner/HTML-CSS-Code-Refactor"
  },
  {
    title: "HTML Portfolio",
    text: "",
    img: project2,
    button: "Link",
    link: "https://marlenadowner.github.io/personal-portfolio/"
  },
  {
    title: "Bootstrap Portfolio",
    text: "",
    img: project3,
    button: "Link",
    link: "https://marlenadowner.github.io/Bootstrap-Portfolio/"
  },
  {
    title: "Planning Calender",
    text: "",
    img: project4,
    button: "Link",
    link: "https://marlenadowner.github.io/Planning-Calender/"
  },
  {
    title: "Weather Dashboard",
    text: "",
    img: project5,
    button: "Link",
    link: "https://marlenadowner.github.io/Weather-Dashboard/"
  },
  {
    title: "Password Generator",
    text: "",
    img: project6,
    button: "Link",
    link: "https://marlenadowner.github.io/JavaScript-Password-Generator/"
  },
];

const Projects = () => {
  return (
    <div className="body2">
      <br />
      <div class="container">
        <div>
          <h1 className="ProjectHeader">Welcome to my Projects!</h1>
          <h2 className="ProjectsH2"> Have a look around 👀</h2>
          <div class="Projectintro">My projects below is an exibition of my different skills sets I have learnt while taking my bootcamp in <h1 className="pBack">Front-End Web Development</h1>.My projects was created using: HTML5, CSS, JavaScript, jQuery, Bootstrap, React, API request, Node.js and Local Storage.</div>
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

                      <a href={card.link} className="viewButton"> {card.button} </a>

                      <div className="github">
                      <a href={card.github}>
                      <img className="icon" src={icon} alt="githublogo"/>
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




