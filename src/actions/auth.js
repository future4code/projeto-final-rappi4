import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

export const login = (email, password) => async dispatch => {
    try {
        const response = await axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/rappi4/login",
            {
                email,
                password
            }
        );
        window.localStorage.setItem("token", response.data.token);
        dispatch(push(routes.feed));
    } catch (e) {
        window.alert(e.message)
    }
};

export const signUp = (name, email, cpf, password) => async dispatch => {
    try {
        const response = await axios.post(
            "https://us-central1-missao-newton.cloudfunctions.net/rappi4/signup",
            {
                name,
                email,
                cpf,
                password
            }
        );
        window.localStorage.setItem("token", response.data.token);
        dispatch(push(routes.address));
    } catch (e) {
        window.alert(e.message)
    }
};

export const cadastro = (street, number, neighbourhood, city, state, complement) => async dispatch => {
    const token = window.localStorage.getItem("token");
    try {
        const response = await axios.put(
            "https://us-central1-missao-newton.cloudfunctions.net/rappi4/address",
            {
            street,
            number,
            neighbourhood,
            city,
            state,
            complement
        },
        {
            headers: {
                auth: token
            }
        }
        );
window.localStorage.setItem("token", response.data.token);
dispatch(push(routes.feed));
    } catch (e) {
    window.alert(e.message)
}
};