const initialState = {
    order: "pedido",
    open: false,
    variant: '',
    msg: ''
}


const cart = (state = initialState, action) => {
    switch (action.type) {
        case "SET_ORDER":
            return { ...state, posts: action.payload.order }
        default:
            return state;
    }
}

export default cart 