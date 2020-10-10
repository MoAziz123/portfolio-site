//modules
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
//css
import logo from './logo.svg';
import './App.css';
//pages
import MainPage from './sections/pages/main-page'
import AboutPage from './sections/pages/about-page'
import CVPage from './sections/pages/cv-page'
import ProjectsPage from './sections/pages/projects-page'
import ContactPage from './sections/pages/contact-page'
import TestimonialPage from './sections/pages/testimonial-page'

function App() {
  return (
    <div className="App">
     <Router>
      <Switch>
        <Route exact path="/" exact component={MainPage}></Route>
        <Route path="/portfolio-site/about" exact component={AboutPage}></Route>
        <Route path="/contact" exact component={ContactPage}></Route>
        <Route path="/testimonial" exact component={TestimonialPage}></Route>
        <Route path="/cv" exact component={CVPage}></Route>
        <Route path="/projects" exact component={ProjectsPage}></Route>
        <Route component={MainPage}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
