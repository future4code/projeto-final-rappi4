import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { profile } from "./profile";

export const generateReducers = history =>
  combineReducers({
    router: connectRouter(history),
    profile
  });
