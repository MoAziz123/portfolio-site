import React from 'react'
import Carousel from '../../components/carousel'
import NavBar from '../../components/nav-bar'
import FontAwesome from 'react-fontawesome'

export default class TestimonialPage extends React.Component
{
    render()
    {
        return(
            <div className="main-box">
            <h1 className="box-title">Testimonials</h1>
            <div className="main-page testimonial-page">
                <div className="testimonial-section">
                    <div className="grid-item fade-in">
                        <img alt="" src=""/>
                        <div className="test-description">
                        <h2>Gaynor Forryan</h2>
                        <h3>Client @ Upstage Supplies</h3>
                            <FontAwesome className="fa-2x fa-quote-left"/>
                            <p>We were very fortunate  to have Mo to work with us. We asked him to make some changes and recommendations to our website, and to develop a Web based client enquiry system for us, both of which he delivered on.
                            He was always very helpful, suggested ideas for us, and delivered on time.
                            Mo was very pleasant to work with, courteous and we wouldn’t hesitate in recommending him to anyone.
                            We wish him the very best in his future career.</p>
                            <FontAwesome className="fa-2x fa-quote-right"/>
                        </div>
                    </div>
                    <div className="grid-item fade-in">
                        <img alt="" src=""/>
                        <div className="test-description">
                        <h2>Brandon Bridges</h2>
                        <h3>CEO and Lead Developer @ Visually Digital</h3>
                            <FontAwesome className="fa-2x fa-quote-left"/>
                            <p></p>
                            <FontAwesome className="fa-2x fa-quote-right"/>
                        </div>
                    </div>
                    <div className="grid-item fade-in">
                        <img alt="" src=""/>
                        <div className="test-description">
                        <h2>Will Briers</h2>
                        <h3>Technical Specialist @ Leicestershire County Council</h3>
                            <FontAwesome className="fa-2x fa-quote-left"/>
                            <p></p>
                            <FontAwesome className="fa-2x fa-quote-right"/>
                        </div>
                    </div>
                </div>
                <Carousel carousel={"grid-item"}/>
            </div>
            <div className="subbox">
            <NavBar/>

            <h1 className="subheading">Mo Aziz</h1>

            </div>
            </div>
        )
    }
}