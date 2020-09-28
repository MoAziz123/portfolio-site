import React from 'react'
import NavBar from '../../components/nav-bar'
import ProfilePic from '../../assets/images/profilepic.jpg'
export default class AboutPage extends React.Component
{
    constructor()
    {
        super();
        this.state ={redirect:null}
    }
    handleRedirect=(link)=>
    {
        switch(link)
        {
            case "home":this.props.history.push("/")
            case "about":this.props.history.push("/about")
            case "contact":this.props.history.push("/contact")
            case "cv":this.props.history.push("/cv")
            case "projects":this.props.history.push("/projects")
            case "testimonial":this.props.history.push("/testimonial")
        }
       
    }
    render()
    {
        return(
            <div className="main-box">
            <div className="main-page about-page">
                <h1 className="box-title">ABOUT</h1>
                <div className="profilepic fade-in">
                <img alt="" src={ProfilePic}/>
                <p className="subline">This is me.</p>

                </div>
                <div className="about-columns">
                <div className="about-column fade-in">
                <h2 className="column-title">Who am I?</h2>
                <p>My name is Mo, I'm 20 years old and currently working towards a Computer Science degree from De Montfort University - on track for a first.
                    I am currently on placement as a Placement Technical Specialist, so will graduate in 2022. I enjoy programming (via building fun projects),
                    philosophy, and learning Japanese. <br/><br/>
                    My personal philosophy is that by learning, one becomes more ingrained, more invested into the world itself. This philosophy
                    is very important to me, as without it, I would not be constantly striving to improve myself.
                </p>
                </div>
                <div className="about-column fade-in">
                <h2 className="column-title">What do I do?</h2>
                <p>Currently, I build software to test my skills - to this day,
                    I've built a variety of applications - ranging from desktop based in WinForms and JavaFX to web based using MERN and LAMP Stack. I aim to become a fullstack developer in future,
                    with a focus on cybersecurity - an in-demand skill that is sorely needed in the UK. I've recently began to undertake projects
                    with clients, as well as an internship at a rising web design company.</p> 
                </div>
                <div className="about-column fade-in">
                <h2 className="column-title">Why should you listen?</h2>
                <p>My skills in software development, web development and my willingness to learn
                    make me a candidate worth investing in. I have spent many a time working on projects - in a team-based setting,
                    as well as solo. Some of these have been liasing with a client, so I do have customer experience.
                    <br/>
                    <br/>
                    From my placement, I have learnt how to liase with team members and clients alike. I have also developed system and services for the council,
                    which includes utilising business software.

                </p>
                </div>
                </div>
            </div>
                <div className="about-row fade-in">
                    <h2 className="column-title">Currently, I am working on: <a href="https://github.com/MoAziz123">Mock CRM</a></h2>
                </div>
                <div className="subbox">
                    <NavBar/>
                    <h1 className="subheading">Mo Aziz</h1>
                </div>
            </div>

        )
    }
}