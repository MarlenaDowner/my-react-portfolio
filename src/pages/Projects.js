import React from "react";
import "../components/style/header.css";
import project1 from "../assets/pictures/Project1.JPG";
import project2 from "../assets/pictures/Project2.JPG";
import project3 from "../assets/pictures/Project3.JPG";
import project4 from "../assets/pictures/Project4.JPG";
import project5 from "../assets/pictures/Project5.JPG";
import project6 from "../assets/pictures/Project6.JPG";



const cardsData = [
  {
    title: "Refactoring Existing Site",
    text: "",
    img: project1,
    button: "View Site",
    link: "https://marlenadowner.github.io/HTML-CSS-Code-Refactor/"
  },
  {
    title: "HTML Portfolio",
    text: "My motivation for this project was to create my first HTML + CSS personal web portfolio. I created the portfolio to showcase the projects I have build and also have a space to which future employers can easily have access and view my projects.",
    img: project2,
    button: "View Project",
    link: "https://marlenadowner.github.io/personal-portfolio/"
  },
  {
    title: "Bootstrap Portfolio",
    text: "My motivation for this project was to create a portfolio using Bootstrap, HTML, CSS and JavaScript. I built the project to show my skillset in Bootstrap and to showcase the projects I have worked on so far. With this portfolio, my work is easily accessible to future employers and colleagues.",
    img: project3,
    button: "View Project",
    link: "https://marlenadowner.github.io/Bootstrap-Portfolio/"
  },
  {
    title: "Planning Calender",
    text: "My motivation for this project was to build a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. The app run's in the browser and feature dynamically updated HTML and CSS powered by jQuery. The app will allow any user to keep track of their day while on the go. The app will save important events such as meetings, appointments ect in a colour coded guid for visualisation.",
    img: project4,
    button: "View Project",
    link: "https://marlenadowner.github.io/Planning-Calender/"
  },
  {
    title: "Weather Dashboard",
    text: "My motivation was to build a 5 Day Weather Forecast app to retrieve weather data for cities apon users request.I built this project to give the user easy in accessing different weather condition when on the go. This app is perfect for someone who travels alot or even a commuter on their day to day tasks.",
    img: project5,
    button: "View Project",
    link: "https://marlenadowner.github.io/Weather-Dashboard/"
  },
  {
    title: "Dynamic Password Generator",
    text: "My motivation for this task was to create a application that employees can use to generate a random password based on criteria they’ve selected.It has a clean and polished user interface that is responsive to different wbe pages sizes. The app run's in the browser, and feature's dynamically updated HTML and CSS powered by JavaScript code that you write.",
    img: project6,
    button: "View Project",
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
                    <div className="Button">
                      <a href={card.link} className="viewButton">{card.button}</a>
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



