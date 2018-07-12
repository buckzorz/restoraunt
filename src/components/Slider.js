import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as sliderActions from '../actions/actions'
import * as Icons from 'react-icons/lib/fa'

class Slider extends Component{
    constructor(props){
        super(props)
        this.nextSlide = this.nextSlide.bind(this)
        this.previousSlide = this.previousSlide.bind(this)
    }
    componentDidMount(){
        setInterval(this.nextSlide, 3000)
    }
    nextSlide(){
        this.props.actions.sliderSlideNext(this.props.slide)
    }
    previousSlide(){
        this.props.actions.sliderSlidePrevious(this.props.slide)
    }
    render(){
        let imgSrc = ['./pictures/slider1.jpg', './pictures/slider2.jpg', './pictures/slider3.jpg', './pictures/slider4.jpg']
        let background = {
            backgroundImage: `url(${imgSrc[this.props.slide]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
        return(
            <div className="slider" >
                <div style={background} className="slider-image">
                    <button className="button-slider left" onClick={this.previousSlide}><Icons.FaArrowLeft /> </button>
                    <button className="button-slider right" onClick={this.nextSlide}><Icons.FaArrowRight /> </button>
                </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(sliderActions, dispatch)
    }
}

function mapStateToProps(state, ownProps){
    return{
        slide: state.sliderReducer 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Slider)