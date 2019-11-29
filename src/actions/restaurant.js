import axios from 'axios';

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/rappi4'

const getToken = () => {
    return window.localStorage.getItem("token") || false;
}

export const setProductQuantity = (id, quantity) => ({
    type: "SET_PRODUCT_QUANTITY",
    payload: {
        id,
        quantity,
    }  
});

export const removeProductFromCart = (id) => ({
    type: "REMOVE_PRODUCT_FROM_CART",
    payload: {
        id,
    }  
});

export const setAllRestaurants = (restaurants) => ({
    type: "SET_RESTAURANTS",
    payload: {
        restaurants,
    }  
});
export const setDetailedRestaurant = (restaurant) => ({
    type: "SET_DETAILED_RESTAURANT",
    payload: {
        restaurant,
    }  
});
export const fetchRestaurantsAction = () => async (dispatch) => {
    const token = getToken();
    if (token) {
        try {
            const response = await axios.get(`${baseURL}/restaurants`, { headers: { auth: token } })
            console.log(response.data)
            dispatch(setAllRestaurants(response.data.restaurants));
        } catch (error) {
            console.log(error)
        }
    }

}

export const fetchDetailedRestaurant = (id) => async (dispatch) => {
    const token = getToken();
    if (token) {
        try {
            const response = await axios.get(`${baseURL}/restaurants/${id}`, { headers: { auth: token } })
            dispatch(setDetailedRestaurant(response.data.restaurant));
        } catch (error) {
            console.log(error)
        }
    }

}

