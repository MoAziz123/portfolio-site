import React from 'react'
import FontAwesome from 'react-fontawesome'
/**
 * @class - Carousel
 * @description - produces a carousel - the section to control is defined by the prop passed to it
 * @style - none
 */
export default class Carousel extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={
            elements:document.getElementsByClassName(this.props.carousel),
            counter:0
        }

    }
    componentDidMount()
    {
        this.state.elements[0].style.display="block"

    }
    handleLeftClick=()=>{
        if(this.state.counter > 0)
        {
            this.state.elements[this.state.counter].style.display = "none"
            this.state.elements[this.state.counter-1].style.display = "block"
            this.setState({
                counter:this.state.counter-1
            })
        }
        else
        {
            this.state.elements[this.state.counter].style.display = "none";
            this.setState({counter:this.state.elements.length-1})
            this.state.elements[this.state.elements.length-1].style.display = "block";        
        }
        
        }

    
    handleRightClick=()=>{
        if(this.state.counter < this.state.elements.length-1)
        {
            this.state.elements[this.state.counter].style.display = "none"
            this.state.elements[this.state.counter+1].style.display = "block"
            this.setState({
                counter:this.state.counter+1
            })
        }
        else
        {
            this.state.elements[this.state.counter].style.display = "none";
            this.setState({counter:0})
            this.state.elements[0].style.display = "block";
        }
        
    }

    render()
    {
        return(
            <div className="carousel">
                <button onClick={this.handleLeftClick}><FontAwesome className="fa-2x fa-arrow-left"/></button>
                <button onClick={this.handleRightClick}><FontAwesome className="fa-2x fa-arrow-right"/></button>

            </div>
        )
    }
}