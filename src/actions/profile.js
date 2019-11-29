import axios from 'axios'

const baseURL = "https://us-central1-missao-newton.cloudfunctions.net/rappi4"

const getToken = () => {
    return window.localStorage.getItem("token") || false;
}
export const setProfileAction = (user) => ({
    type: "SET_PROFILE",
    payload: {
        user
    }
})
export const setOrderHistory = (orders) => ({
    type: "SET_ORDER_HISTORY",
    payload: {
        orders
    }
})
export const fetchProfileAction = () => async (dispatch) => {
    const token = getToken();
    if (token) {
        try {
            const response = await axios.get(`${baseURL}/profile`, { headers: { auth: token } })
            dispatch(setProfileAction(response.data.user))
        } catch (error) {
            console.log(error, token)
        }
    }

}

export const fetchOrderHistory = () => async (dispatch) => {
    const token = getToken();
    if (token) {
        try {
            const response = await axios.get(`${baseURL}/orders/history`, { headers: { auth: token } })
            dispatch(setOrderHistory(response.data.orders))
        } catch (error) {
            console.log(error, token)
        }
    }
}
