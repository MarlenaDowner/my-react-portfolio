import { Link } from "react-router-dom";



const Header = () => {
    return <div>
            <header className="header">
            <Link to="/">Home</Link>
            <Link to="projects">Projects</Link>
            <Link to="contact">Contact</Link>
        </header>
        </div>
}

export default Header;