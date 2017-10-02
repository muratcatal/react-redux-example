import { INCREASE_COUNTER, DECREASE_COUNTER } from "../actions/counter";

const initialState = {
  currentCounter: 0
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        currentCounter: state.currentCounter + action.number
      };
    case DECREASE_COUNTER:
      return {
        currentCounter: state.currentCounter - action.number
      };
    default:
      return state;
  }
};
