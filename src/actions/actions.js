export function fetchFood(foodId){
    return function(dispatch){
        return fetch('http://localhost:3004/food/').then(response => {
            if(response.status === 404) 
                {
                    dispatch(loadFoodFail('Error, parcel not found'))
                    throw('error!')
                } 
                else 
                { 
                    return response.json()
                }}).catch(error => {
            throw(error)
        }).then(food => {
            dispatch(loadFoodSuccess(food))
        }).catch(error => {
            throw(error)
        })
    }
}
export function loadFoodSuccess(parcel){
    return {
        type: 'LOAD_FOOD_SUCCESS',
        payload: parcel
    }
}
export function loadFoodFail(error){
    return {
        type: 'LOAD_FOOD_FAIL',
        payload: error
    }
}
export function changeMenuState(menuState){
    return{
        type: 'CHANGE_MENU_STATE',
        payload: menuState
    }
}
export function sliderSlide(slide){
    return{
        type: 'SLIDER_SLIDE',
        payload: slide
    }
}
export function sliderSlideNext(slide){
    return{
        type: 'SLIDER_SLIDE_NEXT',
        payload: slide
    }
}
export function sliderSlidePrevious(slide){
    return{
        type: 'SLIDER_SLIDE_PREVIOUS',
        payload: slide
    }
}