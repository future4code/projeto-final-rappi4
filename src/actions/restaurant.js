
export const setProductQuantity = (id, quantity) => ({
    type: "SET_PRODUCT_QUANTITY",
    payload: {
        id,
        quantity,
    }  
})

export const removeProductFromCart = (id) => ({
    type: "REMOVE_PRODUCT_FROM_CART",
    payload: {
        id,
    }  
})