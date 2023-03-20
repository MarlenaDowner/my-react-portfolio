import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from './components/Header';




function App() {



  return (
    <Router>
      <div className="body1">
  
        <Header/>
        <Routes>
          <Route path="/my-react-portfolio">
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="projects" element={<Projects />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
