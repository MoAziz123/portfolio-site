import React from 'react'
import FontAwesome from 'react-fontawesome'
import {Redirect} from 'react-router-dom';
/**
 * @name - NavBar
 * @description - loads the main page into the box div
 * @style - same as mainpage's navbar, but this will be a mini
 * version with flex-direction:row
 * @since 1.0.0
 */
export default class NavBar extends React.Component{
    constructor(props)
    {
        super(props);
        this.state={
            redirect:null,
            text:null
        }
    }
    handleHover=(link_text)=>
    {
        this.setState({
            text:link_text

        })
    }
    handleHoverOut=()=>{
        this.setState({text:null})
    }
    handleRedirect=(link)=>
    {
        this.setState({
            redirect:link
        })
    }
    componentDidMount()
    {
        let elements = document.getElementsByClassName("page-button")
        for(let i = 0; i < elements.length; i++)
        {
            if(window.location.pathname === elements[i].getAttribute("name"))
            {
                elements[i].style.display = "none";
            }
        }
    }
    render(){
        if(this.state.redirect)
        {
            return(<Redirect to={this.state.redirect}/>)
        }
        return(
            <>
                <div className="button-row-mini">
                    <div name="home"  className="page-button">
                        <FontAwesome onMouseLeave={(e)=>{this.handleHoverOut()}} onMouseOver={(e)=>{this.handleHover("home")}} onClick={(e)=>{this.handleRedirect("/")}} className="fa-2x fa-home"/>
                    </div>
                    <div name="/about" className="page-button">
                        <FontAwesome onMouseLeave={(e)=>{this.handleHoverOut()}} onMouseOver={(e)=>{this.handleHover("about")}} onClick={(e)=>{this.handleRedirect("/about")}} className="fa-2x fa-user page-button icon"/>
                    </div>
                    <div name="/contact" className="page-button">
                        <FontAwesome onMouseLeave={(e)=>{this.handleHoverOut()}} onMouseOver={(e)=>{this.handleHover("contact")}} onClick={(e)=>{this.handleRedirect("contact")}} className="fa-2x fa-address-book page-button icon" href="about.html" />
                    </div>
                    <div name="/testimonial" className="page-button">
                        <FontAwesome onMouseLeave={(e)=>{this.handleHoverOut()}} onMouseOver={(e)=>{this.handleHover("testimonials")}} onClick={(e)=>{this.handleRedirect("testimonial")}} className="fa-2x fa-commenting page-button icon" />
                    </div>
                    <div name="/projects" className="page-button">
                        <FontAwesome onMouseLeave={(e)=>{this.handleHoverOut()}} onMouseEnter={(e)=>{this.handleHover("projects")}} onClick={(e)=>{this.handleRedirect("projects")}} className="fa-2x fa-tasks page-button icon" />
                    </div>
                    <div name="/cv" className="page-button">
                        <FontAwesome onMouseLeave={(e)=>{this.handleHoverOut()}} onMouseOver={(e)=>{this.handleHover("cv")}} onClick={(e)=>{this.handleRedirect("cv")}} className="fa-2x fa-newspaper-o fapage-button icon"/>
                    </div>
                </div>
                <p className="link-text">{this.state.text}</p>
                </>

        )
    }
}