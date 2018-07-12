import React, { Component } from 'react'

export default class MenuItem extends Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        let background = {
            backgroundImage: `url(${this.props.props.picturePath})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
        return(
            <div className="menu-item">
                {this.props.props.special ? <div className="menu-item-special">Special!</div> : <div className="menu-item-special hidden">Special!</div>}
                <div style={background} className="menu-item-thumb">
                </div>
                <div className="menu-item-body">
                <p className="menu-item-name"><b>{this.props.props.title}</b></p>
                <p className="menu-item-description">{this.props.props.description}</p>
                </div>
                <div className="menu-item-footer">
                    <div className="menu-item-footer menu-item-footer-left">
                    LEARN MORE
                    </div>
                    <div className="menu-item-footer menu-item-footer-right">
                    <b>{this.props.props.price}</b>
                    </div>
                </div>
            </div>
        )
    }
}