import { connect } from "react-redux";
import { Input as inputComponent } from "../components/Input";
import { incrementAmount as inputAction } from "../actions/input";

const mapStateToProps = state => {
  console.log("input container mapStateToProps", state);
  return state;
};

const mapDispatchToProps = dispatch => {
  return {
    onInputChanged: incrementAmount => {
      console.log("input container mapDispatchToProps", incrementAmount);
      dispatch(inputAction(incrementAmount));
    }
  };
};

const Input = connect(mapStateToProps, mapDispatchToProps)(inputComponent);

export default Input;
