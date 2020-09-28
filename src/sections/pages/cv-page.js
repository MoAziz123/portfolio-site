import React from 'react'
import ReactDOM from 'react-dom'
import FontAwesome from 'react-fontawesome'
import Carousel from '../../components/carousel'
import NavBar from '../../components/nav-bar'

export default class CVPage extends React.Component
{
    

    
    render()
    {
        return(
            <div className="main-box">
            <h1 className="box-title">C.V.</h1>
            <div className=" main-page cv-page">
                <div className="cv-section 1">
                    <h2 className="glow">Profile</h2>
                    <div className="cv-column fade-in">
                        <p>I am currently studying in second year for Computer Science at DMU - which has taught me much - from Computer Systems giving me an in-depth understanding of how a computer works, from databases teaching me of data sources, and how to structure them appropriately, it has led me to my own focus is in application and software development - useful to your company, as evidenced by my Github.</p><p>
                        I have developed many applications, my most notable being a prototype web app that queried an SQL database and returned data from it - built for a charity. This was written in ASP.NET. I have also written a portfolio site in HTML/CSS – which helped me gain experience in that area. I have also built a bug logger in C# in Windows Forms - another one of my notable projects. Currently, I am working on an MVC application – a module booking system written in Java. Further to this, I have also undertaken further qualifications, such as the MTA – Software Development Fundamentals and will undertake the HTML5 Application Development Fundamentals in the future, in order to improve my skillset.
                        </p>
                        <p>
                        Through my hours of volunteering at Inspiring Communities (a foodbank) in Coventry, I have gained skills in punctuality, collaboration, and commitment, which is beneficial to you, as you will have a hard working intern that will not give up on creating solutions for clients. My interest in Japanese also give me the ability to manage my time effectively, and also prove a willingness to learn and self teach myself. I am currently aiming to complete the N5 qualification.
                        </p>
                        
                    </div>
                   
                </div>
                <div className="cv-section 2">
                    
                    <h2 className="glow" >Education</h2>
                    <p>I have a lot of experience working in software development, from my placement, 
                        to my part time jobs as a fullstack and software developer.</p>
                    <div className="cv-column-wrapper">
                        <div className="cv-column fade-in">
                        <h3>University - Second year</h3>
                        <ul>
                            <li>Web Application Development - 85%</li>
                            <li>Software and Security Management - 87.5%</li>
                            <li>Agile Team Development - 92%</li>
                            <li>Data Structures and Algorithms - 65%</li>
                            <li>Introduction to Research - 40%</li>
                            <li>Concurrent and Parallel Algorithms - 77%</li>
                            <li>Object Oriented Design - 70%</li>
                            <li>Object Oriented Development - 68%</li>
                        </ul>
                        </div>                        

                        <div className="cv-column fade-in">
                            <h3>Qualifications</h3>
                            <ul>
                                <li>MTA - Software Development Fundamentals (2019)</li>
                                <li>MTA - Application Development Fundamentals (2020)</li>
                            </ul>
                        </div>

                        <div className="cv-column fade-in">
                        <h3>University - First year</h3>
                        <ul>
                            <li>Computer Programming I- 87.5%</li>
                            <li>Computer Networks - 68%</li>
                            <li>Maths for Computing - 65%</li>
                            <li>Computer Ethics - 40%</li>

                            <li>Computer Programming II - 92%</li>
                            <li>Computer Law and Cybersecurity - 85%</li>
                            <li>Computer Systems - 77%</li>
                            <li>Database Design and Implementation- 70%</li>
                        </ul>
                        </div>
                    </div>
                </div>
                <div className="cv-section 3">
                    <h2 className="glow">Experience</h2>
                    <div className="cv-column-wrapper-alt fade-in">
                        <div className="cv-column ">
                            <h3>Placement Technical Specialist - Leicestershire County Council</h3>
                            <text>2020-current</text>
                            <p>This role comprises of development and technical support. In essence, I had to develop and maintain systems for use by Leicestershire County Council. This involved building APIs, developing systems from scratch using ASP.NET,
                            as well as following the standards of good customer service. Other responsibilities I had in this role was to respond to incidents logged via other staff members, and also to liaise with both staff and customers alike. The main things I learnt
                            was how to deal with customers, and how to build quality software to a specification standard.</p>
                        </div>
                        <div className="cv-column">
                            <h3>Fullstack Developer Internship - Visually Digital</h3>
                            <text>June 2020 - Aug 2020</text>
                            <p>This role was part of a small web design company, consisting of myself, the senior developer/CEO, and a graphic designer. This role
                            consisted of me building an application in the MERN stack - a bug tracker built to a high quality. This included learning about HTTP policies, as well as 
                            what to include in a web application. </p>
                        </div>
                        <div className="cv-column">
                            <h3>OMS - Upstage Supplies (Placement)</h3>
                            <text>May 2020 - June 2020</text>
                            <p>This wasn't a role as such, but it was more of a voluntary placement that I did for free during the pandemic of 2020. This role involved building software for a client using JavaFX, and SQL. This placement also taught me how to
                                deal with client requirements, as I personally had to gather the requirements for the client and ensure that I informed them every step of the way. The client was happy with the process that I used, and I released myself from the placement when I got my fullstack developer role.
                            </p>
                        </div>
                        <div className="cv-column">
                            <h3>Food Bank Volunteer - Inspiring Communities</h3>
                            <text>2016-2017</text>
                            <p>
                            The role above gave me experience of working in a team, managing team members, and giving me more interpersonal skills and helped me improve my communication with others (due to my hard of hearing, it can be difficult at times to hear).My responsibilities were to ensure that I was professional and courteous to the foodbank users whilst ensuring their needs were met and the food that they ordered through a pen/paper system was given.
                            </p>
                        </div>
                    </div>
                    
                </div>
                <div className="cv-section 4">
                    <h2 className="glow"> Skills</h2>
                    <div className="cv-column-wrapper">
                    <div className="cv-column fade-in">
                        <h3>Technical</h3>
                        <ul>
                            <li>C#</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>HTML/CSS/JS</li>
                            <li>LAMP Stack (linux, apache, mysql, php)</li>
                            <li>MERN Stack (mongo, express, react, node)</li>
                            <li>Bash</li>
                        </ul>
                    </div>
                    <div className="cv-column fade-in">
                        <h3>Non-technical</h3>
                        <ul>
                            <li>Able to communicate effectively with customers</li>
                            <li>Good troubleshooting and debugging skills</li>
                            <li>Computational thinking skills</li>
                            <li>Good problem solving skills</li>
                            <li>Able to work in a team effectively</li>
                        </ul>
                    </div>
                    </div>
                    
                </div>
                <Carousel carousel="cv-section"/>

                
            </div>
            
            <div className="subbox">
            <NavBar/>
            <h1 className="subheading">Mo Aziz</h1>

            </div>

            </div>

        )
    }
}