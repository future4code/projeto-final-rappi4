import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";

export const getPerfil = () => async dispatch => {
    const token = window.localStorage.getItem("token")
    const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/rappi4/profile",
        {
            token,
        }
    );
    console.log(response)


};

export const orderHistory = () => async dispatch => {
    const token = window.localStorage.getItem("token")
    const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/rappi4/signup",
        {
            token,
        }
    );

} 
}; 