import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import cart from "./cart";
import snackBar from './snackBar'
import { profile } from "./profile";


export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    cart,
    snackBar,
    profile
  });
