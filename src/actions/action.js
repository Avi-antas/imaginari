export const addToCart = (counterReducer) =>{
    return{
        type:'ADD_TO_CART',
        payload: counterReducer
    }
}

export const removeToCart = (counterReducer) =>{
    return{
        type:'REMOVE_TO_CART',
        payload: counterReducer
    }
}