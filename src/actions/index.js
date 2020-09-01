import {
  LOAD_AIRLINES,
  LOAD_AIRLINES_SUCCESS,
  LOAD_AIRLINES_ERROR,
} from "../constants/actionTypes";

export function loadAirlines() {
  return {
    type: LOAD_AIRLINES,
  };
}

export function loadAirlilnesSuccess(partner) {
  return {
    type: LOAD_AIRLINES_SUCCESS,
    partner,
  };
}

export function loadAirlinesError(error) {
  return {
    type: LOAD_AIRLINES_ERROR,
    error,
  };
}
