import axios from "axios";
import { push } from "connected-react-router";
import { routes } from "../containers/Router";
import { snackBarOpen } from "./snackBar";

const baseURL = 'https://us-central1-missao-newton.cloudfunctions.net/rappi4/'
//TODO TESTE
const tokenPostman = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Im1pVWxJb2V5U3I1bU5ocTlmWUhVIiwibmFtZSI6Ikxlb25hcmRvIE5vZ3VlaXJhIiwiZW1haWwiOiJsZW9uYXJkb2NwbkBnbWFpbC5jb20iLCJjcGYiOiIxMjM0NTY3ODkxMiIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSdWEgYXp1bCwgMTc3LCAyIC0gVmVyZGUiLCJpYXQiOjE1NzQ5NDIwODN9.1r1qor-XSRCzmT0iTUaqZevg3UfvXogVTcKT9eY-PRk"
export const placeOrder = (order, restaurantId,paymentMethod ) => async dispatch => {
    const token = window.localStorage.getItem("token")
    restaurantId = 1;
    // TODO VINCULAR COM O ORDER
    const data = {
        products: [{
            id: "3vcYYSOEf8dKeTPd7vHe",
            quantity: 10
        }],
        paymentMethod: "creditcard"
    }
    try {
        const response = await axios.post(
            `${baseURL}restaurants/${restaurantId}/order`, data,
            {
                headers: {
                    auth: tokenPostman
                }
            }
        );
        const msg = `Pedido feito com sucesso!`
        const variant = 'success'
        dispatch(snackBarOpen(msg, variant))
        //A RESPOSTA SERÀ 
        // "order": {
        //     "totalPrice": 36,
        //     "restaurantName": "Habibs",
        //     "createdAt": 1574942400742,
        //     "expiresAt": 1574946000742
        // }
        //TODO AQUI PRECISA GUARDAR A RESPOSTA, OU TALVER IR PARA O LOGIN E LÀ ELE VE SE TEM
        //UMA ORDEM ATIVA SEMPRE Q LOGAR
        // const receipt = response.data
        dispatch(push(routes.feed));
    } catch (e) {
        const msg = `Ocorreu um erro : ${e}`
        const variant = 'error'
        dispatch(snackBarOpen(msg, variant))
        console.log("Erro no Pedido")
    }
};


