import { combineEpics } from "redux-observable";
import { loadAirlinesEpic } from "./loadAirlines";

export const rootEpic = combineEpics(
    loadAirlinesEpic
)