import React from 'react'
import NavBar from '../../components/nav-bar'
import FontAwesome from 'react-fontawesome'
export default class ContactPage extends React.Component
{
    render()
    {
        return(
            <div className="main-box">
            <h1 className="box-title">Contact</h1>
            <div className=" main-page contact-page">
                <div className="contact-form">
                <div className="social-links">
                <FontAwesome onClick={(e)=>{window.open("https://www.facebook.com/mo.aziz.71271/")}} className="fa-2x fa-facebook"/>
                <FontAwesome onClick={(e)=>{window.open("https://www.linkedin.com/in/mo-aziz-8b9744178/")}} className="fa-2x fa-linkedin"/>
                <FontAwesome onClick={(e)=>{window.open("https://www.github.com/MoAziz123")}} className="fa-2x fa-github"/>
            </div>
                    <form method="post" action="http://formspree.io/mohammed4685@outlook.com">
                    <div className="input-row">
                        <text>Name:</text>
                        <br/>
                        <input type="text" name="name" required/>
                    </div>
                    <div className="input-row">
                        <text>Subject:</text>
                        <br/>
                        <input type="text" name="subject" required/>
                    </div>
                    <div className="input-row">
                        <text>Email:</text>
                        <br/>
                        <input type="email" name="_replyto" required/>
                    </div>
                    <div className="input-row">
                        <text>Message:</text>
                        <br/>
                        <textarea rows="1" cols="50" wrap="physical"  name="body" required/>
                    </div>
                    <div className="input-row">
                    <button type="submit">Send</button>
                    </div>
                    </form>
                    
                </div>
            </div>
            
                <div className="subbox">
                    <NavBar/>
                    <h1 className="subheading">Mo Aziz</h1>
                </div>
            </div>

        )
    }
}