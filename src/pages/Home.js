import logo from '../assets/pictures/mainpic.jpg';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <section className="jumbo">
            <h1 className="Welcome">Welcome to my Portfolio</h1>
            <h2 className="HomeH2"> Hi! I'm Marlena</h2>
            <div class="intro">I’m an <h1 className="pBack">Apprentice Web-Developer</h1> in a 18 month Software Developer Apprenticeship. I’m also soon to be finishing a 16-week bootcamp in Front-End Web Development. As a resilient individual, I have learnt programming interfaces, user experience design, and building and deploying modern web applications. My goal once finishing my apprentiship is to implement and use these fresh skills in my career as a Software Developer.</div>
            <br></br>
            <Link className="viewButton" to="/projects">View Projects!</Link>
            <div className="mainpic">
                <img src={logo} className="mainpic" alt="logo"></img>
            </div>
        </section>

    );
}

export default Home;

