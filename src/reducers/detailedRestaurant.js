const initialState = {
  products: []
}


const detailedRestaurant = (state = initialState, action) => {
    switch (action.type) {
      case "SET_PRODUCT_QUANTITY":
          const getProductId = state.products.findIndex(product => product.id === action.payload.id);
          const newProduct = {...state.products[getProductId], quantity: action.payload.quantity};
          state.products[getProductId] = {...newProduct};
          const newState = {...state}
        return newState;
      case "REMOVE_PRODUCT_FROM_CART":
        return state;
      case "SET_DETAILED_RESTAURANT":
          return {...state, ...action.payload.restaurant};
      default:
        return state;
    }
}

export default detailedRestaurant; 