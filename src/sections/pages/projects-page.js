import React from 'react'
import Carousel from '../../components/carousel'
import ReactLogo from '../../assets/images/react-logo.png.png'
import HtmlLogo from '../../assets/images/htmlogo.png'
import PhpLogo from '../../assets/images/phplogo.png'
import SQLLogo from '../../assets/images/sqllogo.png'
import PythonLogo from '../../assets/images/python.png'
import NodeLogo from '../../assets/images/nodelogo.png'
import MongoLogo from '../../assets/images/mongologo.png'
import JavaLogo from '../../assets/images/javalogo.png'
import CSharpLogo from '../../assets/images/csharplogo.png'
import NavBar from '../../components/nav-bar'


export default class ProjectPage extends React.Component
{
   
    render = () =>{
        return(
            <div className="main-box">
            <h1 className="box-title">PROJECTS</h1>
            <div className="main-page projects-page">
              <div className="project-section">
                  <div className="project-row">
                      <img alt="" src=""/>
                      <div className="project-description fade-in"> 
                          <h3>Order Management System</h3>
                          <p>Techstack used:</p>

                          <div className="tech-row">
                              <img alt="" src={JavaLogo}/>
                              <img alt="" src={SQLLogo}/>                              
                          </div>
                          <p>This was a system designed for a client. This project involved using JavaFX, as well as MySQL to build a system comprised of the following features: user accounts, data storage, adding/updating/deleting items of that data, bug tracking, and a help section.
                              This project taught me how to effectively gather client requirements, how to design a system well, with structuring data flow, and also taught me how to handle client interactions.
                          </p>
                      </div>
                  </div>
              </div>
              <div className="project-section">
              <div className="project-row">
                      <img alt="" src=""/>
                      <div className="project-description fade-in"> 
                          <h3>Cloud Storage System</h3>
                          <p>Techstack used:</p>
                          <div className="tech-row">
                              <img alt="" src={PhpLogo}/>
                              <img alt="" src={HtmlLogo}/>
                              <img alt="" src={SQLLogo}/>
                          </div>
                          <p>This project was my first big PHP project - which I did at home for fun. This project involved utilising FTP to produce the main function of storing files on a remote server. The other functions
                              were to retrieve, add, and delete files from the remote server. I also had to learn how to configure a remote server in order for me to interact with it properly. This project was also constructed using the MVC design pattern,
                              which aided me in designing the system. If I were to do this again, I'd include a better UI - as my skills in that area have improved.
                          </p>
                      </div>
                  </div>
                  
              </div>
              <div className="project-section">
              <div className="project-row">
                      <img alt="" src=""/>
                      <div className="project-description fade-in"> 
                          <h3>Lunaterra UI Design</h3>
                          <p>Techstack used:</p>
                          <div className="tech-row">
                              <img alt="" src={ReactLogo}/>
                              <img alt="" src={HtmlLogo}/>
                              
                          </div>
                          <p> This project involved purely frontend skills - utilising React, HTML, CSS, JQuery and Javascript. This was my first big UI Project, using a false concept (space) in order to build something that would stand out. I followed modern design trends,
                              and applied the principles of UI Design as best I could when building it. I also added animations via JQuery in order to pull the user in more easily.  </p>
                      </div>
                  </div>
              </div>
              <div className="project-section">
                <div className="project-row">
                      <img alt="" src=""/>
                      <div className="project-description fade-in"> 
                          <h3>React Bug Tracker</h3>
                          <p>Techstack used:</p>
                          <div className="tech-row">
                              <img alt="" src={ReactLogo}/>
                              <img alt="" src={HtmlLogo}/>
                              <img alt="" src={NodeLogo}/>
                              <img alt="" src={MongoLogo}/>
                                                           
                          </div>
                          <p>This project was my first in React, and was built under the tutelage of a senior developer whilst on an internship. This project was to be built so that I could be trained up on how to use React, as well as learning how to use the MERN stack properly.
                              I also had to consider security issues with the application, 
                          </p>
                      </div>
                  </div>
              </div>
              <div className="project-section">
                <div className="project-row">
                      <img alt="" src=""/>
                      <div className="project-description fade-in"> 
                          <h3>Anime Society Discord Bot</h3>
                          <p>Techstack used:</p>

                          <div className="tech-row">
                              <img alt="" src={PythonLogo}/>
                              
                          </div>
                          <p>This project involved using Python and an API to build a discord bot for the society that I was a part of. The bot could set theme and
                              anime of the week, it could also add and remove suggestions from a list that would be displayed with "!view" command. The bot could also be used to search
                              for anime by webscraping myanimelist.com via BeautifulSoup's API. </p>
                      </div>
                  </div>
              </div>
              <div className="project-section">
              <div className="project-row">
                      <img alt="" src=""/>
                      <div className="project-description fade-in"> 
                          <h3>Debug Client</h3>
                          <p>Techstack used:</p>
                          <div className="tech-row">
                              <img alt="" src={CSharpLogo}/>
                          </div>
                          <p>This was one of my earliest projects when I first started university - it's a simple bug client, which can add, edit and remove bugs.</p>
                      </div>
                  </div>
                  
              </div>
             
              <Carousel carousel={"project-section"}/>

            </div>
            <div className="subbox">
                <NavBar/>
            <h1 className="subheading">Mo Aziz</h1>

            </div>
            </div>
        )
    }
}