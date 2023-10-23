export const add_to_cart = product => ({
    type : 'ADD_TO_CART',
    payload: product
})

export const remove_from_cart =  product => ({
    type:'REMOVE_FROM_CART',
    payload : product
})
export const initialize_cart =  data => ({
    type:'INITIALIZE_CART',
    payload: data
})

