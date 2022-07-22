import React from "react";
import { BrowserRouter as Router, Link, Routes, Route, Navigate } from "react-router-dom";
import About from './About';
import Work from './Work';
// import Shoutouts from './Shoutouts'
import Contact from './Contact';
import Resume from './Resume';
import Home from './Home';

function Nav() {
  return (
    <Router>
      <header className="flex-row px-1">
        <h1>
          <Link to="/">Colleen Murray</Link>
        </h1>
        <nav>
          <ul className="flex-row nav-bar">
            <li>
              <Link to="/about" className="section-link">
                About
              </Link>
            </li>
            <li>
              <Link to="/work" className="section-link">
                Work
              </Link>
            </li>
            <li>
              <Link to="/contact" className="section-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/resume" className="section-link">
                Skills/Resume
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Routes>
        <Route 
        path=""
        element={<Navigate to="/home" />}
        >
        </Route>
        <Route 
        path="/about"
        element={<About/>}
        >
        </Route>
        <Route 
        path="/work"
        element={<Work/>}
        >
        </Route>
        <Route 
        path="/contact"
        element={<Contact/>}
        >
        </Route>
        <Route path="/resume"
        element={<Resume/>}
        >
        </Route>
        <Route path="/home" element={<Home/>}>
        </Route>
      </Routes>
    </Router>
  );
}

export default Nav;
