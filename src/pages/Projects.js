import React from "react";
import '../components/style/header.css';
import project1 from '../assets/pictures/Horiseon.JPG';



const Projects = () => {
    return <div className="body2">
      <br></br>

<div className="container">


        {/* <div className="card" style={{ width: '50rem' }}>
          <img src={project1} className="card-img-top" alt="Project Picture" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div> */}

        <div className="card">
          <img src={project1} className="card-img-top"
          alt="Project" />
          <div className="card-body">
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          </div>
        </div>
        </div>

  

   


}

export default Projects;