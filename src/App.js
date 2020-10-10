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
        <Route path="/" component={MainPage}></Route>
        <Route exact path="/about" component={AboutPage}></Route>
        <Route exact path="/contact" component={ContactPage}></Route>
        <Route exact path="/testimonial" component={TestimonialPage}></Route>
        <Route exact path="/cv" component={CVPage}></Route>
        <Route exact path="/projects" component={ProjectsPage}></Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
