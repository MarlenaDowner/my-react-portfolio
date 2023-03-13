// import logo from "../pictures/"; 
import logo from '../assets/pictures/mainpic.jpg';

const Home = () => {
    return <section className="jumbo">
        <div class="container">
            <div>
                <h1 className="Welcome">Welcome to my Portfolio</h1>
                <h2 className="HomeH1"> Hi! I'm Marlena</h2>
                <div class="intro">I’m an <h1 className="pBack">Apprentice Web-Developer</h1> in a 18 month Software Engineer Apprenticeship. I’m also soon to be finishing a 16-week bootcamp in Front-End Web Development. As a resilient individual, I have learnt programming interfaces, user experience design, and building and deploying modern web applications. My goal once finishing my apprentiship is to implement and use these fresh skills in my career as a Software Engineer.</div>
                <br></br>
                <button className="viewButton" type="button">
                    View Projects!
                </button>
                <div className="mainpic">
                    <img src={logo} alt="logo"></img>
                </div>
            </div>
        </div>
    </section>


}

export default Home;

