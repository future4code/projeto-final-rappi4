import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import detailedRestaurant from './detailedRestaurant'
import cart from "./cart";
import snackBar from './snackBar'
import { profile } from "./profile";


export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    detailedRestaurant,
    // Outros reducers aqui
    cart,
    snackBar,
    profile
  });
