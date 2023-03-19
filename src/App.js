import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from './components/Header';




function App() {



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
        <Contact/>
      </div>
    </Router>
  );
}

export default App;
