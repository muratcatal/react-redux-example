import { combineReducers } from "redux";
import { counter } from "./counter";
import { input } from "./input";

const counterApp = combineReducers({
  counter,
  input
});

export default counterApp;
