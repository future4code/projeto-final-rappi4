const initialState = {
  products: [
    {
    id: "CnKdjU6CyKakQDGHzNln",
    category: "Salgado",
    price: "1",
    photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031404_66194495.jpg",
    name: "Bibsfiha carne",
    description: "Esfiha deliciosa, receita secreta do Habibs."
    },
    {
    id: "KJqMl2DxeShkSBevKVre",
    photoUrl: "https://www.sushimanscwb.com.br/wp-content/uploads/2018/10/1579_REFRIGERANTE_LATA_-_350ml_17d2e336feb44a2696fd6cf852c41b50-1.jpeg",
    name: "Refrigerante",
    description: "Coca cola, Sprite ou Guaraná",
    category: "Bebida",
    price: "4"
    },
    {
    id: "SmT6MYMm8QC8riHYApzt",
    name: "Batata Frita",
    description: "Batata frita crocante e sequinha.",
    category: "Acompanhamento",
    price: "9,50",
    photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031409_66194560.jpg"
    },
    {
    id: "V5VhD0xmsN7p1RvIDyhs",
    name: "Beirute",
    description: "",
    category: "Lanche",
    price: "22,90",
    photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031424_66194598.jpg"
    },
    {
    id: "ZrZm51AIbZ26MVAifuaJ",
    name: "Pizza",
    description: "",
    category: "Pizza",
    price: "31,90",
    photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031245_66194219.jpg"
    },
    {
    id: "dixrjmRJvcBER8pivj9X",
    name: "Bibsfiha queijo",
    description: "Esfiha deliciosa, receita secreta do Habibs.",
    category: "Salgado",
    price: "1",
    photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031403_66194479.jpg"
    },
    {
    id: "hYGe0I6HUpItn57SPINc",
    category: "Salgado",
    price: "1",
    photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907151009_76679579.jpg",
    name: "Bibsfiha frango",
    description: "Esfiha deliciosa, receita secreta do Habibs."
    },
    {
    id: "hwTEJXaj2mvR17oUTwm2",
    photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031439_71805445.jpg",
    name: "Suco",
    description: "Laranja, Acerola ou Maçã",
    category: "Bebida",
    price: "7,90"
    },
    {
    id: "po7B72myMyfKhtEe0mxv",
    name: "Kibe",
    description: "",
    category: "Salgado",
    price: "5,50",
    photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031407_66194536.jpg"
    },
    {
    id: "q38byozxbUUidlVmpSXa",
    name: "Pastel",
    description: "",
    category: "Pastel",
    price: "3",
    photoUrl: "https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/65c38aa8-b094-413d-9a80-ddc256bfcc78/201907031408_66194519.jpg"
    }
  ]
}


const detailedRestaurant = (state = initialState, action) => {
    switch (action.type) {
      case "SET_PRODUCT_QUANTITY":
          const getProductId = state.products.findIndex(product => product.id === action.payload.id);

          const newProduct = {...state.products[getProductId], quantity: action.payload.quantity};
          
          state.products[getProductId] = {...newProduct};

        return state;
      case "REMOVE_PRODUCT_FROM_CART":
          const productIdToRemoveFromCart = state.products.findIndex(product => product.id === action.payload.id);

          const productToRemove = {...state.products[productIdToRemoveFromCart], quantity: 0};

          console.log(productToRemove);
          
          state.products[productIdToRemoveFromCart] = {...productToRemove};

          const newState = {...state}

        return newState;
      default:
        return state;
    }
}

export default detailedRestaurant; 