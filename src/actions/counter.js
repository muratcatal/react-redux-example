export const INCREASE_COUNTER = "INCREASE_COUNTER";
export const DECREASE_COUNTER = "DECREASE_COUNTER";

export const increaseCounter = number => {
  return {
    type: "INCREASE_COUNTER",
    number
  };
};

export const decreaseCounter = number => {
  return {
    type: "DECREASE_COUNTER",
    number
  };
};
