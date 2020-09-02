import {
  LOAD_AIRLINES,
  LOAD_AIRLINES_SUCCESS,
  LOAD_AIRLINES_FAIL,
} from "../constants/actionTypes";

const initialState = {
  isLoading: false,
  partner: [],
  error: null,
};

export const loadAirlinesReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_AIRLINES:
      return {
        initialState: {
          isLoading: true,
        },
      };
    case LOAD_AIRLINES_SUCCESS:
      return {
        initialState: {
          partner: action.payload,
          isLoading: false,
        },
      };
    case LOAD_AIRLINES_FAIL:
      return {
        initialState: {
          isLoading: false,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};
