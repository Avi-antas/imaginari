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


export const selfAdd = (selfCountReducer) => {
    console.log('check:',selfCountReducer)
    return{
        type:'SELF_ADD',
        payload: selfCountReducer
    }
}

export const selfRemove = (selfCountReducer) => {
    return{
        type:'SELF_REMOVE',
        payload: selfCountReducer
    }
}