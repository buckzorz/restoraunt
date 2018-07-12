import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as Icons from 'react-icons/lib/fa'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as menuActions from '../actions/actions'

class NavigationBar extends Component{
    constructor(props){
        super(props)
        console.log()
        this.changeMenuStatus = this.changeMenuStatus.bind(this)
        this.scrollToFooter = this.scrollToFooter.bind(this)
        this.scrollToSpecial = this.scrollToSpecial.bind(this)
        this.scrollToRegular = this.scrollToRegular.bind(this)
    }

    changeMenuStatus(){
        console.log(this.props)
        this.props.actions.changeMenuState(this.props.menuStatus)
    }
    scrollToFooter(){
        var element = document.getElementById('footer')
        element.scrollIntoView({behavior: 'smooth'})
    }
    scrollToSpecial(){
        var specialElements = document.getElementById('special')
        specialElements.scrollIntoView({behavior: 'smooth'})
    }
    scrollToRegular(){
        var regularElements = document.getElementById('regular')
        regularElements.scrollIntoView({behavior: 'smooth'})
    }
    render(){
        var visibility = 'hide'
        
        if(this.props.menuStatus){
            visibility = 'show'
        }
        return(
        <div>
            <div className={visibility} id="navbar-slideout" onClick={this.changeMenuStatus}>
                <div className="navbar-slideout-links" onClick={this.scrollToSpecial}>
                    Menu
                </div>
                <div className="navbar-slideout-links">
                    Events
                </div>
                <div className="navbar-slideout-links">
                    Reserve
                </div>
                <div className="navbar-slideout-links">
                    Delivery
                </div>
                <div className="navbar-slideout-links">
                    About Us
                </div>
                <div className="navbar-slideout-links" onClick={this.scroolToFooter}>
                    Contacts
                </div>

            </div>    
            <div className="navbar">
            
            <div className="nav-hamburger">
                <Icons.FaBars onClick={this.changeMenuStatus} />
            </div>
                <div className="navbar-elements nav-link">Menu
                    <div className="nav-dropdown">
                        <div className="nav-dropdown-element" onClick={this.scrollToSpecial}>
                            Season specials
                        </div>
                        <div className="nav-dropdown-element" onClick={this.scrollToRegular}>
                            Menu
                        </div>
                    </div>
                </div>
                <div className="navbar-elements nav-link">Events</div>
                <div className="navbar-elements nav-link">Reserve</div>
                <div className="navbar-elements">THE MINIMALIST</div>
                <div className="navbar-elements nav-link">Delivery
                    <div className="nav-dropdown delivery">
                        <div className="nav-dropdown-element clear">
                            Delivery service:
                        </div>
                        <div className="nav-dropdown-element phone"><Icons.FaPhone /> 044-222-1111</div>
                        <div className="nav-dropdown-element phone"><Icons.FaMobile /> 050-323-9311</div>
                        <div className="nav-dropdown-element phone"><Icons.FaPhoneSquare /> 068-227-1489</div>
                        <button className="button">Chat order</button>
                    </div>
                </div>
                <div className="navbar-elements nav-link">About us</div>
                <div className="navbar-elements nav-link" onClick={this.scrollToFooter}>Contacts</div>
            </div>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch){
    return{
        actions: bindActionCreators(menuActions, dispatch)
    }
}

function mapStateToProps(state, ownProps){
    return {
        menuStatus: state.menuReducer
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar)