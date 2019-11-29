import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import detailedRestaurant from './detailedRestaurant'

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    detailedRestaurant,
    // Outros reducers aqui
  });
