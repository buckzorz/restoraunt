import React, { Component } from 'react'
import MenuItem from './MenuItem'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as foodActions from '../actions/actions'

class Menu extends Component{
    constructor(props){
        super(props)
    }
    
    componentDidMount(){
        this.props.actions.fetchFood()
    }
    render(){
        console.log(this.props)
        let specials = []
        let regular = []
        if(this.props.food[0]){
            
            regular = this.props.food[0].filter(item => item.special === false)
            specials = this.props.food[0].filter(item => item.special === true)
        }
        
        console.log(specials)
        return(
            <div className="menu">
                <div className="heading">MENU</div>
                {specials.length > 0 ? 
                        <div className="menu-items-container" id="special" >
                            {specials.map(item => {
                            return(
                                <MenuItem props={item} />
                            ) 
                        })}</div>: null}
                {regular.length > 0 ? 
                <div className="menu-items-container" id="regular">
                    {regular.map(item => {
                    return(
                        <MenuItem props={item} />
                    ) 
                })}</div>: null}
            </div>
        )
    }
}

function mapDipatchToProps(dispatch){
    return{
        actions: bindActionCreators(foodActions, dispatch)
    }
}

function mapStateToProps(state, ownProps){
    return{
        food: state.foodReducer
    }
}

export default connect(mapStateToProps, mapDipatchToProps)(Menu)