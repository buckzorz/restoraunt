import initalState from './initialState'

export default function foodReducer(state = initalState.food, action){
    switch(action.type){
        case 'LOAD_FOOD_SUCCESS':
            return [...state, action.payload]
        case 'LOAD_FOOD_FAIL':
            return state
        default: 
            return state
    }
}
