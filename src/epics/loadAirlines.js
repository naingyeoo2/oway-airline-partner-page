import {
  LOAD_AIRLINES,
  LOAD_AIRLINES_SUCCESS,
  LOAD_AIRLINES_FAIL,
} from "../constants/actionTypes";
import { map, debounceTime, switchMap, catchError } from "rxjs/operators";
import { loadAirlilnesSuccess } from '../actions/index'
import { airlines } from '../constants/constants'

export const loadAirlinesEpic = (action$) =>
  action$.ofType(LOAD_AIRLINES).pipe(
    debounceTime(2000),
    map(()=>(
      loadAirlilnesSuccess(airlines)
    )),
    catchError((error) => ({
      type: LOAD_AIRLINES_FAIL,
      payload: error,
    }))
  );
