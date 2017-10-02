import { connect } from "react-redux";
import { ActionButton as actionButton } from "../components/ActionButton";
import { increaseCounter, decreaseCounter } from "../actions/counter";

const mapStateToProps = state => {
  console.log("actionbutton container mapstatetoProps", state);
  return {
    incrementAmount: state.input.incrementAmount
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onButtonClick: (number, buttonType) => {
      if (buttonType === "Increment") dispatch(increaseCounter(number));
      else dispatch(decreaseCounter(number));
    }
  };
};

const ActionButton = connect(mapStateToProps, mapDispatchToProps)(actionButton);

export default ActionButton;
