import initialState from './initialState'

export default function sliderSlide(state = initialState.slide, action){
    switch(action.type){
        case 'SLIDER_SLIDE':
            if(action.payload < 3){
                return action.payload + 1
            } else {
                return 0
            }
        case 'SLIDER_SLIDE_NEXT':
            if(action.payload + 1 > 3){
                return 0
            } else {
                return action.payload + 1
            }
        case 'SLIDER_SLIDE_PREVIOUS':
            if(action.payload - 1 < 0){
                return 3
            } else {
                return action.payload - 1 
            }
        default:
            return state
    }
}