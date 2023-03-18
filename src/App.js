import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import CustomNavbar from './components/Header';




function App() {



  return (
    <Router>
      <div className="body1">
      {/* <Header style={{ backgroundColor: backgroundColor }} /> */}

        {/* <Header/> */}

        <CustomNavbar/>


        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;