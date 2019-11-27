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
        console.log("Login feito com sucesso!")
        window.localStorage.setItem("token", response.data.token);
        dispatch(push(routes.feed));
    } catch (e) {
        window.alert(e.message)
        console.log("Erro no login")
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
        console.log("AUTH FUNCIONA, TOKEN SALVO!")
        dispatch(push(routes.address));
    } catch (e) {
        console.log("DEU RUIM NO AUTH")
        console.log(name, email, cpf, password)
        // window.alert(e.message)
    }
}; 