import {
  LOAD_AIRLINES,
  LOAD_AIRLINES_SUCCESS,
  LOAD_AIRLINES_FAIL,
} from "../constants/actionTypes";
import { ofType } from "redux-observable";
import { delay, map } from "rxjs/operators";

export const loadAirlinesEpic = (action$) =>
  action$.pipe(
    ofType(LOAD_AIRLINES),
    delay(1000),
    map((action) => ({
      type: LOAD_AIRLINES_SUCCESS,
      payload: action.payload,
    }))
  );
