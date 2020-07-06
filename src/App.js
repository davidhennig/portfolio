import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Components/navbar.js"
import About from "./Components/about"
import Projects from './Components/projects';
import Resume from './Components/resume';
import Contact from './Components/contact';
import Homepage from './Components/homepage';
import './App.css';
import "./CSS/main.scss"

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Route component={Navbar} />
          <Route exact path="/" component={Homepage} />
          <Route exact path="/about" component={About} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/resume" component={Resume} />
          <Route exact path="/contact" component={Contact} />
        </header>
      </div>
    </Router>
  );
}

export default App;
