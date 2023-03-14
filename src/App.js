import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from './components/Header';
import { useState, useEffect } from 'react';



function App() {

  // const ProjectPage = ({ toggle }) => {
  //   const [backgroundColor, setBackgroundColor] = useState("red");
  
  //   const location = useLocation();
  
  //   useEffect(() => {
  //     if (location.pathname === "/projects") {
  //       setBackgroundColor("blue");
  //     }
  //   }, [location]);
  
  //   return (
  //     <div style={{ backgroundColor }}>
  //       {/* add your project page content here */}
  //     </div>
  //   );
  // };
 

  return (
    <Router>
      <div className="body1">
      {/* <Header style={{ backgroundColor: backgroundColor }} /> */}

        <Header/>


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
