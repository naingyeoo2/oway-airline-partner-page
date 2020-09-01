import {
  LOAD_AIRLINES,
  LOAD_AIRLINES_SUCCESS,
  LOAD_AIRLINES_FAIL,
} from "../constants/actionTypes";

const initialState = {
    isLoading: false,
    partner: [],
    error: null
}

export const loadAirlinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_AIRLINES:
      return state;
    case LOAD_AIRLINES_SUCCESS:
      return state + action.payload;
    case LOAD_AIRLINES_FAIL:
      return state + action.payload;
    default:
      return state;
  }
};
