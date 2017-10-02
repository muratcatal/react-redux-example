const initialState = {
  incrementAmount: 1
};
export const input = (state = initialState, action) => {
  switch (action.type) {
    case "SET_INCREMENT_AMOUNT":
      return { incrementAmount: action.incrementAmount };
    default:
      return state;
  }
};
