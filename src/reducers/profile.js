const initialState = {
    id: "",
    name: "Carregando...",
    email: "Carregando...",
    cpf: "Carregando...",
    hasAddress: false,
    address: "",
    orders: []
}

export const profile = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PROFILE":
            return {...state,...action.payload.user }
        case "SET_ORDER_HISTORY":
            return {...state,orders: action.payload.orders}
        default:
            return state
    }
}