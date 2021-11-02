import * as actionTypes from "./types/actionTypes";

export interface OldCounterState {
  value: number;
  status: "idle" | "loading" | "failed";
}

const initialState: OldCounterState = {
  value: 0,
  status: "idle",
};
const oldCounterReducer = (
  state = initialState,
  action: actionTypes.OldCounterActionTypes
): OldCounterState => {
  switch (action.type) {
    case actionTypes.INCREMENT: {
      const copyOfState = { ...state };
      return {
        ...state,
        value: copyOfState.value + 1,
      };
    }

    case actionTypes.DECREMENT: {
      const copyOfState = { ...state };
      return {
        ...state,
        value: copyOfState.value - 1,
      };
    }

    case actionTypes.INCREMENT_BY_AMOUNT: {
      const copyOfState = { ...state };
      return {
        ...state,
        value: copyOfState.value + action.amount,
      };
    }

    case actionTypes.INCREMENT_ASYNC_REQUEST:
      return {
        ...state,
        status: "loading",
      };

    case actionTypes.INCREMENT_ASYNC_SUCCESS: {
      const copyOfState = { ...state };
      return {
        ...state,
        status: "idle",
        value: copyOfState.value + action.amount,
      };
    }

    case actionTypes.INCREMENT_ASYNC_FAILURE:
      return {
        ...state,
        status: "failed",
      };

    default:
      return state;
  }
};

export default oldCounterReducer;
