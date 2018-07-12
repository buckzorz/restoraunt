import initialState from './initialState'

export default function tableReserveReducer(state = initialState.reservedTables, action){
    switch(action.type){
        case 'RESERVE_TABLE':
            return action.payload
        default:
            return state
    }
}