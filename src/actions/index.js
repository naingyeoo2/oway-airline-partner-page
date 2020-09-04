import {
  LOAD_AIRLINES,
  LOAD_AIRLINES_SUCCESS,
  LOAD_AIRLINES_FAIL
} from "../constants/actionTypes";

export function loadAirlines() {
  return {
    type: LOAD_AIRLINES
  };
}

export function loadAirlilnesSuccess(payload) {
  return {
    type: LOAD_AIRLINES_SUCCESS,
    payload
  };
}

export function loadAirlinesFail(error) {
  return {
    type: LOAD_AIRLINES_FAIL,
    error
  };
}
