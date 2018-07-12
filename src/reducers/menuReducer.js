import initialState from './initialState'

export default function changeMenuState(state = initialState.showMenu, action){
    switch(action.type){
        case 'CHANGE_MENU_STATE':
            console.log(action.payload)
            return !action.payload
        default:
            return state
    }
}