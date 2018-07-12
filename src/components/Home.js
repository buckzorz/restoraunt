import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Slider from './Slider'
import Menu from './Menu'

export default class Home extends Component{
    render(){
        return(
            <div>
                <Slider />
                <Menu />
            </div>
        )
    }
}