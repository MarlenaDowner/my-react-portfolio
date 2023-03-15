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
    text: "My main objective while refactoring the Horiseon existing site was to make the site more accessible, ensuring that people with disabilities could access the website using assistive technologies such as video captions, screen readers, or braille keyboards. The refactoring of the site also improved the site's accessibility and it's search engine optimization.",
    img: project1,
  },
  {
    title: "HTML Portfolio",
    text: "My motivation for this project was to create my first HTML + CSS personal web portfolio. I created the portfolio to showcase the projects I have build and also have a space to which future employers can easily have access and view my projects.",
    img: project2,
  },
  {
    title: "Bootstrap Portfolio",
    text: "My motivation for this project was to create a portfolio using Bootstrap, HTML, CSS and JavaScript. I built the project to show my skillset in Bootstrap and to showcase the projects I have worked on so far. With this portfolio, my work is easily accessible to future employers and colleagues.",
    img: project3,
  },
  {
    title: "Planning Calender",
    text: "My motivation for this project was to build a simple calendar application that allows a user to save events for each hour of the day by modifying starter code. The app run's in the browser and feature dynamically updated HTML and CSS powered by jQuery. The app will allow any user to keep track of their day while on the go. The app will save important events such as meetings, appointments ect in a colour coded guid for visualisation.",
    img: project4,
  },
  {
    title: "Team Profile Generator",
    text: "This is the text for card 1.",
    img: project5,
  },
  {
    title: "Dynamic Password Generator",
    text: "My motivation for this task was to create a application that employees can use to generate a random password based on criteria they’ve selected.It has a clean and polished user interface that is responsive to different wbe pages sizes. The app run's in the browser, and feature's dynamically updated HTML and CSS powered by JavaScript code that you write.",
    img: project6,
  },
];

const Projects = () => {
  return (
    <div className="body2">
      <br />
      <div class="container">
        <div>
        <h1 className="ProjectHeader">Projects!</h1>
          <div className="row">
            {cardsData.map((card, index) => (
              <div key={index} className="col-sm-6 col-md-4">
                <div className="card">
                  <img src={card.img} className="card-img-top" alt="Project" />
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.text}</p>
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
