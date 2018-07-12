import { combineReducers } from 'redux'
import tableReserve from './tableReserveReducer'
import menuReducer from './menuReducer'
import sliderReducer from './sliderReducer'
import foodReducer from './foodReducer'

const rootReducer = combineReducers({
    tableReserve,
    menuReducer,
    sliderReducer,
    foodReducer
})

export default rootReducer