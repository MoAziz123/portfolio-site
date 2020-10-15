import React from 'react'
import FontAwesome from 'react-fontawesome'
import {Redirect} from 'react-router-dom';
/**
 * @name - MainPage
 * @description - loads the main page into the box div
 * @style - requires flex:column 
 * button-row should have a border top/bottom
 * h1 should have word spacing and padding, uppercase
 * button-row items flex:row 
 * page-button hover should highlight text
 * @since 1.0.0
 */
export default class MainPage extends React.Component{
    constructor()
    {
        super();
        this.state = {
            redirect:null
        }
    }
    
    handleRedirect=(link)=>
    {
        this.setState({redirect:link})
       
    }
    render(){
        if(this.state.redirect)
        {
            return(<Redirect to={this.state.redirect}/>)
        }
        return(
            <div className="main-box">
            <div className="main-page">
                <h1 className="box-title">Portfolio</h1>
                <div className="button-row  fade-in">
                    <div name="/about" className="page-button">
                        <FontAwesome onClick={(e)=>{this.handleRedirect("about")}} className="fa-4x fa-user page-button icon"/>
                        <text>about</text>
                    </div>
                    <div name="/contact" className="page-button">
                        <FontAwesome onClick={(e)=>{this.handleRedirect("contact")}} className="fa-4x fa-address-book page-button icon" href="about.html" />
                        <text>Contact</text>
                    </div>
                    <div className="page-button">
                        <FontAwesome onClick={(e)=>{this.handleRedirect("testimonial")}} className="fa-4x fa-commenting page-button icon" />
                        <text>testimonials</text>
                    </div>
                    <div className="page-button">
                        <FontAwesome onClick={(e)=>{this.handleRedirect("projects")}} className="fa-4x fa-tasks page-button icon" />
                        <text>projects</text>
                    </div>
                    <div className="page-button">
                        <FontAwesome onClick={(e)=>{this.handleRedirect("cv")}} className="fa-4x fa-newspaper-o fapage-button icon"/>
                        <text>CV</text>
                    </div>
                </div>
                <div className="subbox">
                <h1 className="subheading">Mo Aziz</h1>

                </div>
            </div>
            </div>

        )
    }
}