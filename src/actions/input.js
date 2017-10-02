const SET_INCREMENT_AMOUNT = "SET_INCREMENT_AMOUNT";

export const incrementAmount = incrementAmount => {
  return {
    type: "SET_INCREMENT_AMOUNT",
    incrementAmount
  };
};
