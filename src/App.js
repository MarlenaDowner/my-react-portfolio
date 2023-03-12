import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// 1. [X ] App
// 2. [X ] Header
// 4. [ X] Home
// 5. [ ] Project Gallery
// 6. [ X] Project
// 7. [ X] Contact

import Home from './pages/Home'
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Header from './components/Header';
function App() {
  return (
    <Router>
      <div>
          {/* <div className="BackgroundImage"> */}
          
        <Header/>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/projects" element={<Projects/>} />
          </Routes>
          </div>
      {/* </div> */}
   
      
    </Router>
  );
}

export default App;
