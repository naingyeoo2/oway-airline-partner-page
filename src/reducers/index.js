import { combineReducers } from "redux";
import { loadAirlinesReducer } from "./loadAirline";


export const rootReducer = combineReducers(
    loadAirlinesReducer
)